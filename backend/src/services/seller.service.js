const prisma = require('../config/database')
const { slugify } = require('../utils/slugify')
const { paginate, paginatedResponse } = require('../utils/pagination')

async function getSellerByUserId(userId) {
  const seller = await prisma.seller.findUnique({ where: { userId } })
  if (!seller) throw new Error('Profil vendeur non trouvé')
  return seller
}

async function register(userId, data) {
  const existingUser = await prisma.user.findUnique({ where: { id: userId } })
  if (!existingUser) throw new Error('Utilisateur non trouvé')
  if (existingUser.role === 'seller') throw new Error('Vous êtes déjà vendeur')

  const existingSeller = await prisma.seller.findUnique({ where: { userId } })
  if (existingSeller) throw new Error('Un profil vendeur existe déjà pour ce compte')

  const slug = slugify(data.shopName)
  const slugExists = await prisma.seller.findUnique({ where: { slug } })
  if (slugExists) throw new Error('Ce nom de boutique est déjà pris')

  const seller = await prisma.$transaction(async (tx) => {
    const s = await tx.seller.create({
      data: {
        userId,
        shopName: data.shopName,
        slug,
        description: data.description || null,
        category: data.category,
        country: data.country,
        businessType: data.businessType || 'individual'
      }
    })

    await tx.user.update({ where: { id: userId }, data: { role: 'seller' } })

    return s
  })

  return seller
}

async function getDashboard(userId) {
  const seller = await getSellerByUserId(userId)

  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()))

  const sellerId = seller.id
  const [
    totalProducts,
    activeProducts,
    monthlyOrders,
    monthlyRevenue,
    totalOrders,
    pendingOrders,
    recentOrders,
    lowStockProducts
  ] = await Promise.all([
    prisma.product.count({ where: { sellerId } }),
    prisma.product.count({ where: { sellerId, status: 'active' } }),
    prisma.orderItem.findMany({
      where: { sellerId, createdAt: { gte: startOfMonth } },
      select: { totalPrice: true, commission: true, quantity: true, createdAt: true }
    }),
    prisma.orderItem.aggregate({
      where: { sellerId, createdAt: { gte: startOfMonth } },
      _sum: { totalPrice: true, commission: true }
    }),
    prisma.orderItem.findMany({
      where: { sellerId },
      select: { orderId: true },
      distinct: ['orderId']
    }),
    prisma.orderItem.findMany({
      where: { sellerId, status: 'pending' },
      select: { orderId: true },
      distinct: ['orderId']
    }),
    prisma.orderItem.findMany({
      where: { sellerId },
      include: {
        order: { select: { id: true, orderNumber: true, createdAt: true, status: true } },
        product: { select: { name: true, slug: true } }
      },
      orderBy: { createdAt: 'desc' },
      take: 10
    }),
    prisma.product.findMany({
      where: { sellerId, status: 'active', stock: { lte: 5 } },
      select: { id: true, name: true, slug: true, stock: true, lowStockThreshold: true }
    })
  ])

  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const dailySales = []
  for (let i = 1; i <= daysInMonth; i++) {
    const dayStart = new Date(now.getFullYear(), now.getMonth(), i)
    const dayEnd = new Date(now.getFullYear(), now.getMonth(), i + 1)
    const dayItems = monthlyOrders.filter(o => o.createdAt >= dayStart && o.createdAt < dayEnd)
    dailySales.push({
      date: dayStart.toISOString().split('T')[0],
      orders: dayItems.length,
      revenue: dayItems.reduce((sum, i) => sum + Number(i.totalPrice), 0)
    })
  }

  return {
    stats: {
      totalProducts,
      activeProducts,
      totalOrders: totalOrders.length,
      pendingOrders: pendingOrders.length,
      monthlyOrders: monthlyOrders.length,
      monthlyRevenue: Number(monthlyRevenue._sum.totalPrice || 0),
      monthlyCommission: Number(monthlyRevenue._sum.commission || 0),
      averageOrderValue: monthlyOrders.length > 0
        ? monthlyOrders.reduce((sum, i) => sum + Number(i.totalPrice), 0) / monthlyOrders.length
        : 0
    },
    recentOrders,
    lowStockProducts,
    charts: { dailySales }
  }
}

async function getShop(userId) {
  const seller = await prisma.seller.findUnique({
    where: { userId },
    include: {
      user: { select: { id: true, name: true, email: true, avatar: true } },
      _count: { select: { products: { where: { status: 'active' } } } }
    }
  })
  if (!seller) throw new Error('Profil vendeur non trouvé')
  return { ...seller, productCount: seller._count.products }
}

async function updateShop(userId, data) {
  const seller = await getSellerByUserId(userId)

  const updateData = {}
  if (data.shopName !== undefined) {
    updateData.shopName = data.shopName
    updateData.slug = slugify(data.shopName)
  }
  if (data.description !== undefined) updateData.description = data.description
  if (data.logo !== undefined) updateData.logo = data.logo
  if (data.banner !== undefined) updateData.banner = data.banner
  if (data.category !== undefined) updateData.category = data.category
  if (data.country !== undefined) updateData.country = data.country
  if (data.businessType !== undefined) updateData.businessType = data.businessType

  return prisma.seller.update({ where: { id: seller.id }, data: updateData })
}

async function getProducts(userId, filters = {}) {
  const seller = await getSellerByUserId(userId)
  const { page = 1, limit = 20, status, search, sortBy = 'createdAt', sortOrder = 'desc' } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = { sellerId: seller.id }
  if (status) where.status = status
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { sku: { contains: search, mode: 'insensitive' } }
    ]
  }

  const allowedSort = ['createdAt', 'price', 'stock', 'salesCount', 'name']
  const orderBy = allowedSort.includes(sortBy) ? { [sortBy]: sortOrder } : { createdAt: 'desc' }

  const [data, total] = await Promise.all([
    prisma.product.findMany({
      where,
      include: {
        images: { where: { isPrimary: true }, take: 1, select: { url: true } },
        category: { select: { name: true, slug: true } },
        _count: { select: { variants: true, orderItems: true } }
      },
      orderBy,
      skip, take
    }),
    prisma.product.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function createProduct(userId, data) {
  const seller = await getSellerByUserId(userId)

  const slug = slugify(data.name)
  const existing = await prisma.product.findUnique({ where: { slug } })
  if (existing) throw new Error('Un produit avec ce nom existe déjà')

  const product = await prisma.product.create({
    data: {
      sellerId: seller.id,
      categoryId: data.categoryId,
      name: data.name,
      slug,
      description: data.description,
      shortDescription: data.shortDescription || null,
      price: Number(data.price),
      compareAtPrice: data.compareAtPrice ? Number(data.compareAtPrice) : null,
      costPrice: data.costPrice ? Number(data.costPrice) : null,
      sku: data.sku || null,
      barcode: data.barcode || null,
      stock: data.stock || 0,
      lowStockThreshold: data.lowStockThreshold || 5,
      weight: data.weight ? Number(data.weight) : null,
      dimensions: data.dimensions || null,
      status: data.status || 'draft',
      tags: data.tags || [],
      metaTitle: data.metaTitle || null,
      metaDescription: data.metaDescription || null
    },
    include: {
      images: true,
      variants: true,
      category: { select: { id: true, name: true, slug: true } }
    }
  })

  if (data.variants && data.variants.length > 0) {
    await prisma.productVariant.createMany({
      data: data.variants.map(v => ({
        productId: product.id,
        name: v.name,
        sku: v.sku || null,
        price: Number(v.price),
        stock: v.stock || 0,
        attributes: v.attributes || null
      }))
    })
  }

  if (data.status === 'active') {
    await prisma.product.update({ where: { id: product.id }, data: { publishedAt: new Date() } })
  }

  return prisma.product.findUnique({ where: { id: product.id }, include: { images: true, variants: true, category: { select: { name: true } } } })
}

async function updateProduct(id, userId, data) {
  const seller = await getSellerByUserId(userId)
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')
  if (product.sellerId !== seller.id) throw new Error('Non autorisé à modifier ce produit')

  const updateData = {}
  if (data.name !== undefined) { updateData.name = data.name; updateData.slug = slugify(data.name) }
  if (data.description !== undefined) updateData.description = data.description
  if (data.shortDescription !== undefined) updateData.shortDescription = data.shortDescription
  if (data.price !== undefined) updateData.price = Number(data.price)
  if (data.compareAtPrice !== undefined) updateData.compareAtPrice = data.compareAtPrice ? Number(data.compareAtPrice) : null
  if (data.costPrice !== undefined) updateData.costPrice = data.costPrice ? Number(data.costPrice) : null
  if (data.sku !== undefined) updateData.sku = data.sku
  if (data.barcode !== undefined) updateData.barcode = data.barcode
  if (data.stock !== undefined) updateData.stock = data.stock
  if (data.lowStockThreshold !== undefined) updateData.lowStockThreshold = data.lowStockThreshold
  if (data.weight !== undefined) updateData.weight = data.weight ? Number(data.weight) : null
  if (data.dimensions !== undefined) updateData.dimensions = data.dimensions
  if (data.status !== undefined) {
    updateData.status = data.status
    if (data.status === 'active' && !product.publishedAt) updateData.publishedAt = new Date()
  }
  if (data.tags !== undefined) updateData.tags = data.tags
  if (data.metaTitle !== undefined) updateData.metaTitle = data.metaTitle
  if (data.metaDescription !== undefined) updateData.metaDescription = data.metaDescription
  if (data.categoryId !== undefined) updateData.categoryId = data.categoryId

  if (data.variants) {
    await prisma.productVariant.deleteMany({ where: { productId: id } })
    if (data.variants.length > 0) {
      await prisma.productVariant.createMany({
        data: data.variants.map(v => ({
          productId: id,
          name: v.name,
          sku: v.sku || null,
          price: Number(v.price),
          stock: v.stock || 0,
          attributes: v.attributes || null
        }))
      })
    }
  }

  return prisma.product.update({ where: { id }, data: updateData, include: { images: true, variants: true } })
}

async function deleteProduct(id, userId) {
  const seller = await getSellerByUserId(userId)
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')
  if (product.sellerId !== seller.id) throw new Error('Non autorisé à supprimer ce produit')

  const hasOrders = await prisma.orderItem.findFirst({ where: { productId: id } })
  if (hasOrders) {
    await prisma.product.update({ where: { id }, data: { status: 'archived' } })
    return { message: 'Produit archivé (des commandes existent pour ce produit)' }
  }

  await prisma.product.delete({ where: { id } })
  return { message: 'Produit supprimé avec succès' }
}

async function getOrders(userId, filters = {}) {
  const seller = await getSellerByUserId(userId)
  const { page = 1, limit = 20, status } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const sellerItems = await prisma.orderItem.findMany({
    where: { sellerId: seller.id },
    select: { orderId: true }
  })
  const orderIds = [...new Set(sellerItems.map(i => i.orderId))]

  const where = { id: { in: orderIds } }
  if (status) where.status = status

  const [data, total] = await Promise.all([
    prisma.order.findMany({
      where,
      include: {
        items: { where: { sellerId: seller.id }, include: { product: { select: { name: true } } } },
        buyer: { select: { id: true, name: true, email: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip, take
    }),
    prisma.order.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function getOrderDetail(id, userId) {
  const seller = await getSellerByUserId(userId)
  const order = await prisma.order.findUnique({ where: { id } })
  if (!order) throw new Error('Commande non trouvée')

  const items = await prisma.orderItem.findMany({
    where: { orderId: id, sellerId: seller.id },
    include: {
      product: { select: { id: true, slug: true, images: { where: { isPrimary: true }, take: 1, select: { url: true } } } },
      variant: { select: { id: true, name: true, attributes: true } }
    }
  })

  if (items.length === 0) throw new Error('Aucun article de cette commande ne vous appartient')

  return {
    ...order,
    items,
    buyer: await prisma.user.findUnique({
      where: { id: order.buyerId },
      select: { id: true, name: true, email: true, phone: true }
    }),
    address: await prisma.address.findUnique({ where: { id: order.addressId } })
  }
}

async function updateOrderStatus(id, userId, status) {
  const seller = await getSellerByUserId(userId)
  const item = await prisma.orderItem.findFirst({ where: { id, sellerId: seller.id } })
  if (!item) throw new Error('Article non trouvé ou non autorisé')

  await prisma.orderItem.update({ where: { id }, data: { status } })

  if (status === 'shipped') {
    const order = await prisma.order.findUnique({ where: { id: item.orderId } })
    if (order && order.status === 'confirmed') {
      await prisma.order.update({ where: { id: item.orderId }, data: { status: 'processing' } })
    }
  }

  return prisma.orderItem.findUnique({ where: { id } })
}

async function getAnalytics(userId, period = '30d') {
  const seller = await getSellerByUserId(userId)
  const now = new Date()
  let startDate

  switch (period) {
    case '7d': startDate = new Date(now - 7 * 24 * 60 * 60 * 1000); break
    case '90d': startDate = new Date(now - 90 * 24 * 60 * 60 * 1000); break
    case '1y': startDate = new Date(now - 365 * 24 * 60 * 60 * 1000); break
    default: startDate = new Date(now - 30 * 24 * 60 * 60 * 1000)
  }

  const sellerId = seller.id
  const [revenue, topProducts, recentSales] = await Promise.all([
    prisma.orderItem.aggregate({
      where: { sellerId, createdAt: { gte: startDate } },
      _sum: { totalPrice: true, commission: true },
      _count: true
    }),
    prisma.orderItem.groupBy({
      by: ['productId'],
      where: { sellerId, createdAt: { gte: startDate } },
      _sum: { totalPrice: true, quantity: true },
      _count: true,
      orderBy: { _sum: { totalPrice: 'desc' } },
      take: 10
    }),
    prisma.orderItem.findMany({
      where: { sellerId, createdAt: { gte: startDate } },
      select: { createdAt: true, totalPrice: true, quantity: true }
    })
  ])

  const topProductIds = topProducts.map(p => p.productId)
  const topProductDetails = topProductIds.length > 0
    ? await prisma.product.findMany({
        where: { id: { in: topProductIds } },
        select: { id: true, name: true, slug: true }
      })
    : []

  const enrichedTopProducts = topProducts.map(tp => ({
    ...tp,
    product: topProductDetails.find(p => p.id === tp.productId)
  }))

  return {
    summary: {
      totalRevenue: Number(revenue._sum.totalPrice || 0),
      totalCommission: Number(revenue._sum.commission || 0),
      netRevenue: Number(revenue._sum.totalPrice || 0) - Number(revenue._sum.commission || 0),
      totalOrders: revenue._count,
      period,
      startDate,
      endDate: now
    },
    topProducts: enrichedTopProducts,
    salesTimeline: recentSales
  }
}

async function getPayouts(userId) {
  const seller = await getSellerByUserId(userId)
  return prisma.payout.findMany({
    where: { sellerId: seller.id },
    orderBy: { createdAt: 'desc' }
  })
}

async function updateBankAccount(userId, data) {
  const seller = await getSellerByUserId(userId)

  return prisma.seller.update({
    where: { id: seller.id },
    data: { bankAccountJson: data }
  })
}

module.exports = {
  register,
  getDashboard,
  getShop,
  updateShop,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOrders,
  getOrderDetail,
  updateOrderStatus,
  getAnalytics,
  getPayouts,
  updateBankAccount
}

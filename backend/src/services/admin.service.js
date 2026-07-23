const prisma = require('../config/database')
const { paginate, paginatedResponse } = require('../utils/pagination')
const { v4: uuidv4 } = require('uuid')

async function getDashboard() {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0)

  const [
    totalUsers,
    totalSellers,
    totalProducts,
    activeProducts,
    totalOrders,
    monthlyOrders,
    monthlyRevenue,
    pendingOrders,
    pendingProducts,
    openTickets,
    totalRevenue,
    recentOrders,
    newUsersThisMonth,
    newUsersLastMonth
  ] = await Promise.all([
    prisma.user.count(),
    prisma.seller.count(),
    prisma.product.count(),
    prisma.product.count({ where: { status: 'active' } }),
    prisma.order.count(),
    prisma.order.count({ where: { createdAt: { gte: startOfMonth } } }),
    prisma.order.aggregate({ where: { createdAt: { gte: startOfMonth }, status: { in: ['confirmed', 'processing', 'shipped', 'delivered'] } }, _sum: { totalAmount: true } }),
    prisma.order.count({ where: { status: 'pending' } }),
    prisma.product.count({ where: { status: 'draft' } }),
    prisma.supportTicket.count({ where: { status: { in: ['open', 'in_progress'] } } }),
    prisma.order.aggregate({ where: { status: { in: ['confirmed', 'processing', 'shipped', 'delivered'] } }, _sum: { totalAmount: true } }),
    prisma.order.findMany({
      include: { buyer: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
      take: 10
    }),
    prisma.user.count({ where: { createdAt: { gte: startOfMonth } } }),
    prisma.user.count({ where: { createdAt: { gte: startOfLastMonth, lte: endOfLastMonth } } })
  ])

  const monthlyPayouts = await prisma.payout.aggregate({
    where: { createdAt: { gte: startOfMonth }, status: 'completed' },
    _sum: { amount: true }
  })

  const userGrowthPercent = newUsersLastMonth > 0
    ? ((newUsersThisMonth - newUsersLastMonth) / newUsersLastMonth * 100).toFixed(1)
    : newUsersThisMonth > 0 ? 100 : 0

  return {
    stats: {
      totalUsers,
      totalSellers,
      totalProducts,
      activeProducts,
      totalOrders,
      monthlyOrders,
      monthlyRevenue: Number(monthlyRevenue._sum.totalAmount || 0),
      totalRevenue: Number(totalRevenue._sum.totalAmount || 0),
      pendingOrders,
      pendingProducts,
      openTickets,
      monthlyPayouts: Number(monthlyPayouts._sum.amount || 0),
      platformFees: Number(monthlyRevenue._sum.totalAmount || 0) - Number(monthlyPayouts._sum.amount || 0),
      newUsersThisMonth,
      userGrowthPercent: Number(userGrowthPercent)
    },
    recentOrders
  }
}

async function getUsers(filters = {}) {
  const { page = 1, limit = 20, role, status, search, sortBy = 'createdAt', sortOrder = 'desc' } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = {}
  if (role) where.role = role
  if (status) where.status = status
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
      { phone: { contains: search, mode: 'insensitive' } }
    ]
  }

  const allowedSort = ['createdAt', 'name', 'email', 'lastLoginAt']
  const orderBy = allowedSort.includes(sortBy) ? { [sortBy]: sortOrder } : { createdAt: 'desc' }

  const [data, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: {
        id: true, name: true, email: true, phone: true, avatar: true,
        role: true, status: true, emailVerified: true, lastLoginAt: true, createdAt: true,
        _count: { select: { orders: true } }
      },
      orderBy,
      skip, take
    }),
    prisma.user.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function getUserDetail(id) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true, name: true, email: true, phone: true, avatar: true,
      role: true, status: true, emailVerified: true, lastLoginAt: true, createdAt: true,
      seller: { select: { id: true, shopName: true, slug: true, verified: true, totalSales: true } }
    }
  })
  if (!user) throw new Error('Utilisateur non trouvé')

  const [addresses, recentOrders] = await Promise.all([
    prisma.address.findMany({ where: { userId: id } }),
    prisma.order.findMany({
      where: { buyerId: id },
      include: { items: { select: { productName: true, quantity: true, totalPrice: true } } },
      orderBy: { createdAt: 'desc' },
      take: 10
    })
  ])

  return { ...user, addresses, recentOrders }
}

async function updateUserStatus(id, status) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new Error('Utilisateur non trouvé')
  if (user.role === 'admin') throw new Error('Impossible de modifier le statut d\'un administrateur')

  return prisma.user.update({
    where: { id },
    data: { status },
    select: { id: true, name: true, email: true, role: true, status: true }
  })
}

async function updateUserRole(id, role) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new Error('Utilisateur non trouvé')
  if (user.role === 'admin') throw new Error('Impossible de modifier le rôle d\'un administrateur')

  const updateData = { role }
  if (role === 'seller') {
    const existingSeller = await prisma.seller.findUnique({ where: { userId: id } })
    if (!existingSeller) throw new Error('Cet utilisateur n\'a pas de profil vendeur')
  }

  return prisma.user.update({
    where: { id },
    data: updateData,
    select: { id: true, name: true, email: true, role: true, status: true }
  })
}

async function getProducts(filters = {}) {
  const { page = 1, limit = 20, status, categoryId, search, sortBy = 'createdAt', sortOrder = 'desc' } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = {}
  if (status) where.status = status
  if (categoryId) where.categoryId = categoryId
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
        seller: { select: { id: true, shopName: true } },
        category: { select: { id: true, name: true } },
        images: { where: { isPrimary: true }, take: 1, select: { url: true } },
        _count: { select: { reviews: true } }
      },
      orderBy,
      skip, take
    }),
    prisma.product.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function moderateProduct(id, action) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')

  let status
  switch (action) {
    case 'approve': status = 'active'; break
    case 'reject': status = 'inactive'; break
    case 'suspend': status = 'suspended'; break
    default: throw new Error('Action invalide')
  }

  return prisma.product.update({
    where: { id },
    data: { status, publishedAt: status === 'active' ? new Date() : product.publishedAt }
  })
}

async function getOrders(filters = {}) {
  const { page = 1, limit = 20, status, search, sortBy = 'createdAt', sortOrder = 'desc' } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = {}
  if (status) where.status = status
  if (search) {
    where.OR = [
      { orderNumber: { contains: search, mode: 'insensitive' } },
      { buyer: { name: { contains: search, mode: 'insensitive' } } },
      { buyer: { email: { contains: search, mode: 'insensitive' } } }
    ]
  }

  const allowedSort = ['createdAt', 'totalAmount', 'status']
  const orderBy = allowedSort.includes(sortBy) ? { [sortBy]: sortOrder } : { createdAt: 'desc' }

  const [data, total] = await Promise.all([
    prisma.order.findMany({
      where,
      include: {
        buyer: { select: { id: true, name: true, email: true } },
        items: { select: { productName: true, quantity: true, totalPrice: true } }
      },
      orderBy,
      skip, take
    }),
    prisma.order.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function updateOrderStatus(id, status) {
  const order = await prisma.order.findUnique({ where: { id } })
  if (!order) throw new Error('Commande non trouvée')

  const updateData = { status }
  if (status === 'cancelled') updateData.cancelledAt = new Date()
  if (status === 'delivered') updateData.deliveredAt = new Date()
  if (status === 'shipped') updateData.shippedAt = new Date()

  const updated = await prisma.order.update({ where: { id }, data: updateData })

  if (status === 'cancelled') {
    const items = await prisma.orderItem.findMany({ where: { orderId: id } })
    for (const item of items) {
      await prisma.orderItem.update({ where: { id: item.id }, data: { status: 'cancelled' } })
      if (item.variantId) {
        await prisma.productVariant.update({ where: { id: item.variantId }, data: { stock: { increment: item.quantity } } })
      } else {
        await prisma.product.update({ where: { id: item.productId }, data: { stock: { increment: item.quantity }, salesCount: { decrement: item.quantity } } })
      }
    }
  } else {
    await prisma.orderItem.updateMany({ where: { orderId: id }, data: { status } })
  }

  return updated
}

async function refundOrder(id, data, adminId) {
  const { amount, reason } = data

  const payment = await prisma.payment.findFirst({
    where: { orderId: id, status: 'completed' },
    orderBy: { createdAt: 'desc' }
  })
  if (!payment) throw new Error('Aucun paiement complété trouvé pour cette commande')

  const refundAmount = amount ? Math.min(Number(amount), Number(payment.amount) - Number(payment.refundAmount)) : Number(payment.amount) - Number(payment.refundAmount)
  const newRefundTotal = Number(payment.refundAmount) + refundAmount
  const newStatus = newRefundTotal >= Number(payment.amount) ? 'refunded' : 'partially_refunded'

  await prisma.payment.update({
    where: { id: payment.id },
    data: {
      refundAmount: newRefundTotal,
      refundReason: reason || null,
      status: newStatus,
      metadata: { ...payment.metadata, refundAdminId: adminId, lastRefundAt: new Date().toISOString() }
    }
  })

  if (newStatus === 'refunded') {
    await prisma.order.update({ where: { id }, data: { status: 'refunded' } })
    const items = await prisma.orderItem.findMany({ where: { orderId: id } })
    for (const item of items) {
      await prisma.orderItem.update({ where: { id: item.id }, data: { status: 'refunded' } })
      if (item.variantId) {
        await prisma.productVariant.update({ where: { id: item.variantId }, data: { stock: { increment: item.quantity } } })
      } else {
        await prisma.product.update({ where: { id: item.productId }, data: { stock: { increment: item.quantity } } })
      }
    }
  }

  return prisma.payment.findUnique({ where: { id: payment.id } })
}

async function getReports(type, params = {}) {
  const now = new Date()
  const startDate = params.startDate || new Date(now - 30 * 24 * 60 * 60 * 1000)
  const endDate = params.endDate || now

  switch (type) {
    case 'sales': {
      const [salesData, topProducts, topSellers] = await Promise.all([
        prisma.order.aggregate({
          where: { createdAt: { gte: startDate, lte: endDate }, status: { in: ['confirmed', 'processing', 'shipped', 'delivered'] } },
          _sum: { totalAmount: true, shippingCost: true, taxAmount: true, discountAmount: true },
          _count: true
        }),
        prisma.orderItem.groupBy({
          by: ['productId'],
          where: { createdAt: { gte: startDate, lte: endDate } },
          _sum: { totalPrice: true, quantity: true },
          orderBy: { _sum: { totalPrice: 'desc' } },
          take: 10
        }),
        prisma.orderItem.groupBy({
          by: ['sellerId'],
          where: { createdAt: { gte: startDate, lte: endDate } },
          _sum: { totalPrice: true, commission: true },
          orderBy: { _sum: { totalPrice: 'desc' } },
          take: 10
        })
      ])

      const productIds = topProducts.map(p => p.productId)
      const sellerIds = topSellers.map(s => s.sellerId)
      const [productDetails, sellerDetails] = await Promise.all([
        productIds.length > 0 ? prisma.product.findMany({ where: { id: { in: productIds } }, select: { id: true, name: true } }) : [],
        sellerIds.length > 0 ? prisma.seller.findMany({ where: { id: { in: sellerIds } }, select: { id: true, shopName: true } }) : []
      ])

      return {
        summary: {
          totalSales: Number(salesData._sum.totalAmount || 0),
          totalOrders: salesData._count,
          totalShipping: Number(salesData._sum.shippingCost || 0),
          totalTax: Number(salesData._sum.taxAmount || 0),
          totalDiscounts: Number(salesData._sum.discountAmount || 0),
          period: { startDate, endDate }
        },
        topProducts: topProducts.map(tp => ({
          ...tp,
          product: productDetails.find(p => p.id === tp.productId)
        })),
        topSellers: topSellers.map(ts => ({
          ...ts,
          seller: sellerDetails.find(s => s.id === ts.sellerId)
        }))
      }
    }

    case 'users': {
      const [userStats, roleDistribution, registrations] = await Promise.all([
        prisma.user.aggregate({
          where: { createdAt: { gte: startDate, lte: endDate } },
          _count: true
        }),
        prisma.user.groupBy({
          by: ['role'],
          _count: true
        }),
        prisma.user.findMany({
          where: { createdAt: { gte: startDate, lte: endDate } },
          select: { createdAt: true },
          orderBy: { createdAt: 'asc' }
        })
      ])

      return {
        summary: { totalNewUsers: userStats._count, period: { startDate, endDate } },
        roleDistribution,
        registrations
      }
    }

    case 'products': {
      const [productStats, categoryDistribution, statusDistribution] = await Promise.all([
        prisma.product.aggregate({
          where: { createdAt: { gte: startDate, lte: endDate } },
          _sum: { salesCount: true, viewCount: true },
          _avg: { price: true },
          _count: true
        }),
        prisma.product.groupBy({
          by: ['categoryId'],
          where: { createdAt: { gte: startDate, lte: endDate } },
          _count: true,
          orderBy: { _count: { categoryId: 'desc' } },
          take: 10
        }),
        prisma.product.groupBy({
          by: ['status'],
          _count: true
        })
      ])

      return {
        summary: {
          totalProducts: productStats._count,
          totalSales: productStats._sum.salesCount || 0,
          totalViews: productStats._sum.viewCount || 0,
          averagePrice: Number(productStats._avg.price || 0),
          period: { startDate, endDate }
        },
        categoryDistribution,
        statusDistribution
      }
    }

    default:
      throw new Error('Type de rapport invalide')
  }
}

async function getSettings() {
  const settings = await prisma.systemSetting.findMany()
  const result = {}
  settings.forEach(s => { result[s.key] = s.value })
  return result
}

async function updateSettings(data) {
  const updates = []
  for (const [key, value] of Object.entries(data)) {
    updates.push(
      prisma.systemSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value }
      })
    )
  }
  await Promise.all(updates)

  const settings = await prisma.systemSetting.findMany()
  const result = {}
  settings.forEach(s => { result[s.key] = s.value })
  return result
}

module.exports = {
  getDashboard,
  getUsers,
  getUserDetail,
  updateUserStatus,
  updateUserRole,
  getProducts,
  moderateProduct,
  getOrders,
  updateOrderStatus,
  refundOrder,
  getReports,
  getSettings,
  updateSettings
}

const prisma = require('../config/database')
const { slugify } = require('../utils/slugify')
const { paginate, paginatedResponse } = require('../utils/pagination')

const productInclude = {
  images: { orderBy: { sortOrder: 'asc' } },
  variants: { orderBy: { createdAt: 'asc' } },
  seller: { select: { id: true, shopName: true, slug: true, logo: true, rating: true, verified: true } },
  category: { select: { id: true, name: true, slug: true } }
}

const SORT_MAP = {
  newest: { sortBy: 'createdAt', sortOrder: 'desc' },
  price_asc: { sortBy: 'price', sortOrder: 'asc' },
  price_desc: { sortBy: 'price', sortOrder: 'desc' },
  rating: { sortBy: 'averageRating', sortOrder: 'desc' },
  popularity: { sortBy: 'salesCount', sortOrder: 'desc' },
}

async function getAll(filters = {}) {
  let { page = 1, limit = 20, category, categoryId, minPrice, maxPrice, search, status, sortBy, sortOrder, sort } = filters
  if (sort && SORT_MAP[sort]) { sortBy = SORT_MAP[sort].sortBy; sortOrder = SORT_MAP[sort].sortOrder }
  if (!sortBy) sortBy = 'createdAt'
  if (!sortOrder) sortOrder = 'desc'

  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = { status: 'active' }

  if (categoryId) {
    where.categoryId = categoryId
  } else if (category) {
    const cat = await prisma.category.findFirst({ where: { slug: category } })
    if (cat) where.categoryId = cat.id
    else { return { data: [], meta: { page: p, limit: l, total: 0, totalPages: 0 } } }
  }

  if (minPrice || maxPrice) {
    where.price = {}
    if (minPrice) where.price.gte = Number(minPrice)
    if (maxPrice) where.price.lte = Number(maxPrice)
  }
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { tags: { has: search } }
    ]
  }

  const allowedSort = ['createdAt', 'price', 'averageRating', 'salesCount', 'name']
  const orderBy = allowedSort.includes(sortBy) ? { [sortBy]: sortOrder } : { createdAt: 'desc' }

  const [data, total] = await Promise.all([
    prisma.product.findMany({ where, include: productInclude, orderBy, skip, take }),
    prisma.product.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function getById(id) {
  const product = await prisma.product.findUnique({ where: { id }, include: productInclude })
  if (!product) throw new Error('Produit non trouvé')

  await prisma.product.update({ where: { id }, data: { viewCount: { increment: 1 } } })

  return product
}

async function getBySlug(slug) {
  const product = await prisma.product.findUnique({ where: { slug }, include: productInclude })
  if (!product) throw new Error('Produit non trouvé')

  await prisma.product.update({ where: { id: product.id }, data: { viewCount: { increment: 1 } } })

  return product
}

async function getByCategory(categorySlug, filters = {}) {
  const category = await prisma.category.findUnique({ where: { slug: categorySlug } })
  if (!category) throw new Error('Catégorie non trouvée')

  return getAll({ ...filters, categoryId: category.id })
}

async function search(query, filters = {}) {
  if (!query || query.trim().length === 0) throw new Error('Le terme de recherche est requis')

  const { page = 1, limit = 20, minPrice, maxPrice, categoryId, sortBy = 'createdAt', sortOrder = 'desc' } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = {
    status: 'active',
    OR: [
      { name: { contains: query, mode: 'insensitive' } },
      { description: { contains: query, mode: 'insensitive' } },
      { shortDescription: { contains: query, mode: 'insensitive' } },
      { tags: { has: query } },
      { sku: { contains: query, mode: 'insensitive' } }
    ]
  }

  if (categoryId) where.categoryId = categoryId
  if (minPrice || maxPrice) {
    where.price = {}
    if (minPrice) where.price.gte = Number(minPrice)
    if (maxPrice) where.price.lte = Number(maxPrice)
  }

  const allowedSort = ['createdAt', 'price', 'averageRating', 'salesCount']
  const orderBy = allowedSort.includes(sortBy) ? { [sortBy]: sortOrder } : { createdAt: 'desc' }

  const [data, total] = await Promise.all([
    prisma.product.findMany({ where, include: productInclude, orderBy, skip, take }),
    prisma.product.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function getFeatured() {
  return prisma.product.findMany({
    where: { status: 'active', featured: true },
    include: productInclude,
    orderBy: { createdAt: 'desc' },
    take: 12
  })
}

async function getTrending() {
  return prisma.product.findMany({
    where: { status: 'active', trending: true },
    include: productInclude,
    orderBy: { salesCount: 'desc' },
    take: 12
  })
}

async function getNew() {
  return prisma.product.findMany({
    where: { status: 'active' },
    include: productInclude,
    orderBy: { createdAt: 'desc' },
    take: 12
  })
}

async function getRelated(id) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')

  return prisma.product.findMany({
    where: { categoryId: product.categoryId, id: { not: id }, status: 'active' },
    include: productInclude,
    take: 8,
    orderBy: { salesCount: 'desc' }
  })
}

async function create(sellerId, data) {
  const slug = slugify(data.name)
  const existing = await prisma.product.findUnique({ where: { slug } })
  if (existing) throw new Error('Un produit avec ce nom existe déjà')

  const productData = {
    sellerId,
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
    featured: data.featured || false,
    trending: data.trending || false,
    tags: data.tags || [],
    metaTitle: data.metaTitle || null,
    metaDescription: data.metaDescription || null
  }

  const product = await prisma.product.create({
    data: productData,
    include: productInclude
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

  return prisma.product.findUnique({ where: { id: product.id }, include: productInclude })
}

async function update(id, sellerId, data) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')
  if (product.sellerId !== sellerId) throw new Error('Non autorisé à modifier ce produit')

  const updateData = {}
  if (data.name !== undefined) {
    updateData.name = data.name
    updateData.slug = slugify(data.name)
  }
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
  if (data.featured !== undefined) updateData.featured = data.featured
  if (data.trending !== undefined) updateData.trending = data.trending
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

  return prisma.product.update({ where: { id }, data: updateData, include: productInclude })
}

async function remove(id, sellerId) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')
  if (product.sellerId !== sellerId) throw new Error('Non autorisé à supprimer ce produit')

  const hasOrders = await prisma.orderItem.findFirst({ where: { productId: id } })
  if (hasOrders) {
    await prisma.product.update({ where: { id }, data: { status: 'archived' } })
    return { message: 'Produit archivé (des commandes existent pour ce produit)' }
  }

  await prisma.product.delete({ where: { id } })
  return { message: 'Produit supprimé avec succès' }
}

async function uploadImages(id, sellerId, files) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')
  if (product.sellerId !== sellerId) throw new Error('Non autorisé')

  const count = await prisma.productImage.count({ where: { productId: id } })
  const images = await prisma.productImage.createMany({
    data: files.map((f, i) => ({
      productId: id,
      url: f.url || `/uploads/products/${f.filename}`,
      alt: f.alt || product.name,
      sortOrder: count + i,
      isPrimary: count === 0 && i === 0
    }))
  })

  return prisma.productImage.findMany({ where: { productId: id }, orderBy: { sortOrder: 'asc' } })
}

async function deleteImage(id, imageId, sellerId) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) throw new Error('Produit non trouvé')
  if (product.sellerId !== sellerId) throw new Error('Non autorisé')

  const image = await prisma.productImage.findFirst({ where: { id: imageId, productId: id } })
  if (!image) throw new Error('Image non trouvée')

  await prisma.productImage.delete({ where: { id: imageId } })

  if (image.isPrimary) {
    const next = await prisma.productImage.findFirst({
      where: { productId: id },
      orderBy: { sortOrder: 'asc' }
    })
    if (next) await prisma.productImage.update({ where: { id: next.id }, data: { isPrimary: true } })
  }

  return { message: 'Image supprimée avec succès' }
}

module.exports = {
  getAll,
  getById,
  getBySlug,
  getByCategory,
  search,
  getFeatured,
  getTrending,
  getNew,
  getRelated,
  create,
  update,
  remove,
  uploadImages,
  deleteImage
}

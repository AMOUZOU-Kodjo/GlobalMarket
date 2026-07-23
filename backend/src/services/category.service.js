const prisma = require('../config/database')
const { slugify } = require('../utils/slugify')

async function getAll() {
  const categories = await prisma.category.findMany({
    where: { active: true },
    orderBy: { sortOrder: 'asc' },
    include: {
      _count: { select: { products: { where: { status: 'active' } } } }
    }
  })

  return categories.map(c => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    description: c.description,
    icon: c.icon,
    image: c.image,
    parentId: c.parentId,
    sortOrder: c.sortOrder,
    productCount: c._count.products
  }))
}

async function getTree() {
  const categories = await prisma.category.findMany({
    where: { active: true },
    orderBy: { sortOrder: 'asc' },
    include: {
      _count: { select: { products: { where: { status: 'active' } } } }
    }
  })

  const map = {}
  const roots = []

  categories.forEach(c => {
    map[c.id] = {
      id: c.id,
      name: c.name,
      slug: c.slug,
      description: c.description,
      icon: c.icon,
      image: c.image,
      parentId: c.parentId,
      sortOrder: c.sortOrder,
      productCount: c._count.products,
      children: []
    }
  })

  categories.forEach(c => {
    if (c.parentId && map[c.parentId]) {
      map[c.parentId].children.push(map[c.id])
    } else {
      roots.push(map[c.id])
    }
  })

  return roots
}

async function getById(id) {
  const category = await prisma.category.findUnique({ where: { id } })
  if (!category) throw new Error('Catégorie non trouvée')

  const productCount = await prisma.product.count({
    where: { categoryId: id, status: 'active' }
  })

  return { ...category, productCount }
}

async function getBySlug(slug) {
  const category = await prisma.category.findUnique({ where: { slug } })
  if (!category) throw new Error('Catégorie non trouvée')

  const productCount = await prisma.product.count({
    where: { categoryId: category.id, status: 'active' }
  })

  return { ...category, productCount }
}

module.exports = { getAll, getTree, getById, getBySlug }

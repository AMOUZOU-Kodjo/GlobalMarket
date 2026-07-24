const express = require('express')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const router = express.Router()
const prisma = new PrismaClient()

const SEED_SECRET = process.env.SEED_SECRET || 'marcostore-seed-2026'

const categories = [
  { name: 'Électronique', slug: 'electronique', icon: '📱', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80' },
  { name: 'Mode & Vêtements', slug: 'mode-vetements', icon: '👕', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80' },
  { name: 'Maison & Jardin', slug: 'maison-jardin', icon: '🏠', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80' },
  { name: 'Sports & Loisirs', slug: 'sports-loisirs', icon: '⚽', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80' },
  { name: 'Beauté & Santé', slug: 'beaute-sante', icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80' },
  { name: 'Jouets & Enfants', slug: 'jouets-enfants', icon: '🧸', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&q=80' },
  { name: 'Automobile', slug: 'automobile', icon: '🚗', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80' },
  { name: 'Livres & Médias', slug: 'livres-medias', icon: '📚', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80' },
  { name: 'Alimentation', slug: 'alimentation', icon: '🍎', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80' },
  { name: 'Art & Artisanat', slug: 'art-artisanat', icon: '🎨', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80' }
]

router.post('/seed', async (req, res) => {
  try {
    const { secret } = req.body
    if (secret !== SEED_SECRET) {
      return res.status(403).json({ message: 'Invalid seed secret' })
    }

    const logs = []

    // Users
    let admin, buyer, sellerUser
    try {
      const adminHash = await bcrypt.hash('Admin@MarcoStore2026!', 12)
      admin = await prisma.user.upsert({
        where: { email: 'admin@marcostore.com' },
        update: { passwordHash: adminHash, role: 'admin', status: 'active', emailVerified: true },
        create: { email: 'admin@marcostore.com', name: 'Administrateur', passwordHash: adminHash, role: 'admin', emailVerified: true, status: 'active' }
      })
      logs.push('admin ok')

      const buyerHash = await bcrypt.hash('Buyer@2026!', 12)
      buyer = await prisma.user.upsert({
        where: { email: 'acheteur@marcostore.com' },
        update: { passwordHash: buyerHash, role: 'buyer', status: 'active', emailVerified: true },
        create: { email: 'acheteur@marcostore.com', name: 'Jean Dupont', passwordHash: buyerHash, role: 'buyer', emailVerified: true, status: 'active' }
      })
      logs.push('buyer ok')

      const sellerHash = await bcrypt.hash('Seller@2026!', 12)
      sellerUser = await prisma.user.upsert({
        where: { email: 'vendeur@marcostore.com' },
        update: { passwordHash: sellerHash, role: 'seller', status: 'active', emailVerified: true },
        create: { email: 'vendeur@marcostore.com', name: 'Marie Martin', passwordHash: sellerHash, role: 'seller', emailVerified: true, status: 'active' }
      })
      logs.push('seller ok')
    } catch (e) { logs.push('users error: ' + e.message) }

    // Seller profile
    let seller
    try {
      if (sellerUser) {
        const existingSeller = await prisma.seller.findUnique({ where: { userId: sellerUser.id } })
        if (existingSeller) {
          seller = await prisma.seller.update({
            where: { userId: sellerUser.id },
            data: {
              shopName: 'TechStore France', slug: 'techstore-france',
              description: 'Spécialiste en électronique et high-tech', category: 'Électronique',
              country: 'France', verified: true, active: true,
              logo: 'https://placehold.co/200x200/0d6efd/ffffff?text=TS',
              banner: 'https://placehold.co/1200x300/0d6efd/ffffff?text=TechStore+France'
            }
          })
          logs.push('seller profile updated')
        } else {
          seller = await prisma.seller.create({
            data: {
              userId: sellerUser.id, shopName: 'TechStore France', slug: 'techstore-france',
              description: 'Spécialiste en électronique et high-tech', category: 'Électronique',
              country: 'France', businessType: 'company', plan: 'pro', commissionRate: 0.08,
              verified: true, active: true, rating: 4.8, totalSales: 350, totalRevenue: 45678.50,
              logo: 'https://placehold.co/200x200/0d6efd/ffffff?text=TS',
              banner: 'https://placehold.co/1200x300/0d6efd/ffffff?text=TechStore+France'
            }
          })
          logs.push('seller profile created')
        }
      }
    } catch (e) { logs.push('seller error: ' + e.message) }

    // Categories
    try {
      for (const cat of categories) {
        await prisma.category.upsert({
          where: { slug: cat.slug },
          update: { image: cat.image },
          create: { name: cat.name, slug: cat.slug, icon: cat.icon, image: cat.image }
        })
      }
      logs.push(`${categories.length} categories`)
    } catch (e) { logs.push('categories error: ' + e.message) }

    // System settings
    try {
      const existingSetting = await prisma.systemSetting.findUnique({ where: { key: 'general' } })
      if (!existingSetting) {
        await prisma.systemSetting.create({
          data: { key: 'general', value: { siteName: 'MarcoStore', commissionRate: 0.12 } }
        })
      }
      logs.push('settings ok')
    } catch (e) { logs.push('settings skipped: ' + e.message) }

    // Products
    try {
      const cats = await prisma.category.findMany()
      const catMap = Object.fromEntries(cats.map(c => [c.slug, c.id]))

      const products = [
        { name: 'iPhone 15 Pro Max 256Go', slug: 'iphone-15-pro-max-256go', description: 'Le dernier iPhone avec puce A17 Pro.', shortDescription: 'Smartphone Apple dernier cri', price: 1399.00, compareAtPrice: 1499.00, stock: 25, categorySlug: 'electronique', featured: true, trending: true, tags: ['apple', 'smartphone'], averageRating: 4.8, reviewCount: 124, salesCount: 340, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80' },
        { name: 'MacBook Air M3 15"', slug: 'macbook-air-m3-15', description: 'Ordinateur portable Apple avec puce M3.', shortDescription: 'Ultrabook performant et léger', price: 1549.00, compareAtPrice: 1699.00, stock: 15, categorySlug: 'electronique', featured: true, tags: ['apple', 'laptop'], averageRating: 4.9, reviewCount: 87, salesCount: 210, image: 'https://images.unsplash.com/photo-1526570207772-784d36084510?w=600&q=80' },
        { name: 'Samsung Galaxy S24 Ultra', slug: 'samsung-galaxy-s24-ultra', description: 'Smartphone Samsung avec IA Galaxy.', shortDescription: 'Le flagship Samsung avec IA', price: 1299.00, compareAtPrice: 1399.00, stock: 30, categorySlug: 'electronique', trending: true, tags: ['samsung', 'smartphone'], averageRating: 4.7, reviewCount: 98, salesCount: 275, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80' },
        { name: 'Casque Sony WH-1000XM5', slug: 'casque-sony-wh1000xm5', description: 'Casque ANC premium.', shortDescription: 'ANC premium Sony', price: 329.00, compareAtPrice: 399.00, stock: 40, categorySlug: 'electronique', featured: true, tags: ['casque', 'audio'], averageRating: 4.6, reviewCount: 203, salesCount: 520, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80' },
        { name: 'T-shirt Premium Coton Bio', slug: 'tshirt-premium-coton-bio', description: 'T-shirt en coton bio certifié GOTS.', shortDescription: 'Coton bio certifié GOTS', price: 29.90, compareAtPrice: 39.90, stock: 150, categorySlug: 'mode-vetements', trending: true, tags: ['bio', 'mode'], averageRating: 4.4, reviewCount: 312, salesCount: 1240, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80' },
        { name: 'Sneakers Urban Step', slug: 'sneakers-urban-step', description: 'Baskets tendance en cuir synthétique.', shortDescription: 'Baskets mode urbaine', price: 89.90, compareAtPrice: 119.90, stock: 60, categorySlug: 'mode-vetements', tags: ['chaussures', 'sport'], averageRating: 4.3, reviewCount: 156, salesCount: 430, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
        { name: 'Canapé Modulable 3 Places', slug: 'canape-modulable-3-places', description: 'Canapé modulable tissu grisé.', shortDescription: 'Canapé convertible et modulable', price: 649.00, compareAtPrice: 899.00, stock: 8, categorySlug: 'maison-jardin', featured: true, tags: ['canapé', 'salon'], averageRating: 4.5, reviewCount: 67, salesCount: 89, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
        { name: 'Lampe Connectée LED RGB', slug: 'lampe-connectee-led-rgb', description: "Lampe d'ambiance à LED RGB.", shortDescription: 'Lampe smart 16M de couleurs', price: 49.90, compareAtPrice: 69.90, stock: 80, categorySlug: 'maison-jardin', trending: true, tags: ['smart-home', 'led'], averageRating: 4.2, reviewCount: 234, salesCount: 670, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab788?w=600&q=80' },
        { name: 'Raquette Tennis Pro Carbon', slug: 'raquette-tennis-pro-carbon', description: 'Raquette en graphite/carbone.', shortDescription: 'Raquette carbone pro', price: 189.00, compareAtPrice: 229.00, stock: 20, categorySlug: 'sports-loisirs', tags: ['tennis', 'sport'], averageRating: 4.6, reviewCount: 45, salesCount: 120, image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80' },
        { name: "Parfum Unisexe Bois d'Ambre", slug: 'parfum-unisexe-bois-ambre', description: 'Eau de parfum 100ml.', shortDescription: 'Eau de parfum artisanale', price: 65.00, compareAtPrice: 85.00, stock: 50, categorySlug: 'beaute-sante', featured: true, tags: ['parfum', 'unisexe'], averageRating: 4.7, reviewCount: 89, salesCount: 210, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80' },
      ]

      let productCount = 0
      let updatedCount = 0
      for (const p of products) {
        const catId = catMap[p.categorySlug]
        if (!catId) continue
        try {
          const existing = await prisma.product.findUnique({ where: { slug: p.slug } })
          if (existing) {
            const oldImg = await prisma.productImage.findFirst({ where: { productId: existing.id, isPrimary: true } })
            if (oldImg && oldImg.url.includes('placehold.co')) {
              await prisma.productImage.update({ where: { id: oldImg.id }, data: { url: p.image } })
              updatedCount++
            }
          } else {
            await prisma.product.create({
              data: {
                sellerId: seller.id, categoryId: catId, name: p.name, slug: p.slug,
                description: p.description, shortDescription: p.shortDescription,
                price: p.price, compareAtPrice: p.compareAtPrice || null, stock: p.stock,
                status: 'active', featured: !!p.featured, trending: !!p.trending,
                tags: p.tags || [], averageRating: p.averageRating || 0,
                reviewCount: p.reviewCount || 0, salesCount: p.salesCount || 0, publishedAt: new Date(),
                images: { create: [{ url: p.image || `https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80`, alt: p.name, isPrimary: true, sortOrder: 0 }] }
              }
            })
            productCount++
          }
        } catch (e) { /* skip */ }
      }
      logs.push(`${productCount} products created, ${updatedCount} images updated`)
    } catch (e) { logs.push('products error: ' + e.message) }

    res.json({ message: 'Seed complete', logs })
  } catch (error) {
    console.error('Seed error:', error)
    res.status(500).json({ message: error.message, stack: error.stack })
  }
})

module.exports = router

const express = require('express')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const router = express.Router()
const prisma = new PrismaClient()

const SEED_SECRET = process.env.SEED_SECRET || 'globalmarket-seed-2026'

const categories = [
  { name: 'Électronique', slug: 'electronique', icon: '📱' },
  { name: 'Mode & Vêtements', slug: 'mode-vetements', icon: '👕' },
  { name: 'Maison & Jardin', slug: 'maison-jardin', icon: '🏠' },
  { name: 'Sports & Loisirs', slug: 'sports-loisirs', icon: '⚽' },
  { name: 'Beauté & Santé', slug: 'beaute-sante', icon: '💄' },
  { name: 'Jouets & Enfants', slug: 'jouets-enfants', icon: '🧸' },
  { name: 'Automobile', slug: 'automobile', icon: '🚗' },
  { name: 'Livres & Médias', slug: 'livres-medias', icon: '📚' },
  { name: 'Alimentation', slug: 'alimentation', icon: '🍎' },
  { name: 'Art & Artisanat', slug: 'art-artisanat', icon: '🎨' }
]

router.post('/seed', async (req, res, next) => {
  try {
    const { secret } = req.body
    if (secret !== SEED_SECRET) {
      return res.status(403).json({ message: 'Invalid seed secret' })
    }

    const existingUsers = await prisma.user.count()
    if (existingUsers > 0) {
      return res.status(400).json({ message: 'Database already seeded', userCount: existingUsers })
    }

    console.log('Seeding database via API...')

    const adminHash = await bcrypt.hash('Admin@GlobalMarket2026!', 12)
    const admin = await prisma.user.create({
      data: {
        email: 'admin@globalmarket.com',
        name: 'Administrateur',
        passwordHash: adminHash,
        role: 'admin',
        emailVerified: true,
        status: 'active'
      }
    })

    const buyerHash = await bcrypt.hash('Buyer@2026!', 12)
    const buyer = await prisma.user.create({
      data: {
        email: 'acheteur@globalmarket.com',
        name: 'Jean Dupont',
        passwordHash: buyerHash,
        role: 'buyer',
        emailVerified: true,
        status: 'active'
      }
    })

    const sellerHash = await bcrypt.hash('Seller@2026!', 12)
    const sellerUser = await prisma.user.create({
      data: {
        email: 'vendeur@globalmarket.com',
        name: 'Marie Martin',
        passwordHash: sellerHash,
        role: 'seller',
        emailVerified: true,
        status: 'active'
      }
    })

    const seller = await prisma.seller.create({
      data: {
        userId: sellerUser.id,
        shopName: 'TechStore France',
        slug: 'techstore-france',
        description: 'Spécialiste en électronique et high-tech',
        category: 'Électronique',
        country: 'France',
        businessType: 'company',
        plan: 'pro',
        commissionRate: 0.08,
        verified: true,
        active: true,
        rating: 4.8,
        totalSales: 350,
        totalRevenue: 45678.50
      }
    })

    for (const cat of categories) {
      await prisma.category.upsert({
        where: { slug: cat.slug },
        update: {},
        create: { name: cat.name, slug: cat.slug, icon: cat.icon }
      })
    }

    await prisma.systemSetting.create({
      data: {
        key: 'general',
        value: {
          siteName: 'GlobalMarket',
          siteDescription: 'Marketplace mondiale',
          commissionRate: 0.12,
          paymentMethods: ['credit_card', 'paypal', 'mobile_money'],
          defaultShippingRate: 5.99,
          shippingFreeThreshold: 50
        }
      }
    })

    const cats = await prisma.category.findMany()
    const catMap = Object.fromEntries(cats.map(c => [c.slug, c.id]))

    const products = [
      { name: 'iPhone 15 Pro Max 256Go', slug: 'iphone-15-pro-max-256go', description: 'Le dernier iPhone avec puce A17 Pro.', shortDescription: 'Smartphone Apple dernier cri', price: 1399.00, compareAtPrice: 1499.00, stock: 25, categorySlug: 'electronique', featured: true, trending: true, tags: ['apple', 'smartphone'], averageRating: 4.8, reviewCount: 124, salesCount: 340 },
      { name: 'MacBook Air M3 15"', slug: 'macbook-air-m3-15', description: 'Ordinateur portable Apple avec puce M3.', shortDescription: 'Ultrabook performant et léger', price: 1549.00, compareAtPrice: 1699.00, stock: 15, categorySlug: 'electronique', featured: true, tags: ['apple', 'laptop'], averageRating: 4.9, reviewCount: 87, salesCount: 210 },
      { name: 'Samsung Galaxy S24 Ultra', slug: 'samsung-galaxy-s24-ultra', description: 'Smartphone Samsung avec IA Galaxy.', shortDescription: 'Le flagship Samsung avec IA', price: 1299.00, compareAtPrice: 1399.00, stock: 30, categorySlug: 'electronique', trending: true, tags: ['samsung', 'smartphone'], averageRating: 4.7, reviewCount: 98, salesCount: 275 },
      { name: 'Casque Sony WH-1000XM5', slug: 'casque-sony-wh1000xm5', description: 'Casque ANC premium.', shortDescription: 'ANC premium Sony', price: 329.00, compareAtPrice: 399.00, stock: 40, categorySlug: 'electronique', featured: true, tags: ['casque', 'audio'], averageRating: 4.6, reviewCount: 203, salesCount: 520 },
      { name: 'T-shirt Premium Coton Bio', slug: 'tshirt-premium-coton-bio', description: 'T-shirt en coton bio certifié GOTS.', shortDescription: 'Coton bio certifié GOTS', price: 29.90, compareAtPrice: 39.90, stock: 150, categorySlug: 'mode-vetements', trending: true, tags: ['bio', 'mode'], averageRating: 4.4, reviewCount: 312, salesCount: 1240 },
      { name: 'Sneakers Urban Step', slug: 'sneakers-urban-step', description: 'Baskets tendance en cuir synthétique.', shortDescription: 'Baskets mode urbaine', price: 89.90, compareAtPrice: 119.90, stock: 60, categorySlug: 'mode-vetements', tags: ['chaussures', 'sport'], averageRating: 4.3, reviewCount: 156, salesCount: 430 },
      { name: 'Canapé Modulable 3 Places', slug: 'canape-modulable-3-places', description: 'Canapé modulable tissu grisé.', shortDescription: 'Canapé convertible et modulable', price: 649.00, compareAtPrice: 899.00, stock: 8, categorySlug: 'maison-jardin', featured: true, tags: ['canapé', 'salon'], averageRating: 4.5, reviewCount: 67, salesCount: 89 },
      { name: 'Lampe Connectée LED RGB', slug: 'lampe-connectee-led-rgb', description: "Lampe d'ambiance à LED RGB.", shortDescription: 'Lampe smart 16M de couleurs', price: 49.90, compareAtPrice: 69.90, stock: 80, categorySlug: 'maison-jardin', trending: true, tags: ['smart-home', 'led'], averageRating: 4.2, reviewCount: 234, salesCount: 670 },
      { name: 'Raquette Tennis Pro Carbon', slug: 'raquette-tennis-pro-carbon', description: 'Raquette en graphite/carbone.', shortDescription: 'Raquette carbone pro', price: 189.00, compareAtPrice: 229.00, stock: 20, categorySlug: 'sports-loisirs', tags: ['tennis', 'sport'], averageRating: 4.6, reviewCount: 45, salesCount: 120 },
      { name: 'Parfum Unisexe Bois d\'Ambre', slug: 'parfum-unisexe-bois-ambre', description: 'Eau de parfum 100ml.', shortDescription: 'Eau de parfum artisanale', price: 65.00, compareAtPrice: 85.00, stock: 50, categorySlug: 'beaute-sante', featured: true, tags: ['parfum', 'unisexe'], averageRating: 4.7, reviewCount: 89, salesCount: 210 },
    ]

    for (const p of products) {
      const catId = catMap[p.categorySlug]
      if (!catId) continue
      await prisma.product.create({
        data: {
          sellerId: seller.id,
          categoryId: catId,
          name: p.name,
          slug: p.slug,
          description: p.description,
          shortDescription: p.shortDescription,
          price: p.price,
          compareAtPrice: p.compareAtPrice || null,
          stock: p.stock,
          status: 'active',
          featured: !!p.featured,
          trending: !!p.trending,
          tags: p.tags || [],
          averageRating: p.averageRating || 0,
          reviewCount: p.reviewCount || 0,
          salesCount: p.salesCount || 0,
          publishedAt: new Date(),
          images: {
            create: [{ url: `https://placehold.co/600x600?text=${encodeURIComponent(p.name.slice(0, 20))}`, alt: p.name, isPrimary: true, sortOrder: 0 }]
          }
        }
      })
    }

    console.log('Seed complete!')
    res.json({ message: 'Database seeded successfully', accounts: { admin: 'admin@globalmarket.com', buyer: 'acheteur@globalmarket.com', seller: 'vendeur@globalmarket.com' } })
  } catch (error) {
    console.error('Seed error:', error)
    next(error)
  }
})

module.exports = router

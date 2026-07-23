const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

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

async function main() {
  console.log('Seeding database...')

  // Create admin
  const adminHash = await bcrypt.hash('Admin@GlobalMarket2026!', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@globalmarket.com' },
    update: {},
    create: {
      email: 'admin@globalmarket.com',
      name: 'Administrateur',
      passwordHash: adminHash,
      role: 'admin',
      emailVerified: true,
      status: 'active'
    }
  })
  console.log(`  Admin: ${admin.email}`)

  // Create buyer
  const buyerHash = await bcrypt.hash('Buyer@2026!', 12)
  const buyer = await prisma.user.upsert({
    where: { email: 'acheteur@globalmarket.com' },
    update: {},
    create: {
      email: 'acheteur@globalmarket.com',
      name: 'Jean Dupont',
      passwordHash: buyerHash,
      role: 'buyer',
      emailVerified: true,
      status: 'active'
    }
  })
  console.log(`  Buyer: ${buyer.email}`)

  // Create seller user + seller profile
  const sellerHash = await bcrypt.hash('Seller@2026!', 12)
  const sellerUser = await prisma.user.upsert({
    where: { email: 'vendeur@globalmarket.com' },
    update: {},
    create: {
      email: 'vendeur@globalmarket.com',
      name: 'Marie Martin',
      passwordHash: sellerHash,
      role: 'seller',
      emailVerified: true,
      status: 'active'
    }
  })

  await prisma.seller.upsert({
    where: { userId: sellerUser.id },
    update: {},
    create: {
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
  console.log(`  Seller: ${sellerUser.email}`)

  // Create categories
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: { name: cat.name, slug: cat.slug, icon: cat.icon }
    })
  }
  console.log(`  Categories: ${categories.length}`)

  // Create system settings
  const defaultSettings = {
    siteName: 'GlobalMarket',
    siteDescription: 'Marketplace mondiale',
    commissionRate: 0.12,
    paymentMethods: ['credit_card', 'paypal', 'mobile_money'],
    defaultShippingRate: 5.99,
    shippingFreeThreshold: 50,
    emailOrderConfirmation: true,
    emailOrderShipped: true,
    emailNewSeller: true,
    emailLowStock: true
  }

  await prisma.systemSetting.upsert({
    where: { key: 'general' },
    update: { value: defaultSettings },
    create: { key: 'general', value: defaultSettings }
  })
  console.log('  System settings')

  // Create demo products
  const seller = await prisma.seller.findUnique({ where: { userId: sellerUser.id } })
  const cats = await prisma.category.findMany()
  const catMap = Object.fromEntries(cats.map(c => [c.slug, c.id]))

  const products = [
    { name: 'iPhone 15 Pro Max 256Go', slug: 'iphone-15-pro-max-256go', description: 'Le dernier iPhone avec puce A17 Pro, écran Super Retina XDR 6,7" et triple caméra 48 Mpx.', shortDescription: 'Smartphone Apple dernier cri', price: 1399.00, compareAtPrice: 1499.00, stock: 25, categorySlug: 'electronique', featured: true, trending: true, tags: ['apple', 'smartphone', 'premium'], averageRating: 4.8, reviewCount: 124, salesCount: 340 },
    { name: 'MacBook Air M3 15"', slug: 'macbook-air-m3-15', description: 'Ordinateur portable Apple avec puce M3, 8 Go de RAM unifié, 256 Go SSD, écran Liquid Retina 15,3".', shortDescription: 'Ultrabook performant et léger', price: 1549.00, compareAtPrice: 1699.00, stock: 15, categorySlug: 'electronique', featured: true, tags: ['apple', 'laptop', 'premium'], averageRating: 4.9, reviewCount: 87, salesCount: 210 },
    { name: 'Samsung Galaxy S24 Ultra', slug: 'samsung-galaxy-s24-ultra', description: 'Smartphone Samsung avec IA Galaxy, S Pen intégré, écran AMOLED 6,8" QHD+ et caméra 200 Mpx.', shortDescription: 'Le flagship Samsung avec IA', price: 1299.00, compareAtPrice: 1399.00, stock: 30, categorySlug: 'electronique', trending: true, tags: ['samsung', 'smartphone', 'ia'], averageRating: 4.7, reviewCount: 98, salesCount: 275 },
    { name: 'Casque Sony WH-1000XM5', slug: 'casque-sony-wh1000xm5', description: 'Casque sans fil à réduction de bruit leader, autonomie 30h, son Hi-Res Audio et LDAC.', shortDescription: 'ANC premium Sony', price: 329.00, compareAtPrice: 399.00, stock: 40, categorySlug: 'electronique', featured: true, tags: ['casque', 'audio', 'bluetooth'], averageRating: 4.6, reviewCount: 203, salesCount: 520 },
    { name: 'T-shirt Premium Coton Bio', slug: 'tshirt-premium-coton-bio', description: 'T-shirt en coton bio certifié GOTS, coupe décontractée, disponible en 8 coloris. Tailles S à XXL.', shortDescription: 'Coton bio certifié GOTS', price: 29.90, compareAtPrice: 39.90, stock: 150, categorySlug: 'mode-vetements', trending: true, tags: ['bio', 'homme', 'femme'], averageRating: 4.4, reviewCount: 312, salesCount: 1240 },
    { name: 'Sneakers Urban Step', slug: 'sneakers-urban-step', description: 'Baskets tendance en cuir synthétique, semelle en mousse à mémoire de forme, style urbain moderne.', shortDescription: 'Baskets mode urbaine', price: 89.90, compareAtPrice: 119.90, stock: 60, categorySlug: 'mode-vetements', tags: ['chaussures', 'sport', 'urbain'], averageRating: 4.3, reviewCount: 156, salesCount: 430 },
    { name: 'Canapé Modulable 3 Places', slug: 'canape-modulable-3-places', description: 'Canapé modulable tissu grisé, configuration L ou ligne droite, ranges-tissu intégré. Livraison offerte.', shortDescription: 'Canapé convertible et modulable', price: 649.00, compareAtPrice: 899.00, stock: 8, categorySlug: 'maison-jardin', featured: true, tags: ['canapé', 'salon', 'modulable'], averageRating: 4.5, reviewCount: 67, salesCount: 89 },
    { name: 'Lampe Connectée LED RGB', slug: 'lampe-connectee-led-rgb', description: 'Lampe d\'ambiance à LED RGB, contrôlée par appli ou vocal (Alexa/Google), 16 millions de couleurs.', shortDescription: 'Lampe smart 16M de couleurs', price: 49.90, compareAtPrice: 69.90, stock: 80, categorySlug: 'maison-jardin', trending: true, tags: ['smart-home', 'led', 'ambiance'], averageRating: 4.2, reviewCount: 234, salesCount: 670 },
    { name: 'Raquette Tennis Pro Carbon', slug: 'raquette-tennis-pro-carbon', description: 'Raquette en graphite/carbone, poids 295g, taille de tête 100 sq in, idéale joueur intermédiaire/avancé.', shortDescription: 'Raquette carbone pro', price: 189.00, compareAtPrice: 229.00, stock: 20, categorySlug: 'sports-loisirs', tags: ['tennis', 'sport', 'carbone'], averageRating: 4.6, reviewCount: 45, salesCount: 120 },
    { name: 'Kit Métrique Allen 90 pièces', slug: 'kit-metrique-allen-90-pieces', description: 'Ensemble complet de clés Allen métriques et impériales, cruciformes, torx et embouts tournevis dans écrin.', shortDescription: '90 outils de précision', price: 34.90, compareAtPrice: 49.90, stock: 100, categorySlug: 'automobile', tags: ['outillage', 'mécanique', 'garage'], averageRating: 4.4, reviewCount: 178, salesCount: 390 },
    { name: 'Parfum Unisexe Bois d\'Ambre', slug: 'parfum-unisexe-bois-ambre', description: 'Eau de parfum 100ml, notes de bois de santal, ambre et vanille. Fabriqué en France, sans parabènes.', shortDescription: 'Eau de parfum artisanale FR', price: 65.00, compareAtPrice: 85.00, stock: 50, categorySlug: 'beaute-sante', featured: true, tags: ['parfum', 'bois', 'unisexe'], averageRating: 4.7, reviewCount: 89, salesCount: 210 },
    { name: 'Coffret Coffret Jeu de Société Édition Deluxe', slug: 'coffret-jeu-societe-edition-deluxe', description: 'Jeu de plateau stratégique 2-6 joueurs, plateau magnétique, pièces peintes à la main, règles avancées.', shortDescription: 'Jeu de plateau édition collector', price: 49.90, compareAtPrice: 64.90, stock: 35, categorySlug: 'jouets-enfants', tags: ['jeu', 'plateau', 'famille'], averageRating: 4.8, reviewCount: 56, salesCount: 180 },
    { name: 'Lot 6 Livres Best-sellers Romans', slug: 'lot-6-livres-best-sellers', description: 'Coffret de 6 romans à succès international, édition poche grand format. Thriller, romance et SF.', shortDescription: 'Pack lecture 6 romans succès', price: 39.90, compareAtPrice: 54.00, stock: 70, categorySlug: 'livres-medias', tags: ['livres', 'romans', 'coffret'], averageRating: 4.5, reviewCount: 132, salesCount: 310 },
    { name: 'Huile d\'Olive Extra Vierge 50cl', slug: 'huile-olive-extra-vierge-50cl', description: 'Huile d\'olive bio première pression à froid, origine Provence France. AOP, sans aucun traitement.', shortDescription: 'Huile d\'olive bio AOP Provence', price: 18.90, compareAtPrice: 24.90, stock: 120, categorySlug: 'alimentation', tags: ['bio', 'huile', 'provence'], averageRating: 4.9, reviewCount: 201, salesCount: 560 },
    { name: 'Kit Peinture Aquarelle 48 Couleurs', slug: 'kit-peinture-aquarelle-48-couleurs', description: 'Set complet de 48 godets aquarelle professionnels, pinceau et palette inclus, dans une boîte aluminium.', shortDescription: '48 couleurs artiste', price: 59.90, compareAtPrice: 79.90, stock: 45, categorySlug: 'art-artisanat', tags: ['aquarelle', 'peinture', 'art'], averageRating: 4.6, reviewCount: 78, salesCount: 195 },
  ]

  for (const p of products) {
    const catId = catMap[p.categorySlug]
    if (!catId) continue
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
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
  console.log(`  Products: ${products.length}`)

  console.log('\nSeed complete!')
  console.log('\nTest accounts:')
  console.log('  Admin:  admin@globalmarket.com / Admin@GlobalMarket2026!')
  console.log('  Buyer:  acheteur@globalmarket.com / Buyer@2026!')
  console.log('  Seller: vendeur@globalmarket.com / Seller@2026!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

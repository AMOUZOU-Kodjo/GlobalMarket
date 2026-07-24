const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const IMAGE_MAP = {
  'iphone-15-pro-max-256go': [
    { url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80', alt: 'iPhone 15 Pro Max' },
    { url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80', alt: 'iPhone 15 Pro Max détail' },
    { url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80', alt: 'iPhone 15 Pro Max face' },
  ],
  'macbook-air-m3-15': [
    { url: 'https://images.unsplash.com/photo-1526570207772-784d36084510?w=600&q=80', alt: 'MacBook Air M3' },
    { url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80', alt: 'MacBook Air clavier' },
    { url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80', alt: 'MacBook Air ouvert' },
  ],
  'samsung-galaxy-s24-ultra': [
    { url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80', alt: 'Samsung Galaxy S24 Ultra' },
    { url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80', alt: 'Samsung Galaxy écran' },
    { url: 'https://images.unsplash.com/photo-1628815113969-0487917e8b76?w=600&q=80', alt: 'Samsung Galaxy dos' },
  ],
  'casque-sony-wh1000xm5': [
    { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80', alt: 'Casque Sony WH-1000XM5' },
    { url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80', alt: 'Casque audio premium' },
    { url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80', alt: 'Casque filaire' },
  ],
  'tshirt-premium-coton-bio': [
    { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', alt: 'T-shirt coton bio' },
    { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80', alt: 'T-shirt coton' },
    { url: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&q=80', alt: 'T-shirt plié' },
  ],
  'sneakers-urban-step': [
    { url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', alt: 'Sneakers Urban Step' },
    { url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80', alt: 'Sneakers vue de face' },
    { url: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80', alt: 'Sneakers lifestyle' },
  ],
  'canape-modulable-3-places': [
    { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', alt: 'Canapé modulable 3 places' },
    { url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80', alt: 'Canapé gris salon' },
    { url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80', alt: 'Canapé intérieur' },
  ],
  'lampe-connectee-led-rgb': [
    { url: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab788?w=600&q=80', alt: 'Lampe connectée LED RGB' },
    { url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80', alt: 'Lampe LED ambiance' },
    { url: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=600&q=80', alt: 'Lampe bureau moderne' },
  ],
  'raquette-tennis-pro-carbon': [
    { url: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80', alt: 'Raquette Tennis Pro Carbon' },
    { url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80', alt: 'Raquette tennis' },
    { url: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&q=80', alt: 'Tennis sport' },
  ],
  'kit-metrique-allen-90-pieces': [
    { url: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80', alt: 'Kit métrique Allen' },
    { url: 'https://images.unsplash.com/photo-1530124566582-a45a7e3f0a20?w=600&q=80', alt: 'Outils de précision' },
    { url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80', alt: 'Kit outils' },
  ],
  'parfum-unisexe-bois-ambre': [
    { url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80', alt: 'Parfum Unisexe Bois d\'Ambre' },
    { url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80', alt: 'Flacon parfum' },
    { url: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80', alt: 'Parfum luxe' },
  ],
  'coffret-jeu-societe-edition-deluxe': [
    { url: 'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=600&q=80', alt: 'Coffret Jeu de Société' },
    { url: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80', alt: 'Jeu de plateau' },
    { url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80', alt: 'Jeu société famille' },
  ],
  'lot-6-livres-best-sellers': [
    { url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80', alt: 'Lot 6 Livres Best-sellers' },
    { url: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&q=80', alt: 'Romans best-sellers' },
    { url: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600&q=80', alt: 'Coffret livres' },
  ],
  'huile-olive-extra-vierge-50cl': [
    { url: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80', alt: 'Huile d\'Olive Extra Vierge' },
    { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', alt: 'Huile olive bio' },
    { url: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80', alt: 'Bouteille huile olive' },
  ],
  'kit-peinture-aquarelle-48-couleurs': [
    { url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80', alt: 'Kit Peinture Aquarelle' },
    { url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80', alt: 'Aquarelle 48 couleurs' },
    { url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80', alt: 'Pinceaux peinture' },
  ],
}

async function main() {
  console.log('Updating product images with real URLs...')

  for (const [slug, images] of Object.entries(IMAGE_MAP)) {
    const product = await prisma.product.findUnique({ where: { slug } })
    if (!product) {
      console.log(`  [SKIP] Product not found: ${slug}`)
      continue
    }

    await prisma.productImage.deleteMany({ where: { productId: product.id } })

    await prisma.productImage.createMany({
      data: images.map((img, i) => ({
        productId: product.id,
        url: img.url,
        alt: img.alt,
        isPrimary: i === 0,
        sortOrder: i,
      })),
    })

    console.log(`  [OK] ${product.name}: ${images.length} images`)
  }

  console.log('\nDone!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const CATEGORY_IMAGES = {
  'electronique': 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80',
  'mode-vetements': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80',
  'maison-jardin': 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80',
  'sports-loisirs': 'https://images.unsplash.com/photo-1461896836934-bd45ba6382b8?w=600&q=80',
  'beaute-sante': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
  'jouets-enfants': 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&q=80',
  'automobile': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
  'livres-medias': 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
  'alimentation': 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
  'art-artisanat': 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
}

async function main() {
  console.log('Updating category images...')
  for (const [slug, image] of Object.entries(CATEGORY_IMAGES)) {
    await prisma.category.update({
      where: { slug },
      data: { image },
    })
    console.log(`  [OK] ${slug}`)
  }
  console.log('\nDone!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

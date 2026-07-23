import InfoPage from '../../components/organisms/InfoPage'

const ARTICLES = [
  { title: 'Comment réussir sa première vente en ligne', description: 'Guide complet pour les nouveaux vendeurs : optimiser vos annonces, fixer le bon prix et attirer vos premiers acheteurs.' },
  { title: 'Tendances e-commerce 2026 : ce qu\'il faut savoir', description: 'Les 10 grandes tendances qui façonnent le commerce en ligne cette année, de l\'IA au social commerce.' },
  { title: 'Optimiser la livraison de vos commandes', description: 'Conseils pratiques pour réduire les délais de livraison et améliorer la satisfaction de vos clients.' },
  { title: 'Photographie de produits : les bases', description: 'Apprenez à prendre des photos de produits attractives avec votre smartphone uniquement.' },
  { title: 'Gérer un conflit avec un acheteur', description: 'Nos conseils pour résoudre professionnellement les litiges et préserver votre réputation vendeur.' },
  { title: 'SEO pour vendeurs : être trouvé sur GlobalMarket', description: 'Optimisez vos fiches produits pour apparaître en tête des résultats de recherche sur la plateforme.' },
  { title: 'Les erreurs à éviter quand on lance une boutique en ligne', description: 'Les 7 pièges les plus fréquents pour les nouveaux vendeurs et comment les contourner.' },
  { title: 'Programme de fidélité : boostez vos ventes récurrentes', description: 'Comment mettre en place un programme de fidélité efficace pour fidéliser vos clients.' },
]

export default function BlogPage() {
  return (
    <InfoPage
      title="Blog"
      subtitle="Conseils, actualités et guides pour acheteurs et vendeurs"
      sections={[
        {
          title: 'Articles récents',
          items: ARTICLES.map(a => ({ ...a, title: `📝 ${a.title}` })),
        },
        {
          title: 'Catégories',
          list: [
            'Guides vendeurs — Conseils pratiques pour vendre sur GlobalMarket',
            'Tendances — Les dernières innovations du e-commerce',
            'Acheteurs — Tips pour acheter malin et en sécurité',
            'Success Stories — Témoignages de nos vendeurs',
            'Tech & Innovation — Découvertes et outils recommandés',
          ],
        },
        {
          title: 'Abonnez-vous à notre newsletter',
          content: 'Recevez nos meilleurs articles directement dans votre boîte mail, une fois par semaine. Inscrivez-vous via le formulaire en bas de page.',
        },
      ]}
    />
  )
}

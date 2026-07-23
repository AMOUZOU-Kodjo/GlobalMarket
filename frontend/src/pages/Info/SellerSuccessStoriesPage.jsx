import InfoPage from '../../components/organisms/InfoPage'
import { Link } from 'react-router-dom'

const STORIES = [
  {
    name: 'Fatou Diallo',
    shop: 'Mode Fatou',
    category: 'Mode & Vêtements',
    revenue: '12 500 €/mois',
    story: 'Fatou a lancé sa boutique de mode africaine en janvier 2025. En seulement 18 mois, elle est devenue l\'une des meilleures vendeuses de la plateforme avec plus de 3 000 commandes traitées.',
  },
  {
    name: 'Mohamed Benali',
    shop: 'TechStore Pro',
    category: 'Électronique',
    revenue: '28 000 €/mois',
    story: 'Ancien ingénieur informatique, Mohamed a créé TechStore Pro pour proposer du matériel reconditionné de qualité. Son taux de satisfaction de 98% lui vaut d\'être recommandé par l\'algorithme.',
  },
  {
    name: 'Aïssatou Touré',
    shop: 'Beauté Naturelle',
    category: 'Beauté & Santé',
    revenue: '8 200 €/mois',
    story: 'Aïssatou fabrique ses propres cosmétiques bio à base d\'ingrédients naturels africains. Son secret : des photos de qualité et un service client irréprochable.',
  },
  {
    name: 'Ibrahim Koné',
    shop: 'Art & Design CI',
    category: 'Art & Artisanat',
    revenue: '5 800 €/mois',
    story: 'Artiste plasticien, Ibrahim vend ses œuvres et celles d\'autres artistes ivoiriens. GlobalMarket lui a permis de toucher une clientèle internationale qu\'il n\'aurait jamais atteinte seul.',
  },
]

export default function SellerSuccessStoriesPage() {
  return (
    <InfoPage
      title="Succès vendeurs"
      subtitle="Découvrez les histoires inspirantes de nos meilleurs vendeurs"
      sections={[
        {
          title: 'Nos vendeurs stars',
          items: STORIES.map(s => ({
            title: `${s.name} — ${s.shop} (${s.category})`,
            description: `${s.story} Revenu mensuel : ${s.revenue}`,
          })),
        },
        {
          title: 'Vous aussi, réussissez sur GlobalMarket',
          content: 'Ces vendeurs ont commencé comme vous, avec une idée et de la motivation. Rejoignez-les et commencez à vendre dès aujourd\'hui.',
        },
      ]}
      cta={{
        text: 'Prêt à lancer votre boutique ?',
        link: { label: 'Devenir vendeur', href: '/seller/register' },
      }}
    />
  )
}

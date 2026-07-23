import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  BookOpen,
  TrendingUp,
  Lightbulb,
  Target,
  ArrowRight,
  Camera,
  Package,
  MessageSquare,
  BarChart3,
  Users,
  Star,
  Clock,
  ExternalLink,
} from 'lucide-react'

const GUIDES = [
  {
    icon: Package,
    title: 'Créer votre boutique',
    desc: 'Un guide étape par étape pour configurer votre boutique et commencer à vendre rapidement.',
    readTime: '10 min',
  },
  {
    icon: Camera,
    title: 'Photographier vos produits',
    desc: 'Conseils pour prendre des photos attractives qui augmentent vos ventes.',
    readTime: '8 min',
  },
  {
    icon: TrendingUp,
    title: 'Fixer les bons prix',
    desc: 'Comment déterminer des prix compétitifs tout en maximisant votre marge.',
    readTime: '12 min',
  },
  {
    icon: MessageSquare,
    title: 'Gérer la relation client',
    desc: 'Bonnes pratiques pour fidéliser vos clients et obtenir de bonnes évaluations.',
    readTime: '7 min',
  },
  {
    icon: BarChart3,
    title: 'Analyser vos performances',
    desc: 'Comprendre vos statistiques pour optimiser vos ventes.',
    readTime: '15 min',
  },
  {
    icon: Users,
    title: 'Promouvoir vos produits',
    desc: 'Stratégies marketing pour augmenter la visibilité de vos produits.',
    readTime: '11 min',
  },
]

const TIPS = [
  { icon: Star, title: 'Qualité avant tout', desc: 'Décrivez vos produits avec précision et incluez des photos de haute qualité.' },
  { icon: Clock, title: 'Réactivité', desc: 'Répondez rapidement aux messages des clients (idéal : moins de 2 heures).' },
  { icon: Target, title: 'SEO produit', desc: 'Utilisez des mots-clés pertinents dans les titres et descriptions de vos produits.' },
  { icon: Lightbulb, title: 'Offres promotionnelles', desc: 'Proposez des réductions ponctuelles pour attirer de nouveaux clients.' },
  { icon: MessageSquare, title: 'Avis clients', desc: 'Encouragez les clients à laisser des avis et répondez toujours aux commentaires.' },
  { icon: Package, title: 'Emballage soigné', desc: 'Un emballage de qualité améliore l\'expérience client et réduit les retours.' },
]

const RESOURCES = [
  { title: 'Blog vendeurs', desc: 'Articles et conseils réguliers pour réussir sur GlobalMarket.', url: '#', external: true },
  { title: 'Webinaires', desc: 'Sessions de formation en ligne avec nos experts vendeurs.', url: '#', external: true },
  { title: 'Communauté', desc: 'Rejoignez notre groupe de vendeurs pour échanger et partager.', url: '#', external: true },
  { title: 'Support technique', desc: 'Assistance dédiée pour les questions techniques sur votre boutique.', url: '/contact', external: false },
]

export default function SellerResourcesPage() {
  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <BookOpen size={48} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ressources Vendeurs</h1>
            <p className="text-lg text-base-content/70">
              Tout ce dont vous avez besoin pour réussir sur GlobalMarket.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Guide de Démarrage</h2>
          <p className="text-center text-base-content/60 mb-12 max-w-xl mx-auto">
            Suivez nos guides pour démarrer rapidement et optimiser vos ventes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((guide) => {
              const Icon = guide.icon
              return (
                <div key={guide.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="card-body">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{guide.title}</h3>
                    <p className="text-sm text-base-content/70">{guide.desc}</p>
                    <div className="card-actions justify-between items-center mt-2">
                      <span className="text-xs text-base-content/50 flex items-center gap-1">
                        <Clock size={12} />
                        {guide.readTime}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">
                        Lire <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Conseils pour Vendre Mieux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIPS.map((tip) => {
              const Icon = tip.icon
              return (
                <div key={tip.title} className="flex items-start gap-4 p-4 bg-base-100 rounded-box shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{tip.title}</h3>
                    <p className="text-sm text-base-content/70">{tip.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Ressources Supplémentaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target={resource.external ? '_blank' : undefined}
                rel={resource.external ? 'noopener noreferrer' : undefined}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{resource.title}</h3>
                    {resource.external && <ExternalLink size={16} className="text-base-content/40" />}
                  </div>
                  <p className="text-sm text-base-content/70">{resource.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="mb-8 opacity-90">Ouvrez votre boutique et commencez à vendre dès aujourd'hui.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/seller/register" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
              Ouvrir ma boutique
              <ArrowRight size={20} />
            </Link>
            <Link to="/seller/pricing" className="btn btn-lg btn-outline border-base-100 text-base-100 hover:bg-base-100 hover:text-base-content">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

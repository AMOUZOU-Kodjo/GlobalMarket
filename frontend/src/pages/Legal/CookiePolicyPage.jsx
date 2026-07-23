import { Header } from '../../components/organisms/Header'
import { Cookie, Settings, BarChart3, Megaphone, AlertTriangle } from 'lucide-react'

const COOKIE_TYPES = [
  {
    name: 'Cookies strictement nécessaires',
    icon: Settings,
    required: true,
    description: 'Indispensables au fonctionnement du site. Ils permettent la navigation, l\'accès aux zones sécurisées et le panier d\'achat.',
    examples: ['session_id', 'csrf_token', 'cart_data', 'auth_token'],
    duration: 'Session ou 1 an',
  },
  {
    name: 'Cookies analytiques',
    icon: BarChart3,
    required: false,
    description: 'Collectent des informations anonymes sur l\'utilisation du site. Ils nous aident à améliorer nos services.',
    examples: ['_ga', '_gid', '_gat', 'page_views'],
    duration: '2 ans maximum',
  },
  {
    name: 'Cookies de préférences',
    icon: Cookie,
    required: false,
    description: 'Mémorisent vos choix (langue, devise, région) pour personnaliser votre expérience.',
    examples: ['language', 'currency', 'theme', 'country'],
    duration: '1 an',
  },
  {
    name: 'Cookies marketing',
    icon: Megaphone,
    required: false,
    description: 'Permettent de vous proposer des publicités pertinentes et de mesurer l\'efficacité de nos campagnes.',
    examples: ['fb_pixel', 'ads_id', 'retargeting', 'conversion'],
    duration: '90 jours maximum',
  },
]

const THIRD_PARTY_COOKIES = [
  { name: 'Google Analytics', provider: 'Google', purpose: 'Analyse du trafic', duration: '2 ans' },
  { name: 'Google Ads', provider: 'Google', purpose: 'Publicité ciblée', duration: '90 jours' },
  { name: 'Facebook Pixel', provider: 'Meta', purpose: 'Mesure de conversion', duration: '90 jours' },
  { name: 'Stripe', provider: 'Stripe', purpose: 'Paiement sécurisé', duration: 'Session' },
  { name: 'Hotjar', provider: 'Hotjar', purpose: 'Analyse comportementale', duration: '1 an' },
  { name: 'YouTube', provider: 'Google', purpose: 'Vidéos intégrées', duration: '2 ans' },
]

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <Cookie size={48} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Cookies</h1>
            <p className="text-base-content/60">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-base max-w-none mb-12">
            <p className="text-base-content/80 leading-relaxed">
              Ce site utilise des cookies pour améliorer votre expérience de navigation, analyser le trafic
              et personnaliser le contenu. Vous pouvez gérer vos préférences à tout moment.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Types de Cookies Utilisés</h2>
          <div className="flex flex-col gap-6 mb-16">
            {COOKIE_TYPES.map((type) => {
              const Icon = type.icon
              return (
                <div key={type.name} className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg">{type.name}</h3>
                          {type.required && (
                            <span className="badge badge-primary badge-sm">Obligatoire</span>
                          )}
                        </div>
                        <p className="text-sm text-base-content/70 mb-3">{type.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <span className="font-medium">Exemples : </span>
                            <span className="text-base-content/60">{type.examples.join(', ')}</span>
                          </div>
                          <div>
                            <span className="font-medium">Durée : </span>
                            <span className="text-base-content/60">{type.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <h2 className="text-2xl font-bold mb-6">Cookies Tiers</h2>
          <div className="overflow-x-auto mb-16">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Fournisseur</th>
                  <th>Objectif</th>
                  <th>Durée</th>
                </tr>
              </thead>
              <tbody>
                {THIRD_PARTY_COOKIES.map((cookie) => (
                  <tr key={cookie.name}>
                    <td className="font-medium">{cookie.name}</td>
                    <td>{cookie.provider}</td>
                    <td>{cookie.purpose}</td>
                    <td>{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-6">Gestion des Cookies</h2>
          <div className="card bg-base-200 shadow-sm mb-12">
            <div className="card-body">
              <p className="text-base-content/80 mb-4">
                Vous pouvez gérer vos préférences de cookies de plusieurs façons :
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="badge badge-primary badge-lg mt-0.5">1</span>
                  <div>
                    <p className="font-medium">Via notre bandeau de consentement</p>
                    <p className="text-sm text-base-content/60">Lors de votre première visite, un bandeau vous permet d'accepter ou refuser les cookies non essentiels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="badge badge-primary badge-lg mt-0.5">2</span>
                  <div>
                    <p className="font-medium">Via les paramètres de votre navigateur</p>
                    <p className="text-sm text-base-content/60">Chrome : Settings {'>'} Privacy {'>'} Cookies | Firefox : Options {'>'} Vie privée | Safari : Préférences {'>'} Confidentialité</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="badge badge-primary badge-lg mt-0.5">3</span>
                  <div>
                    <p className="font-medium">Via nos outils de désabonnement</p>
                    <p className="text-sm text-base-content/60">Vous pouvez vous désabonner des cookies marketing via les liens de désabonnement de nos partenaires publicitaires.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-warning">
            <AlertTriangle size={20} />
            <div>
              <p className="font-medium">Impact du refus des cookies</p>
              <p className="text-sm">Le refus des cookies non essentiels n'affecte pas les fonctionnalités de base du site, mais peut limiter certaines fonctionnalités comme la personnalisation et les statistiques.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

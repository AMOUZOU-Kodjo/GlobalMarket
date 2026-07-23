import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  ArrowRight,
  HelpCircle,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'

const PLANS = [
  {
    name: 'Basic',
    icon: Star,
    price: '0',
    period: '/mois',
    commission: '12%',
    color: 'primary',
    description: 'Pour débuter sur GlobalMarket',
    features: [
      { text: 'Boutique personnalisée', included: true },
      { text: 'Jusqu\'à 50 produits', included: true },
      { text: 'Statistiques de base', included: true },
      { text: 'Support par email', included: true },
      { text: 'Photos produit (5 par article)', included: true },
      { text: 'Promotions et réductions', included: false },
      { text: 'Analytics avancés', included: false },
      { text: 'Support prioritaire', included: false },
      { text: 'Badge vendeur vérifié', included: false },
      { text: 'API vendeur', included: false },
    ],
    popular: false,
  },
  {
    name: 'Pro',
    icon: Zap,
    price: '29',
    period: '/mois',
    commission: '8%',
    color: 'secondary',
    description: 'Pour les vendeurs ambieux',
    features: [
      { text: 'Boutique personnalisée', included: true },
      { text: 'Produits illimités', included: true },
      { text: 'Statistiques de base', included: true },
      { text: 'Support par email', included: true },
      { text: 'Photos produit (10 par article)', included: true },
      { text: 'Promotions et réductions', included: true },
      { text: 'Analytics avancés', included: true },
      { text: 'Support prioritaire', included: true },
      { text: 'Badge vendeur vérifié', included: true },
      { text: 'API vendeur', included: false },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: '99',
    period: '/mois',
    commission: '5%',
    color: 'accent',
    description: 'Pour les grandes marques',
    features: [
      { text: 'Boutique personnalisée', included: true },
      { text: 'Produits illimités', included: true },
      { text: 'Statistiques de base', included: true },
      { text: 'Support par email', included: true },
      { text: 'Photos produit (illimitées)', included: true },
      { text: 'Promotions et réductions', included: true },
      { text: 'Analytics avancés', included: true },
      { text: 'Support prioritaire', included: true },
      { text: 'Badge vendeur vérifié', included: true },
      { text: 'API vendeur', included: true },
    ],
    popular: false,
  },
]

const FAQ_ITEMS = [
  { q: 'Quand commence à payer la commission ?', a: 'La commission est prélevée uniquement sur chaque vente réalisée. Pas de vente, pas de commission.' },
  { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui, vous pouvez changer de plan à tout moment. Le changement prend effet immédiatement avec un prorata.' },
  { q: 'Y a-t-il des frais d\'annulation ?', a: 'Non, vous pouvez annuler votre abonnement à tout moment sans frais.' },
  { q: 'Comment sont calculés les frais de commission ?', a: 'La commission est calculée sur le montant total de la vente (produit + frais de livraison).' },
  { q: 'Le plan Enterprise inclut-il un account manager ?', a: 'Oui, chaque compte Enterprise bénéficie d\'un account manager dédié.' },
]

export default function SellerPricingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarifs & Commissions</h1>
            <p className="text-lg text-base-content/70">
              Choisissez le plan qui correspond à vos ambitions. Commencez gratuitement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 -mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.name}
                  className={`card bg-base-100 shadow-lg ${plan.popular ? 'ring-2 ring-secondary scale-[1.02]' : ''}`}
                >
                  {plan.popular && (
                    <div className="badge badge-secondary absolute -top-3 left-1/2 -translate-x-1/2 font-bold">
                      Le plus populaire
                    </div>
                  )}
                  <div className="card-body">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={28} className={`text-${plan.color}`} />
                      <h3 className="card-title text-xl">{plan.name}</h3>
                    </div>
                    <p className="text-sm text-base-content/60 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price} €</span>
                      <span className="text-base-content/60">{plan.period}</span>
                      <p className="text-sm text-primary font-medium mt-1">Commission : {plan.commission}</p>
                    </div>
                    <ul className="flex flex-col gap-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-2 text-sm">
                          {feature.included ? (
                            <Check size={16} className="text-success shrink-0" />
                          ) : (
                            <X size={16} className="text-base-content/30 shrink-0" />
                          )}
                          <span className={feature.included ? '' : 'text-base-content/40'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/seller/register"
                      className={`btn ${plan.popular ? 'btn-secondary' : 'btn-outline'} w-full`}
                    >
                      Commencer
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="collapse collapse-arrow bg-base-100 shadow-sm">
                <input
                  type="checkbox"
                  checked={openFaq === i}
                  onChange={() => setOpenFaq(openFaq === i ? null : i)}
                />
                <div className="collapse-title font-medium pr-12">{item.q}</div>
                <div className="collapse-content text-base-content/70">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Prêt à vendre ?</h2>
          <p className="mb-8 opacity-90">Rejoignez des milliers de vendeurs qui font confiance à GlobalMarket.</p>
          <Link to="/seller/register" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
            Ouvrir votre boutique
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

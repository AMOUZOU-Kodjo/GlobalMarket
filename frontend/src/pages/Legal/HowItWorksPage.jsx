import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  Search,
  ShoppingCart,
  Package,
  Store,
  CreditCard,
  TrendingUp,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'

const BUYER_STEPS = [
  { icon: Search, title: 'Recherchez', desc: 'Parcourez des milliers de produits de vendeurs vérifiés. Utilisez les filtres pour trouver exactement ce que vous cherchez.' },
  { icon: ShoppingCart, title: 'Commandez', desc: 'Ajoutez vos articles au panier et procédez au paiement en toute sécurité avec nos moyens de paiement protégés.' },
  { icon: Package, title: 'Recevez', desc: 'Suivez votre commande en temps réel et recevez vos produits directement chez vous avec une livraison assurée.' },
]

const SELLER_STEPS = [
  { icon: Store, title: 'Créez votre boutique', desc: 'Inscrivez-vous gratuitement et configurez votre boutique en quelques minutes avec nos outils intuitifs.' },
  { icon: CreditCard, title: 'Vendez vos produits', desc: 'Ajoutez vos produits, fixez vos prix et commencez à vendre à des millions d\'acheteurs potentiels.' },
  { icon: TrendingUp, title: 'Développez-vous', desc: 'Accédez à des outils d\'analyse, des conseils d\'expansion et un support dédié pour booster vos ventes.' },
]

const FAQ_ITEMS = [
  { q: 'Comment créer un compte ?', a: 'Cliquez sur "Créer un compte" et remplissez le formulaire. L\'inscription est gratuite et ne prend que quelques minutes.' },
  { q: 'Comment payer mes achats ?', a: 'Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, Apple Pay et Google Pay. Tous les paiements sont sécurisés.' },
  { q: 'Quels sont les délais de livraison ?', a: 'La livraison standard prend 3-5 jours ouvrés en France métropolitaine. La livraison express est disponible en 1-2 jours.' },
  { q: 'Comment retourner un produit ?', a: 'Vous disposez de 30 jours après réception pour retourner un produit. Rendez-vous dans votre espace "Mes commandes" pour initier le retour.' },
  { q: 'Comment devenir vendeur ?', a: 'Rendez-vous sur la page "Ouvrir une boutique" et suivez les étapes d\'inscription. Vous pourrez commencer à vendre en quelques heures.' },
  { q: 'Les paiements sont-ils sécurisés ?', a: 'Oui, tous les paiements sont chiffrés et sécurisés par Stripe. Nous ne stockons jamais vos données bancaires.' },
]

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <Sparkles size={48} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comment ça marche</h1>
            <p className="text-lg text-base-content/70">
              Découvrez comment GlobalMarket simplifie vos achats et vos ventes en ligne.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Pour les Acheteurs</h2>
          <p className="text-center text-base-content/60 mb-12 max-w-xl mx-auto">
            Acheter sur GlobalMarket est simple, rapide et sécurisé en 3 étapes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUYER_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative">
                  <div className="card bg-base-100 shadow-md h-full">
                    <div className="card-body items-center text-center">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon size={32} className="text-primary" />
                        </div>
                        <span className="absolute -top-2 -right-2 badge badge-primary badge-lg">{i + 1}</span>
                      </div>
                      <h3 className="card-title text-xl">{step.title}</h3>
                      <p className="text-base-content/70">{step.desc}</p>
                    </div>
                  </div>
                  {i < BUYER_STEPS.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-primary/40" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn btn-primary btn-lg">
              Commencer vos achats
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Pour les Vendeurs</h2>
          <p className="text-center text-base-content/60 mb-12 max-w-xl mx-auto">
            Lancez votre business en ligne et touchez des millions d'acheteurs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SELLER_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative">
                  <div className="card bg-base-100 shadow-md h-full">
                    <div className="card-body items-center text-center">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Icon size={32} className="text-secondary" />
                        </div>
                        <span className="absolute -top-2 -right-2 badge badge-secondary badge-lg">{i + 1}</span>
                      </div>
                      <h3 className="card-title text-xl">{step.title}</h3>
                      <p className="text-base-content/70">{step.desc}</p>
                    </div>
                  </div>
                  {i < SELLER_STEPS.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-secondary/40" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/seller/register" className="btn btn-secondary btn-lg">
              Ouvrir votre boutique
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">Questions Fréquentes</h2>
          <p className="text-center text-base-content/60 mb-12">
            Trouvez rapidement les réponses à vos questions.
          </p>
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
          <HelpCircle size={48} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Encore des questions ?</h2>
          <p className="mb-8 opacity-90">Notre équipe support est disponible 7j/7 pour vous accompagner.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
              Nous contacter
            </Link>
            <Link to="/help" className="btn btn-lg btn-outline border-base-100 text-base-100 hover:bg-base-100 hover:text-base-content">
              Centre d'aide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

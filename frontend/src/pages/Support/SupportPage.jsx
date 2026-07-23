import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Home,
  ShoppingCart,
  Package,
  Phone,
  ChevronDown,
  Shield,
  CreditCard,
  Truck,
  RotateCcw,
  HelpCircle,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'

const FAQ_CATEGORIES = [
  {
    title: 'Commandes & Paiement',
    icon: CreditCard,
    items: [
      { q: 'Comment passer une commande ?', a: 'Ajoutez vos produits au panier, cliquez sur "Passer la commande", connectez-vous ou créez un compte, puis choisissez votre mode de paiement.' },
      { q: 'Quels sont les modes de paiement acceptés ?', a: 'Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, Apple Pay et Google Pay.' },
      { q: 'Puis-je modifier ma commande après validation ?', a: 'Vous pouvez modifier votre commande dans les 30 minutes suivant sa validation. Passé ce délai, contactez le support.' },
      { q: 'Comment utiliser un code promo ?', a: 'Saisissez votre code promo dans le champ dédié lors du passage de la commande avant le paiement.' },
    ],
  },
  {
    title: 'Livraison',
    icon: Truck,
    items: [
      { q: 'Quels sont les délais de livraison ?', a: 'La livraison standard prend 3-5 jours ouvrés en France. La livraison express est disponible en 1-2 jours.' },
      { q: 'Comment suivre ma commande ?', a: 'Vous recevrez un numéro de suivi par email. Vous pouvez aussi suivre vos commandes depuis votre espace personnel.' },
      { q: 'Livrez-vous à l\'international ?', a: 'Oui, nous livrons dans plus de 30 pays. Les frais et délais varient selon la destination.' },
    ],
  },
  {
    title: 'Retours & Remboursements',
    icon: RotateCcw,
    items: [
      { q: 'Comment retourner un produit ?', a: 'Vous disposez de 30 jours pour retourner un produit. Allez dans "Mes commandes" et cliquez sur "Retourner un article".' },
      { q: 'Le retour est-il gratuit ?', a: 'Oui, nous fournissons une étiquette de retour prépayée pour tous les retours éligibles.' },
      { q: 'Quand serai-je remboursé ?', a: 'Le remboursement est traité sous 48h après réception du retour. Le délai d\'apparition varie selon votre mode de paiement.' },
    ],
  },
  {
    title: 'Compte & Sécurité',
    icon: Shield,
    items: [
      { q: 'Comment créer un compte ?', a: 'Cliquez sur "Créer un compte" en haut à droite de la page et remplissez le formulaire d\'inscription.' },
      { q: 'J\'ai oublié mon mot de passe ?', a: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Vous recevrez un email de réinitialisation.' },
      { q: 'Comment supprimer mon compte ?', a: 'Contactez notre support pour demander la suppression de votre compte. Cette action est irréversible.' },
    ],
  },
]

const KNOWLEDGE_BASE = [
  { title: 'Guide du débutant', desc: 'Apprenez les bases pour acheter ou vendre sur GlobalMarket.', icon: HelpCircle },
  { title: 'Protection acheteur', desc: 'Découvrez comment vos achats sont protégés.', icon: Shield },
  { title: 'Politique de retour', desc: 'Tout savoir sur nos conditions de retour et remboursement.', icon: RotateCcw },
  { title: 'Guide vendeur', desc: 'Conseils et astuces pour réussir en tant que vendeur.', icon: Package },
]

export default function SupportPage() {
  const [search, setSearch] = useState('')
  const [openCategory, setOpenCategory] = useState(null)
  const [openItems, setOpenItems] = useState({})

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  const toggleItem = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const filteredCategories = FAQ_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0 || !search)

  return (
    <div className="flex flex-col">
      <section className="hero min-h-[40vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-2xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Centre d'aide</h1>
            <p className="text-lg text-base-content/70 mb-8">
              Comment pouvons-nous vous aider ?
            </p>
            <div className="form-control">
              <div className="input input-bordered flex items-center gap-2 w-full">
                <Search size={20} className="opacity-50 shrink-0" />
                <input
                  type="text"
                  placeholder="Rechercher dans l'aide..."
                  className="grow"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="flex flex-col gap-4">
            {filteredCategories.map((cat, catIdx) => {
              const Icon = cat.icon
              const isOpen = openCategory === catIdx
              return (
                <div key={cat.title} className="bg-base-100 rounded-box shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory(catIdx)}
                    className="w-full flex items-center gap-3 p-4 hover:bg-base-200 transition-colors text-left"
                  >
                    <Icon size={24} className="text-primary shrink-0" />
                    <span className="font-bold text-lg flex-1">{cat.title}</span>
                    <span className="badge badge-ghost">{cat.items.length}</span>
                    <ChevronDown
                      size={20}
                      className={`text-base-content/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-base-200">
                      {cat.items.map((item, itemIdx) => {
                        const itemKey = `${catIdx}-${itemIdx}`
                        const isItemOpen = openItems[itemKey]
                        return (
                          <div key={itemIdx} className="border-b border-base-200 last:border-b-0">
                            <button
                              onClick={() => toggleItem(catIdx, itemIdx)}
                              className="w-full flex items-center justify-between p-4 pl-16 hover:bg-base-200/50 transition-colors text-left"
                            >
                              <span className="font-medium text-sm">{item.q}</span>
                              <ChevronDown
                                size={16}
                                className={`text-base-content/40 transition-transform shrink-0 ml-4 ${isItemOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            {isItemOpen && (
                              <div className="px-16 pb-4">
                                <p className="text-sm text-base-content/70">{item.a}</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Articles Populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KNOWLEDGE_BASE.map((article) => {
              const Icon = article.icon
              return (
                <div key={article.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="card-body items-center text-center">
                    <Icon size={32} className="text-primary mb-2" />
                    <h3 className="font-bold">{article.title}</h3>
                    <p className="text-sm text-base-content/70">{article.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <MessageSquare size={48} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-base-content/70 mb-8">
            Notre équipe de support est disponible pour répondre à toutes vos questions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Nous contacter
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  RotateCcw,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Package,
  CreditCard,
  FileText,
  HelpCircle,
} from 'lucide-react'

const RETURN_STEPS = [
  { step: 1, title: 'Initiez le retour', desc: 'Connectez-vous à votre compte, allez dans "Mes commandes" et sélectionnez "Retourner un article".' },
  { step: 2, title: 'Préparez le colis', desc: 'Emballez soigneusement le produit dans son emballage d\'origine avec tous les accessoires.' },
  { step: 3, title: 'Envoyez le colis', desc: 'Imprimez l\'étiquette de retour prépayée et déposez le colis en point relais ou à La Poste.' },
  { step: 4, title: 'Recevez votre remboursement', desc: 'Dès réception et vérification du produit, votre remboursement est traité sous 48h.' },
]

const REFUND_INFO = [
  { icon: CreditCard, title: 'Carte bancaire', time: '5-10 jours ouvrés' },
  { icon: CreditCard, title: 'PayPal', time: '24-48 heures' },
  { icon: CreditCard, title: 'Virement bancaire', time: '3-5 jours ouvrés' },
  { icon: CreditCard, title: 'Crédit MarcoStore', time: 'Immédiat' },
]

const EXCEPTIONS = [
  'Produits personnalisés ou sur mesure',
  'Produits périssables ou à durée de vie courte',
  'Articles de hygiène intime ouverts',
  'Logiciels et cartes cadeaux numériques',
  'Produits usagés ou endommagés par l\'acheteur',
  'Articles soldés (retour possible sous 14 jours)',
  'Vêtements portés, lavés ou sans étiquettes',
]

export default function ReturnsPage() {
  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <RotateCcw size={64} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Retours & Remboursements</h1>
            <p className="text-lg text-base-content/70">
              Vous avez changez d&apos;avis ? Retournez facilement vos articles sous 30 jours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="alert alert-success mb-12">
            <CheckCircle size={20} />
            <div>
              <p className="font-bold">Retour gratuit sous 30 jours</p>
              <p className="text-sm">Vous disposez de 30 jours après réception pour retourner tout article éligible.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Comment retourner un article ?</h2>
          <div className="flex flex-col gap-8">
            {RETURN_STEPS.map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-content flex items-center justify-center shrink-0 font-bold text-xl">
                  {item.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-base-content/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Délais de Remboursement</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REFUND_INFO.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card bg-base-100 shadow-md">
                  <div className="card-body items-center text-center">
                    <Icon size={32} className="text-primary mb-2" />
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-base-content/60 mt-1">{item.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Exceptions</h2>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={20} className="text-warning" />
                <h3 className="font-bold">Articles non retournables</h3>
              </div>
              <p className="text-sm text-base-content/70 mb-4">
                Certains produits ne peuvent pas être retournés pour des raisons d&apos;hygiène, de sécurité ou de nature personnalisée :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EXCEPTIONS.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Politique de Remboursement</h2>
          <div className="prose prose-base max-w-none text-base-content/80">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-lg">Remboursement intégral</h3>
                  <ul className="text-sm text-base-content/70 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-success mt-0.5 shrink-0" />
                      Prix du produit
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-success mt-0.5 shrink-0" />
                      Frais de livraison initial
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-success mt-0.5 shrink-0" />
                      Frais de retour (étiquette prépayée)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-lg">Conditions de retour</h3>
                  <ul className="text-sm text-base-content/70 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <FileText size={16} className="text-primary mt-0.5 shrink-0" />
                      Retour dans les 30 jours
                    </li>
                    <li className="flex items-start gap-2">
                      <Package size={16} className="text-primary mt-0.5 shrink-0" />
                      Produit dans son emballage d&apos;origine
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText size={16} className="text-primary mt-0.5 shrink-0" />
                      Tous les accessoires inclus
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour un retour ?</h2>
          <p className="mb-8 opacity-90">Notre équipe support est disponible pour vous accompagner.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/orders" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
              Initiier un retour
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-lg btn-outline border-base-100 text-base-100 hover:bg-base-100 hover:text-base-content">
              <HelpCircle size={20} />
              Contacter le support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

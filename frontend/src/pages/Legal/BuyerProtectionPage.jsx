import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Clock,
  FileText,
  RefreshCw,
  Phone,
  CreditCard,
  Package,
} from 'lucide-react'

const COVERED_ITEMS = [
  { icon: Package, title: 'Produit non reçu', desc: 'Si votre commande n\'arrive pas dans les délais annoncés, nous vous remboursons intégralement.' },
  { icon: AlertCircle, title: 'Produit non conforme', desc: 'Si le produit reçu ne correspond pas à la description ou est défectueux, nous organisons le retour et le remboursement.' },
  { icon: CreditCard, title: 'Paiement non sécurisé', desc: 'Tous les paiements sont chiffrés. En cas de problème, notre équipe intervient sous 24h.' },
  { icon: FileText, title: 'Annulation de commande', desc: 'Annulation gratuite avant expédition. Remboursement sous 48h après validation.' },
]

const CLAIM_STEPS = [
  { step: 1, title: 'Connectez-vous', desc: 'Accédez à votre espace personnel et allez dans "Mes commandes".' },
  { step: 2, title: 'Sélectionnez la commande', desc: 'Choisissez la commande concernée et cliquez sur "Signaler un problème".' },
  { step: 3, title: 'Décrivez le problème', desc: 'Expliquez la situation et joignez des photos si nécessaire.' },
  { step: 4, title: 'Recevez une réponse', desc: 'Notre équipe examine votre demande sous 24-48h et vous propose une solution.' },
]

const REFUND_TIMELINE = [
  { title: 'Remboursement par carte bancaire', time: '5-10 jours ouvrés' },
  { title: 'Remboursement par PayPal', time: '24-48 heures' },
  { title: 'Remboursement par virement', time: '3-5 jours ouvrés' },
  { title: 'Crédit MarcoStore', time: 'Immédiat' },
]

export default function BuyerProtectionPage() {
  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <ShieldCheck size={64} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Protection Acheteur</h1>
            <p className="text-lg text-base-content/70">
              Achetez en toute confiance. Vos achats sont protégés par MarcoStore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Ce qui est couvert</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COVERED_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card bg-base-100 shadow-md">
                  <div className="card-body flex-row">
                    <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-success" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-base-content/70 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Comment signaler un problème</h2>
          <div className="flex flex-col gap-6">
            {CLAIM_STEPS.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center shrink-0 font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-base-content/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/orders" className="btn btn-primary btn-lg">
              Accéder à mes commandes
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Délais de Remboursement</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Méthode de paiement</th>
                  <th className="text-right">Délai de remboursement</th>
                </tr>
              </thead>
              <tbody>
                {REFUND_TIMELINE.map((item) => (
                  <tr key={item.title}>
                    <td className="font-medium">{item.title}</td>
                    <td className="text-right">
                      <span className="badge badge-success badge-sm">{item.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Garantie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body items-center text-center">
                <Clock size={40} className="text-primary mb-2" />
                <h3 className="card-title">30 jours</h3>
                <p className="text-sm text-base-content/70">Délai pour signaler un problème après réception</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body items-center text-center">
                <RefreshCw size={40} className="text-primary mb-2" />
                <h3 className="card-title">Retour gratuit</h3>
                <p className="text-sm text-base-content/70">Étiquette de retour prépayée fournie</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body items-center text-center">
                <CheckCircle size={40} className="text-primary mb-2" />
                <h3 className="card-title">100% Remboursé</h3>
                <p className="text-sm text-base-content/70">Remboursement intégral du prix et des frais de port</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Besoin d'aide ?</h2>
          <p className="mb-8 opacity-90">Notre équipe de protection acheteur est disponible pour répondre à vos questions.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
              <Phone size={20} />
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

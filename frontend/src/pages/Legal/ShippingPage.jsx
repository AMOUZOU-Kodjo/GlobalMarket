import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  Truck,
  Clock,
  Globe,
  Package,
  MapPin,
  CreditCard,
  ArrowRight,
  Plane,
  Ship,
  Info,
} from 'lucide-react'

const SHIPPING_METHODS = [
  { name: 'Standard', icon: Truck, price: '4,99 €', time: '3-5 jours ouvrés', carrier: 'Colissimo / Mondial Relay' },
  { name: 'Express', icon: Package, price: '9,99 €', time: '1-2 jours ouvrés', carrier: 'Chronopost' },
  { name: 'Point relais', icon: MapPin, price: '2,99 €', time: '4-6 jours ouvrés', carrier: 'Mondial Relay' },
  { name: 'Livraison le lendemain', icon: Clock, price: '14,99 €', time: 'Le lendemain', carrier: 'Colissimo Priority' },
]

const DELIVERY_TIMES = [
  { region: 'France métropolitaine', standard: '3-5 jours', express: '1-2 jours' },
  { region: 'Corse', standard: '5-7 jours', express: '2-3 jours' },
  { region: 'DOM-TOM', standard: '7-15 jours', express: '3-5 jours' },
  { region: 'Europe (UE)', standard: '5-10 jours', express: '2-4 jours' },
  { region: 'Europe (hors UE)', standard: '7-15 jours', express: '3-5 jours' },
  { region: 'Amérique du Nord', standard: '10-20 jours', express: '5-10 jours' },
  { region: 'Afrique', standard: '15-30 jours', express: '7-15 jours' },
  { region: 'Asie / Océanie', standard: '15-30 jours', express: '7-15 jours' },
]

export default function ShippingPage() {
  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <Truck size={64} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Livraison</h1>
            <p className="text-lg text-base-content/70">
              Retrouvez toutes les informations sur nos modes de livraison et délais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Modes de Livraison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHIPPING_METHODS.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.name} className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{method.name}</h3>
                        <p className="text-sm text-base-content/60">{method.carrier}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">{method.price}</p>
                        <p className="text-sm text-base-content/60">{method.time}</p>
                      </div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Délais par Région</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Région</th>
                  <th className="text-center">Standard</th>
                  <th className="text-center">Express</th>
                </tr>
              </thead>
              <tbody>
                {DELIVERY_TIMES.map((row) => (
                  <tr key={row.region}>
                    <td className="font-medium">{row.region}</td>
                    <td className="text-center">{row.standard}</td>
                    <td className="text-center">{row.express}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Livraison Internationale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Plane size={28} className="text-primary" />
                  <h3 className="card-title">Expédition aérienne</h3>
                </div>
                <ul className="text-sm text-base-content/70 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <span className="badge badge-primary badge-xs" />
                    Livraison rapide pour les destinations éloignées
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="badge badge-primary badge-xs" />
                    Suivi en temps réel disponible
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="badge badge-primary badge-xs" />
                    Assurance incluse jusqu&apos;à 500 €
                  </li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={28} className="text-primary" />
                  <h3 className="card-title">Couverture mondiale</h3>
                </div>
                <ul className="text-sm text-base-content/70 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <span className="badge badge-primary badge-xs" />
                    +30 pays couverts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="badge badge-primary badge-xs" />
                    Frais de douane inclus dans le prix
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="badge badge-primary badge-xs" />
                    Emballage adapté à l&apos;international
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Suivre ma commande</h2>
          <p className="text-base-content/70 mb-8">
            Vous recevrez un numéro de suivi par email dès l&apos;expédition de votre commande.
          </p>
          <Link to="/orders" className="btn btn-primary btn-lg">
            Suivre ma commande
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

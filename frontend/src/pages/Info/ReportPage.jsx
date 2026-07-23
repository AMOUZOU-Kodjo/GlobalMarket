import { useState } from 'react'
import { Header } from '../../components/organisms/Header'
import { AlertTriangle, Send, CheckCircle } from 'lucide-react'

const REPORT_TYPES = [
  'Produit contrefait ou imitant une marque',
  'Produit dangereux',
  'Prix abusifs ou trompeurs',
  'Description mensongère',
  'Vendeur non professionnel',
  'Violation de la vie privée',
  'Spam ou contenu indésirable',
  'Autre',
]

export default function ReportPage() {
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Header
        title="Signaler un problème"
        subtitle="Aidez-nous à maintenir la sécurité de la plateforme"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Signaler un problème' }]}
      />

      {submitted ? (
        <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
          <CheckCircle size={48} className="text-success mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Signalement envoyé</h2>
          <p className="text-base-content/70">
            Merci pour votre signalement. Notre équipe examinera votre demande dans les 48 heures.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle size={20} className="text-warning shrink-0 mt-0.5" />
            <p className="text-sm text-base-content/70">
              Tous les signalements sont traités de manière confidentielle. Ne partagez pas d'informations personnelles sensibles dans la description.
            </p>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Type de problème *</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Sélectionnez un type</option>
              {REPORT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description *</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Décrivez le problème en détail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email de contact</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">
              <span className="label-text-alt text-base-content/50">Optionnel — pour vous tenir informé de l'avancement</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full gap-2">
            <Send size={16} />
            Envoyer le signalement
          </button>
        </form>
      )}
    </div>
  )
}

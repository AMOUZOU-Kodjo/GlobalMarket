import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ExternalLink,
} from 'lucide-react'

const SUBJECTS = [
  'Question générale',
  'Problème avec une commande',
  'Question sur un produit',
  'Devenir vendeur',
  'Problème technique',
  'Réclamation',
  'Partenariat',
  'Autre',
]

const SOCIALS = [
  { name: 'Facebook', url: 'https://facebook.com/globalmarket' },
  { name: 'Twitter', url: 'https://twitter.com/globalmarket' },
  { name: 'Instagram', url: 'https://instagram.com/globalmarket' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/globalmarket' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      // silent
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      <section className="hero min-h-[30vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nous contacter</h1>
            <p className="text-lg text-base-content/70">
              Une question ? Notre équipe est là pour vous aider.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title mb-4">Envoyez-nous un message</h2>

                  {isSubmitted && (
                    <div className="alert alert-success mb-4">
                      <MessageSquare size={20} />
                      <span>Votre message a été envoyé avec succès ! Nous vous répondrons sous 24h.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Nom complet</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Jean Dupont"
                          className="input input-bordered w-full"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="jean@exemple.com"
                          className="input input-bordered w-full"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Sujet</span>
                      </label>
                      <select
                        name="subject"
                        className="select select-bordered w-full"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Sélectionnez un sujet</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Message</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="Décrivez votre demande en détail..."
                        className="textarea textarea-bordered w-full h-40"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-control mt-2">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="loading loading-spinner loading-sm" />
                        ) : (
                          <>
                            <Send size={18} />
                            Envoyer le message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title mb-4">Nos coordonnées</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-sm text-base-content/70">123 Rue du Commerce<br />75001 Paris, France</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-sm text-base-content/70">+33 1 23 45 67 89</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-base-content/70">contact@globalmarket.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Horaires</p>
                        <p className="text-sm text-base-content/70">Lun - Ven : 9h - 18h<br />Sam : 10h - 14h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title mb-4">Suivez-nous</h2>
                  <div className="flex flex-wrap gap-2">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm gap-1"
                      >
                        {s.name}
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h3 className="card-title text-base">Besoin d'aide rapide ?</h3>
                  <p className="text-sm text-base-content/70 mb-2">
                    Consultez notre centre d'aide pour des réponses immédiates.
                  </p>
                  <Link to="/help" className="btn btn-sm btn-primary">
                    Centre d'aide
                  </Link>
                  <Link to="/faq" className="btn btn-sm btn-ghost">
                    Voir la FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import authService from '../../services/auth.service'
import { Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await authService.forgotPassword(email)
      setSent(true)
    } catch (err) {
      setError(err.message || 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center">
        <CheckCircle size={64} className="text-success mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Email envoyé</h2>
        <p className="text-base-content/70 mb-6">
          Un email de réinitialisation a été envoyé à <strong>{email}</strong>. Vérifiez votre boîte de réception.
        </p>
        <Link to="/login" className="btn btn-primary">
          <ArrowLeft size={18} /> Retour à la connexion
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Mot de passe oublié ?</h2>
      <p className="text-center text-base-content/70 mb-6">Entrez votre email pour recevoir un lien de réinitialisation.</p>
      {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2">
          <Mail size={16} className="opacity-50" />
          <input type="email" placeholder="Votre adresse email" value={email} onChange={(e) => setEmail(e.target.value)} required className="grow" />
        </label>
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : <><Send size={18} /> Envoyer le lien</>}
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        <Link to="/login" className="link link-primary"><ArrowLeft size={14} className="inline" /> Retour à la connexion</Link>
      </p>
    </div>
  )
}

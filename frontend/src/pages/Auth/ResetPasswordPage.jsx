import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import authService from '../../services/auth.service'
import { Lock, ArrowLeft, CheckCircle } from 'lucide-react'

function getPasswordStrength(pw) {
  let s = 0
  if (pw.length >= 8) s++
  if (/[A-Z]/.test(pw)) s++
  if (/[a-z]/.test(pw)) s++
  if (/[0-9]/.test(pw)) s++
  if (/[^A-Za-z0-9]/.test(pw)) s++
  return s
}

const strengthColors = ['error', 'error', 'warning', 'info', 'success', 'success']
const strengthLabels = ['Très faible', 'Faible', 'Moyen', 'Bon', 'Fort', 'Excellent']

export default function ResetPasswordPage() {
  const { token } = useParams()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const strength = getPasswordStrength(password)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) { setError('Les mots de passe ne correspondent pas'); return }
    if (password.length < 8) { setError('Le mot de passe doit contenir au moins 8 caractères'); return }
    setLoading(true)
    try {
      await authService.resetPassword(token, password)
      setSuccess(true)
      setTimeout(() => navigate('/login'), 3000)
    } catch (err) {
      setError(err.message || 'Lien invalide ou expiré')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center">
        <CheckCircle size={64} className="text-success mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Mot de passe réinitialisé</h2>
        <p className="text-base-content/70 mb-6">Redirection vers la connexion...</p>
        <Link to="/login" className="btn btn-primary"><ArrowLeft size={18} /> Se connecter</Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Nouveau mot de passe</h2>
      <p className="text-center text-base-content/70 mb-6">Choisissez un nouveau mot de passe sécurisé.</p>
      {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <Lock size={16} className="opacity-50" />
            <input type="password" placeholder="Nouveau mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} className="grow" />
          </label>
          {password && (
            <div className="mt-2">
              <div className="flex justify-between text-xs mb-1"><span>Force : {strengthLabels[strength]}</span></div>
              <progress className={`progress progress-${strengthColors[strength]} w-full`} value={strength} max="5"></progress>
            </div>
          )}
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <Lock size={16} className="opacity-50" />
          <input type="password" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="grow" />
        </label>
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Réinitialiser le mot de passe'}
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        <Link to="/login" className="link link-primary"><ArrowLeft size={14} className="inline" /> Retour à la connexion</Link>
      </p>
    </div>
  )
}

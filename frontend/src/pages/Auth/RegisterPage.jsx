import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import authService from '../../services/auth.service'
import { Mail, Lock, User, UserPlus } from 'lucide-react'

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

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const strength = getPasswordStrength(form.password)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!acceptTerms) { setError('Vous devez accepter les conditions d\'utilisation'); return }
    if (form.password !== form.confirmPassword) { setError('Les mots de passe ne correspondent pas'); return }
    if (form.password.length < 8) { setError('Le mot de passe doit contenir au moins 8 caractères'); return }
    setLoading(true)
    try {
      const { user, accessToken, refreshToken } = await authService.register(form.name, form.email, form.password)
      login(user, accessToken)
      if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
      navigate(user.role === 'admin' ? '/admin' : user.role === 'seller' ? '/seller/shop' : '/')
    } catch (err) {
      setError(err.message || 'Erreur lors de l\'inscription')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="input input-bordered w-full flex items-center gap-2">
          <User size={16} className="opacity-50" />
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={form.name}
            onChange={handleChange}
            required
            className="grow"
          />
        </label>
        <label className="input input-bordered w-full flex items-center gap-2">
          <Mail size={16} className="opacity-50" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="grow"
          />
        </label>
        <div>
          <label className="input input-bordered w-full flex items-center gap-2">
            <Lock size={16} className="opacity-50" />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              required
              minLength={8}
              className="grow"
            />
          </label>
          {form.password && (
            <div className="mt-2">
              <div className="flex justify-between text-xs mb-1">
                <span>Force : {strengthLabels[strength]}</span>
              </div>
              <progress
                className={`progress progress-${strengthColors[strength]} w-full`}
                value={strength}
                max="5"
              ></progress>
            </div>
          )}
        </div>
        <label className="input input-bordered w-full flex items-center gap-2">
          <Lock size={16} className="opacity-50" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="grow"
          />
        </label>
        <label className="flex items-center w-full gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="checkbox checkbox-sm checkbox-primary"
          />
          <span>
            J'accepte les{" "}
            <Link to="/terms" className="link link-primary" target="_blank">
              conditions d'utilisation
            </Link>{" "}
            et la{" "}
            <Link to="/privacy" className="link link-primary" target="_blank">
              politique de confidentialité
            </Link>
          </span>
        </label>
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <>
              <UserPlus size={18} /> Créer mon compte
            </>
          )}
        </button>
      </form>
      <div className="divider">OU</div>
      <div className="flex gap-2">
        <button className="btn btn-outline flex-1 gap-2" disabled>
          <span className="text-lg">G</span> Google
        </button>
        <button className="btn btn-outline flex-1 gap-2" disabled>
          <span className="text-lg">f</span> Facebook
        </button>
      </div>
      <p className="text-center mt-4 text-sm">
         <span className="mx-6">Déjà un compte ?</span>
        
        <Link to="/login" className="link link-primary no-underline">
           Se connecter 
        </Link>
        
      </p>
    </div>
  );
}

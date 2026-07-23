import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { authAPI } from '../services/api'
import { Mail, Lock, LogIn } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { user, accessToken, refreshToken } = await authAPI.login({ email, password })
      login(user, accessToken)
      if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
      navigate(user.role === 'admin' ? '/admin' : user.role === 'seller' ? '/seller/shop' : '/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>

      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="input input-bordered w-full flex items-center gap-2">
          <Mail size={16} className="opacity-50" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="grow"
          />
        </label>

        <label className="input input-bordered flex w-full items-center gap-2">
          <Lock size={16} className="opacity-50" />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="grow"
          />
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
              <LogIn size={18} />
              Se connecter
            </>
          )}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        <span className="mx-6">Pas encore de compte ?</span>
        <Link to="/register" className="link link-primary no-underline">
          S'inscrire
        </Link>
      </p>
  
    </div>
  );
}

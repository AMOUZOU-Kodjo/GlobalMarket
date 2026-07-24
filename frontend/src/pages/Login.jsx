import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../context/AuthContext'
import { authAPI } from '../services/api'
import { Mail, Lock, LogIn } from 'lucide-react'

export default function Login() {
  const { t } = useTranslation()
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
      <h2 className="text-2xl font-bold text-center mb-6">{t('auth.loginTitle')}</h2>

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
            placeholder={t('auth.email')}
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
            placeholder={t('auth.password')}
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
              {t('nav.signIn')}
            </>
          )}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        <span className="mx-6">{t('auth.noAccount')}</span>
        <Link to="/register" className="link link-primary no-underline">
          {t('auth.register')}
        </Link>
      </p>
  
    </div>
  );
}

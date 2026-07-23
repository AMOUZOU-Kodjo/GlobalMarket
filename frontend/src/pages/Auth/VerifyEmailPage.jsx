import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import authService from '../../services/auth.service'
import { CheckCircle, RotateCcw } from 'lucide-react'

export default function VerifyEmailPage() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const inputRefs = useRef([])

  useEffect(() => {
    if (cooldown <= 0) return
    const timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
    return () => clearTimeout(timer)
  }, [cooldown])

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newCode = [...code]
    newCode[index] = value.slice(-1)
    setCode(newCode)
    setError('')
    if (value && index < 5) inputRefs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newCode = pasted.split('').concat(Array(6).fill('')).slice(0, 6)
    setCode(newCode)
    inputRefs.current[Math.min(pasted.length, 5)]?.focus()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fullCode = code.join('')
    if (fullCode.length !== 6) { setError('Veuillez entrer le code complet à 6 chiffres'); return }
    setLoading(true)
    try {
      await authService.verifyEmail(fullCode)
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Code invalide')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = () => {
    setCooldown(60)
    setCode(['', '', '', '', '', ''])
    setError('')
  }

  if (success) {
    return (
      <div className="text-center">
        <CheckCircle size={64} className="text-success mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Email vérifié !</h2>
        <p className="text-base-content/70 mb-6">Votre compte est maintenant actif.</p>
        <Link to="/login" className="btn btn-primary">Se connecter</Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Vérification de l'email</h2>
      <p className="text-center text-base-content/70 mb-6">Entrez le code à 6 chiffres envoyé à votre adresse email.</p>
      {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
        <div className="flex gap-2" onPaste={handlePaste}>
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="input input-bordered w-12 h-14 text-center text-xl font-bold"
              autoFocus={i === 0}
            />
          ))}
        </div>
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Vérifier'}
        </button>
      </form>
      <div className="text-center mt-4">
        <button onClick={handleResend} className="btn btn-ghost btn-sm gap-2" disabled={cooldown > 0}>
          <RotateCcw size={14} />
          {cooldown > 0 ? `Renvoyer dans ${cooldown}s` : 'Renvoyer le code'}
        </button>
      </div>
    </div>
  )
}

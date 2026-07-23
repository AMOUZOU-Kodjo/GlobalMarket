import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Send,
  CreditCard,
  Smartphone,
  Heart,
  CheckCircle,
} from 'lucide-react'

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const FOOTER_COLUMNS = [
  {
    title: 'À propos',
    links: [
      { label: 'Qui sommes-nous', href: '/about' },
      { label: 'Carrières', href: '/careers' },
      { label: 'Presse', href: '/press' },
      { label: 'Blog', href: '/blog' },
      { label: 'Partenaires', href: '/partners' },
    ],
  },
  {
    title: 'Acheter',
    links: [
      { label: 'Comment ça marche', href: '/how-it-works' },
      { label: 'Protection acheteur', href: '/buyer-protection' },
      { label: 'Livraison', href: '/shipping' },
      { label: 'Retours & Remboursements', href: '/returns' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Vendre',
    links: [
      { label: 'Ouvrir une boutique', href: '/seller/register' },
      { label: 'Tarifs & Commissions', href: '/seller/pricing' },
      { label: 'Ressources vendeurs', href: '/seller/resources' },
      { label: 'Succès vendeurs', href: '/seller/success-stories' },
      { label: 'API Vendeurs', href: '/seller/api' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: "Centre d'aide", href: '/help' },
      { label: 'Nous contacter', href: '/contact' },
      { label: 'Signaler un problème', href: '/report' },
      { label: 'Accessibilité', href: '/accessibility' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Conditions Générales', href: '/terms' },
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: 'Politique de cookies', href: '/cookies' },
      { label: 'Conformité RGPD', href: '/gdpr' },
    ],
  },
]

const PAYMENT_METHODS = [
  { name: 'Visa', icon: '💳' },
  { name: 'Mastercard', icon: '💳' },
  { name: 'PayPal', icon: '🅿️' },
  { name: 'Apple Pay', icon: '🍎' },
  { name: 'Google Pay', icon: '🔵' },
  { name: 'Stripe', icon: '💰' },
]

const SOCIAL_LINKS = [
  { platform: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com/globalmarket', color: 'hover:text-blue-500' },
  { platform: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/globalmarket', color: 'hover:text-sky-500' },
  { platform: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/globalmarket', color: 'hover:text-pink-500' },
  { platform: 'YouTube', icon: YoutubeIcon, url: 'https://youtube.com/globalmarket', color: 'hover:text-red-500' },
  { platform: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/company/globalmarket', color: 'hover:text-blue-600' },
]

const LANGUAGES = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'pt', label: 'Português' },
  { code: 'zh', label: '中文' },
]

const CURRENCIES = [
  { code: 'EUR', label: 'EUR €' },
  { code: 'USD', label: 'USD $' },
  { code: 'GBP', label: 'GBP £' },
  { code: 'XOF', label: 'XOF CFA' },
  { code: 'BRL', label: 'BRL R$' },
  { code: 'MAD', label: 'MAD د.م.' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [selectedLang, setSelectedLang] = useState('fr')
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 5000)
    } catch {
      // silent fail
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer role="contentinfo" className="bg-base-200 text-base-content">
      <div className="bg-primary/5 border-b border-base-300">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2">Restez informé des meilleures offres</h3>
              <p className="text-base-content/60">
                Inscrivez-vous à notre newsletter et recevez -10% sur votre première commande.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full lg:w-auto">
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-success font-medium">
                  <CheckCircle size={20} />
                  <span>Merci ! Vous êtes inscrit(e).</span>
                </div>
              ) : (
                <>
                  <label className="input input-bordered flex items-center gap-2 w-full sm:w-80">
                    <Send size={16} className="opacity-50 shrink-0" />
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="grow"
                      aria-label="Adresse email pour la newsletter"
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      "S'abonner"
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={`Liens ${col.title}`}>
              <h4 className="font-bold text-base mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="link link-hover text-sm text-base-content/70 hover:text-primary inline-flex items-center gap-1"
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                      {link.external && (
                        <span className="text-xs opacity-50">↗</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="divider"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <h4 className="font-semibold text-sm mb-2">Téléchargez l'application</h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="btn btn-outline btn-sm gap-2"
                  aria-label="Télécharger sur App Store"
                >
                  <Smartphone size={16} />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-60">Disponible sur</p>
                    <p className="text-xs font-bold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="btn btn-outline btn-sm gap-2"
                  aria-label="Télécharger sur Google Play"
                >
                  <Smartphone size={16} />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-60">Disponible sur</p>
                    <p className="text-xs font-bold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Langue</h4>
              <select
                className="select select-bordered select-sm w-40"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                aria-label="Sélectionner la langue"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Devise</h4>
              <select
                className="select select-bordered select-sm w-40"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                aria-label="Sélectionner la devise"
              >
                {CURRENCIES.map((cur) => (
                  <option key={cur.code} value={cur.code}>{cur.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2">Suivez-nous</h4>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-circle btn-ghost btn-sm ${social.color} transition-colors`}
                    aria-label={`Suivez-nous sur ${social.platform}`}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="GlobalMarket" className="h-6 w-6 object-contain" />
            <span className="font-bold">
              <span className="text-primary">Global</span>Market
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CreditCard size={16} className="opacity-40" />
            <div className="flex gap-2">
              {PAYMENT_METHODS.map((method) => (
                <span
                  key={method.name}
                  className="text-lg"
                  title={method.name}
                  aria-label={`Paiement par ${method.name}`}
                >
                  {method.icon}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-base-content/50 flex items-center gap-1">
            © {new Date().getFullYear()} GlobalMarket. Tous droits réservés.
            <span className="inline-flex items-center gap-0.5">
              Fait avec <Heart size={12} className="text-error fill-error" /> partout dans le monde
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

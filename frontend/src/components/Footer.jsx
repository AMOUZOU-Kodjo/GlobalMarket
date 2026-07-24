import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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

function VisaIcon({ size = 32 }) {
  return (
    <svg width={size} height={size * 0.625} viewBox="0 0 80 50" fill="none">
      <rect width="80" height="50" rx="6" fill="#1A1F71" />
      <path d="M31.5 33H26.8L30.1 17H34.8L31.5 33Z" fill="#FFFFFF" />
      <path d="M53.4 17.3C52.7 17.0 51.6 16.8 50.4 16.8C47.3 16.8 45.1 18.4 45.1 20.6C45.1 22.2 46.6 23.1 47.7 23.7C48.9 24.3 49.3 24.7 49.3 25.2C49.3 26.0 48.3 26.4 47.4 26.4C46.1 26.4 45.4 26.2 44.3 25.7L43.9 25.5L43.5 27.8C44.3 28.2 45.8 28.5 47.4 28.5C50.7 28.5 52.8 26.9 52.8 24.5C52.8 23.1 51.9 22.0 50.0 21.1C48.9 20.5 48.3 20.1 48.3 19.5C48.3 19.0 48.9 18.5 50.1 18.5C51.1 18.5 51.9 18.7 52.5 19.0L52.8 19.1L53.4 17.3Z" fill="#FFFFFF" />
      <path d="M57.2 17H54.8C54.1 17 53.5 17.2 53.2 17.9L47.3 33H52.1L52.9 30.8H58.3L58.8 33H63L57.2 17ZM53.9 28C54.3 26.9 55.6 23.3 55.6 23.3L56.7 28H53.9Z" fill="#FFFFFF" />
      <path d="M25.6 17L21.1 28.4L20.6 25.9C19.7 23.2 17.2 20.2 14.4 18.9L18.4 33H23.2L30.4 17H25.6Z" fill="#FFFFFF" />
      <path d="M20.1 17H11.2L11 17.6C17.6 19.2 22 23.9 23.1 25.9L21.5 18.2C21.2 17.3 20.8 17 20.1 17Z" fill="#F7B600" />
      <path d="M68.9 17H64.2C63.5 17 62.9 17.4 62.7 18L54.4 33H59.2L60.4 29.6H67.7L68.2 33H72.4L68.9 17ZM61.7 27.5C62.1 26.3 63.5 22.7 63.5 22.7L64.7 27.5H61.7Z" fill="#FFFFFF" />
      <path d="M18.9 17H9.3L9 17.7C15 19.2 19.1 23.2 20.3 25.4L18 18.2C17.8 17.4 18.4 17 18.9 17Z" fill="#F7B600" />
    </svg>
  )
}

function MastercardIcon({ size = 32 }) {
  return (
    <svg width={size} height={size * 0.625} viewBox="0 0 80 50" fill="none">
      <rect width="80" height="50" rx="6" fill="#252525" />
      <circle cx="32" cy="25" r="12" fill="#EB001B" />
      <circle cx="48" cy="25" r="12" fill="#F79E1B" />
      <path d="M40 15.5C42.7 17.8 44.5 21.2 44.5 25C44.5 28.8 42.7 32.2 40 34.5C37.3 32.2 35.5 28.8 35.5 25C35.5 21.2 37.3 17.8 40 15.5Z" fill="#FF5F00" />
    </svg>
  )
}

function PayPalIcon({ size = 32 }) {
  return (
    <svg width={size} height={size * 0.625} viewBox="0 0 80 50" fill="none">
      <rect width="80" height="50" rx="6" fill="#FFFFFF" stroke="#E5E7EB" />
      <path d="M30.5 37H26.2L28.5 13H35C38.3 13 40.8 14.8 41.3 17.8C41.9 21.5 40.1 24.3 37 25L38.5 34.2H34L32 26.3C31.8 26.5 31.4 26.7 30.9 26.8L30.5 37Z" fill="#253B80" />
      <path d="M50.5 13.5H44.5C43.2 13.5 42.2 14.5 42 15.7L37.5 37H42.5L43.5 31H49.5L44 37H48.5L54.5 13.5H50.5ZM44.5 28L46.5 17.5L47.5 24.5L44.5 28Z" fill="#253B80" />
      <path d="M32 13.5H22L21.5 16.5C21.3 17.7 22.3 18.8 23.6 18.8H28L25 37H30L32 13.5Z" fill="#179BD7" />
      <path d="M49 13.5H39L38.5 16.5C38.3 17.7 39.3 18.8 40.6 18.8H45L42 37H47L49 13.5Z" fill="#179BD7" />
    </svg>
  )
}

function ApplePayIcon({ size = 32 }) {
  return (
    <svg width={size} height={size * 0.625} viewBox="0 0 80 50" fill="none">
      <rect width="80" height="50" rx="6" fill="#000000" />
      <path d="M25.8 20.5C26.5 19.7 27 18.5 26.9 17.4C26 17.5 24.8 18.1 24.1 18.9C23.5 19.6 22.9 20.8 23 21.9C24 22 25.1 21.3 25.8 20.5Z" fill="#FFFFFF" />
      <path d="M26.9 22.1C25.5 22 24.3 22.8 23.6 22.8C22.9 22.8 21.9 22.1 20.7 22.1C19.1 22.2 17.7 23.1 16.9 24.5C15.3 27.3 16.5 31.4 18 33.6C18.8 34.7 19.7 35.9 20.9 35.8C22 35.8 22.4 35.1 23.8 35.1C25.1 35.1 25.5 35.8 26.7 35.8C27.9 35.7 28.7 34.6 29.5 33.5C30.4 32.2 30.8 31 30.8 30.9C30.8 30.9 27.7 29.7 27.6 26.2C27.6 23.2 29.9 21.8 30.1 21.7C28.8 19.8 26.8 19.6 26.2 19.5" fill="#FFFFFF" />
      <path d="M37.8 14H42.5C43.5 14 45.3 14.6 45.3 16.7C45.3 19.4 43.6 20.3 42.1 20.8L45.4 35.7H42.4L40 22H39.8V35.7H37.2V22H37V14H37.8Z" fill="#FFFFFF" />
      <path d="M50.5 14H54.8C57.2 14 58.4 15.2 58.4 16.7C58.4 18.4 56.8 19.3 55.4 19.5L58.7 35.7H55.7L53.5 21.2H53.3V35.7H50.5V14ZM53.3 19.6C54.2 19.6 55.5 19.4 55.5 17.7C55.5 16.4 54.8 16.1 54 16.1H53.3V19.6Z" fill="#FFFFFF" />
      <path d="M60 14H65.4C67.6 14 68.6 15.3 68.6 16.8C68.6 18.4 67.4 19.4 65.4 19.4H62.7V35.7H60V14ZM62.7 19.4C64.2 19.4 65.4 19 65.4 17.5C65.4 16.3 64.6 16 63.5 16H62.7V19.4Z" fill="#FFFFFF" />
    </svg>
  )
}

function GooglePayIcon({ size = 32 }) {
  return (
    <svg width={size} height={size * 0.625} viewBox="0 0 80 50" fill="none">
      <rect width="80" height="50" rx="6" fill="#FFFFFF" stroke="#E5E7EB" />
      <path d="M41.3 25.2C41.3 24.3 41.2 23.5 41.1 22.7H36.8V27H39.3C39.1 28.3 38.3 29.4 37.1 30.1V32.5H39.3C40.6 31.3 41.3 29.5 41.3 27.2V25.2Z" fill="#4285F4" />
      <path d="M36.8 33.8C38.4 33.8 39.8 33.3 40.8 32.3L38.6 30C38.1 30.4 37.5 30.6 36.8 30.6C35.3 30.6 34 29.6 33.6 28.2H31.3V30.7C32.3 32.6 34.4 33.8 36.8 33.8Z" fill="#34A853" />
      <path d="M33.6 28.2C33.4 27.5 33.5 26.8 33.5 26C33.5 25.2 33.4 24.5 33.6 23.8V21.3H31.3C30.5 22.8 30 24.4 30 26C30 27.6 30.5 29.2 31.3 30.7L33.6 28.2Z" fill="#FBBC05" />
      <path d="M36.8 21.4C37.9 21.4 38.8 21.8 39.6 22.5L40.9 21.2C39.8 20.2 38.4 19.6 36.8 19.6C34.4 19.6 32.3 20.8 31.3 22.8L33.6 25.2C34 23.8 35.3 22.9 36.8 21.4Z" fill="#EA4335" />
      <path d="M28 18H24V37H28V18Z" fill="#4285F4" />
      <path d="M56.5 28.3C56.5 26.1 56.3 24.3 56 22.7H52V27.6H54.5C54.3 28.8 53.7 29.6 52.8 30.1V32.5H54.8C56 31.3 56.5 29.5 56.5 28.3Z" fill="#4285F4" />
      <path d="M52 33.8C53.5 33.8 54.8 33.3 55.7 32.3L53.5 30C53.1 30.4 52.5 30.6 52 30.6C50.5 30.6 49.2 29.6 48.8 28.2H46.5V30.7C47.5 32.6 49.6 33.8 52 33.8Z" fill="#34A853" />
      <path d="M48.8 28.2C48.6 27.5 48.7 26.8 48.7 26C48.7 25.2 48.6 24.5 48.8 23.8V21.3H46.5C45.7 22.8 45.2 24.4 45.2 26C45.2 27.6 45.7 29.2 46.5 30.7L48.8 28.2Z" fill="#FBBC05" />
      <path d="M52 21.4C53.1 21.4 54 21.8 54.8 22.5L56.1 21.2C55 20.2 53.6 19.6 52 19.6C49.6 19.6 47.5 20.8 46.5 22.8L48.8 25.2C49.2 23.8 50.5 22.9 52 21.4Z" fill="#EA4335" />
    </svg>
  )
}

function AppleStoreIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

function PlayStoreIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.807 1.626a1 1 0 010 1.734l-2.808 1.626L15.206 12l2.492-2.693zM5.864 2.658L16.8 8.99l-2.3 2.302-8.636-8.634z"/>
    </svg>
  )
}

const LANGUAGES = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
]

const CURRENCIES = [
  { code: 'EUR', label: 'EUR €' },
  { code: 'USD', label: 'USD $' },
  { code: 'GBP', label: 'GBP £' },
  { code: 'XOF', label: 'XOF CFA' },
]

const SOCIAL_LINKS = [
  { platform: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com/marcostore', color: 'hover:text-blue-500' },
  { platform: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/marcostore', color: 'hover:text-sky-500' },
  { platform: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/marcostore', color: 'hover:text-pink-500' },
  { platform: 'YouTube', icon: YoutubeIcon, url: 'https://youtube.com/marcostore', color: 'hover:text-red-500' },
  { platform: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/company/marcostore', color: 'hover:text-blue-600' },
]

const PAYMENT_METHODS = [
  { name: 'Visa', icon: VisaIcon },
  { name: 'Mastercard', icon: MastercardIcon },
  { name: 'PayPal', icon: PayPalIcon },
  { name: 'Apple Pay', icon: ApplePayIcon },
  { name: 'Google Pay', icon: GooglePayIcon },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [selectedLang, setSelectedLang] = useState('fr')
  const [selectedCurrency, setSelectedCurrency] = useState('EUR')

  const { t } = useTranslation()

  const FOOTER_COLUMNS = [
    {
      title: t('footer.about'),
      links: [
        { label: t('footer.whoAreWe'), href: '/about' },
        { label: t('footer.careers'), href: '/careers' },
        { label: t('footer.press'), href: '/press' },
        { label: t('footer.blog'), href: '/blog' },
        { label: t('footer.partners'), href: '/partners' },
      ],
    },
    {
      title: t('footer.buying'),
      links: [
        { label: t('footer.howItWorks'), href: '/how-it-works' },
        { label: t('footer.buyerProtection'), href: '/buyer-protection' },
        { label: t('footer.shipping'), href: '/shipping' },
        { label: t('footer.returns'), href: '/returns' },
        { label: t('footer.faq'), href: '/faq' },
      ],
    },
    {
      title: t('footer.selling'),
      links: [
        { label: t('footer.openShop'), href: '/seller/register' },
        { label: t('footer.pricing'), href: '/seller/pricing' },
        { label: t('footer.sellerResources'), href: '/seller/resources' },
        { label: t('footer.sellerSuccess'), href: '/seller/success-stories' },
        { label: t('footer.sellerApi'), href: '/seller/api' },
      ],
    },
    {
      title: t('footer.help'),
      links: [
        { label: t('footer.helpCenter'), href: '/help' },
        { label: t('footer.contactUs'), href: '/contact' },
        { label: t('footer.reportProblem'), href: '/report' },
        { label: t('footer.accessibility'), href: '/accessibility' },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { label: t('footer.terms'), href: '/terms' },
        { label: t('footer.privacy'), href: '/privacy' },
        { label: t('footer.cookies'), href: '/cookies' },
        { label: t('footer.gdpr'), href: '/gdpr' },
      ],
    },
  ]

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
              <h3 className="text-xl font-bold mb-2">{t('footer.newsletter')}</h3>
              <p className="text-base-content/60">
                {t('footer.newsletterDesc')}
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full lg:w-auto">
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-success font-medium">
                  <CheckCircle size={20} />
                  <span>{t('footer.newsletterSuccess')}</span>
                </div>
              ) : (
                <>
                  <label className="input input-bordered flex items-center gap-2 w-full sm:w-80">
                    <Send size={16} className="opacity-50 shrink-0" />
                    <input
                      type="email"
                      placeholder={t('footer.newsletterEmail')}
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
                      t('footer.subscribe')
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
              <h4 className="font-semibold text-sm mb-2">{t('footer.downloadApp')}</h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="btn btn-outline btn-sm gap-2"
                  aria-label="Télécharger sur App Store"
                >
                  <AppleStoreIcon size={18} />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-60">Télécharger sur</p>
                    <p className="text-xs font-bold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="btn btn-outline btn-sm gap-2"
                  aria-label="Télécharger sur Google Play"
                >
                  <PlayStoreIcon size={18} />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-60">Disponible sur</p>
                    <p className="text-xs font-bold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">{t('footer.language')}</h4>
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
              <h4 className="font-semibold text-sm mb-2">{t('common.currency')}</h4>
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
            <h4 className="font-semibold text-sm mb-2">{t('footer.followUs')}</h4>
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
            <img src="/logo.png" alt="MarcoStore" className="h-6 w-6 object-contain" />
            <span className="font-bold">
              <span className="text-primary">Marco</span>Store
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CreditCard size={16} className="opacity-40" />
            <div className="flex items-center gap-2.5">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon
                return (
                  <div
                    key={method.name}
                    title={method.name}
                    aria-label={`Paiement par ${method.name}`}
                  >
                    <Icon size={36} />
                  </div>
                )
              })}
            </div>
          </div>

          <p className="text-sm text-base-content/50  flex items-center gap-1">
            © {new Date().getFullYear()} MarcoStore. {t('footer.allRights')}
            <span className="inline-flex items-center gap-0.5">
              {t('footer.madeWith')} <Heart size={12} className="text-error fill-error" /> {t('footer.worldwide')}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

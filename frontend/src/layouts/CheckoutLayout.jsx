import { Outlet, Link } from 'react-router-dom'
import { Store, Lock, ChevronLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CheckoutLayout() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <header className="bg-base-100 border-b border-base-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Store size={24} className="text-primary" />
            <span className="text-lg font-bold hidden sm:inline">
              <span className="text-primary">Global</span>Market
            </span>
          </Link>

          <div className="flex items-center gap-2 text-sm text-base-content/60">
            <Lock size={14} className="text-success" />
            <span className="hidden sm:inline">{t('checkout.securePayment')}</span>
            <span className="sm:hidden">{t('checkout.secure')}</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Link to="/cart" className="btn btn-ghost btn-sm gap-1 mb-6">
            <ChevronLeft size={16} />
            {t('cart.backToShop')}
          </Link>
          <Outlet />
        </div>
      </main>

      <footer className="bg-base-100 border-t border-base-300 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-base-content/50">
          <div className="flex items-center gap-2">
            <Lock size={12} />
            <span>{t('checkout.secureMessage')}</span>
          </div>
          <span>© {new Date().getFullYear()} GlobalMarket</span>
        </div>
      </footer>
    </div>
  )
}

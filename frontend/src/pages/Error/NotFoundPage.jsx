import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Home, Package, MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-6">
          <h1 className="text-[10rem] md:text-[14rem] font-black text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Package size={80} className="text-primary/30 animate-bounce" style={{ animationDuration: '3s' }} />
              <Search size={28} className="text-primary/40 absolute -bottom-1 -right-1" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('common.pageNotFound')}</h2>
        <p className="text-base-content/60 mb-8">
          {t('common.oopsError')}
        </p>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="join w-full max-w-md">
            <input
              type="text"
              placeholder={t('nav.search') + '...'}
              className="input input-bordered join-item flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-primary join-item">
              <Search size={18} />
            </button>
          </div>
        </form>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn btn-primary gap-2">
            <Home size={18} />
            {t('nav.home')}
          </Link>
          <Link to="/products" className="btn btn-outline gap-2">
            <Package size={18} />
            {t('nav.products')}
          </Link>
          <Link to="/contact" className="btn btn-outline gap-2">
            <MessageSquare size={18} />
            {t('nav.contact')}
          </Link>
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-sm gap-2"
          >
            <ArrowLeft size={16} />
            {t('common.back')}
          </button>
        </div>
      </div>
    </div>
  )
}

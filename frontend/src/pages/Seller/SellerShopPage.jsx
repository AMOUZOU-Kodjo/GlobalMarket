import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate } from 'react-router-dom'
import { Store, Star, MapPin, Shield, Package, MessageSquare } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import ProductCard from '../../components/organisms/ProductCard'
import Spinner from '../../components/atoms/Spinner'
import { api } from '../../services/api'

export default function SellerShopPage() {
  const { slug } = useParams()
  const [shop, setShop] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sort, setSort] = useState('newest')
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    setLoading(true)
    setError(null)
    Promise.all([
      api.get(`/seller/shop/${slug}`),
      api.get(`/seller/shop/${slug}/products?limit=50&sort=${sort}`),
    ])
      .then(([shopData, prodData]) => {
        setShop(shopData)
        const prods = prodData?.products || (Array.isArray(prodData) ? prodData : [])
        setProducts(prods)
      })
      .catch((err) => {
        setError(err?.message || t('shop.title'))
      })
      .finally(() => setLoading(false))
  }, [slug, sort])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text={t('common.loading')} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <Store size={48} className="mx-auto mb-4 text-base-content/30" />
        <h2 className="text-xl font-bold mb-2">{t('shop.title')}</h2>
        <p className="text-base-content/60">{error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {shop.banner && (
        <div className="h-48 rounded-box overflow-hidden bg-base-200">
          <img src={shop.banner} alt={shop.shopName} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-20 h-20 rounded-box bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
              {shop.logo ? (
                <img src={shop.logo} alt={shop.shopName} className="w-full h-full object-cover" />
              ) : (
                <Store size={32} className="text-primary" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold">{shop.shopName}</h1>
                {shop.verified && (
                  <span className="badge badge-primary badge-sm gap-1">
                    <Shield size={12} /> Vérifié
                  </span>
                )}
              </div>
              {shop.description && (
                <p className="text-base-content/70 mt-1">{shop.description}</p>
              )}
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-base-content/60">
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  {Number(shop.rating).toFixed(1)}
                </span>
                <span>{shop.productCount} produits</span>
                <span>{shop.totalSales} ventes</span>
                {shop.country && (
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {shop.country}
                  </span>
                )}
                {user && shop.user?.id && user.id !== shop.user.id && (
                  <button
                    type="button"
                    className="btn btn-outline btn-sm gap-1 ml-auto"
                    onClick={() => navigate(`/messages?to=${shop.user.id}`)}
                  >
                    <MessageSquare size={14} />
                    {t('messages.contactSeller')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">{t('shop.allProducts')} ({products.length})</h2>
        <select
          className="select select-bordered select-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Plus récents</option>
          <option value="popular">Populaires</option>
          <option value="price_asc">Prix croissant</option>
          <option value="price_desc">Prix décroissant</option>
          <option value="rating">Mieux notés</option>
        </select>
      </div>

      {products.length === 0 ? (
        <div className="py-12 text-center">
          <Package size={48} className="mx-auto mb-4 text-base-content/30" />
          <p className="text-base-content/60">{t('shop.noProducts')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

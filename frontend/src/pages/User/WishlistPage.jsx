import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import ProductCard from '../../components/organisms/ProductCard'
import { Header } from '../../components/organisms/Header'

const WISHLIST_KEY = 'marcostore_wishlist'

function loadWishlist() {
  try {
    const stored = localStorage.getItem(WISHLIST_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveWishlist(products) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(products))
}

export default function WishlistPage() {
  const { t } = useTranslation()
  const { addItem } = useCart()
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(true)
  const [clearing, setClearing] = useState(false)

  useEffect(() => {
    const data = loadWishlist()
    setWishlist(data)
    setLoading(false)
  }, [])

  const handleRemove = (productId) => {
    const updated = wishlist.filter((p) => (p._id || p.id) !== productId)
    setWishlist(updated)
    saveWishlist(updated)
  }

  const handleAddToCart = (product) => {
    addItem({
      productId: product._id || product.id,
      name: product.name,
      price: product.price,
      image: product.image || (product.images && (typeof product.images[0] === 'string' ? product.images[0] : product.images[0]?.url)),
      stock: product.stock,
      seller: product.seller,
    })
    handleRemove(product._id || product.id)
  }

  const handleClearAll = () => {
    setClearing(true)
    setTimeout(() => {
      setWishlist([])
      saveWishlist([])
      setClearing(false)
    }, 300)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-md" />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header
        title={t('profile.wishlist')}
        subtitle={wishlist.length > 0 ? `${wishlist.length} ${wishlist.length === 1 ? 'article' : 'articles'}` : ''}
        actions={
          wishlist.length > 1 ? (
            <button
              type="button"
              className="btn btn-ghost btn-sm text-error"
              onClick={handleClearAll}
              disabled={clearing}
            >
              <Trash2 size={14} />
              {t('profile.clearWishlist')}
            </button>
          ) : undefined
        }
      />

      {wishlist.length === 0 ? (
        <div className="card bg-base-100 border border-base-200 border-dashed shadow-sm">
          <div className="card-body items-center text-center py-20">
            <div className="w-20 h-20 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
              <Heart size={36} className="text-pink-400/50" />
            </div>
            <h3 className="text-lg font-semibold">{t('profile.noWishlist')}</h3>
            <p className="text-sm text-base-content/50 max-w-sm mt-1 mb-5">
              {t('profile.addWishlist')}
            </p>
            <Link to="/products" className="btn btn-primary gap-2">
              {t('home.allProducts')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <div key={product._id || product.id} className="relative group">
              <ProductCard product={product} onAddToCart={handleAddToCart} />
              <button
                type="button"
                className="absolute top-3 right-3 z-10 btn btn-circle btn-sm btn-error shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-90 group-hover:scale-100"
                title={t('profile.removeWishlist')}
                onClick={() => handleRemove(product._id || product.id)}
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

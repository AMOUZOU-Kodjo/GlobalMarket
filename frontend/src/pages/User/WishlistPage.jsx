import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import ProductCard from '../../components/organisms/ProductCard'
import EmptyState from '../../components/atoms/EmptyState'
import Spinner from '../../components/atoms/Spinner'
import { Header } from '../../components/organisms/Header'

const WISHLIST_KEY = 'globalmarket_wishlist'

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

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex justify-center">
          <Spinner text={t('common.loading')} />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header
        title={t('profile.wishlist')}
        subtitle={`${wishlist.length} ${t('orders.articles')}`}
      />

      {wishlist.length === 0 ? (
        <EmptyState
          icon={Heart}
          title={t('profile.noWishlist')}
          description={t('profile.addWishlist')}
          action={
            <Link to="/products" className="btn btn-primary btn-sm">
              {t('home.allProducts')}
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <div key={product._id || product.id} className="relative group">
              <ProductCard product={product} onAddToCart={handleAddToCart} />
              <button
                type="button"
                className="absolute top-3 right-3 z-10 btn btn-circle btn-sm btn-error opacity-0 group-hover:opacity-100 transition-opacity"
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

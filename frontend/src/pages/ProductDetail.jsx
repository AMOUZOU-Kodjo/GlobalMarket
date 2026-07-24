import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ShoppingCart,
  Heart,
  Share2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Copy,
  MessageSquare,
} from 'lucide-react'
import Breadcrumb from '../components/atoms/Breadcrumb'
import ProductImageGallery from '../components/organisms/ProductImageGallery'
import QuantitySelector from '../components/atoms/QuantitySelector'
import SellerInfoCard from '../components/organisms/SellerInfoCard'
import Tabs from '../components/atoms/Tabs'
import ReviewSection from '../components/organisms/ReviewSection'
import RelatedProducts from '../components/organisms/RelatedProducts'
import Spinner from '../components/atoms/Spinner'
import { EmptyState } from '../components/atoms/EmptyState'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import productService from '../services/product.service'
import formatCurrency from '../utils/formatCurrency'
import MOCK_PRODUCTS from '../data/mockProducts'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { user } = useAuth()

  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [wishlist, setWishlist] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [shareTooltip, setShareTooltip] = useState(false)

  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(false)
  const [reviewSort, setReviewSort] = useState('recent')
  const [reviewPage, setReviewPage] = useState(1)
  const [reviewTotalPages, setReviewTotalPages] = useState(1)

  const { t } = useTranslation()

  const WISHLIST_KEY = 'globalmarket_wishlist'

  const fetchProduct = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await productService.getById(id)
      setProduct(data.product || data)
      setQuantity(1)
      setAddedToCart(false)

      const productId = data.product?.id || data.id
      try {
        const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]')
        setWishlist(stored.some((p) => (p._id || p.id) === productId))
      } catch { /* ignore */ }

      try {
        const relData = await productService.getRelated(productId)
        const relProducts = Array.isArray(relData)
          ? relData
          : relData.products || relData.data || []
        setRelated(relProducts.filter((p) => (p._id || p.id) !== productId))
      } catch {
        setRelated([])
      }
    } catch (err) {
      const mockProduct = MOCK_PRODUCTS.all.find(p => p.id === id || p.slug === id)
      if (mockProduct) {
        setProduct(mockProduct)
        setRelated(MOCK_PRODUCTS.all.filter(p => p.id !== mockProduct.id).slice(0, 4))
        try {
          const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]')
          setWishlist(stored.some((p) => (p._id || p.id) === mockProduct.id))
        } catch { /* ignore */ }
      } else {
        setError(err.message || t('common.productNotFound'))
        setProduct(null)
      }
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchProduct()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [fetchProduct])

  useEffect(() => {
    if (!product) return
    setReviewsLoading(true)
    productService
      .getAll({ product: product._id || product.id, sort: reviewSort, page: reviewPage, limit: 5 })
      .then((data) => {
        const list = Array.isArray(data) ? data : data.reviews || data.data || []
        setReviews(list)
        setReviewTotalPages(data.totalPages || Math.ceil((data.total || list.length) / 5) || 1)
      })
      .catch(() => {
        setReviews([])
      })
      .finally(() => setReviewsLoading(false))
  }, [product, reviewSort, reviewPage])

  const handleAddToCart = () => {
    if (!product) return
    addItem({
      productId: product._id || product.id,
      name: product.name,
      price: Number(product.price),
      image: images[0] || '',
      stock: product.stock || 99,
      seller:
        typeof product.seller === 'string'
          ? product.seller
          : product.seller?.shopName || product.seller?.name || '',
    }, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2500)
  }

  const handleShare = async () => {
    const url = window.location.href
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url)
      }
      setShareTooltip(true)
      setTimeout(() => setShareTooltip(false), 2000)
    } catch {
      setShareTooltip(true)
      setTimeout(() => setShareTooltip(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <Spinner size="lg" text={t('common.loading')} />
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <EmptyState
          icon={XCircle}
          title={t('common.productNotFound')}
          description={error || t('common.productDeletedOrMissing')}
          action={
            <Link to="/products" className="btn btn-primary">
              {t('common.back')}
            </Link>
          }
        />
      </div>
    )
  }

  const images = product.images?.length
    ? product.images.map((img) => (typeof img === 'string' ? img : img.url || ''))
    : product.image
      ? [product.image]
      : []
  const discount =
    product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price)
      ? Math.round(((Number(product.compareAtPrice) - Number(product.price)) / Number(product.compareAtPrice)) * 100)
      : 0
  const inStock = product.stock === undefined || product.stock > 0
  const categoryName =
    typeof product.category === 'string' ? product.category : product.category?.name || ''

  const breadcrumbItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.products'), href: '/products' },
  ]
  if (categoryName) {
    breadcrumbItems.push({
      label: categoryName,
      href: `/category/${typeof product.category === 'object' ? product.category?.slug || '' : ''}`,
    })
  }
  breadcrumbItems.push({ label: product.name })

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb items={breadcrumbItems} className="mb-4" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductImageGallery images={images} />

        <div className="flex flex-col gap-4">
          <div>
            {categoryName && (
              <span className="badge badge-secondary mb-2">{categoryName}</span>
            )}
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${i < Math.round(product.averageRating || product.rating || 0) ? 'text-warning' : 'text-base-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            {(product.reviewCount ?? product._count?.reviews ?? 0) > 0 && (
              <span className="text-sm opacity-60">
                ({product.reviewCount ?? product._count?.reviews ?? 0} {t('products.reviewsCount')})
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">
              {formatCurrency(product.price)}
            </span>
            {discount > 0 && (
              <>
                <span className="text-lg line-through opacity-40">
                  {formatCurrency(product.compareAtPrice)}
                </span>
                <span className="badge badge-error">-{discount}%</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {inStock ? (
              <>
                <CheckCircle size={16} className="text-success" />
                <span className="text-sm text-success font-medium">{t('products.inStock')}</span>
                {product.stock !== undefined && product.stock <= 10 && (
                  <span className="text-xs opacity-60">
                    ({t('products.limitedStock', { count: product.stock })})
                  </span>
                )}
              </>
            ) : (
              <>
                <AlertTriangle size={16} className="text-error" />
                <span className="text-sm text-error font-medium">{t('products.outOfStock')}</span>
              </>
            )}
          </div>

          {product.shortDescription && (
            <p className="text-sm opacity-70 leading-relaxed">{product.shortDescription}</p>
          )}

          <div className="divider my-1" />

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">{t('products.quantity')}</span>
            <QuantitySelector
              value={quantity}
              onChange={setQuantity}
              min={1}
              max={product.stock || 99}
              disabled={!inStock}
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              className={`btn btn-primary btn-lg flex-1 gap-2 transition-colors ${
                addedToCart ? 'btn-success' : ''
              }`}
              disabled={!inStock}
              onClick={handleAddToCart}
            >
              {addedToCart ? (
                <>
                  <CheckCircle size={20} />
                  {t('home.productAdded')}
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  {t('products.addToCart')}
                </>
              )}
            </button>

            <button
              type="button"
              className={`btn btn-outline btn-lg btn-circle ${
                wishlist ? 'btn-error text-error' : ''
              }`}
              onClick={() => {
                const productId = product._id || product.id
                const slug = product.slug || productId
                const name = product.name
                const price = product.price
                const images = product.images
                const stock = product.stock
                const seller = product.seller
                const image = images && (typeof images[0] === 'string' ? images[0] : images[0]?.url) || product.image

                let stored
                try {
                  stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]')
                } catch {
                  stored = []
                }

                if (wishlist) {
                  stored = stored.filter((p) => (p._id || p.id) !== productId)
                  setWishlist(false)
                } else {
                  stored.push({ id: productId, _id: productId, slug, name, price, images, image, stock, seller })
                  setWishlist(true)
                }
                localStorage.setItem(WISHLIST_KEY, JSON.stringify(stored))
              }}
              aria-label={wishlist ? t('profile.removeWishlist') : t('profile.addWishlist')}
            >
              <Heart size={20} fill={wishlist ? 'currentColor' : 'none'} />
            </button>

            <div className="relative">
              <button
                type="button"
                className="btn btn-outline btn-lg btn-circle"
                onClick={handleShare}
                aria-label={t('common.share')}
              >
                <Share2 size={20} />
              </button>
              {shareTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-base-content text-base-100 text-xs rounded-lg whitespace-nowrap">
                  <Copy size={12} className="inline mr-1" />
                  {t('common.linkCopied')}
                </div>
              )}
            </div>

            {user && product.seller?.userId && (
              <button
                type="button"
                className="btn btn-outline btn-lg gap-2"
                onClick={() => navigate(`/messages?to=${product.seller.userId}`)}
              >
                <MessageSquare size={18} />
                <span className="hidden sm:inline">{t('messages.contactSeller')}</span>
              </button>
            )}
          </div>

          <SellerInfoCard seller={product.seller} className="mt-4" />
        </div>
      </div>

      <div className="mb-8">
        <Tabs
          tabs={[
            { id: 'description', label: t('products.description') },
            { id: 'reviews', label: t('products.reviews'), badge: (product.reviewCount ?? product._count?.reviews) || reviews.length || undefined },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-6"
        />

        {activeTab === 'description' && (
          <div className="prose prose-sm max-w-none">
            {product.description ? (
              <div className="whitespace-pre-line text-sm leading-relaxed opacity-80">
                {product.description}
              </div>
            ) : (
              <EmptyState
                title={t('products.noDescription')}
                description={t('products.noDescriptionMessage')}
              />
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <ReviewSection
            reviews={reviews}
            rating={product.averageRating || product.rating || 0}
            reviewCount={product.reviewCount ?? product._count?.reviews ?? 0}
            sortBy={reviewSort}
            onSort={(val) => {
              setReviewSort(val)
              setReviewPage(1)
            }}
            currentPage={reviewPage}
            totalPages={reviewTotalPages}
            onPageChange={setReviewPage}
            loading={reviewsLoading}
          />
        )}
      </div>

      {related.length > 0 && (
        <RelatedProducts
          products={related}
          onAddToCart={(p) =>
            addItem({
              productId: p._id || p.id,
              name: p.name,
              price: Number(p.price),
              image: (Array.isArray(p.images) ? p.images[0]?.url || p.images[0] : p.image) || '',
              stock: p.stock || 99,
              seller:
                typeof p.seller === 'string'
                  ? p.seller
                  : p.seller?.shopName || p.seller?.name || '',
            })
          }
        />
      )}
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Zap } from 'lucide-react'
import HeroCarousel from '../components/organisms/HeroCarousel'
import CategoryGrid from '../components/organisms/CategoryGrid'
import ProductCard from '../components/organisms/ProductCard'
import NewsletterForm from '../components/organisms/NewsletterForm'
import { Skeleton } from '../components/atoms/Skeleton'
import { useCart } from '../context/CartContext'
import productService from '../services/product.service'
import categoryService from '../services/category.service'
import MOCK_PRODUCTS from '../data/mockProducts'

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1400&q=80',
    title: 'Trouvez tout ce dont vous avez besoin',
    subtitle: 'Des milliers de produits à portée de clic, livrés chez vous.',
    ctaText: 'Explorer le catalogue',
    ctaLink: '/products',
  },
  {
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80',
    title: 'Offres exclusives de la semaine',
    subtitle: 'Jusqu\'à -50% sur une sélection de produits tendance.',
    ctaText: 'Voir les offres',
    ctaLink: '/products?sort=newest',
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80',
    title: 'Devenez vendeur sur GlobalMarket',
    subtitle: 'Ouvrez votre boutique en ligne et touchez des millions de clients.',
    ctaText: 'Commencer à vendre',
    ctaLink: '/register',
  },
]

function ProductRowSkeleton() {
  return (
    <div className="flex gap-4 overflow-hidden">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex-shrink-0 w-56">
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <Skeleton variant="rectangular" className="aspect-square rounded-t-xl" />
            <div className="card-body p-4 gap-3">
              <Skeleton width="40%" height={12} />
              <Skeleton width="80%" height={16} />
              <Skeleton width="60%" height={12} />
              <Skeleton width="30%" height={12} />
              <Skeleton width="100%" height={32} className="mt-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CategorySkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="card bg-base-100 border border-base-200">
          <Skeleton variant="rectangular" className="aspect-square" />
          <div className="p-3 flex justify-center">
            <Skeleton width="60%" height={14} />
          </div>
        </div>
      ))}
    </div>
  )
}

function ProductHorizontalRow({ products, loading, title, icon: Icon, onAddToCart }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.75
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  if (loading) return <ProductRowSkeleton />
  if (!products.length) return null

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          {Icon && <Icon size={24} className="text-primary" />}
          {title}
        </h2>
        <div className="flex gap-1">
          <button
            type="button"
            className="btn btn-circle btn-sm btn-ghost"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="btn btn-circle btn-sm btn-ghost"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'thin' }}
      >
        {products.map((product) => (
          <div
            key={product._id || product.id}
            className="flex-shrink-0 w-56 snap-start"
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const { addItem } = useCart()
  const [featured, setFeatured] = useState([])
  const [trending, setTrending] = useState([])
  const [newArrivals, setNewArrivals] = useState([])
  const [categories, setCategories] = useState([])
  const [loadingFeatured, setLoadingFeatured] = useState(true)
  const [loadingTrending, setLoadingTrending] = useState(true)
  const [loadingNew, setLoadingNew] = useState(true)
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterLoading, setNewsletterLoading] = useState(false)

  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.allSettled([
        productService.getFeatured(),
        productService.getTrending(),
        productService.getNew(),
        categoryService.getAll(),
      ])

      const [featuredRes, trendingRes, newRes, catsRes] = results

      if (featuredRes.status === 'fulfilled') {
        const data = featuredRes.value
        const list = Array.isArray(data) ? data : data.products || data.data || []
        setFeatured(list.length > 0 ? list : MOCK_PRODUCTS.featured)
      } else {
        setFeatured(MOCK_PRODUCTS.featured)
      }
      setLoadingFeatured(false)

      if (trendingRes.status === 'fulfilled') {
        const data = trendingRes.value
        const list = Array.isArray(data) ? data : data.products || data.data || []
        setTrending(list.length > 0 ? list : MOCK_PRODUCTS.trending)
      } else {
        setTrending(MOCK_PRODUCTS.trending)
      }
      setLoadingTrending(false)

      if (newRes.status === 'fulfilled') {
        const data = newRes.value
        const list = Array.isArray(data) ? data : data.products || data.data || []
        setNewArrivals(list.length > 0 ? list : MOCK_PRODUCTS.newArrivals)
      } else {
        setNewArrivals(MOCK_PRODUCTS.newArrivals)
      }
      setLoadingNew(false)

      if (catsRes.status === 'fulfilled') {
        const data = catsRes.value
        setCategories(Array.isArray(data) ? data : data.categories || data.data || [])
      }
      setLoadingCategories(false)
    }

    fetchAll()
  }, [])

  const handleAddToCart = (product) => {
    addItem({
      productId: product._id || product.id,
      name: product.name,
      price: product.price,
      image: product.image || (product.images && (typeof product.images[0] === 'string' ? product.images[0] : product.images[0]?.url)) || '',
      stock: product.stock || 99,
      seller:
        typeof product.seller === 'string'
          ? product.seller
          : product.seller?.shopName || product.seller?.name || '',
    })
  }

  const handleNewsletterSubscribe = async (email) => {
    setNewsletterLoading(true)
    try {
      await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setNewsletterSuccess(true)
    } catch {
      setNewsletterSuccess(true)
    } finally {
      setNewsletterLoading(false)
    }
  }

  const hasSections =
    !loadingFeatured || !loadingTrending || !loadingNew || !loadingCategories

  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 mt-4">
        <HeroCarousel slides={HERO_SLIDES} className="shadow-xl" />
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Catégories</h2>
            <Link to="/products" className="btn btn-ghost btn-sm gap-1">
              Tout voir <ArrowRight size={16} />
            </Link>
          </div>
          {loadingCategories ? (
            <CategorySkeleton />
          ) : (
            <CategoryGrid categories={categories} />
          )}
        </div>
      </section>

      <section className="py-6 px-4 bg-base-200/50">
        <div className="container mx-auto">
          <ProductHorizontalRow
            title="Produits en vedette"
            icon={Sparkles}
            products={featured}
            loading={loadingFeatured}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto">
          <ProductHorizontalRow
            title="Tendances du moment"
            icon={TrendingUp}
            products={trending}
            loading={loadingTrending}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      <section className="py-6 px-4 bg-base-200/50">
        <div className="container mx-auto">
          <ProductHorizontalRow
            title="Nouveautés"
            icon={Zap}
            products={newArrivals}
            loading={loadingNew}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-base-100 border border-base-200 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
            <NewsletterForm
              onSubscribe={handleNewsletterSubscribe}
              loading={newsletterLoading}
              success={newsletterSuccess}
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-base-200/50">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card bg-base-100 border border-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Sparkles size={28} className="text-primary" />
                </div>
                <h3 className="font-bold">Large choix</h3>
                <p className="text-sm opacity-60">
                  Des milliers de produits disponibles dans toutes les catégories.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <TrendingUp size={28} className="text-primary" />
                </div>
                <h3 className="font-bold">Paiement sécurisé</h3>
                <p className="text-sm opacity-60">
                  Transactions sécurisées avec les meilleurs prestataires.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Zap size={28} className="text-primary" />
                </div>
                <h3 className="font-bold">Livraison rapide</h3>
                <p className="text-sm opacity-60">
                  Livraison express partout en France et à l'international.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

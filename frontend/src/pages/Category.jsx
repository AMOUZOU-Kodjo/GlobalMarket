import { useState, useEffect, useCallback } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpDown, ChevronRight, PackageSearch } from 'lucide-react'
import Breadcrumb from '../components/atoms/Breadcrumb'
import ProductGrid from '../components/organisms/ProductGrid'
import FilterSidebar from '../components/organisms/FilterSidebar'
import { Pagination } from '../components/atoms/Pagination'
import { EmptyState } from '../components/atoms/EmptyState'
import Spinner from '../components/atoms/Spinner'
import { useCart } from '../context/CartContext'
import productService from '../services/product.service'
import categoryService from '../services/category.service'
import MOCK_PRODUCTS from '../data/mockProducts'

const ITEMS_PER_PAGE = 12

export default function Category() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()

  const [category, setCategory] = useState(null)
  const [subcategories, setSubcategories] = useState([])
  const [products, setProducts] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [loadingCategory, setLoadingCategory] = useState(true)
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [error, setError] = useState(null)

  const { t } = useTranslation()

  const SORT_OPTIONS = [
    { value: 'newest', label: t('common.newest') },
    { value: 'price_asc', label: t('common.priceAsc') },
    { value: 'price_desc', label: t('common.priceDesc') },
    { value: 'rating', label: t('common.rating') },
    { value: 'popularity', label: t('common.popular') },
  ]

  const currentPage = parseInt(searchParams.get('page') || '1', 10)
  const currentSort = searchParams.get('sort') || 'newest'
  const priceMin = searchParams.get('priceMin')
  const priceMax = searchParams.get('priceMax')
  const rating = searchParams.get('rating')

  const totalPages = Math.max(1, Math.ceil(totalProducts / ITEMS_PER_PAGE))

  useEffect(() => {
    setLoadingCategory(true)
    categoryService
      .getBySlug(slug)
      .then((data) => {
        const cat = data.category || data
        setCategory(cat)
        setSubcategories(cat.children || cat.subcategories || [])
      })
      .catch(() => {
        setCategory(null)
        setSubcategories([])
      })
      .finally(() => setLoadingCategory(false))
  }, [slug])

  useEffect(() => {
    categoryService
      .getAll()
      .then((data) => {
        const cats = Array.isArray(data) ? data : data.categories || data.data || []
        setAllCategories(cats)
      })
      .catch(() => setAllCategories([]))
      .finally(() => setLoadingCategories(false))
  }, [])

  useEffect(() => {
    if (!slug) return
    let cancelled = false
    setLoadingProducts(true)
    setError(null)

    const params = {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      sort: currentSort,
    }
    if (priceMin) params.priceMin = priceMin
    if (priceMax) params.priceMax = priceMax
    if (rating) params.rating = rating

    productService
      .getByCategory(slug, params)
      .then((data) => {
        if (cancelled) return
        const list = Array.isArray(data) ? data : data.products || data.data || []
        if (list.length > 0) {
          setProducts(list)
          setTotalProducts(data.total || data.totalCount || list.length)
        } else {
          const filtered = MOCK_PRODUCTS.all.filter(p => p.category?.slug === slug)
          setProducts(filtered.length > 0 ? filtered : MOCK_PRODUCTS.all)
          setTotalProducts(filtered.length > 0 ? filtered.length : MOCK_PRODUCTS.all.length)
        }
      })
      .catch((err) => {
        if (cancelled) return
        const filtered = MOCK_PRODUCTS.all.filter(p => p.category?.slug === slug)
        setProducts(filtered.length > 0 ? filtered : MOCK_PRODUCTS.all)
        setTotalProducts(filtered.length > 0 ? filtered.length : MOCK_PRODUCTS.all.length)
      })
      .finally(() => {
        if (!cancelled) setLoadingProducts(false)
      })

    return () => {
      cancelled = true
    }
  }, [slug, currentPage, currentSort, priceMin, priceMax, rating])

  const updateParams = useCallback(
    (updates) => {
      const next = new URLSearchParams(searchParams)
      Object.entries(updates).forEach(([key, value]) => {
        next.delete(key)
        if (value !== undefined && value !== null && value !== '') {
          next.set(key, String(value))
        }
      })
      if (updates.page === undefined) {
        next.set('page', '1')
      }
      setSearchParams(next, { replace: true })
    },
    [searchParams, setSearchParams]
  )

  const handleFilterChange = (filters) => {
    updateParams({
      priceMin: filters.priceMin || '',
      priceMax: filters.priceMax || '',
      rating: filters.rating || '',
      page: undefined,
    })
  }

  const handleClearFilters = () => {
    const next = new URLSearchParams()
    next.set('sort', currentSort)
    setSearchParams(next, { replace: true })
  }

  const handleSortChange = (e) => {
    updateParams({ sort: e.target.value, page: '1' })
  }

  const handlePageChange = (page) => {
    updateParams({ page: String(page) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

  const activeFilters = {
    priceMin: priceMin ? Number(priceMin) : undefined,
    priceMax: priceMax ? Number(priceMax) : undefined,
    rating: rating ? Number(rating) : undefined,
  }

  if (loadingCategory) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <Spinner size="lg" text={t('common.loading')} />
      </div>
    )
  }

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16">
        <EmptyState
          icon={PackageSearch}
          title={t('common.pageNotFound')}
          description={t('common.oopsError')}
          action={
            <Link to="/products" className="btn btn-primary">
              {t('home.allProducts')}
            </Link>
          }
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.categories'), href: '/products' },
          { label: category.name || category.label || slug },
        ]}
        className="mb-4"
      />

      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">{category.name || category.label}</h1>
        {category.description && (
          <p className="text-sm opacity-60 mt-2 max-w-2xl">{category.description}</p>
        )}
      </div>

      {subcategories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold opacity-60 uppercase tracking-wider mb-3">
            {t('home.subcategories')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {subcategories.map((sub) => {
              const subSlug = sub.slug || sub._id || sub.id
              return (
                <Link
                  key={subSlug}
                  to={`/category/${subSlug}`}
                  className="card bg-base-100 border border-base-200 hover:shadow-md transition-shadow"
                >
                  <div className="card-body p-3 items-center text-center">
                    <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                      {sub.name || sub.label}
                    </h3>
                    {(sub.productCount ?? sub.count) !== undefined && (
                      <p className="text-xs opacity-40">
                        {sub.productCount ?? sub.count} produit
                        {(sub.productCount ?? sub.count) !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <div className="flex gap-6 items-start">
        <aside className="hidden lg:block w-64 shrink-0 sticky top-24">
          <FilterSidebar
            categories={allCategories}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearFilters}
            loading={loadingCategories}
          />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <p className="text-sm opacity-60">
              {loadingProducts
                ? t('common.loading')
                : `${totalProducts} produit${totalProducts !== 1 ? 's' : ''}`}
            </p>

            <div className="flex items-center gap-2">
              <div className="lg:hidden">
                <FilterSidebar
                  categories={allCategories}
                  activeFilters={activeFilters}
                  onFilterChange={handleFilterChange}
                  onClearAll={handleClearFilters}
                  loading={loadingCategories}
                />
              </div>

              <div className="flex items-center gap-2">
                <ArrowUpDown size={14} className="opacity-50 hidden sm:block" />
                <select
                  className="select select-bordered select-sm"
                  value={currentSort}
                  onChange={handleSortChange}
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {error && (
            <div className="alert alert-error mb-6">
              <span>{error}</span>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => window.location.reload()}
              >
                {t('common.retry')}
              </button>
            </div>
          )}

          <ProductGrid
            products={products}
            loading={loadingProducts}
            skeletonCount={ITEMS_PER_PAGE}
            onAddToCart={handleAddToCart}
            emptyMessage={`Aucun produit dans "${category.name || category.label}"`}
          />

          {!loadingProducts && products.length === 0 && !error && (
            <EmptyState
              icon={PackageSearch}
              title={t('products.noneFound')}
              description={t('common.tryModifyFilters')}
              action={
                <Link to="/products" className="btn btn-primary btn-sm gap-1">
                  {t('home.allProducts')}
                </Link>
              }
            />
          )}

          {!loadingProducts && totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

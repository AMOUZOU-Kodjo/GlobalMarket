import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpDown, Grid3X3, List, PackageSearch } from 'lucide-react'
import Breadcrumb from '../components/atoms/Breadcrumb'
import ProductGrid from '../components/organisms/ProductGrid'
import FilterSidebar from '../components/organisms/FilterSidebar'
import { Pagination } from '../components/atoms/Pagination'
import { EmptyState } from '../components/atoms/EmptyState'
import { useCart } from '../context/CartContext'
import productService from '../services/product.service'
import categoryService from '../services/category.service'
import MOCK_PRODUCTS from '../data/mockProducts'

const ITEMS_PER_PAGE = 12

export default function Products() {
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()

  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [error, setError] = useState(null)
  const [layout, setLayout] = useState('grid')

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
  const filterCategories = searchParams.getAll('category').join(',')
  const priceMin = searchParams.get('priceMin')
  const priceMax = searchParams.get('priceMax')
  const rating = searchParams.get('rating')

  const totalPages = Math.max(1, Math.ceil(totalProducts / ITEMS_PER_PAGE))

  const buildApiParams = useCallback(() => {
    const params = {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      sort: currentSort,
    }
    if (filterCategories) params.category = filterCategories
    if (priceMin) params.priceMin = priceMin
    if (priceMax) params.priceMax = priceMax
    if (rating) params.rating = rating
    return params
  }, [currentPage, currentSort, filterCategories, priceMin, priceMax, rating])

  useEffect(() => {
    categoryService
      .getAll()
      .then((data) => {
        const cats = Array.isArray(data) ? data : data.categories || data.data || []
        setCategories(cats)
      })
      .catch(() => setCategories([]))
      .finally(() => setLoadingCategories(false))
  }, [])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    productService
      .getAll(buildApiParams())
      .then((data) => {
        if (cancelled) return
        const productsList = Array.isArray(data)
          ? data
          : data.products || data.data || []
        if (productsList.length > 0) {
          setProducts(productsList)
          setTotalProducts(data.meta?.total || data.total || data.totalCount || productsList.length)
        } else {
          setProducts(MOCK_PRODUCTS.all)
          setTotalProducts(MOCK_PRODUCTS.all.length)
        }
      })
      .catch((err) => {
        if (cancelled) return
        setProducts(MOCK_PRODUCTS.all)
        setTotalProducts(MOCK_PRODUCTS.all.length)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [buildApiParams])

  const updateParams = useCallback(
    (updates) => {
      const next = new URLSearchParams(searchParams)
      Object.entries(updates).forEach(([key, value]) => {
        next.delete(key)
        if (Array.isArray(value)) {
          value.forEach((v) => next.append(key, v))
        } else if (value !== undefined && value !== null && value !== '') {
          next.set(key, String(value))
        }
      })
      if (updates.page === undefined && !updates.sort) {
        next.set('page', '1')
      }
      setSearchParams(next, { replace: true })
    },
    [searchParams, setSearchParams]
  )

  const handleFilterChange = (filters) => {
    updateParams({
      category: filters.categories || [],
      priceMin: filters.priceMin || '',
      priceMax: filters.priceMax || '',
      rating: filters.rating || '',
      page: undefined,
    })
  }

  const handleClearFilters = () => {
    setSearchParams({ sort: currentSort }, { replace: true })
  }

  const handleSortChange = (e) => {
    updateParams({ sort: e.target.value, page: '1' })
  }

  const handlePageChange = (page) => {
    updateParams({ page: String(page) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAddToCart = (product) => {
    const img = Array.isArray(product.images)
      ? (typeof product.images[0] === 'string' ? product.images[0] : product.images[0]?.url) || ''
      : product.image || ''
    addItem({
      productId: product._id || product.id,
      name: product.name,
      price: Number(product.price),
      image: img,
      stock: product.stock || 99,
      seller:
        typeof product.seller === 'string'
          ? product.seller
          : product.seller?.shopName || product.seller?.name || '',
    })
  }

  const activeFilters = {
    categories: filterCategories ? filterCategories.split(',') : [],
    priceMin: priceMin ? Number(priceMin) : undefined,
    priceMax: priceMax ? Number(priceMax) : undefined,
    rating: rating ? Number(rating) : undefined,
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: t('nav.home'), href: '/' },
          { label: t('nav.products') },
        ]}
        className="mb-4"
      />

      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">{t('nav.products')}</h1>
        {!loading && (
          <p className="text-sm text-base-content/50 mt-1">
            {t('common.productsFound', { count: totalProducts })}
          </p>
        )}
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

      <div className="flex gap-6 items-start">
        <aside className="hidden lg:block w-64 shrink-0 sticky top-24">
          <FilterSidebar
            categories={categories}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearAll={handleClearFilters}
            loading={loadingCategories}
          />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="lg:hidden">
              <FilterSidebar
                categories={categories}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearFilters}
                loading={loadingCategories}
              />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <div className="join">
                <button
                  type="button"
                  className={`btn btn-sm join-item ${layout === 'grid' ? 'btn-active' : ''}`}
                  onClick={() => setLayout('grid')}
                  aria-label="Vue grille"
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  type="button"
                  className={`btn btn-sm join-item ${layout === 'list' ? 'btn-active' : ''}`}
                  onClick={() => setLayout('list')}
                  aria-label="Vue liste"
                >
                  <List size={16} />
                </button>
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

          <ProductGrid
            products={products}
            loading={loading}
            layout={layout}
            skeletonCount={ITEMS_PER_PAGE}
            onAddToCart={handleAddToCart}
            emptyMessage={t('products.noneFound')}
          />

          {!loading && products.length === 0 && !error && (
            <EmptyState
              icon={PackageSearch}
              title={t('products.noneFound')}
              description={t('common.tryModifyFilters')}
              action={
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleClearFilters}
                >
                  {t('common.resetFilters')}
                </button>
              }
            />
          )}

          {!loading && totalPages > 1 && (
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

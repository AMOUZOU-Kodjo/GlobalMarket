import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search as SearchIcon, ArrowRight, PackageSearch } from 'lucide-react'
import Breadcrumb from '../components/atoms/Breadcrumb'
import ProductGrid from '../components/organisms/ProductGrid'
import FilterSidebar from '../components/organisms/FilterSidebar'
import SearchBar from '../components/molecules/SearchBar'
import { Pagination } from '../components/atoms/Pagination'
import { EmptyState } from '../components/atoms/EmptyState'
import { useCart } from '../context/CartContext'
import productService from '../services/product.service'
import categoryService from '../services/category.service'
import useDebounce from '../hooks/useDebounce'
import MOCK_PRODUCTS from '../data/mockProducts'

const SORT_OPTIONS = [
  { value: 'newest', label: 'Plus récents' },
  { value: 'price_asc', label: 'Prix croissant' },
  { value: 'price_desc', label: 'Prix décroissant' },
  { value: 'rating', label: 'Meilleures notes' },
  { value: 'popularity', label: 'Popularité' },
]

const ITEMS_PER_PAGE = 12

const SUGGESTIONS = [
  'Téléphone',
  'Ordinateur',
  'Vêtements',
  'Maison',
  'Sport',
  'Beauté',
]

export default function Search() {
  const { addItem } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()

  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [error, setError] = useState(null)
  const [suggestions, setSuggestions] = useState([])

  const query = searchParams.get('q') || ''
  const currentPage = parseInt(searchParams.get('page') || '1', 10)
  const currentSort = searchParams.get('sort') || 'newest'
  const filterCategories = searchParams.getAll('category')
  const priceMin = searchParams.get('priceMin')
  const priceMax = searchParams.get('priceMax')
  const rating = searchParams.get('rating')

  const totalPages = Math.max(1, Math.ceil(totalProducts / ITEMS_PER_PAGE))

  const debouncedQuery = useDebounce(query, 300)

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
    if (!debouncedQuery.trim()) {
      setProducts([])
      setTotalProducts(0)
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    const params = {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      sort: currentSort,
    }
    if (filterCategories.length) params.category = filterCategories.join(',')
    if (priceMin) params.priceMin = priceMin
    if (priceMax) params.priceMax = priceMax
    if (rating) params.rating = rating

    productService
      .search(debouncedQuery.trim(), params)
      .then((data) => {
        if (cancelled) return
        const list = Array.isArray(data) ? data : data.products || data.data || []
        if (list.length > 0) {
          setProducts(list)
          setTotalProducts(data.meta?.total || data.total || data.totalCount || list.length)
        } else {
          const q = debouncedQuery.toLowerCase()
          const filtered = MOCK_PRODUCTS.all.filter(p =>
            p.name.toLowerCase().includes(q) ||
            (p.category?.name || '').toLowerCase().includes(q) ||
            (p.shortDescription || '').toLowerCase().includes(q)
          )
          setProducts(filtered.length > 0 ? filtered : MOCK_PRODUCTS.all)
          setTotalProducts(filtered.length > 0 ? filtered.length : MOCK_PRODUCTS.all.length)
        }
      })
      .catch((err) => {
        if (cancelled) return
        const q = debouncedQuery.toLowerCase()
        const filtered = MOCK_PRODUCTS.all.filter(p =>
          p.name.toLowerCase().includes(q) ||
          (p.category?.name || '').toLowerCase().includes(q)
        )
        setProducts(filtered.length > 0 ? filtered : MOCK_PRODUCTS.all)
        setTotalProducts(filtered.length > 0 ? filtered.length : MOCK_PRODUCTS.all.length)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [debouncedQuery, currentPage, currentSort, filterCategories, priceMin, priceMax, rating])

  const handleSearch = useCallback(
    (searchTerm) => {
      const next = new URLSearchParams(searchParams)
      next.set('q', searchTerm)
      next.set('page', '1')
      setSearchParams(next, { replace: true })
    },
    [searchParams, setSearchParams]
  )

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
      if (updates.page === undefined) {
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
    const next = new URLSearchParams()
    next.set('q', query)
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
    categories: filterCategories,
    priceMin: priceMin ? Number(priceMin) : undefined,
    priceMax: priceMax ? Number(priceMax) : undefined,
    rating: rating ? Number(rating) : undefined,
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Recherche' },
        ]}
        className="mb-4"
      />

      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Rechercher un produit
        </h1>
        <SearchBar
          value={query}
          onChange={() => {}}
          onSearch={handleSearch}
          suggestions={suggestions}
          onSuggest={(term) => {
            const matched = SUGGESTIONS.filter((s) =>
              s.toLowerCase().includes(term.toLowerCase())
            )
            setSuggestions(matched)
          }}
          placeholder="Rechercher des produits..."
          loading={loading}
        />
      </div>

      {query.trim() && (
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div>
            <p className="text-sm opacity-60">
              {loading ? (
                'Recherche en cours...'
              ) : (
                <>
                  {totalProducts} résultat{totalProducts !== 1 ? 's' : ''} pour{' '}
                  <span className="font-semibold text-base-content">"{query}"</span>
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FilterSidebar
              categories={categories}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearFilters}
              loading={loadingCategories}
            />

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
      )}

      {error && (
        <div className="alert alert-error mb-6">
          <span>{error}</span>
        </div>
      )}

      {query.trim() ? (
        <>
          <ProductGrid
            products={products}
            loading={loading}
            skeletonCount={ITEMS_PER_PAGE}
            onAddToCart={handleAddToCart}
            emptyMessage={`Aucun résultat pour "${query}"`}
          />

          {!loading && products.length === 0 && !error && (
            <EmptyState
              icon={PackageSearch}
              title={`Aucun résultat pour "${query}"`}
              description="Essayez avec des termes différents ou parcourez nos catégories."
              action={
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={handleClearFilters}
                  >
                    Effacer les filtres
                  </button>
                  <Link to="/products" className="btn btn-primary btn-sm gap-1">
                    Voir tous les produits <ArrowRight size={14} />
                  </Link>
                </div>
              }
            />
          )}

          {!loading && products.length === 0 && !error && (
            <div className="mt-8 text-center">
              <p className="text-sm opacity-50 mb-3">Suggestions :</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="btn btn-outline btn-sm btn-ghost"
                    onClick={() => handleSearch(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
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
        </>
      ) : (
        <div className="text-center py-16">
          <SearchIcon size={64} className="text-base-content/20 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Que recherchez-vous ?</h2>
          <p className="text-sm opacity-60 mb-6">
            Tapez un terme de recherche pour trouver des produits.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => handleSearch(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

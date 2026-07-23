import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Plus, Pencil, Trash2, Search, Package, AlertCircle, Filter,
} from 'lucide-react'
import sellerService from '../../services/seller.service'
import DataTable from '../../components/organisms/DataTable'
import Pagination from '../../components/atoms/Pagination'
import Modal from '../../components/atoms/Modal'
import EmptyState from '../../components/atoms/EmptyState'
import Spinner from '../../components/atoms/Spinner'
import StatusBadge from '../../components/molecules/StatusBadge'
import usePagination from '../../hooks/usePagination'
import formatCurrency from '../../utils/formatCurrency'

export default function SellerProductsPage() {
  const [products, setProducts] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)

  const { page, totalPages, goToPage } = usePagination(totalItems, 10)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = { page, limit: 10 }
      if (search) params.search = search
      if (statusFilter) params.status = statusFilter
      const res = await sellerService.getProducts(params)
      const data = res.data || res
      setProducts(data.products || data || [])
      setTotalItems(data.total || data.totalPages ? (data.totalPages || 1) * 10 : (data.products || data || []).length)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement des produits.')
    } finally {
      setLoading(false)
    }
  }, [page, search, statusFilter])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      await sellerService.deleteProduct(deleteTarget._id || deleteTarget.id)
      setDeleteTarget(null)
      fetchProducts()
    } catch (err) {
      setError(err?.response?.data?.message || 'Erreur lors de la suppression.')
    } finally {
      setDeleting(false)
    }
  }

  const columns = [
    {
      key: 'image',
      label: 'Image',
      width: '60px',
      render: (_, row) => (
        <div className="w-10 h-10 rounded overflow-hidden bg-base-200">
          {row.images?.[0] || row.image ? (
            <img
              src={row.images?.[0] || row.image}
              alt={row.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-base-content/30">
              <Package size={16} />
            </div>
          )}
        </div>
      ),
    },
    {
      key: 'name',
      label: 'Nom',
      sortable: true,
      render: (_, row) => (
        <span className="font-medium">{row.name}</span>
      ),
    },
    {
      key: 'price',
      label: 'Prix',
      sortable: true,
      render: (val) => (
        <span className="font-medium">{formatCurrency(val)}</span>
      ),
    },
    {
      key: 'stock',
      label: 'Stock',
      sortable: true,
      render: (val) => (
        <span className={val <= 0 ? 'text-error font-medium' : val <= 5 ? 'text-warning font-medium' : ''}>
          {val ?? 0}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Statut',
      render: (val) => <StatusBadge status={val} type="product" />,
    },
    {
      key: 'actions',
      label: 'Actions',
      width: '100px',
      render: (_, row) => (
        <div className="flex gap-1">
          <Link
            to={`/seller/products/${row._id || row.id}/edit`}
            className="btn btn-ghost btn-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <Pencil size={14} />
          </Link>
          <button
            className="btn btn-ghost btn-xs text-error"
            onClick={(e) => {
              e.stopPropagation()
              setDeleteTarget(row)
            }}
          >
            <Trash2 size={14} />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Mes produits</h1>
          <p className="text-base-content/60 text-sm">{totalItems} produit{totalItems !== 1 ? 's' : ''} au total</p>
        </div>
        <Link to="/seller/products/create" className="btn btn-primary btn-sm">
          <Plus size={16} />
          Ajouter un produit
        </Link>
      </div>

      {error && (
        <div className="alert alert-error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <label className="input input-bordered flex items-center gap-2 flex-1">
              <Search size={16} className="opacity-50" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="grow"
                value={search}
                onChange={(e) => { setSearch(e.target.value); goToPage(1) }}
              />
            </label>
            <select
              className="select select-bordered"
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); goToPage(1) }}
            >
              <option value="">Tous les statuts</option>
              <option value="active">Actif</option>
              <option value="draft">Brouillon</option>
              <option value="suspended">Suspendu</option>
            </select>
          </div>

          <DataTable
            columns={columns}
            data={products}
            loading={loading}
            emptyMessage="Aucun produit trouvé"
            onRowClick={(row) => window.location.href = `/seller/products/${row._id || row.id}/edit`}
          />

          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        title="Supprimer le produit"
        actions={
          <>
            <button className="btn btn-ghost btn-sm" onClick={() => setDeleteTarget(null)}>
              Annuler
            </button>
            <button
              className="btn btn-error btn-sm"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? <span className="loading loading-spinner loading-sm" /> : <Trash2 size={14} />}
              Supprimer
            </button>
          </>
        }
      >
        <p>
          Voulez-vous vraiment supprimer le produit{' '}
          <strong>{deleteTarget?.name}</strong> ? Cette action est irréversible.
        </p>
      </Modal>
    </div>
  )
}

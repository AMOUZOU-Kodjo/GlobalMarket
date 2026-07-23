import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ShoppingCart, AlertCircle, Eye, ChevronDown,
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
import { formatDate } from '../../utils/formatDate'

const ORDER_STATUSES = [
  { value: '', label: 'Tous les statuts' },
  { value: 'pending', label: 'En attente' },
  { value: 'confirmed', label: 'Confirmée' },
  { value: 'shipped', label: 'Expédiée' },
  { value: 'delivered', label: 'Livrée' },
  { value: 'cancelled', label: 'Annulée' },
]

export default function SellerOrdersPage() {
  const [orders, setOrders] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [updatingOrder, setUpdatingOrder] = useState(null)

  const { page, totalPages, goToPage } = usePagination(totalItems, 10)

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = { page, limit: 10 }
      if (search) params.search = search
      if (statusFilter) params.status = statusFilter
      const res = await sellerService.getOrders(params)
      const data = res.data || res
      setOrders(data.orders || data || [])
      setTotalItems(data.total || (data.orders || data || []).length)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement des commandes.')
    } finally {
      setLoading(false)
    }
  }, [page, search, statusFilter])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await sellerService.updateOrderStatus(orderId, newStatus)
      setUpdatingOrder(null)
      fetchOrders()
    } catch (err) {
      setError(err?.response?.data?.message || 'Erreur lors de la mise à jour du statut.')
    }
  }

  const columns = [
    {
      key: '_id',
      label: 'ID',
      render: (val) => (
        <span className="font-mono text-xs">#{(val || '').slice(-6).toUpperCase()}</span>
      ),
    },
    {
      key: 'customerName',
      label: 'Client',
      render: (val, row) => (
        <span>{val || row.customer?.name || '—'}</span>
      ),
    },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (val) => (
        <span className="text-sm">{formatDate(val)}</span>
      ),
    },
    {
      key: 'totalAmount',
      label: 'Total',
      sortable: true,
      render: (val) => (
        <span className="font-medium">{formatCurrency(val)}</span>
      ),
    },
    {
      key: 'status',
      label: 'Statut',
      render: (val) => <StatusBadge status={val} type="order" />,
    },
    {
      key: 'actions',
      label: 'Actions',
      width: '120px',
      render: (_, row) => (
        <div className="flex gap-1">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-xs"
              onClick={(e) => e.stopPropagation()}
            >
              <ChevronDown size={14} />
            </button>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-44 z-10 border border-base-300">
              {ORDER_STATUSES.filter((s) => s.value && s.value !== row.status).map((s) => (
                <li key={s.value}>
                  <button onClick={() => handleStatusUpdate(row._id || row.id, s.value)}>
                    Marquer comme {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Mes commandes</h1>
        <p className="text-base-content/60 text-sm">Gérez les commandes de votre boutique</p>
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
                placeholder="Rechercher une commande..."
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
              {ORDER_STATUSES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <DataTable
            columns={columns}
            data={orders}
            loading={loading}
            emptyMessage="Aucune commande trouvée"
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
    </div>
  )
}

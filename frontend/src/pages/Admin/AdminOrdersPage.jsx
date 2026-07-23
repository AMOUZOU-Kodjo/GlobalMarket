import { useState, useEffect, useCallback } from 'react'
import {
  Search, ShoppingCart, AlertCircle, ChevronDown, RotateCcw,
} from 'lucide-react'
import adminService from '../../services/admin.service'
import DataTable from '../../components/organisms/DataTable'
import Pagination from '../../components/atoms/Pagination'
import Modal from '../../components/atoms/Modal'
import Spinner from '../../components/atoms/Spinner'
import StatusBadge from '../../components/molecules/StatusBadge'
import FormField from '../../components/molecules/FormField'
import usePagination from '../../hooks/usePagination'
import formatCurrency from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'

const STATUSES = [
  { value: '', label: 'Tous les statuts' },
  { value: 'pending', label: 'En attente' },
  { value: 'confirmed', label: 'Confirmée' },
  { value: 'shipped', label: 'Expédiée' },
  { value: 'delivered', label: 'Livrée' },
  { value: 'cancelled', label: 'Annulée' },
  { value: 'refunded', label: 'Remboursée' },
]

const STATUS_OPTIONS = [
  { value: 'pending', label: 'En attente' },
  { value: 'confirmed', label: 'Confirmée' },
  { value: 'shipped', label: 'Expédiée' },
  { value: 'delivered', label: 'Livrée' },
  { value: 'cancelled', label: 'Annulée' },
]

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [refundTarget, setRefundTarget] = useState(null)
  const [refundReason, setRefundReason] = useState('')
  const [refunding, setRefunding] = useState(false)

  const { page, totalPages, goToPage } = usePagination(totalItems, 10)

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = { page, limit: 10 }
      if (search) params.search = search
      if (statusFilter) params.status = statusFilter
      const res = await adminService.getOrders(params)
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
      await adminService.updateOrderStatus(orderId, newStatus)
      fetchOrders()
    } catch (err) {
      setError(err?.response?.data?.message || 'Erreur lors de la mise à jour.')
    }
  }

  const handleRefund = async () => {
    if (!refundTarget) return
    setRefunding(true)
    try {
      await adminService.refundOrder(refundTarget._id || refundTarget.id, { reason: refundReason })
      setRefundTarget(null)
      setRefundReason('')
      fetchOrders()
    } catch (err) {
      setError(err?.response?.data?.message || 'Erreur lors du remboursement.')
    } finally {
      setRefunding(false)
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
      key: 'buyerName',
      label: 'Acheteur',
      render: (val, row) => <span className="text-sm">{val || row.buyer?.name || '—'}</span>,
    },
    {
      key: 'sellerName',
      label: 'Vendeur',
      render: (val, row) => <span className="text-sm">{val || row.seller?.name || '—'}</span>,
    },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (val) => <span className="text-sm">{formatDate(val)}</span>,
    },
    {
      key: 'totalAmount',
      label: 'Total',
      sortable: true,
      render: (val) => <span className="font-medium">{formatCurrency(val)}</span>,
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
              {STATUS_OPTIONS.filter((s) => s.value !== row.status).map((s) => (
                <li key={s.value}>
                  <button onClick={() => handleStatusUpdate(row._id || row.id, s.value)}>
                    {s.label}
                  </button>
                </li>
              ))}
              <div className="divider my-0" />
              <li>
                <button
                  className="text-warning"
                  onClick={(e) => { e.stopPropagation(); setRefundTarget(row) }}
                >
                  <RotateCcw size={14} />
                  Rembourser
                </button>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Commandes</h1>
        <p className="text-base-content/60 text-sm">Gérez toutes les commandes de la plateforme</p>
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
              {STATUSES.map((s) => (
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

      <Modal
        isOpen={!!refundTarget}
        onClose={() => { setRefundTarget(null); setRefundReason('') }}
        title="Rembourser la commande"
        actions={
          <>
            <button className="btn btn-ghost btn-sm" onClick={() => { setRefundTarget(null); setRefundReason('') }}>
              Annuler
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={handleRefund}
              disabled={refunding || !refundReason.trim()}
            >
              {refunding ? <span className="loading loading-spinner loading-sm" /> : <RotateCcw size={14} />}
              Rembourser
            </button>
          </>
        }
      >
        <div className="space-y-3">
          <p>
            Commande <strong>#{(refundTarget?.id || refundTarget?._id || '').slice(-6).toUpperCase()}</strong> —{' '}
            <strong>{formatCurrency(refundTarget?.totalAmount || refundTarget?.total)}</strong>
          </p>
          <FormField label="Raison du remboursement" required>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Indiquez la raison du remboursement..."
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
            />
          </FormField>
        </div>
      </Modal>
    </div>
  )
}

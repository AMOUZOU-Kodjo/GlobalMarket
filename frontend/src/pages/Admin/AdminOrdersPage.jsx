import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
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

export default function AdminOrdersPage() {
  const { t } = useTranslation()
  const [orders, setOrders] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [refundTarget, setRefundTarget] = useState(null)
  const [refundReason, setRefundReason] = useState('')
  const [refunding, setRefunding] = useState(false)

  const STATUSES = [
    { value: '', label: t('admin.allStatuses') },
    { value: 'pending', label: t('orders.pending') },
    { value: 'confirmed', label: t('orders.confirmed') },
    { value: 'shipped', label: t('orders.shipped') },
    { value: 'delivered', label: t('orders.delivered') },
    { value: 'cancelled', label: t('orders.cancelled') },
    { value: 'refunded', label: t('orders.refunded') },
  ]

  const STATUS_OPTIONS = [
    { value: 'pending', label: t('orders.pending') },
    { value: 'confirmed', label: t('orders.confirmed') },
    { value: 'shipped', label: t('orders.shipped') },
    { value: 'delivered', label: t('orders.delivered') },
    { value: 'cancelled', label: t('orders.cancelled') },
  ]

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
        setError(err?.response?.data?.message || err?.message || t('common.error'))
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
      setError(err?.response?.data?.message || t('common.error'))
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
      setError(err?.response?.data?.message || t('common.error'))
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
      label: t('common.buyer'),
      render: (val, row) => <span className="text-sm">{val || row.buyer?.name || '—'}</span>,
    },
    {
      key: 'sellerName',
      label: t('common.seller'),
      render: (val, row) => <span className="text-sm">{val || row.seller?.name || '—'}</span>,
    },
    {
      key: 'createdAt',
      label: t('common.date'),
      sortable: true,
      render: (val) => <span className="text-sm">{formatDate(val)}</span>,
    },
    {
      key: 'totalAmount',
      label: t('common.total'),
      sortable: true,
      render: (val) => <span className="font-medium">{formatCurrency(val)}</span>,
    },
    {
      key: 'status',
      label: t('common.status'),
      render: (val) => <StatusBadge status={val} type="order" />,
    },
    {
      key: 'actions',
      label: t('common.actions'),
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
                  {t('common.refund')}
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
        <h1 className="text-2xl font-bold">{t('admin.title')}</h1>
        <p className="text-base-content/60 text-sm">{t('admin.ordersDescription')}</p>
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
                placeholder={t('admin.searchOrder')}
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
            emptyMessage={t('admin.noOrdersFound')}
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
        title={t('admin.refundOrder')}
        actions={
          <>
            <button className="btn btn-ghost btn-sm" onClick={() => { setRefundTarget(null); setRefundReason('') }}>
              {t('common.cancel')}
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={handleRefund}
              disabled={refunding || !refundReason.trim()}
            >
              {refunding ? <span className="loading loading-spinner loading-sm" /> : <RotateCcw size={14} />}
              {t('common.refund')}
            </button>
          </>
        }
      >
        <div className="space-y-3">
          <p>
            {t('common.order')} <strong>#{(refundTarget?.id || refundTarget?._id || '').slice(-6).toUpperCase()}</strong> —{' '}
            <strong>{formatCurrency(refundTarget?.totalAmount || refundTarget?.total)}</strong>
          </p>
          <FormField label={t('admin.refundReason')} required>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder={t('admin.refundReasonPlaceholder')}
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
            />
          </FormField>
        </div>
      </Modal>
    </div>
  )
}

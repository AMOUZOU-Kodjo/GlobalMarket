import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  Search, Package, AlertCircle, Eye, CheckCircle, XCircle, Ban,
} from 'lucide-react'
import adminService from '../../services/admin.service'
import DataTable from '../../components/organisms/DataTable'
import Pagination from '../../components/atoms/Pagination'
import Modal from '../../components/atoms/Modal'
import Spinner from '../../components/atoms/Spinner'
import StatusBadge from '../../components/molecules/StatusBadge'
import usePagination from '../../hooks/usePagination'
import formatCurrency from '../../utils/formatCurrency'

export default function AdminProductsPage() {
  const { t } = useTranslation()

  const STATUSES = [
    { value: '', label: t('admin.allStatuses') },
    { value: 'active', label: t('products.active') },
    { value: 'pending', label: t('products.pending') },
    { value: 'draft', label: t('products.draft') },
    { value: 'suspended', label: t('products.suspended') },
  ]
  const [products, setProducts] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [moderateTarget, setModerateTarget] = useState(null)
  const [moderating, setModerating] = useState(false)

  const { page, totalPages, goToPage } = usePagination(totalItems, 10)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = { page, limit: 10 }
      if (search) params.search = search
      if (statusFilter) params.status = statusFilter
      const res = await adminService.getProducts(params)
      const raw = res.data !== undefined ? res.data : res
      const list = Array.isArray(raw) ? raw : raw.products || raw.data || []
      const total = raw.meta?.total ?? raw.total ?? list.length
      setProducts(list)
      setTotalItems(total)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || t('common.error'))
    } finally {
      setLoading(false)
    }
  }, [page, search, statusFilter])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleModerate = async (action) => {
    if (!moderateTarget) return
    setModerating(true)
    try {
      await adminService.moderateProduct(moderateTarget._id || moderateTarget.id, action)
      setModerateTarget(null)
      fetchProducts()
    } catch (err) {
      setError(err?.response?.data?.message || t('common.error'))
    } finally {
      setModerating(false)
    }
  }

  const columns = [
    {
      key: 'image',
      label: '',
      width: '50px',
      render: (_, row) => (
        <div className="w-9 h-9 rounded overflow-hidden bg-base-200">
          {row.images?.[0]?.url || row.image ? (
            <img
              src={row.images?.[0]?.url || row.image}
              alt={row.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-base-content/30">
              <Package size={14} />
            </div>
          )}
        </div>
      ),
    },
    {
      key: 'name',
      label: t('products.name'),
      sortable: true,
      render: (_, row) => (
        <div>
          <p className="font-medium text-sm">{row.name}</p>
          <p className="text-xs text-base-content/50">{typeof row.category === 'object' ? row.category?.name : row.category}</p>
        </div>
      ),
    },
    {
      key: 'sellerName',
      label: t('seller.customer'),
      render: (val, row) => (
        <span className="text-sm">{val || row.seller?.shopName || row.seller?.name || '—'}</span>
      ),
    },
    {
      key: 'price',
      label: t('products.price'),
      sortable: true,
      render: (val) => <span className="font-medium">{formatCurrency(val)}</span>,
    },
    {
      key: 'status',
      label: t('seller.status'),
      render: (val) => <StatusBadge status={val} type="product" />,
    },
    {
      key: 'actions',
      label: t('common.actions'),
      width: '100px',
      render: (_, row) => (
        <div className="flex gap-1">
          <button
            className="btn btn-ghost btn-xs text-success"
            title={t('products.approve')}
            onClick={(e) => { e.stopPropagation(); setModerateTarget({ ...row, _action: 'approve' }) }}
          >
            <CheckCircle size={14} />
          </button>
          <button
            className="btn btn-ghost btn-xs text-error"
            title={t('products.reject')}
            onClick={(e) => { e.stopPropagation(); setModerateTarget({ ...row, _action: 'reject' }) }}
          >
            <XCircle size={14} />
          </button>
          <button
            className="btn btn-ghost btn-xs text-warning"
            title={t('products.suspend')}
            onClick={(e) => { e.stopPropagation(); setModerateTarget({ ...row, _action: 'suspend' }) }}
          >
            <Ban size={14} />
          </button>
        </div>
      ),
    },
  ]

  const actionLabels = {
    approve: { label: t('products.approve'), color: 'btn-success', icon: CheckCircle },
    reject: { label: t('products.reject'), color: 'btn-error', icon: XCircle },
    suspend: { label: t('products.suspend'), color: 'btn-warning', icon: Ban },
  }

  const currentAction = moderateTarget ? actionLabels[moderateTarget._action] : null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('admin.productManagement')}</h1>
        <p className="text-base-content/60 text-sm">{t('admin.productsDescription')}</p>
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
                placeholder={t('admin.searchProduct')}
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
            data={products}
            loading={loading}
            emptyMessage={t('admin.noProductsFound')}
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
        isOpen={!!moderateTarget}
        onClose={() => setModerateTarget(null)}
        title={`${currentAction?.label || ''} ${t('products.product')}`}
        actions={
          <>
            <button className="btn btn-ghost btn-sm" onClick={() => setModerateTarget(null)}>
              {t('common.cancel')}
            </button>
            <button
              className={`btn btn-sm ${currentAction?.color || ''}`}
              onClick={() => handleModerate(moderateTarget?._action)}
              disabled={moderating}
            >
              {moderating ? (
                <span className="loading loading-spinner loading-sm" />
              ) : currentAction?.icon ? (
                <currentAction.icon size={14} />
              ) : null}
              {currentAction?.label}
            </button>
          </>
        }
      >
        <p>
          {t('admin.confirmModerate')}{' '}{currentAction?.label?.toLowerCase()}{' '}{t('products.product')}{' '}
          <strong>{moderateTarget?.name}</strong> ?
        </p>
      </Modal>
    </div>
  )
}

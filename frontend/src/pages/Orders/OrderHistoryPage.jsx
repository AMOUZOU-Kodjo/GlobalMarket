import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Package, ChevronRight } from 'lucide-react'
import { Header } from '../../components/organisms/Header'
import StatusBadge from '../../components/molecules/StatusBadge'
import Tabs from '../../components/atoms/Tabs'
import EmptyState from '../../components/atoms/EmptyState'
import Spinner from '../../components/atoms/Spinner'
import Pagination from '../../components/atoms/Pagination'
import Alert from '../../components/atoms/Alert'
import orderService from '../../services/order.service'
import formatCurrency from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'

const STATUS_FILTERS = [
  { id: 'all', label: 'Toutes' },
  { id: 'pending', label: 'En attente' },
  { id: 'confirmed', label: 'Confirmées' },
  { id: 'processing', label: 'En cours' },
  { id: 'shipped', label: 'Expédiées' },
  { id: 'delivered', label: 'Livrées' },
  { id: 'cancelled', label: 'Annulées' },
]

const PAGE_SIZE = 10

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true)
      setError(null)
      try {
        const params = {}
        if (activeFilter !== 'all') {
          params.status = activeFilter
        }
        const res = await orderService.getAll(params)
        const ordersList = Array.isArray(res) ? res : res.data || res.orders || []
        setOrders(ordersList)
      } catch (err) {
        setError(err?.response?.data?.message || 'Erreur lors du chargement des commandes.')
        setOrders([])
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [activeFilter])

  const filteredOrders = activeFilter === 'all'
    ? orders
    : orders.filter((o) => o.status === activeFilter)

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / PAGE_SIZE))
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header
        title="Mes commandes"
        subtitle="Consultez et suivez vos commandes"
      />

      {error && (
        <Alert type="error" closable onClose={() => setError(null)} className="mb-6">
          {error}
        </Alert>
      )}

      <Tabs
        tabs={STATUS_FILTERS}
        activeTab={activeFilter}
        onTabChange={handleFilterChange}
        className="mb-6 overflow-x-auto"
      />

      {loading ? (
        <div className="flex justify-center py-16">
          <Spinner text="Chargement des commandes..." />
        </div>
      ) : paginatedOrders.length === 0 ? (
        <EmptyState
          icon={Package}
          title="Aucune commande trouvée"
          description={
            activeFilter === 'all'
              ? "Vous n'avez pas encore passé de commande."
              : "Aucune commande ne correspond à ce filtre."
          }
          action={
            activeFilter === 'all' ? (
              <Link to="/products" className="btn btn-primary btn-sm">
                Commencer les achats
              </Link>
            ) : (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => handleFilterChange('all')}
              >
                Voir toutes les commandes
              </button>
            )
          }
        />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {paginatedOrders.map((order) => (
              <Link
                key={order._id || order.id}
                to={`/orders/${order._id || order.id}`}
                className="card bg-base-100 border border-base-200 hover:shadow-md transition-shadow"
              >
                <div className="card-body p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-sm">
                          Commande #{(order._id || order.id)?.slice(-8)}
                        </h3>
                        <StatusBadge status={order.status} type="order" />
                      </div>
                      <p className="text-xs text-base-content/50">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="text-right">
                        <p className="text-xs text-base-content/50">
                          {order.items?.length || 0} article(s)
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">
                          {formatCurrency(order.totalAmount || order.total)}
                        </p>
                      </div>
                      <ChevronRight size={18} className="text-base-content/30 shrink-0" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

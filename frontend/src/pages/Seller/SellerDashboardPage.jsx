import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  DollarSign, ShoppingCart, Package, Star, Plus, Eye,
  TrendingUp, AlertCircle,
} from 'lucide-react'
import sellerService from '../../services/seller.service'
import KPICard from '../../components/atoms/KPICard'
import Spinner from '../../components/atoms/Spinner'
import EmptyState from '../../components/atoms/EmptyState'
import StatusBadge from '../../components/molecules/StatusBadge'
import { formatDate } from '../../utils/formatDate'
import formatCurrency from '../../utils/formatCurrency'

export default function SellerDashboardPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await sellerService.getDashboard()
        setData(res.data || res)
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || t('errors.dashboardLoad'))
      } finally {
        setLoading(false)
      }
    }
    fetchDashboard()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text={t('common.loadingDashboard')} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12">
        <div className="alert alert-error max-w-xl mx-auto">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      </div>
    )
  }

  const kpis = [
    {
      title: t('seller.monthRevenue'),
      value: formatCurrency(data?.stats?.monthlyRevenue ?? 0),
      icon: DollarSign,
      color: 'success',
    },
    {
      title: t('seller.orders'),
      value: data?.stats?.monthlyOrders ?? 0,
      icon: ShoppingCart,
      color: 'primary',
    },
    {
      title: t('seller.myProducts'),
      value: data?.stats?.activeProducts ?? 0,
      icon: Package,
      color: 'accent',
    },
    {
      title: t('seller.pendingOrders'),
      value: data?.stats?.pendingOrders ?? 0,
      icon: AlertCircle,
      color: 'warning',
    },
  ]

  const recentOrders = data?.recentOrders || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('seller.dashboard')}</h1>
          <p className="text-base-content/60 text-sm">{t('seller.dashboardDescription')}</p>
        </div>
        <div className="flex gap-2">
          <Link to="/seller/shop/products/create" className="btn btn-primary btn-sm">
            <Plus size={16} />
            {t('seller.addProduct')}
          </Link>
          <Link to="/seller/shop/orders" className="btn btn-outline btn-sm">
            <Eye size={16} />
            {t('seller.viewAllOrders')}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">{t('seller.recentOrders')}</h2>
            {recentOrders.length === 0 ? (
              <EmptyState
                icon={ShoppingCart}
                title={t('seller.noOrders')}
                description={t('seller.noOrdersDescription')}
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>{t('seller.client')}</th>
                      <th>{t('common.date')}</th>
                      <th>{t('seller.total')}</th>
                      <th>{t('products.status')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.slice(0, 5).map((item, index) => {
                      const order = item.order || item
                      return (
                        <tr key={order.id || index}>
                          <td className="font-mono text-xs">
                            #{(order.orderNumber || order.id || '').slice(-6).toUpperCase()}
                          </td>
                          <td>{item.order ? (order.buyer?.name || '—') : (order.customerName || order.buyer?.name || '—')}</td>
                          <td className="text-sm">{formatDate(order.createdAt)}</td>
                          <td className="font-medium">{formatCurrency(order.totalAmount || order.total)}</td>
                          <td>
                            <StatusBadge status={order.status} type="order" />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">{t('seller.revenue')}</h2>
            <div className="flex items-center justify-center h-48 bg-base-200/50 rounded-box">
              <div className="text-center text-base-content/40">
                <TrendingUp size={32} className="mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-medium">{t('seller.revenue')}</p>
                <p className="text-xs mt-1">{t('seller.statistics')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

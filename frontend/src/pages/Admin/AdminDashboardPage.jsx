import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  DollarSign, ShoppingCart, Users, Shield, TrendingUp,
  AlertCircle, Clock, Package, ChevronRight, Activity,
} from 'lucide-react'
import adminService from '../../services/admin.service'
import KPICard from '../../components/atoms/KPICard'
import Spinner from '../../components/atoms/Spinner'
import EmptyState from '../../components/atoms/EmptyState'
import StatusBadge from '../../components/molecules/StatusBadge'
import { formatDate } from '../../utils/formatDate'
import formatCurrency from '../../utils/formatCurrency'

export default function AdminDashboardPage() {
  const { t } = useTranslation()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await adminService.getDashboard()
        setData(res.data || res)
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || t('common.error'))
      } finally {
        setLoading(false)
      }
    }
    fetchDashboard()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text={t('common.loading')} />
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
      title: t('admin.totalRevenue'),
      value: formatCurrency(data?.stats?.totalRevenue ?? 0),
      icon: DollarSign,
      color: 'success',
    },
    {
      title: t('admin.totalOrders'),
      value: data?.stats?.totalOrders ?? 0,
      icon: ShoppingCart,
      color: 'primary',
    },
    {
      title: t('admin.totalUsers'),
      value: data?.stats?.totalUsers ?? 0,
      icon: Users,
      color: 'accent',
    },
    {
      title: t('admin.pendingModeration'),
      value: (data?.stats?.pendingOrders ?? 0) + (data?.stats?.pendingProducts ?? 0),
      icon: Shield,
      color: 'warning',
    },
  ]

  const recentActivity = data?.recentOrders || []
  const quickLinks = [
    { label: t('admin.totalUsers'), to: '/admin/users', icon: Users, color: 'btn-primary' },
    { label: t('admin.totalProducts'), to: '/admin/products', icon: Package, color: 'btn-secondary' },
    { label: t('admin.totalOrders'), to: '/admin/orders', icon: ShoppingCart, color: 'btn-accent' },
    { label: t('admin.reports'), to: '/admin/reports', icon: TrendingUp, color: 'btn-success' },
    { label: t('admin.settings'), to: '/admin/settings', icon: Activity, color: 'btn-warning' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('admin.dashboard')}</h1>
        <p className="text-base-content/60 text-sm">{t('admin.platformStats')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">
              <Activity size={18} />
              {t('admin.recentActivity')}
            </h2>
            {recentActivity.length === 0 ? (
              <EmptyState
                icon={Clock}
                title={t('admin.noActivity')}
                description={t('admin.noRecentActivity')}
              />
            ) : (
              <div className="space-y-3">
                {recentActivity.slice(0, 8).map((item, i) => (
                  <div key={item.id || i} className="flex items-start gap-3 p-3 rounded-box bg-base-200/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">{item.message || item.description || `${t('common.order')} #${(item.orderNumber || item.id || '').slice(-6)} - ${item.buyer?.name || ''}`}</p>
                      <p className="text-xs text-base-content/50 mt-0.5">
                        {formatDate(item.createdAt, { style: 'relative' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">{t('admin.quickLinks')}</h2>
            <div className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="btn btn-outline btn-sm w-full justify-start gap-3"
                  >
                    <Icon size={16} />
                    <span className="flex-1 text-left">{link.label}</span>
                    <ChevronRight size={14} className="opacity-40" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-base">{t('admin.salesChart')}</h2>
          <div className="flex items-center justify-center h-48 bg-base-200/50 rounded-box">
            <div className="text-center text-base-content/40">
              <TrendingUp size={32} className="mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-sm font-medium">{t('admin.globalSalesChart')}</p>
              <p className="text-xs mt-1">{t('admin.platformRevenueOverview')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

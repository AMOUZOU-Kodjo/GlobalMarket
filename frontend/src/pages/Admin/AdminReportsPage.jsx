import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  BarChart3, TrendingUp, DollarSign, ShoppingCart, Download,
  AlertCircle, Calendar, Users, Package,
} from 'lucide-react'
import adminService from '../../services/admin.service'
import KPICard from '../../components/atoms/KPICard'
import DataTable from '../../components/organisms/DataTable'
import Spinner from '../../components/atoms/Spinner'
import EmptyState from '../../components/atoms/EmptyState'
import formatCurrency from '../../utils/formatCurrency'
import formatNumber from '../../utils/formatNumber'

export default function AdminReportsPage() {
  const { t } = useTranslation()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true)
      setError(null)
      try {
        const params = {}
        if (dateFrom) params.from = dateFrom
        if (dateTo) params.to = dateTo
        const res = await adminService.getReports('sales', params)
        setData(res.data || res)
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || t('admin.errorLoadingReports'))
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [dateFrom, dateTo])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text={t('admin.loadingReports')} />
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
      value: formatCurrency(data?.summary?.totalSales ?? data?.totalRevenue ?? 0),
      icon: DollarSign,
      color: 'success',
    },
    {
      title: t('admin.totalOrders'),
      value: formatNumber(data?.summary?.totalOrders ?? data?.totalOrders ?? 0),
      icon: ShoppingCart,
      color: 'primary',
    },
    {
      title: t('admin.totalUsers'),
      value: formatNumber(data?.totalUsers ?? 0),
      icon: Users,
      color: 'accent',
    },
    {
      title: t('admin.totalProducts'),
      value: formatNumber(data?.totalProducts ?? 0),
      icon: Package,
      color: 'warning',
    },
  ]

  const salesReport = data?.salesReport || []
  const topSellers = (data?.topSellers || []).map((ts) => ({
    name: ts.seller?.shopName || ts.seller?.name || '—',
    revenue: ts._sum?.totalPrice || ts.revenue || 0,
    orders: ts._count || ts.orders || 0,
  }))
  const topProducts = (data?.topProducts || []).map((tp) => ({
    name: tp.product?.name || tp.name || '—',
    revenue: tp._sum?.totalPrice || tp.revenue || 0,
    unitsSold: tp._sum?.quantity || tp.unitsSold || 0,
  }))

  const salesColumns = [
    {
      key: 'date',
      label: t('common.date'),
      render: (val) => <span className="text-sm">{val}</span>,
    },
    {
      key: 'orders',
      label: t('admin.orders'),
      render: (val) => formatNumber(val),
    },
    {
      key: 'revenue',
      label: t('admin.revenue'),
      render: (val) => <span className="font-medium">{formatCurrency(val)}</span>,
    },
    {
      key: 'avgOrder',
      label: t('admin.averageCart'),
      render: (val) => formatCurrency(val),
    },
  ]

  const topSellerColumns = [
    {
      key: 'rank',
      label: '#',
      width: '40px',
      render: (_, __, i) => <span className="font-medium">{i + 1}</span>,
    },
    {
      key: 'name',
      label: t('common.seller'),
      render: (val) => <span className="font-medium">{val}</span>,
    },
    {
      key: 'revenue',
      label: t('admin.revenue'),
      render: (val) => formatCurrency(val),
    },
    {
      key: 'orders',
      label: t('admin.orders'),
      render: (val) => formatNumber(val),
    },
  ]

  const topProductColumns = [
    {
      key: 'rank',
      label: '#',
      width: '40px',
      render: (_, __, i) => <span className="font-medium">{i + 1}</span>,
    },
    {
      key: 'name',
      label: t('common.product'),
      render: (val) => <span className="font-medium">{val}</span>,
    },
    {
      key: 'revenue',
      label: t('admin.revenue'),
      render: (val) => formatCurrency(val),
    },
    {
      key: 'unitsSold',
      label: t('admin.unitsSold'),
      render: (val) => formatNumber(val),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('admin.reportsAndAnalytics')}</h1>
          <p className="text-base-content/60 text-sm">{t('admin.reportsDescription')}</p>
        </div>
        <button className="btn btn-outline btn-sm">
          <Download size={16} />
          {t('admin.exportCSV')}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-end">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-base-content/50" />
          <label className="text-sm">{t('admin.from')}</label>
          <input
            type="date"
            className="input input-bordered input-sm"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">{t('admin.to')}</label>
          <input
            type="date"
            className="input input-bordered input-sm"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => { setDateFrom(''); setDateTo('') }}
        >
          {t('common.reset')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-base">{t('admin.salesReport')}</h2>
          {salesReport.length === 0 ? (
            <EmptyState
              icon={BarChart3}
              title={t('common.noData')}
              description={t('admin.noSalesData')}
            />
          ) : (
            <DataTable
              columns={salesColumns}
              data={salesReport}
              compact
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">{t('admin.topSellers')}</h2>
            {topSellers.length === 0 ? (
              <EmptyState icon={Users} title={t('common.noData')} />
            ) : (
              <DataTable
                columns={topSellerColumns}
                data={topSellers}
                compact
              />
            )}
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">{t('admin.topProducts')}</h2>
            {topProducts.length === 0 ? (
              <EmptyState icon={Package} title={t('common.noData')} />
            ) : (
              <DataTable
                columns={topProductColumns}
                data={topProducts}
                compact
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

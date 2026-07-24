import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  DollarSign, ShoppingCart, TrendingUp, BarChart3, AlertCircle,
  Calendar, Package,
} from 'lucide-react'
import sellerService from '../../services/seller.service'
import KPICard from '../../components/atoms/KPICard'
import DataTable from '../../components/organisms/DataTable'
import Spinner from '../../components/atoms/Spinner'
import EmptyState from '../../components/atoms/EmptyState'
import useLocalStorage from '../../hooks/useLocalStorage'
import formatCurrency from '../../utils/formatCurrency'
import formatNumber from '../../utils/formatNumber'

export default function SellerAnalyticsPage() {
  const { t } = useTranslation()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dateRange, setDateRange] = useLocalStorage('seller-analytics-range', '30d')

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await sellerService.getAnalytics({ period: dateRange })
        setData(res.data || res)
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || t('errors.analyticsLoad'))
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [dateRange, t])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text={t('common.loadingStats')} />
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
      title: t('analytics.totalRevenue'),
      value: formatCurrency(data?.revenue ?? 0),
      icon: DollarSign,
      color: 'success',
      trend: data?.revenueTrend || 'neutral',
      trendValue: data?.revenueTrendValue,
    },
    {
      title: t('seller.orders'),
      value: formatNumber(data?.totalOrders ?? 0),
      icon: ShoppingCart,
      color: 'primary',
      trend: data?.ordersTrend || 'neutral',
      trendValue: data?.ordersTrendValue,
    },
    {
      title: t('analytics.conversionRate'),
      value: data?.conversionRate ? `${Number(data.conversionRate).toFixed(1)}%` : '0%',
      icon: TrendingUp,
      color: 'accent',
    },
    {
      title: t('analytics.averageCart'),
      value: formatCurrency(data?.averageOrderValue ?? 0),
      icon: BarChart3,
      color: 'warning',
    },
  ]

  const topProducts = data?.topProducts || []
  const categoryBreakdown = data?.categoryBreakdown || []

  const topProductColumns = [
    {
      key: 'rank',
      label: '#',
      width: '50px',
      render: (_, __, index) => <span className="font-medium">{index + 1}</span>,
    },
    {
      key: 'name',
      label: t('products.name'),
      render: (val) => <span className="font-medium">{val}</span>,
    },
    {
      key: 'revenue',
      label: t('analytics.revenue'),
      render: (val) => formatCurrency(val),
    },
    {
      key: 'unitsSold',
      label: t('analytics.unitsSold'),
      render: (val) => formatNumber(val),
    },
  ]

  const categoryColumns = [
    {
      key: 'category',
      label: t('products.category'),
      render: (val) => <span className="font-medium">{val}</span>,
    },
    {
      key: 'revenue',
      label: t('analytics.revenue'),
      render: (val) => formatCurrency(val),
    },
    {
      key: 'percentage',
      label: t('analytics.share'),
      render: (val) => `${Number(val || 0).toFixed(1)}%`,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('analytics.title')}</h1>
          <p className="text-base-content/60 text-sm">{t('analytics.subtitle')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-base-content/50" />
          <select
            className="select select-bordered select-sm"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7d">{t('analytics.last7Days')}</option>
            <option value="30d">{t('analytics.last30Days')}</option>
            <option value="90d">{t('analytics.last90Days')}</option>
            <option value="12mo">{t('analytics.last12Months')}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-base">{t('analytics.salesEvolution')}</h2>
          <div className="flex items-center justify-center h-64 bg-base-200/50 rounded-box">
            <div className="text-center text-base-content/40">
              <TrendingUp size={36} className="mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-sm font-medium">{t('analytics.salesChart')}</p>
              <p className="text-xs mt-1">{t('analytics.period')}: {dateRange === '7d' ? t('analytics.7days') : dateRange === '30d' ? t('analytics.30days') : dateRange === '90d' ? t('analytics.90days') : t('analytics.12months')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">{t('analytics.topProducts')}</h2>
            {topProducts.length === 0 ? (
              <EmptyState icon={Package} title={t('analytics.noData')} description={t('analytics.noSalesYet')} />
            ) : (
              <DataTable
                columns={topProductColumns}
                data={topProducts}
                compact
              />
            )}
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">{t('analytics.salesByCategory')}</h2>
            {categoryBreakdown.length === 0 ? (
              <EmptyState icon={BarChart3} title={t('analytics.noData')} description={t('analytics.noCategorySales')} />
            ) : (
              <DataTable
                columns={categoryColumns}
                data={categoryBreakdown}
                compact
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

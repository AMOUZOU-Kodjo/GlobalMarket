import { useState, useEffect } from 'react'
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
        setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement des analytics.')
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [dateRange])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text="Chargement des statistiques..." />
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
      title: 'Revenus totaux',
      value: formatCurrency(data?.revenue ?? 0),
      icon: DollarSign,
      color: 'success',
      trend: data?.revenueTrend || 'neutral',
      trendValue: data?.revenueTrendValue,
    },
    {
      title: 'Commandes',
      value: formatNumber(data?.totalOrders ?? 0),
      icon: ShoppingCart,
      color: 'primary',
      trend: data?.ordersTrend || 'neutral',
      trendValue: data?.ordersTrendValue,
    },
    {
      title: 'Taux de conversion',
      value: data?.conversionRate ? `${Number(data.conversionRate).toFixed(1)}%` : '0%',
      icon: TrendingUp,
      color: 'accent',
    },
    {
      title: 'Panier moyen',
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
      label: 'Produit',
      render: (val) => <span className="font-medium">{val}</span>,
    },
    {
      key: 'revenue',
      label: 'Revenus',
      render: (val) => formatCurrency(val),
    },
    {
      key: 'unitsSold',
      label: 'Vendus',
      render: (val) => formatNumber(val),
    },
  ]

  const categoryColumns = [
    {
      key: 'category',
      label: 'Catégorie',
      render: (val) => <span className="font-medium">{val}</span>,
    },
    {
      key: 'revenue',
      label: 'Revenus',
      render: (val) => formatCurrency(val),
    },
    {
      key: 'percentage',
      label: 'Part',
      render: (val) => `${Number(val || 0).toFixed(1)}%`,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-base-content/60 text-sm">Suivez les performances de votre boutique</p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-base-content/50" />
          <select
            className="select select-bordered select-sm"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7d">7 derniers jours</option>
            <option value="30d">30 derniers jours</option>
            <option value="90d">90 derniers jours</option>
            <option value="12mo">12 derniers mois</option>
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
          <h2 className="card-title text-base">Évolution des ventes</h2>
          <div className="flex items-center justify-center h-64 bg-base-200/50 rounded-box">
            <div className="text-center text-base-content/40">
              <TrendingUp size={36} className="mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-sm font-medium">Graphique des ventes</p>
              <p className="text-xs mt-1">Période : {dateRange === '7d' ? '7 jours' : dateRange === '30d' ? '30 jours' : dateRange === '90d' ? '90 jours' : '12 mois'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Top produits</h2>
            {topProducts.length === 0 ? (
              <EmptyState icon={Package} title="Aucune donnée" description="Pas encore de ventes enregistrées." />
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
            <h2 className="card-title text-base">Ventes par catégorie</h2>
            {categoryBreakdown.length === 0 ? (
              <EmptyState icon={BarChart3} title="Aucune donnée" description="Pas encore de ventes par catégorie." />
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

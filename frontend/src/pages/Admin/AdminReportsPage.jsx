import { useState, useEffect } from 'react'
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
        setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement des rapports.')
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [dateFrom, dateTo])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text="Chargement des rapports..." />
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
      value: formatCurrency(data?.summary?.totalSales ?? data?.totalRevenue ?? 0),
      icon: DollarSign,
      color: 'success',
    },
    {
      title: 'Commandes',
      value: formatNumber(data?.summary?.totalOrders ?? data?.totalOrders ?? 0),
      icon: ShoppingCart,
      color: 'primary',
    },
    {
      title: 'Utilisateurs',
      value: formatNumber(data?.totalUsers ?? 0),
      icon: Users,
      color: 'accent',
    },
    {
      title: 'Produits',
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
      label: 'Date',
      render: (val) => <span className="text-sm">{val}</span>,
    },
    {
      key: 'orders',
      label: 'Commandes',
      render: (val) => formatNumber(val),
    },
    {
      key: 'revenue',
      label: 'Revenus',
      render: (val) => <span className="font-medium">{formatCurrency(val)}</span>,
    },
    {
      key: 'avgOrder',
      label: 'Panier moyen',
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
      label: 'Vendeur',
      render: (val) => <span className="font-medium">{val}</span>,
    },
    {
      key: 'revenue',
      label: 'Revenus',
      render: (val) => formatCurrency(val),
    },
    {
      key: 'orders',
      label: 'Commandes',
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Rapports & Analytics</h1>
          <p className="text-base-content/60 text-sm">Analysez les performances de la plateforme</p>
        </div>
        <button className="btn btn-outline btn-sm">
          <Download size={16} />
          Exporter (CSV)
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-end">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-base-content/50" />
          <label className="text-sm">Du</label>
          <input
            type="date"
            className="input input-bordered input-sm"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Au</label>
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
          Réinitialiser
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-base">Rapport des ventes</h2>
          {salesReport.length === 0 ? (
            <EmptyState
              icon={BarChart3}
              title="Aucune donnée"
              description="Aucune donnée de ventes pour la période sélectionnée."
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
            <h2 className="card-title text-base">Top vendeurs</h2>
            {topSellers.length === 0 ? (
              <EmptyState icon={Users} title="Aucune donnée" />
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
            <h2 className="card-title text-base">Top produits</h2>
            {topProducts.length === 0 ? (
              <EmptyState icon={Package} title="Aucune donnée" />
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

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await sellerService.getDashboard()
        setData(res.data || res)
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement du tableau de bord.')
      } finally {
        setLoading(false)
      }
    }
    fetchDashboard()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text="Chargement du tableau de bord..." />
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
      title: 'Revenus ce mois',
      value: formatCurrency(data?.stats?.monthlyRevenue ?? 0),
      icon: DollarSign,
      color: 'success',
    },
    {
      title: 'Commandes ce mois',
      value: data?.stats?.monthlyOrders ?? 0,
      icon: ShoppingCart,
      color: 'primary',
    },
    {
      title: 'Produits actifs',
      value: data?.stats?.activeProducts ?? 0,
      icon: Package,
      color: 'accent',
    },
    {
      title: 'Commandes en attente',
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
          <h1 className="text-2xl font-bold">Tableau de bord</h1>
          <p className="text-base-content/60 text-sm">Vue d'ensemble de votre boutique</p>
        </div>
        <div className="flex gap-2">
          <Link to="/seller/shop/products/create" className="btn btn-primary btn-sm">
            <Plus size={16} />
            Ajouter un produit
          </Link>
          <Link to="/seller/shop/orders" className="btn btn-outline btn-sm">
            <Eye size={16} />
            Voir les commandes
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
            <h2 className="card-title text-base">Commandes récentes</h2>
            {recentOrders.length === 0 ? (
              <EmptyState
                icon={ShoppingCart}
                title="Aucune commande"
                description="Vous n'avez pas encore reçu de commande."
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Statut</th>
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
            <h2 className="card-title text-base">Graphique des ventes</h2>
            <div className="flex items-center justify-center h-48 bg-base-200/50 rounded-box">
              <div className="text-center text-base-content/40">
                <TrendingUp size={32} className="mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-medium">Graphique des ventes</p>
                <p className="text-xs mt-1">Statistiques des 30 derniers jours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

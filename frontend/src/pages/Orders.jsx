import { useEffect, useState } from 'react'
import { ordersAPI } from '../services/api'
import { Package } from 'lucide-react'
import formatCurrency from '../utils/formatCurrency'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await ordersAPI.getAll()
        setOrders(data.orders || data || [])
      } catch {
        setOrders([])
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  const statusBadge = (status) => {
    const map = {
      pending: 'badge-warning',
      paid: 'badge-info',
      shipped: 'badge-accent',
      delivered: 'badge-success',
      cancelled: 'badge-error',
    }
    return map[status] || 'badge-ghost'
  }

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Mes commandes</h1>

      {orders.length === 0 ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center py-16">
            <Package size={64} className="text-base-content/20 mb-4" />
            <h3 className="text-xl font-semibold">Aucune commande</h3>
            <p className="text-base-content/50">
              Vous n'avez pas encore passé de commande.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div key={order._id} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">
                      Commande #{order._id?.slice(-8)}
                    </h3>
                    <p className="text-sm text-base-content/50">
                      {new Date(order.createdAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <span className={`badge ${statusBadge(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <div className="divider my-1"></div>
                <div className="flex justify-between">
                  <span className="text-base-content/70">
                    {order.items?.length || 0} article(s)
                  </span>
                  <span className="font-bold text-primary">
                    {formatCurrency(order.total || order.totalAmount)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

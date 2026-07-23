import { Link, useParams, useLocation } from 'react-router-dom'
import { CheckCircle, ShoppingBag, Eye, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'
import formatCurrency from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'
import orderService from '../../services/order.service'

export default function OrderConfirmationPage() {
  const { orderId } = useParams()
  const { state } = useLocation()
  const [order, setOrder] = useState(state?.order || null)
  const [loading, setLoading] = useState(!state?.order)

  useEffect(() => {
    if (!order && orderId) {
      setLoading(true)
      orderService
        .getById(orderId)
        .then((res) => setOrder(res.data || res))
        .catch(() => {})
        .finally(() => setLoading(false))
    }
  }, [orderId, order])

  const estimatedDelivery = () => {
    const date = new Date()
    date.setDate(date.getDate() + 5)
    return formatDate(date, { style: 'long' })
  }

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <span className="loading loading-spinner loading-lg" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-4">
          <CheckCircle size={48} className="text-success" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Merci pour votre commande!
        </h1>
        <p className="text-base-content/60">
          Votre commande a été confirmée et est en cours de traitement.
        </p>
      </div>

      {order && (
        <div className="card bg-base-100 border border-base-200 mb-6">
          <div className="card-body p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-base-content/50">Numéro de commande</p>
                <p className="font-bold text-lg">#{order._id?.slice(-8) || orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-base-content/50">Date</p>
                <p className="font-medium">{formatDate(order.createdAt)}</p>
              </div>
            </div>

            {order.items && order.items.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded bg-base-200 overflow-hidden flex-shrink-0">
                        <img
                          src={item.productImage || item.image || '/placeholder.png'}
                          alt={item.productName || item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.productName || item.name}</p>
                        <p className="text-xs text-base-content/50">
                          {item.quantity} x {formatCurrency(item.unitPrice || item.price)}
                        </p>
                      </div>
                      <span className="text-sm font-medium shrink-0">
                        {formatCurrency(item.totalPrice || (item.unitPrice || item.price) * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="divider my-2" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">
                {formatCurrency(order.totalAmount || order.total)}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-4 p-3 bg-base-200 rounded-lg">
              <Calendar size={16} className="text-base-content/50" />
              <span className="text-sm">
                Livraison estimée le{' '}
                <span className="font-medium">{estimatedDelivery()}</span>
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to={`/orders/${orderId}`} className="btn btn-primary">
          <Eye size={16} />
          Voir la commande
        </Link>
        <Link to="/products" className="btn btn-ghost">
          <ShoppingBag size={16} />
          Continuer les achats
        </Link>
      </div>
    </div>
  )
}

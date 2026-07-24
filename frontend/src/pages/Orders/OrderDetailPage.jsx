import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Package,
  MapPin,
  CreditCard,
  Download,
  XCircle,
  Clock,
  MessageSquare,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import messageService from '../../services/message.service'
import { useTranslation } from 'react-i18next'
import { Header } from '../../components/organisms/Header'
import OrderTimeline from '../../components/organisms/OrderTimeline'
import OrderItem from '../../components/molecules/OrderItem'
import StatusBadge from '../../components/molecules/StatusBadge'
import Spinner from '../../components/atoms/Spinner'
import Alert from '../../components/atoms/Alert'
import orderService from '../../services/order.service'
import formatCurrency from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'

const CANCELABLE_STATUSES = ['pending', 'confirmed']

export default function OrderDetailPage() {
  const { t } = useTranslation()
  const { orderId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [order, setOrder] = useState(null)
  const [tracking, setTracking] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [cancelling, setCancelling] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const [orderRes, trackingRes] = await Promise.all([
          orderService.getById(orderId),
          orderService.getTracking(orderId).catch(() => ({ data: [] })),
        ])
        setOrder(orderRes.data || orderRes)
        setTracking(trackingRes.data || trackingRes || [])
      } catch (err) {
        setError(
          err?.response?.data?.message ||
            t('orders.loadErrorDetail')
        )
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [orderId])

  const handleCancel = async () => {
    setCancelling(true)
    try {
      await orderService.cancel(orderId)
      setOrder((prev) => ({ ...prev, status: 'cancelled' }))
      setShowCancelConfirm(false)
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          t('orders.cancelError')
      )
    } finally {
      setCancelling(false)
    }
  }

  const handleDownloadInvoice = async () => {
    setDownloading(true)
    try {
      const blob = await orderService.downloadInvoice(orderId)
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `facture-${orderId.slice(-8)}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      a.remove()
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          t('orders.invoiceError')
      )
    } finally {
      setDownloading(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex justify-center">
          <Spinner text={t('orders.loadingDetail')} />
        </div>
      </div>
    )
  }

  if (error && !order) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Alert type="error">{error}</Alert>
      </div>
    )
  }

  if (!order) return null

  const canCancel = CANCELABLE_STATUSES.includes(order.status)
  const firstSellerUserId = order.items?.find(i => i.seller?.userId)?.seller?.userId

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header
        title={`${t('orders.orderNumber')} ${orderId.slice(-8)}`}
        breadcrumbs={[
          { label: t('nav.home'), href: '/' },
          { label: t('orders.title'), href: '/orders' },
          { label: `#${orderId.slice(-8)}` },
        ]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <StatusBadge status={order.status} type="order" />
          </div>
        }
      />

      {error && (
        <Alert type="error" closable onClose={() => setError(null)} className="mb-6">
          {error}
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs text-base-content/50">{t('orders.date')}</p>
                  <p className="font-medium text-sm flex items-center gap-2">
                    <Clock size={14} />
                    {formatDate(order.createdAt, { style: 'long' })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-base-content/50">{t('orders.total')}</p>
                  <p className="font-bold text-lg text-primary">
                    {formatCurrency(order.totalAmount)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-4 sm:p-5">
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                <Package size={16} />
                {t('orders.tracking')}
              </h3>
              <OrderTimeline
                status={order.status}
                timeline={tracking.length > 0 ? tracking : order.timeline || []}
              />
            </div>
          </div>

          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-4 sm:p-5">
              <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                <Package size={16} />
                {t('orders.items')} ({order.items?.length || 0})
              </h3>
              <div className="flex flex-col gap-3">
                {(order.items || []).map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {order.address && (
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body p-4">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                  <MapPin size={16} />
                  {t('orders.shippingAddress')}
                </h3>
                <div className="text-sm text-base-content/70 space-y-0.5">
                  <p className="font-medium text-base-content">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>{order.address.address1}</p>
                  {order.address.address2 && <p>{order.address.address2}</p>}
                  <p>
                    {order.address.postalCode} {order.address.city}
                  </p>
                  <p>{order.address.country}</p>
                  {order.address.phone && (
                    <p>{t('orders.phone')}: {order.address.phone}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-4">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <CreditCard size={16} />
                {t('orders.paymentDetails')}
              </h3>
              <div className="text-sm text-base-content/70 space-y-1">
                <p>
                  <span className="text-base-content/50">{t('orders.paymentMethod')}: </span>
                  <span className="font-medium">
                    {order.payments?.[0]?.method || order.paymentMethod || t('orders.notSpecified')}
                  </span>
                </p>
                {(order.payments?.[0]?.status || order.paymentStatus) && (
                  <p>
                    <span className="text-base-content/50">{t('orders.paymentStatus')}: </span>
                    <span className="font-medium capitalize">
                      {order.payments?.[0]?.status || order.paymentStatus}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-4">
              <h3 className="font-bold text-sm mb-3">{t('orders.summary')}</h3>
              <div className="flex flex-col gap-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-base-content/60">{t('orders.subtotal')}</span>
                  <span>{formatCurrency(order.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/60">{t('orders.shipping')}</span>
                  <span>
                    {Number(order.shippingCost || 0) === 0
                      ? t('orders.free')
                      : formatCurrency(order.shippingCost)}
                  </span>
                </div>
                {Number(order.discountAmount) > 0 && (
                  <div className="flex justify-between text-success">
                    <span>{t('orders.discount')}</span>
                    <span>-{formatCurrency(order.discountAmount)}</span>
                  </div>
                )}
                <div className="divider my-1" />
                <div className="flex justify-between font-bold">
                  <span>{t('orders.total')}</span>
                  <span className="text-primary">{formatCurrency(order.totalAmount)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {user && firstSellerUserId && (
              <button
                type="button"
                className="btn btn-outline btn-block gap-2"
                onClick={async () => {
                  try {
                    await messageService.findOrCreate(firstSellerUserId)
                    navigate(`/messages?to=${firstSellerUserId}`)
                  } catch { navigate(`/messages?to=${firstSellerUserId}`) }
                }}
              >
                <MessageSquare size={16} />
                {t('messages.contactSeller')}
              </button>
            )}

            <button
              type="button"
              className="btn btn-outline btn-block"
              disabled={downloading}
              onClick={handleDownloadInvoice}
            >
              {downloading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <Download size={16} />
              )}
              {t('orders.downloadInvoice')}
            </button>

            {canCancel && (
              <>
                {showCancelConfirm ? (
                  <div className="card bg-error/5 border border-error/20">
                    <div className="card-body p-4">
                      <p className="text-sm font-medium text-error mb-3">
                        {t('orders.cancelConfirm')}
                      </p>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm flex-1"
                          onClick={() => setShowCancelConfirm(false)}
                        >
                          {t('orders.no')}
                        </button>
                        <button
                          type="button"
                          className="btn btn-error btn-sm flex-1"
                          disabled={cancelling}
                          onClick={handleCancel}
                        >
                          {cancelling ? (
                            <span className="loading loading-spinner loading-xs" />
                          ) : (
                            t('orders.yesCancel')
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-error btn-outline btn-block"
                    onClick={() => setShowCancelConfirm(true)}
                  >
                    <XCircle size={16} />
                    {t('orders.cancelOrder')}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

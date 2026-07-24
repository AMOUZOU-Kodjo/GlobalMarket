import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Truck, CreditCard, ClipboardCheck } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import CheckoutStepper from '../../components/organisms/CheckoutStepper'
import OrderSummary from '../../components/organisms/OrderSummary'
import Spinner from '../../components/atoms/Spinner'
import Alert from '../../components/atoms/Alert'
import orderService from '../../services/order.service'
import paymentService from '../../services/payment.service'
import ShippingStep from './ShippingStep'
import PaymentStep from './PaymentStep'
import ConfirmationStep from './ConfirmationStep'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { items, subtotal, coupon, total, removeCoupon, clearCart } = useCart()
  const { user } = useAuth()

  const STEPS = [
    { id: 'shipping', label: t('checkout.shipping'), icon: Truck },
    { id: 'payment', label: t('checkout.paymentMethod'), icon: CreditCard },
    { id: 'confirmation', label: t('checkout.confirmOrder'), icon: ClipboardCheck },
  ]

  const [currentStep, setCurrentStep] = useState('shipping')
  const [shippingData, setShippingData] = useState({
    address: null,
    method: 'standard',
  })
  const [paymentData, setPaymentData] = useState({
    method: null,
    cardDetails: null,
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const shippingCost = shippingData.method === 'express' ? 2500 : 0
  const discount = coupon
    ? coupon.type === 'percentage'
      ? subtotal * (coupon.value / 100)
      : coupon.value
    : 0
  const orderTotal = subtotal - discount + shippingCost

  const summaryItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        _id: item.productId,
      })),
    [items]
  )

  const handleStepClick = (stepId) => {
    const stepOrder = ['shipping', 'payment', 'confirmation']
    const currentIndex = stepOrder.indexOf(currentStep)
    const targetIndex = stepOrder.indexOf(stepId)
    if (targetIndex <= currentIndex) {
      setCurrentStep(stepId)
    }
  }

  const handleShippingNext = (data) => {
    setShippingData(data)
    setCurrentStep('payment')
  }

  const handlePaymentNext = (data) => {
    setPaymentData(data)
    setCurrentStep('confirmation')
  }

  const handlePaymentBack = () => {
    setCurrentStep('shipping')
  }

  const handleConfirmationBack = () => {
    setCurrentStep('payment')
  }

  const handleConfirmOrder = async () => {
    if (!shippingData.address) {
      setError(t('checkout.selectAddress'))
      return
    }
    if (!paymentData.method) {
      setError(t('checkout.selectPayment'))
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      const orderPayload = {
        addressId: shippingData.address?.id || shippingData.address,
        shippingMethod: shippingData.method,
        paymentMethod: paymentData.method?.type || paymentData.method?.name || 'credit_card',
      }

      const order = await orderService.create(orderPayload)

      if (paymentData.method.type === 'card' && paymentData.cardDetails) {
        const intent = await paymentService.createIntent({
          orderId: order._id || order.id,
          amount: orderTotal,
          currency: 'XOF',
        })
        await paymentService.confirmPayment(intent._id || intent.id, {
          paymentMethodId: paymentData.method._id || paymentData.method.id,
        })
      }

      clearCart()
      navigate(`/checkout/confirmation/${order._id || order.id}`, {
        state: { order },
      })
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err.message ||
          t('common.error')
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (items.length === 0 && !submitting) {
    navigate('/cart')
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">{t('checkout.title')}</h1>

      {error && (
        <Alert type="error" closable onClose={() => setError(null)} className="mb-6">
          {error}
        </Alert>
      )}

      <div className="mb-8">
        <CheckoutStepper
          steps={STEPS}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          {currentStep === 'shipping' && (
            <ShippingStep
              user={user}
              shippingData={shippingData}
              onNext={handleShippingNext}
            />
          )}

          {currentStep === 'payment' && (
            <PaymentStep
              paymentData={paymentData}
              onNext={handlePaymentNext}
              onBack={handlePaymentBack}
            />
          )}

          {currentStep === 'confirmation' && (
            <ConfirmationStep
              items={summaryItems}
              shippingData={shippingData}
              paymentData={paymentData}
              subtotal={subtotal}
              shippingCost={shippingCost}
              discount={discount}
              total={orderTotal}
              onBack={handleConfirmationBack}
              onConfirm={handleConfirmOrder}
              submitting={submitting}
            />
          )}
        </div>

        <div className="w-full lg:w-96 shrink-0">
          <div className="lg:sticky lg:top-4">
            <OrderSummary
              items={summaryItems}
              subtotal={subtotal}
              shipping={shippingCost}
              discount={discount}
              total={orderTotal}
              coupon={coupon}
              onRemoveCoupon={removeCoupon}
              showCouponInput={currentStep === 'shipping'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

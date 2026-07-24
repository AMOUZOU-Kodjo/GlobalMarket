import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CreditCard, Plus, CheckCircle, ArrowLeft } from 'lucide-react'
import PaymentMethodCard from '../../components/molecules/PaymentMethodCard'
import FormField from '../../components/molecules/FormField'
import Spinner from '../../components/atoms/Spinner'
import EmptyState from '../../components/atoms/EmptyState'
import paymentService from '../../services/payment.service'

export default function PaymentStep({ paymentData, onNext, onBack }) {
  const { t } = useTranslation()
  const [methods, setMethods] = useState([])
  const [selectedMethod, setSelectedMethod] = useState(paymentData.method)
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [cardForm, setCardForm] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  })
  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    const loadMethods = async () => {
      setLoading(true)
      try {
        const res = await paymentService.getMethods()
        setMethods(res.data || res || [])
      } catch {
        setMethods([])
      } finally {
        setLoading(false)
      }
    }
    loadMethods()
  }, [])

  const validateCardForm = () => {
    const errors = {}
    if (!cardForm.number.trim()) {
      errors.number = t('checkout.cardNumberRequired')
    } else if (cardForm.number.replace(/\s/g, '').length < 16) {
      errors.number = t('checkout.cardNumberDigits')
    }
    if (!cardForm.expiry.trim()) {
      errors.expiry = t('checkout.expiryRequired')
    }
    if (!cardForm.cvc.trim()) {
      errors.cvc = t('checkout.cvcRequired')
    } else if (cardForm.cvc.length < 3) {
      errors.cvc = t('checkout.cvcDigits')
    }
    if (!cardForm.name.trim()) {
      errors.name = t('checkout.nameRequired')
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNewCardSubmit = () => {
    if (!validateCardForm()) return

    const newMethod = {
      _id: `new_${Date.now()}`,
      type: 'card',
      brand: detectCardBrand(cardForm.number),
      last4: cardForm.number.replace(/\s/g, '').slice(-4),
      expiry: cardForm.expiry,
      isNew: true,
      cardDetails: { ...cardForm },
    }
    setSelectedMethod(newMethod)
    setShowForm(false)
  }

  const detectCardBrand = (number) => {
    const cleaned = number.replace(/\s/g, '')
    if (/^4/.test(cleaned)) return 'visa'
    if (/^5[1-5]/.test(cleaned)) return 'mastercard'
    if (/^3[47]/.test(cleaned)) return 'amex'
    return 'card'
  }

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 16)
    return cleaned.replace(/(.{4})/g, '$1 ').trim()
  }

  const handleSubmit = () => {
    onNext({
      method: selectedMethod,
      cardDetails: selectedMethod?.isNew ? selectedMethod.cardDetails : null,
    })
  }

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <Spinner text={t('common.loading')} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <CreditCard size={20} />
            {t('checkout.paymentMethod')}
          </h2>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => setShowForm(true)}
          >
            <Plus size={16} />
            {t('checkout.addCard')}
          </button>
        </div>

        {showForm && (
          <div className="card bg-base-100 border border-base-200 mb-4">
            <div className="card-body">
              <h3 className="card-title text-sm mb-4">{t('checkout.newCreditCard')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  label={t('checkout.cardNumber')}
                  error={formErrors.number}
                  className="sm:col-span-2"
                  htmlFor="card-number"
                  required
                >
                  <input
                    id="card-number"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="1234 5678 9012 3456"
                    value={cardForm.number}
                    onChange={(e) =>
                      setCardForm((prev) => ({
                        ...prev,
                        number: formatCardNumber(e.target.value),
                      }))
                    }
                    maxLength={19}
                  />
                </FormField>
                <FormField
                  label={t('checkout.expiryDate')}
                  error={formErrors.expiry}
                  htmlFor="card-expiry"
                  required
                >
                  <input
                    id="card-expiry"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="MM/AA"
                    value={cardForm.expiry}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, '').slice(0, 4)
                      if (val.length > 2) val = val.slice(0, 2) + '/' + val.slice(2)
                      setCardForm((prev) => ({ ...prev, expiry: val }))
                    }}
                    maxLength={5}
                  />
                </FormField>
                <FormField
                  label={t('checkout.cvc')}
                  error={formErrors.cvc}
                  htmlFor="card-cvc"
                  required
                >
                  <input
                    id="card-cvc"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="123"
                    value={cardForm.cvc}
                    onChange={(e) =>
                      setCardForm((prev) => ({
                        ...prev,
                        cvc: e.target.value.replace(/\D/g, '').slice(0, 4),
                      }))
                    }
                    maxLength={4}
                  />
                </FormField>
                <FormField
                  label={t('checkout.holderName')}
                  error={formErrors.name}
                  className="sm:col-span-2"
                  htmlFor="card-name"
                  required
                >
                  <input
                    id="card-name"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Jean Dupont"
                    value={cardForm.name}
                    onChange={(e) =>
                      setCardForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </FormField>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    setShowForm(false)
                    setFormErrors({})
                  }}
                >
                  {t('common.cancel')}
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleNewCardSubmit}
                >
                  {t('common.save')}
                </button>
              </div>
            </div>
          </div>
        )}

        {methods.length === 0 && !showForm ? (
          <EmptyState
            icon={CreditCard}
            title={t('checkout.noPaymentMethod')}
            description={t('checkout.addCardToContinue')}
            action={
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setShowForm(true)}
              >
                <Plus size={16} />
                {t('checkout.addCard')}
              </button>
            }
          />
        ) : (
          <div className="flex flex-col gap-3">
            {methods.map((method) => (
              <PaymentMethodCard
                key={method._id || method.id}
                method={method}
                selected={selectedMethod?._id === method._id}
                onSelect={setSelectedMethod}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onBack}
        >
          <ArrowLeft size={16} />
          {t('common.back')}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!selectedMethod}
          onClick={handleSubmit}
        >
          {t('checkout.reviewOrder')}
        </button>
      </div>
    </div>
  )
}

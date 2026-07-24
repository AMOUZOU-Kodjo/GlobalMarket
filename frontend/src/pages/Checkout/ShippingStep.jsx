import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, Plus, Truck, Zap, CheckCircle } from 'lucide-react'
import AddressCard from '../../components/molecules/AddressCard'
import AddressForm from '../../components/organisms/AddressForm'
import Spinner from '../../components/atoms/Spinner'
import EmptyState from '../../components/atoms/EmptyState'
import classNames from '../../utils/classNames'

export default function ShippingStep({ user, shippingData, onNext }) {
  const { t } = useTranslation()

  const SHIPPING_METHODS = [
    {
      id: 'standard',
      label: t('checkout.shipping'),
      description: t('checkout.shippingStandard'),
      price: 0,
      icon: Truck,
    },
    {
      id: 'express',
      label: t('checkout.shippingExpress'),
      description: t('checkout.shippingExpressDesc'),
      price: 2500,
      icon: Zap,
    },
  ]
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(shippingData.address)
  const [selectedMethod, setSelectedMethod] = useState(shippingData.method)
  const [showForm, setShowForm] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)
  const [loadingAddresses, setLoadingAddresses] = useState(true)

  useEffect(() => {
    const loadAddresses = async () => {
      setLoadingAddresses(true)
      try {
        if (user?.addresses?.length) {
          setAddresses(user.addresses)
        } else {
          setAddresses([])
        }
      } catch {
        setAddresses([])
      } finally {
        setLoadingAddresses(false)
      }
    }
    loadAddresses()
  }, [user])

  const handleAddressSave = (address) => {
    const newAddress = {
      ...address,
      _id: editingAddress?._id || Date.now().toString(),
    }
    setAddresses((prev) => {
      if (editingAddress) {
        return prev.map((a) =>
          a._id === editingAddress._id ? newAddress : a
        )
      }
      return [...prev, newAddress]
    })
    setSelectedAddress(newAddress)
    setShowForm(false)
    setEditingAddress(null)
  }

  const handleAddressEdit = (address) => {
    setEditingAddress(address)
    setShowForm(true)
  }

  const handleAddressDelete = (address) => {
    setAddresses((prev) => prev.filter((a) => a._id !== address._id))
    if (selectedAddress?._id === address._id) {
      setSelectedAddress(null)
    }
  }

  const handleSubmit = () => {
    onNext({ address: selectedAddress, method: selectedMethod })
  }

  if (loadingAddresses) {
    return (
      <div className="flex justify-center py-16">
        <Spinner text={t('common.loading')} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <MapPin size={20} />
            {t('checkout.shippingAddress')}
          </h2>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              setEditingAddress(null)
              setShowForm(true)
            }}
          >
            <Plus size={16} />
            {t('checkout.addAddress')}
          </button>
        </div>

        {showForm && (
          <div className="card bg-base-100 border border-base-200 mb-4">
            <div className="card-body">
              <h3 className="card-title text-sm mb-2">
                {editingAddress ? t('checkout.editAddress') : t('checkout.newAddress')}
              </h3>
              <AddressForm
                address={editingAddress}
                onSave={handleAddressSave}
                onCancel={() => {
                  setShowForm(false)
                  setEditingAddress(null)
                }}
              />
            </div>
          </div>
        )}

        {addresses.length === 0 && !showForm ? (
          <EmptyState
            icon={MapPin}
            title={t('checkout.noAddress')}
            description={t('checkout.addAddressToContinue')}
            action={
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setEditingAddress(null)
                  setShowForm(true)
                }}
              >
                <Plus size={16} />
                {t('profile.addAddress')}
              </button>
            }
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses.map((address) => (
              <AddressCard
                key={address._id || address.id}
                address={address}
                selectable
                selected={selectedAddress?._id === address._id}
                onSelect={setSelectedAddress}
                onEdit={handleAddressEdit}
                onDelete={handleAddressDelete}
              />
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Truck size={20} />
          {t('checkout.shippingMethod')}
        </h2>
        <div className="flex flex-col gap-3">
          {SHIPPING_METHODS.map((method) => {
            const Icon = method.icon
            const isSelected = selectedMethod === method.id
            return (
              <div
                key={method.id}
                className={classNames(
                  'card bg-base-100 border-2 transition-all cursor-pointer',
                  isSelected
                    ? 'border-primary shadow-md shadow-primary/10'
                    : 'border-base-300 hover:border-primary/40'
                )}
                onClick={() => setSelectedMethod(method.id)}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedMethod(method.id)
                  }
                }}
              >
                <div className="card-body p-4 flex-row items-center gap-4">
                  <div
                    className={classNames(
                      'w-12 h-12 rounded-box flex items-center justify-center shrink-0',
                      isSelected ? 'bg-primary/10 text-primary' : 'bg-base-200'
                    )}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm">{method.label}</h3>
                      {isSelected && (
                        <CheckCircle size={14} className="text-primary" />
                      )}
                    </div>
                    <p className="text-xs text-base-content/60 mt-0.5">
                      {method.description}
                    </p>
                  </div>
                  <span className="font-bold text-sm shrink-0">
                    {method.price === 0 ? t('checkout.free') : `${method.price} XOF`}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          className="btn btn-primary"
          disabled={!selectedAddress || !selectedMethod}
          onClick={handleSubmit}
        >
          {t('checkout.continueToPayment')}
        </button>
      </div>
    </div>
  )
}

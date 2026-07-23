import { MapPin, CreditCard, ArrowLeft, ShieldCheck } from 'lucide-react'
import formatCurrency from '../../utils/formatCurrency'
import Spinner from '../../components/atoms/Spinner'

export default function ConfirmationStep({
  items,
  shippingData,
  paymentData,
  subtotal,
  shippingCost,
  discount,
  total,
  onBack,
  onConfirm,
  submitting,
}) {
  const shippingMethod = shippingData.method === 'express' ? 'Express' : 'Standard'
  const paymentLabel = paymentData.method
    ? {
        card: `Carte ${paymentData.method.brand?.toUpperCase() || ''} **** ${paymentData.method.last4 || ''}`,
        mobile_money: 'Mobile Money',
        paypal: 'PayPal',
        bank: 'Virement bancaire',
      }[paymentData.method.type] || 'Paiement'
    : 'Non sélectionné'

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Récapitulatif de la commande</h2>

      <div className="card bg-base-100 border border-base-200">
        <div className="card-body p-4">
          <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
            <MapPin size={16} />
            Adresse de livraison
          </h3>
          {shippingData.address ? (
            <div className="text-sm text-base-content/70 space-y-0.5">
              <p className="font-medium text-base-content">{shippingData.address.name}</p>
              <p>{shippingData.address.street}</p>
              <p>
                {shippingData.address.city}
                {shippingData.address.state ? `, ${shippingData.address.state}` : ''}{' '}
                {shippingData.address.zip}
              </p>
              <p>{shippingData.address.country}</p>
              {shippingData.address.phone && <p>Tél: {shippingData.address.phone}</p>}
            </div>
          ) : (
            <p className="text-sm text-error">Aucune adresse sélectionnée</p>
          )}
          <div className="mt-2 text-sm">
            <span className="text-base-content/50">Méthode: </span>
            <span className="font-medium">{shippingMethod}</span>
            {shippingCost === 0 ? (
              <span className="text-success ml-2">(Gratuit)</span>
            ) : (
              <span className="ml-2">({formatCurrency(shippingCost)})</span>
            )}
          </div>
        </div>
      </div>

      <div className="card bg-base-100 border border-base-200">
        <div className="card-body p-4">
          <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
            <CreditCard size={16} />
            Moyen de paiement
          </h3>
          {paymentData.method ? (
            <p className="text-sm font-medium">{paymentLabel}</p>
          ) : (
            <p className="text-sm text-error">Aucun moyen de paiement sélectionné</p>
          )}
        </div>
      </div>

      <div className="card bg-base-100 border border-base-200">
        <div className="card-body p-4">
          <h3 className="font-semibold text-sm mb-3">
            Articles ({items.length})
          </h3>
          <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
            {items.map((item, index) => (
              <div key={item._id || index} className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-base-200 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image || '/placeholder.png'}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-base-content/50">
                    {item.quantity} x {formatCurrency(item.price)}
                  </p>
                </div>
                <span className="text-sm font-medium shrink-0">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="divider my-2" />

          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-base-content/60">Sous-total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">Livraison</span>
              <span>{shippingCost === 0 ? 'Gratuit' : formatCurrency(shippingCost)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-success">
                <span>Réduction</span>
                <span>-{formatCurrency(discount)}</span>
              </div>
            )}
          </div>

          <div className="divider my-2" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onBack}
          disabled={submitting}
        >
          <ArrowLeft size={16} />
          Retour
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          disabled={submitting || !shippingData.address || !paymentData.method}
          onClick={onConfirm}
        >
          {submitting ? (
            <Spinner size="sm" />
          ) : (
            <>
              <ShieldCheck size={18} />
              Confirmer et payer {formatCurrency(total)}
            </>
          )}
        </button>
      </div>
    </div>
  )
}

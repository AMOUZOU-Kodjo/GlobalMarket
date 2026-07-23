import { CreditCard, Trash2, CheckCircle } from 'lucide-react'
import classNames from '../../utils/classNames'

const BRAND_LOGOS = {
  visa: '💳',
  mastercard: '💳',
  amex: '💳',
  discover: '💳',
  mobile_money: '📱',
  paypal: '🅿️',
  default: '💳',
}

export function PaymentMethodCard({
  method,
  onSelect,
  selected = false,
  onDelete,
}) {
  const { type, last4, brand, expiry } = method
  const brandLogo = BRAND_LOGOS[brand?.toLowerCase()] || BRAND_LOGOS.default

  const typeLabel = {
    card: 'Carte bancaire',
    mobile_money: 'Mobile Money',
    paypal: 'PayPal',
    bank: 'Virement bancaire',
  }[type] || 'Paiement'

  return (
    <div
      className={classNames(
        'card bg-base-100 border-2 transition-all cursor-pointer',
        selected
          ? 'border-primary shadow-md shadow-primary/10'
          : 'border-base-300 hover:border-primary/40 hover:shadow-sm'
      )}
      onClick={() => onSelect?.(method)}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect?.(method)
        }
      }}
    >
      <div className="card-body p-4 flex-row items-center gap-4">
        <div className={classNames(
          'w-12 h-12 rounded-box flex items-center justify-center text-xl shrink-0',
          selected ? 'bg-primary/10' : 'bg-base-200'
        )}>
          {brandLogo}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm">{typeLabel}</h3>
            {selected && (
              <CheckCircle size={14} className="text-primary shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-base-content/60 font-mono tracking-wider">
              {brand?.toUpperCase()} {last4 ? `**** ${last4}` : ''}
            </span>
            {expiry && (
              <span className="text-xs text-base-content/40">
                Exp: {expiry}
              </span>
            )}
          </div>
        </div>

        {onDelete && (
          <button
            className="btn btn-ghost btn-circle btn-sm text-error shrink-0"
            onClick={(e) => {
              e.stopPropagation()
              onDelete(method)
            }}
            aria-label="Supprimer le moyen de paiement"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </div>
  )
}

export default PaymentMethodCard

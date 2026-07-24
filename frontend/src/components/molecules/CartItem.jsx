import { Minus, Plus, Trash2 } from 'lucide-react'
import formatCurrency from '../../utils/formatCurrency'

export function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}) {
  const { id, name, price, image, quantity, seller, stock = 99 } = item

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity?.(id, quantity - 1)
    }
  }

  const handleIncrease = () => {
    if (quantity < stock) {
      onUpdateQuantity?.(id, quantity + 1)
    }
  }

  return (
    <div className="flex gap-4 p-4 bg-base-100 rounded-box border border-base-300">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-box overflow-hidden bg-base-200 shrink-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-base-content/30">
            <span className="text-2xl">📦</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-semibold text-sm sm:text-base truncate">{name}</h3>
            {seller && (
              <p className="text-xs text-base-content/50 mt-0.5">Vendeur: {typeof seller === 'string' ? seller : seller.shopName || seller.name}</p>
            )}
          </div>
          <button
            className="btn btn-ghost btn-circle btn-sm text-error hover:bg-error/10 shrink-0"
            onClick={() => onRemove?.(id)}
            aria-label={`Supprimer ${name}`}
          >
            <Trash2 size={16} />
          </button>
        </div>

        <div className="flex items-end justify-between mt-auto pt-2">
          <div className="flex items-center gap-1">
            <button
              className="btn btn-ghost btn-circle btn-sm"
              onClick={handleDecrease}
              disabled={quantity <= 1}
              aria-label="Diminuer la quantité"
            >
              <Minus size={14} />
            </button>
            <input
              type="number"
              className="input input-bordered input-sm w-14 text-center text-xs"
              value={quantity}
              readOnly
              aria-label="Quantité"
            />
            <button
              className="btn btn-ghost btn-circle btn-sm"
              onClick={handleIncrease}
              disabled={quantity >= stock}
              aria-label="Augmenter la quantité"
            >
              <Plus size={14} />
            </button>
            {stock <= 5 && stock > 0 && (
              <span className="text-xs text-warning ml-1 hidden sm:inline">
                Stock: {stock}
              </span>
            )}
          </div>

          <p className="font-bold text-primary text-sm sm:text-base">
            {formatCurrency(price * quantity)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartItem

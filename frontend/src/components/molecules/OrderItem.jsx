import formatCurrency from '../../utils/formatCurrency'

export function OrderItem({ item }) {
  const name = item.productName || item.name
  const price = Number(item.unitPrice || item.price || 0)
  const quantity = item.quantity
  const image = item.productImage || item.image
  const lineTotal = Number(item.totalPrice || price * quantity)

  return (
    <div className="flex gap-4 p-4 bg-base-100 rounded-box border border-base-300">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-box overflow-hidden bg-base-200 shrink-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-base-content/30">
            <span className="text-xl">📦</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 min-w-0 justify-between">
        <div className="min-w-0">
          <h3 className="font-semibold text-sm truncate">{name}</h3>
          <p className="text-xs text-base-content/50 mt-0.5">
            {formatCurrency(price)} x {quantity}
          </p>
        </div>
        <p className="font-bold text-sm sm:text-base text-right">
          {formatCurrency(lineTotal)}
        </p>
      </div>
    </div>
  )
}

export default OrderItem

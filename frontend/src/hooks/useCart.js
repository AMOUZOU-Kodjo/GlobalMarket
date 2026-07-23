import { useCart as useCartContext } from '../context/CartContext'

export default function useCart() {
  const {
    items,
    coupon,
    total,
    subtotal,
    totalItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyCoupon,
    removeCoupon,
  } = useCartContext()

  const getTotal = () => total
  const getItemCount = () => totalItems

  return {
    items,
    coupon,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyCoupon,
    removeCoupon,
    getTotal,
    getItemCount,
    subtotal,
    total,
    totalItems,
  }
}

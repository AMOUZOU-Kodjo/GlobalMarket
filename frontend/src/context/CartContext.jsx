import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'globalmarket_cart'

function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return {
        items: Array.isArray(parsed.items) ? parsed.items : [],
        coupon: parsed.coupon || null,
      }
    }
  } catch {
    // ignore malformed data
  }
  return { items: [], coupon: null }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadCartFromStorage().items)
  const [coupon, setCoupon] = useState(() => loadCartFromStorage().coupon)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items, coupon }))
  }, [items, coupon])

  const addItem = useCallback((product, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.productId
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        const newQty = updated[existingIndex].quantity + quantity
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(newQty, updated[existingIndex].stock),
        }
        return updated
      }
      return [
        ...prev,
        {
          productId: product.productId,
          name: product.name,
          price: product.price,
          image: product.image || '',
          quantity: Math.min(quantity, product.stock || 99),
          seller: product.seller || '',
          stock: product.stock || 99,
        },
      ]
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.productId !== productId))
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.min(quantity, item.stock) }
          : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
    setCoupon(null)
  }, [])

  const applyCoupon = useCallback((couponData) => {
    setCoupon(couponData)
  }, [])

  const removeCoupon = useCallback(() => {
    setCoupon(null)
  }, [])

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [items])

  const total = useMemo(() => {
    if (!coupon) return subtotal
    if (coupon.type === 'percentage') {
      const discount = subtotal * (coupon.value / 100)
      return Math.max(0, subtotal - discount)
    }
    if (coupon.type === 'fixed') {
      return Math.max(0, subtotal - coupon.value)
    }
    return subtotal
  }, [subtotal, coupon])

  const totalItems = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0)
  }, [items])

  const value = useMemo(
    () => ({
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
    }),
    [
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
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

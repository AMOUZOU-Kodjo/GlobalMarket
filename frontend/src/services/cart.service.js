import { api } from './api'

const cartService = {
  get: () => api.get('/cart'),

  addItem: (productId, quantity = 1) => api.post('/cart/items', { productId, quantity }),

  updateItem: (itemId, quantity) => api.put(`/cart/items/${itemId}`, { quantity }),

  removeItem: (itemId) => api.delete(`/cart/items/${itemId}`),

  clear: () => api.delete('/cart'),

  applyCoupon: (code) => api.post('/cart/coupon', { code }),

  removeCoupon: () => api.delete('/cart/coupon'),
}

export default cartService

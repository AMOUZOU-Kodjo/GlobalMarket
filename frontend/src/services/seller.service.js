import { api } from './api'

const sellerService = {
  register: (data) => api.post('/seller/register', data),

  getDashboard: () => api.get('/seller/dashboard'),

  getShop: () => api.get('/seller/shop'),

  updateShop: (data) => api.put('/seller/shop', data),

  getProducts: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/seller/products${query ? `?${query}` : ''}`)
  },

  createProduct: (data) => api.post('/seller/products', data),

  updateProduct: (id, data) => api.put(`/seller/products/${id}`, data),

  deleteProduct: (id) => api.delete(`/seller/products/${id}`),

  getOrders: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/seller/orders${query ? `?${query}` : ''}`)
  },

  getOrderDetail: (id) => api.get(`/seller/orders/${id}`),

  updateOrderStatus: (id, status) => api.patch(`/seller/orders/${id}/status`, { status }),

  getAnalytics: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/seller/analytics${query ? `?${query}` : ''}`)
  },

  getPayouts: () => api.get('/seller/payouts'),

  updateBankAccount: (data) => api.put('/seller/bank-account', data),
}

export default sellerService

import { api } from './api'

const paymentService = {
  createIntent: (data) => api.post('/payments/intent', data),

  confirmPayment: (intentId, data) => api.post(`/payments/${intentId}/confirm`, data),

  getMethods: () => api.get('/payments/methods'),

  refund: (paymentId, data) => api.post(`/payments/${paymentId}/refund`, data),

  getHistory: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/payments/history${query ? `?${query}` : ''}`)
  },
}

export default paymentService

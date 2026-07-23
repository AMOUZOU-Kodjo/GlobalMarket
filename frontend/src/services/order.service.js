import { api } from './api'

const orderService = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/orders${query ? `?${query}` : ''}`)
  },

  getById: (id) => api.get(`/orders/${id}`),

  create: (data) => api.post('/orders', data),

  cancel: (id) => api.post(`/orders/${id}/cancel`),

  getTracking: (id) => api.get(`/orders/${id}/tracking`),

  downloadInvoice: (id) => {
    return fetch(`/api/orders/${id}/invoice`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => {
      if (!res.ok) throw new Error(`Erreur ${res.status}`)
      return res.blob()
    })
  },
}

export default orderService

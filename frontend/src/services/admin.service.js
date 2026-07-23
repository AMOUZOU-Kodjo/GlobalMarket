import { api } from './api'

const adminService = {
  getDashboard: () => api.get('/admin/dashboard'),

  getUsers: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/admin/users${query ? `?${query}` : ''}`)
  },

  updateUserStatus: (id, status) => api.patch(`/admin/users/${id}/status`, { status }),

  updateUserRole: (id, role) => api.patch(`/admin/users/${id}/role`, { role }),

  getUserDetail: (id) => api.get(`/admin/users/${id}`),

  getProducts: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/admin/products${query ? `?${query}` : ''}`)
  },

  moderateProduct: (id, action) => api.patch(`/admin/products/${id}/moderate`, { action }),

  getOrders: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/admin/orders${query ? `?${query}` : ''}`)
  },

  updateOrderStatus: (id, status) => api.patch(`/admin/orders/${id}/status`, { status }),

  refundOrder: (id, data) => api.post(`/admin/orders/${id}/refund`, data),

  getReports: (type, params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/admin/reports/${type}${query ? `?${query}` : ''}`)
  },

  getSettings: () => api.get('/admin/settings'),

  updateSettings: (data) => api.put('/admin/settings', data),
}

export default adminService

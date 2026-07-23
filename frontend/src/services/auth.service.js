import { api } from './api'

const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),

  register: (name, email, password) => api.post('/auth/register', { name, email, password }),

  logout: () => api.post('/auth/logout'),

  getMe: () => api.get('/auth/me'),

  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),

  resetPassword: (token, password) => api.post('/auth/reset-password', { token, password }),

  verifyEmail: (code) => api.post('/auth/verify-email', { code }),

  refreshToken: () => {
    const refreshToken = localStorage.getItem('refreshToken')
    return api.post('/auth/refresh-token', { refreshToken })
  },

  updateProfile: (data) => api.put('/auth/profile', data),

  changePassword: (data) => api.put('/auth/change-password', data),
}

export default authService

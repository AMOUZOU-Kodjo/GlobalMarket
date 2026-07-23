import { api } from './api'

const productService = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/products${query ? `?${query}` : ''}`)
  },

  getById: (id) => api.get(`/products/${id}`),

  getBySlug: (slug) => api.get(`/products/slug/${slug}`),

  getByCategory: (categorySlug, params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/products/category/${categorySlug}${query ? `?${query}` : ''}`)
  },

  search: (query, params = {}) => {
    const searchParams = new URLSearchParams({ q: query, ...params }).toString()
    return api.get(`/products/search?${searchParams}`)
  },

  getFeatured: () => api.get('/products/featured'),

  getTrending: () => api.get('/products/trending'),

  getNew: () => api.get('/products/new'),

  getRelated: (id) => api.get(`/products/${id}/related`),

  create: (data) => api.post('/products', data),

  update: (id, data) => api.put(`/products/${id}`, data),

  delete: (id) => api.delete(`/products/${id}`),

  uploadImages: (id, files) => {
    const formData = new FormData()
    files.forEach((file) => formData.append('images', file))
    return fetch(`/api/products/${id}/images`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    }).then((res) => {
      if (!res.ok) throw new Error(`Erreur ${res.status}`)
      return res.json()
    }).then((json) => json.data !== undefined ? json.data : json)
  },

  deleteImage: (id, imageId) => api.delete(`/products/${id}/images/${imageId}`),
}

export default productService

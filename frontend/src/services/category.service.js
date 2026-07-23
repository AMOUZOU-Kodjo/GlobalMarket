import { api } from './api'

const categoryService = {
  getAll: () => api.get('/categories'),

  getTree: () => api.get('/categories/tree'),

  getById: (id) => api.get(`/categories/${id}`),

  getBySlug: (slug) => api.get(`/categories/slug/${slug}`),
}

export default categoryService

import { api } from './api'

const supportService = {
  getTickets: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/support/tickets${query ? `?${query}` : ''}`)
  },

  createTicket: (data) => api.post('/support/tickets', data),

  getTicketDetail: (id) => api.get(`/support/tickets/${id}`),

  addMessage: (ticketId, data) => api.post(`/support/tickets/${ticketId}/messages`, data),

  closeTicket: (id) => api.post(`/support/tickets/${id}/close`),

  getKnowledgeBase: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return api.get(`/support/kb${query ? `?${query}` : ''}`)
  },

  getArticle: (id) => api.get(`/support/kb/${id}`),
}

export default supportService

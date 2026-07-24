import { api } from './api'

const messageService = {
  getConversations: () => api.get('/messages/conversations'),
  getMessages: (conversationId, page = 1) => api.get(`/messages/${conversationId}?page=${page}`),
  sendMessage: (data) => api.post('/messages', data),
  markAsRead: (conversationId) => api.post(`/messages/${conversationId}/read`),
  getUnreadCount: () => api.get('/messages/unread'),
  findOrCreate: (recipientId) => api.post('/messages/conversations', { recipientId }),
}

export default messageService

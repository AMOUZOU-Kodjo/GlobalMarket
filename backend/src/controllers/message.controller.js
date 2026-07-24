const messageService = require('../services/message.service')

async function getConversations(req, res, next) {
  try {
    const data = await messageService.getConversations(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getMessages(req, res, next) {
  try {
    const { page = 1, limit = 50 } = req.query
    const data = await messageService.getMessages(req.params.conversationId, req.user.id, Number(page), Number(limit))
    res.json(data)
  } catch (err) {
    next(err)
  }
}

async function sendMessage(req, res, next) {
  try {
    const data = await messageService.sendMessage(req.user.id, req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function markAsRead(req, res, next) {
  try {
    const data = await messageService.markAsRead(req.params.conversationId, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getUnreadCount(req, res, next) {
  try {
    const data = await messageService.getUnreadCount(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function findOrCreateConversation(req, res, next) {
  try {
    const data = await messageService.findOrCreateConversation(req.user.id, req.body.recipientId)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getConversations,
  getMessages,
  sendMessage,
  markAsRead,
  getUnreadCount,
  findOrCreateConversation
}

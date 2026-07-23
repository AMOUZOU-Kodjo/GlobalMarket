const supportService = require('../services/support.service')

async function getTickets(req, res, next) {
  try {
    const data = await supportService.getTickets(req.user.id, req.user.role, req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function createTicket(req, res, next) {
  try {
    const data = await supportService.createTicket(req.user.id, req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function getTicketDetail(req, res, next) {
  try {
    const data = await supportService.getTicketDetail(req.params.id, req.user.id, req.user.role)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function addMessage(req, res, next) {
  try {
    const data = await supportService.addMessage(req.params.ticketId, req.user.id, req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function closeTicket(req, res, next) {
  try {
    const data = await supportService.closeTicket(req.params.id, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getKnowledgeBase(req, res, next) {
  try {
    const data = await supportService.getKnowledgeBase(req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getArticle(req, res, next) {
  try {
    const data = await supportService.getArticle(req.params.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getTickets,
  createTicket,
  getTicketDetail,
  addMessage,
  closeTicket,
  getKnowledgeBase,
  getArticle
}

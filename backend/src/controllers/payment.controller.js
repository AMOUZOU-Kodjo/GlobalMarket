const paymentService = require('../services/payment.service')

async function createIntent(req, res, next) {
  try {
    const data = await paymentService.createIntent(req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function confirmPayment(req, res, next) {
  try {
    const data = await paymentService.confirmPayment(req.params.intentId, req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getMethods(req, res, next) {
  try {
    const data = await paymentService.getMethods()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function refund(req, res, next) {
  try {
    const data = await paymentService.refund(req.params.paymentId, req.body, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getHistory(req, res, next) {
  try {
    const data = await paymentService.getHistory(req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createIntent,
  confirmPayment,
  getMethods,
  refund,
  getHistory
}

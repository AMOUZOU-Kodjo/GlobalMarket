const orderService = require('../services/order.service')

async function getAll(req, res, next) {
  try {
    const data = await orderService.getAll(req.user.id, req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getById(req, res, next) {
  try {
    const data = await orderService.getById(req.params.id, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function create(req, res, next) {
  try {
    const data = await orderService.create(req.user.id, req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function cancel(req, res, next) {
  try {
    const data = await orderService.cancel(req.params.id, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getTracking(req, res, next) {
  try {
    const data = await orderService.getTracking(req.params.id, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function downloadInvoice(req, res, next) {
  try {
    const buffer = await orderService.generateInvoice(req.params.id, req.user.id)
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="invoice-${req.params.id}.pdf"`
    })
    res.end(buffer)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  cancel,
  getTracking,
  downloadInvoice
}

const cartService = require('../services/cart.service')

async function get(req, res, next) {
  try {
    const data = await cartService.get(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function addItem(req, res, next) {
  try {
    const { productId, variantId, quantity } = req.body
    const data = await cartService.addItem(req.user.id, productId, variantId, quantity)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateItem(req, res, next) {
  try {
    const { quantity } = req.body
    const data = await cartService.updateItem(req.user.id, req.params.itemId, quantity)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function removeItem(req, res, next) {
  try {
    const data = await cartService.removeItem(req.user.id, req.params.itemId)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function clear(req, res, next) {
  try {
    const data = await cartService.clear(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function applyCoupon(req, res, next) {
  try {
    const { code } = req.body
    const data = await cartService.applyCoupon(req.user.id, code)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function removeCoupon(req, res, next) {
  try {
    const data = await cartService.removeCoupon(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  get,
  addItem,
  updateItem,
  removeItem,
  clear,
  applyCoupon,
  removeCoupon
}

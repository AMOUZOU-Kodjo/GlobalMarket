const sellerService = require('../services/seller.service')

async function register(req, res, next) {
  try {
    const data = await sellerService.register(req.user.id, req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function getDashboard(req, res, next) {
  try {
    const data = await sellerService.getDashboard(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getShop(req, res, next) {
  try {
    const data = await sellerService.getShop(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateShop(req, res, next) {
  try {
    const data = await sellerService.updateShop(req.user.id, req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getProducts(req, res, next) {
  try {
    const data = await sellerService.getProducts(req.user.id, req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function createProduct(req, res, next) {
  try {
    const data = await sellerService.createProduct(req.user.id, req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateProduct(req, res, next) {
  try {
    const data = await sellerService.updateProduct(req.params.id, req.user.id, req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function deleteProduct(req, res, next) {
  try {
    const data = await sellerService.deleteProduct(req.params.id, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getOrders(req, res, next) {
  try {
    const data = await sellerService.getOrders(req.user.id, req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getOrderDetail(req, res, next) {
  try {
    const data = await sellerService.getOrderDetail(req.params.id, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateOrderStatus(req, res, next) {
  try {
    const { status } = req.body
    const data = await sellerService.updateOrderStatus(req.params.id, req.user.id, status)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getAnalytics(req, res, next) {
  try {
    const { period } = req.query
    const data = await sellerService.getAnalytics(req.user.id, period)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getPayouts(req, res, next) {
  try {
    const data = await sellerService.getPayouts(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateBankAccount(req, res, next) {
  try {
    const data = await sellerService.updateBankAccount(req.user.id, req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  register,
  getDashboard,
  getShop,
  updateShop,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOrders,
  getOrderDetail,
  updateOrderStatus,
  getAnalytics,
  getPayouts,
  updateBankAccount
}

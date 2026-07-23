const adminService = require('../services/admin.service')

async function getDashboard(req, res, next) {
  try {
    const data = await adminService.getDashboard()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getUsers(req, res, next) {
  try {
    const data = await adminService.getUsers(req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getUserDetail(req, res, next) {
  try {
    const data = await adminService.getUserDetail(req.params.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateUserStatus(req, res, next) {
  try {
    const { status } = req.body
    const data = await adminService.updateUserStatus(req.params.id, status)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateUserRole(req, res, next) {
  try {
    const { role } = req.body
    const data = await adminService.updateUserRole(req.params.id, role)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getProducts(req, res, next) {
  try {
    const data = await adminService.getProducts(req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function moderateProduct(req, res, next) {
  try {
    const { action } = req.body
    const data = await adminService.moderateProduct(req.params.id, action)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getOrders(req, res, next) {
  try {
    const data = await adminService.getOrders(req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateOrderStatus(req, res, next) {
  try {
    const { status } = req.body
    const data = await adminService.updateOrderStatus(req.params.id, status)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function refundOrder(req, res, next) {
  try {
    const data = await adminService.refundOrder(req.params.id, req.body, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getReports(req, res, next) {
  try {
    const data = await adminService.getReports(req.params.type, req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getSettings(req, res, next) {
  try {
    const data = await adminService.getSettings()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateSettings(req, res, next) {
  try {
    const data = await adminService.updateSettings(req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getDashboard,
  getUsers,
  getUserDetail,
  updateUserStatus,
  updateUserRole,
  getProducts,
  moderateProduct,
  getOrders,
  updateOrderStatus,
  refundOrder,
  getReports,
  getSettings,
  updateSettings
}

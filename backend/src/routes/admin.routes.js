const { Router } = require('express')
const { auth } = require('../middleware/auth')
const { requireRole } = require('../middleware/role')
const ctrl = require('../controllers/admin.controller')

const router = Router()

router.use(auth, requireRole('admin'))

router.get('/dashboard', ctrl.getDashboard)
router.get('/users', ctrl.getUsers)
router.get('/users/:id', ctrl.getUserDetail)
router.patch('/users/:id/status', ctrl.updateUserStatus)
router.patch('/users/:id/role', ctrl.updateUserRole)
router.get('/products', ctrl.getProducts)
router.patch('/products/:id/moderate', ctrl.moderateProduct)
router.get('/orders', ctrl.getOrders)
router.patch('/orders/:id/status', ctrl.updateOrderStatus)
router.post('/orders/:id/refund', ctrl.refundOrder)
router.get('/reports/:type', ctrl.getReports)
router.get('/settings', ctrl.getSettings)
router.put('/settings', ctrl.updateSettings)

module.exports = router

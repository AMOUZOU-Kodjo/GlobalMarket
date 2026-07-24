const { Router } = require('express')
const { auth } = require('../middleware/auth')
const { requireRole } = require('../middleware/role')
const { validate } = require('../middleware/validate')
const { sellerRegisterSchema, updateShopSchema, updateOrderStatusSchema, bankAccountSchema } = require('../validators/seller.validator')
const ctrl = require('../controllers/seller.controller')

const router = Router()

router.get('/shop/:slug', ctrl.getPublicShop)
router.get('/shop/:slug/products', ctrl.getPublicShopProducts)

router.post('/register', auth, validate(sellerRegisterSchema), ctrl.register)
router.get('/dashboard', auth, requireRole('seller'), ctrl.getDashboard)
router.get('/shop', auth, requireRole('seller'), ctrl.getShop)
router.put('/shop', auth, requireRole('seller'), validate(updateShopSchema), ctrl.updateShop)
router.get('/products', auth, requireRole('seller'), ctrl.getProducts)
router.post('/products', auth, requireRole('seller'), ctrl.createProduct)
router.put('/products/:id', auth, requireRole('seller'), ctrl.updateProduct)
router.delete('/products/:id', auth, requireRole('seller'), ctrl.deleteProduct)
router.get('/orders', auth, requireRole('seller'), ctrl.getOrders)
router.get('/orders/:id', auth, requireRole('seller'), ctrl.getOrderDetail)
router.patch('/orders/:id/status', auth, requireRole('seller'), validate(updateOrderStatusSchema), ctrl.updateOrderStatus)
router.get('/analytics', auth, requireRole('seller'), ctrl.getAnalytics)
router.get('/payouts', auth, requireRole('seller'), ctrl.getPayouts)
router.put('/bank-account', auth, requireRole('seller'), validate(bankAccountSchema), ctrl.updateBankAccount)

module.exports = router

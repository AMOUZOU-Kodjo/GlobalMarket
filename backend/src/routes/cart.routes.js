const { Router } = require('express')
const { auth } = require('../middleware/auth')
const ctrl = require('../controllers/cart.controller')

const router = Router()

router.use(auth)

router.get('/', ctrl.get)
router.post('/items', ctrl.addItem)
router.put('/items/:itemId', ctrl.updateItem)
router.delete('/items/:itemId', ctrl.removeItem)
router.delete('/', ctrl.clear)
router.post('/coupon', ctrl.applyCoupon)
router.delete('/coupon', ctrl.removeCoupon)

module.exports = router

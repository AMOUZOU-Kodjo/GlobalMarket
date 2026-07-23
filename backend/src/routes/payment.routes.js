const { Router } = require('express')
const { auth } = require('../middleware/auth')
const { requireRole } = require('../middleware/role')
const ctrl = require('../controllers/payment.controller')

const router = Router()

router.post('/intent', auth, ctrl.createIntent)
router.post('/:intentId/confirm', auth, ctrl.confirmPayment)
router.get('/methods', ctrl.getMethods)
router.post('/:paymentId/refund', auth, requireRole('admin'), ctrl.refund)
router.get('/history', auth, requireRole('admin'), ctrl.getHistory)

module.exports = router

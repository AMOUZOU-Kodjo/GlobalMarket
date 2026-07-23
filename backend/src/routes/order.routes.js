const { Router } = require('express')
const { auth } = require('../middleware/auth')
const { validate } = require('../middleware/validate')
const { createOrderSchema } = require('../validators/order.validator')
const ctrl = require('../controllers/order.controller')

const router = Router()

router.use(auth)

router.get('/', ctrl.getAll)
router.post('/', validate(createOrderSchema), ctrl.create)
router.get('/:id', ctrl.getById)
router.post('/:id/cancel', ctrl.cancel)
router.get('/:id/tracking', ctrl.getTracking)
router.get('/:id/invoice', ctrl.downloadInvoice)

module.exports = router

const { Router } = require('express')
const ctrl = require('../controllers/category.controller')

const router = Router()

router.get('/', ctrl.getAll)
router.get('/tree', ctrl.getTree)
router.get('/:id', ctrl.getById)
router.get('/slug/:slug', ctrl.getBySlug)

module.exports = router

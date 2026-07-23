const { Router } = require('express')
const { auth, optionalAuth } = require('../middleware/auth')
const { requireRole } = require('../middleware/role')
const { validate } = require('../middleware/validate')
const { upload } = require('../middleware/upload')
const {
  createProductSchema,
  updateProductSchema
} = require('../validators/product.validator')
const ctrl = require('../controllers/product.controller')

const router = Router()

router.get('/', optionalAuth, ctrl.getAll)
router.get('/featured', ctrl.getFeatured)
router.get('/trending', ctrl.getTrending)
router.get('/new', ctrl.getNew)
router.get('/search', ctrl.search)
router.get('/slug/:slug', ctrl.getBySlug)
router.get('/category/:categorySlug', ctrl.getByCategory)
router.get('/:id', ctrl.getByIdOrSlug)
router.get('/:id/related', ctrl.getRelated)

router.post(
  '/',
  auth,
  requireRole('seller', 'admin'),
  validate(createProductSchema),
  ctrl.create
)
router.put(
  '/:id',
  auth,
  requireRole('seller', 'admin'),
  validate(updateProductSchema),
  ctrl.update
)
router.delete('/:id', auth, requireRole('seller', 'admin'), ctrl.remove)
router.post(
  '/:id/images',
  auth,
  requireRole('seller', 'admin'),
  upload.array('images', 10),
  ctrl.uploadImages
)
router.delete(
  '/:id/images/:imageId',
  auth,
  requireRole('seller', 'admin'),
  ctrl.deleteImage
)

module.exports = router

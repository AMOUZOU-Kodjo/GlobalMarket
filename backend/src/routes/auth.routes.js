const { Router } = require('express')
const { auth, optionalAuth } = require('../middleware/auth')
const { validate } = require('../middleware/validate')
const { authLimiter } = require('../middleware/rateLimiter')
const {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyEmailSchema,
  refreshTokenSchema,
  updateProfileSchema,
  changePasswordSchema
} = require('../validators/auth.validator')
const ctrl = require('../controllers/auth.controller')

const router = Router()

router.post('/register', authLimiter, validate(registerSchema), ctrl.register)
router.post('/login', authLimiter, validate(loginSchema), ctrl.login)
router.post('/logout', auth, ctrl.logout)
router.get('/me', auth, ctrl.me)
router.post('/forgot-password', validate(forgotPasswordSchema), ctrl.forgotPassword)
router.post('/reset-password', validate(resetPasswordSchema), ctrl.resetPassword)
router.post('/verify-email', validate(verifyEmailSchema), ctrl.verifyEmail)
router.post('/refresh-token', validate(refreshTokenSchema), ctrl.refresh)
router.put('/profile', auth, validate(updateProfileSchema), ctrl.updateProfile)
router.put('/change-password', auth, validate(changePasswordSchema), ctrl.changePassword)

module.exports = router

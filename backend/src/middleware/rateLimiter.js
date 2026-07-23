const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 500,
  message: { message: 'Trop de requêtes, veuillez réessayer' },
  standardHeaders: true,
  legacyHeaders: false
})

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: 'Trop de tentatives, veuillez réessayer plus tard' }
})

module.exports = { apiLimiter, authLimiter }

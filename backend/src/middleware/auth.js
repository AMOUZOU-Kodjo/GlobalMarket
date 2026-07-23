const jwt = require('jsonwebtoken')
const prisma = require('../config/database')

async function auth(req, res, next) {
  try {
    const header = req.headers.authorization
    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authentification requise' })
    }
    const token = header.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await prisma.user.findUnique({ where: { id: decoded.sub }, select: { id: true, email: true, name: true, role: true, status: true } })
    if (!user || user.status !== 'active') {
      return res.status(401).json({ message: 'Utilisateur introuvable ou suspendu' })
    }
    req.user = user
    next()
  } catch (err) {
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: err.name === 'TokenExpiredError' ? 'Token expiré' : 'Token invalide' })
    }
    next(err)
  }
}

function optionalAuth(req, res, next) {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) return next()
  const token = header.split(' ')[1]
  jwt.verify(token, process.env.JWT_SECRET)
    .then(async (decoded) => {
      const user = await prisma.user.findUnique({ where: { id: decoded.sub }, select: { id: true, email: true, name: true, role: true, status: true } })
      if (user && user.status === 'active') req.user = user
      next()
    })
    .catch(() => next())
}

module.exports = { auth, optionalAuth }

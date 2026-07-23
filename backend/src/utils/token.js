const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

function generateToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' })
}

function generateRefreshToken() {
  return { token: uuidv4(), expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) }
}

module.exports = { generateToken, generateRefreshToken }

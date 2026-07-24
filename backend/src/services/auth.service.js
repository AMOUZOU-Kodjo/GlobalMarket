const prisma = require('../config/database')
const bcrypt = require('bcryptjs')
const { generateToken, generateRefreshToken } = require('../utils/token')
const { sendEmail, emailTemplate } = require('./email.service')
const crypto = require('crypto')

async function register(name, email, password) {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Un compte avec cet email existe déjà')

  const passwordHash = await bcrypt.hash(password, 12)
  const verifyCode = String(Math.floor(100000 + Math.random() * 900000))

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      emailVerifyCode: verifyCode,
      emailVerifyExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000)
    }
  })

  const accessToken = generateToken(user)
  const rt = generateRefreshToken()
  await prisma.refreshToken.create({ data: { ...rt, userId: user.id } })

  const html = emailTemplate('Vérification de votre email', `
    <p>Bonjour ${user.name},</p>
    <p>Votre code de vérification est :</p>
    <div style="text-align:center;margin:20px 0">
      <span style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#0d6efd">${verifyCode}</span>
    </div>
    <p>Ce code expire dans 24 heures.</p>
  `)
  await sendEmail(email, 'Vérifiez votre email - MarcoStore', html)

  return {
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    accessToken,
    refreshToken: rt.token
  }
}

async function login(email, password) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Email ou mot de passe incorrect')

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) throw new Error('Email ou mot de passe incorrect')

  if (user.status === 'banned') throw new Error('Votre compte a été banni')
  if (user.status === 'suspended') throw new Error('Votre compte est suspendu')

  await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } })

  const accessToken = generateToken(user)
  const rt = generateRefreshToken()
  await prisma.refreshToken.create({ data: { ...rt, userId: user.id } })

  return {
    user: {
      id: user.id, name: user.name, email: user.email,
      role: user.role, avatar: user.avatar, emailVerified: user.emailVerified
    },
    accessToken,
    refreshToken: rt.token
  }
}

async function logout(refreshToken) {
  await prisma.refreshToken.deleteMany({ where: { token: refreshToken } })
  return { message: 'Déconnexion réussie' }
}

async function getMe(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true, name: true, email: true, phone: true, avatar: true,
      role: true, status: true, emailVerified: true, createdAt: true,
      seller: { select: { id: true, shopName: true, slug: true, verified: true } }
    }
  })
  if (!user) throw new Error('Utilisateur non trouvé')
  return user
}

async function forgotPassword(email) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return { message: 'Si cet email existe, un lien de réinitialisation a été envoyé' }

  const resetToken = crypto.randomBytes(32).toString('hex')
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex')

  await prisma.user.update({
    where: { id: user.id },
    data: {
      resetPasswordToken: hashedToken,
      resetPasswordExpiry: new Date(Date.now() + 60 * 60 * 1000)
    }
  })

  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`
  const html = emailTemplate('Réinitialisation du mot de passe', `
    <p>Bonjour ${user.name},</p>
    <p>Vous avez demandé la réinitialisation de votre mot de passe.</p>
    <div style="text-align:center;margin:20px 0">
      <a href="${resetUrl}" style="background:#0d6efd;color:white;padding:12px 30px;text-decoration:none;border-radius:6px;font-weight:bold">
        Réinitialiser mon mot de passe
      </a>
    </div>
    <p>Ce lien expire dans 1 heure.</p>
    <p>Si vous n'avez pas fait cette demande, ignorez cet email.</p>
  `)
  await sendEmail(email, 'Réinitialisation du mot de passe - MarcoStore', html)

  return { message: 'Si cet email existe, un lien de réinitialisation a été envoyé' }
}

async function resetPassword(token, password) {
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex')

  const user = await prisma.user.findFirst({
    where: {
      resetPasswordToken: hashedToken,
      resetPasswordExpiry: { gt: new Date() }
    }
  })
  if (!user) throw new Error('Lien de réinitialisation invalide ou expiré')

  const passwordHash = await bcrypt.hash(password, 12)
  await prisma.user.update({
    where: { id: user.id },
    data: {
      passwordHash,
      resetPasswordToken: null,
      resetPasswordExpiry: null
    }
  })

  await prisma.refreshToken.deleteMany({ where: { userId: user.id } })

  return { message: 'Mot de passe réinitialisé avec succès' }
}

async function verifyEmail(code) {
  const user = await prisma.user.findFirst({
    where: {
      emailVerifyCode: code,
      emailVerifyExpiry: { gt: new Date() }
    }
  })
  if (!user) throw new Error('Code de vérification invalide ou expiré')

  await prisma.user.update({
    where: { id: user.id },
    data: { emailVerified: true, emailVerifyCode: null, emailVerifyExpiry: null }
  })

  return { message: 'Email vérifié avec succès' }
}

async function refreshToken(token) {
  const rt = await prisma.refreshToken.findUnique({ where: { token } })
  if (!rt) throw new Error('Refresh token invalide')
  if (rt.expiresAt < new Date()) {
    await prisma.refreshToken.delete({ where: { id: rt.id } })
    throw new Error('Refresh token expiré')
  }

  const user = await prisma.user.findUnique({ where: { id: rt.userId } })
  if (!user) throw new Error('Utilisateur non trouvé')
  if (user.status === 'banned' || user.status === 'suspended') {
    throw new Error('Compte indisponible')
  }

  await prisma.refreshToken.delete({ where: { id: rt.id } })

  const accessToken = generateToken(user)
  const newRt = generateRefreshToken()
  await prisma.refreshToken.create({ data: { ...newRt, userId: user.id } })

  return { accessToken, refreshToken: newRt.token }
}

async function updateProfile(userId, data) {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error('Utilisateur non trouvé')

  const allowed = {}
  if (data.name !== undefined) allowed.name = data.name
  if (data.phone !== undefined) allowed.phone = data.phone
  if (data.avatar !== undefined) allowed.avatar = data.avatar

  const updated = await prisma.user.update({
    where: { id: userId },
    data: allowed,
    select: {
      id: true, name: true, email: true, phone: true, avatar: true,
      role: true, status: true, emailVerified: true, createdAt: true
    }
  })
  return updated
}

async function changePassword(userId, currentPassword, newPassword) {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) throw new Error('Utilisateur non trouvé')

  const valid = await bcrypt.compare(currentPassword, user.passwordHash)
  if (!valid) throw new Error('Mot de passe actuel incorrect')

  const passwordHash = await bcrypt.hash(newPassword, 12)
  await prisma.user.update({ where: { id: userId }, data: { passwordHash } })

  await prisma.refreshToken.deleteMany({ where: { userId } })

  return { message: 'Mot de passe modifié avec succès. Veuillez vous reconnecter.' }
}

module.exports = {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  verifyEmail,
  refreshToken,
  updateProfile,
  changePassword
}

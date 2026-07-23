const authService = require('../services/auth.service')

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body
    const data = await authService.register(name, email, password)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body
    const data = await authService.login(email, password)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function logout(req, res, next) {
  try {
    const data = await authService.logout(req.user)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function me(req, res, next) {
  try {
    const data = await authService.getMe(req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body
    const data = await authService.forgotPassword(email)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function resetPassword(req, res, next) {
  try {
    const { token, password } = req.body
    const data = await authService.resetPassword(token, password)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function verifyEmail(req, res, next) {
  try {
    const { code } = req.body
    const data = await authService.verifyEmail(code)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function refresh(req, res, next) {
  try {
    const { refreshToken } = req.body
    const data = await authService.refreshToken(refreshToken)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateProfile(req, res, next) {
  try {
    const data = await authService.updateProfile(req.user.id, req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function changePassword(req, res, next) {
  try {
    const { currentPassword, newPassword } = req.body
    const data = await authService.changePassword(req.user.id, currentPassword, newPassword)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  register,
  login,
  logout,
  me,
  forgotPassword,
  resetPassword,
  verifyEmail,
  refresh,
  updateProfile,
  changePassword
}

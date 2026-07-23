function errorHandler(err, req, res, _next) {
  console.error(err)
  if (err.name === 'ZodError') {
    return res.status(400).json({ message: err.issues[0].message })
  }
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Token invalide' })
  }
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expiré' })
  }
  if (err.code === 'P2025') {
    return res.status(404).json({ message: 'Ressource non trouvée' })
  }
  const status = err.status || err.statusCode || 500
  const message = err.message || 'Une erreur est survenue'
  res.status(status).json({ message })
}
module.exports = { errorHandler }

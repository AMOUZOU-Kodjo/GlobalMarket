const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const express = require('express')
const { errorHandler } = require('./middleware/errorHandler')
const { apiLimiter } = require('./middleware/rateLimiter')

const authRoutes = require('./routes/auth.routes')
const productRoutes = require('./routes/product.routes')
const categoryRoutes = require('./routes/category.routes')
const cartRoutes = require('./routes/cart.routes')
const orderRoutes = require('./routes/order.routes')
const paymentRoutes = require('./routes/payment.routes')
const sellerRoutes = require('./routes/seller.routes')
const adminRoutes = require('./routes/admin.routes')
const supportRoutes = require('./routes/support.routes')
const uploadRoutes = require('./routes/upload.routes')
const couponRoutes = require('./routes/coupon.routes')
const addressRoutes = require('./routes/address.routes')
const messageRoutes = require('./routes/message.routes')

const app = express()

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }))
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(morgan('combined'))

const uploadsDir = path.join(__dirname, '../uploads')
app.use('/uploads', express.static(uploadsDir))

app.use('/api/webhooks/stripe', express.raw({ type: 'application/json' }))
app.use('/api/webhooks/paypal', express.raw({ type: 'application/json' }))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(apiLimiter)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), version: '1.0.0', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/seller', sellerRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/support', supportRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/coupons', couponRoutes)
app.use('/api/addresses', addressRoutes)
app.use('/api/messages', messageRoutes)

app.use(errorHandler)

module.exports = app

const prisma = require('../config/database')
const crypto = require('crypto')
const { paginate, paginatedResponse } = require('../utils/pagination')

async function createIntent(data) {
  const { orderId, amount, currency = 'EUR', method, metadata } = data

  const order = await prisma.order.findUnique({ where: { id: orderId } })
  if (!order) throw new Error('Commande non trouvée')

  const payment = await prisma.payment.create({
    data: {
      orderId,
      amount: Number(amount),
      currency,
      method,
      status: 'pending',
      metadata: metadata || {}
    }
  })

  const providerData = {
    paymentId: payment.id,
    clientSecret: `pi_${crypto.randomUUID().replace(/-/g, '').slice(0, 24)}`,
    amount: Number(amount),
    currency
  }

  if (method === 'paypal') {
    providerData.approvalUrl = `https://www.paypal.com/checkoutnow?token=EC-${crypto.randomUUID().slice(0, 20)}`
  } else if (method === 'mobile_money') {
    providerData.ussdCode = `*150*1*${crypto.randomUUID().slice(0, 8)}#`
  }

  return { payment, providerData }
}

async function confirmPayment(intentId, data) {
  const { status, providerTransactionId, failureReason } = data

  const payment = await prisma.payment.findUnique({ where: { id: intentId } })
  if (!payment) throw new Error('Paiement non trouvé')

  const updateData = {}
  if (status === 'completed') {
    updateData.status = 'completed'
    updateData.paidAt = new Date()
    if (providerTransactionId) {
      if (payment.method === 'credit_card' || payment.method === 'debit_card' || payment.method === 'stripe') {
        updateData.stripePaymentId = providerTransactionId
      } else if (payment.method === 'paypal') {
        updateData.paypalOrderId = providerTransactionId
      } else if (payment.method === 'mobile_money') {
        updateData.mobileMoneyRef = providerTransactionId
      }
    }
  } else if (status === 'failed') {
    updateData.status = 'failed'
    updateData.metadata = { ...payment.metadata, failureReason }
  }

  const updated = await prisma.payment.update({ where: { id: intentId }, data: updateData })

  if (status === 'completed') {
    await prisma.order.update({
      where: { id: payment.orderId },
      data: { status: 'confirmed' }
    })

    const items = await prisma.orderItem.findMany({ where: { orderId: payment.orderId } })
    for (const item of items) {
      await prisma.orderItem.update({ where: { id: item.id }, data: { status: 'confirmed' } })
    }
  }

  return updated
}

function getMethods() {
  return [
    { id: 'credit_card', name: 'Carte de crédit', icon: 'credit-card', enabled: true, providers: ['Stripe'] },
    { id: 'debit_card', name: 'Carte de débit', icon: 'credit-card', enabled: true, providers: ['Stripe'] },
    { id: 'paypal', name: 'PayPal', icon: 'paypal', enabled: true, providers: ['PayPal'] },
    { id: 'apple_pay', name: 'Apple Pay', icon: 'apple', enabled: true, providers: ['Stripe'] },
    { id: 'google_pay', name: 'Google Pay', icon: 'google', enabled: true, providers: ['Stripe'] },
    { id: 'mobile_money', name: 'Mobile Money', icon: 'smartphone', enabled: true, providers: ['Orange Money', 'MTN MoMo'] },
    { id: 'bank_transfer', name: 'Virement bancaire', icon: 'bank', enabled: true, providers: ['Interne'] },
    { id: 'cash_on_delivery', name: 'Paiement à la livraison', icon: 'cash', enabled: true, providers: ['Interne'] }
  ]
}

async function refund(paymentId, data, adminId) {
  const { amount, reason } = data

  const payment = await prisma.payment.findUnique({ where: { id: paymentId } })
  if (!payment) throw new Error('Paiement non trouvé')
  if (payment.status !== 'completed') throw new Error('Seuls les paiements complétés peuvent être remboursés')

  const refundAmount = amount ? Math.min(Number(amount), Number(payment.amount) - Number(payment.refundAmount)) : Number(payment.amount) - Number(payment.refundAmount)

  const newRefundTotal = Number(payment.refundAmount) + refundAmount
  const newStatus = newRefundTotal >= Number(payment.amount) ? 'refunded' : 'partially_refunded'

  const updated = await prisma.payment.update({
    where: { id: paymentId },
    data: {
      refundAmount: newRefundTotal,
      refundReason: reason || null,
      status: newStatus,
      metadata: { ...payment.metadata, refundAdminId: adminId, lastRefundAt: new Date().toISOString() }
    }
  })

  if (newStatus === 'refunded') {
    await prisma.order.update({
      where: { id: payment.orderId },
      data: { status: 'refunded' }
    })
  }

  return updated
}

async function getHistory(filters = {}) {
  const { page = 1, limit = 20, status, method, orderId } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = {}
  if (status) where.status = status
  if (method) where.method = method
  if (orderId) where.orderId = orderId

  const [data, total] = await Promise.all([
    prisma.payment.findMany({
      where,
      include: {
        order: { select: { id: true, orderNumber: true, totalAmount: true, createdAt: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip, take
    }),
    prisma.payment.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

module.exports = {
  createIntent,
  confirmPayment,
  getMethods,
  refund,
  getHistory
}

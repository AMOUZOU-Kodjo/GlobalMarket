const prisma = require('../config/database')
const { paginate, paginatedResponse } = require('../utils/pagination')
const PDFDocument = require('pdfkit')

async function getAll(userId, filters = {}) {
  const { page = 1, limit = 20, status } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = { buyerId: userId }
  if (status) where.status = status

  const [data, total] = await Promise.all([
    prisma.order.findMany({
      where,
      include: {
        items: {
          select: {
            id: true, productName: true, productImage: true,
            quantity: true, unitPrice: true, totalPrice: true, status: true
          }
        },
        payments: { select: { status: true, method: true, amount: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip, take
    }),
    prisma.order.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function getById(id, userId) {
  const order = await prisma.order.findFirst({ where: { id, buyerId: userId } })
  if (!order) throw new Error('Commande non trouvée')

  const fullOrder = await prisma.order.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          product: { select: { id: true, slug: true } },
          variant: { select: { id: true, name: true } },
          seller: { select: { userId: true, shopName: true } }
        }
      },
      payments: true,
      shipments: true,
      address: true,
      coupon: { select: { code: true, discountType: true, discountValue: true } },
      buyer: { select: { id: true, name: true, email: true } }
    }
  })

  return fullOrder
}

async function create(userId, data) {
  const { addressId, shippingMethod, notes, paymentMethod } = data

  const cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: true,
          variant: true
        }
      },
      coupon: true
    }
  })

  if (!cart || cart.items.length === 0) throw new Error('Votre panier est vide')

  const address = await prisma.address.findFirst({ where: { id: addressId, userId } })
  if (!address) throw new Error('Adresse de livraison non trouvée')

  let subtotal = 0
  const orderItems = []

  for (const item of cart.items) {
    const product = await prisma.product.findUnique({
      where: { id: item.productId },
      include: { seller: true }
    })

    if (!product || product.status !== 'active') {
      throw new Error(`Le produit "${item.product.name}" n'est plus disponible`)
    }

    let unitPrice, stock, productName, productImage
    if (item.variantId) {
      const variant = await prisma.productVariant.findUnique({ where: { id: item.variantId } })
      if (!variant || variant.stock < item.quantity) {
        throw new Error(`Stock insuffisant pour "${item.product.name}" - ${variant.name}`)
      }
      unitPrice = Number(variant.price)
      stock = variant.stock
      productName = `${item.product.name} - ${variant.name}`
      productImage = null
    } else {
      if (product.stock < item.quantity) {
        throw new Error(`Stock insuffisant pour "${item.product.name}"`)
      }
      unitPrice = Number(product.price)
      stock = product.stock
      productName = item.product.name
      productImage = (await prisma.productImage.findFirst({
        where: { productId: product.id, isPrimary: true }
      }))?.url || null
    }

    const totalPrice = unitPrice * item.quantity
    subtotal += totalPrice
    const commission = totalPrice * Number(product.seller.commissionRate)

    orderItems.push({
      productId: item.productId,
      variantId: item.variantId || null,
      sellerId: product.sellerId,
      productName,
      productImage,
      quantity: item.quantity,
      unitPrice,
      totalPrice,
      commission
    })
  }

  let discountAmount = 0
  if (cart.coupon) {
    if (cart.coupon.discountType === 'percentage') {
      discountAmount = subtotal * (Number(cart.coupon.discountValue) / 100)
      if (cart.coupon.maxDiscount && discountAmount > Number(cart.coupon.maxDiscount)) {
        discountAmount = Number(cart.coupon.maxDiscount)
      }
    } else {
      discountAmount = Number(cart.coupon.discountValue)
      if (discountAmount > subtotal) discountAmount = subtotal
    }
  }

  const shippingCost = shippingMethod === 'express' ? 9.99 : shippingMethod === 'standard' ? 4.99 : 0
  const taxAmount = (subtotal - discountAmount) * 0.20
  const totalAmount = subtotal - discountAmount + shippingCost + taxAmount

  const year = new Date().getFullYear()
  const count = await prisma.order.count()
  const orderNumber = `GM-${year}-${String(count + 1).padStart(6, '0')}`

  const order = await prisma.$transaction(async (tx) => {
    const newOrder = await tx.order.create({
      data: {
        orderNumber,
        buyerId: userId,
        addressId,
        couponId: cart.coupon ? cart.coupon.id : null,
        status: 'pending',
        subtotal,
        shippingCost,
        taxAmount,
        discountAmount,
        totalAmount,
        currency: 'EUR',
        notes: notes || null,
        shippingMethod: shippingMethod || 'standard'
      }
    })

    await tx.orderItem.createMany({
      data: orderItems.map(item => ({ ...item, orderId: newOrder.id, status: 'pending' }))
    })

    for (const item of cart.items) {
      if (item.variantId) {
        await tx.productVariant.update({
          where: { id: item.variantId },
          data: { stock: { decrement: item.quantity } }
        })
      } else {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity }, salesCount: { increment: item.quantity } }
        })
      }
    }

    if (cart.coupon) {
      await tx.coupon.update({
        where: { id: cart.coupon.id },
        data: { usedCount: { increment: 1 } }
      })
    }

    await tx.cartItem.deleteMany({ where: { cartId: cart.id } })
    await tx.cart.update({ where: { id: cart.id }, data: { couponId: null } })

    await tx.payment.create({
      data: {
        orderId: newOrder.id,
        amount: totalAmount,
        currency: 'EUR',
        method: paymentMethod || 'credit_card',
        status: 'pending'
      }
    })

    return newOrder
  })

  return prisma.order.findUnique({
    where: { id: order.id },
    include: {
      items: true,
      payments: true,
      address: true
    }
  })
}

async function cancel(id, userId) {
  const order = await prisma.order.findFirst({ where: { id, buyerId: userId } })
  if (!order) throw new Error('Commande non trouvée')
  if (!['pending', 'confirmed'].includes(order.status)) {
    throw new Error('Cette commande ne peut plus être annulée')
  }

  await prisma.$transaction(async (tx) => {
    await tx.order.update({
      where: { id },
      data: { status: 'cancelled', cancelledAt: new Date() }
    })

    const items = await tx.orderItem.findMany({ where: { orderId: id } })
    for (const item of items) {
      await tx.orderItem.update({ where: { id: item.id }, data: { status: 'cancelled' } })

      if (item.variantId) {
        await tx.productVariant.update({
          where: { id: item.variantId },
          data: { stock: { increment: item.quantity } }
        })
      } else {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { increment: item.quantity }, salesCount: { decrement: item.quantity } }
        })
      }
    }
  })

  return prisma.order.findUnique({ where: { id }, include: { items: true } })
}

async function getTracking(id, userId) {
  const order = await prisma.order.findFirst({ where: { id, buyerId: userId } })
  if (!order) throw new Error('Commande non trouvée')

  const shipments = await prisma.shipment.findMany({
    where: { orderId: id },
    orderBy: { createdAt: 'desc' }
  })

  return {
    orderNumber: order.orderNumber,
    status: order.status,
    trackingNumber: order.trackingNumber,
    shippedAt: order.shippedAt,
    deliveredAt: order.deliveredAt,
    shipments
  }
}

async function generateInvoice(id, userId) {
  const order = await prisma.order.findFirst({ where: { id, buyerId: userId } })
  if (!order) throw new Error('Commande non trouvée')

  const fullOrder = await prisma.order.findUnique({
    where: { id },
    include: {
      items: { include: { product: { select: { id: true } } } },
      address: true,
      payments: { where: { status: 'completed' } },
      buyer: { select: { name: true, email: true } }
    }
  })

  const buffer = await new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 })
    const chunks = []
    doc.on('data', chunk => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    doc.fontSize(20).font('Helvetica-Bold').text('MarcoStore', { align: 'center' })
    doc.fontSize(10).font('Helvetica').text('Facture / Invoice', { align: 'center' })
    doc.moveDown()

    doc.fontSize(12).font('Helvetica-Bold').text('Informations de commande')
    doc.fontSize(10).font('Helvetica')
    doc.text(`Numéro: ${order.orderNumber}`)
    doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString('fr-FR')}`)
    doc.text(`Statut: ${order.status}`)
    doc.moveDown()

    doc.fontSize(12).font('Helvetica-Bold').text('Client')
    doc.fontSize(10).font('Helvetica')
    doc.text(fullOrder.buyer.name)
    doc.text(fullOrder.buyer.email)
    if (fullOrder.address) {
      doc.text(fullOrder.address.firstName + ' ' + fullOrder.address.lastName)
      doc.text(fullOrder.address.address1)
      if (fullOrder.address.address2) doc.text(fullOrder.address.address2)
      doc.text(`${fullOrder.address.postalCode} ${fullOrder.address.city}`)
      doc.text(fullOrder.address.country)
    }
    doc.moveDown()

    doc.fontSize(12).font('Helvetica-Bold').text('Articles')
    doc.moveDown(0.5)

    const tableTop = doc.y
    doc.fontSize(9).font('Helvetica-Bold')
    doc.text('Produit', 50, tableTop, { width: 200 })
    doc.text('Qté', 260, tableTop, { width: 50, align: 'right' })
    doc.text('Prix unit.', 320, tableTop, { width: 80, align: 'right' })
    doc.text('Total', 420, tableTop, { width: 80, align: 'right' })

    doc.moveTo(50, tableTop + 15).lineTo(540, tableTop + 15).stroke()

    let y = tableTop + 25
    doc.font('Helvetica').fontSize(9)
    for (const item of fullOrder.items) {
      doc.text(item.productName, 50, y, { width: 200 })
      doc.text(String(item.quantity), 260, y, { width: 50, align: 'right' })
      doc.text(`${Number(item.unitPrice).toFixed(2)} €`, 320, y, { width: 80, align: 'right' })
      doc.text(`${Number(item.totalPrice).toFixed(2)} €`, 420, y, { width: 80, align: 'right' })
      y += 20
    }

    doc.moveTo(50, y).lineTo(540, y).stroke()
    y += 15

    doc.font('Helvetica-Bold').fontSize(10)
    doc.text('Sous-total:', 320, y, { width: 80, align: 'right' })
    doc.text(`${Number(order.subtotal).toFixed(2)} €`, 420, y, { width: 80, align: 'right' })
    y += 18

    doc.font('Helvetica').fontSize(10)
    if (Number(order.discountAmount) > 0) {
      doc.text('Réduction:', 320, y, { width: 80, align: 'right' })
      doc.text(`-${Number(order.discountAmount).toFixed(2)} €`, 420, y, { width: 80, align: 'right' })
      y += 18
    }
    doc.text('Livraison:', 320, y, { width: 80, align: 'right' })
    doc.text(`${Number(order.shippingCost).toFixed(2)} €`, 420, y, { width: 80, align: 'right' })
    y += 18
    doc.text('TVA (20%):', 320, y, { width: 80, align: 'right' })
    doc.text(`${Number(order.taxAmount).toFixed(2)} €`, 420, y, { width: 80, align: 'right' })
    y += 18

    doc.moveTo(320, y).lineTo(540, y).stroke()
    y += 10
    doc.font('Helvetica-Bold').fontSize(12)
    doc.text('Total:', 320, y, { width: 80, align: 'right' })
    doc.text(`${Number(order.totalAmount).toFixed(2)} €`, 420, y, { width: 80, align: 'right' })

    y += 40
    doc.fontSize(8).font('Helvetica').fillColor('#888888')
    doc.text('Merci pour votre achat! - MarcoStore', 50, y, { align: 'center', width: 490 })

    doc.end()
  })

  return buffer
}

module.exports = {
  getAll,
  getById,
  create,
  cancel,
  getTracking,
  generateInvoice
}

const prisma = require('../config/database')

async function getOrCreateCart(userId) {
  let cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      coupon: { select: { id: true, code: true, discountType: true, discountValue: true, maxDiscount: true } },
      items: {
        include: {
          product: {
            select: {
              id: true, name: true, slug: true, price: true, stock: true, status: true,
              images: { where: { isPrimary: true }, take: 1, select: { url: true } },
              seller: { select: { id: true, shopName: true } }
            }
          },
          variant: {
            select: { id: true, name: true, price: true, stock: true, attributes: true }
          }
        },
        orderBy: { createdAt: 'asc' }
      }
    }
  })

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
      include: {
        coupon: { select: { id: true, code: true, discountType: true, discountValue: true, maxDiscount: true } },
        items: { include: { product: true, variant: true } }
      }
    })
  }

  return cart
}

async function get(userId) {
  const cart = await getOrCreateCart(userId)

  let subtotal = 0
  cart.items = cart.items.map(item => {
    const unitPrice = item.variant ? Number(item.variant.price) : Number(item.product.price)
    const itemTotal = unitPrice * item.quantity
    subtotal += itemTotal
    return {
      ...item,
      unitPrice,
      itemTotal,
      productImage: item.product.images?.[0]?.url || null
    }
  })

  let discount = 0
  if (cart.coupon) {
    if (cart.coupon.discountType === 'percentage') {
      discount = subtotal * (Number(cart.coupon.discountValue) / 100)
      if (cart.coupon.maxDiscount && discount > Number(cart.coupon.maxDiscount)) {
        discount = Number(cart.coupon.maxDiscount)
      }
    } else {
      discount = Number(cart.coupon.discountValue)
      if (discount > subtotal) discount = subtotal
    }
  }

  const total = Math.max(0, subtotal - discount)

  return {
    id: cart.id,
    items: cart.items,
    coupon: cart.coupon,
    itemCount: cart.items.reduce((sum, i) => sum + i.quantity, 0),
    subtotal,
    discount,
    total
  }
}

async function addItem(userId, productId, variantId, quantity = 1) {
  const product = await prisma.product.findUnique({ where: { id: productId } })
  if (!product) throw new Error('Produit non trouvé')
  if (product.status !== 'active') throw new Error('Ce produit n\'est pas disponible')

  if (variantId) {
    const variant = await prisma.productVariant.findFirst({ where: { id: variantId, productId } })
    if (!variant) throw new Error('Variante non trouvée')
    if (variant.stock < quantity) throw new Error('Stock insuffisant pour cette variante')
  } else {
    if (product.stock < quantity) throw new Error('Stock insuffisant')
  }

  const cart = await getOrCreateCart(userId)

  const existingItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId, variantId: variantId || null }
  })

  let item
  if (existingItem) {
    const newQty = existingItem.quantity + quantity
    const maxStock = variantId
      ? (await prisma.productVariant.findUnique({ where: { id: variantId } })).stock
      : product.stock
    const clampedQty = Math.min(newQty, maxStock)

    item = await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: clampedQty }
    })
  } else {
    item = await prisma.cartItem.create({
      data: { cartId: cart.id, productId, variantId: variantId || null, quantity }
    })
  }

  return get(userId)
}

async function updateItem(userId, itemId, quantity) {
  const cart = await prisma.cart.findUnique({ where: { userId } })
  if (!cart) throw new Error('Panier non trouvé')

  const item = await prisma.cartItem.findFirst({ where: { id: itemId, cartId: cart.id } })
  if (!item) throw new Error('Élément non trouvé dans le panier')

  if (quantity <= 0) {
    await prisma.cartItem.delete({ where: { id: itemId } })
    return get(userId)
  }

  let maxStock
  if (item.variantId) {
    const variant = await prisma.productVariant.findUnique({ where: { id: item.variantId } })
    maxStock = variant ? variant.stock : 0
  } else {
    const product = await prisma.product.findUnique({ where: { id: item.productId } })
    maxStock = product ? product.stock : 0
  }

  const clampedQty = Math.min(quantity, maxStock)
  await prisma.cartItem.update({ where: { id: itemId }, data: { quantity: clampedQty } })

  return get(userId)
}

async function removeItem(userId, itemId) {
  const cart = await prisma.cart.findUnique({ where: { userId } })
  if (!cart) throw new Error('Panier non trouvé')

  const item = await prisma.cartItem.findFirst({ where: { id: itemId, cartId: cart.id } })
  if (!item) throw new Error('Élément non trouvé dans le panier')

  await prisma.cartItem.delete({ where: { id: itemId } })
  return get(userId)
}

async function clear(userId) {
  const cart = await prisma.cart.findUnique({ where: { userId } })
  if (!cart) throw new Error('Panier non trouvé')

  await prisma.cartItem.deleteMany({ where: { cartId: cart.id } })
  await prisma.cart.update({ where: { id: cart.id }, data: { couponId: null } })

  return get(userId)
}

async function applyCoupon(userId, code) {
  const cart = await getOrCreateCart(userId)

  const coupon = await prisma.coupon.findFirst({ where: { code: code.toUpperCase(), active: true } })
  if (!coupon) throw new Error('Code promo invalide')
  if (coupon.startDate > new Date()) throw new Error('Ce code promo n\'est pas encore actif')
  if (coupon.endDate < new Date()) throw new Error('Ce code promo a expiré')
  if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) throw new Error('Ce code promo a atteint sa limite d\'utilisation')

  let subtotal = 0
  cart.items.forEach(item => {
    const price = item.variant ? Number(item.variant.price) : Number(item.product.price)
    subtotal += price * item.quantity
  })

  if (coupon.minAmount && subtotal < Number(coupon.minAmount)) {
    throw new Error(`Le montant minimum de ${coupon.minAmount} € n'est pas atteint`)
  }

  await prisma.cart.update({ where: { id: cart.id }, data: { couponId: coupon.id } })
  return get(userId)
}

async function removeCoupon(userId) {
  const cart = await prisma.cart.findUnique({ where: { userId } })
  if (!cart) throw new Error('Panier non trouvé')

  await prisma.cart.update({ where: { id: cart.id }, data: { couponId: null } })
  return get(userId)
}

module.exports = {
  get,
  addItem,
  updateItem,
  removeItem,
  clear,
  applyCoupon,
  removeCoupon
}

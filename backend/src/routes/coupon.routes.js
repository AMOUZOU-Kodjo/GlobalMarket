const express = require('express')
const router = express.Router()
const prisma = require('../config/database')

router.post('/validate', async (req, res, next) => {
  try {
    const { code } = req.body
    if (!code) throw new Error('Code promo requis')

    const coupon = await prisma.coupon.findFirst({
      where: { code: code.toUpperCase().trim(), active: true }
    })
    if (!coupon) throw new Error('Code promo invalide')
    if (coupon.startDate > new Date()) throw new Error('Ce code promo n\'est pas encore actif')
    if (coupon.endDate < new Date()) throw new Error('Ce code promo a expiré')
    if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
      throw new Error('Ce code promo a atteint sa limite d\'utilisation')
    }

    res.json({
      data: {
        id: coupon.id,
        code: coupon.code,
        type: coupon.discountType,
        value: Number(coupon.discountValue),
        minAmount: coupon.minAmount ? Number(coupon.minAmount) : null,
        maxDiscount: coupon.maxDiscount ? Number(coupon.maxDiscount) : null,
        description: coupon.description,
      }
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router

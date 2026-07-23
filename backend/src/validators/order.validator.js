const { z } = require('zod')

const createOrderSchema = z.object({
  addressId: z.string().uuid(),
  shippingMethod: z.enum(['standard', 'express']).default('standard'),
  paymentMethod: z.enum(['credit_card', 'paypal', 'mobile_money', 'bank_transfer']),
  notes: z.string().max(500).optional(),
  couponCode: z.string().optional()
})

const createCouponSchema = z.object({
  code: z.string().min(3).max(50),
  description: z.string().max(255).optional(),
  discountType: z.enum(['percentage', 'fixed']),
  discountValue: z.number().positive(),
  minAmount: z.number().positive().optional(),
  maxDiscount: z.number().positive().optional(),
  usageLimit: z.number().int().positive().optional(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime()
})

module.exports = { createOrderSchema, createCouponSchema }

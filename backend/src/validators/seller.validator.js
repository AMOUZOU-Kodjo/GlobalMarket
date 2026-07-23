const { z } = require('zod')

const sellerRegisterSchema = z.object({
  shopName: z.string().min(2).max(255),
  description: z.string().max(1000).optional(),
  category: z.string().min(1),
  country: z.string().min(1),
  businessType: z.enum(['individual', 'company']).default('individual')
})

const updateShopSchema = z.object({
  shopName: z.string().min(2).max(255).optional(),
  description: z.string().max(1000).optional(),
  logo: z.string().url().optional(),
  banner: z.string().url().optional()
})

const updateOrderStatusSchema = z.object({ status: z.enum(['processing', 'shipped', 'delivered']) })

const bankAccountSchema = z.object({
  iban: z.string().min(15).max(34),
  bic: z.string().min(8).max(11),
  holderName: z.string().min(2).max(255)
})

module.exports = { sellerRegisterSchema, updateShopSchema, updateOrderStatusSchema, bankAccountSchema }

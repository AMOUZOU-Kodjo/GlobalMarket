const { z } = require('zod')

const createProductSchema = z.object({
  name: z.string().min(2).max(255),
  categoryId: z.string().uuid(),
  description: z.string().min(10),
  shortDescription: z.string().max(500).optional(),
  price: z.number().positive(),
  compareAtPrice: z.number().positive().optional(),
  costPrice: z.number().positive().optional(),
  sku: z.string().max(100).optional(),
  stock: z.number().int().min(0).default(0),
  lowStockThreshold: z.number().int().min(0).default(5),
  weight: z.number().positive().optional(),
  dimensions: z.object({ length: z.number(), width: z.number(), height: z.number() }).optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(z.object({ name: z.string(), price: z.number().positive(), stock: z.number().int().min(0).default(0), attributes: z.record(z.any()).optional() })).optional()
})

const updateProductSchema = createProductSchema.partial()

const productQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  sort: z.string().default('created_at'),
  order: z.enum(['asc', 'desc']).default('desc'),
  category: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  search: z.string().optional(),
  status: z.string().optional(),
  seller: z.string().uuid().optional()
})

module.exports = { createProductSchema, updateProductSchema, productQuerySchema }

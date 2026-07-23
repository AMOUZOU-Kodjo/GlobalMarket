const { Router } = require('express')
const { auth } = require('../middleware/auth')
const prisma = require('../config/database')

const router = Router()
router.use(auth)

router.get('/', async (req, res, next) => {
  try {
    const addresses = await prisma.address.findMany({
      where: { userId: req.user.id },
      orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
    })
    res.json({ data: addresses })
  } catch (err) { next(err) }
})

router.post('/', async (req, res, next) => {
  try {
    const { label, firstName, lastName, address1, address2, city, state, postalCode, country, phone, isDefault } = req.body
    if (isDefault) {
      await prisma.address.updateMany({ where: { userId: req.user.id, isDefault: true }, data: { isDefault: false } })
    }
    const address = await prisma.address.create({
      data: { userId: req.user.id, label, firstName, lastName, address1, address2, city, state, postalCode, country, phone, isDefault: !!isDefault },
    })
    res.status(201).json({ data: address })
  } catch (err) { next(err) }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const existing = await prisma.address.findFirst({ where: { id, userId: req.user.id } })
    if (!existing) return res.status(404).json({ message: 'Adresse non trouvée' })
    const { label, firstName, lastName, address1, address2, city, state, postalCode, country, phone, isDefault } = req.body
    if (isDefault) {
      await prisma.address.updateMany({ where: { userId: req.user.id, isDefault: true }, data: { isDefault: false } })
    }
    const address = await prisma.address.update({
      where: { id },
      data: { label, firstName, lastName, address1, address2, city, state, postalCode, country, phone, isDefault: !!isDefault },
    })
    res.json({ data: address })
  } catch (err) { next(err) }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const existing = await prisma.address.findFirst({ where: { id: req.params.id, userId: req.user.id } })
    if (!existing) return res.status(404).json({ message: 'Adresse non trouvée' })
    await prisma.address.delete({ where: { id: req.params.id } })
    res.json({ data: { success: true } })
  } catch (err) { next(err) }
})

module.exports = router

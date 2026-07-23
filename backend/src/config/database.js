const { PrismaClient } = require('@prisma/client')
const p = new PrismaClient({ log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'] })
module.exports = p

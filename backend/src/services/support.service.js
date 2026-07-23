const prisma = require('../config/database')
const { paginate, paginatedResponse } = require('../utils/pagination')

async function getTickets(userId, role, filters = {}) {
  const { page = 1, limit = 20, status, priority, search } = filters
  const { skip, take, page: p, limit: l } = paginate({}, { page, limit })

  const where = {}
  if (role !== 'admin') {
    where.userId = userId
  }
  if (status) where.status = status
  if (priority) where.priority = priority
  if (search) {
    where.OR = [
      { subject: { contains: search, mode: 'insensitive' } },
      { user: { name: { contains: search, mode: 'insensitive' } } }
    ]
  }

  const [data, total] = await Promise.all([
    prisma.supportTicket.findMany({
      where,
      include: {
        user: { select: { id: true, name: true, email: true, avatar: true } },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          select: { id: true, message: true, createdAt: true, senderId: true }
        },
        _count: { select: { messages: true } }
      },
      orderBy: { updatedAt: 'desc' },
      skip, take
    }),
    prisma.supportTicket.count({ where })
  ])

  return paginatedResponse(data, total, p, l)
}

async function createTicket(userId, data) {
  const ticket = await prisma.supportTicket.create({
    data: {
      userId,
      subject: data.subject,
      category: data.category,
      priority: data.priority || 'medium',
      orderId: data.orderId || null
    },
    include: {
      user: { select: { id: true, name: true, email: true } }
    }
  })

  if (data.message) {
    await prisma.ticketMessage.create({
      data: {
        ticketId: ticket.id,
        senderId: userId,
        message: data.message,
        attachments: data.attachments || []
      }
    })
  }

  return prisma.supportTicket.findUnique({
    where: { id: ticket.id },
    include: {
      user: { select: { id: true, name: true, email: true } },
      messages: { include: { sender: { select: { id: true, name: true, avatar: true } } } }
    }
  })
}

async function getTicketDetail(id, userId, role) {
  const ticket = await prisma.supportTicket.findUnique({ where: { id } })
  if (!ticket) throw new Error('Ticket non trouvé')
  if (role !== 'admin' && ticket.userId !== userId) throw new Error('Non autorisé')

  return prisma.supportTicket.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, name: true, email: true, avatar: true } },
      messages: {
        include: {
          sender: { select: { id: true, name: true, avatar: true, role: true } }
        },
        orderBy: { createdAt: 'asc' }
      }
    }
  })
}

async function addMessage(ticketId, userId, data) {
  const ticket = await prisma.supportTicket.findUnique({ where: { id: ticketId } })
  if (!ticket) throw new Error('Ticket non trouvé')

  const message = await prisma.ticketMessage.create({
    data: {
      ticketId,
      senderId: userId,
      message: data.message,
      attachments: data.attachments || [],
      isInternal: data.isInternal || false
    },
    include: {
      sender: { select: { id: true, name: true, avatar: true, role: true } }
    }
  })

  await prisma.supportTicket.update({
    where: { id: ticketId },
    data: {
      status: ticket.status === 'open' ? 'in_progress' : ticket.status,
      updatedAt: new Date()
    }
  })

  return message
}

async function closeTicket(id, userId) {
  const ticket = await prisma.supportTicket.findUnique({ where: { id } })
  if (!ticket) throw new Error('Ticket non trouvé')
  if (ticket.userId !== userId) throw new Error('Non autorisé')
  if (ticket.status === 'closed') throw new Error('Ce ticket est déjà fermé')

  return prisma.supportTicket.update({
    where: { id },
    data: { status: 'closed' }
  })
}

function getKnowledgeBase(filters = {}) {
  const articles = [
    {
      id: '1',
      title: 'Comment passer une commande ?',
      category: 'commandes',
      content: 'Pour passer une commande, ajoutez des produits à votre panier, puis procédez au paiement en choisissant votre méthode de paiement préférée et en confirmant votre adresse de livraison.',
      tags: ['commande', 'panier', 'paiement']
    },
    {
      id: '2',
      title: 'Comment retourner un produit ?',
      category: 'retours',
      content: 'Vous pouvez retourner un produit dans les 30 jours suivant la livraison. Allez dans vos commandes, sélectionnez la commande concernée et cliquez sur "Demander un retour".',
      tags: ['retour', 'remboursement', 'produit']
    },
    {
      id: '3',
      title: 'Suivre ma commande',
      category: 'livraison',
      content: 'Connectez-vous à votre compte, allez dans "Mes commandes" et cliquez sur la commande souhaitée. Le numéro de suivi et le lien de suivi seront affichés si la commande a été expédiée.',
      tags: ['suivi', 'livraison', 'tracking']
    },
    {
      id: '4',
      title: 'Comment devenir vendeur ?',
      category: 'vendeurs',
      content: 'Cliquez sur "Devenir vendeur" dans le menu principal. Remplissez le formulaire avec les informations de votre boutique. Après validation, vous pourrez commencer à vendre.',
      tags: ['vendeur', 'inscription', 'boutique']
    },
    {
      id: '5',
      title: 'Méthodes de paiement acceptées',
      category: 'paiement',
      content: 'GlobalMarket accepte les cartes de crédit et débit (Visa, Mastercard), PayPal, Apple Pay, Google Pay, Mobile Money (Orange Money, MTN MoMo) et le paiement à la livraison.',
      tags: ['paiement', 'carte', 'paypal', 'mobile money']
    },
    {
      id: '6',
      title: 'Politique de confidentialité',
      category: 'compte',
      content: 'Vos données personnelles sont protégées conformément au RGPD. Nous ne vendons jamais vos informations à des tiers. Consultez notre politique de confidentialité complète pour plus de détails.',
      tags: ['confidentialité', 'données', 'RGPD']
    }
  ]

  let filtered = articles
  if (filters.category) filtered = filtered.filter(a => a.category === filters.category)
  if (filters.search) {
    const q = filters.search.toLowerCase()
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      a.tags.some(t => t.includes(q))
    )
  }

  return { data: filtered, total: filtered.length }
}

function getArticle(id) {
  const articles = getKnowledgeBase().data
  const article = articles.find(a => a.id === id)
  if (!article) throw new Error('Article non trouvé')
  return article
}

module.exports = {
  getTickets,
  createTicket,
  getTicketDetail,
  addMessage,
  closeTicket,
  getKnowledgeBase,
  getArticle
}

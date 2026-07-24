const prisma = require('../config/database')

async function getConversations(userId) {
  const convos = await prisma.conversation.findMany({
    where: {
      OR: [{ participant1Id: userId }, { participant2Id: userId }]
    },
    include: {
      participant1: { select: { id: true, name: true, avatar: true, role: true } },
      participant2: { select: { id: true, name: true, avatar: true, role: true } },
      messages: { orderBy: { createdAt: 'desc' }, take: 1 }
    },
    orderBy: { lastMessageAt: 'desc' }
  })

  return convos.map(c => {
    const other = c.participant1Id === userId ? c.participant2 : c.participant1
    const unread = c.participant1Id === userId ? c.unread1 : c.unread2
    return {
      id: c.id,
      other,
      lastMessage: c.lastMessage,
      lastMessageAt: c.lastMessageAt,
      unread,
      createdAt: c.createdAt
    }
  })
}

async function getMessages(conversationId, userId, page = 1, limit = 50) {
  const convo = await prisma.conversation.findUnique({ where: { id: conversationId } })
  if (!convo) throw new Error('Conversation introuvable')
  if (convo.participant1Id !== userId && convo.participant2Id !== userId) {
    throw new Error('Accès refusé')
  }

  const skip = (page - 1) * limit
  const [messages, total] = await Promise.all([
    prisma.message.findMany({
      where: { conversationId },
      include: { sender: { select: { id: true, name: true, avatar: true } } },
      orderBy: { createdAt: 'asc' },
      skip,
      take: limit
    }),
    prisma.message.count({ where: { conversationId } })
  ])

  return {
    data: messages,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) }
  }
}

async function sendMessage(userId, { recipientId, content, conversationId }) {
  if (!content || !content.trim()) throw new Error('Le message ne peut pas être vide')
  if (!recipientId && !conversationId) throw new Error('Destinataire requis')

  let convo
  if (conversationId) {
    convo = await prisma.conversation.findUnique({ where: { id: conversationId } })
    if (!convo) throw new Error('Conversation introuvable')
    if (convo.participant1Id !== userId && convo.participant2Id !== userId) {
      throw new Error('Accès refusé')
    }
  } else {
    const p1 = userId < recipientId ? userId : recipientId
    const p2 = userId < recipientId ? recipientId : userId

    convo = await prisma.conversation.upsert({
      where: { participant1Id_participant2Id: { participant1Id: p1, participant2Id: p2 } },
      update: {},
      create: { participant1Id: p1, participant2Id: p2 }
    })
  }

  const message = await prisma.message.create({
    data: {
      conversationId: convo.id,
      senderId: userId,
      content: content.trim()
    },
    include: { sender: { select: { id: true, name: true, avatar: true } } }
  })

  const preview = content.trim().length > 100 ? content.trim().slice(0, 100) + '...' : content.trim()
  const isP1 = convo.participant1Id === userId

  await prisma.conversation.update({
    where: { id: convo.id },
    data: {
      lastMessage: preview,
      lastMessageAt: new Date(),
      ...(isP1 ? { unread2: { increment: 1 } } : { unread1: { increment: 1 } })
    }
  })

  return message
}

async function markAsRead(conversationId, userId) {
  const convo = await prisma.conversation.findUnique({ where: { id: conversationId } })
  if (!convo) throw new Error('Conversation introuvable')
  if (convo.participant1Id !== userId && convo.participant2Id !== userId) {
    throw new Error('Accès refusé')
  }

  const isP1 = convo.participant1Id === userId

  await prisma.$transaction([
    prisma.message.updateMany({
      where: { conversationId, senderId: { not: userId }, readAt: null },
      data: { readAt: new Date() }
    }),
    prisma.conversation.update({
      where: { id: conversationId },
      data: isP1 ? { unread1: 0 } : { unread2: 0 }
    })
  ])

  return { success: true }
}

async function getUnreadCount(userId) {
  const convos = await prisma.conversation.findMany({
    where: { OR: [{ participant1Id: userId }, { participant2Id: userId }] },
    select: { participant1Id: true, participant2Id: true, unread1: true, unread2: true }
  })

  let total = 0
  for (const c of convos) {
    total += c.participant1Id === userId ? c.unread1 : c.unread2
  }
  return total
}

async function findOrCreateConversation(userId, recipientId) {
  if (userId === recipientId) throw new Error('Impossible de discuter avec soi-même')

  const recipient = await prisma.user.findUnique({ where: { id: recipientId }, select: { id: true } })
  if (!recipient) throw new Error('Utilisateur introuvable')

  const p1 = userId < recipientId ? userId : recipientId
  const p2 = userId < recipientId ? recipientId : userId

  const convo = await prisma.conversation.upsert({
    where: { participant1Id_participant2Id: { participant1Id: p1, participant2Id: p2 } },
    update: {},
    create: { participant1Id: p1, participant2Id: p2 }
  })

  return convo
}

module.exports = {
  getConversations,
  getMessages,
  sendMessage,
  markAsRead,
  getUnreadCount,
  findOrCreateConversation
}

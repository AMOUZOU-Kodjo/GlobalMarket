const { Router } = require('express')
const { auth } = require('../middleware/auth')
const ctrl = require('../controllers/message.controller')

const router = Router()

router.use(auth)

router.get('/conversations', ctrl.getConversations)
router.post('/conversations', ctrl.findOrCreateConversation)
router.get('/unread', ctrl.getUnreadCount)
router.get('/:conversationId', ctrl.getMessages)
router.post('/', ctrl.sendMessage)
router.post('/:conversationId/read', ctrl.markAsRead)

module.exports = router

const { Router } = require('express')
const { auth } = require('../middleware/auth')
const ctrl = require('../controllers/support.controller')

const router = Router()

router.get('/tickets', auth, ctrl.getTickets)
router.post('/tickets', auth, ctrl.createTicket)
router.get('/tickets/:id', auth, ctrl.getTicketDetail)
router.post('/tickets/:ticketId/messages', auth, ctrl.addMessage)
router.post('/tickets/:id/close', auth, ctrl.closeTicket)
router.get('/kb', ctrl.getKnowledgeBase)
router.get('/kb/:id', ctrl.getArticle)

module.exports = router

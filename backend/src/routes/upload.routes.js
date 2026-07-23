const { Router } = require('express')
const { auth } = require('../middleware/auth')
const { upload } = require('../middleware/upload')
const ctrl = require('../controllers/upload.controller')

const router = Router()

router.use(auth)

router.post('/image', upload.single('file'), ctrl.uploadImage)
router.post('/images', upload.array('files', 10), ctrl.uploadImages)
router.post('/document', upload.single('file'), ctrl.uploadDocument)
router.delete('/:fileId', ctrl.deleteFile)

module.exports = router

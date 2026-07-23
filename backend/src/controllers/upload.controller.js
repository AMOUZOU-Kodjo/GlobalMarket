const uploadService = require('../services/upload.service')

async function uploadImage(req, res, next) {
  try {
    const data = await uploadService.uploadImage(req.file, req.user.id)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function uploadImages(req, res, next) {
  try {
    const data = await uploadService.uploadImages(req.files, req.user.id)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function uploadDocument(req, res, next) {
  try {
    const data = await uploadService.uploadDocument(req.file, req.user.id)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function deleteFile(req, res, next) {
  try {
    const data = await uploadService.deleteFile(req.params.fileId, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  uploadImage,
  uploadImages,
  uploadDocument,
  deleteFile
}

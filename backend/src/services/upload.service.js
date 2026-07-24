const prisma = require('../config/database')
const { v4: uuidv4 } = require('uuid')
const path = require('path')
const fs = require('fs')

const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, '../../uploads')
const PORT = process.env.PORT || 5001
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`
const MAX_IMAGE_SIZE = 5 * 1024 * 1024
const MAX_DOC_SIZE = 10 * 1024 * 1024
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const ALLOWED_DOC_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function getUploadDir(subDir) {
  const dir = path.join(UPLOAD_DIR, subDir)
  ensureDir(dir)
  return dir
}

function buildUrl(subDir, filename) {
  return `${BASE_URL}/uploads/${subDir}/${filename}`
}

async function uploadImage(file, userId) {
  if (!file) throw new Error('Aucun fichier fourni')
  if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
    throw new Error('Type de fichier non autorisé. Formats acceptés : JPEG, PNG, WebP, GIF')
  }
  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error('Le fichier dépasse la taille maximale de 5 Mo')
  }

  const ext = path.extname(file.originalname)
  const filename = `${uuidv4()}${ext}`
  const subDir = 'images'
  const uploadPath = getUploadDir(subDir)

  if (file.buffer) {
    fs.writeFileSync(path.join(uploadPath, filename), file.buffer)
  } else if (file.path) {
    const dest = path.join(uploadPath, filename)
    fs.copyFileSync(file.path, dest)
  } else {
    throw new Error('Aucune donnée de fichier disponible')
  }

  const record = await prisma.uploadedFile.create({
    data: {
      filename,
      originalName: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: `${subDir}/${filename}`,
      uploaderId: userId || null
    }
  })

  return {
    id: record.id,
    url: buildUrl(subDir, filename),
    filename: record.filename,
    originalName: record.originalName,
    mimetype: record.mimetype,
    size: record.size
  }
}

async function uploadImages(files, userId) {
  if (!files || files.length === 0) throw new Error('Aucun fichier fourni')

  const results = []
  for (const file of files) {
    const result = await uploadImage(file, userId)
    results.push(result)
  }
  return results
}

async function uploadDocument(file, userId) {
  if (!file) throw new Error('Aucun fichier fourni')
  if (!ALLOWED_DOC_TYPES.includes(file.mimetype)) {
    throw new Error('Type de fichier non autorisé. Formats acceptés : PDF, DOC, DOCX, TXT')
  }
  if (file.size > MAX_DOC_SIZE) {
    throw new Error('Le fichier dépasse la taille maximale de 10 Mo')
  }

  const ext = path.extname(file.originalname)
  const filename = `${uuidv4()}${ext}`
  const subDir = 'documents'
  const uploadPath = getUploadDir(subDir)

  if (file.buffer) {
    fs.writeFileSync(path.join(uploadPath, filename), file.buffer)
  } else if (file.path) {
    const dest = path.join(uploadPath, filename)
    fs.copyFileSync(file.path, dest)
  } else {
    throw new Error('Aucune donnée de fichier disponible')
  }

  const record = await prisma.uploadedFile.create({
    data: {
      filename,
      originalName: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: `${subDir}/${filename}`,
      uploaderId: userId || null
    }
  })

  return {
    id: record.id,
    url: buildUrl(subDir, filename),
    filename: record.filename,
    originalName: record.originalName,
    mimetype: record.mimetype,
    size: record.size
  }
}

async function deleteFile(fileId, userId) {
  const file = await prisma.uploadedFile.findUnique({ where: { id: fileId } })
  if (!file) throw new Error('Fichier non trouvé')
  if (file.uploaderId && file.uploaderId !== userId) throw new Error('Non autorisé à supprimer ce fichier')

  const fullPath = path.join(UPLOAD_DIR, file.path)
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath)
  }

  await prisma.uploadedFile.delete({ where: { id: fileId } })

  return { message: 'Fichier supprimé avec succès' }
}

module.exports = {
  uploadImage,
  uploadImages,
  uploadDocument,
  deleteFile
}

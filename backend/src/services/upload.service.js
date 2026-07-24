const prisma = require('../config/database')
const cloudinary = require('../config/cloudinary')

const MAX_IMAGE_SIZE = 5 * 1024 * 1024
const MAX_DOC_SIZE = 10 * 1024 * 1024
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const ALLOWED_DOC_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']

function uploadToCloudinary(file, folder) {
  return new Promise((resolve, reject) => {
    const isBuffer = Buffer.isBuffer(file.buffer)
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: 'auto', transformation: [{ width: 1200, height: 1200, crop: 'limit', quality: 'auto' }] },
      (error, result) => {
        if (error) return reject(error)
        resolve(result)
      }
    )
    if (isBuffer) {
      uploadStream.end(file.buffer)
    } else if (file.path) {
      const fs = require('fs')
      fs.createReadStream(file.path).pipe(uploadStream)
    } else {
      return reject(new Error('Aucune donnée de fichier disponible'))
    }
  })
}

async function uploadImage(file, userId) {
  if (!file) throw new Error('Aucun fichier fourni')
  if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
    throw new Error('Type de fichier non autorisé. Formats acceptés : JPEG, PNG, WebP, GIF')
  }
  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error('Le fichier dépasse la taille maximale de 5 Mo')
  }

  const result = await uploadToCloudinary(file, 'marcostore/images')

  const record = await prisma.uploadedFile.create({
    data: {
      filename: result.public_id.split('/').pop(),
      originalName: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: result.public_id,
      uploaderId: userId || null
    }
  })

  return {
    id: record.id,
    url: result.secure_url,
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

  const result = await uploadToCloudinary(file, 'marcostore/documents')

  const record = await prisma.uploadedFile.create({
    data: {
      filename: result.public_id.split('/').pop(),
      originalName: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: result.public_id,
      uploaderId: userId || null
    }
  })

  return {
    id: record.id,
    url: result.secure_url,
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

  try {
    await cloudinary.uploader.destroy(file.path)
  } catch (e) { /* ignore */ }

  await prisma.uploadedFile.delete({ where: { id: fileId } })
  return { message: 'Fichier supprimé avec succès' }
}

module.exports = {
  uploadImage,
  uploadImages,
  uploadDocument,
  deleteFile
}

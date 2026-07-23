const productService = require('../services/product.service')

async function getAll(req, res, next) {
  try {
    const data = await productService.getAll(req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

async function getByIdOrSlug(req, res, next) {
  try {
    const { id } = req.params
    if (UUID_RE.test(id)) {
      const data = await productService.getById(id)
      return res.json({ data })
    }
    const data = await productService.getBySlug(id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getBySlug(req, res, next) {
  try {
    const data = await productService.getBySlug(req.params.slug)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getByCategory(req, res, next) {
  try {
    const data = await productService.getByCategory(req.params.categorySlug, req.query)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function search(req, res, next) {
  try {
    const { q, ...filters } = req.query
    const data = await productService.search(q, filters)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getFeatured(req, res, next) {
  try {
    const data = await productService.getFeatured()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getTrending(req, res, next) {
  try {
    const data = await productService.getTrending()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getNew(req, res, next) {
  try {
    const data = await productService.getNew()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getRelated(req, res, next) {
  try {
    if (!UUID_RE.test(req.params.id)) {
      return res.status(400).json({ message: 'ID invalide' })
    }
    const data = await productService.getRelated(req.params.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function create(req, res, next) {
  try {
    const data = await productService.create(req.user.id, req.body)
    res.status(201).json({ data })
  } catch (err) {
    next(err)
  }
}

async function update(req, res, next) {
  try {
    if (!UUID_RE.test(req.params.id)) {
      return res.status(400).json({ message: 'ID invalide' })
    }
    const data = await productService.update(req.params.id, req.user.id, req.body)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    if (!UUID_RE.test(req.params.id)) {
      return res.status(400).json({ message: 'ID invalide' })
    }
    const data = await productService.remove(req.params.id, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function uploadImages(req, res, next) {
  try {
    if (!UUID_RE.test(req.params.id)) {
      return res.status(400).json({ message: 'ID invalide' })
    }
    const data = await productService.uploadImages(req.params.id, req.user.id, req.files)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function deleteImage(req, res, next) {
  try {
    if (!UUID_RE.test(req.params.id)) {
      return res.status(400).json({ message: 'ID invalide' })
    }
    const data = await productService.deleteImage(req.params.id, req.params.imageId, req.user.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAll,
  getByIdOrSlug,
  getBySlug,
  getByCategory,
  search,
  getFeatured,
  getTrending,
  getNew,
  getRelated,
  create,
  update,
  remove,
  uploadImages,
  deleteImage
}

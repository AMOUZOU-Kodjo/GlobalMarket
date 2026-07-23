const categoryService = require('../services/category.service')

async function getAll(req, res, next) {
  try {
    const data = await categoryService.getAll()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getTree(req, res, next) {
  try {
    const data = await categoryService.getTree()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getById(req, res, next) {
  try {
    const data = await categoryService.getById(req.params.id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function getBySlug(req, res, next) {
  try {
    const data = await categoryService.getBySlug(req.params.slug)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAll,
  getTree,
  getById,
  getBySlug
}

function paginate(query, { page = 1, limit = 20 } = {}) {
  const skip = (page - 1) * limit
  return { skip, take: Number(limit), page: Number(page), limit: Number(limit) }
}
function paginatedResponse(data, total, page, limit) {
  return { data, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } }
}
module.exports = { paginate, paginatedResponse }

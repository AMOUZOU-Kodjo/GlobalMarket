const API_BASE = `${import.meta.env.VITE_API_URL || ''}/api`

function authHeaders() {
  const token = localStorage.getItem('token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

function postMultipart(endpoint, formData) {
  return fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: authHeaders(),
    body: formData,
  }).then((res) => {
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return res.json()
  }).then((json) => json.data !== undefined ? json.data : json)
}

function del(endpoint) {
  return fetch(`${API_BASE}${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    },
  }).then((res) => {
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return res.json()
  }).then((json) => json.data !== undefined ? json.data : json)
}

const uploadService = {
  uploadImage: (file) => {
    const formData = new FormData()
    formData.append('file', file)
    return postMultipart('/uploads/image', formData)
  },

  uploadImages: (files) => {
    const formData = new FormData()
    files.forEach((file) => formData.append('files', file))
    return postMultipart('/uploads/images', formData)
  },

  uploadDocument: (file) => {
    const formData = new FormData()
    formData.append('file', file)
    return postMultipart('/uploads/document', formData)
  },

  deleteFile: (fileId) => del(`/uploads/${fileId}`),
}

export default uploadService

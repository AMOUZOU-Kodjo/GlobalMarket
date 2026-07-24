import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Package, ArrowLeft, Save, AlertCircle, X,
} from 'lucide-react'
import sellerService from '../../services/seller.service'
import categoryService from '../../services/category.service'
import FormField from '../../components/molecules/FormField'
import FileUpload from '../../components/molecules/FileUpload'
import Spinner from '../../components/atoms/Spinner'

export default function ProductEditPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])
  const [existingImages, setExistingImages] = useState([])
  const [newFiles, setNewFiles] = useState([])
  const [removedImages, setRemovedImages] = useState([])
  const [form, setForm] = useState({
    name: '',
    description: '',
    categoryId: '',
    price: '',
    compareAtPrice: '',
    stock: '',
    sku: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    status: 'draft',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    Promise.all([
      categoryService.getAll().catch(() => []),
      sellerService.getProducts().catch(() => ({ data: { products: [] } })),
    ]).then(([cats, res]) => {
      const catList = Array.isArray(cats) ? cats : cats?.categories || cats?.data || []
      setCategories(catList)

      const data = res?.data || res || {}
      const allProducts = data?.products || (Array.isArray(data) ? data : [])
      const product = allProducts.find((p) => (p._id || p.id) === id)
      if (!product) throw new Error('Produit introuvable')
      setForm({
        name: product.name || '',
        description: product.description || '',
        categoryId: product.categoryId || product.category?.id || '',
        price: Number(product.price || 0).toString(),
        compareAtPrice: product.compareAtPrice ? Number(product.compareAtPrice).toString() : '',
        stock: (product.stock ?? '').toString(),
        sku: product.sku || '',
        weight: product.weight?.toString() || '',
        length: product.dimensions?.length?.toString() || '',
        width: product.dimensions?.width?.toString() || '',
        height: product.dimensions?.height?.toString() || '',
        status: product.status || 'draft',
      })
      const imgs = (product.images || []).map((img) => (typeof img === 'string' ? img : img.url)).filter(Boolean)
      setExistingImages(imgs)
    }).catch((err) => {
      setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement du produit.')
    }).finally(() => setLoading(false))
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Le nom est requis'
    if (!form.description.trim()) errs.description = 'La description est requise'
    if (!form.categoryId) errs.categoryId = 'La catégorie est requise'
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0) errs.price = 'Un prix valide est requis'
    if (form.stock === '' || isNaN(Number(form.stock)) || Number(form.stock) < 0) errs.stock = 'Le stock est requis'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleRemoveExistingImage = (imageUrl) => {
    setExistingImages((prev) => prev.filter((img) => img !== imageUrl))
    setRemovedImages((prev) => [...prev, imageUrl])
  }

  const handleUpload = (files) => {
    setNewFiles((prev) => [...prev, ...files])
  }

  const handleRemoveNewFile = (file) => {
    setNewFiles((prev) => prev.filter((f) => f !== file && f.id !== file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSaving(true)
    setError(null)
    try {
      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        categoryId: form.categoryId,
        price: Number(form.price),
        stock: Number(form.stock),
        status: form.status,
        existingImages,
        removedImages,
      }
      if (form.compareAtPrice) payload.compareAtPrice = Number(form.compareAtPrice)
      if (form.sku) payload.sku = form.sku.trim()
      if (form.weight) payload.weight = Number(form.weight)
      if (form.length || form.width || form.height) {
        payload.dimensions = {}
        if (form.length) payload.dimensions.length = Number(form.length)
        if (form.width) payload.dimensions.width = Number(form.width)
        if (form.height) payload.dimensions.height = Number(form.height)
      }

      await sellerService.updateProduct(id, payload)

      const imageFiles = newFiles.filter((f) => f instanceof File)
      if (imageFiles.length > 0) {
        await sellerService.uploadImages(id, imageFiles)
      }

      navigate('/seller/shop/products')
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Erreur lors de la mise à jour du produit.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text="Chargement du produit..." />
      </div>
    )
  }

  if (error && !form.name) {
    return (
      <div className="py-12">
        <div className="alert alert-error max-w-xl mx-auto">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm btn-circle">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold">Modifier le produit</h1>
          <p className="text-base-content/60 text-sm">Mettez à jour les informations de votre produit</p>
        </div>
      </div>

      {error && (
        <div className="alert alert-error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Informations générales</h2>

            <FormField label="Nom du produit" required error={errors.name} htmlFor="name">
              <label className="input input-bordered flex items-center gap-2">
                <Package size={16} className="opacity-50" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="grow"
                  placeholder="Nom du produit"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
            </FormField>

            <FormField label="Description" required error={errors.description} htmlFor="description">
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered w-full min-h-[120px]"
                placeholder="Décrivez votre produit en détail..."
                value={form.description}
                onChange={handleChange}
              />
            </FormField>

            <FormField label="Catégorie" required error={errors.categoryId} htmlFor="categoryId">
              <select
                id="categoryId"
                name="categoryId"
                className="select select-bordered w-full"
                value={form.categoryId}
                onChange={handleChange}
              >
                <option value="">Sélectionner une catégorie</option>
                {categories.map((cat) => (
                  <option key={cat.id || cat.slug} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </FormField>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Images</h2>

            {existingImages.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                {existingImages.map((img, i) => (
                  <div key={i} className="relative group aspect-square rounded-box overflow-hidden bg-base-200">
                    <img src={img} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      className="absolute top-1 right-1 btn btn-circle btn-xs btn-error opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemoveExistingImage(img)}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <FileUpload
              accept="image/*"
              multiple
              maxSize={5 * 1024 * 1024}
              onUpload={handleUpload}
              onRemove={handleRemoveNewFile}
              files={newFiles}
            />
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Prix et stock</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Prix (XOF)" required error={errors.price} htmlFor="price">
                <input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  className="input input-bordered w-full"
                  placeholder="0"
                  value={form.price}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Prix barré (XOF)" hint="Optionnel" htmlFor="compareAtPrice">
                <input
                  id="compareAtPrice"
                  name="compareAtPrice"
                  type="number"
                  min="0"
                  step="0.01"
                  className="input input-bordered w-full"
                  placeholder="0"
                  value={form.compareAtPrice}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Stock" required error={errors.stock} htmlFor="stock">
                <input
                  id="stock"
                  name="stock"
                  type="number"
                  min="0"
                  className="input input-bordered w-full"
                  placeholder="0"
                  value={form.stock}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="SKU" htmlFor="sku">
                <input
                  id="sku"
                  name="sku"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="SKU-001"
                  value={form.sku}
                  onChange={handleChange}
                />
              </FormField>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Dimensions et expédition</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <FormField label="Poids (kg)" htmlFor="weight">
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  min="0"
                  step="0.01"
                  className="input input-bordered w-full"
                  placeholder="0"
                  value={form.weight}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Longueur (cm)" htmlFor="length">
                <input
                  id="length"
                  name="length"
                  type="number"
                  min="0"
                  className="input input-bordered w-full"
                  placeholder="0"
                  value={form.length}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Largeur (cm)" htmlFor="width">
                <input
                  id="width"
                  name="width"
                  type="number"
                  min="0"
                  className="input input-bordered w-full"
                  placeholder="0"
                  value={form.width}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Hauteur (cm)" htmlFor="height">
                <input
                  id="height"
                  name="height"
                  type="number"
                  min="0"
                  className="input input-bordered w-full"
                  placeholder="0"
                  value={form.height}
                  onChange={handleChange}
                />
              </FormField>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Statut</h2>
            <FormField htmlFor="status">
              <select
                id="status"
                name="status"
                className="select select-bordered w-full max-w-xs"
                value={form.status}
                onChange={handleChange}
              >
                <option value="draft">Brouillon</option>
                <option value="active">Actif</option>
              </select>
            </FormField>
          </div>
        </div>

        <div className="flex justify-end gap-3 pb-8">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => navigate(-1)}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                Enregistrement...
              </>
            ) : (
              <>
                <Save size={16} />
                Enregistrer les modifications
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

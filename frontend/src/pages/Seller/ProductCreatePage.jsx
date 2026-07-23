import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Package, ArrowLeft, Save, AlertCircle, Image,
} from 'lucide-react'
import sellerService from '../../services/seller.service'
import FormField from '../../components/molecules/FormField'
import FileUpload from '../../components/molecules/FileUpload'

const CATEGORIES = [
  'Électronique', 'Mode', 'Maison & Jardin', 'Beauté & Santé',
  'Sports & Loisirs', 'Auto & Moto', 'Alimentation', 'Art & Artisanat',
  'Livres & Médias', 'Jouets & Enfants', 'Animaux', 'Autre',
]

export default function ProductCreatePage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [files, setFiles] = useState([])
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Le nom est requis'
    if (!form.description.trim()) errs.description = 'La description est requise'
    if (!form.category) errs.category = 'La catégorie est requise'
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0) errs.price = 'Un prix valide est requis'
    if (form.stock === '' || isNaN(Number(form.stock)) || Number(form.stock) < 0) errs.stock = 'Le stock est requis'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleUpload = (newFiles) => {
    setFiles((prev) => [...prev, ...newFiles])
  }

  const handleRemoveFile = (file) => {
    setFiles((prev) => prev.filter((f) => f !== file && f.id !== file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append('name', form.name.trim())
      formData.append('description', form.description.trim())
      formData.append('category', form.category)
      formData.append('price', Number(form.price))
      if (form.compareAtPrice) formData.append('compareAtPrice', Number(form.compareAtPrice))
      formData.append('stock', Number(form.stock))
      if (form.sku) formData.append('sku', form.sku.trim())
      if (form.weight) formData.append('weight', Number(form.weight))
      if (form.length) formData.append('dimensions[length]', Number(form.length))
      if (form.width) formData.append('dimensions[width]', Number(form.width))
      if (form.height) formData.append('dimensions[height]', Number(form.height))
      formData.append('status', form.status)

      files.forEach((file) => {
        if (file instanceof File) {
          formData.append('images', file)
        }
      })

      await sellerService.createProduct(formData)
      navigate('/seller/products')
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Erreur lors de la création du produit.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm btn-circle">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold">Créer un produit</h1>
          <p className="text-base-content/60 text-sm">Ajoutez un nouveau produit à votre catalogue</p>
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

            <FormField label="Catégorie" required error={errors.category} htmlFor="category">
              <select
                id="category"
                name="category"
                className="select select-bordered w-full"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Sélectionner une catégorie</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </FormField>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Images</h2>
            <FileUpload
              accept="image/*"
              multiple
              maxSize={5 * 1024 * 1024}
              onUpload={handleUpload}
              onRemove={handleRemoveFile}
              files={files}
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
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                Création...
              </>
            ) : (
              <>
                <Save size={16} />
                Créer le produit
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

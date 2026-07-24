import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Store, Upload, Save, Image, X } from 'lucide-react'
import sellerService from '../../services/seller.service'
import uploadService from '../../services/upload.service'
import Spinner from '../../components/atoms/Spinner'

export default function SellerShopSettingsPage() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    shopName: '',
    description: '',
    logo: '',
    banner: '',
    category: '',
    country: '',
  })

  useEffect(() => {
    sellerService.getShop()
      .then((data) => {
        const shop = data.data || data
        setForm({
          shopName: shop.shopName || '',
          description: shop.description || '',
          logo: shop.logo || '',
          banner: shop.banner || '',
          category: shop.category || '',
          country: shop.country || '',
        })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const handleImageUpload = async (field, file) => {
    setUploading(field)
    try {
      const result = await uploadService.uploadImage(file)
      setForm((prev) => ({ ...prev, [field]: result.url || result }))
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(false)
    try {
      await sellerService.updateShop(form)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="flex justify-center py-20"><Spinner size="lg" text={t('common.loading')} /></div>
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Store size={24} /> {t('seller.shopSettings', 'Paramètres de la boutique')}
      </h1>

      {error && <div className="alert alert-error"><span>{error}</span></div>}
      {success && <div className="alert alert-success"><span>{t('common.saved', 'Enregistré')}</span></div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body space-y-4">
            <h2 className="card-title text-lg">{t('seller.shopIdentity', 'Identité de la boutique')}</h2>

            <div className="form-control">
              <label className="label"><span className="label-text">{t('seller.shopName', 'Nom de la boutique')}</span></label>
              <input type="text" className="input input-bordered" value={form.shopName} onChange={(e) => setForm({ ...form, shopName: e.target.value })} required />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">{t('seller.description', 'Description')}</span></label>
              <textarea className="textarea textarea-bordered h-24" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label"><span className="label-text">{t('seller.category', 'Catégorie')}</span></label>
                <input type="text" className="input input-bordered" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">{t('seller.country', 'Pays')}</span></label>
                <input type="text" className="input input-bordered" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body space-y-4">
            <h2 className="card-title text-lg flex items-center gap-2"><Image size={18} /> {t('seller.shopImages', 'Images de la boutique')}</h2>

            <div className="space-y-2">
              <label className="label"><span className="label-text">{t('seller.banner', 'Bannière')}</span></label>
              <div className="relative w-full h-40 rounded-box bg-base-200 overflow-hidden border-2 border-dashed border-base-300 hover:border-primary transition-colors">
                {form.banner ? (
                  <>
                    <img src={form.banner} alt="Banner" className="w-full h-full object-cover" />
                    <button type="button" className="btn btn-circle btn-sm btn-error absolute top-2 right-2" onClick={() => setForm({ ...form, banner: '' })}><X size={14} /></button>
                  </>
                ) : (
                  <label className="flex flex-col items-center justify-center h-full cursor-pointer text-base-content/50 hover:text-primary transition-colors">
                    {uploading === 'banner' ? <Spinner size="sm" /> : <><Upload size={24} /><span className="text-sm mt-1">{t('seller.uploadBanner', 'Cliquer pour uploader une bannière')}</span></>}
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files[0] && handleImageUpload('banner', e.target.files[0])} />
                  </label>
                )}
              </div>
              <p className="text-xs text-base-content/50">1200 x 300px recommandé</p>
            </div>

            <div className="space-y-2">
              <label className="label"><span className="label-text">{t('seller.logo', 'Logo')}</span></label>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded-box bg-base-200 overflow-hidden border-2 border-dashed border-base-300 hover:border-primary transition-colors shrink-0">
                  {form.logo ? (
                    <>
                      <img src={form.logo} alt="Logo" className="w-full h-full object-cover" />
                      <button type="button" className="btn btn-circle btn-xs btn-error absolute top-1 right-1" onClick={() => setForm({ ...form, logo: '' })}><X size={10} /></button>
                    </>
                  ) : (
                    <label className="flex flex-col items-center justify-center h-full cursor-pointer text-base-content/50 hover:text-primary transition-colors">
                      {uploading === 'logo' ? <Spinner size="sm" /> : <><Upload size={20} /><span className="text-xs mt-1">{t('seller.uploadLogo', 'Logo')}</span></>}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files[0] && handleImageUpload('logo', e.target.files[0])} />
                    </label>
                  )}
                </div>
                <div className="text-sm text-base-content/50">
                  <p>{t('seller.logoHint', 'Le logo apparaît sur votre page boutique et les produits.')}</p>
                  <p>200 x 200px recommandé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary gap-2" disabled={saving}>
            <Save size={16} />
            {saving ? t('common.saving', 'Enregistrement...') : t('common.save', 'Enregistrer')}
          </button>
        </div>
      </form>
    </div>
  )
}

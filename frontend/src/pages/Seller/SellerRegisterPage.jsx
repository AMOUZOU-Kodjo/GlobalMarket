import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Store, User, Building2, Globe, Tag, FileText, AlertCircle, CheckCircle } from 'lucide-react'
import sellerService from '../../services/seller.service'
import FormField from '../../components/molecules/FormField'
import Spinner from '../../components/atoms/Spinner'
import Alert from '../../components/atoms/Alert'

export default function SellerRegisterPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    shopName: '',
    description: '',
    category: '',
    country: '',
    businessType: 'individual',
    acceptTerms: false,
  })
  const [errors, setErrors] = useState({})

  const CATEGORIES = [
    t('categories.electronics'), t('categories.fashion'), t('categories.homeGarden'),
    t('categories.beautyHealth'), t('categories.sportsLeisure'), t('categories.autoMoto'),
    t('categories.food'), t('categories.artCraft'), t('categories.booksMedia'),
    t('categories.toysKids'), t('categories.animals'), t('categories.other'),
  ]

  const COUNTRIES = [
    t('countries.senegal'), t('countries.ivoryCoast'), t('countries.mali'),
    t('countries.burkinaFaso'), t('countries.guinea'), t('countries.cameroon'),
    t('countries.benin'), t('countries.togo'), t('countries.niger'),
    t('countries.congo'), t('countries.gabon'), t('countries.france'),
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.shopName.trim()) errs.shopName = t('validation.shopNameRequired')
    if (!form.description.trim()) errs.description = t('validation.descriptionRequired')
    if (!form.category) errs.category = t('validation.categoryRequired')
    if (!form.country) errs.country = t('validation.countryRequired')
    if (!form.acceptTerms) errs.acceptTerms = t('validation.termsRequired')
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setError(null)
    try {
      await sellerService.register({
        shopName: form.shopName.trim(),
        description: form.description.trim(),
        category: form.category,
        country: form.country,
        businessType: form.businessType,
      })
      setSuccess(true)
      setTimeout(() => navigate('/seller/shop'), 1500)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || t('errors.register'))
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="card bg-base-100 shadow-xl max-w-md w-full">
          <div className="card-body items-center text-center">
            <div className="text-success mb-4">
              <CheckCircle size={64} strokeWidth={1.5} />
            </div>
            <h2 className="card-title text-xl">{t('sellerRegister.successTitle')}</h2>
            <p className="text-base-content/60 mt-2">
              {t('sellerRegister.successMessage')}
            </p>
            <Spinner size="sm" className="mt-4" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Store size={48} className="mx-auto text-primary mb-3" strokeWidth={1.5} />
          <h1 className="text-3xl font-bold">{t('sellerRegister.title')}</h1>
          <p className="text-base-content/60 mt-2">
            {t('sellerRegister.subtitle')}
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {error && (
              <div className="alert alert-error mb-4">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField label={t('sellerRegister.shopName')} required error={errors.shopName} htmlFor="shopName">
                <label className="input input-bordered flex items-center gap-2">
                  <Store size={16} className="opacity-50" />
                  <input
                    id="shopName"
                    name="shopName"
                    type="text"
                    className="grow"
                    placeholder={t('sellerRegister.shopNamePlaceholder')}
                    value={form.shopName}
                    onChange={handleChange}
                  />
                </label>
              </FormField>

              <FormField label={t('products.description')} required error={errors.description} htmlFor="description">
                <textarea
                  id="description"
                  name="description"
                  className="textarea textarea-bordered w-full min-h-[100px]"
                  placeholder={t('sellerRegister.descriptionPlaceholder')}
                  value={form.description}
                  onChange={handleChange}
                />
              </FormField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label={t('products.category')} required error={errors.category} htmlFor="category">
                  <select
                    id="category"
                    name="category"
                    className="select select-bordered w-full"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="">{t('common.select')}</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </FormField>

                <FormField label={t('sellerRegister.country')} required error={errors.country} htmlFor="country">
                  <label className="input input-bordered flex items-center gap-2">
                    <Globe size={16} className="opacity-50" />
                    <select
                      id="country"
                      name="country"
                      className="grow bg-transparent"
                      value={form.country}
                      onChange={handleChange}
                    >
                      <option value="">{t('common.select')}</option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                </FormField>
              </div>

              <FormField label={t('sellerRegister.businessType')} required htmlFor="businessType">
                <div className="flex gap-4">
                  <label className="label cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="businessType"
                      className="radio radio-primary"
                      value="individual"
                      checked={form.businessType === 'individual'}
                      onChange={handleChange}
                    />
                    <span className="label-text flex items-center gap-1">
                      <User size={16} /> {t('sellerRegister.individual')}
                    </span>
                  </label>
                  <label className="label cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="businessType"
                      className="radio radio-primary"
                      value="company"
                      checked={form.businessType === 'company'}
                      onChange={handleChange}
                    />
                    <span className="label-text flex items-center gap-1">
                      <Building2 size={16} /> {t('sellerRegister.company')}
                    </span>
                  </label>
                </div>
              </FormField>

              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    className="checkbox checkbox-primary"
                    checked={form.acceptTerms}
                    onChange={handleChange}
                  />
                  <span className="label-text">
                    {t('sellerRegister.acceptTerms')} <a href="/terms" className="link link-primary" target="_blank">{t('sellerRegister.termsLink')}</a> {t('sellerRegister.forSellers')}
                  </span>
                </label>
                {errors.acceptTerms && (
                  <span className="text-error text-sm ml-7">{errors.acceptTerms}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    {t('common.registering')}
                  </>
                ) : (
                  <>
                    <Store size={18} />
                    {t('sellerRegister.createShop')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Settings, Save, AlertCircle, Globe, CreditCard, Truck, Bell,
  Upload,
} from 'lucide-react'
import adminService from '../../services/admin.service'
import FormField from '../../components/molecules/FormField'
import Tabs from '../../components/atoms/Tabs'
import Spinner from '../../components/atoms/Spinner'

export default function AdminSettingsPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('general')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [settings, setSettings] = useState({
    siteName: '',
    siteDescription: '',
    siteLogo: '',
    commissionRate: '',
    paymentMethods: [],
    defaultShippingRate: '',
    shippingFreeThreshold: '',
    emailOrderConfirmation: true,
    emailOrderShipped: true,
    emailNewSeller: true,
    emailLowStock: true,
  })

  const TAB_LIST = [
    { id: 'general', label: t('admin.general'), icon: Globe },
    { id: 'payments', label: t('admin.payments'), icon: CreditCard },
    { id: 'shipping', label: t('admin.shipping'), icon: Truck },
    { id: 'notifications', label: t('admin.notifications'), icon: Bell },
  ]

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await adminService.getSettings()
        const data = res.data || res
        setSettings((prev) => ({ ...prev, ...data }))
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || t('admin.errorLoadingSettings'))
      } finally {
        setLoading(false)
      }
    }
    fetchSettings()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handlePaymentMethodToggle = (method) => {
    setSettings((prev) => {
      const methods = prev.paymentMethods || []
      return {
        ...prev,
        paymentMethods: methods.includes(method)
          ? methods.filter((m) => m !== method)
          : [...methods, method],
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(null)
    try {
      await adminService.updateSettings(settings)
      setSuccess(t('admin.settingsSaved'))
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err?.response?.data?.message || t('admin.errorSavingSettings'))
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text={t('admin.loadingSettings')} />
      </div>
    )
  }

  const PAYMENT_METHODS = [
    { id: 'card', label: t('admin.cardPayment') },
    { id: 'mobile_money', label: t('admin.mobileMoney') },
    { id: 'bank_transfer', label: t('admin.bankTransfer') },
    { id: 'cod', label: t('admin.cashOnDelivery') },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('admin.platformSettings')}</h1>
        <p className="text-base-content/60 text-sm">{t('admin.settingsDescription')}</p>
      </div>

      {error && (
        <div className="alert alert-error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="alert alert-success">
          <span>{success}</span>
        </div>
      )}

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <Tabs
            tabs={TAB_LIST}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {activeTab === 'general' && (
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-4">
              <h2 className="card-title text-base">
                <Globe size={18} />
                {t('admin.generalSettings')}
              </h2>

              <FormField label={t('admin.siteName')} htmlFor="siteName">
                <input
                  id="siteName"
                  name="siteName"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="MarcoStore"
                  value={settings.siteName}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label={t('admin.siteDescription')} htmlFor="siteDescription">
                <textarea
                  id="siteDescription"
                  name="siteDescription"
                  className="textarea textarea-bordered w-full min-h-[80px]"
                  placeholder={t('admin.siteDescriptionPlaceholder')}
                  value={settings.siteDescription}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label={t('admin.siteLogo')} htmlFor="siteLogo">
                <div className="flex items-center gap-4">
                  {settings.siteLogo && (
                    <div className="w-16 h-16 rounded-box overflow-hidden bg-base-200">
                      <img
                        src={settings.siteLogo}
                        alt={t('admin.siteLogo')}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <label className="btn btn-outline btn-sm cursor-pointer">
                    <Upload size={14} />
                    {t('admin.chooseLogo')}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const url = URL.createObjectURL(file)
                          setSettings((prev) => ({ ...prev, siteLogo: url }))
                        }
                      }}
                    />
                  </label>
                </div>
              </FormField>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-4">
              <h2 className="card-title text-base">
                <CreditCard size={18} />
                {t('admin.paymentSettings')}
              </h2>

              <FormField
                label={t('admin.commissionRate')}
                hint={t('admin.commissionHint')}
                htmlFor="commissionRate"
              >
                <input
                  id="commissionRate"
                  name="commissionRate"
                  type="number"
                  min="0"
                  max="50"
                  step="0.5"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="10"
                  value={settings.commissionRate}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label={t('admin.acceptedPaymentMethods')}>
                <div className="flex flex-wrap gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <label key={method.id} className="label cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary checkbox-sm"
                        checked={(settings.paymentMethods || []).includes(method.id)}
                        onChange={() => handlePaymentMethodToggle(method.id)}
                      />
                      <span className="label-text">{method.label}</span>
                    </label>
                  ))}
                </div>
              </FormField>
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-4">
              <h2 className="card-title text-base">
                <Truck size={18} />
                {t('admin.shippingSettings')}
              </h2>

              <FormField
                label={t('admin.defaultShippingRate')}
                htmlFor="defaultShippingRate"
              >
                <input
                  id="defaultShippingRate"
                  name="defaultShippingRate"
                  type="number"
                  min="0"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="0"
                  value={settings.defaultShippingRate}
                  onChange={handleChange}
                />
              </FormField>

              <FormField
                label={t('admin.freeShippingThreshold')}
                hint={t('admin.freeShippingHint')}
                htmlFor="shippingFreeThreshold"
              >
                <input
                  id="shippingFreeThreshold"
                  name="shippingFreeThreshold"
                  type="number"
                  min="0"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="0"
                  value={settings.shippingFreeThreshold}
                  onChange={handleChange}
                />
              </FormField>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-4">
              <h2 className="card-title text-base">
                <Bell size={18} />
                {t('admin.notificationTemplates')}
              </h2>

              <div className="space-y-3">
                {[
                  { key: 'emailOrderConfirmation', label: t('admin.orderConfirmation') },
                  { key: 'emailOrderShipped', label: t('admin.orderShipped') },
                  { key: 'emailNewSeller', label: t('admin.newSellerRegistered') },
                  { key: 'emailLowStock', label: t('admin.lowStock') },
                ].map((item) => (
                  <label key={item.key} className="flex items-center justify-between p-3 rounded-box bg-base-200/50">
                    <span className="text-sm font-medium">{item.label}</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary toggle-sm"
                      checked={settings[item.key]}
                      onChange={handleChange}
                      name={item.key}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                {t('admin.saving')}
              </>
            ) : (
              <>
                <Save size={16} />
                {t('admin.saveSettings')}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

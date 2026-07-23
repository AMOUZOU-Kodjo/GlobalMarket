import { useState, useEffect } from 'react'
import {
  Settings, Save, AlertCircle, Globe, CreditCard, Truck, Bell,
  Upload,
} from 'lucide-react'
import adminService from '../../services/admin.service'
import FormField from '../../components/molecules/FormField'
import Tabs from '../../components/atoms/Tabs'
import Spinner from '../../components/atoms/Spinner'

const TAB_LIST = [
  { id: 'general', label: 'Général', icon: Globe },
  { id: 'payments', label: 'Paiements', icon: CreditCard },
  { id: 'shipping', label: 'Expédition', icon: Truck },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

export default function AdminSettingsPage() {
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

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await adminService.getSettings()
        const data = res.data || res
        setSettings((prev) => ({ ...prev, ...data }))
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement des paramètres.')
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
      setSuccess('Paramètres enregistrés avec succès.')
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err?.response?.data?.message || 'Erreur lors de l\'enregistrement.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text="Chargement des paramètres..." />
      </div>
    )
  }

  const PAYMENT_METHODS = [
    { id: 'card', label: 'Carte bancaire' },
    { id: 'mobile_money', label: 'Mobile Money' },
    { id: 'bank_transfer', label: 'Virement bancaire' },
    { id: 'cod', label: 'Paiement à la livraison' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Paramètres de la plateforme</h1>
        <p className="text-base-content/60 text-sm">Configurez les paramètres globaux</p>
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
                Paramètres généraux
              </h2>

              <FormField label="Nom du site" htmlFor="siteName">
                <input
                  id="siteName"
                  name="siteName"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="GlobalMarket"
                  value={settings.siteName}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Description du site" htmlFor="siteDescription">
                <textarea
                  id="siteDescription"
                  name="siteDescription"
                  className="textarea textarea-bordered w-full min-h-[80px]"
                  placeholder="Description de la plateforme..."
                  value={settings.siteDescription}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Logo du site" htmlFor="siteLogo">
                <div className="flex items-center gap-4">
                  {settings.siteLogo && (
                    <div className="w-16 h-16 rounded-box overflow-hidden bg-base-200">
                      <img
                        src={settings.siteLogo}
                        alt="Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <label className="btn btn-outline btn-sm cursor-pointer">
                    <Upload size={14} />
                    Choisir un logo
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
                Paramètres de paiement
              </h2>

              <FormField
                label="Taux de commission (%)"
                hint="Pourcentage prélevé sur chaque vente"
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

              <FormField label="Modes de paiement acceptés">
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
                Paramètres d'expédition
              </h2>

              <FormField
                label="Tarif d'expédition par défaut (XOF)"
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
                label="Seuil de livraison gratuite (XOF)"
                hint="Montant minimum pour la livraison gratuite"
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
                Templates de notifications
              </h2>

              <div className="space-y-3">
                {[
                  { key: 'emailOrderConfirmation', label: 'Confirmation de commande' },
                  { key: 'emailOrderShipped', label: 'Commande expédiée' },
                  { key: 'emailNewSeller', label: 'Nouveau vendeur inscrit' },
                  { key: 'emailLowStock', label: 'Stock faible' },
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
                Enregistrement...
              </>
            ) : (
              <>
                <Save size={16} />
                Enregistrer les paramètres
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

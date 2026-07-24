import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../context/AuthContext'
import {
  Bell,
  Shield,
  Trash2,
  Mail,
  Smartphone,
  MessageSquare,
  Eye,
  AlertTriangle,
  MapPin,
  Plus,
} from 'lucide-react'
import { Header } from '../../components/organisms/Header'
import AddressForm from '../../components/organisms/AddressForm'
import Tabs from '../../components/atoms/Tabs'
import AddressCard from '../../components/molecules/AddressCard'
import Alert from '../../components/atoms/Alert'
import Spinner from '../../components/atoms/Spinner'

function Toggle({ checked, onChange, disabled, label, description }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1 min-w-0 mr-4">
        <p className="text-sm font-medium">{label}</p>
        {description && (
          <p className="text-xs text-base-content/50 mt-0.5">{description}</p>
        )}
      </div>
      <input
        type="checkbox"
        className="toggle toggle-primary"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

export default function UserSettingsPage() {
  const { t } = useTranslation()
  const { user, updateUser, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('notifications')

  const TABS = [
    { id: 'notifications', label: t('settings.notifications'), icon: Bell },
    { id: 'addresses', label: t('profile.addresses'), icon: MapPin },
    { id: 'privacy', label: t('settings.privacy'), icon: Eye },
    { id: 'account', label: t('settings.account'), icon: Shield },
  ]

  const [notifications, setNotifications] = useState({
    emailOrders: true,
    emailPromotions: false,
    emailNewsletter: false,
    pushOrders: true,
    pushPromotions: false,
    smsOrders: false,
    smsPromotions: false,
  })

  const [privacy, setPrivacy] = useState({
    showEmail: false,
    showPhone: false,
    profileVisible: true,
    activityVisible: true,
  })

  const [addresses, setAddresses] = useState(user?.addresses || [])
  const [showAddressForm, setShowAddressForm] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)

  const [deleteConfirm, setDeleteConfirm] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [settingsSaved, setSettingsSaved] = useState(false)

  const handleNotificationToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
    setSettingsSaved(false)
  }

  const handlePrivacyToggle = (key) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }))
    setSettingsSaved(false)
  }

  const handleSaveSettings = async () => {
    setSettingsSaved(true)
    setTimeout(() => setSettingsSaved(false), 3000)
  }

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== 'SUPPRIMER') return
    setDeleting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      logout()
    } catch {
      // ignore
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header
        title={t('settings.title')}
        subtitle={t('settings.managePreferences')}
      />

      <Tabs
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-6"
      />

      {settingsSaved && (
        <Alert type="success" className="mb-6" closable onClose={() => setSettingsSaved(false)}>
          {t('settings.saved')}
        </Alert>
      )}

      {activeTab === 'notifications' && (
        <div className="max-w-2xl">
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Mail size={20} />
                {t('settings.emailNotifications')}
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label={t('cart.orders')}
                  description={t('settings.emailOrdersDesc')}
                  checked={notifications.emailOrders}
                  onChange={() => handleNotificationToggle('emailOrders')}
                />
                <Toggle
                  label={t('common.promotions')}
                  description={t('settings.emailPromotionsDesc')}
                  checked={notifications.emailPromotions}
                  onChange={() => handleNotificationToggle('emailPromotions')}
                />
                <Toggle
                  label={t('settings.newsletter')}
                  description={t('settings.emailNewsletterDesc')}
                  checked={notifications.emailNewsletter}
                  onChange={() => handleNotificationToggle('emailNewsletter')}
                />
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-200 mt-4">
            <div className="card-body p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Smartphone size={20} />
                {t('settings.pushNotifications')}
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label={t('cart.orders')}
                  description={t('settings.pushOrdersDesc')}
                  checked={notifications.pushOrders}
                  onChange={() => handleNotificationToggle('pushOrders')}
                />
                <Toggle
                  label={t('common.promotions')}
                  description={t('settings.pushPromotionsDesc')}
                  checked={notifications.pushPromotions}
                  onChange={() => handleNotificationToggle('pushPromotions')}
                />
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-200 mt-4">
            <div className="card-body p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                {t('settings.smsNotifications')}
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label={t('cart.orders')}
                  description={t('settings.smsOrdersDesc')}
                  checked={notifications.smsOrders}
                  onChange={() => handleNotificationToggle('smsOrders')}
                />
                <Toggle
                  label={t('common.promotions')}
                  description={t('settings.smsPromotionsDesc')}
                  checked={notifications.smsPromotions}
                  onChange={() => handleNotificationToggle('smsPromotions')}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveSettings}
            >
              {t('common.save')}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'addresses' && (
        <div className="max-w-2xl space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setEditingAddress(null)
                setShowAddressForm(true)
              }}
            >
              <Plus size={16} />
              {t('profile.addAddress')}
            </button>
          </div>

          {showAddressForm && (
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-sm mb-2">
                  {editingAddress ? t('profile.editAddress') : t('profile.newAddress')}
                </h3>
                <AddressForm
                  initialData={editingAddress}
                  onSave={(address) => {
                    const newAddress = {
                      ...address,
                      _id: editingAddress?._id || Date.now().toString(),
                    }
                    setAddresses((prev) => {
                      if (editingAddress) {
                        return prev.map((a) =>
                          a._id === editingAddress._id ? newAddress : a
                        )
                      }
                      return [...prev, newAddress]
                    })
                    setShowAddressForm(false)
                    setEditingAddress(null)
                  }}
                  onCancel={() => {
                    setShowAddressForm(false)
                    setEditingAddress(null)
                  }}
                />
              </div>
            </div>
          )}

          {addresses.length === 0 && !showAddressForm ? (
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body items-center text-center py-12">
                <MapPin size={48} className="text-base-content/20 mb-3" />
                <h3 className="font-semibold">{t('profile.noAddresses')}</h3>
                <p className="text-sm text-base-content/50">
                  {t('profile.addAddressHint')}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((address) => (
                <AddressCard
                  key={address._id || address.id}
                  address={address}
                  onEdit={(addr) => {
                    setEditingAddress(addr)
                    setShowAddressForm(true)
                  }}
                  onDelete={(addr) => {
                    setAddresses((prev) =>
                      prev.filter((a) => a._id !== addr._id)
                    )
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'privacy' && (
        <div className="max-w-2xl">
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Eye size={20} />
                {t('settings.privacySettings')}
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label={t('settings.showEmail')}
                  description={t('settings.showEmailDesc')}
                  checked={privacy.showEmail}
                  onChange={() => handlePrivacyToggle('showEmail')}
                />
                <Toggle
                  label={t('settings.showPhone')}
                  description={t('settings.showPhoneDesc')}
                  checked={privacy.showPhone}
                  onChange={() => handlePrivacyToggle('showPhone')}
                />
                <Toggle
                  label={t('settings.profileVisible')}
                  description={t('settings.profileVisibleDesc')}
                  checked={privacy.profileVisible}
                  onChange={() => handlePrivacyToggle('profileVisible')}
                />
                <Toggle
                  label={t('settings.activityVisible')}
                  description={t('settings.activityVisibleDesc')}
                  checked={privacy.activityVisible}
                  onChange={() => handlePrivacyToggle('activityVisible')}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveSettings}
            >
              {t('common.save')}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'account' && (
        <div className="max-w-2xl">
          <div className="card bg-error/5 border border-error/20">
            <div className="card-body p-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-error">
                <AlertTriangle size={20} />
                {t('settings.dangerZone')}
              </h3>
              <p className="text-sm text-base-content/70 mb-4">
                {t('settings.deleteAccountWarning')}
              </p>

              <div className="bg-base-100 rounded-box p-4 border border-base-300">
                <h4 className="font-semibold text-sm mb-3">
                  {t('settings.confirmDeletion')}
                </h4>
                <p className="text-xs text-base-content/60 mb-3">
                  {t('settings.typeDeleteConfirm')}
                </p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full mb-3"
                  placeholder="SUPPRIMER"
                  value={deleteConfirm}
                  onChange={(e) => setDeleteConfirm(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-error btn-sm"
                  disabled={deleteConfirm !== 'SUPPRIMER' || deleting}
                  onClick={handleDeleteAccount}
                >
                  {deleting ? (
                    <Spinner size="sm" />
                  ) : (
                    <>
                      <Trash2 size={14} />
                      {t('settings.deleteAccount')}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

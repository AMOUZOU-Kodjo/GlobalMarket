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
  Save,
} from 'lucide-react'
import { Header } from '../../components/organisms/Header'
import Tabs from '../../components/atoms/Tabs'
import Alert from '../../components/atoms/Alert'

const SETTINGS_KEY = 'marcostore_settings'

function loadSettings() {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY)
    return stored ? JSON.parse(stored) : null
  } catch { return null }
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}

const DEFAULT_NOTIFICATIONS = {
  emailOrders: true,
  emailPromotions: false,
  emailNewsletter: false,
  pushOrders: true,
  pushPromotions: false,
  smsOrders: false,
  smsPromotions: false,
}

const DEFAULT_PRIVACY = {
  showEmail: false,
  showPhone: false,
  profileVisible: true,
  activityVisible: true,
}

function ToggleRow({ checked, onChange, disabled, label, description }) {
  return (
    <div className="flex items-center justify-between py-3.5 group">
      <div className="flex-1 min-w-0 mr-4">
        <p className="text-sm font-medium group-hover:text-primary transition-colors">{label}</p>
        {description && (
          <p className="text-xs text-base-content/45 mt-0.5 leading-relaxed">{description}</p>
        )}
      </div>
      <input
        type="checkbox"
        className="toggle toggle-primary toggle-sm"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

function SectionCard({ icon: Icon, title, description, iconColor = 'text-primary', children }) {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      <div className="card-body p-6">
        <div className="flex items-center gap-3 mb-1">
          <div className={`w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0`}>
            <Icon size={18} className={iconColor} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">{title}</h3>
            {description && (
              <p className="text-xs text-base-content/45">{description}</p>
            )}
          </div>
        </div>
        <div className="divide-y divide-base-200/60 mt-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function UserSettingsPage() {
  const { t } = useTranslation()
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState('notifications')

  const TABS = [
    { id: 'notifications', label: t('settings.notifications'), icon: Bell },
    { id: 'privacy', label: t('settings.privacy'), icon: Eye },
    { id: 'account', label: t('settings.account'), icon: Shield },
  ]

  const [settings, setSettings] = useState(() => {
    const stored = loadSettings()
    return {
      notifications: { ...DEFAULT_NOTIFICATIONS, ...stored?.notifications },
      privacy: { ...DEFAULT_PRIVACY, ...stored?.privacy },
    }
  })

  const [deleteConfirm, setDeleteConfirm] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [settingsSaved, setSettingsSaved] = useState(false)

  const handleNotificationToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: !prev.notifications[key] },
    }))
    setSettingsSaved(false)
  }

  const handlePrivacyToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      privacy: { ...prev.privacy, [key]: !prev.privacy[key] },
    }))
    setSettingsSaved(false)
  }

  const handleSaveSettings = () => {
    saveSettings(settings)
    setSettingsSaved(true)
    setTimeout(() => setSettingsSaved(false), 3000)
  }

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== 'SUPPRIMER') return
    setDeleting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      logout()
    } catch { /* ignore */ }
    finally { setDeleting(false) }
  }

  return (
    <div className="min-h-screen">
      {/* Header banner */}
      <div className="h-28 md:h-36 bg-gradient-to-r from-base-300/50 via-base-300/30 to-base-300/50 border-b border-base-200" />

      <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-10">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">{t('settings.title')}</h1>
          <p className="text-sm text-base-content/50 mt-1">{t('settings.managePreferences')}</p>
        </div>

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

        {/* Notifications */}
        {activeTab === 'notifications' && (
          <div className="max-w-2xl space-y-4">
            <SectionCard
              icon={Mail}
              title={t('settings.emailNotifications')}
              description={t('settings.emailNotificationsDesc')}
              iconColor="text-blue-500"
            >
              <ToggleRow label={t('cart.orders')} description={t('settings.emailOrdersDesc')} checked={settings.notifications.emailOrders} onChange={() => handleNotificationToggle('emailOrders')} />
              <ToggleRow label={t('common.promotions')} description={t('settings.emailPromotionsDesc')} checked={settings.notifications.emailPromotions} onChange={() => handleNotificationToggle('emailPromotions')} />
              <ToggleRow label={t('settings.newsletter')} description={t('settings.emailNewsletterDesc')} checked={settings.notifications.emailNewsletter} onChange={() => handleNotificationToggle('emailNewsletter')} />
            </SectionCard>

            <SectionCard
              icon={Smartphone}
              title={t('settings.pushNotifications')}
              description={t('settings.pushNotificationsDesc')}
              iconColor="text-emerald-500"
            >
              <ToggleRow label={t('cart.orders')} description={t('settings.pushOrdersDesc')} checked={settings.notifications.pushOrders} onChange={() => handleNotificationToggle('pushOrders')} />
              <ToggleRow label={t('common.promotions')} description={t('settings.pushPromotionsDesc')} checked={settings.notifications.pushPromotions} onChange={() => handleNotificationToggle('pushPromotions')} />
            </SectionCard>

            <SectionCard
              icon={MessageSquare}
              title={t('settings.smsNotifications')}
              description={t('settings.smsNotificationsDesc')}
              iconColor="text-violet-500"
            >
              <ToggleRow label={t('cart.orders')} description={t('settings.smsOrdersDesc')} checked={settings.notifications.smsOrders} onChange={() => handleNotificationToggle('smsOrders')} />
              <ToggleRow label={t('common.promotions')} description={t('settings.smsPromotionsDesc')} checked={settings.notifications.smsPromotions} onChange={() => handleNotificationToggle('smsPromotions')} />
            </SectionCard>

            <div className="flex justify-end pt-2 pb-4">
              <button type="button" className="btn btn-primary" onClick={handleSaveSettings}>
                <Save size={16} />
                {t('common.save')}
              </button>
            </div>
          </div>
        )}

        {/* Privacy */}
        {activeTab === 'privacy' && (
          <div className="max-w-2xl space-y-4">
            <SectionCard
              icon={Eye}
              title={t('settings.privacySettings')}
              description={t('settings.privacyDesc')}
              iconColor="text-cyan-500"
            >
              <ToggleRow label={t('settings.showEmail')} description={t('settings.showEmailDesc')} checked={settings.privacy.showEmail} onChange={() => handlePrivacyToggle('showEmail')} />
              <ToggleRow label={t('settings.showPhone')} description={t('settings.showPhoneDesc')} checked={settings.privacy.showPhone} onChange={() => handlePrivacyToggle('showPhone')} />
              <ToggleRow label={t('settings.profileVisible')} description={t('settings.profileVisibleDesc')} checked={settings.privacy.profileVisible} onChange={() => handlePrivacyToggle('profileVisible')} />
              <ToggleRow label={t('settings.activityVisible')} description={t('settings.activityVisibleDesc')} checked={settings.privacy.activityVisible} onChange={() => handlePrivacyToggle('activityVisible')} />
            </SectionCard>

            <div className="flex justify-end pt-2 pb-4">
              <button type="button" className="btn btn-primary" onClick={handleSaveSettings}>
                <Save size={16} />
                {t('common.save')}
              </button>
            </div>
          </div>
        )}

        {/* Account / Danger Zone */}
        {activeTab === 'account' && (
          <div className="max-w-2xl">
            <div className="card bg-base-100 border border-error/20 shadow-sm">
              <div className="card-body p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-error/10 flex items-center justify-center shrink-0">
                    <AlertTriangle size={18} className="text-error" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-error">{t('settings.dangerZone')}</h3>
                    <p className="text-xs text-base-content/45">{t('settings.deleteAccountWarning')}</p>
                  </div>
                </div>

                <div className="bg-error/5 rounded-box p-5 border border-error/10 mt-4">
                  <h4 className="font-medium text-sm mb-2">
                    {t('settings.confirmDeletion')}
                  </h4>
                  <p className="text-xs text-base-content/55 mb-3">
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
                      <span className="loading loading-spinner loading-sm" />
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
    </div>
  )
}

import { useState } from 'react'
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

const TABS = [
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'addresses', label: 'Adresses', icon: MapPin },
  { id: 'privacy', label: 'Confidentialité', icon: Eye },
  { id: 'account', label: 'Compte', icon: Shield },
]

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
  const { user, updateUser, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('notifications')

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
        title="Paramètres"
        subtitle="Gérez vos préférences et votre compte"
      />

      <Tabs
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-6"
      />

      {settingsSaved && (
        <Alert type="success" className="mb-6" closable onClose={() => setSettingsSaved(false)}>
          Paramètres enregistrés avec succès.
        </Alert>
      )}

      {activeTab === 'notifications' && (
        <div className="max-w-2xl">
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Mail size={20} />
                Notifications par email
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label="Commandes"
                  description="Recevoir des notifications pour vos commandes"
                  checked={notifications.emailOrders}
                  onChange={() => handleNotificationToggle('emailOrders')}
                />
                <Toggle
                  label="Promotions"
                  description="Offres spéciales et réductions"
                  checked={notifications.emailPromotions}
                  onChange={() => handleNotificationToggle('emailPromotions')}
                />
                <Toggle
                  label="Newsletter"
                  description="Actualités et nouveautés"
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
                Notifications push
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label="Commandes"
                  description="Notifications push pour vos commandes"
                  checked={notifications.pushOrders}
                  onChange={() => handleNotificationToggle('pushOrders')}
                />
                <Toggle
                  label="Promotions"
                  description="Notifications push pour les offres"
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
                Notifications SMS
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label="Commandes"
                  description="SMS pour le suivi de vos commandes"
                  checked={notifications.smsOrders}
                  onChange={() => handleNotificationToggle('smsOrders')}
                />
                <Toggle
                  label="Promotions"
                  description="SMS promotionnels"
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
              Enregistrer
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
              Ajouter une adresse
            </button>
          </div>

          {showAddressForm && (
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body">
                <h3 className="card-title text-sm mb-2">
                  {editingAddress ? 'Modifier l\'adresse' : 'Nouvelle adresse'}
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
                <h3 className="font-semibold">Aucune adresse</h3>
                <p className="text-sm text-base-content/50">
                  Ajoutez une adresse de livraison.
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
                Paramètres de confidentialité
              </h3>
              <div className="divide-y divide-base-200">
                <Toggle
                  label="Afficher l'email"
                  description="Rendre votre email visible sur votre profil public"
                  checked={privacy.showEmail}
                  onChange={() => handlePrivacyToggle('showEmail')}
                />
                <Toggle
                  label="Afficher le téléphone"
                  description="Rendre votre numéro visible sur votre profil"
                  checked={privacy.showPhone}
                  onChange={() => handlePrivacyToggle('showPhone')}
                />
                <Toggle
                  label="Profil visible"
                  description="Votre profil est visible par les autres utilisateurs"
                  checked={privacy.profileVisible}
                  onChange={() => handlePrivacyToggle('profileVisible')}
                />
                <Toggle
                  label="Activité visible"
                  description="Afficher votre activité récente aux autres"
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
              Enregistrer
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
                Zone dangereuse
              </h3>
              <p className="text-sm text-base-content/70 mb-4">
                La suppression de votre compte est irréversible. Toutes vos
                données seront définitivement supprimées.
              </p>

              <div className="bg-base-100 rounded-box p-4 border border-base-300">
                <h4 className="font-semibold text-sm mb-3">
                  Confirmer la suppression
                </h4>
                <p className="text-xs text-base-content/60 mb-3">
                  Tapez <span className="font-mono font-bold">SUPPRIMER</span> pour
                  confirmer.
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
                      Supprimer mon compte
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

import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import {
  User,
  Mail,
  Phone,
  Lock,
  Camera,
  Save,
  Shield,
  MapPin,
} from 'lucide-react'
import { Header } from '../../components/organisms/Header'
import AddressForm from '../../components/organisms/AddressForm'
import Tabs from '../../components/atoms/Tabs'
import FormField from '../../components/molecules/FormField'
import AddressCard from '../../components/molecules/AddressCard'
import Alert from '../../components/atoms/Alert'
import Spinner from '../../components/atoms/Spinner'

const TABS = [
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'addresses', label: 'Adresses', icon: MapPin },
  { id: 'security', label: 'Sécurité', icon: Shield },
]

export default function UserProfilePage() {
  const { user, updateUser } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')

  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  })
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [profileSaving, setProfileSaving] = useState(false)
  const [passwordSaving, setPasswordSaving] = useState(false)
  const [profileSuccess, setProfileSuccess] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [profileError, setProfileError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [passwordErrors, setPasswordErrors] = useState({})
  const [addresses, setAddresses] = useState(user?.addresses || [])
  const [editingAddress, setEditingAddress] = useState(null)
  const [showAddressForm, setShowAddressForm] = useState(false)

  const handleProfileChange = (field, value) => {
    setProfileForm((prev) => ({ ...prev, [field]: value }))
    setProfileError(null)
    setProfileSuccess(false)
  }

  const handleProfileSave = async () => {
    if (!profileForm.name.trim()) {
      setProfileError('Le nom est requis.')
      return
    }
    setProfileSaving(true)
    setProfileError(null)
    try {
      const updated = { ...user, ...profileForm }
      updateUser(updated)
      setProfileSuccess(true)
      setTimeout(() => setProfileSuccess(false), 3000)
    } catch (err) {
      setProfileError(err?.message || 'Erreur lors de la mise à jour du profil.')
    } finally {
      setProfileSaving(false)
    }
  }

  const validatePasswordForm = () => {
    const errors = {}
    if (!passwordForm.currentPassword) {
      errors.currentPassword = 'Le mot de passe actuel est requis.'
    }
    if (!passwordForm.newPassword) {
      errors.newPassword = 'Le nouveau mot de passe est requis.'
    } else if (passwordForm.newPassword.length < 8) {
      errors.newPassword = 'Le mot de passe doit contenir au moins 8 caractères.'
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      errors.confirmPassword = 'Les mots de passe ne correspondent pas.'
    }
    setPasswordErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handlePasswordSave = async () => {
    if (!validatePasswordForm()) return

    setPasswordSaving(true)
    setPasswordError(null)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setPasswordSuccess(true)
      setPasswordErrors({})
      setTimeout(() => setPasswordSuccess(false), 3000)
    } catch (err) {
      setPasswordError(err?.message || 'Erreur lors du changement de mot de passe.')
    } finally {
      setPasswordSaving(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header
        title="Mon profil"
        subtitle="Gérez vos informations personnelles"
      />

      <Tabs
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-6"
      />

      {activeTab === 'profile' && (
        <div className="max-w-2xl space-y-6">
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="avatar placeholder">
                    <div className="bg-primary text-primary-content w-20 rounded-full">
                      <span className="text-3xl">
                        {user?.name?.charAt(0)?.toUpperCase() || '?'}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-circle btn-sm btn-primary absolute -bottom-1 -right-1"
                    title="Changer l'avatar"
                  >
                    <Camera size={14} />
                  </button>
                </div>
                <div>
                  <h2 className="text-xl font-bold">{user?.name}</h2>
                  <span className="badge badge-primary badge-sm">{user?.role}</span>
                </div>
              </div>

              {profileSuccess && (
                <Alert type="success" className="mb-4">
                  Profil mis à jour avec succès.
                </Alert>
              )}
              {profileError && (
                <Alert type="error" closable onClose={() => setProfileError(null)} className="mb-4">
                  {profileError}
                </Alert>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Nom complet" required htmlFor="profile-name">
                  <input
                    id="profile-name"
                    type="text"
                    className="input input-bordered w-full"
                    value={profileForm.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                  />
                </FormField>
                <FormField label="Email" required htmlFor="profile-email">
                  <input
                    id="profile-email"
                    type="email"
                    className="input input-bordered w-full"
                    value={profileForm.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                  />
                </FormField>
                <FormField label="Téléphone" htmlFor="profile-phone">
                  <input
                    id="profile-phone"
                    type="tel"
                    className="input input-bordered w-full"
                    placeholder="+221 77 000 00 00"
                    value={profileForm.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                  />
                </FormField>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={profileSaving}
                  onClick={handleProfileSave}
                >
                  {profileSaving ? (
                    <Spinner size="sm" />
                  ) : (
                    <>
                      <Save size={16} />
                      Enregistrer
                    </>
                  )}
                </button>
              </div>
            </div>
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
              Ajouter une adresse
            </button>
          </div>

          {showAddressForm && (
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
          )}

          {addresses.length === 0 && !showAddressForm ? (
            <div className="card bg-base-100 border border-base-200">
              <div className="card-body items-center text-center py-12">
                <MapPin size={48} className="text-base-content/20 mb-3" />
                <h3 className="font-semibold">Aucune adresse enregistrée</h3>
                <p className="text-sm text-base-content/50 mb-4">
                  Ajoutez une adresse pour vos livraisons.
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    setEditingAddress(null)
                    setShowAddressForm(true)
                  }}
                >
                  Ajouter une adresse
                </button>
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

      {activeTab === 'security' && (
        <div className="max-w-2xl">
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Lock size={20} />
                Changer le mot de passe
              </h3>

              {passwordSuccess && (
                <Alert type="success" className="mb-4">
                  Mot de passe modifié avec succès.
                </Alert>
              )}
              {passwordError && (
                <Alert type="error" closable onClose={() => setPasswordError(null)} className="mb-4">
                  {passwordError}
                </Alert>
              )}

              <div className="flex flex-col gap-4">
                <FormField
                  label="Mot de passe actuel"
                  required
                  error={passwordErrors.currentPassword}
                  htmlFor="current-password"
                >
                  <input
                    id="current-password"
                    type="password"
                    className="input input-bordered w-full"
                    value={passwordForm.currentPassword}
                    onChange={(e) => {
                      setPasswordForm((prev) => ({
                        ...prev,
                        currentPassword: e.target.value,
                      }))
                      setPasswordErrors((prev) => ({ ...prev, currentPassword: undefined }))
                    }}
                  />
                </FormField>
                <FormField
                  label="Nouveau mot de passe"
                  required
                  error={passwordErrors.newPassword}
                  hint="Minimum 8 caractères"
                  htmlFor="new-password"
                >
                  <input
                    id="new-password"
                    type="password"
                    className="input input-bordered w-full"
                    value={passwordForm.newPassword}
                    onChange={(e) => {
                      setPasswordForm((prev) => ({
                        ...prev,
                        newPassword: e.target.value,
                      }))
                      setPasswordErrors((prev) => ({ ...prev, newPassword: undefined }))
                    }}
                  />
                </FormField>
                <FormField
                  label="Confirmer le mot de passe"
                  required
                  error={passwordErrors.confirmPassword}
                  htmlFor="confirm-password"
                >
                  <input
                    id="confirm-password"
                    type="password"
                    className="input input-bordered w-full"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => {
                      setPasswordForm((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                      setPasswordErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                    }}
                  />
                </FormField>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={passwordSaving}
                  onClick={handlePasswordSave}
                >
                  {passwordSaving ? (
                    <Spinner size="sm" />
                  ) : (
                    <>
                      <Lock size={16} />
                      Modifier le mot de passe
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

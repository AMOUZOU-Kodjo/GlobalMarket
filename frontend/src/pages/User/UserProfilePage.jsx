import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
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
  Trash2,
  Plus,
  Calendar,
  ShoppingBag,
  Heart,
  Star,
} from 'lucide-react'
import { Header } from '../../components/organisms/Header'
import AddressForm from '../../components/organisms/AddressForm'
import Tabs from '../../components/atoms/Tabs'
import FormField from '../../components/molecules/FormField'
import AddressCard from '../../components/molecules/AddressCard'
import Alert from '../../components/atoms/Alert'
import Spinner from '../../components/atoms/Spinner'
import authService from '../../services/auth.service'
import addressService from '../../services/address.service'
import uploadService from '../../services/upload.service'

export default function UserProfilePage() {
  const { t } = useTranslation()
  const { user, updateUser } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  const fileInputRef = useRef(null)

  const TABS = [
    { id: 'profile', label: t('profile.personalInfo'), icon: User },
    { id: 'addresses', label: t('profile.addresses'), icon: MapPin },
    { id: 'security', label: t('profile.security'), icon: Shield },
  ]

  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
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
  const [avatarUploading, setAvatarUploading] = useState(false)

  const [addresses, setAddresses] = useState([])
  const [addressesLoading, setAddressesLoading] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)
  const [showAddressForm, setShowAddressForm] = useState(false)
  const [addressSaving, setAddressSaving] = useState(false)
  const [addressError, setAddressError] = useState(null)
  const [wishlistCount, setWishlistCount] = useState(0)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('marcostore_wishlist') || '[]')
      setWishlistCount(stored.length)
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    if (activeTab === 'addresses') {
      setAddressesLoading(true)
      addressService.getAll()
        .then((data) => setAddresses(data))
        .catch(() => setAddressError(t('profile.updateError')))
        .finally(() => setAddressesLoading(false))
    }
  }, [activeTab])

  useEffect(() => {
    if (user) {
      setProfileForm({ name: user.name || '', phone: user.phone || '' })
    }
  }, [user])

  const handleAvatarClick = () => fileInputRef.current?.click()

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setAvatarUploading(true)
    try {
      const result = await uploadService.uploadImage(file)
      const avatarUrl = result.url || result.path || result
      const updated = { ...user, avatar: avatarUrl }
      await authService.updateProfile({ avatar: avatarUrl })
      updateUser(updated)
    } catch (err) {
      setProfileError(err?.message || t('profile.updateError'))
    } finally {
      setAvatarUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const handleProfileChange = (field, value) => {
    setProfileForm((prev) => ({ ...prev, [field]: value }))
    setProfileError(null)
    setProfileSuccess(false)
  }

  const handleProfileSave = async () => {
    if (!profileForm.name.trim()) {
      setProfileError(t('validation.nameRequired'))
      return
    }
    setProfileSaving(true)
    setProfileError(null)
    try {
      const updated = await authService.updateProfile(profileForm)
      updateUser({ ...user, ...updated })
      setProfileSuccess(true)
      setTimeout(() => setProfileSuccess(false), 3000)
    } catch (err) {
      setProfileError(err?.message || t('profile.updateError'))
    } finally {
      setProfileSaving(false)
    }
  }

  const validatePasswordForm = () => {
    const errors = {}
    if (!passwordForm.currentPassword) {
      errors.currentPassword = t('profile.currentPasswordRequired')
    }
    if (!passwordForm.newPassword) {
      errors.newPassword = t('profile.newPasswordRequired')
    } else if (passwordForm.newPassword.length < 8) {
      errors.newPassword = t('validation.passwordMinLength')
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      errors.confirmPassword = t('auth.passwordMismatch')
    }
    setPasswordErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handlePasswordSave = async () => {
    if (!validatePasswordForm()) return
    setPasswordSaving(true)
    setPasswordError(null)
    try {
      await authService.changePassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      })
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setPasswordSuccess(true)
      setPasswordErrors({})
      setTimeout(() => setPasswordSuccess(false), 3000)
    } catch (err) {
      setPasswordError(err?.message || t('profile.passwordChangeError'))
    } finally {
      setPasswordSaving(false)
    }
  }

  const handleAddressSave = async (addressData) => {
    setAddressSaving(true)
    setAddressError(null)
    try {
      if (editingAddress?.id) {
        await addressService.update(editingAddress.id, addressData)
      } else {
        await addressService.create(addressData)
      }
      const data = await addressService.getAll()
      setAddresses(data)
      setShowAddressForm(false)
      setEditingAddress(null)
    } catch (err) {
      setAddressError(err?.message || t('profile.updateError'))
    } finally {
      setAddressSaving(false)
    }
  }

  const handleAddressDelete = async (address) => {
    try {
      await addressService.remove(address.id)
      setAddresses((prev) => prev.filter((a) => a.id !== address.id))
    } catch (err) {
      setAddressError(err?.message || t('profile.updateError'))
    }
  }

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })
    : null

  const roleLabel = user?.role === 'admin' ? t('nav.admin')
    : user?.role === 'seller' ? t('nav.seller')
    : t('nav.myAccount')

  return (
    <div className="min-h-screen">
      {/* Cover banner */}
      <div className="h-40 md:h-52 bg-gradient-to-br from-primary via-primary/80 to-secondary relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Avatar + Info */}
        <div className="relative -mt-16 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
            {/* Avatar */}
            <div className="relative group shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-base-100 shadow-lg overflow-hidden bg-base-200">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
                    <span className="text-4xl md:text-5xl font-bold">
                      {user?.name?.charAt(0)?.toUpperCase() || '?'}
                    </span>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                title={t('profile.changeAvatar')}
                onClick={handleAvatarClick}
                disabled={avatarUploading}
              >
                {avatarUploading ? (
                  <span className="loading loading-spinner loading-sm text-white" />
                ) : (
                  <Camera size={24} className="text-white" />
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>

            {/* Name + meta */}
            <div className="flex-1 text-center sm:text-left pb-1">
              <h1 className="text-2xl md:text-3xl font-bold">{user?.name || t('profile.anonymous')}</h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1.5">
                <span className="badge badge-primary badge-sm font-medium">{roleLabel}</span>
                {memberSince && (
                  <span className="text-xs text-base-content/50 flex items-center gap-1">
                    <Calendar size={12} />
                    {t('profile.memberSince')} {memberSince}
                  </span>
                )}
              </div>
              <p className="text-sm text-base-content/50 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                <Mail size={13} />
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
          {[
            { icon: ShoppingBag, label: t('profile.orders'), value: '—', color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { icon: Heart, label: t('profile.wishlist'), value: wishlistCount || '0', color: 'text-pink-500', bg: 'bg-pink-500/10' },
            { icon: Star, label: t('profile.reviews'), value: '—', color: 'text-amber-500', bg: 'bg-amber-500/10' },
          ].map((stat) => (
            <div key={stat.label} className="card bg-base-100 border border-base-200 shadow-sm">
              <div className="card-body p-3 md:p-4 items-center text-center gap-2">
                <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center`}>
                  <stat.icon size={18} className={stat.color} />
                </div>
                <div>
                  <p className="text-lg font-bold leading-none">{stat.value}</p>
                  <p className="text-xs text-base-content/50 mt-0.5">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-6"
        />

        {/* Profile tab */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl space-y-6">
            <div className="card bg-base-100 border border-base-200 shadow-sm">
              <div className="card-body p-6">
                <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  {t('profile.personalInfo')}
                </h3>

                {profileSuccess && (
                  <Alert type="success" className="mb-4">
                    {t('profile.updated')}
                  </Alert>
                )}
                {profileError && (
                  <Alert type="error" closable onClose={() => setProfileError(null)} className="mb-4">
                    {profileError}
                  </Alert>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label={t('auth.fullName')} required htmlFor="profile-name">
                    <input
                      id="profile-name"
                      type="text"
                      className="input input-bordered w-full"
                      value={profileForm.name}
                      onChange={(e) => handleProfileChange('name', e.target.value)}
                    />
                  </FormField>
                  <FormField label={t('auth.email')} htmlFor="profile-email">
                    <input
                      id="profile-email"
                      type="email"
                      className="input input-bordered w-full bg-base-200/50"
                      value={user?.email || ''}
                      disabled
                    />
                  </FormField>
                  <FormField label={t('checkout.phone')} htmlFor="profile-phone">
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

                <div className="flex justify-end mt-6 pt-4 border-t border-base-200">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={profileSaving}
                    onClick={handleProfileSave}
                  >
                    {profileSaving ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      <>
                        <Save size={16} />
                        {t('common.save')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Addresses tab */}
        {activeTab === 'addresses' && (
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-base-content/60">
                {addresses.length > 0
                  ? `${addresses.length} ${t('profile.addresses').toLowerCase()}`
                  : t('profile.noAddresses')
                }
              </p>
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

            {addressError && (
              <Alert type="error" closable onClose={() => setAddressError(null)}>
                {addressError}
              </Alert>
            )}

            {showAddressForm && (
              <div className="card bg-base-100 border border-base-200 shadow-sm">
                <div className="card-body">
                  <h3 className="font-semibold text-sm mb-2">
                    {editingAddress?.id ? t('profile.editAddress') : t('profile.newAddress')}
                  </h3>
                  <AddressForm
                    address={editingAddress}
                    onSave={handleAddressSave}
                    onCancel={() => { setShowAddressForm(false); setEditingAddress(null) }}
                    loading={addressSaving}
                  />
                </div>
              </div>
            )}

            {addressesLoading ? (
              <div className="flex justify-center py-12">
                <Spinner text={t('common.loading')} />
              </div>
            ) : addresses.length === 0 && !showAddressForm ? (
              <div className="card bg-base-100 border border-base-200 border-dashed shadow-sm">
                <div className="card-body items-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <MapPin size={28} className="text-primary/40" />
                  </div>
                  <h3 className="font-semibold">{t('profile.noAddresses')}</h3>
                  <p className="text-sm text-base-content/50 max-w-xs">
                    {t('profile.addAddressHint')}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm mt-2"
                    onClick={() => { setEditingAddress(null); setShowAddressForm(true) }}
                  >
                    <Plus size={16} />
                    {t('profile.addAddress')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((address) => (
                  <AddressCard
                    key={address.id}
                    address={address}
                    onEdit={(addr) => { setEditingAddress(addr); setShowAddressForm(true) }}
                    onDelete={handleAddressDelete}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Security tab */}
        {activeTab === 'security' && (
          <div className="max-w-2xl">
            <div className="card bg-base-100 border border-base-200 shadow-sm">
              <div className="card-body p-6">
                <h3 className="font-semibold text-base mb-1 flex items-center gap-2">
                  <Lock size={18} className="text-primary" />
                  {t('profile.changePassword')}
                </h3>
                <p className="text-xs text-base-content/50 mb-5">
                  {t('profile.securityDesc')}
                </p>

                {passwordSuccess && (
                  <Alert type="success" className="mb-4">
                    {t('profile.passwordChanged')}
                  </Alert>
                )}
                {passwordError && (
                  <Alert type="error" closable onClose={() => setPasswordError(null)} className="mb-4">
                    {passwordError}
                  </Alert>
                )}

                <div className="flex flex-col gap-4 max-w-md">
                  <FormField
                    label={t('profile.currentPassword')}
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
                        setPasswordForm((prev) => ({ ...prev, currentPassword: e.target.value }))
                        setPasswordErrors((prev) => ({ ...prev, currentPassword: undefined }))
                      }}
                    />
                  </FormField>
                  <FormField
                    label={t('profile.newPassword')}
                    required
                    error={passwordErrors.newPassword}
                    hint={t('validation.passwordHint')}
                    htmlFor="new-password"
                  >
                    <input
                      id="new-password"
                      type="password"
                      className="input input-bordered w-full"
                      value={passwordForm.newPassword}
                      onChange={(e) => {
                        setPasswordForm((prev) => ({ ...prev, newPassword: e.target.value }))
                        setPasswordErrors((prev) => ({ ...prev, newPassword: undefined }))
                      }}
                    />
                  </FormField>
                  <FormField
                    label={t('auth.confirmPassword')}
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
                        setPasswordForm((prev) => ({ ...prev, confirmPassword: e.target.value }))
                        setPasswordErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                      }}
                    />
                  </FormField>
                </div>

                <div className="flex justify-end mt-6 pt-4 border-t border-base-200">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={passwordSaving}
                    onClick={handlePasswordSave}
                  >
                    {passwordSaving ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      <>
                        <Lock size={16} />
                        {t('profile.changePassword')}
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

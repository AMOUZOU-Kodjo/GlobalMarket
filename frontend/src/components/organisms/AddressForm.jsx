import { useState } from 'react'
import { MapPin } from 'lucide-react'
import FormField from '../molecules/FormField'

const DEFAULT_ADDRESS = {
  firstName: '', lastName: '', street: '', street2: '', city: '', state: '', zip: '', country: 'France', phone: '', isDefault: false,
}

export default function AddressForm({ address, onSave, onCancel, loading }) {
  const [form, setForm] = useState({ ...DEFAULT_ADDRESS, ...address })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'Requis'
    if (!form.lastName.trim()) errs.lastName = 'Requis'
    if (!form.street.trim()) errs.street = 'Requis'
    if (!form.city.trim()) errs.city = 'Requis'
    if (!form.zip.trim()) errs.zip = 'Requis'
    if (!form.country.trim()) errs.country = 'Requis'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) onSave?.(form)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={20} className="text-primary" />
        <h3 className="font-bold text-lg">{address ? 'Modifier l\'adresse' : 'Nouvelle adresse'}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Prénom" error={errors.firstName} required>
          <input name="firstName" value={form.firstName} onChange={handleChange} className="input input-bordered w-full" />
        </FormField>
        <FormField label="Nom" error={errors.lastName} required>
          <input name="lastName" value={form.lastName} onChange={handleChange} className="input input-bordered w-full" />
        </FormField>
      </div>
      <FormField label="Adresse" error={errors.street} required>
        <input name="street" value={form.street} onChange={handleChange} className="input input-bordered w-full" placeholder="Numéro et nom de rue" />
      </FormField>
      <FormField label="Complément d'adresse">
        <input name="street2" value={form.street2} onChange={handleChange} className="input input-bordered w-full" placeholder="Bâtiment, étage, etc." />
      </FormField>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <FormField label="Code postal" error={errors.zip} required>
          <input name="zip" value={form.zip} onChange={handleChange} className="input input-bordered w-full" />
        </FormField>
        <FormField label="Ville" error={errors.city} required>
          <input name="city" value={form.city} onChange={handleChange} className="input input-bordered w-full" />
        </FormField>
        <FormField label="Pays" error={errors.country} required>
          <select name="country" value={form.country} onChange={handleChange} className="select select-bordered w-full">
            <option value="France">France</option>
            <option value="Belgique">Belgique</option>
            <option value="Suisse">Suisse</option>
            <option value="Canada">Canada</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Sénégal">Sénégal</option>
            <option value="Maroc">Maroc</option>
          </select>
        </FormField>
      </div>
      <FormField label="Téléphone">
        <input name="phone" value={form.phone} onChange={handleChange} className="input input-bordered w-full" placeholder="+33 6 12 34 56 78" />
      </FormField>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" name="isDefault" checked={form.isDefault} onChange={handleChange} className="checkbox checkbox-sm checkbox-primary" />
        <span className="text-sm">Définir comme adresse par défaut</span>
      </label>
      <div className="flex gap-2 justify-end">
        {onCancel && <button type="button" className="btn btn-ghost" onClick={onCancel}>Annuler</button>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Enregistrer'}
        </button>
      </div>
    </form>
  )
}

import { useState, useEffect } from 'react'
import {
  Wallet, CreditCard, AlertCircle, Save, Calendar, ArrowDownLeft,
} from 'lucide-react'
import sellerService from '../../services/seller.service'
import FormField from '../../components/molecules/FormField'
import DataTable from '../../components/organisms/DataTable'
import Spinner from '../../components/atoms/Spinner'
import EmptyState from '../../components/atoms/EmptyState'
import formatCurrency from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'

const PAYOUT_COLUMNS = [
  {
    key: 'createdAt',
    label: 'Date',
    render: (val) => <span className="text-sm">{formatDate(val)}</span>,
  },
  {
    key: 'amount',
    label: 'Montant',
    render: (val) => <span className="font-medium">{formatCurrency(val)}</span>,
  },
  {
    key: 'status',
    label: 'Statut',
    render: (val) => {
      const variants = { completed: 'badge-success', pending: 'badge-warning', processing: 'badge-info' }
      return (
        <span className={`badge badge-sm ${variants[val] || 'badge-ghost'}`}>
          {val === 'completed' ? 'Effectué' : val === 'pending' ? 'En attente' : val === 'processing' ? 'En cours' : val}
        </span>
      )
    },
  },
  {
    key: 'method',
    label: 'Méthode',
    render: (val) => <span className="text-sm opacity-70">{val || 'Virement bancaire'}</span>,
  },
]

export default function SellerPayoutsPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [bankForm, setBankForm] = useState({ iban: '', bic: '', accountHolder: '' })
  const [bankErrors, setBankErrors] = useState({})

  useEffect(() => {
    const fetchPayouts = async () => {
      try {
        const res = await sellerService.getPayouts()
        const d = res.data || res
        setData(d)
        if (d.bankAccount) {
          setBankForm({
            iban: d.bankAccount.iban || '',
            bic: d.bankAccount.bic || '',
            accountHolder: d.bankAccount.accountHolder || '',
          })
        }
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement des virements.')
      } finally {
        setLoading(false)
      }
    }
    fetchPayouts()
  }, [])

  const handleBankChange = (e) => {
    const { name, value } = e.target
    setBankForm((prev) => ({ ...prev, [name]: value }))
    if (bankErrors[name]) setBankErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateBank = () => {
    const errs = {}
    if (!bankForm.iban.trim()) errs.iban = 'L\'IBAN est requis'
    if (!bankForm.bic.trim()) errs.bic = 'Le code BIC/SWIFT est requis'
    if (!bankForm.accountHolder.trim()) errs.accountHolder = 'Le titulaire du compte est requis'
    setBankErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleBankSubmit = async (e) => {
    e.preventDefault()
    if (!validateBank()) return

    setSaving(true)
    setError(null)
    setSuccess(null)
    try {
      await sellerService.updateBankAccount(bankForm)
      setSuccess('Coordonnées bancaires enregistrées avec succès.')
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
        <Spinner size="lg" text="Chargement des virements..." />
      </div>
    )
  }

  const balance = data?.balance ?? 0
  const nextPayoutDate = data?.nextPayoutDate
  const payouts = data?.payouts || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Virements</h1>
        <p className="text-base-content/60 text-sm">Gérez vos revenus et coordonnées bancaires</p>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm border-l-4 border-l-success">
          <div className="card-body p-4">
            <p className="text-sm opacity-60">Solde disponible</p>
            <p className="text-2xl font-bold">{formatCurrency(balance)}</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm border-l-4 border-l-primary">
          <div className="card-body p-4">
            <p className="text-sm opacity-60">Prochain virement</p>
            <p className="text-lg font-bold">
              {nextPayoutDate ? formatDate(nextPayoutDate) : 'Non défini'}
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm border-l-4 border-l-accent">
          <div className="card-body p-4">
            <p className="text-sm opacity-60">Total virements</p>
            <p className="text-lg font-bold">{payouts.length}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">
              <CreditCard size={18} />
              Coordonnées bancaires
            </h2>
            <form onSubmit={handleBankSubmit} className="space-y-4">
              <FormField label="Titulaire du compte" required error={bankErrors.accountHolder} htmlFor="accountHolder">
                <input
                  id="accountHolder"
                  name="accountHolder"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Jean Dupont"
                  value={bankForm.accountHolder}
                  onChange={handleBankChange}
                />
              </FormField>

              <FormField label="IBAN" required error={bankErrors.iban} htmlFor="iban">
                <input
                  id="iban"
                  name="iban"
                  type="text"
                  className="input input-bordered w-full font-mono"
                  placeholder="FR76 1234 5678 9012 3456 7890 123"
                  value={bankForm.iban}
                  onChange={handleBankChange}
                />
              </FormField>

              <FormField label="Code BIC/SWIFT" required error={bankErrors.bic} htmlFor="bic">
                <input
                  id="bic"
                  name="bic"
                  type="text"
                  className="input input-bordered w-full font-mono"
                  placeholder="BNPAFRPP"
                  value={bankForm.bic}
                  onChange={handleBankChange}
                />
              </FormField>

              <button
                type="submit"
                className="btn btn-primary btn-sm"
                disabled={saving}
              >
                {saving ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <Save size={14} />
                )}
                Enregistrer
              </button>
            </form>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">
              <ArrowDownLeft size={18} />
              Historique des virements
            </h2>
            {payouts.length === 0 ? (
              <EmptyState
                icon={Wallet}
                title="Aucun virement"
                description="Vous n'avez pas encore reçu de virement."
              />
            ) : (
              <DataTable
                columns={PAYOUT_COLUMNS}
                data={payouts}
                compact
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

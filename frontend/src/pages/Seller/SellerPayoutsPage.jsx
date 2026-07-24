import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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

export default function SellerPayoutsPage() {
  const { t } = useTranslation()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [bankForm, setBankForm] = useState({ iban: '', bic: '', accountHolder: '' })
  const [bankErrors, setBankErrors] = useState({})

  const PAYOUT_COLUMNS = [
    {
      key: 'createdAt',
      label: t('common.date'),
      render: (val) => <span className="text-sm">{formatDate(val)}</span>,
    },
    {
      key: 'amount',
      label: t('common.amount'),
      render: (val) => <span className="font-medium">{formatCurrency(val)}</span>,
    },
    {
      key: 'status',
      label: t('products.status'),
      render: (val) => {
        const variants = { completed: 'badge-success', pending: 'badge-warning', processing: 'badge-info' }
        return (
          <span className={`badge badge-sm ${variants[val] || 'badge-ghost'}`}>
            {val === 'completed' ? t('payouts.completed') : val === 'pending' ? t('payouts.pending') : val === 'processing' ? t('payouts.processing') : val}
          </span>
        )
      },
    },
    {
      key: 'method',
      label: t('payouts.method'),
      render: (val) => <span className="text-sm opacity-70">{val || t('payouts.bankTransfer')}</span>,
    },
  ]

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
        setError(err?.response?.data?.message || err?.message || t('errors.payoutsLoad'))
      } finally {
        setLoading(false)
      }
    }
    fetchPayouts()
  }, [t])

  const handleBankChange = (e) => {
    const { name, value } = e.target
    setBankForm((prev) => ({ ...prev, [name]: value }))
    if (bankErrors[name]) setBankErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateBank = () => {
    const errs = {}
    if (!bankForm.iban.trim()) errs.iban = t('validation.ibanRequired')
    if (!bankForm.bic.trim()) errs.bic = t('validation.bicRequired')
    if (!bankForm.accountHolder.trim()) errs.accountHolder = t('validation.accountHolderRequired')
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
      setSuccess(t('payouts.bankSaved'))
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err?.response?.data?.message || t('errors.payoutsSave'))
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" text={t('common.loadingPayouts')} />
      </div>
    )
  }

  const balance = data?.balance ?? 0
  const nextPayoutDate = data?.nextPayoutDate
  const payouts = data?.payouts || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('payouts.title')}</h1>
        <p className="text-base-content/60 text-sm">{t('payouts.subtitle')}</p>
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
            <p className="text-sm opacity-60">{t('payouts.availableBalance')}</p>
            <p className="text-2xl font-bold">{formatCurrency(balance)}</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm border-l-4 border-l-primary">
          <div className="card-body p-4">
            <p className="text-sm opacity-60">{t('payouts.nextPayout')}</p>
            <p className="text-lg font-bold">
              {nextPayoutDate ? formatDate(nextPayoutDate) : t('common.notDefined')}
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm border-l-4 border-l-accent">
          <div className="card-body p-4">
            <p className="text-sm opacity-60">{t('payouts.totalPayouts')}</p>
            <p className="text-lg font-bold">{payouts.length}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">
              <CreditCard size={18} />
              {t('payouts.bankDetails')}
            </h2>
            <form onSubmit={handleBankSubmit} className="space-y-4">
              <FormField label={t('payouts.accountHolder')} required error={bankErrors.accountHolder} htmlFor="accountHolder">
                <input
                  id="accountHolder"
                  name="accountHolder"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder={t('payouts.accountHolderPlaceholder')}
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
                {t('common.save')}
              </button>
            </form>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">
              <ArrowDownLeft size={18} />
              {t('payouts.history')}
            </h2>
            {payouts.length === 0 ? (
              <EmptyState
                icon={Wallet}
                title={t('payouts.noPayouts')}
                description={t('payouts.noPayoutsDescription')}
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

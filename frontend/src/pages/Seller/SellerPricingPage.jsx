import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from '../../components/organisms/Header'
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  ArrowRight,
  HelpCircle,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'

export default function SellerPricingPage() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState(null)

  const PLANS = [
    {
      name: 'Basic',
      icon: Star,
      price: '0',
      period: t('pricing.perMonth'),
      commission: '12%',
      color: 'primary',
      description: t('pricing.basicDescription'),
      features: [
        { text: t('pricing.featureCustomShop'), included: true },
        { text: t('pricing.featureUpTo50Products'), included: true },
        { text: t('pricing.featureBasicStats'), included: true },
        { text: t('pricing.featureEmailSupport'), included: true },
        { text: t('pricing.featurePhotosPer5'), included: true },
        { text: t('pricing.featurePromotions'), included: false },
        { text: t('pricing.featureAdvancedAnalytics'), included: false },
        { text: t('pricing.featurePrioritySupport'), included: false },
        { text: t('pricing.featureVerifiedBadge'), included: false },
        { text: t('pricing.featureSellerApi'), included: false },
      ],
      popular: false,
    },
    {
      name: 'Pro',
      icon: Zap,
      price: '29',
      period: t('pricing.perMonth'),
      commission: '8%',
      color: 'secondary',
      description: t('pricing.proDescription'),
      features: [
        { text: t('pricing.featureCustomShop'), included: true },
        { text: t('pricing.featureUnlimitedProducts'), included: true },
        { text: t('pricing.featureBasicStats'), included: true },
        { text: t('pricing.featureEmailSupport'), included: true },
        { text: t('pricing.featurePhotosPer10'), included: true },
        { text: t('pricing.featurePromotions'), included: true },
        { text: t('pricing.featureAdvancedAnalytics'), included: true },
        { text: t('pricing.featurePrioritySupport'), included: true },
        { text: t('pricing.featureVerifiedBadge'), included: true },
        { text: t('pricing.featureSellerApi'), included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: '99',
      period: t('pricing.perMonth'),
      commission: '5%',
      color: 'accent',
      description: t('pricing.enterpriseDescription'),
      features: [
        { text: t('pricing.featureCustomShop'), included: true },
        { text: t('pricing.featureUnlimitedProducts'), included: true },
        { text: t('pricing.featureBasicStats'), included: true },
        { text: t('pricing.featureEmailSupport'), included: true },
        { text: t('pricing.featurePhotosUnlimited'), included: true },
        { text: t('pricing.featurePromotions'), included: true },
        { text: t('pricing.featureAdvancedAnalytics'), included: true },
        { text: t('pricing.featurePrioritySupport'), included: true },
        { text: t('pricing.featureVerifiedBadge'), included: true },
        { text: t('pricing.featureSellerApi'), included: true },
      ],
      popular: false,
    },
  ]

  const FAQ_ITEMS = [
    { q: t('pricing.faqCommissionWhen'), a: t('pricing.faqCommissionWhenAnswer') },
    { q: t('pricing.faqChangePlan'), a: t('pricing.faqChangePlanAnswer') },
    { q: t('pricing.faqCancellation'), a: t('pricing.faqCancellationAnswer') },
    { q: t('pricing.faqCommissionCalc'), a: t('pricing.faqCommissionCalcAnswer') },
    { q: t('pricing.faqEnterpriseManager'), a: t('pricing.faqEnterpriseManagerAnswer') },
  ]

  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h1>
            <p className="text-lg text-base-content/70">
              {t('pricing.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 -mt-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.name}
                  className={`card bg-base-100 shadow-lg ${plan.popular ? 'ring-2 ring-secondary scale-[1.02]' : ''}`}
                >
                  {plan.popular && (
                    <div className="badge badge-secondary absolute -top-3 left-1/2 -translate-x-1/2 font-bold">
                      {t('pricing.mostPopular')}
                    </div>
                  )}
                  <div className="card-body">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={28} className={`text-${plan.color}`} />
                      <h3 className="card-title text-xl">{plan.name}</h3>
                    </div>
                    <p className="text-sm text-base-content/60 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price} €</span>
                      <span className="text-base-content/60">{plan.period}</span>
                      <p className="text-sm text-primary font-medium mt-1">{t('pricing.commissionLabel')} {plan.commission}</p>
                    </div>
                    <ul className="flex flex-col gap-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-2 text-sm">
                          {feature.included ? (
                            <Check size={16} className="text-success shrink-0" />
                          ) : (
                            <X size={16} className="text-base-content/30 shrink-0" />
                          )}
                          <span className={feature.included ? '' : 'text-base-content/40'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/seller/register"
                      className={`btn ${plan.popular ? 'btn-secondary' : 'btn-outline'} w-full`}
                    >
                      {t('pricing.getStarted')}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('pricing.faqTitle')}</h2>
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="collapse collapse-arrow bg-base-100 shadow-sm">
                <input
                  type="checkbox"
                  checked={openFaq === i}
                  onChange={() => setOpenFaq(openFaq === i ? null : i)}
                />
                <div className="collapse-title font-medium pr-12">{item.q}</div>
                <div className="collapse-content text-base-content/70">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">{t('pricing.ctaTitle')}</h2>
          <p className="mb-8 opacity-90">{t('pricing.ctaSubtitle')}</p>
          <Link to="/seller/register" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
            {t('pricing.openShop')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

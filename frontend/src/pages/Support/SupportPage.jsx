import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Search,
  Home,
  ShoppingCart,
  Package,
  Phone,
  ChevronDown,
  Shield,
  CreditCard,
  Truck,
  RotateCcw,
  HelpCircle,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'

export default function SupportPage() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [openCategory, setOpenCategory] = useState(null)
  const [openItems, setOpenItems] = useState({})

  const FAQ_CATEGORIES = [
    {
      title: t('support.catOrders'),
      icon: CreditCard,
      items: [
        { q: t('support.qPlaceOrder'), a: t('support.aPlaceOrder') },
        { q: t('support.qPaymentMethods'), a: t('support.aPaymentMethods') },
        { q: t('support.qModifyOrder'), a: t('support.aModifyOrder') },
        { q: t('support.qPromoCode'), a: t('support.aPromoCode') },
      ],
    },
    {
      title: t('support.catShipping'),
      icon: Truck,
      items: [
        { q: t('support.qShippingTimes'), a: t('support.aShippingTimes') },
        { q: t('support.qTrackOrder'), a: t('support.aTrackOrder') },
        { q: t('support.qInternational'), a: t('support.aInternational') },
      ],
    },
    {
      title: t('support.catReturns'),
      icon: RotateCcw,
      items: [
        { q: t('support.qReturnProduct'), a: t('support.aReturnProduct') },
        { q: t('support.qFreeReturn'), a: t('support.aFreeReturn') },
        { q: t('support.qRefund'), a: t('support.aRefund') },
      ],
    },
    {
      title: t('support.catAccount'),
      icon: Shield,
      items: [
        { q: t('support.qCreateAccount'), a: t('support.aCreateAccount') },
        { q: t('support.qForgotPassword'), a: t('support.aForgotPassword') },
        { q: t('support.qDeleteAccount'), a: t('support.aDeleteAccount') },
      ],
    },
  ]

  const KNOWLEDGE_BASE = [
    { title: t('support.kbBeginner'), desc: t('support.kbBeginnerDesc'), icon: HelpCircle },
    { title: t('support.kbBuyer'), desc: t('support.kbBuyerDesc'), icon: Shield },
    { title: t('support.kbReturns'), desc: t('support.kbReturnsDesc'), icon: RotateCcw },
    { title: t('support.kbSeller'), desc: t('support.kbSellerDesc'), icon: Package },
  ]

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  const toggleItem = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const filteredCategories = FAQ_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0 || !search)

  return (
    <div className="flex flex-col">
      <section className="hero min-h-[40vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-2xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('support.helpCenter')}</h1>
            <p className="text-lg text-base-content/70 mb-8">
              {t('support.howCanWeHelp')}
            </p>
            <div className="form-control">
              <div className="input input-bordered flex items-center gap-2 w-full">
                <Search size={20} className="opacity-50 shrink-0" />
                <input
                  type="text"
                  placeholder={t('support.searchHelp')}
                  className="grow"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('support.faq')}</h2>
          <div className="flex flex-col gap-4">
            {filteredCategories.map((cat, catIdx) => {
              const Icon = cat.icon
              const isOpen = openCategory === catIdx
              return (
                <div key={cat.title} className="bg-base-100 rounded-box shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory(catIdx)}
                    className="w-full flex items-center gap-3 p-4 hover:bg-base-200 transition-colors text-left"
                  >
                    <Icon size={24} className="text-primary shrink-0" />
                    <span className="font-bold text-lg flex-1">{cat.title}</span>
                    <span className="badge badge-ghost">{cat.items.length}</span>
                    <ChevronDown
                      size={20}
                      className={`text-base-content/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-base-200">
                      {cat.items.map((item, itemIdx) => {
                        const itemKey = `${catIdx}-${itemIdx}`
                        const isItemOpen = openItems[itemKey]
                        return (
                          <div key={itemIdx} className="border-b border-base-200 last:border-b-0">
                            <button
                              onClick={() => toggleItem(catIdx, itemIdx)}
                              className="w-full flex items-center justify-between p-4 pl-16 hover:bg-base-200/50 transition-colors text-left"
                            >
                              <span className="font-medium text-sm">{item.q}</span>
                              <ChevronDown
                                size={16}
                                className={`text-base-content/40 transition-transform shrink-0 ml-4 ${isItemOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            {isItemOpen && (
                              <div className="px-16 pb-4">
                                <p className="text-sm text-base-content/70">{item.a}</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('support.popularArticles')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KNOWLEDGE_BASE.map((article) => {
              const Icon = article.icon
              return (
                <div key={article.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="card-body items-center text-center">
                    <Icon size={32} className="text-primary mb-2" />
                    <h3 className="font-bold">{article.title}</h3>
                    <p className="text-sm text-base-content/70">{article.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <MessageSquare size={48} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">{t('support.noAnswer')}</h2>
          <p className="text-base-content/70 mb-8">
            {t('support.supportTeamAvailable')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('support.contactUs')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from '../../components/organisms/Header'
import {
  BookOpen,
  TrendingUp,
  Lightbulb,
  Target,
  ArrowRight,
  Camera,
  Package,
  MessageSquare,
  BarChart3,
  Users,
  Star,
  Clock,
  ExternalLink,
} from 'lucide-react'

export default function SellerResourcesPage() {
  const { t } = useTranslation()

  const GUIDES = [
    {
      icon: Package,
      title: t('resources.guideShopTitle'),
      desc: t('resources.guideShopDesc'),
      readTime: t('resources.read10min'),
    },
    {
      icon: Camera,
      title: t('resources.guidePhotoTitle'),
      desc: t('resources.guidePhotoDesc'),
      readTime: t('resources.read8min'),
    },
    {
      icon: TrendingUp,
      title: t('resources.guidePriceTitle'),
      desc: t('resources.guidePriceDesc'),
      readTime: t('resources.read12min'),
    },
    {
      icon: MessageSquare,
      title: t('resources.guideRelationTitle'),
      desc: t('resources.guideRelationDesc'),
      readTime: t('resources.read7min'),
    },
    {
      icon: BarChart3,
      title: t('resources.guideAnalyticsTitle'),
      desc: t('resources.guideAnalyticsDesc'),
      readTime: t('resources.read15min'),
    },
    {
      icon: Users,
      title: t('resources.guidePromoteTitle'),
      desc: t('resources.guidePromoteDesc'),
      readTime: t('resources.read11min'),
    },
  ]

  const TIPS = [
    { icon: Star, title: t('resources.tipQualityTitle'), desc: t('resources.tipQualityDesc') },
    { icon: Clock, title: t('resources.tipReactivityTitle'), desc: t('resources.tipReactivityDesc') },
    { icon: Target, title: t('resources.tipSeoTitle'), desc: t('resources.tipSeoDesc') },
    { icon: Lightbulb, title: t('resources.tipPromoTitle'), desc: t('resources.tipPromoDesc') },
    { icon: MessageSquare, title: t('resources.tipReviewsTitle'), desc: t('resources.tipReviewsDesc') },
    { icon: Package, title: t('resources.tipPackagingTitle'), desc: t('resources.tipPackagingDesc') },
  ]

  const RESOURCES = [
    { title: t('resources.blogTitle'), desc: t('resources.blogDesc'), url: '#', external: true },
    { title: t('resources.webinarsTitle'), desc: t('resources.webinarsDesc'), url: '#', external: true },
    { title: t('resources.communityTitle'), desc: t('resources.communityDesc'), url: '#', external: true },
    { title: t('resources.supportTitle'), desc: t('resources.supportDesc'), url: '/contact', external: false },
  ]

  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <BookOpen size={48} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('resources.title')}</h1>
            <p className="text-lg text-base-content/70">
              {t('resources.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">{t('resources.startingGuide')}</h2>
          <p className="text-center text-base-content/60 mb-12 max-w-xl mx-auto">
            {t('resources.startingGuideDesc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((guide) => {
              const Icon = guide.icon
              return (
                <div key={guide.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="card-body">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{guide.title}</h3>
                    <p className="text-sm text-base-content/70">{guide.desc}</p>
                    <div className="card-actions justify-between items-center mt-2">
                      <span className="text-xs text-base-content/50 flex items-center gap-1">
                        <Clock size={12} />
                        {guide.readTime}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">
                        {t('resources.read')} <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('resources.tipsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIPS.map((tip) => {
              const Icon = tip.icon
              return (
                <div key={tip.title} className="flex items-start gap-4 p-4 bg-base-100 rounded-box shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{tip.title}</h3>
                    <p className="text-sm text-base-content/70">{tip.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('resources.additionalTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target={resource.external ? '_blank' : undefined}
                rel={resource.external ? 'noopener noreferrer' : undefined}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{resource.title}</h3>
                    {resource.external && <ExternalLink size={16} className="text-base-content/40" />}
                  </div>
                  <p className="text-sm text-base-content/70">{resource.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">{t('resources.ctaTitle')}</h2>
          <p className="mb-8 opacity-90">{t('resources.ctaSubtitle')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/seller/register" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
              {t('resources.openShop')}
              <ArrowRight size={20} />
            </Link>
            <Link to="/seller/pricing" className="btn btn-lg btn-outline border-base-100 text-base-100 hover:bg-base-100 hover:text-base-content">
              {t('resources.viewPricing')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

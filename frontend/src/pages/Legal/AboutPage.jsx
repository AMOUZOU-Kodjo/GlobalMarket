import { Link } from 'react-router-dom'
import { Header } from '../../components/organisms/Header'
import {
  Target,
  Heart,
  Globe,
  Users,
  ShoppingBag,
  Truck,
  Award,
  Lightbulb,
  Shield,
  Handshake,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const TIMELINE = [
  { year: '2020', title: 'Fondation', desc: 'GlobalMarket est née de l\'envie de créer une plateforme de commerce en ligne accessible à tous.' },
  { year: '2021', title: 'Lancement', desc: 'Ouverture officielle de la plateforme avec 100 vendeurs pionniers.' },
  { year: '2022', title: 'Croissance', desc: 'Expansion internationale dans 15 pays et plus de 10 000 vendeurs actifs.' },
  { year: '2023', title: 'Innovation', desc: 'Lancement de l\'application mobile et du programme de protection acheteur.' },
  { year: '2024', title: 'Maturité', desc: 'Plus de 500 000 produits référencés et 1 million d\'utilisateurs satisfaits.' },
  { year: '2025', title: 'Avenir', desc: 'Intelligence artificielle et durabilité au cœur de notre évolution.' },
]

const VALUES = [
  { icon: Shield, title: 'Confiance', desc: 'Nous garantissons la sécurité de chaque transaction et la transparence entre acheteurs et vendeurs.' },
  { icon: Heart, title: 'Passion', desc: 'Notre équipe est passionnée par le commerce et l\'innovation au service de nos utilisateurs.' },
  { icon: Globe, title: 'Ouverture', desc: 'Nous connectons les talents du monde entier, sans frontières ni barrières.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Nous recherchons constamment de nouvelles solutions pour améliorer l\'expérience utilisateur.' },
  { icon: Handshake, title: 'Communauté', desc: 'Nous croyons en la force du collectif et de l\'entraide entre membres.' },
  { icon: TrendingUp, title: 'Excellence', desc: 'Nous visons l\'excellence dans chaque aspect de notre plateforme.' },
]

const TEAM = [
  { name: 'Marie Dupont', role: 'CEO & Co-fondatrice' },
  { name: 'Jean Martin', role: 'CTO & Co-fondateur' },
  { name: 'Sophie Bernard', role: 'Directrice Marketing' },
  { name: 'Lucas Petit', role: 'Directeur Technique' },
]

const STATS = [
  { value: '15 000+', label: 'Vendeurs actifs' },
  { value: '1M+', label: 'Acheteurs satisfaits' },
  { value: '30+', label: 'Pays desservis' },
  { value: '500K+', label: 'Produits référencés' },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de GlobalMarket</h1>
            <p className="text-lg text-base-content/70">
              Nous connectons les acheteurs et les vendeurs du monde entier pour créer une expérience de commerce unique.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="text-base-content/70 mb-4">
                GlobalMarket a pour mission de démocratiser le commerce en ligne en offrant à chaque entrepreneur,
                quelle que soit sa taille, la possibilité de vendre ses produits à un public mondial.
              </p>
              <p className="text-base-content/70">
                Nous croyons que le commerce doit être juste, transparent et accessible. Notre plateforme est conçue
                pour donner les mêmes chances à tous les vendeurs, des artisans locaux aux grandes marques.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Target size={120} className="text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Histoire</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="relative z-10 w-24 flex justify-center">
                    <div className="badge badge-primary badge-lg font-bold text-primary-content">{item.year}</div>
                  </div>
                  <div className="flex-1">
                    <div className="card bg-base-100 shadow-md">
                      <div className="card-body">
                        <h3 className="card-title text-lg">{item.title}</h3>
                        <p className="text-sm text-base-content/70">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="card-body items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="card-title">{value.title}</h3>
                    <p className="text-sm text-base-content/70">{value.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="card bg-base-100 shadow-md">
                <div className="card-body items-center text-center">
                  <div className="avatar placeholder mb-2">
                    <div className="bg-primary text-primary-content rounded-full w-16">
                      <span className="text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  </div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-base-content/60">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">GlobalMarket en chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat bg-base-100 rounded-box shadow-md text-center">
                <div className="stat-value text-primary text-3xl font-bold">{stat.value}</div>
                <div className="stat-desc text-base-content/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-content">
        <div className="container mx-auto text-center max-w-2xl">
          <Sparkles size={48} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Rejoignez l'aventure</h2>
          <p className="mb-8 opacity-90">
            Que vous soyez acheteur ou vendeur, faites partie d'une communauté qui grandit chaque jour.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/register" className="btn btn-lg bg-base-100 text-base-content border-none hover:bg-base-200">
              Créer un compte
              <ArrowRight size={20} />
            </Link>
            <Link to="/seller/register" className="btn btn-lg btn-outline border-base-100 text-base-100 hover:bg-base-100 hover:text-base-content">
              Ouvrir une boutique
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

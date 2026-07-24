import { useState, useEffect } from 'react'
import { Header } from '../../components/organisms/Header'
import { Shield, Lock, Eye, Server, Cookie, UserCheck, Mail } from 'lucide-react'

const SECTIONS = [
  { id: 'donnees-collectees', icon: Eye, title: 'Données Collectées', content: `Nous collectons les données suivantes dans le cadre de l'utilisation de notre plateforme :

**Données d'identification** : nom, prénom, adresse email, numéro de téléphone, adresse postale.

**Données de connexion** : adresse IP, type de navigateur, système d'exploitation, pages visitées, durée de visite.

**Données de transaction** : historique d'achats, moyens de paiement (tokenisés), adresses de livraison.

**Données de profil** : photo de profil, descriptions, préférences, avis et évaluations.

**Données de localisation** : ville et pays de résidence (non géolocalisation précise).

Nous ne collectons que les données strictement nécessaires au fonctionnement de la plateforme et à l'amélioration de nos services.` },
  { id: 'utilisation', icon: Server, title: 'Utilisation des Données', content: `Vos données sont utilisées pour :

- Fournir et améliorer nos services
- Traiter vos transactions et commander vos livraisons
- Communiquer avec vous concernant vos commandes
- Personnaliser votre expérience utilisateur
- Prévenir la fraude et assurer la sécurité
- Respecter nos obligations légales
- Vous envoyer des communications marketing (avec votre consentement)
- Effectuer des analyses statistiques anonymisées

Nous ne vendons jamais vos données personnelles à des tiers.` },
  { id: 'partage', icon: UserCheck, title: 'Partage des Données', content: `Vos données peuvent être partagées avec :

**Prestataires de services** : sociétés de livraison, processeurs de paiement, hébergeurs cloud.

**Partenaires commerciaux** : uniquement avec votre consentement explicite.

**Autorités compétentes** : en cas d'obligation légale ou de demande judiciaire.

**Autres vendeurs** : uniquement les informations nécessaires à la traitement de vos commandes (nom, adresse de livraison).

Tous nos partenaires sont soumis à des obligations strictes de confidentialité et de sécurité des données.` },
  { id: 'securite', icon: Lock, title: 'Sécurité des Données', content: `Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :

- Chiffrement SSL/TLS pour toutes les communications
- Chiffrement des données sensibles au repos
- Authentification à deux facteurs disponible
- Surveillance continue des accès
- Tests de pénétration réguliers
- Formation de notre équipe aux bonnes pratiques de sécurité

En cas de violation de données susceptible d'engendrer un risque pour vos droits, nous vous en informerons dans les meilleurs délais conformément au RGPD.` },
  { id: 'cookies', icon: Cookie, title: 'Cookies', content: `Notre site utilise des cookies pour améliorer votre expérience. Pour plus de détails, consultez notre Politique de Cookies dédiée.

**Cookies strictement nécessaires** : indispensables au fonctionnement du site.

**Cookies analytiques** : nous aident à comprendre comment vous utilisez notre site.

**Cookies de préférences** : mémorisent vos choix (langue, devise, etc.).

**Cookies marketing** : permettent de vous proposer des offres personnalisées.

Vous pouvez gérer vos préférences de cookies à tout moment via notre bandeau de consentement ou les paramètres de votre navigateur.` },
  { id: 'rgpd', icon: Shield, title: 'Vos Droits RGPD', content: `Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :

**Droit d'accès** : obtenir une copie de vos données personnelles.

**Droit de rectification** : corriger des données inexactes.

**Droit à l'effacement** : demander la suppression de vos données.

**Droit à la portabilité** : recevoir vos données dans un format structuré.

**Droit d'opposition** : vous opposer au traitement de vos données.

**Droit à la limitation** : demander la suspension du traitement.

Pour exercer vos droits, contactez notre Délégué à la Protection des Données à l'adresse indiquée ci-dessous.` },
  { id: 'contact-dpo', icon: Mail, title: 'Contact DPO', content: `Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter notre Délégué à la Protection des Données (DPO) :

**Email** : dpo@marcostore.com

**Adresse postale** :
Délégué à la Protection des Données
MarcoStore
123 Rue du Commerce
75001 Paris, France

**Téléphone** : +33 1 23 45 67 90

Vous pouvez également déposer une plainte auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr` },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <Shield size={48} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
            <p className="text-base-content/60">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-24">
                <h3 className="font-bold mb-3 text-sm uppercase tracking-wide text-base-content/50">Sommaire</h3>
                <nav className="flex flex-col gap-1">
                  {SECTIONS.map((section) => {
                    const Icon = section.icon
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeSection === section.id
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-base-content/60 hover:text-base-content hover:bg-base-200'
                        }`}
                      >
                        <Icon size={16} />
                        {section.title}
                      </a>
                    )
                  })}
                </nav>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="alert alert-info mb-8">
                <Shield size={20} />
                <span>Cette politique explique comment MarcoStore collecte, utilise et protège vos données personnelles conformément au RGPD.</span>
              </div>

              {SECTIONS.map((section) => {
                const Icon = section.icon
                return (
                  <div key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      {section.title}
                    </h2>
                    <div className="text-base-content/80 whitespace-pre-line leading-relaxed pl-[52px]">
                      {section.content}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Header } from '../../components/organisms/Header'

const SECTIONS = [
  { id: 'acceptation', title: 'Acceptation des Conditions', content: `En accédant et en utilisant la plateforme GlobalMarket, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre plateforme.

Ces conditions constituent un accord juridique entre vous et GlobalMarket. Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur la plateforme.` },
  { id: 'definitions', title: 'Définitions', content: `**Plateforme** : Le site web et l'application mobile GlobalMarket accessibles aux utilisateurs.

**Utilisateur** : Toute personne physique ou morale accédant à la plateforme, qu'elle soit acheteur ou vendeur.

**Vendeur** : Un utilisateur inscrit qui propose des produits à la vente sur la plateforme.

**Acheteur** : Un utilisateur qui effectue des achats sur la plateforme.

**Contenu** : L'ensemble des informations, textes, images, vidéos et autres éléments publiés sur la plateforme.

**Service** : L'ensemble des fonctionnalités offertes par GlobalMarket, incluant la mise en relation entre acheteurs et vendeurs, le système de paiement et la logistique.` },
  { id: 'inscription', title: 'Inscription', content: `Pour utiliser certaines fonctionnalités de la plateforme, vous devez créer un compte. L'inscription est gratuite et ouverte à toute personne physique majeure ou morale.

Lors de l'inscription, vous vous engagez à fournir des informations exactes et à les maintenir à jour. Vous êtes responsable de la confidentialité de vos identifiants de connexion.

Un compte peut être supprimé à tout moment par l'utilisateur ou par GlobalMarket en cas de non-respect des présentes conditions.` },
  { id: 'obligations', title: 'Obligations des Utilisateurs', content: `En utilisant GlobalMarket, vous vous engagez à :

- Respecter les lois et réglementations en vigueur
- Ne pas publier de contenu illicite, offensant ou trompeur
- Ne pas tenter de contourner les mesures de sécurité
- Ne pas utiliser la plateforme à des fins frauduleuses
- Respecter les droits de propriété intellectuelle d'autrui
- Payer les produits achetés dans les délais impartis
- Fournir des informations exactes lors des transactions

Tout manquement à ces obligations peut entraîner la suspension ou la suppression de votre compte.` },
  { id: 'propriete-intellectuelle', title: 'Propriété Intellectuelle', content: `L'ensemble du contenu de la plateforme (textes, images, logos, marques, logiciels) est la propriété exclusive de GlobalMarket ou de ses partenaires et est protégé par les lois relatives à la propriété intellectuelle.

Vous ne pouvez pas reproduire, distribuer, modifier ou créer des œuvres dérivées à partir du contenu de la plateforme sans l'autorisation préalable écrite de GlobalMarket.

Les vendeurs conservent la propriété intellectuelle des produits qu'ils proposent à la vente. En soumettant un produit, le vendeur accorde à GlobalMarket une licence limitée pour afficher et promouvoir ledit produit.` },
  { id: 'responsabilite', title: 'Limitation de Responsabilité', content: `GlobalMarket agit en tant qu'intermédiaire entre les acheteurs et les vendeurs. Nous ne sommes pas partie aux transactions entre utilisateurs.

Notre responsabilité ne saurait être engagée en cas de :

- Litiges entre acheteurs et vendeurs
- Dommages résultant de l'utilisation de la plateforme
- Interruptions de service ou erreurs techniques
- Pertes de données
- Contenu publié par les utilisateurs

GlobalMarket met tout en œuvre pour assurer la sécurité des transactions, mais ne garantit pas l'absence de fraude. En cas de litige, notre équipe de médiation se tient à votre disposition.` },
  { id: 'droit-applicable', title: 'Droit Applicable et Juridiction', content: `Les présentes conditions sont régies par le droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.

À défaut de résolution amiable, tout litige relatif à l'interprétation ou l'exécution des présentes conditions sera soumis aux tribunaux compétents de Paris, France.

Conformément au règlement européen (UE) 2016/679 (RGPD), vous disposez de droits concernant vos données personnelles, notamment un droit d'accès, de rectification et de suppression.` },
]

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
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
                  {SECTIONS.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-base-content/60 hover:text-base-content hover:bg-base-200'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="prose prose-base max-w-none">
                {SECTIONS.map((section, i) => (
                  <div key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-primary">{i + 1}.</span>
                      {section.title}
                    </h2>
                    <div className="text-base-content/80 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

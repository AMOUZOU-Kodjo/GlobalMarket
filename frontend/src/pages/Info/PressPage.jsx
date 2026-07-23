import InfoPage from '../../components/organisms/InfoPage'

export default function PressPage() {
  return (
    <InfoPage
      title="Presse"
      subtitle="Dernières actualités et communiqués de GlobalMarket"
      sections={[
        {
          title: 'Communiqués récents',
          items: [
            { title: 'GlobalMarket lève 15 millions d\'euros en Série A', description: '23 juin 2026 — Le tour de financement sera utilisé pour accélérer le développement technologique et l\'expansion en Afrique francophone.' },
            { title: 'Partenariat stratégique avec Chronopost', description: '15 mai 2026 — Un accord de partenariat pour offrir des livraisons express à tarifs préférentiels aux vendeurs de la plateforme.' },
            { title: 'GlobalMarket dépasse le cap des 100 000 utilisateurs', description: '2 avril 2026 — Un jalon majeur atteint en seulement 18 mois d\'activité, porté par une croissance organique de 40% mois sur mois.' },
            { title: 'Lancement du programme « Vendeur Certified »', description: '18 mars 2026 — Un label de qualité pour identifier les vendeurs les plus fiables et les mieux notés de la plateforme.' },
          ],
        },
        {
          title: 'Ressources presse',
          content: `Pour toute demande d'interview, de communiqué de presse ou d'accès à nos kit média, contactez notre équipe communication :

Email : press@globalmarket.com
Téléphone : +33 1 23 45 67 89

Kit presse disponible : logo haute résolution, photos de l'équipe, infographies et chiffres clés.`,
        },
        {
          title: 'Mentions presse',
          content: `GlobalMarket a été cité dans :

• Les Echos — « La startup qui veut démocratiser l'e-commerce en Afrique »
• TechCrunch — « GlobalMarket: the French marketplace challenger »
• Jeune Afrique — « Le digital shopping nouvelle génération »
• Forbes Africa — « 10 startups à surveiller en 2026 »
• Le Monde — « Comment les marketplaces transforment le commerce local »`,
        },
      ]}
    />
  )
}

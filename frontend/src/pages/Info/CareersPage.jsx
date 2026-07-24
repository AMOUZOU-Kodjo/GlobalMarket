import InfoPage from '../../components/organisms/InfoPage'

const JOB_OFFERS = [
  { title: 'Développeur Full-Stack (React/Node)', description: 'Rejoignez notre équipe technique pour concevoir et développer de nouvelles fonctionnalités. Stack : React, Node.js, PostgreSQL, Prisma.' },
  { title: 'Designer UX/UI', description: 'Créez des expériences utilisateur intuitives et élégantes pour nos acheteurs et vendeurs.' },
  { title: 'Chef de Projet E-commerce', description: 'Pilotez le développement de nos features marketplace et coordonnez les équipes produit.' },
  { title: 'Responsable Marketing Digital', description: 'Développez notre stratégie d\'acquisition et de fidélisation sur tous les canaux digitaux.' },
  { title: 'Commercial B2B - Acquisition Vendeurs', description: 'Recrutez et accompagnez les meilleurs vendeurs sur notre plateforme.' },
]

export default function CareersPage() {
  return (
    <InfoPage
      title="Carrières"
      subtitle="Rejoignez l'aventure MarcoStore"
      sections={[
        {
          title: 'Pourquoi nous rejoindre ?',
          content: `MarcoStore est en pleine croissance et nous recherchons des talents passionnés pour nous aider à construire la marketplace de demain. Nous offrons un environnement de travail stimulant, flexible et orienté vers l'innovation.`,
        },
        {
          title: 'Nos valeurs',
          list: [
            'Innovation continue — nous remettons en question le statu quo',
            'Transparence — communication ouverte à tous les niveaux',
            'Collaboration — le travail d\'équipe est au cœur de notre réussite',
            'Impact — chaque contribution compte pour des millions d\'utilisateurs',
            'Équilibre vie pro/vie perso — flexibilité et confiance',
          ],
        },
        {
          title: 'Nos avantages',
          list: [
            'Télétravail flexible (3j/semaine minimum)',
            'Mutuelle d\'entreprise prise en charge à 100%',
            'RTT et congés supplémentaires',
            'Budget formation continue',
            'Programme de rémunération variable',
            'Offices modernes à Paris et Abidjan',
            'Événements d\'équipe trimestriels',
          ],
        },
        {
          title: 'Offres ouvertes',
          items: JOB_OFFERS,
        },
        {
          title: 'Candidature spontanée',
          content: 'Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous votre candidature spontanée à careers@marcostore.com avec votre CV et une lettre de motivation.',
        },
      ]}
      cta={{
        text: 'Vous avez des questions sur nos offres ?',
        link: { label: 'Contactez-nous', href: '/contact' },
      }}
    />
  )
}

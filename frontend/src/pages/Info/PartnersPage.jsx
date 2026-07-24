import InfoPage from '../../components/organisms/InfoPage'

export default function PartnersPage() {
  return (
    <InfoPage
      title="Partenaires"
      subtitle="Nos partenaires qui font vivre l'écosystème MarcoStore"
      sections={[
        {
          title: 'Nos partenaires logistiques',
          items: [
            { title: 'Togo Express', description: 'Livraison express partout au Togo et en Afrique de l\'Ouest.' },
            { title: 'DHL', description: 'Livraison internationale rapide pour l\'Afrique et le monde entier.' },
            { title: 'Relais Togo', description: 'Points relais et livraison à domicile au Togo.' },
            { title: 'UPS', description: 'Solutions logistiques professionnelnes pour gros volumes.' },
          ],
        },
        {
          title: 'Nos partenaires paiement',
          items: [
            { title: 'Stripe', description: 'Processeur de paiement principal, sécurisation des transactions.' },
            { title: 'PayPal', description: 'Paiement en un clic pour les acheteurs internationaux.' },
            { title: 'MTN Mobile Money', description: 'Paiement mobile pour l\'Afrique francophone.' },
            { title: 'Orange Money', description: 'Solutions de paiement mobile en Afrique de l\'Ouest.' },
          ],
        },
        {
          title: 'Partenariat commercial',
          content: `Vous souhaitez devenir partenaire de MarcoStore ? Nous sommes ouverts à :

• Co-branding et opérations conjointes
• Intégration API pour plateformes tierces
• Programme d'affiliation vendeurs
• Sponsoring et événementiel

Contactez notre équipe partenariats : partners@marcostore.com`,
        },
      ]}
    />
  )
}

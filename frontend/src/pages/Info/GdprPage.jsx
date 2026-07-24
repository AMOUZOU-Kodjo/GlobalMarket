import InfoPage from '../../components/organisms/InfoPage'

export default function GdprPage() {
  return (
    <InfoPage
      title="Conformité RGPD"
      subtitle="Protection générale des données — Règlement (UE) 2016/679"
      sections={[
        {
          title: 'Préambule',
          content: `MarcoStore accorde une importance capitale à la protection de vos données personnelles. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données.`,
        },
        {
          title: 'Responsable du traitement',
          content: `MarcoStore SARL
Boulevard du 13 Janvier, Lomé, Togo
DPO : dpo@marcostore.com
Registre du commerce : TI/Lomé/2026/B/1234`,
        },
        {
          title: 'Données collectées',
          list: [
            'Données d\'identification : nom, prénom, email, téléphone',
            'Données de connexion : adresse IP, cookies, historique de navigation',
            'Données de transaction : historique d\'achats, moyens de paiement (tokenisés)',
            'Données de localisation : adresse de livraison (uniquement si nécessaire)',
            'Données de通讯 : messages échangés entre utilisateurs',
          ],
        },
        {
          title: 'Vos droits',
          list: [
            'Droit d\'accès : obtenir une copie de vos données',
            'Droit de rectification : corriger des données inexactes',
            'Droit à l\'effacement : demander la suppression de vos données',
            'Droit à la portabilité : recevoir vos données dans un format structuré',
            'Droit d\'opposition : vous opposer au traitement de vos données',
            'Droit à la limitation : demander la suspension du traitement',
            'Droit de retirer votre consentement à tout moment',
          ],
        },
        {
          title: 'Exercer vos droits',
          content: `Pour exercer vos droits, contactez notre Délégué à la Protection des Données :

Email : dpo@marcostore.com
Courrier : MarcoStore SAS — DPO, 123 Rue du Commerce, 75001 Paris

Nous nous engageons à répondre dans un délai de 30 jours. Une pièce d'identité pourra vous être demandée pour vérification.`,
        },
        {
          title: 'Sécurité des données',
          content: `Nous mettons en œuvre les mesures techniques suivantes :
• Chiffrement SSL/TLS pour toutes les communications
• Chiffrement des données au repos (AES-256)
• Tokenisation des données de paiement (PCI DSS)
• Journalisation des accès et audit de sécurité
• Tests de pénétration réguliers
• Plan de réponse aux incidents de sécurité`,
        },
      ]}
    />
  )
}

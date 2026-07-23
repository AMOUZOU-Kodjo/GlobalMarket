import InfoPage from '../../components/organisms/InfoPage'

export default function SellerApiPage() {
  return (
    <InfoPage
      title="API Vendeurs"
      subtitle="Intégrez GlobalMarket à vos outils de gestion"
      sections={[
        {
          title: 'Vue d\'ensemble',
          content: `L'API REST de GlobalMarket permet aux vendeurs professionnels d'automatiser la gestion de leur boutique. Synchronisez vos stocks, gérez vos commandes et publiez des produits en masse.`,
        },
        {
          title: 'Endpoints disponibles',
          list: [
            'GET /api/v1/products — Liste des produits de votre boutique',
            'POST /api/v1/products — Créer un nouveau produit',
            'PUT /api/v1/products/:id — Modifier un produit existant',
            'GET /api/v1/orders — Liste des commandes',
            'PATCH /api/v1/orders/:id/status — Mettre à jour le statut d\'une commande',
            'GET /api/v1/inventory — Consultation des stocks en temps réel',
            'POST /api/v1/webhooks — Configurer des webhooks pour les événements',
          ],
        },
        {
          title: 'Authentification',
          content: `L'API utilise des tokens OAuth 2.0. Pour obtenir vos clés d'accès, rendez-vous dans les paramètres de votre boutique, section « API & Intégrations ».

Chaque requête doit inclure le header : Authorization: Bearer <votre_token>`,
        },
        {
          title: 'Documentation',
          content: `Documentation complète disponible sur docs.globalmarket.com/api

SDK disponibles : JavaScript/Node.js, Python, PHP

Limites : 1000 requêtes/heure par vendeur (plan Basic), illimité (plan Pro).`,
        },
      ]}
      cta={{
        text: 'Besoin d\'aide pour intégrer l\'API ?',
        link: { label: 'Contactez le support', href: '/contact' },
      }}
    />
  )
}

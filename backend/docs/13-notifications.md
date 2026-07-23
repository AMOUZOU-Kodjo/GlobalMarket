# Chapitre 13 — Notifications & Emails

## 13.1 Système de notifications

### 13.1.1 Types de notifications

| Type | Canal | Déclencheur |
|---|---|---|
| Commande confirmée | Email + DB | Paiement réussi |
| Commande expédiée | Email + DB + Push | Seller change statut → shipped |
| Commande livrée | Email + DB | Confirmation livraison |
| Commande annulée | Email + DB | Annulation par buyer ou seller |
| Remboursement | Email + DB | Remboursement traité |
| Nouveau produit vendeur | DB | Création produit |
| Produit modéré | Email + DB | Approbation/rejet admin |
| Nouveau ticket | DB | Création ticket support |
| Réponse ticket | Email + DB | Nouveau message admin |
| Compte vendeur approuvé | Email + DB | Verification admin |
| Solde bas | Email | Stock < lowStockThreshold |
| Nouvel abonné newsletter | Email | Inscription newsletter |

### 13.1.2 Modèle de notification (DB)

```json
{
  "id": "uuid",
  "userId": "uuid",
  "type": "order | payment | shipping | promotion | system | support",
  "title": "Commande confirmée",
  "message": "Votre commande GM-2026-000123 a été confirmée",
  "data": { "orderId": "uuid", "orderNumber": "GM-2026-000123" },
  "read": false,
  "createdAt": "2026-07-23T10:00:00Z"
}
```

## 13.2 Emails transactionnels

### 13.2.1 Templates

| Template | Sujet | Contenu |
|---|---|---|
| verify-email | Vérifiez votre email | Code à 6 chiffres |
| reset-password | Réinitialisez votre mot de passe | Lien de réinitialisation |
| order-confirmation | Confirmation de commande #{number} | Détails commande |
| order-shipped | Votre commande #{number} est en route | Tracking |
| order-delivered | Votre commande #{number} a été livrée | Récapitulatif |
| order-cancelled | Annulation de commande #{number} | Raison |
| refund-processed | Remboursement traité | Montant et délai |
| seller-approved | Votre boutique est approuvée | Bienvenue |
| seller-rejected | Votre demande de boutique rejetée | Raison |
| new-ticket | Nouveau ticket #{id} | Résumé |
| ticket-reply | Réponse à votre ticket | Message |
| low-stock | Alerte stock bas | Produit concerné |
| payout-completed | Virement effectué | Montant |

### 13.2.2 Service d'envoi

```js
// email.service.js
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
})

async function sendEmail(to, subject, html) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html
  })
}
```

### 13.2.3 Intégration transactionnelle

```js
// Dans le service order
async function createOrder(data) {
  return await prisma.$transaction(async (tx) => {
    // 1. Créer la commande
    const order = await tx.order.create({ ... })

    // 2. Décrémenter le stock
    for (const item of items) {
      await tx.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } }
      })
    }

    // 3. Créer la notification
    await tx.notification.create({
      data: { userId: buyerId, type: 'order', title: 'Commande confirmée', ... }
    })

    // 4. Envoyer l'email (hors transaction)
    await emailService.sendOrderConfirmation(order)

    return order
  })
}
```

## 13.3 Notifications push (futur)

```js
// Service push via Firebase Cloud Messaging
async function sendPushNotification(userId, title, body, data) {
  const tokens = await getUserPushTokens(userId)
  await admin.messaging().sendEachForMulticast({
    tokens,
    notification: { title, body },
    data
  })
}
```

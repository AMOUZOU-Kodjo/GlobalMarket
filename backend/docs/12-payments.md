# Chapitre 12 — Intégrations Paiement

## 12.1 Architecture des paiements

```
┌──────────┐     ┌──────────────┐     ┌─────────────┐
│  Frontend │────▶│    Backend    │────▶│   Stripe     │
│           │     │  /payments    │     │   PayPal     │
│           │◀────│  /webhooks    │◀────│  MobileMoney │
└──────────┘     └──────────────┘     └─────────────┘
```

## 12.2 Stripe

### 12.2.1 Configuration

```js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
```

### 12.2.2 Flux carte bancaire

```
1. Frontend → POST /payments/intent { amount, currency, orderId }
2. Backend → stripe.paymentIntents.create({ amount: 7597, currency: 'eur', metadata: { orderId } })
3. Backend → retourne { clientSecret: 'pi_xxx_secret_xxx' }
4. Frontend → stripe.confirmCardPayment(clientSecret, { payment_method: { card: ... } })
5. Stripe → webhook payment_intent.succeeded
6. Backend → met à jour Payment + Order
```

### 12.2.3 Signature webhook

```js
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature']
  const event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  // ... traiter l'événement
  res.json({ received: true })
})
```

## 12.3 PayPal

### 12.3.1 Configuration

```js
const paypal = require('@paypal/checkout-server-sdk')
const client = new paypal.core.PayPalHttpClient(
  new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
)
```

### 12.3.2 Flux PayPal

```
1. Frontend → POST /payments/intent { amount, currency, orderId, method: 'paypal' }
2. Backend → créer l'ordre PayPal
3. Backend → retourne { paypalOrderId, approvalUrl }
4. Frontend → redirige vers approvalUrl
5. User approuve → retourne vers frontend avec token
6. Frontend → POST /payments/:id/confirm { payerId, token }
7. Backend → capture le paiement
8. PayPal → webhook PAYMENT.CAPTURE.COMPLETED
```

## 12.4 Mobile Money (Orange Money, M-Pesa, Wave)

### 12.4.1 Architecture

```
1. Frontend → POST /payments/intent { amount, currency, orderId, method: 'mobile_money', phoneNumber }
2. Backend → initie le paiement via l'API du provider
3. Backend → envoie une demande de paiement au téléphone
4. User confirme sur son téléphone
5. Provider → webhook de confirmation
6. Backend → met à jour le statut
```

### 12.4.2 Providers supportés

| Provider | Pays | API |
|---|---|---|
| Orange Money | Sénégal, Côte d'Ivoire, Mali | REST API |
| M-Pesa | Kenya, Tanzanie | Daraja API |
| Wave | Sénégal, Côte d'Ivoire | REST API |
| MTN Mobile Money | Cameroun, Burkina Faso | REST API |

## 12.5 Système d'escrow

Le paiement n'est pas transféré directement au vendeur. Le flux :

```
1. Acheteur paie → fonds détenus par GlobalMarket (escrow)
2. Produit livré + confirmation → délai de réclamation (48h)
3. Pas de litige → fonds transférés au vendeur (moins commission)
4. Litige → fonds gelés jusqu'à résolution
```

### Calcul commission

```
Montant vendeur = totalArticle × (1 - commissionRate)
Commission = totalArticle × commissionRate

Exemple :
  Produit : 100 €
  Commission Basic : 12% → Vendeur reçoit 88 €
  Commission Pro : 8% → Vendeur reçoit 92 €
  Commission Enterprise : 5% → Vendeur reçoit 95 €
```

## 12.6 Payouts (Virements vendeurs)

### Fréquence

| Plan | Fréquence minimum | Montant minimum |
|---|---|---|
| Basic | Mensuel | 50 € |
| Pro | Hebdomadaire | 25 € |
| Enterprise | Hebdomadaire | 10 € |

### Processus

```
1. Admin lance le batch de payouts (cron job)
2. Pour chaque vendeur éligible :
   a. Calculer le solde disponible (revenus - commissions - remboursements)
   b. Créer un enregistrement Payout
   c. Initier le virement bancaire / PayPal
   d. Mettre à jour le statut
3. Notifier le vendeur par email
```

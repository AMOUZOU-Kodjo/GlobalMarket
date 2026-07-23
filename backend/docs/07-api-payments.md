# Chapitre 7 — API REST : Paiements

Base URL : `/api/payments`

## 7.1 POST /api/payments/intent

**Description :** Créer une intention de paiement  
**Auth :** Oui  
**Body :**

```json
{
  "orderId": "uuid",
  "amount": 75.97,
  "currency": "EUR",
  "method": "credit_card | paypal | mobile_money"
}
```

**Logique selon la méthode :**

| Méthode | Action |
|---|---|
| credit_card | Créer un PaymentIntent Stripe → retourner `clientSecret` |
| paypal | Créer une commande PayPal → retourner `paypalOrderId` + `approvalUrl` |
| mobile_money | Initier le paiement → retourner `reference` + instructions |

**Réponse 200 :**

```json
{
  "data": {
    "paymentId": "uuid",
    "clientSecret": "pi_xxx_secret_xxx",  // Stripe
    "paypalOrderId": "PAY-xxx",           // PayPal
    "reference": "MOB-xxx"               // Mobile Money
  }
}
```

---

## 7.2 POST /api/payments/:intentId/confirm

**Description :** Confirmer un paiement  
**Auth :** Oui  
**Body (Stripe) :**

```json
{
  "paymentMethodId": "pm_xxx"
}
```

**Body (PayPal) :**

```json
{
  "payerId": "xxx",
  "token": "EC-xxx"
}
```

**Logique :**
1. Confirmer avec le provider (Stripe/PayPal)
2. Mettre à jour le statut Payment → `completed`
3. Mettre à jour la commande → `confirmed`
4. Envoyer email de confirmation

**Réponse 200 :**

```json
{
  "data": {
    "status": "completed",
    "transactionId": "pi_xxx"
  }
}
```

---

## 7.3 GET /api/payments/methods

**Description :** Méthodes de paiement disponibles  
**Auth :** Non  
**Réponse 200 :**

```json
{
  "data": [
    { "id": "credit_card", "name": "Carte bancaire", "icon": "credit-card", "enabled": true },
    { "id": "paypal", "name": "PayPal", "icon": "paypal", "enabled": true },
    { "id": "apple_pay", "name": "Apple Pay", "icon": "apple", "enabled": true },
    { "id": "google_pay", "name": "Google Pay", "icon": "google", "enabled": true },
    { "id": "mobile_money", "name": "Mobile Money", "icon": "smartphone", "enabled": true }
  ]
}
```

---

## 7.4 POST /api/payments/:paymentId/refund

**Description :** Rembourser un paiement  
**Auth :** Oui (admin)  
**Body :**

```json
{
  "amount": 75.97,
  "reason": "Produit défectueux"
}
```

**Logique :**
1. Créer le remboursement Stripe/PayPal
2. Mettre à jour Payment → `refunded` ou `partially_refunded`
3. Mettre à jour Order → `refunded`
4. Remettre le stock
5. Envoyer email de notification

---

## 7.5 GET /api/payments/history

**Description :** Historique des paiements (admin)  
**Auth :** Oui (admin)  
**Query :** `page`, `limit`, `status`, `method`, `dateFrom`, `dateTo`  
**Réponse 200 :** Liste paginée de paiements

---

## 7.6 Webhooks Stripe

**Route :** `POST /api/webhooks/stripe`  
**Auth :** Signature Stripe (pas JWT)  
**Événements gérés :**

| Événement | Action |
|---|---|
| `payment_intent.succeeded` | Confirmer le paiement |
| `payment_intent.payment_failed` | Marquer comme échoué |
| `charge.refunded` | Traiter le remboursement |
| `charge.dispute.created` | Notifier l'admin |

---

## 7.7 Webhooks PayPal

**Route :** `POST /api/webhooks/paypal`  
**Auth :** Signature PayPal  
**Événements gérés :**

| Événement | Action |
|---|---|
| `PAYMENT.CAPTURE.COMPLETED` | Confirmer le paiement |
| `PAYMENT.CAPTURE.DENIED` | Marquer comme échoué |
| `PAYMENT.CAPTURE.REFUNDED` | Traiter le remboursement |

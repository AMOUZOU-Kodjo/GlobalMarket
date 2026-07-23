# Chapitre 6 — API REST : Panier & Commandes

## 6.1 Panier

Base URL : `/api/cart`

### 6.1.1 GET /api/cart

**Description :** Récupérer le panier de l'utilisateur  
**Auth :** Oui  
**Réponse 200 :**

```json
{
  "data": {
    "id": "uuid",
    "items": [
      {
        "id": "uuid",
        "product": {
          "id": "uuid",
          "name": "string",
          "price": 29.99,
          "image": "string",
          "stock": 50,
          "seller": { "id": "uuid", "shopName": "string" }
        },
        "variant": { "id": "uuid", "name": "Rouge / XL" },
        "quantity": 2
      }
    ],
    "coupon": null,
    "subtotal": 59.98,
    "total": 59.98,
    "totalItems": 2
  }
}
```

---

### 6.1.2 POST /api/cart/items

**Description :** Ajouter un produit au panier  
**Auth :** Oui  
**Body :**

```json
{
  "productId": "uuid",
  "variantId": "uuid (optionnel)",
  "quantity": 1
}
```

**Logique :**
- Si le produit est déjà dans le panier → incrémente la quantité
- Vérifie le stock disponible
- Retourne le panier mis à jour

---

### 6.1.3 PUT /api/cart/items/:itemId

**Description :** Modifier la quantité  
**Auth :** Oui  
**Body :**

```json
{ "quantity": 3 }
```

**Logique :**
- Si quantity = 0 → supprime l'élément
- Vérifie le stock

---

### 6.1.4 DELETE /api/cart/items/:itemId

**Description :** Supprimer un élément du panier  
**Auth :** Oui  
**Réponse 200 :** Panier mis à jour

---

### 6.1.5 DELETE /api/cart

**Description :** Vider le panier  
**Auth :** Oui  
**Réponse 200 :** `{ "message": "Panier vidé" }`

---

### 6.1.6 POST /api/cart/coupon

**Description :** Appliquer un coupon  
**Auth :** Oui  
**Body :**

```json
{ "code": "string" }
```

**Réponse 200 :**

```json
{
  "data": {
    "coupon": { "code": "ETE2026", "type": "percentage", "value": 20 },
    "discount": 12.00,
    "total": 47.98
  }
}
```

**Erreurs :**
- 400 : `"Coupon invalide ou expiré"`
- 400 : `"Montant minimum non atteint"`

---

### 6.1.7 DELETE /api/cart/coupon

**Description :** Retirer le coupon  
**Auth :** Oui  
**Réponse 200 :** Panier mis à jour sans réduction

---

## 6.2 Commandes

Base URL : `/api/orders`

### 6.2.1 GET /api/orders

**Description :** Historique des commandes de l'utilisateur  
**Auth :** Oui  
**Query :** `page`, `limit`, `status`  
**Réponse 200 :**

```json
{
  "data": [
    {
      "id": "uuid",
      "orderNumber": "GM-2026-000001",
      "status": "delivered",
      "totalAmount": 89.97,
      "currency": "EUR",
      "itemsCount": 3,
      "createdAt": "2026-06-15T10:00:00.000Z"
    }
  ],
  "meta": { ... }
}
```

---

### 6.2.2 GET /api/orders/:id

**Description :** Détail d'une commande  
**Auth :** Oui (propriétaire ou admin)  
**Réponse 200 :**

```json
{
  "data": {
    "id": "uuid",
    "orderNumber": "GM-2026-000001",
    "status": "shipped",
    "subtotal": 79.98,
    "shippingCost": 5.99,
    "taxAmount": 0.00,
    "discountAmount": 10.00,
    "totalAmount": 75.97,
    "currency": "EUR",
    "notes": "Livrer avant 18h",
    "shippingMethod": "standard",
    "trackingNumber": "DHL123456789",
    "items": [
      {
        "id": "uuid",
        "productName": "iPhone 15 Pro",
        "productImage": "string",
        "quantity": 1,
        "unitPrice": 79.98,
        "totalPrice": 79.98,
        "seller": { "id": "uuid", "shopName": "TechStore" }
      }
    ],
    "address": {
      "firstName": "Jean",
      "lastName": "Dupont",
      "address1": "123 Rue de Paris",
      "city": "Paris",
      "postalCode": "75001",
      "country": "France"
    },
    "payments": [
      { "id": "uuid", "method": "credit_card", "amount": 75.97, "status": "completed", "paidAt": "..." }
    ],
    "shipments": [
      { "id": "uuid", "carrier": "DHL", "trackingNumber": "DHL123...", "status": "in_transit" }
    ],
    "createdAt": "2026-06-15T10:00:00.000Z"
  }
}
```

---

### 6.2.3 POST /api/orders

**Description :** Créer une commande (checkout)  
**Auth :** Oui  
**Body :**

```json
{
  "addressId": "uuid",
  "shippingMethod": "standard | express",
  "paymentMethod": "credit_card | paypal | mobile_money",
  "notes": "string (optionnel)",
  "couponCode": "string (optionnel)"
}
```

**Logique de création :**

1. Valider le panier (produits en stock, prix à jour)
2. Calculer les totaux (subtotal, shipping, tax, discount)
3. Générer `orderNumber` : `GM-YYYY-XXXXXX`
4. Créer la commande + orderItems
5. Décrémenter le stock des produits
6. Appliquer le commission vendeur
7. Vider le panier
8. Retourner la commande créée

**Réponse 201 :** Commande créée

---

### 6.2.4 POST /api/orders/:id/cancel

**Description :** Annuler une commande  
**Auth :** Oui (propriétaire)  
**Condition :** Seulement si status = `pending` ou `confirmed`

**Logique :**
- Remettre le stock
- Marquer comme `cancelled`
- Si déjà payée → déclencher un remboursement

---

### 6.2.5 GET /api/orders/:id/tracking

**Description :** Suivi de livraison  
**Auth :** Oui (propriétaire)  
**Réponse 200 :**

```json
{
  "data": {
    "carrier": "DHL",
    "trackingNumber": "DHL123456789",
    "trackingUrl": "https://track.dhl.com/DHL123...",
    "status": "in_transit",
    "estimatedDelivery": "2026-06-20T18:00:00.000Z",
    "events": [
      { "status": "picked_up", "location": "Paris", "timestamp": "2026-06-16T09:00:00Z" },
      { "status": "in_transit", "location": "Lyon", "timestamp": "2026-06-17T14:00:00Z" }
    ]
  }
}
```

---

### 6.2.6 GET /api/orders/:id/invoice

**Description :** Télécharger la facture PDF  
**Auth :** Oui (propriétaire)  
**Content-Type :** `application/pdf`  
**Content-Disposition :** `attachment; filename="facture-GM-2026-000001.pdf"`

**Contenu du PDF :**
- En-tête GlobalMarket
- Numéro de commande
- Détail des articles
- Sous-total, frais, taxes, total
- Adresse de livraison
- Infos de paiement

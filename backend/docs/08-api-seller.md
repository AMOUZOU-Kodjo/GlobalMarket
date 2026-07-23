# Chapitre 8 — API REST : Vendeur

Base URL : `/api/seller`  
**Auth requise :** Oui (rôle `seller`) sauf `/register`

## 8.1 POST /api/seller/register

**Description :** Inscription vendeur (un buyer peut devenir seller)  
**Auth :** Oui (buyer)  
**Body :**

```json
{
  "shopName": "Ma Boutique",
  "description": "Description de ma boutique",
  "category": "Électronique",
  "country": "France",
  "businessType": "individual | company"
}
```

**Logique :**
1. Valider l'unicité du shopName
2. Créer le profil Seller
3. Générer le slug à partir du shopName
4. Mettre à jour le rôle User → `seller`

**Réponse 201 :** Profil vendeur créé

---

## 8.2 GET /api/seller/dashboard

**Description :** Tableau de bord vendeur  
**Auth :** Oui (seller)  
**Réponse 200 :**

```json
{
  "data": {
    "stats": {
      "totalSales": 1250,
      "totalRevenue": 45678.50,
      "pendingOrders": 8,
      "activeProducts": 45,
      "averageRating": 4.7,
      "conversionRate": 3.2
    },
    "recentOrders": [
      { "id": "uuid", "orderNumber": "GM-2026-000123", "totalAmount": 89.97, "status": "pending", "createdAt": "..." }
    ],
    "salesChart": [
      { "date": "2026-07-01", "sales": 1200, "orders": 15 },
      { "date": "2026-07-02", "sales": 980, "orders": 12 }
    ],
    "topProducts": [
      { "id": "uuid", "name": "iPhone 15", "salesCount": 45, "revenue": 53995.55 }
    ]
  }
}
```

---

## 8.3 GET /api/seller/shop

**Description :** Profil de la boutique  
**Auth :** Oui (seller)  
**Réponse 200 :** Détail du profil seller + paramètres

---

## 8.4 PUT /api/seller/shop

**Description :** Modifier la boutique  
**Auth :** Oui (seller)  
**Body :** Champs modifiables (shopName, description, logo, banner, etc.)  
**Réponse 200 :** Profil mis à jour

---

## 8.5 GET /api/seller/products

**Description :** Produits du vendeur  
**Auth :** Oui (seller)  
**Query :** `page`, `limit`, `status`, `search`, `sort`  
**Réponse 200 :** Liste paginée des produits du vendeur (tous statuts)

---

## 8.6 POST /api/seller/products

**Description :** Créer un produit  
**Auth :** Oui (seller)  
**Body :** Identique à 5.1.10 (POST /api/products)  
**Effet :** `sellerId` est automatiquement `req.user.sellerId`

---

## 8.7 PUT /api/seller/products/:id

**Description :** Modifier un produit du vendeur  
**Auth :** Oui (propriétaire)  
**Vérification :** Le produit appartient au vendeur courant

---

## 8.8 DELETE /api/seller/products/:id

**Description :** Supprimer un produit  
**Auth :** Oui (propriétaire)  
**Condition :** Pas de commandes en cours pour ce produit

---

## 8.9 GET /api/seller/orders

**Description :** Commandes contenant des produits du vendeur  
**Auth :** Oui (seller)  
**Query :** `page`, `limit`, `status`, `dateFrom`, `dateTo`  
**Réponse 200 :**

```json
{
  "data": [
    {
      "id": "uuid",
      "orderNumber": "GM-2026-000123",
      "buyer": { "name": "Jean Dupont" },
      "items": [
        { "productName": "iPhone 15", "quantity": 1, "unitPrice": 79.98 }
      ],
      "totalAmount": 79.98,
      "status": "confirmed",
      "createdAt": "..."
    }
  ],
  "meta": { ... }
}
```

---

## 8.10 GET /api/seller/orders/:id

**Description :** Détail d'une commande vendeur  
**Auth :** Oui (seller)  
**Vérification :** Le vendeur a au moins un item dans cette commande

---

## 8.11 PATCH /api/seller/orders/:id/status

**Description :** Mettre à jour le statut d'un item de commande  
**Auth :** Oui (seller)  
**Body :**

```json
{ "status": "processing | shipped | delivered" }
```

**Logique :**
- Si shipped → enregistrer le numéro de suivi
- Si tous les items d'une commande sont livrés → commande = livrée

---

## 8.12 GET /api/seller/analytics

**Description :** Statistiques avancées du vendeur  
**Auth :** Oui (seller)  
**Query :** `period` (7d | 30d | 90d | 1y)  
**Réponse 200 :**

```json
{
  "data": {
    "revenue": { "total": 45678.50, "change": 12.5 },
    "orders": { "total": 350, "change": 8.2 },
    "averageOrderValue": 130.51,
    "conversionRate": 3.2,
    "topProducts": [...],
    "salesByDay": [...],
    "salesByCategory": [...],
    "customerRetention": 45.2
  }
}
```

---

## 8.13 GET /api/seller/payouts

**Description :** Historique des virements  
**Auth :** Oui (seller)  
**Réponse 200 :**

```json
{
  "data": [
    {
      "id": "uuid",
      "amount": 1250.00,
      "currency": "EUR",
      "status": "completed",
      "method": "bank_transfer",
      "paidAt": "2026-07-01T10:00:00Z"
    }
  ]
}
```

---

## 8.14 PUT /api/seller/bank-account

**Description :** Mettre à jour les infos bancaires  
**Auth :** Oui (seller)  
**Body :**

```json
{
  "iban": "FR76...",
  "bic": "BNPAFRPP",
  "holderName": "Jean Dupont"
}
```

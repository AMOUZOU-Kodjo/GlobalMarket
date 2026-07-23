# Chapitre 9 — API REST : Administration

Base URL : `/api/admin`  
**Auth requise :** Oui (rôle `admin`)

## 9.1 GET /api/admin/dashboard

**Description :** Tableau de bord administrateur  
**Réponse 200 :**

```json
{
  "data": {
    "stats": {
      "totalUsers": 125000,
      "totalSellers": 8500,
      "totalProducts": 450000,
      "totalOrders": 89000,
      "totalRevenue": 2500000,
      "monthlyRevenue": 450000,
      "pendingOrders": 120,
      "pendingPayouts": 45,
      "openTickets": 28
    },
    "recentOrders": [...],
    "newUsers": [...],
    "revenueChart": [...],
    "topSellers": [...],
    "alerts": [
      { "type": "warning", "message": "15 produits en rupture de stock" },
      { "type": "info", "message": "12 nouvelles demandes vendeur" }
    ]
  }
}
```

---

## 9.2 GET /api/admin/users

**Description :** Liste des utilisateurs  
**Query :** `page`, `limit`, `role`, `status`, `search`, `sort`  
**Réponse 200 :** Liste paginée

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Jean Dupont",
      "email": "jean@email.com",
      "role": "buyer",
      "status": "active",
      "ordersCount": 15,
      "totalSpent": 1250.00,
      "createdAt": "..."
    }
  ]
}
```

---

## 9.3 GET /api/admin/users/:id

**Description :** Détail d'un utilisateur  
**Réponse 200 :** Profil complet + adresses + dernières commandes

---

## 9.4 PATCH /api/admin/users/:id/status

**Description :** Changer le statut d'un utilisateur  
**Body :**

```json
{ "status": "active | inactive | suspended | banned" }
```

**Effet :** Si banned → supprime tous les refresh tokens

---

## 9.5 PATCH /api/admin/users/:id/role

**Description :** Changer le rôle d'un utilisateur  
**Body :**

```json
{ "role": "buyer | seller | admin | delivery" }
```

---

## 9.6 GET /api/admin/products

**Description :** Tous les produits (modération)  
**Query :** `page`, `limit`, `status`, `category`, `search`, `sort`  
**Réponse 200 :** Liste paginée avec infos vendeur

---

## 9.7 PATCH /api/admin/products/:id/moderate

**Description :** Modérer un produit  
**Body :**

```json
{ "action": "approve | reject | suspend" }
```

**Effets :**
- approve → status = `active`
- reject → status = `inactive` + notification au vendeur
- suspend → status = `suspended` + notification

---

## 9.8 GET /api/admin/orders

**Description :** Toutes les commandes  
**Query :** `page`, `limit`, `status`, `dateFrom`, `dateTo`, `seller`, `search`  
**Réponse 200 :** Liste paginée

---

## 9.9 PATCH /api/admin/orders/:id/status

**Description :** Modifier le statut d'une commande (admin override)  
**Body :**

```json
{ "status": "processing | shipped | delivered | cancelled | refunded" }
```

---

## 9.10 POST /api/admin/orders/:id/refund

**Description :** Rembourser une commande (admin)  
**Body :**

```json
{
  "amount": 75.97,
  "reason": "Litige résolu en faveur de l'acheteur"
}
```

**Effets :**
1. Créer le remboursement (Stripe/PayPal)
2. Mettre à jour paiement + commande
3. Remettre le stock
4. Notifier l'acheteur et le vendeur

---

## 9.11 GET /api/admin/reports/:type

**Description :** Rapports et statistiques  
**Types disponibles :**

| Type | Description |
|---|---|
| sales | Ventes par période |
| revenue | Revenus par catégorie/vendeur |
| users | Inscriptions, activité |
| products | Produits populaires, catégories |
| sellers | Performance vendeurs |
| payouts | Virements effectués |

**Query :** `period` (7d | 30d | 90d | 1y), `groupBy` (day | week | month)

---

## 9.12 GET /api/admin/settings

**Description :** Paramètres système  
**Réponse 200 :**

```json
{
  "data": {
    "siteName": "GlobalMarket",
    "siteDescription": "Marketplace mondiale",
    "commissionRate": 0.12,
    "paymentMethods": ["credit_card", "paypal", "mobile_money"],
    "defaultShippingRate": 5.99,
    "shippingFreeThreshold": 50,
    "emailOrderConfirmation": true,
    "emailOrderShipped": true,
    "emailNewSeller": true,
    "emailLowStock": true
  }
}
```

---

## 9.13 PUT /api/admin/settings

**Description :** Modifier les paramètres système  
**Body :** Champs modifiables  
**Effet :** Invalider le cache Redis

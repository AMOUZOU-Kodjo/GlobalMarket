# Chapitre 5 — API REST : Produits & Catégories

## 5.1 Produits

Base URL : `/api/products`

### 5.1.1 GET /api/products

**Description :** Liste paginée des produits  
**Auth :** Non  
**Query params :**

| Param | Type | Défaut | Description |
|---|---|---|---|
| page | number | 1 | Numéro de page |
| limit | number | 20 | Éléments par page |
| sort | string | created_at | Champ de tri |
| order | string | desc | asc / desc |
| category | string | — | Slug de catégorie |
| minPrice | number | — | Prix minimum |
| maxPrice | number | — | Prix maximum |
| search | string | — | Recherche texte |
| status | string | active | Statut produit |
| seller | uuid | — | ID vendeur |

**Réponse 200 :**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "string",
      "slug": "string",
      "price": 29.99,
      "compareAtPrice": 39.99,
      "images": [{ "url": "string", "alt": "string", "isPrimary": true }],
      "averageRating": 4.5,
      "reviewCount": 12,
      "stock": 50,
      "seller": { "id": "uuid", "shopName": "string", "rating": 4.8 },
      "category": { "id": "uuid", "name": "string", "slug": "string" },
      "status": "active",
      "createdAt": "2026-01-15T10:00:00.000Z"
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 150, "totalPages": 8 }
}
```

---

### 5.1.2 GET /api/products/:id

**Description :** Détail d'un produit  
**Auth :** Non  
**Effet secondaire :** Incrémente `viewCount`

**Réponse 200 :**

```json
{
  "data": {
    "id": "uuid",
    "name": "string",
    "slug": "string",
    "description": "string (markdown)",
    "shortDescription": "string",
    "price": 29.99,
    "compareAtPrice": 39.99,
    "sku": "string",
    "stock": 50,
    "weight": 500,
    "dimensions": { "length": 20, "width": 15, "height": 10 },
    "images": [
      { "id": "uuid", "url": "string", "alt": "string", "isPrimary": true, "sortOrder": 0 }
    ],
    "variants": [
      { "id": "uuid", "name": "Rouge / XL", "price": 29.99, "stock": 15, "attributes": { "color": "rouge", "size": "XL" } }
    ],
    "averageRating": 4.5,
    "reviewCount": 12,
    "salesCount": 150,
    "tags": ["smartphone", "apple"],
    "seller": {
      "id": "uuid",
      "shopName": "string",
      "slug": "string",
      "rating": 4.8,
      "totalSales": 500,
      "verified": true
    },
    "category": { "id": "uuid", "name": "Électronique", "slug": "electronique" },
    "status": "active",
    "publishedAt": "2026-01-15T10:00:00.000Z",
    "createdAt": "2026-01-15T10:00:00.000Z"
  }
}
```

---

### 5.1.3 GET /api/products/slug/:slug

**Description :** Produit par slug (SEO-friendly)  
**Auth :** Non  
**Réponse :** Identique à 5.1.2

---

### 5.1.4 GET /api/products/category/:categorySlug

**Description :** Produits d'une catégorie  
**Auth :** Non  
**Query :** Mêmes params que 5.1.1  
**Réponse :** Identique à 5.1.1

---

### 5.1.5 GET /api/products/search?q=...

**Description :** Recherche plein texte  
**Auth :** Non  
**Query :** `q` (requis) + params de pagination

**Réponse :** Identique à 5.1.1, avec results triés par pertinence (ts_rank)

---

### 5.1.6 GET /api/products/featured

**Description :** Produits en vedette  
**Auth :** Non  
**Réponse :** Tableau de produits (max 12)

---

### 5.1.7 GET /api/products/trending

**Description :** Produits tendance  
**Auth :** Non  
**Réponse :** Tableau de produits (max 12)

---

### 5.1.8 GET /api/products/new

**Description :** Nouveaux produits  
**Auth :** Non  
**Réponse :** Tableau de produits (max 12), triés par `publishedAt DESC`

---

### 5.1.9 GET /api/products/:id/related

**Description :** Produits similaires  
**Auth :** Non  
**Réponse :** Tableau de 4-8 produits de même catégorie

---

### 5.1.10 POST /api/products

**Description :** Créer un produit  
**Auth :** Oui (seller)  
**Body :**

```json
{
  "name": "string",
  "categoryId": "uuid",
  "description": "string",
  "shortDescription": "string (optionnel)",
  "price": 29.99,
  "compareAtPrice": 39.99,
  "costPrice": 15.00,
  "sku": "string (optionnel)",
  "stock": 50,
  "lowStockThreshold": 5,
  "weight": 500,
  "dimensions": { "length": 20, "width": 15, "height": 10 },
  "tags": ["tag1", "tag2"],
  "variants": [
    { "name": "Rouge / XL", "price": 29.99, "stock": 15, "attributes": { "color": "rouge", "size": "XL" } }
  ]
}
```

**Réponse 201 :** Produit créé  
**Effets :** Génère le slug automatiquement

---

### 5.1.11 PUT /api/products/:id

**Description :** Modifier un produit  
**Auth :** Oui (propriétaire du produit)  
**Body :** Champs à modifier  
**Réponse 200 :** Produit modifié

---

### 5.1.12 DELETE /api/products/:id

**Description :** Supprimer un produit  
**Auth :** Oui (propriétaire)  
**Réponse 200 :** `{ "message": "Produit supprimé" }`  
**Effet :** Supprime les images associées (physiquement et en BDD)

---

### 5.1.13 POST /api/products/:id/images

**Description :** Upload d'images  
**Auth :** Oui (propriétaire)  
**Content-Type :** `multipart/form-data`  
**Champ :** `images` (multi-files, max 10)

**Contraintes :**
- Formats : jpg, jpeg, png, webp
- Taille max : 5 Mo par fichier
- Redimensionnement automatique : 800x800 (max)

**Réponse 201 :**

```json
{
  "data": [
    { "id": "uuid", "url": "/uploads/products/abc123.webp", "alt": "", "isPrimary": true }
  ]
}
```

---

### 5.1.14 DELETE /api/products/:id/images/:imageId

**Description :** Supprimer une image  
**Auth :** Oui (propriétaire)  
**Réponse 200 :** `{ "message": "Image supprimée" }`  
**Effet :** Supprime le fichier physique

---

## 5.2 Catégories

Base URL : `/api/categories`

### 5.2.1 GET /api/categories

**Description :** Liste plate des catégories  
**Auth :** Non  
**Réponse 200 :** Tableau de catégories

```json
{
  "data": [
    { "id": "uuid", "name": "Électronique", "slug": "electronique", "icon": "📱", "productCount": 1250 }
  ]
}
```

---

### 5.2.2 GET /api/categories/tree

**Description :** Arbre hiérarchique des catégories  
**Auth :** Non  
**Réponse 200 :**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Électronique",
      "slug": "electronique",
      "icon": "📱",
      "children": [
        { "id": "uuid", "name": "Smartphones", "slug": "smartphones", "icon": "📱", "children": [] }
      ]
    }
  ]
}
```

---

### 5.2.3 GET /api/categories/:id

**Description :** Détail d'une catégorie  
**Auth :** Non  
**Réponse 200 :** Catégorie + infos produitCount

---

### 5.2.4 GET /api/categories/slug/:slug

**Description :** Catégorie par slug  
**Auth :** Non  
**Réponse :** Identique à 5.2.3

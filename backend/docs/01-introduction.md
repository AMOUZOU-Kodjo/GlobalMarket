# Chapitre 1 — Introduction & Contexte

## 1.1 Objectif du projet

GlobalMarket est une plateforme e-commerce mondiale multi-vendeurs visant à connecter acheteurs et vendeurs à l'échelle internationale. Le backend constitue le cœur système de la plateforme, responsable de la logique métier, de la gestion des données, de l'authentification et de l'intégration avec les services tiers.

## 1.2 Positionnement

Le backend doit :

- Servir une API RESTful consommée par le frontend React
- Gérer la logique métier complexe (multi-vendeurs, paiements escrow, livraison)
- Assurer la sécurité et la conformité RGPD
- Être scalable, résilient et observable
- Supporter le déploiement conteneurisé (Docker)

## 1.3 Principes directeurs

| Principe | Description |
|---|---|
| **Séparation des responsabilités** | Controllers ↔ Services ↔ Repositories |
| **API-First** | Le frontend définit le contrat ; le backend l'implémente |
| **Sécurité par conception** | Validation de toutes les entrées, authentification systématique |
| **Idempotence** | Les opérations critiques (paiement, commande) sont idempotentes |
| **Audit trail** | Toutes les mutations importantes sont tracées |
| **Fail-safe** | Les erreurs retournent toujours `{ message: string }` |

## 1.4 Contract frontend → backend

### 1.4.1 Format de réponse

```json
// Succès (2xx)
{
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}

// Erreur (4xx / 5xx)
{
  "message": "Description de l'erreur en français"
}
```

### 1.4.2 Authentification

```
Authorization: Bearer <jwt_token>
```

### 1.4.3 Content-Type

- Requêtes : `application/json` (sauf uploads : `multipart/form-data`)
- Réponses : `application/json` (sauf factures : `application/pdf`)

### 1.4.4 Pagination

Toutes les listes supportent :

```
GET /api/resource?page=1&limit=20&sort=created_at&order=desc&search=terme
```

### 1.4.5 Proxys

Le frontend Vite proxy `/api` → `http://localhost:5000`

Toutes les routes backend commencent par `/api/`.

## 1.5 Portées fonctionnelles

| Module | Endpoints | Priorité |
|---|---|---|
| Authentification | 10 | P0 |
| Produits | 14 | P0 |
| Catégories | 4 | P0 |
| Panier | 7 | P0 |
| Commandes | 6 | P0 |
| Paiements | 5 | P0 |
| Vendeur | 14 | P0 |
| Administration | 13 | P1 |
| Support | 7 | P1 |
| Uploads | 4 | P0 |
| **Total** | **84** | — |

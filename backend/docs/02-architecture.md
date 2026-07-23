# Chapitre 2 — Architecture Technique

## 2.1 Architecture générale

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Frontend   │────▶│  API Gateway  │────▶│   Backend   │
│   (React)    │     │  (Express)    │     │  (Node.js)  │
└─────────────┘     └──────────────┘     └──────┬──────┘
                                                │
                    ┌───────────────────────────┼──────────────────┐
                    │                           │                  │
              ┌─────▼─────┐              ┌──────▼──────┐    ┌──────▼──────┐
              │ PostgreSQL │              │    Redis     │    │  File System │
              │  (données) │              │   (cache)    │    │  (uploads)   │
              └────────────┘              └─────────────┘    └─────────────┘
```

## 2.2 Structure du projet

```
backend/
├── src/
│   ├── config/           # Configuration (DB, Redis, JWT, mail, etc.)
│   │   ├── database.js
│   │   ├── redis.js
│   │   ├── jwt.js
│   │   ├── mail.js
│   │   └── upload.js
│   ├── middleware/        # Middlewares Express
│   │   ├── auth.js        # Vérification JWT
│   │   ├── role.js        # RBAC (admin, seller, buyer, delivery)
│   │   ├── validate.js    # Validation Zod
│   │   ├── upload.js      # Gestion multer
│   │   ├── rateLimiter.js # Limitation de débit
│   │   └── errorHandler.js
│   ├── routes/            # Routeurs Express (un par module)
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   ├── category.routes.js
│   │   ├── cart.routes.js
│   │   ├── order.routes.js
│   │   ├── payment.routes.js
│   │   ├── seller.routes.js
│   │   ├── admin.routes.js
│   │   ├── support.routes.js
│   │   └── upload.routes.js
│   ├── controllers/       # Controllers (requete → réponse)
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── category.controller.js
│   │   ├── cart.controller.js
│   │   ├── order.controller.js
│   │   ├── payment.controller.js
│   │   ├── seller.controller.js
│   │   ├── admin.controller.js
│   │   ├── support.controller.js
│   │   └── upload.controller.js
│   ├── services/          # Logique métier
│   │   ├── auth.service.js
│   │   ├── product.service.js
│   │   ├── category.service.js
│   │   ├── cart.service.js
│   │   ├── order.service.js
│   │   ├── payment.service.js
│   │   ├── seller.service.js
│   │   ├── admin.service.js
│   │   ├── support.service.js
│   │   ├── upload.service.js
│   │   ├── email.service.js
│   │   ├── notification.service.js
│   │   └── invoice.service.js
│   ├── repositories/      # Accès données (Prisma)
│   │   ├── user.repository.js
│   │   ├── product.repository.js
│   │   ├── category.repository.js
│   │   ├── cart.repository.js
│   │   ├── order.repository.js
│   │   ├── payment.repository.js
│   │   ├── seller.repository.js
│   │   ├── coupon.repository.js
│   │   ├── support.repository.js
│   │   └── settings.repository.js
│   ├── validators/        # Schémas Zod
│   │   ├── auth.validator.js
│   │   ├── product.validator.js
│   │   ├── order.validator.js
│   │   ├── payment.validator.js
│   │   └── seller.validator.js
│   ├── utils/             # Utilitaires
│   │   ├── slugify.js
│   │   ├── pagination.js
│   │   ├── hash.js
│   │   ├── token.js
│   │   └── logger.js
│   ├── prisma/
│   │   └── schema.prisma  # Schéma Prisma (source de vérité DB)
│   └── app.js             # Point d'entrée Express
├── prisma/
│   └── migrations/
├── uploads/               # Fichiers uploadés (gitignored)
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── .env.example
├── package.json
└── vitest.config.js
```

## 2.3 Pattern architectural : Controller → Service → Repository

```
Request → Controller → Service → Repository → Prisma → PostgreSQL
              ↓
         Validation (Zod)
              ↓
         Auth middleware (JWT)
              ↓
         Role middleware (RBAC)
```

### Exemple flux complet

```
POST /api/seller/products
  │
  ├── authMiddleware    → vérifie JWT, injecte req.user
  ├── sellerMiddleware  → vérifie req.user.role === 'seller'
  ├── validate(productSchema) → valide le body avec Zod
  │
  └── sellerController.createProduct
        │
        └── sellerService.createProduct
              │
              ├── productRepository.create(data)
              │     └── prisma.product.create({ ... })
              │
              └── Retourne { data: product }
```

## 2.4 Configuration

### Variables d'environnement (.env)

```env
# Serveur
PORT=5000
NODE_ENV=development

# PostgreSQL
DATABASE_URL=postgresql://globalmarket:secret@localhost:5432/globalmarket_db

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=votre-secret-jwt-tres-long
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=votre-refresh-secret-jwt
JWT_REFRESH_EXPIRES_IN=30d

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# PayPal
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@globalmarket.com
SMTP_PASS=...
EMAIL_FROM=GlobalMarket <noreply@globalmarket.com>

# Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760

# Frontend URL (pour emails)
FRONTEND_URL=http://localhost:5173
```

## 2.5 Base de données : PostgreSQL 16

### Pourquoi PostgreSQL

| Critère | PostgreSQL |
|---|---|
| ACID | Transactionnel, fiable |
| JSON | Colonnes JSONB pour données flexibles |
| Full-text search | Recherche texte intégrée |
| Extensions | pg_trgm (fuzzy search), uuid-ossp |
| Performance | Index B-tree, GIN, GiST |
| Écosystème | Prisma ORM, mature et documenté |

### Configuration PostgreSQL

```sql
-- Extension pour recherche fuzzy
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Extension pour UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Locale français
SET lc_messages = 'fr_FR.UTF-8';
```

## 2.6 Cache Redis

| Usage | TTL | Clé |
|---|---|---|
| Session utilisateur | 7d | `user:{id}` |
| Produit en vedette | 1h | `product:featured` |
| Catégories (arbre) | 24h | `categories:tree` |
| Recherche populaire | 6h | `search:popular` |
| Rate limiting | 1min | `ratelimit:{ip}:{route}` |
| Panier utilisateur | 30d | `cart:{userId}` |

## 2.7 Logging & Monitoring

| Outil | Usage |
|---|---|
| Winston | Structured logging (JSON) |
| Morgan | HTTP request logging |
| Prometheus (optionnel) | Métriques |
| Sentry (optionnel) | Error tracking |

### Niveaux de log

| Niveau | Usage |
|---|---|
| error | Erreurs serveur, exceptions |
| warn | Rate limiting, dépréciations |
| info | Requêtes réussies, événements métier |
| debug | SQL queries, payloads (dev uniquement) |

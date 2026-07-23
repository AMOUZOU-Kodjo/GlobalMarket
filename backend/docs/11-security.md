# Chapitre 11 — Sécurité & Authentification

## 11.1 Authentification JWT

### 11.1.1 Tokens

| Token | Durée | Stockage | Usage |
|---|---|---|---|
| Access Token | 7 jours | Header `Authorization` | Authentifier chaque requête |
| Refresh Token | 30 jours | HTTP-only cookie + BDD | Renouveler l'access token |

### 11.1.2 Structure du JWT

```json
{
  "sub": "uuid utilisateur",
  "email": "string",
  "role": "buyer | seller | admin | delivery",
  "iat": 1753000000,
  "exp": 1753604800
}
```

### 11.1.3 Flux d'authentification

```
1. Login → credentials validés → JWT signé → retourné au client
2. Client stocke le token (localStorage)
3. Chaque requête : Authorization: Bearer <token>
4. Middleware auth.js : vérifie la signature, injecte req.user
5. Token expiré → 401 → client appelle /refresh-token
6. Refresh token invalide → 401 → reconnexion requise
```

## 11.2 Hachage des mots de passe

**Algorithme :** bcrypt (12 rounds)

```js
// Hachage
const hash = await bcrypt.hash(password, 12)

// Vérification
const valid = await bcrypt.compare(inputPassword, hash)
```

## 11.3 RBAC (Role-Based Access Control)

```js
// Middleware de rôle
function requireRole(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Accès interdit' })
    }
    next()
  }
}

// Utilisation
router.get('/admin/users', auth, requireRole('admin'), adminController.getUsers)
router.post('/seller/products', auth, requireRole('seller'), sellerController.createProduct)
```

### Matrice d'accès

| Ressource | Buyer | Seller | Admin | Delivery |
|---|---|---|---|---|
| Lire produits | ✅ | ✅ | ✅ | ✅ |
| Créer produit | ❌ | ✅ | ✅ | ❌ |
| Modifier produit | ❌ | Propriétaire | ✅ | ❌ |
| Lire commandes | Propriétaire | Liées | ✅ | Livraisons |
| Créer commande | ✅ | ❌ | ✅ | ❌ |
| Gérer paiements | ❌ | ❌ | ✅ | ❌ |
| Gérer utilisateurs | ❌ | ❌ | ✅ | ❌ |
| Stats vendeur | ❌ | Propriétaire | ✅ | ❌ |
| Tickets support | Propriétaire | Propriétaire | ✅ | ❌ |

## 11.4 Validation des entrées

**Outil :** Zod

```js
const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères')
})

// Middleware
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ message: result.error.issues[0].message })
    }
    req.body = result.data
    next()
  }
}
```

## 11.5 Protection contre les attaques

| Attaque | Protection |
|---|---|
| Brute force | Rate limiting (100 req/min par IP) |
| SQL injection | Prisma ORM (pas de SQL brut) |
| XSS | Sanitization des entrées, Content-Security-Policy |
| CSRF | Token SameSite cookie + Origin header |
| Man-in-the-middle | HTTPS obligatoire en production |
| Enumeration d'emails | Réponses uniformisées (toujours 200 pour forgot-password) |
| Fichier volumineux | Limitation taille upload (5 Mo image, 10 Mo document) |
| Injections NoSQL | Validation Zod sur tous les inputs |

## 11.6 Rate Limiting

```js
// Par IP et par route
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,     // 1 minute
  max: 100,                 // 100 requêtes par minute
  message: { message: 'Trop de requêtes, veuillez réessayer' }
})

// Routes sensibles (login, register)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 10,                    // 10 tentatives
  message: { message: 'Trop de tentatives, veuillez réessayer plus tard' }
})
```

## 11.7 Headers de sécurité (Helmet)

```js
const helmet = require('helmet')

app.use(helmet({
  contentSecurityPolicy: true,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: false
}))
```

## 11.8 Conformité RGPD

| Exigence | Implémentation |
|---|---|
| Droit d'accès | GET /api/auth/me + export données |
| Droit de rectification | PUT /api/auth/profile |
| Droit à l'effacement | DELETE /api/auth/account (soft delete) |
| Droit à la portabilité | Export JSON des données utilisateur |
| Consentement cookies | Bannière de consentement frontend |
| Minimisation données | Seules les données nécessaires sont collectées |
| Chiffrement | Bcrypt (MDP), HTTPS (transport), AES-256 (données sensibles) |

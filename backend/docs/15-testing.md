# Chapitre 15 — Tests & Qualité

## 15.1 Stratégie de tests

| Type | Couverture cible | Outils |
|---|---|---|
| Unit tests | Services, utils, validators | Vitest |
| Integration tests | API endpoints | Vitest + Supertest |
| E2E tests | Parcours critiques | Playwright (futur) |

## 15.2 Exemples de tests

### Test unitaire (service)

```js
// tests/unit/auth.service.test.js
import { describe, it, expect, vi } from 'vitest'
import { hashPassword, verifyPassword } from '../../src/utils/hash'

describe('hashPassword', () => {
  it('should hash a password', async () => {
    const hash = await hashPassword('MonMotDePasse123')
    expect(hash).not.toBe('MonMotDePasse123')
    expect(hash.length).toBeGreaterThan(50)
  })
})

describe('verifyPassword', () => {
  it('should verify correct password', async () => {
    const hash = await hashPassword('test123')
    expect(await verifyPassword('test123', hash)).toBe(true)
    expect(await verifyPassword('wrong', hash)).toBe(false)
  })
})
```

### Test d'intégration (API)

```js
// tests/integration/auth.test.js
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../../src/app'

describe('POST /api/auth/register', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Jean Test',
        email: 'jean@test.com',
        password: 'SecurePass123'
      })

    expect(res.status).toBe(201)
    expect(res.body.data.user.email).toBe('jean@test.com')
    expect(res.body.data.token).toBeDefined()
  })

  it('should reject duplicate email', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Jean Test',
        email: 'jean@test.com',
        password: 'SecurePass123'
      })

    expect(res.status).toBe(400)
    expect(res.body.message).toContain('existe déjà')
  })
})
```

### Test de commande (flux complet)

```js
// tests/integration/order.test.js
describe('POST /api/orders', () => {
  it('should create an order from cart', async () => {
    // 1. Ajouter au panier
    await request(app)
      .post('/api/cart/items')
      .set('Authorization', `Bearer ${buyerToken}`)
      .send({ productId: product.id, quantity: 2 })

    // 2. Créer la commande
    const res = await request(app)
      .post('/api/orders')
      .set('Authorization', `Bearer ${buyerToken}`)
      .send({
        addressId: address.id,
        shippingMethod: 'standard',
        paymentMethod: 'credit_card'
      })

    expect(res.status).toBe(201)
    expect(res.body.data.orderNumber).toMatch(/^GM-\d{4}-\d{6}$/)
    expect(res.body.data.status).toBe('pending')

    // 3. Vérifier que le stock a diminué
    const productAfter = await prisma.product.findUnique({ where: { id: product.id } })
    expect(productAfter.stock).toBe(48) // 50 - 2
  })
})
```

## 15.3 Linting & Formatting

| Outil | Configuration |
|---|---|
| ESLint | Règles strictes, no-any, unused-vars |
| Prettier | Formatage automatique |
| Husky | Pre-commit hooks |
| lint-staged | Lint only staged files |

```json
// package.json
{
  "scripts": {
    "lint": "eslint src/ --ext .js",
    "lint:fix": "eslint src/ --ext .js --fix",
    "format": "prettier --write 'src/**/*.js'",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui"
  }
}
```

## 15.4 CI Quality Gates

| Gate | Seuil |
|---|---|
| Tests passent | 100% |
| Couverture minimale | 70% |
| Lint erreurs | 0 |
| Build réussi | ✅ |
| Pas de dépendances vulnérables | 0 high/critical |

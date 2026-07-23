# Chapitre 14 — Déploiement & DevOps

## 14.1 Docker

### 14.1.1 Dockerfile (Backend)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./

ENV NODE_ENV=production
EXPOSE 5000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/app.js"]
```

### 14.1.2 docker-compose.yml

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: globalmarket
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: globalmarket_db
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U globalmarket"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s

  backend:
    build:
      context: .
      dockerfile: docker/Dockerfile
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: postgresql://globalmarket:secret@postgres:5432/globalmarket_db
      REDIS_URL: redis://redis:6379
      NODE_ENV: production
      JWT_SECRET: ${JWT_SECRET}
      STRIPE_SECRET_KEY: ${STRIPE_SECRET_KEY}
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - uploads:/app/uploads

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/certs:/etc/nginx/certs
    depends_on:
      - backend

volumes:
  pgdata:
  redisdata:
  uploads:
```

## 14.2 CI/CD

### 14.2.1 Pipeline GitHub Actions

```yaml
name: Backend CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16-alpine
        env:
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
          POSTGRES_DB: test_db
        ports: ["5432:5432"]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx prisma migrate deploy
        env:
          DATABASE_URL: postgresql://test:test@localhost:5432/test_db
      - run: npm run test
      - run: npm run lint

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        run: |
          # Deploy via Docker Compose or cloud provider
          docker compose -f docker-compose.prod.yml up -d --build
```

## 14.3 Variables d'environnement (production)

| Variable | Description | Sensibilité |
|---|---|---|
| DATABASE_URL | URL PostgreSQL | 🔒 Secret |
| JWT_SECRET | Clé de signature JWT | 🔒 Secret |
| JWT_REFRESH_SECRET | Clé refresh token | 🔒 Secret |
| STRIPE_SECRET_KEY | Clé API Stripe | 🔒 Secret |
| STRIPE_WEBHOOK_SECRET | Secret webhook Stripe | 🔒 Secret |
| PAYPAL_CLIENT_ID | ID client PayPal | 🔒 Secret |
| PAYPAL_CLIENT_SECRET | Secret PayPal | 🔒 Secret |
| SMTP_PASS | Mot de passe SMTP | 🔒 Secret |
| REDIS_URL | URL Redis | ⚠️ Interne |
| NODE_ENV | Environnement | ℹ️ Public |
| PORT | Port serveur | ℘️ Config |

## 14.4 Monitoring & Logs

### 14.4.1 Health check

```
GET /api/health
```

```json
{
  "status": "ok",
  "uptime": 86400,
  "database": "connected",
  "redis": "connected",
  "version": "1.0.0"
}
```

### 14.4.2 Logs structurés

```json
{
  "timestamp": "2026-07-23T10:30:00.000Z",
  "level": "info",
  "message": "Order created",
  "orderId": "uuid",
  "userId": "uuid",
  "amount": 89.97,
  "requestId": "req_xxx",
  "ip": "192.168.1.1"
}
```

### 14.4.3 Métriques clés

| Métrique | Seuil d'alerte |
|---|---|
| Temps de réponse API (p95) | > 500ms |
| Taux d'erreur 5xx | > 1% |
| CPU utilisation | > 80% |
| RAM utilisation | > 85% |
| Connexions DB actives | > 80 |
| Queue Redis | > 1000 |

## 14.5 Stratégie de backup

| Composant | Fréquence | Rétention | Méthode |
|---|---|---|---|
| PostgreSQL | Quotidien | 30 jours | pg_dump + S3 |
| PostgreSQL WAL | Continue | 7 jours | Streaming replication |
| Redis | Quotidien | 7 jours | RDB snapshot |
| Uploads | Continu | — | S3 sync |

## 14.6 Scaling

### Phase 1 (0-10K users)
- 1 serveur backend (2 vCPU, 4 GB RAM)
- 1 PostgreSQL (managed)
- 1 Redis (managed)

### Phase 2 (10K-100K users)
- 2+ serveurs backend (load balancer)
- PostgreSQL avec read replicas
- Redis Cluster

### Phase 3 (100K+ users)
- Kubernetes (EKS/GKE)
- PostgreSQL avec connection pooling (PgBouncer)
- CDN pour les uploads (CloudFront)
- Microservices (payment, notification)

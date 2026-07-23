# Chapitre 16 — Roadmap & Planning

## 16.1 Phase 1 — Fondation (Semaines 1-4)

| Semaine | Tâches | Livrables |
|---|---|---|
| S1 | Setup projet, Docker, Prisma, DB schema | Repo, DB opérationnelle |
| S2 | Auth (register, login, JWT, RBAC) | API auth complète |
| S3 | Produits CRUD, catégories, upload images | API produits |
| S4 | Panier, coupons, commandes | API panier + commandes |

## 16.2 Phase 2 — Paiements & Vendeur (Semaines 5-8)

| Semaine | Tâches | Livrables |
|---|---|---|
| S5 | Intégration Stripe, webhooks | Paiement carte |
| S6 | PayPal, Mobile Money | Multi-paiement |
| S7 | Dashboard vendeur, produits vendeur | Espace vendeur |
| S8 | Analytics vendeur, payouts | Vendeur complet |

## 16.3 Phase 3 — Admin & Support (Semaines 9-11)

| Semaine | Tâches | Livrables |
|---|---|---|
| S9 | Dashboard admin, gestion users | Admin users |
| S9 | Modération produits, gestion commandes | Admin orders |
| S10 | Rapports, paramètres système | Admin complet |
| S11 | Tickets support, base de connaissances | Support |

## 16.4 Phase 4 — Notifications & Optimisation (Semaines 12-14)

| Semaine | Tâches | Livrables |
|---|---|---|
| S12 | Emails transactionnels, templates | Notifications email |
| S12 | Notifications push, in-app | Push notifications |
| S13 | Performance (caching, indexes, N+1) | Optimisation |
| S13 | Tests (unit, integration, coverage) | Qualité |
| S14 | Sécurité (audit OWASP, pentest) | Sécurité |
| S14 | Documentation API (Swagger) | Docs |

## 16.5 Phase 5 — Déploiement (Semaines 15-16)

| Semaine | Tâches | Livrables |
|---|---|---|
| S15 | CI/CD, Docker prod, monitoring | Pipeline |
| S15 | Backup, restore, runbooks | Ops |
| S16 | Staging test, load test | Validation |
| S16 | Production deploy | Mise en ligne |

## 16.6 Estimation des coûts (infrastructure)

### Phase 1 (Development)

| Ressource | Coût mensuel |
|---|---|
| VPS (2 vCPU, 4 GB) | ~20 € |
| PostgreSQL managed | ~25 € |
| Redis managed | ~15 € |
| Domaine + SSL | ~10 € |
| **Total** | **~70 €/mois** |

### Phase 2 (Production - 10K users)

| Ressource | Coût mensuel |
|---|---|
| App server (4 vCPU, 8 GB) | ~60 € |
| PostgreSQL (4 vCPU, 16 GB) | ~80 € |
| Redis (2 GB) | ~30 € |
| CDN + Storage | ~20 € |
| Email (SendGrid) | ~20 € |
| Monitoring (Datadog) | ~25 € |
| **Total** | **~235 €/mois** |

### Phase 3 (Scale - 100K+ users)

| Ressource | Coût mensuel |
|---|---|
| Kubernetes (3 nodes) | ~300 € |
| PostgreSQL HA | ~200 € |
| Redis Cluster | ~100 € |
| CDN + Storage | ~100 € |
| Email + Push | ~50 € |
| Monitoring + Logs | ~100 € |
| **Total** | **~850 €/mois** |

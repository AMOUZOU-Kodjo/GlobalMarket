# CAHIER DES CHARGES TECHNIQUE

# BACKEND — GlobalMarket

## Plateforme E-Commerce Mondiale Multi-Vendeurs

---

**Nom du projet :** GlobalMarket — Backend API  
**Version :** 1.0  
**Date :** Juillet 2026  
**Auteur :** Équipe Développement GlobalMarket  
**Statut :** Document de référence  

---

## Périmètre du document

Ce cahier des charges technique couvre **l'intégralité du backend** de la plateforme GlobalMarket, incluant :

- Architecture serveur (Node.js / Express)
- Base de données PostgreSQL
- API REST complète (74 endpoints)
- Authentification & autorisation (JWT, RBAC)
- Intégrations paiement (Stripe, PayPal, Mobile Money)
- Système de livraison & suivi
- Notifications (email, push, SMS)
- Sécurité & conformité RGPD
- Déploiement & observabilité

---

## Stack technique

| Composant | Technologie | Version |
|---|---|---|
| Runtime | Node.js | 20 LTS |
| Framework | Express.js | 4.x |
| Base de données | PostgreSQL | 16 |
| ORM | Prisma | 5.x |
| Cache | Redis | 7.x |
| Auth | JWT (jsonwebtoken) | 9.x |
| Validation | Zod | 3.x |
| Upload | Multer + Sharp | — |
| Email | Nodemailer | 6.x |
| PDF | PDFKit | 4.x |
| Tests | Vitest + Supertest | — |
| Conteneurs | Docker + Docker Compose | — |

---

## Documents associés

| Document | Chemin |
|---|---|
| Cahier des charges Frontend | `frontend/docs/CAHIER_DE_CHARGES_COMPLET.md` |
| PDF Frontend | `frontend/docs/CAHIER_DE_CHARGES_COMPLET.pdf` |
| Ce document (Backend) | `backend/docs/CAHIER_DE_CHARGES_BACKEND.md` |

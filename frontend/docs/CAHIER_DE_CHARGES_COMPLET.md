# MARKETPLACE MONDIALE

---

## Cahier des Charges Frontend

### Plateforme de Commerce Électronique Internationale

---

| **Champ** | **Valeur** |
|-----------|-----------|
| **Projet** | Marketplace Mondiale - Plateforme E-commerce |
| **Version** | 1.0.0 |
| **Date** | 22 Juillet 2026 |
| **Statut** | Version Finale |
| **Classification** | Confidentiel |

---

### Équipe de Rédaction

| **Rôle** | **Responsable** |
|----------|----------------|
| Chef de Projet Digital Senior | Équipe Projet |
| Product Owner | Équipe Produit |
| Business Analyst | Équipe Analyse |
| Architecte Logiciel | Équipe Architecture |
| Architecte Frontend ReactJS | Équipe Frontend |
| Expert UX/UI | Équipe Design |
| Expert E-commerce International | Équipe Commerce |
| Développeur ReactJS Senior | Équipe Développement |
| Expert Rédocution | Équipe Qualité |
| Expert Agile/Scrum | Équipe Méthode |
| Expert DevOps | Équipe Infrastructure |
| Expert Sécurité Web | Équipe Sécurité |
| Expert Base de données | Équipe Data |
| Expert API REST | Équipe Intégration |
| Expert Documentation | Équipe Documentation |

---

### Approbations

| **Rôle** | **Nom** | **Date** | **Signature** |
|----------|---------|----------|--------------|
| Directeur Technique | | | |
| Product Owner | | | |
| Lead Architecte | | | |
| Responsable Qualité | | | |

---

### Historique des Versions

| **Version** | **Date** | **Auteur** | **Modifications** |
|-------------|----------|------------|-------------------|
| 1.0.0 | 22/07/2026 | Équipe Projet | Version initiale complète |
| | | | |
| | | | |

---

> **Avertissement** : Ce document est confidentiel et destiné uniquement aux personnes autorisées. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.

---

# TABLE DES MATIÈRES

---

## CHAPITRE 1 — Présentation du projet
- 1.1 Contexte
- 1.2 Problématique
- 1.3 Justification
- 1.4 Vision
- 1.5 Objectifs
- 1.6 Portée
- 1.7 Limites
- 1.8 Valeur ajoutée
- 1.9 Innovation
- 1.10 Utilisateurs cibles
- 1.11 Étude du marché
- 1.12 Analyse de la concurrence
- 1.13 SWOT
- 1.14 Business Model Canvas

## CHAPITRE 2 — Analyse des besoins
- 2.1 Besoins fonctionnels
- 2.2 Besoins non fonctionnels
- 2.3 Contraintes
- 2.4 Hypothèses
- 2.5 Risques
- 2.6 Critères de réussite

## CHAPITRE 3 — Personas
- 3.1 Acheteur Occasional
- 3.2 Acheteur Régulier
- 3.3 Power User
- 3.4 Petit Vendeur
- 3.5 Vendeur PME
- 3.6 Grande Entreprise
- 3.7 Administrateur
- 3.8 Agent Support
- 3.9 Livreur
- 3.10 Entrepreneur B2B

## CHAPITRE 4 — Cas d'utilisation (Use Cases)
- UC-001 à UC-032
- Diagrammes UML
- Scénarios principaux et alternatifs

## CHAPITRE 5 — Parcours utilisateur
- 5.1 Parcours Visiteur
- 5.2 Parcours Acheteur
- 5.3 Parcours Vendeur
- 5.4 Parcours Administrateur
- 5.5 Parcours Livreur
- 5.6 Parcours Support

## CHAPITRE 6 — Architecture générale
- 6.1 Architecture Frontend
- 6.2 Architecture des composants
- 6.3 Architecture des dossiers
- 6.4 Architecture modulaire
- 6.5 Architecture des routes
- 6.6 Architecture des services
- 6.7 Architecture des Hooks
- 6.8 Architecture Context API
- 6.9 Architecture Redux Toolkit
- 6.10 Architecture des appels API
- 6.11 Gestion des erreurs
- 6.12 Gestion des états
- 6.13 Architecture du cache
- 6.14 Architecture des permissions
- 6.15 Architecture des thèmes
- 6.16 Architecture responsive

## CHAPITRE 7 — Arborescence complète du projet React
- Structure src/ complète
- Documentation de chaque dossier
- Documentation de chaque fichier
- Rôle de chaque composant

## CHAPITRE 8 — Toutes les pages de l'application
- 37 pages détaillées
- Wireframes ASCII
- Maquettes textuelles
- API, validation, SEO, accessibilité
- Critères d'acceptation

## CHAPITRE 9 — Documentation des composants React
- 50+ composants documentés
- Props, état, variantes, accessibilité
- Exemples d'utilisation

## CHAPITRE 10 — Fonctionnalités détaillées
- 23 fonctionnalités complètes
- Règles métier, UX/UI, validation
- États possibles, transitions

## CHAPITRE 11 — API nécessaires
- Tous les endpoints REST
- Méthodes, paramètres, réponses
- Codes HTTP, exemples JSON

## CHAPITRE 12 — Gestion des états React
- Context API, Redux Toolkit
- TanStack Query, Custom Hooks
- Cache, localStorage, cookies

## CHAPITRE 13 — Design System complet
- Palette, typographies, espacements
- DaisyUI themes, animations
- WCAG 2.1 AA, Dark/Light Mode

## CHAPITRE 14 — Sécurité Frontend
- JWT, Refresh Token, RBAC
- XSS, CSRF, CSP
- Validation, sessions

## CHAPITRE 15 — Performance
- Lazy Loading, Code Splitting
- Memoization, Bundle Analysis
- Core Web Vitals, PWA

## CHAPITRE 16 — Tests
- Tests unitaires, fonctionnels
- Tests d'intégration, E2E
- Tests d'accessibilité
- Checklist complète

## CHAPITRE 17 — Déploiement
- Vercel, Netlify, Docker
- CI/CD GitHub Actions
- Monitoring, Rollback

## CHAPITRE 18 — Roadmap complète
- 13 Sprints détaillés
- Backlog, Story Points
- Planning, Livrables

## CHAPITRE 19 — Documentation développeur
- Conventions de code
- Git Flow, Commits
- Code Review, PR Template

## CHAPITRE 20 — Annexes
- Glossaire (50+ termes)
- Diagrammes ASCII
- 7 Checklists complètes
- Références

---

# FIN DE LA TABLE DES MATIÈRES

---


---


# CAHIER DES CHARGES — PLATEFORME MARKETPLACE E-COMMERCE MONDIALE

## Document de Spécification Frontend (ReactJS)

---

**Référence du projet :** MKTPL-FRONT-2026-001
**Version du document :** 1.0
**Date de rédaction :** 22 juillet 2026
**Statut :** Brouillon pour revue
**Classification :** Confidentiel — Usage interne uniquement

---

**Rédacteurs :**

| Rôle | Nom | Date |
|---|---|---|
| Chef de Projet | Équipe Projet | 22/07/2026 |
| Analyste Métier | Équipe Business | 22/07/2026 |
| Product Owner | Équipe Produit | 22/07/2026 |
| Expert E-commerce | Équipe Commerce | 22/07/2026 |

---

**Historique des versions :**

| Version | Date | Auteur | Description des modifications |
|---|---|---|---|
| 0.1 | 22/07/2026 | Équipe Projet | Création initiale du document |
| 1.0 | 22/07/2026 | Équipe Projet | Version complète pour revue |

---

**Table des matières :**

1. [CHAPITRE 1 : Présentation du projet](#chapitre-1)
2. [CHAPITRE 2 : Analyse des besoins](#chapitre-2)
3. [CHAPITRE 3 : Personas](#chapitre-3)
4. [CHAPITRE 4 : Cas d'utilisation](#chapitre-4)

---

<a name="chapitre-1"></a>

# CHAPITRE 1 : Présentation du projet

---

## 1.1 Contexte

### 1.1.1 Le paysage mondial du e-commerce en 2025-2026

Le commerce électronique mondial traverse une phase de transformation accélérée sans précédent. En 2025, le marché mondial du e-commerce a atteint une valeur estimée à **6,33 billions de dollars américains** (6,33 T$), représentant environ 20,1 % du total des ventes au détail mondiales. Selon les projections de Statista, eMarketer et la Banque Mondiale, ce chiffre devrait dépasser les **7,05 billions de dollars** d'ici fin 2026, soit une croissance annuelle composée (CAGR) de 8,9 % sur la période 2024-2028.

Cette croissance spectaculaire est alimentée par plusieurs facteurs structurels convergents :

**La domination du commerce mobile (m-commerce).** En 2025, les transactions effectuées via des appareils mobiles représentent **72,9 % du chiffre d'affaires e-commerce mondial**, soit environ 4,61 T$. Ce ratio atteint 80 % dans des marchés comme l'Asie du Sud-Est et l'Afrique subsaharienne. L'adoption massive des smartphones même dans les pays en développement, combinée à l'amélioration des réseaux 4G/5G et la prolifération des applications de paiement mobile (M-Pesa, Orange Money, Wave), a démocratisé l'accès au commerce en ligne pour des milliards de personnes.

**L'essor du commerce social (social commerce).** Les plateformes de réseaux sociaux sont devenues des canaux de vente directs. Le social commerce représente désormais **1,2 billion de dollars** de transactions mondiales, avec une croissance de 30 % par an. TikTok Shop, Instagram Shopping, Facebook Marketplace et les systèmes de vente en direct (live shopping) génèrent des milliards de dollars de transactions. En Chine, le commerce social représente déjà 14 % du total du e-commerce.

**La croissance du commerce transfrontalier.** Les ventes internationales en ligne ont atteint **2,1 billions de dollars** en 2025, soit 27 % du e-commerce mondial. Les consommateurs recherchent activement des produits provenant de marchés étrangers, poussés par la désirabilité de produits uniques, les différences de prix et la mondialisation des goûts. Les corridors commerciaux Afrique-Asie, Europe-Afrique et Amérique Latine-Asie sont les plus dynamiques.

**Les opportunités dans les marchés émergents.** L'Afrique constitue le continent à la croissance la plus rapide en matière de e-commerce, avec un taux de croissance annuel de 28 %. Le marché africain du e-commerce devrait atteindre 75 milliards de dollars d'ici 2028, porté par une population de 1,4 milliard d'habitants, un taux de pénétration d'internet qui dépasse désormais les 46 % et un taux de pénétration du e-commerce encore faible (moins de 5 %), laissant un potentiel de croissance immense. L'Amérique Latine, l'Asie du Sud-Est et l'Inde connaissent des dynamiques similaires.

**Le déclin relatif du commerce traditionnel.** La pandémie de COVID-19 a accéléré de 5 à 10 ans la transition vers le digital. Les magasins physiques ont vu leur part de marché chuter de 85 % en 2019 à 78 % en 2025. De nombreuses enseignes traditionnelles ont fait faillite ou sont en restructuration profonde, tandis que les pure players digitaux continuent de croître à deux chiffres.

### 1.1.2 Pertinence de la création d'une marketplace aujourd'hui

Dans ce contexte, la création d'une marketplace e-commerce globale n'est pas seulement pertinente — elle est stratégiquement impérative pour plusieurs raisons :

1. **Modèle économique éprouvé et évolutif :** Les marketplaces représentent 60 % du e-commerce mondial. Elles bénéficient des effets de réseau : plus il y a de vendeurs, plus l'offre est attractive ; plus il y a d'acheteurs, plus les vendeurs sont attirés. Ce cercle vertueux permet une croissance exponentielle une fois la masse critique atteinte.

2. **Barrières à l'entrée réduites pour les nouveaux vendeurs :** Des millions de petits commerçants, artisans, fabricants et entrepreneurs dans le monde entier souhaitent vendre en ligne mais n'ont ni les ressources techniques, ni le budget pour développer leur propre site e-commerce. Une marketplace leur offre une vitrine immédiate avec une mise en place en quelques heures.

3. **Diversification de l'offre et différenciation :** Contrairement au modèle purement propriétaire (où la plateforme vend ses propres produits), une marketplace agrège une offre diversifiée couvrant des millions de références sans investissement en stock, créant ainsi une expérience client supérieure.

4. **Réponse aux limites des plateformes existantes :** Les grandes marketplaces actuelles (Amazon, Alibaba) présentent des limites significatives — commissions élevées (jusqu'à 45 %), dépendance des vendeurs, manque de personnalisation, problèmes de contrefaçon — qui laissent un espace pour des alternatives innovantes et plus équitables.

5. **Maturité technologique :** Les technologies nécessaires pour construire une marketplace performante (frameworks JavaScript modernes, architectures microservices, cloud computing, API RESTful, intelligence artificielle) sont aujourd'hui accessibles, performantes et rentables, permettant le développement de plateformes de classe mondiale avec des budgets maîtrisés.

---

## 1.2 Problématique

### 1.2.1 Problèmes identifiés dans l'écosystème e-commerce actuel

Malgré la croissance spectaculaire du e-commerce, de nombreux problèmes fondamentaux persistent et créent des opportunités considérables :

**1. Manque d'infrastructure numérique abordable pour les vendeurs**

Des millions de petits commerçants, artisans et micro-entrepreneurs dans les marchés émergents n'ont pas accès à des solutions e-commerce abordables et adaptables. Les alternatives existantes se divisent en deux catégories : (a) les solutions de vente sur réseaux sociaux (Facebook Marketplace, Instagram), qui offrent une expérience d'achat fragmentée, sans gestion d'inventaire intégrée, sans système de paiement sécurisé et sans outils de suivi ; et (b) les plateformes e-commerce dédiées (Shopify, WooCommerce), dont les coûts mensuels (29-299 $/mois) et les frais de transaction (2-3 % + frais de passerelle) représentent un obstacle insurmontable pour de nombreux petits vendeurs dans les pays à faible revenu.

**2. Commissions excessives et modèles de tarification opaques**

Les grandes marketplaces mondiales pratiquent des commissions qui érodent significativement la marge des vendeurs : Amazon prélève entre 8 et 15 % selon les catégories, plus des frais de fulfilment FBA, de stockage, de publicité et de traitement qui peuvent porter le coût total à plus de 30-45 %. eBay prélève 13,25 % + frais de paiement. Ces tarifications complexes et opaques créent une relation déséquilibrée où la plateforme capture une part disproportionnée de la valeur créée par le vendeur.

**3. Logistique fragmentée et coûteuse pour le commerce international**

Le commerce transfrontalier reste entravé par des défis logistiques majeurs : coûts d'expédition élevés (souvent 20-40 % de la valeur du produit), délais imprévisibles, complications douanières, manque de traçabilité et taux de retour élevés (15-30 % dans le commerce transfrontalier). Les petits vendeurs n'ont pas accès aux réseaux logistiques efficaces des grands acteurs.

**4. Problèmes de confiance et de sécurité**

La confiance des consommateurs reste un obstacle majeur, en particulier pour les achats transfrontaliers et sur les plateformes émergentes. Les problèmes incluent : contrefaçon et produits de qualité inférieure (estimée à 3,3 % du commerce mondial), fraudes aux cartes de crédit, fausses annonces, détournements de paiement, avis clients falsifiés (30 % des avis en ligne seraient soit payés soit fabriqués).

**5. Manque de solutions localisées**

La plupart des grandes marketplaces sont des plateformes « taille unique » qui ne s'adaptent pas aux spécificités locales : langues, devises, modes de paiement préférés (mobile money en Afrique, boleto au Brésil, UPI en Inde), préférences culturelles, réglementations locales et habitudes de consommation. Les marchés africains, par exemple, sont largement sous-servis malgré leur croissance explosive.

### 1.2.2 Formulation de la problématique

> **Comment concevoir et développer une plateforme marketplace e-commerce mondiale, accessible, abordable et localisée, qui permette à tout vendeur — qu'il soit particulier, micro-entreprise, PME ou grande entreprise — de commercialiser ses produits à l'échelle internationale tout en offrant aux acheteurs une expérience d'achat fluide, sécurisée et personnalisée ?**

Cette problématique implique de résoudre plusieurs sous-problèmes techniques et métier :

- Concevoir une architecture frontend scalable capable de gérer des millions de produits et des centaines de milliers d'utilisateurs simultanés
- Développer une interface utilisateur multilingue et multi-devices qui s'adapte aux contextes culturels et techniques variés
- Intégrer des systèmes de paiement multiples compatibles avec les méthodes de paiement locales dans 50+ pays
- Mettre en place des mécanismes de confiance (avis, vérification, protection acheteur) efficaces à grande échelle
- Offrir des outils de gestion de boutique puissants mais simples d'utilisation pour des vendeurs aux compétences techniques variées

---

## 1.3 Justification

### 1.3.1 Raisons stratégiques du projet

**Démocratisation du commerce électronique.** Ce projet vise à supprimer les barrières à l'entrée pour des millions de vendeurs dans le monde. En offrant une plateforme gratuite ou à très faible coût pour démarrer, avec des outils professionnels de gestion de boutique, des tutoriels guidés et un support multilingue, la marketplace permet à tout entrepreneur connecté à internet de vendre ses produits à une clientèle mondiale, sans nécessiter de compétences techniques, d'investissement initial important ni de connaissance préalable du e-commerce.

**Réduction des coûts pour les vendeurs.** En pratiquant des commissions significativement inférieures à celles des concurrents (objectif : 5-8 % contre 10-30 % chez les acteurs établis) et en éliminant les frais cachés (pas de frais de mise en ligne, pas de frais de listing mensuel, pas de frais de publicité obligatoire), la plateforme permet aux vendeurs de conserver une plus grande part de leurs revenus, stimulant ainsi leur croissance et leur fidélité.

**Création d'un écosystème multi-face (multi-sided platform).** La plateforme crée de la valeur en connectant trois parties : les vendeurs (offre), les acheteurs (demande) et les partenaires logistiques/financiers (infrastructure). Chaque nouveau participant augmente la valeur pour les autres, créant des effets de réseau puissants et un avantage concurrentiel durable.

**Exploitation d'un stack technologique moderne.** L'utilisation de ReactJS pour le frontend, combinée à des architectures modernes (API REST/GraphQL, microservices côté backend, cloud natif), permet de développer une plateforme haute performance, maintenable et évolutive à un coût raisonnable par rapport à des solutions sur mesure de cette envergure.

**Réponse à un timing de marché optimal.** La convergence de plusieurs facteurs — digitalisation accélérée post-pandémie, adoption massive du commerce mobile dans les marchés émergents, maturité des outils de développement frontend, montée en puissance du social commerce — crée une fenêtre d'opportunité unique pour un nouvel entrant disruptif.

### 1.3.2 Alignement avec les tendances du marché

| Tendance | Comment le projet y répond |
|---|---|
| Commerce mobile-first | Architecture responsive, PWA, optimisation mobile native |
| Commerce social | Intégration de fonctionnalités de partage, live shopping |
| IA et personnalisation | Recommandations IA, recherche sémantique, chatbot |
| Commerce durable | Filtres éco-responsables, offset carbone, emballages durables |
| Paiements alternatifs | Mobile money, crypto, BNPL, virements locaux |
| Cross-border | Multi-devises, gestion des douanes, logistique internationale |
| Inclusivité financière | Solution pour les marchés sous-bankarisés (cash on delivery) |

---

## 1.4 Vision

### 1.4.1 Vision à long terme (5 ans)

> **Devenir la marketplace de référence pour les marchés émergents et en développement, tout en offrant une expérience de premier plan aux utilisateurs du monde entier. D'ici 2031, permettre à 1 million de vendeurs de 50+ pays de vendre à 100 millions d'acheteurs, tout en créant des millions d'emplois indirects dans la logistique, la livraison et les services connexes.**

### 1.4.2 Déclinaison de la vision

**Niveau 1 — Fondation (Années 1-2) :** Établir une plateforme fonctionnelle, fiable et performante couvrant les fonctionnalités essentielles d'une marketplace moderne. Atteindre 10 000 vendeurs actifs et 100 000 acheteurs mensuels dans 5 pays pilotes.

**Niveau 2 — Croissance (Années 2-3) :** Atteindre la masse critique dans les marchés cibles. Déployer les fonctionnalités avancées (IA, AR, live shopping). Étendre à 20 pays. Atteindre 100 000 vendeurs et 2 millions d'acheteurs.

**Niveau 3 — Écosystème (Années 3-5) :** Devenir un écosystème complet incluant marketplace, paiements, logistique, finance (micro-crédit vendeurs), assurance et services numériques. Opérer dans 50+ pays avec 1 million de vendeurs et 100 millions d'acheteurs.

### 1.4.3 Valeurs fondatrices de la plateforme

| Valeur | Description |
|---|---|
| **Accessibilité** | La plateforme doit être utilisable par toute personne, quelle que soit sa localisation, son niveau technique ou ses capacités |
| **Équité** | Modèle de tarification transparent et équitable pour les vendeurs |
| **Confiance** | Systèmes robustes de vérification, protection et résolution des litiges |
| **Innovation** | Utilisation des technologies les plus avancées pour améliorer continuellement l'expérience |
| **Localisation** | Adaptation profonde aux contextes culturels, linguistiques et économiques locaux |
| **Durabilité** | Promotion de pratiques commerciales responsables et durables |

---

## 1.5 Objectifs

### 1.5.1 Objectifs à court terme (0-6 mois) — Phase MVP

| ID | Objectif | KPI | Cible | Échéance |
|---|---|---|---|---|
| ST-01 | Développer et lancer le MVP frontend | Livrable fonctionnel | Application web complète fonctionnelle | M+6 |
| ST-02 | Implémenter le parcours acheteur complet | Taux de complétion du parcours | > 70 % des utilisateurs atteignent la confirmation de commande | M+6 |
| ST-03 | Implémenter le dashboard vendeur | Fonctionnalités clés disponibles | 100 % des fonctionnalités P0 livrées | M+6 |
| ST-04 | Atteindre un score Lighthouse > 90 | Score Lighthouse | > 90/100 sur toutes les métriques | M+6 |
| ST-05 | Supporter 3 langues minimum | Langues disponibles | Français, Anglais, Arabe | M+6 |
| ST-06 | Recruter les premiers vendeurs pilotes | Nombre de vendeurs inscrits | 200 vendeurs | M+6 |
| ST-07 | Atteindre 5 000 utilisateurs enregistrés | Utilisateurs inscrits | 5 000 (2 000 acheteurs, 2 000 vendeurs, 1 000 mixte) | M+6 |

### 1.5.2 Objectifs à moyen terme (6-18 mois)

| ID | Objectif | KPI | Cible | Échéance |
|---|---|---|---|---|
| MT-01 | Atteindre 10 000 vendeurs actifs | Vendeurs avec au moins 1 produit actif | 10 000 | M+12 |
| MT-02 | Atteindre 100 000 acheteurs mensuels | Utilisateurs uniques mensuels acheteurs | 100 000 | M+12 |
| MT-03 | Générer 500 000 $ de GMV mensuel | Gross Merchandise Value | 500 000 $/mois | M+12 |
| MT-04 | Déployer 10 langues | Langues supportées | 10 langues majeures | M+18 |
| MT-05 | Implémenter l'IA de recommandation | Taux de clic sur recommandations | > 8 % | M+12 |
| MT-06 | Atteindre un taux de satisfaction client > 4/5 | NPS Score | > 40 | M+18 |

### 1.5.3 Objectifs à long terme (2-5 ans)

| ID | Objectif | KPI | Cible | Échéance |
|---|---|---|---|---|
| LT-01 | Devenir top 3 marketplace dans 3 marchés émergents | Rang dans les app stores / parts de marché | Top 3 | An 3 |
| LT-02 | Atteindre 1 million de vendeurs | Vendeurs actifs mondiaux | 1 000 000 | An 5 |
| LT-03 | Atteindre 100 millions d'acheteurs | Utilisateurs actifs mensuels | 100 000 000 | An 5 |
| LT-04 | Opérer dans 50+ pays | Pays avec présence active | 50 | An 5 |
| LT-05 | Générer 10 milliards $ de GMV annuel | GMV annuel | 10 000 000 000 $ | An 5 |
| LT-06 | Lancer l'écosystème complet (paiements, finance, assurance) | Nombre de services lancés | 5 services additionnels | An 4 |

---

## 1.6 Portée du projet

### 1.6.1 Périmètre inclus (In Scope)

Le présent cahier des charges couvre **uniquement le frontend** de la plateforme marketplace, développé en ReactJS. Le périmètre inclut :

**Parcours Acheteur :**
- Navigation et découverte de produits (pages d'accueil, catégories, listes de produits)
- Recherche avancée avec filtres, tris et suggestions
- Pages de détail produit avec images, descriptions, avis, vendeur
- Gestion du panier d'achat (ajout, modification, suppression)
- Processus de checkout (adresse, livraison, paiement, confirmation)
- Gestion du compte acheteur (profil, adresses, méthodes de paiement)
- Suivi des commandes et historique
- Gestion des favoris / liste de souhaits
- Système d'avis et de notations
- Messagerie acheteur-vendeur
- Notifications (email, push, in-app)

**Dashboard Vendeur :**
- Inscription et configuration de boutique
- Gestion du catalogue produits (CRUD)
- Gestion des stocks et des variations
- Gestion des commandes (réception, traitement, expédition)
- Tableau de bord analytique (ventes, vues, conversions)
- Gestion des promotions et réductions
- Paramètres de boutique (logo, bannière, politique de retour)
- Facturation et relevés

**Panneau d'Administration :**
- Gestion des utilisateurs (acheteurs, vendeurs, admins)
- Modération des contenus (produits, avis, messages)
- Tableaux de bord et rapports globaux
- Gestion des catégories et taxonomie
- Configuration système (paramètres, features flags)
- Gestion des litiges et réclamations

**Fonctionnalités Transversales :**
- Système d'authentification et d'autorisation (inscription, connexion, OAuth)
- Gestion multilingue (i18n) — minimum 3 langues au MVP
- Gestion multi-devises
- Design responsive (mobile, tablette, desktop)
- Progressive Web App (PWA) avec support offline
- Accessibilité WCAG 2.1 niveau AA
- Optimisation SEO (SSR/SSG, meta tags, structured data)
- Performance optimisée (Core Web Vitals)
- Gestion du thème (clair/sombre)
- Système de notification in-app

### 1.6.2 Périmètre exclu (Out of Scope)

| Élément exclu | Justification |
|---|---|
| Infrastructure physique (entrepôts, centres de distribution) | Hors périmètre frontend ; partenaire logistique externalisé |
| Développement backend / API | Le frontend interagit avec des API existantes ou documentées séparément |
| Moteur de recherche backend | La couche frontend interagit avec l'API search ; l'implémentation Elasticsearch/Algolia est backend |
| Système de paiement (processing) | Intégration de providers existants (Stripe, PayPal, Flutterwave) via API |
| Logistique et expédition | Intégration de transporteurs existants via API |
| Manufacture / production | La plateforme est un intermédiaire, pas un fabricant |
| Infrastructure cloud / déploiement | DevOps, CI/CD, monitoring backend — hors scope frontend |
| Application mobile native (iOS/Android) | La PWA couvre le mobile ; une app native pourrait être un projet séparé |
| Système de fidélité avancé | Fonctionnalité future, hors MVP |
| Intégration blockchain | Concept d'innovation, pas dans le scope initial |
| AR/VR produit | Innovation à intégrer en phase 2 |

---

## 1.7 Limites et contraintes

### 1.7.1 Limites techniques

| Limite | Description | Impact |
|---|---|---|
| Performance réseau | Les utilisateurs dans les zones à faible connectivité (réseau 2G/3G) doivent pouvoir utiliser la plateforme | Nécessite une optimisation agressive du bundle, le support offline PWA et le lazy loading |
| Taille des bundles | Le bundle JavaScript initial doit rester < 200 KB gzipped pour les marchés à faible débit | Contrainte sur le choix des bibliothèques et la séparation des chunks |
| Compatibilité navigateur | Support minimum : Chrome 90+, Firefox 88+, Safari 14+, Samsung Internet 15+ | Nécessite des polyfills et un test multi-navigateurs |
| Nombre de références | Le frontend doit supporter le rendu de catalogs de 10M+ produits avec navigation fluide | Nécessite la virtualisation de listes, pagination infinie et mise en cache agressive |
| Temps de chargement | LCP < 2.5s sur 4G mobile moyen | Contrainte sur les images, le code splitting et le préchargement |
| Offline | Fonctionnalités limitées disponibles hors ligne (catalogue consulté récemment, panier) | Nécessite Service Workers et IndexedDB |

### 1.7.2 Limites réglementaires

| Juridiction | Réglementation | Impact sur le frontend |
|---|---|---|
| Union Européenne | RGPD (Règlement Général sur la Protection des Données) | Gestion du consentement cookies, droit à l'oubli, portabilité des données, transparence |
| États-Unis (Californie) | CCPA / CPRA | Opt-out de la vente de données, notices de confidentialité |
| International | PCI-DSS (pour les paiements) | Pas de stockage de données de cartes côté frontend, iframes de paiement sécurisées |
| Union Européenne | Digital Services Act (DSA) | Mécanismes de modération, transparence des algorithmes de recommandation |
| Afrique (divers) | Lois locales sur la protection des données | Consentement localisé, stockage des données dans la juridiction si requis |
| Brésil | LGPD | Similaire au RGPD, consentement explicite |
| Chine | PIPL | Restrictions sur le transfert de données hors de Chine |

### 1.7.3 Limites budgétaires et temporelles

| Contrainte | Détail |
|---|---|
| Budget frontend estimé | 250 000 - 400 000 $ pour la phase MVP (6 mois) incluant développement, tests, design |
| Équipe frontend | 6-8 développeurs ReactJS seniors/mid-level, 1 lead technique, 1 UX designer, 1 QA |
| Délai MVP | 6 mois calendar du kickoff au lancement beta |
| Délai MVP public | 8 mois calendar du kickoff au lancement public |
| Dette technique | Tolérance maximale de 15 % du temps de sprint pour le remboursement de dette technique |

---

## 1.8 Valeur ajoutée

### 1.8.1 Valeur pour les acheteurs

| Dimension | Valeur ajoutée | Détail |
|---|---|---|
| Sélection | Accès à un catalogue mondial | Des millions de produits de milliers de vendeurs dans le monde entier, accessibles depuis une seule plateforme |
| Prix | Comparaison et meilleurs prix | Transparence tarifaire, possibilité de comparer les offres de plusieurs vendeurs pour un même produit, promotions exclusives |
| Confiance | Avis vérifiés et protection | Système d'avis authentiques, garantie satisfaction, protection des paiements, médiation en cas de litige |
| Commodité | Expérience unifiée | Un seul compte, un seul panier, un seul paiement même pour des produits de vendeurs différents, livraison tracked |
| Découverte | Personnalisation intelligente | Recommandations basées sur l'IA, suggestions contextualisées, listes de vœux intelligentes |
| Localisation | Expérience adaptée | Langue, devise, méthodes de paiement et normes de livraison locales |
| Accessibilité | Utilisation universelle | Support des technologies d'assistance, navigation au clavier, compatibilité lecteur d'écran |

### 1.8.2 Valeur pour les vendeurs

| Dimension | Valeur ajoutée | Détail |
|---|---|---|
| Portée | Marché mondial | Accès instantané à des millions d'acheteurs potentiels dans 50+ pays sans investissement marketing initial |
| Outils | Dashboard professionnel | Gestion complète du catalogue, des stocks, des commandes et des finances via une interface intuitive |
| Coût | Commissions réduites | 5-8 % vs 10-30 % chez les concurrents, pas de frais cachés, pas d'abonnement obligatoire |
| Analytics | Données exploitables | Tableaux de bord en temps réel : vues, conversions, revenus, tendances, comportement acheteurs |
| Croissance | Outils de marketing | Promotions, coupons, publicité ciblée, mise en avant, SEO produit optimisé |
| Logistique | Partenaires intégrés | Accès à un réseau de transporteurs négociés, tarifs préférentiels, gestion simplifiée des expéditions |
| Support | Accompagnement | Support multilingue, tutoriels, academy vendeur, communauté active |

### 1.8.3 Valeur pour la plateforme

| Dimension | Valeur ajoutée | Détail |
|---|---|---|
| Revenus | Modèle scalable | Commissions sur transactions (5-8 %), publicité (CPC/CPM), services premium (mise en avant, analytics avancés), abonnements vendeurs |
| Données | Intelligence de marché | Collecte de données sur les tendances de consommation, les prix, les préférences — monétisable via des insights marché |
| Réseau | Effets de réseau | Plus de vendeurs → plus d'acheteurs → plus de vendeurs → croissance auto-alimentée |
| Écosystème | Services additionnels | Extensions potentielles : fintech (micro-crédit vendeurs), assurance, formation, marketing digital |

---

## 1.9 Programme d'innovation

### 1.9.1 Innovations technologiques planifiées

| Innovation | Description | Priorité | Phase |
|---|---|---|---|
| **Recommandations IA** | Moteur de recommandation basé sur le machine learning (filtrage collaboratif + contenu) pour suggérer des produits pertinents en temps réel | Haute | Phase 2 (M+9) |
| **Recherche sémantique** | Moteur de recherche comprenant le langage naturel, les synonymes, les erreurs de frappe et les intentions d'achat | Haute | Phase 1 (M+6) |
| **Prévisualisation AR** | Fonctionnalité « Essayez avant d'acheter » utilisant la réalité augmentée pour visualiser les produits (meubles, vêtements, accessoires) dans l'environnement réel de l'acheteur | Moyenne | Phase 3 (M+18) |
| **Recherche vocale** | Intégration de la recherche vocale pour les marchés où la saisie textuelle est contraignante (faible littératie numérique, mains occupées) | Moyenne | Phase 2 (M+12) |
| **Chatbot IA** | Assistant conversationnel IA pour le support client, les recommandations produits et l'aide à la navigation | Haute | Phase 2 (M+9) |
| **Live Shopping** | Fonctionnalité de vente en direct intégrée permettant aux vendeurs de diffuser des sessions live avec achat en temps réel | Basse | Phase 3 (M+24) |
| **Commerce social** | Intégration native avec les réseaux sociaux : partage de produits, achat via les réseaux, synchronisation des catalogues | Haute | Phase 2 (M+12) |
| **Authenticité blockchain** | Système de certification d'authenticité des produits premium via la technologie blockchain (NFT de certificat) | Basse | Phase 4 (M+36) |
| **Visual Search** | Recherche par image : photographier un produit pour trouver des similaires sur la plateforme | Moyenne | Phase 2 (M+12) |
| **PWA avancée** | Progressive Web App avec push notifications, mode offline complet pour le catalogue, installation native | Haute | Phase 1 (M+6) |

### 1.9.2 Innovations UX/UI

| Innovation | Description |
|---|---|
| **Design adaptatif contextuel** | L'interface s'adapte automatiquement au contexte de l'utilisateur : marché local, langue, zone horaire, préférences historiques |
| **Navigation immersive** | Expériences de navigation immersive avec galleries 360°, vidéos produits et visualisations en réalité augmentée |
| **Checkout express** | Processus de paiement en un clic pour les utilisateurs enregistrés avec méthode de paiement enregistrée |
| **Mode sombre** | Thème sombre complet pour le confort visuel et l'économie d'énergie sur les écrans OLED |
| **Personnalisation avancée** | Dashboard acheteur et vendeur entièrement personnalisable avec widgets configurables |
| **Micro-interactions** | Animations et micro-interactions fluides pour guider l'utilisateur et renforcer l'engagement |

---

## 1.10 Utilisateurs cibles

### 1.10.1 Segmentation des utilisateurs

La plateforme cinq segments principaux d'utilisateurs :

**Segment 1 : Les Acheteurs Consommateurs (B2C Buyers)**

| Caractéristique | Détail |
|---|---|
| Démographie | 18-65 ans, tous genres, tous niveaux de revenus |
| Géographie | Mondiale, avec focus sur l'Afrique (18-35 ans), l'Asie du Sud-Est, l'Amérique Latine, l'Europe |
| Psychographie | Connectés, mobile-first, sensibles au prix, cherchant la commodité et la diversité |
| Comportement | Achat régulier en ligne (1-10 fois/mois), recherche de bonnes affaires, lecture d'avis, comparaison de prix |
| Taille estimée | 80 % des utilisateurs de la plateforme |
| Besoins principaux | Trouver des produits de qualité à bon prix, livraison fiable, retours faciles |

**Segment 2 : Les Vendeurs Particuliers / Micro-entrepreneurs (Individual Sellers)**

| Caractéristique | Détail |
|---|---|
| Démographie | 18-45 ans, souvent des entrepreneurs solo, artisans, revendeurs |
| Géographie | Mondiale, surreprésentés dans les marchés émergents |
| Psychographie | Entrepreneurials, bootstrap, cherchant à monétiser un savoir-faire ou un stock existant |
| Comportement | Vendent 5-50 produits, gèrent tout eux-mêmes, budgets marketing limités |
| Taille estimée | 60 % des vendeurs |
| Besoins principaux | Simplicité de mise en ligne, faibles coûts, paiements rapides, visibilité |

**Segment 3 : Les Vendeurs PME (SME Sellers)**

| Caractéristique | Détail |
|---|---|
| Démographie | 30-55 ans, dirigeants de PME (2-250 employés) |
| Géographie | Mondiale, forte présence en Asie, Europe, Amérique Latine |
| Psychographie | Professionnels du commerce, cherchant à diversifier leurs canaux de vente |
| Comportement | Vendent 100-10 000 produits, ont une équipe dédiée e-commerce, budgets marketing modérés |
| Taille estimée | 30 % des vendeurs |
| Besoins principaux | Outils avancés de gestion, intégration ERP, bulk listing, analytics |

**Segment 4 : Les Grandes Entreprises (Enterprise Sellers)**

| Caractéristique | Détail |
|---|---|
| Démographie | Directeurs e-commerce, chefs de produit digital |
| Géographie | Mondiale, principalement entreprises établies |
| Psychographie | Exigents en termes de marque, performance et intégration |
| Comportement | Vendent 10 000+ produits, ont des équipes dédiées, budgets marketing importants |
| Taille estimée | 10 % des vendeurs mais 50+ % du GMV |
| Besoins principaux | API bulk, intégration systèmes, support dédié, branding avancé |

**Segment 5 : Les Administrateurs et Modérateurs (Platform Admins)**

| Caractéristique | Détail |
|---|---|
| Démographie | 25-45 ans, employés de la plateforme |
| Géographie | Siège principal + équipes décentralisées |
| Psychographie | Orientés données, processus et qualité |
| Comportement | Utilisent le panneau admin 8h/jour, gèrent des milliers d'utilisateurs |
| Besoins principaux | Outils de modération efficaces, dashboards complets, automatisation |

### 1.10.2 Marchés cibles prioritaires

| Priorité | Marché | Raison | Population | Pénétration Internet |
|---|---|---|---|---|
| 1 | France | Marché de test, langue de départ | 68 M | 93 % |
| 2 | Maroc | Marché Afrique du Nord, francophone | 37 M | 88 % |
| 3 | Côte d'Ivoire | Plus grand marché UEMOA, francophone | 29 M | 53 % |
| 4 | Sénégal | Marché en forte croissance, francophone | 18 M | 62 % |
| 5 | Nigeria | Plus grand marché africain, anglophone | 220 M | 55 % |
| 6 | Ghana | Marché stable, anglophone | 33 M | 68 % |
| 7 | Brésil | Plus grand marché LatAm | 215 M | 81 % |
| 8 | Allemagne | Plus grand marché européen | 84 M | 97 % |
| 9 | Canada | Marché nord-américain, bilingue | 39 M | 97 % |
| 10 | Afrique Sub-saharienne francophone | Expansion progressive | Variable | Variable |

---

## 1.11 Étude du marché

### 1.11.1 Marché mondial du e-commerce 2025-2026

**Taille totale du marché :**

| Année | Taille mondiale e-commerce | Croissance YoY | Part du détail mondial |
|---|---|---|---|
| 2023 | 5 810 Mds $ | +8,8 % | 19,4 % |
| 2024 | 6 330 Mds $ | +9,0 % | 19,8 % |
| 2025 (est.) | 6 900 Mds $ | +9,0 % | 20,1 % |
| 2026 (proj.) | 7 520 Mds $ | +9,0 % | 20,5 % |
| 2028 (proj.) | 8 780 Mds $ | +8,5 % | 21,5 % |

**Croissance par région (2025-2026) :**

| Région | Taille 2025 (Mds $) | Croissance YoY | Part mondiale | Tendance |
|---|---|---|---|---|
| Asie-Pacifique | 3 450 | +10,2 % | 50,0 % | Dominante, maturité en Chine, forte croissance en Asie du SE |
| Amérique du Nord | 1 240 | +7,1 % | 18,0 % | Mature, croissance stable |
| Europe Occidentale | 970 | +6,8 % | 14,1 % | Mature, régulation croissante (DSA, AI Act) |
| Amérique Latine | 510 | +14,5 % | 7,4 % | Forte croissance, mobile-first |
| Europe de l'Est | 195 | +11,2 % | 2,8 % | Croissance solide |
| Moyen-Orient & Afrique du Nord | 230 | +13,8 % | 3,3 % | Forte croissance, mobile money |
| Afrique Sub-saharienne | 180 | +27,5 % | 2,6 % | Croissance la plus rapide, potentiel immense |
| Asie du Sud | 225 | +15,3 % | 3,3 % | Forte croissance (Inde, Bangladesh) |

**Commerce mobile vs desktop (2025) :**

| Canal | Part du e-commerce mondial | Croissance |
|---|---|---|
| Mobile (app + navigateur) | 72,9 % | +12,3 % |
| Desktop | 22,1 % | +3,2 % |
| Tablette | 5,0 % | +1,1 % |

**Tendances clés du marché :**

1. **Commerce conversationnel :** L'intégration de l'IA conversationnelle (ChatGPT, Gemini) dans le parcours d'achat — des chatbots qui recommandent, comparent et finalisent les ventes.
2. **Commerce circulaire :** Montée en puissance du reconditionné, de la seconde main et du location, créant de nouvelles opportunités pour les marketplaces multi-vendeurs.
3. **Commerce inclusif :** Adaptation aux populations mal bankarisées via le cash on delivery, le paiement mobile et le paiement en plusieurs fois sans frais.
4. **Commerce durable :** Intégration de critères ESG dans les parcours d'achat, affichage de l'empreinte carbone, promotion du local.
5. **Commerce ultra-rapide :** Livraison le jour même et à heure fixe dans les zones urbaines.

### 1.11.2 Analyse du marché cible prioritaire — Afrique

Le marché africain du e-commerce présente des caractéristiques uniques qui justifient une approche spécifique :

| Indicateur | Valeur 2025 | Projection 2028 |
|---|---|---|
| Population totale | 1,46 milliard | 1,55 milliard |
| Population urbanisée | 44 % | 47 % |
| Pénétration internet | 46 % (672 M) | 58 % (899 M) |
| Pénétration mobile | 80 % (1,17 Md) | 89 % (1,38 Md) |
| Pénétration e-commerce | 4,7 % | 8,5 % |
| Valeur marché e-commerce | 54 Mds $ (incluant achats informels) | 97 Mds $ |
| Acheteurs en ligne actifs | 38 M | 82 M |
| Panier moyen | 28 $ | 35 $ |
| Mode de paiement dominant | Mobile money (52 %) | Mobile money (55 %) |

**Défis spécifiques au marché africain :**
- Infrastructures logistiques fragmentées (codes postaux incomplets, adresses non standardisées)
- Faible pénétration des cartes bancaires (15 % des adultes ont une carte de débit)
- Connectivité internet intermittente dans les zones rurales
- Diversité linguistique extrême (2 000+ langues, principales : anglais, français, arabe, swahili, haoussa, yoruba)
- Prévalence du paiement à la livraison (cash on delivery) — 45-60 % des transactions dans certains marchés

---

## 1.12 Analyse de la concurrence

### 1.12.1 Panorama concurrentiel mondial

| Plateforme | Fondation | Siège | Modèle | Force(s) | Faiblesse(s) | Parts de marché estimées | Pricing vendeur |
|---|---|---|---|---|---|---|---|
| **Amazon** | 1994 | USA | Marketplace + Retail propre | Leadership mondial, logistique FBA, fidélité Prime (200M+ membres), écosystème complet, confiance consommateur | Commissions élevées (10-15 % + frais cachés), concurrence avec les vendeurs (produits Amazon Basics), dépendance des vendeurs, contrefaçon | ~38 % USA, ~13 % mondial | 8-15 % + FBA + frais |
| **eBay** | 1995 | USA | Marketplace (C2C + B2C) | Ventes aux enchères, vintage/rares, faibles barrières à l'entrée, présence mondiale | Interface datée, moins populaire auprès des jeunes, problèmes de qualité, gestion des litiges lente | ~5 % mondial | 13,25 % + frais paiement |
| **Alibaba/AliExpress** | 1999/2010 | Chine | B2B (Alibaba) + B2C (AliExpress) | Plus grand catalogue mondial, prix très compétitifs (direct fabricants), force en Asie, écosystème complet | Qualité variable, délais d'expédition longs (intercontinental), confiance, service client variable | ~25 % mondial (Alibaba group) | 5-8 % (variable) |
| **Etsy** | 2005 | USA | Marketplace niche (artisanal) | Positionnement artisanal/handmade, communautés fortes, différenciation par l'unicité | Marché niche, prix plus élevés, limité en catégories, croissance ralentie | ~1 % mondial | 6,5 % + 3 % paiement |
| **Shopify** | 2006 | Canada | Plateforme SaaS (pas une marketplace) | Personnalisation totale, propriété du magasin, large écosystème d'apps, facilité d'utilisation | Pas de marketplace intégrée, pas de trafic organique, coûts mensuels élevés pour les petits vendeurs | N/A (1,7M+ merchants) | 2,9 % + 0,30 $/txn (plans 39-399 $/mois) |
| **Jumia** | 2012 | Nigeria | Marketplace + Fintech | Leader Afrique, paiement mobile (JumiaPay), connaissance locale | Pertes financières continues, logistique difficile, confiance, gamme limitée | Leader Afrique (~25 % e-commerce formel) | 5-15 % |
| **Wish** | 2010 | USA | Marketplace mobile-first | Prix ultra-compétitifs, expérience mobile, découverte de produits | Qualité très variable, confiance, délais d'expédition longs, marques contrefaites | Déclin (~2 % marché USA) | 15 % + frais |
| **Mercado Libre** | 1999 | Argentine | Marketplace + Fintech + Logistique | Leader LatAm, Mercado Pago (paiements), logistique intégrée, confiance régionale | Dominance régionale limitée, hors LatAm peu présent | ~35 % LatAm | 10-16 % |
| **Rakuten** | 1997 | Japon | Marketplace + Écosystème | Fidélité (points Rakuten), écosystème complet, forte au Japon | Faible présence hors Asie, complexité, marché en déclin au Japon | ~5 % Japon | 8-12 % |
| **Flipkart** | 2007 | Inde | Marketplace (owned by Walmart) | Leader Inde, compréhension locale, Big Billion Days (événemential), PhonePe (paiement) | Dominance Inde uniquement, concurrence Amazon India | ~31 % Inde | 5-15 % |
| **Temu** | 2022 | USA (owned by PDD) | Marketplace direct-fabricants | Prix extrêmement bas, gamification, croissance explosive | Qualité douteuse, pratiques tarifaires controversées, dépendance à la Chine, risques réglementaires | ~3 % USA (en forte croissance) | N/A (modèle direct) |

### 1.12.2 Analyse des positions concurrentielles

`
                   Prix eleve
                        |
           Amazon       |      Etsy
           (premium)    |      (artisanal)
                        |
  Faible -----------------+----------------- Forte
  experience            |              experience
                        |
           Wish/Temu    |     [NOTRE PLATEFORME]
           (discount)   |     (accessible + qualite)
                        |
                   Prix bas
`

### 1.12.3 Avantages concurrentiels différenciants

| Facteur de différenciation | Nos concurrents | Notre approche |
|---|---|---|
| Commissions | 8-30 % (Amazon, eBay) | 5-8 % avec transparence totale |
| Paiement aux vendeurs | 14-30 jours | 7 jours maximum, option J+1 pour vendeurs établis |
| Support vendeur | Variable, souvent limité | Support multilingue dédié, academy, communauté |
| Localisation | Superficielle (traduction) | Adaptation profonde (paiements locaux, UX culturelle, logistique locale) |
| Frais d'inscription | 0-399 $/mois | Gratuit pour démarrer, options premium optionnelles |
| Protection acheteur | Variable | Garantie 100 % satisfaction, médiation rapide |
| Outils analytics | Basiques (Amazon) ou payants | Avancés et gratuits pour tous les vendeurs |
| Poids du bundle | Lourd (Amazon 3-5 MB) | Leger (< 200 KB gzipped), optimise marche emerging |
| Offline | Limité ou absent | Support PWA offline complet pour catalogue et panier |
| Social commerce | Fragmente | Integre nativement (partage, live shopping, recommandations sociales) |

---

## 1.13 Analyse SWOT (Forces, Faiblesses, Opportunités, Menaces)

### 1.13.1 Forces (Strengths)

| ID | Force | Description |
|---|---|---|
| S-01 | Stack technologique moderne | Utilisation de ReactJS, un écosystème mature avec une communauté massive, offrant performance, maintenabilité et un large vivier de développeurs |
| S-02 | Architecture frontend modulaire | Composants réutilisables, code splitting, lazy loading permettant des performances optimales et une maintenance facilitée |
| S-03 | Modèle de tarification vendeur avantageux | Commissions de 5-8 % significativement inférieures aux concurrents (10-30 %), attire les vendeurs et réduit leur friction |
| S-04 | Mobile-first et PWA | Conception native pour le mobile avec PWA offrant une expérience applicative sans installation, cruciale pour les marchés emerging |
| S-05 | Design system cohérent | Système de design unifié garantissant une expérience visuelle et interactionnelle cohérente sur toutes les pages et tous les devices |
| S-06 | Multilinguisme natif | Architecture i18n dès la conception, support de 3+ langues au MVP, extensible à 50+ langues |
| S-07 | Accessibilité intégrée | Conformité WCAG 2.1 AA dès le départ, ouvrant la plateforme aux personnes en situation de handicap |
| S-08 | PWA offline | Support hors ligne pour le catalogue et le panier, essentiel dans les zones à connectivité instable |
| S-09 | Approche lean et agile | Méthodologie agile avec sprints de 2 semaines, livraisons incrémentales, feedback continu des utilisateurs |
| S-10 | Équipe technique expérimentent | Équipe de développeurs ReactJS seniors avec expérience dans les projets e-commerce de grande envergure |
| S-11 | Bundle optimisé | Taille du bundle JavaScript < 200 KB gzipped, performance sur réseaux à faible débit |
| S-12 | Design adaptatif | Interface capable de s'adapter au contexte local de l'utilisateur (langue, devise, culture) |

### 1.13.2 Faiblesses (Weaknesses)

| ID | Faiblesse | Description | Plan d'atténuation |
|---|---|---|---|
| W-01 | Nouveau venu sans base utilisateurs | Pas de base installée, pas de notoriété de marque, pas de données historiques | Stratégie d'acquisition agressive, partenariats locaux, marketing digital ciblé |
| W-02 | Dépendance au backend | Le frontend est dépendant de la disponibilité et de la performance des API backend | Architecture offline first, cache intelligent, simulation de données en cas d'indisponibilité |
| W-03 | Absence d'app native iOS/Android | La PWA ne bénéficie pas de toutes les fonctionnalités natives (push notifications iOS limitées) | Suivi de l'évolution des capacités PWA, étude d'app native en phase 3 |
| W-04 | Budget limité par rapport aux géants | Les ressources financières sont inférieures à Amazon, Alibaba, etc. | Focus sur des marchés niches, viralité produit, growth hacking |
| W-05 | Pas de logistique propre | Dépendance aux partenaires logistiques tiers | Multiples partenaires, SLA contraignants, monitoring en temps réel |
| W-06 | Risque de dette technique | Complexité potentielle d'une codebase ReactJS de grande taille | Code reviews obligatoires, tests automatisés, refactoring régulier |
| W-07 | Fragmentation du support multilingue | Maintenir la qualité dans 50+ langues est un défi majeur | Processus de traduction professionnel, traduction communautaire, automatisation |
| W-08 | Absence de données d'entraînement IA | Les modèles de recommandation nécessitent des données historiques abondantes | Utilisation de modèles pré-entraînés, collecte progressive de données, règles métier initiales |

### 1.13.3 Opportunités (Opportunities)

| ID | Opportunité | Description | Priorité |
|---|---|---|---|
| O-01 | Marché africain en explosion | Croissance de 28 %/an, pénétration e-commerce à 4,7 % — potentiel massif | Haute |
| O-02 | Déclin des marketplaces traditionnelles | Amazon, eBay perdent des parts face aux nouveaux entrants innovants | Haute |
| O-03 | Commerce social en plein essor | 1,2 T$ de transactions, croissance de 30 %/an — intégration native possible | Haute |
| O-04 | Paiement mobile en Afrique | M-Pesa, Orange Money, Wave — 52 % des paiements en Afrique | Haute |
| O-05 | Cross-border en croissance | 27 % du e-commerce mondial, corridors Afrique-Asie dynamiques | Moyenne |
| O-06 | IA générative pour le commerce | Chatbots IA, recommandations personnalisées, descriptions automatiques | Moyenne |
| O-07 | Commerce durable | Demande croissante pour les produits éco-responsables | Moyenne |
| O-08 | Inclusion financière | Micro-crédit aux vendeurs, BNPL pour les acheteurs | Basse |
| O-09 | 5G et connectivité améliorée | Déploiement massif de la 5G en Afrique et Asie | Moyenne |
| O-10 | Commerce vocal | Recherche vocale pour les marchés à faible littératie numérique | Basse |
| O-11 | Partenariats stratégiques | Intégration avec les réseaux sociaux, transporteurs, banques locales | Haute |
| O-12 | Réforme post-COVID | Les gouvernements encouragent la digitalisation du commerce | Moyenne |

### 1.13.4 Menaces (Threats)

| ID | Menace | Description | Probabilité | Impact | Plan d'atténuation |
|---|---|---|---|---|---|
| T-01 | Concurrence des géants | Amazon, Alibaba, Jumia peuvent lancer des initiatives similaires | Élevée | Élevé | Différenciation continue, agilité, focus sur les niches non servies |
| T-02 | Réglementation croissante | RGPD, DSA, lois anti-monopole peuvent imposer des contraintes coûteuses | Élevée | Moyen | Veille réglementaire proactive, conformité dès la conception |
| T-03 | Instabilité politique/marchés émergents | Les marchés cibles (Afrique, LatAm) présentent des risques politiques | Moyenne | Élevé | Diversification géographique, réserves financières |
| T-04 | Fraudes et sécurité | Cyberattaques, fraudes aux paiements, contrefaçon | Élevée | Élevé | Sécurité by design, audits réguliers, assurance fraude |
| T-05 | Évolution technologique rapide | Les frameworks et outils évoluent rapidement, risque d'obsolescence | Moyenne | Moyen | Veille technologique continue, architecture découplée |
| T-06 | Résistance à l'adoption | Les utilisateurs sont attachés aux plateformes existantes | Moyenne | Moyen | Onboarding exceptionnel, incitations, referral program |
| T-07 | Problèmes logistiques | Infrastructures logistiques déficientes dans les marchés cibles | Élevée | Élevé | Multiples partenaires logistiques, solutions locales innovantes |
| T-08 | Fluctuations de change | Les variations de devises peuvent impacter les marges | Moyenne | Moyen | Couverture de change, prix dynamiques |
| T-09 | Dépendance aux fournisseurs de cloud | Dépendance à AWS, GCP ou Azure pour l'infrastructure | Faible | Élevé | Multi-cloud stratégique, conteneurisation |
| T-10 | Récession économique | Une récession mondiale réduit les dépenses de consommation | Moyenne | Élevé | Positionnement value-for-money, flexibilité des coûts |
| T-11 | Problèmes de qualité fournisseurs | Les vendeurs de mauvaise qualité nuisent à la réputation de la plateforme | Élevée | Élevé | Système de notation vendeur, modération proactive, politique de retour |
| T-12 | DDoS et cyberattaques | Attaques par déni de service pouvant rendre la plateforme indisponible | Moyenne | Élevé | Protection DDoS, architecture résiliente, backup systems |

---

## 1.14 Business Model Canvas (BMC)

### 1.14.1 Vue d'ensemble du Business Model Canvas

Le Business Model Canvas ci-dessous décrit les neuf blocs fondamentaux du modèle économique de la plateforme marketplace.

### 1.14.2 Partenaires Clés (Key Partners)

| Catégorie | Partenaires | Rôle | Valeur échangée |
|---|---|---|---|
| **Paiement** | Stripe, PayPal, Flutterwave, M-Pesa, Orange Money, Wave, MTN Mobile Money | Traitement des paiements en ligne, paiements mobiles, virements | Commissions sur transactions, infrastructure de paiement sécurisée |
| **Logistique** | DHL, FedEx, UPS, Sendy, Kobo360,当地 transporteurs | Expédition, livraison, suivi des colis | Frais de livraison collectés, couverture géographique |
| **Cloud** | Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure | Hébergement, compute, stockage, CDN, base de données | Infrastructure scalable, fiabilité, performance mondiale |
| **Recherche** | Algolia, Elastic, MeiliSearch | Moteur de recherche avancé, recherche facettée | Recherche performante et pertinente |
| **Communication** | Twilio, SendGrid, OneSignal | SMS, email transactionnel, push notifications | Communication multicanale avec les utilisateurs |
| **Authentification** | Auth0, Firebase Auth, Keycloak | Gestion des identités, SSO, OAuth | Sécurité de l'authentification |
| **Analytics** | Mixpanel, Amplitude, Google Analytics | Analyse du comportement utilisateur, tracking | Données d'optimisation produit |
| **Partenaires commerciaux** | Marques, fabricants, grossistes | Fournisseurs d'offre, produits de qualité | Catalogue diversifié, attractivité pour les acheteurs |
| **Associations vendeurs** | Associations de commerçants, chambres de commerce | Recrutement de vendeurs, formation | Base de vendeurs qualifiés |
| **Médias locaux** | Blogs, influenceurs, chaînes YouTube | Marketing d'acquisition, awareness | Trafic organique et payant |

### 1.14.3 Activités Clés (Key Activities)

| Activité | Description | Priorité |
|---|---|---|
| Développement et maintenance frontend | Développement continu de la plateforme ReactJS, correction de bugs, optimisation des performances, ajout de fonctionnalités | Critique |
| Conception UX/UI | Design, prototypage, tests utilisateurs, maintenance du design system | Critique |
| Intégration API backend | Intégration et maintenance des connexions avec les API backend (produits, commandes, paiements, utilisateurs) | Critique |
| Optimisation SEO | Référencement naturel, structured data, SSR/SSG, performance technique pour le SEO | Haute |
| Qualité et test | Tests automatisés (unitaires, intégration, end-to-end), tests de performance, tests d'accessibilité | Haute |
| Gestion i18n | Traduction, localisation culturelle, adaptation des contenus | Haute |
| Support technique frontend | Diagnostic et résolution des problèmes techniques côté client | Moyenne |
| Veille technologique | Suivi des évolutions de ReactJS, des navigateurs, des standards web | Moyenne |
| Recrutement et formation | Recrutement de développeurs talentueux, formation continue de l'équipe | Moyenne |
| Sécurité frontend | Audit de sécurité, protection contre les attaques XSS/CSRF, gestion des tokens | Critique |

### 1.14.4 Ressources Clés (Key Resources)

| Ressource | Type | Description |
|---|---|---|
| Équipe frontend | Humaine | 6-8 développeurs ReactJS, 1 lead technique, 1 UX designer, 1 QA engineer |
| Code source | Intellectuelle | Code ReactJS, composants, hooks, utilitaires, design system |
| Design system | Intellectuelle | Bibliothèque de composants UI, guidelines, tokens de design |
| Infrastructure cloud | Physique | Instances cloud, CDN, bases de données, stockage d'objets |
| API backend | Numérique | API REST/GraphQL pour les services métier (non développées dans ce scope) |
| Données utilisateurs | Numérique | Profils, historiques, préférences, comportements |
| Marque | Intellectuelle | Nom de marque, logo, identité visuelle |
| Brevets et IP | Intellectuelle | Technologies propriétaires, algorithmes de recommandation |
| Relations partenaires | Organisationnelle | Contrats avec les fournisseurs de services (paiement, logistique, cloud) |
| Budget | Financière | Budget de développement frontend (250-400K $ MVP) |

### 1.14.5 Propositions de Valeur (Value Propositions)

**Pour les Acheteurs :**

| Proposition | Description |
|---|---|
| Catalogue mondial | Accès à des millions de produits de milliers de vendeurs internationaux |
| Meilleurs prix | Comparaison de prix entre vendeurs, promotions, coupons |
| Confiance garantie | Avis vérifiés, protection acheteur, garantie remboursement |
| Expérience fluide | Navigation rapide, checkout express, suivi en temps réel |
| Personnalisation | Recommandations IA, listes personnalisées, alertes produits |
| Multi-devices | Expérience identique sur mobile, tablette, desktop |
| Multilingue | Interface dans la langue de l'utilisateur |
| Offline | Consultation du catalogue même hors connexion |

**Pour les Vendeurs :**

| Proposition | Description |
|---|---|
| Marché mondial | Accès à des millions d'acheteurs dans 50+ pays |
| Faibles coûts | Commissions de 5-8 %, pas de frais cachés |
| Outils professionnels | Dashboard complet de gestion (catalogue, stocks, commandes, analytics) |
| Support dédié | Accompagnement multilingue, academy, communauté |
| Paiement rapide | Virement en 7 jours, option J+1 |
| Marketing intégré | Publicité CPC/CPM, SEO produit, mise en avant |
| Analytics avancés | Données en temps réel sur les performances |

**Pour la Plateforme :**

| Proposition | Description |
|---|---|
| Modèle scalable | Revenus croissant avec le volume de transactions |
| Effets de réseau | Croissance auto-alimentée par les effets de réseau |
| Données précieuses | Intelligence de marché monétisable |
| Écosystème extensible | Fintech, assurance, formation comme extensions |

### 1.14.6 Relations Client (Customer Relationships)

| Type de relation | Segment cible | Description |
|---|---|---|
| Self-service | Acheteurs occasionnels | Parcours d'achat autonome, FAQ, centre d'aide |
| Assistance automatisée | Tous les utilisateurs | Chatbot IA, emails transactionnels, notifications push |
| Communauté | Vendeurs, power users | Forum vendeur, groupe Facebook/Discord, testimonials |
| Support dédié | Vendeurs premium, enterprise | Account manager, support prioritaire, hotline |
| Co-création | Vendeurs actifs | Programmes beta, feedback loops, co-développement de features |
| Personnalisation | Tous les utilisateurs | Recommandations IA, emails personnalisés, offres ciblées |

### 1.14.7 Canaux (Channels)

| Canal | Type | Description | Priorité |
|---|---|---|---|
| Site web (PWA) | Direct | Plateforme web principale, responsive, PWA installable | Critique |
| Réseaux sociaux | Acquisition | Facebook, Instagram, TikTok, Twitter/X, LinkedIn | Haute |
| Marketing de contenu | Acquisition | Blog, SEO, articles, guides d'achat, vidéos YouTube | Haute |
| Publicité payante | Acquisition | Google Ads, Facebook Ads, TikTok Ads, ads mobiles | Haute |
| Email marketing | Rétention | Newsletters, promotions, relances paniers abandonnés, transactionnels | Haute |
| Programmes de parrainage | Viralité | Parrainage acheteur-acheteur, vendeur-vendeur avec incentives | Moyenne |
| Partenariats | Distribution | Intégration avec les réseaux sociaux, comparateurs de prix | Moyenne |
| PR et médias | Awareness | Relations presse, conférences, événements industry | Moyenne |
| App stores (PWA) | Distribution | Installation directe via les navigateurs | Haute |
| SMS et WhatsApp | Rétention | Notifications de commande, promotions, support client | Haute |

### 1.14.8 Segments de Clientèle (Customer Segments)

| Segment | Taille estimée | Revenu par utilisateur | Canaux d'acquisition |
|---|---|---|---|
| Acheteurs consommateurs (B2C) | 80 % des utilisateurs | Panier moyen 25-50 $, 2-4 achats/mois | SEO, réseaux sociaux, publicité, bouche-à-oreille |
| Vendeurs particuliers | 60 % des vendeurs | Commission 5-8 %, CA mensuel 500-5 000 $ | SEO, communautés vendeurs, marketing de contenu |
| Vendeurs PME | 30 % des vendeurs | Commission 5-8 %, CA mensuel 5 000-100 000 $ | Sales team, événements industry, partenariats |
| Grandes entreprises | 10 % des vendeurs | Commission 5-8 %, CA mensuel 100 000+ $ | Enterprise sales, partnerships, RFP |
| Administrateurs plateforme | Interne | N/A | Recrutement |
| Partners logistiques | 50+ partenaires | Revenus partagés sur livraisons | Business development |
| Partners paiement | 10+ partenaires | Revenus partagés sur transactions | Business development |

### 1.14.9 Structure des Coûts (Cost Structure)

| Poste de coût | Type | Budget annuel estimé | % du total |
|---|---|---|---|
| Salaires équipe frontend | Fixe | 600 000 - 900 000 $ | 40-45 % |
| Infrastructure cloud | Variable | 120 000 - 300 000 $ | 10-15 % |
| Licences et outils SaaS | Fixe | 50 000 - 100 000 $ | 5-8 % |
| Marketing digital (acquisition) | Variable | 200 000 - 500 000 $ | 15-25 % |
| Design et UX | Fixe | 80 000 - 150 000 $ | 6-10 % |
| Tests et QA | Fixe | 60 000 - 100 000 $ | 4-7 % |
| Formation et certification | Fixe | 20 000 - 40 000 $ | 2-3 % |
| Frais juridiques et conformité | Fixe | 30 000 - 60 000 $ | 2-4 % |
| Divers et imprévus | Variable | 50 000 - 100 000 $ | 5-8 % |
| **Total estimé (phase MVP, an 1)** | | **1 210 000 - 2 250 000 $** | **100 %** |

### 1.14.10 Sources de Revenus (Revenue Streams)

| Source de revenus | Description | Modèle de tarification | Revenu estimé (an 2) |
|---|---|---|---|
| **Commissions sur transactions** | Pourcentage prélevé sur chaque vente réalisée via la plateforme | 5-8 % du montant de la transaction (hors frais de livraison) | 2-5 M $ |
| **Publicité en ligne** | Espace publicitaire pour les vendeurs souhaitant/promouvoir leurs produits | CPC (0,10-2 $/clic) ou CPM (5-15 $/1000 impressions) | 500K-1,5 M $ |
| **Abonnements premium vendeurs** | Plans premium offrant des fonctionnalités avancées | Basic (gratuit) / Pro (29 $/mois) / Enterprise (99 $/mois) | 200K-500K $ |
| **Services de mise en avant** | Positionnement premium dans les résultats de recherche et les pages catégorie | Enchères CPC ou forfaits fixes (50-500 $/semaine) | 300K-800K $ |
| **Analytics avancés** | Données marché et analytics premium pour les vendeurs | Abonnement 19-49 $/mois | 100K-300K $ |
| **Services financiers** | Avance sur paiement, micro-crédit aux vendeurs | Intérêts (2-5 % par transaction) | 50K-200K $ (phase 3) |
| **Frais de conversion de devise** | Marge sur la conversion entre devises | 1-2 % du montant converti | 200K-500K $ |
| **Données et insights** | Vente de rapports d'analyse de marché (agrégés, anonymisés) | Forfaits 500-5 000 $/mois | 100K-300K $ |
| **Partenariats logistiques** | Commissions sur les livraisons facilitées via la plateforme | 5-10 % des frais de livraison | 150K-400K $ |

---

<a name="chapitre-2"></a>

# CHAPITRE 2 : Analyse des besoins

---

## 2.1 Besoins fonctionnels

### 2.1.1 Module : Authentification et Gestion des Utilisateurs

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-AUTH-001 | Inscription acheteur | Creer un compte acheteur via email, telephone ou reseaux sociaux (Google, Facebook, Apple). Formulaire : nom, prenom, email, mot de passe, confirmation. Verification par code OTP SMS/email. | P0 | Auth |
| FN-AUTH-002 | Inscription vendeur | Creer un compte vendeur avec informations supplementaires : type (particulier/entreprise), nom boutique, description, documents d'identification, RIB/IBAN. Validation admin avant activation. | P0 | Auth |
| FN-AUTH-003 | Connexion standard | Authentification email + mot de passe avec option Se souvenir de moi. Refresh token. Limitation tentatives (5 puis lockout 15 min). | P0 | Auth |
| FN-AUTH-004 | Connexion sociale (OAuth) | Connexion via Google, Facebook, Apple ID, Telegram, WhatsApp. Creation automatique de compte au premier login social. | P1 | Auth |
| FN-AUTH-005 | Authentification 2FA | Activation optionnelle par SMS, email ou authenticator. Obligatoire pour vendeurs CA > 10K$/mois. | P1 | Auth |
| FN-AUTH-006 | Mot de passe oublie | Reinitialisation par email : lien valide 24h, nouveau mot de passe avec criteres de complexite (8+ car., majuscule, minuscule, chiffre, special). | P0 | Auth |
| FN-AUTH-007 | Verification email | Email de verification apres inscription avec lien d'activation. Renvoi possible toutes les 60 secondes. | P0 | Auth |
| FN-AUTH-008 | Verification telephone | Verification par OTP (6 chiffres) envoye par SMS. Timeout 5 min. Max 3 tentatives. | P0 | Auth |
| FN-AUTH-009 | Deconnexion | Suppression des tokens, redirection vers la page d'accueil. | P0 | Auth |
| FN-AUTH-010 | Gestion du profil | Modifier : nom, prenom, photo, telephone, emails secondaires, mot de passe, preferences de notification, langue, devise. | P0 | Auth |
| FN-AUTH-011 | Suppression de compte | Demande de suppression conforme RGPD. Delai de retractation 30 jours. Suspension immediate. | P1 | Auth |
| FN-AUTH-012 | Portabilite des donnees | Telechargement des donnees personnelles en JSON/CSV (RGPD). | P1 | Auth |
| FN-AUTH-013 | Roles et permissions | Systeme de roles (buyer, seller, admin, super_admin) avec permissions granulaires. Double role acheteur+vendeur possible. | P0 | Auth |
### 2.1.2 Module : Catalogue Produits

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-PROD-001 | Page d'accueil | Banniere promotionnelle rotative, categories populaires, produits tendance, recommandations personnalisees, offres flash, produits recemment Consultes, boutiques en vedette. | P0 | Catalog |
| FN-PROD-002 | Liste des categories | Navigation arborescente avec icones, compteur de produits. Maximum 4 niveaux de profondeur. Mega-menu dans le header. | P0 | Catalog |
| FN-PROD-003 | Page de liste produits (PLP) | Grille/liste de produits, pagination, compteur de resultats, tri (prix, popularite, note, date, distance). | P0 | Catalog |
| FN-PROD-004 | Fiche produit (PDP) | Gallery images (zoom, swipe), titre, description, prix (original + promotionnel), variantes, stock, avis, infos vendeur, produits similaires, boutons ajouter au panier/acheter. | P0 | Catalog |
| FN-PROD-005 | Gallery images produit | Image principale, thumbnails, zoom au survol/toucher, swipe mobile, visionneuse plein ecran, support video (max 2). | P0 | Catalog |
| FN-PROD-006 | Gestion des variantes | Variantes (taille, couleur, matiere) avec selecteur dynamique, prix/image/stock mis a jour selon la selection. | P0 | Catalog |
| FN-PROD-007 | Informations vendeur sur fiche | Nom vendeur, note moyenne, nombre de ventes, bouton Voir la boutique, lien vers autres produits du vendeur. | P0 | Catalog |
| FN-PROD-008 | Produits similaires | Section basee sur la categorie, le prix et les tags. Algorithme simple (phase 1) puis IA (phase 2). | P1 | Catalog |
| FN-PROD-009 | Produits frequently bought together | Combinaisons les plus frequentes. Bundle pricing possible. | P2 | Catalog |
| FN-PROD-010 | Comparaison de produits | Comparaison de 2-4 produits sur criteres techniques. Vue tableau comparatif. | P2 | Catalog |
| FN-PROD-011 | Historique de navigation | Produits recemment Consultes pour utilisateurs connectes. Stockage local pour non-connectes. | P1 | Catalog |
| FN-PROD-012 | Etat du stock | En stock, Stock limité (X restants), Rupture de stock, Precommande. | P0 | Catalog |
| FN-PROD-013 | Indicateurs de livraison | Estimation delai et cout de livraison sur la fiche produit. | P0 | Catalog |
| FN-PROD-014 | Badges et labels | Bestseller, Nouveau, Promo, Livraison gratuite, Eco-responsable, Vendeur verifie, Top vendeur. | P1 | Catalog |
| FN-PROD-015 | Partage produit | Boutons de partage (Facebook, Twitter, WhatsApp, Telegram) + copie lien + meta tags Open Graph. | P1 | Catalog |
### 2.1.3 Module : Recherche et Decouverte

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-SRC-001 | Barre de recherche | Barre persistante dans le header : autocomplete en temps reel, historique, categories suggerees, produits suggerees avec images. Debounce 300ms. | P0 | Search |
| FN-SRC-002 | Page de resultats | Compteur, filtres facettes, tris multiples, surbrillance des termes, pagination. | P0 | Search |
| FN-SRC-003 | Filtres de recherche | Filtres dynamiques : prix (fourchette), marque, note min, etat, livraison gratuite, vendeur local, couleurs, tailles, caracteristiques techniques. Combinables. | P0 | Search |
| FN-SRC-004 | Recherche avancee | Formulaire : mot-cle, categorie, fourchette prix, vendeur, note min, emplacement, date d'ajout. | P1 | Search |
| FN-SRC-005 | Recherche par image | Photographier ou telecharger une image pour trouver des produits similaires. Phase 2. | P2 | Search |
| FN-SRC-006 | Recherche vocale | Bouton de micro pour recherche par la voix. Phase 2. | P2 | Search |
| FN-SRC-007 | Faut tolerance | Correction automatique des fautes de frappe, suggestions Vouliez-vous dire...?, recherche phonetique. | P1 | Search |
| FN-SRC-008 | Recherche multilingue | Comprehension des synonymes et traductions (telephone = phone). | P1 | Search |
| FN-SRC-009 | Aucun resultat | Page avec suggestions de recherches alternatives, produits populaires, lien vers support. | P1 | Search |
| FN-SRC-010 | Tendances et suggestions | Recherches tendances, suggestions saisonnieres, recommandations de recherche. | P2 | Search |

### 2.1.4 Module : Panier et Checkout

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-CART-001 | Ajouter au panier | Bouton avec selection de variante. Animation de confirmation (badge panier majore). Selecteur de variantes modal si non selectionne. | P0 | Cart |
| FN-CART-002 | Mini-panier | Dropdown dans le header : resume (nb articles, sous-total). Accès rapide au panier complet. | P0 | Cart |
| FN-CART-003 | Panier complet | Liste articles : image, titre, variante, prix unitaire, quantite modifiable, sous-total, suppression, lien fiche produit. Groupement par vendeur. | P0 | Cart |
| FN-CART-004 | Modifier quantite | Input + boutons +/-. Verification stock en temps reel. Message si quantite > stock. | P0 | Cart |
| FN-CART-005 | Supprimer du panier | Confirmation (dialog modal). Retrait et recalcul. | P0 | Cart |
| FN-CART-006 | Panier persistant | Sauvegarde serveur (connecte) ou localStorage (non connecte). Synchronisation au login. | P0 | Cart |
| FN-CART-007 | Resume du panier | Sous-total, frais livraison estimes, taxes, reductions, total. Mise a jour dynamique. | P0 | Cart |
| FN-CART-008 | Codes promo | Champ de saisie, validation en temps reel, montant de la reduction, erreur si invalide/expire. | P0 | Cart |
| FN-CART-009 | Produits indisponibles | Avertissement si produit indisponible. Bloquant avant checkout. | P0 | Cart |
| FN-CART-010 | Liste de souhaits (favoris) | Bouton favoris sur chaque produit. Page favoris avec option Ajouter au panier. Notif de baisse de prix. | P1 | Cart |
| FN-CART-011 | Livraison estimee | Estimation delai par article et par vendeur, basee sur l'adresse de livraison. | P0 | Cart |
| FN-CART-012 | Panier partage | Partage du panier via lien (achats de groupe). | P3 | Cart |
### 2.1.5 Module : Checkout et Paiement

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-CHEK-001 | Checkout multi-etapes | 4 etapes : (1) Adresse livraison, (2) Methode livraison, (3) Methode paiement, (4) Recapitulatif. Barre de progression. Retour possible. | P0 | Checkout |
| FN-CHEK-002 | Gestion des adresses | Selection adresse existante ou ajout nouvelle. Formulaire : nom, ligne 1, ligne 2, ville, etat, code postal, pays, telephone. Autocomplete Google Places. | P0 | Checkout |
| FN-CHEK-003 | Livraison multi-options | Choix : standard (3-7j), express (1-3j), point relais, retrait magasin. Cout et delai pour chaque option. | P0 | Checkout |
| FN-CHEK-004 | Methodes de paiement | Cartes (Visa, Mastercard, Amex via Stripe), PayPal, Apple Pay, Google Pay, Mobile Money (M-Pesa, Orange Money, Wave), virement bancaire, paiement a la livraison, BNPL (phase 2). | P0 | Checkout |
| FN-CHEK-005 | Paiement securise PCI-DSS | Aucune donnee carte dans le frontend. Iframes Stripe Elements. Tokenisation. | P0 | Checkout |
| FN-CHEK-006 | Recapitulatif commande | Articles, adresses, livraison, paiement, reductions, frais, taxes, total. Bouton Confirmer et payer. | P0 | Checkout |
| FN-CHEK-007 | Confirmation commande | Numero commande, recapitulatif, delai estime, email confirmation, bouton Suivre ma commande. | P0 | Checkout |
| FN-CHEK-008 | Checkout invite | Commande sans compte. Email pour confirmation. Proposition de creation de compte apres. | P0 | Checkout |
| FN-CHEK-009 | Sauvegarde methode paiement | Tokenisation pour prochaines commandes. Default pour utilisateurs enregistres. | P1 | Checkout |
| FN-CHEK-010 | Multi-vendeur checkout | Produits de vendeurs differs : livraisons separees, un seul paiement. | P0 | Checkout |
| FN-CHEK-011 | Estimation taxes | Calcul automatique TVA selon pays de livraison et nature du produit. | P0 | Checkout |
| FN-CHEK-012 | Anti-fraude | Verification CVV, AVS, 3D Secure 2.0 pour transactions a risque. | P0 | Checkout |
| FN-CHEK-013 | Montant minimum commande | Seuil configurable par vendeur. Message d'erreur si non atteint. | P2 | Checkout |

### 2.1.6 Module : Commandes et Suivi

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-ORD-001 | Historique commandes | Liste chronologique : numero, date, statut, nb articles, montant, vendeur(s). Filtres par statut, periode. | P0 | Orders |
| FN-ORD-002 | Detail commande | Articles (images), statut avec timeline, adresse, paiement, montant detaille, numero suivi. | P0 | Orders |
| FN-ORD-003 | Suivi temps reel | Commande confirmee > En preparation > Expediee > En transit > Livree. Carte de suivi si disponible. | P0 | Orders |
| FN-ORD-004 | Notifications de statut | Push, email et in-app a chaque changement de statut. | P0 | Orders |
| FN-ORD-005 | Demande de retour | Formulaire : motif (taille incorrecte, defaut, etc.), description, upload photos. | P0 | Orders |
| FN-ORD-006 | Demande de remboursement | Choix : remboursement mode de paiement original ou credit magasin. | P0 | Orders |
| FN-ORD-007 | Annulation commande | Annulation tant que non expediee. Confirmation obligatoire. | P1 | Orders |
| FN-ORD-008 | Facture PDF | Telechargement facture/recu au format PDF. | P0 | Orders |
| FN-ORD-009 | Suivi multi-colis | Suivi independant par colis pour commandes multi-vendeurs. | P0 | Orders |
| FN-ORD-010 | Reception et confirmation | Bouton Confirmer la reception. Protection acheteur 14 jours apres reception. | P0 | Orders |
| FN-ORD-011 | Contacter vendeur | Lien rapide pour contacter le vendeur depuis la commande. | P1 | Orders |
### 2.1.7 Module : Gestion Vendeur (Seller Dashboard)

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-SELL-001 | Creation de boutique | Formulaire : nom, description, logo, banniere, politique retour, delais traitement, categories. Previsualisation temps reel. | P0 | Seller |
| FN-SELL-002 | Dashboard principal | Ventes jour/semaine/mois, revenus, commandes en attente, alertes stock, graphiques performance. | P0 | Seller |
| FN-SELL-003 | Ajout de produit | Formulaire complet : titre, description (editeur riche), categorie, prix, stock, variantes, images (upload multiple, reordonnancement), poids/dimensions, tags, etat. | P0 | Seller |
| FN-SELL-004 | Modification de produit | Modification de toutes les informations. Historique des modifications. | P0 | Seller |
| FN-SELL-005 | Suppression de produit | Confirmation. Desactivation si commandes en cours. | P0 | Seller |
| FN-SELL-006 | Gestion du stock | Mise a jour par produit/variante. Alertes stock bas (seuil configurable). Import/export CSV. | P0 | Seller |
| FN-SELL-007 | Gestion en lot | Actions batch : modifier prix/stock, supprimer, activer/desactiver pour plusieurs produits. | P1 | Seller |
| FN-SELL-008 | Import CSV produits | Import masse via CSV avec mapping colonnes. Template CSV telechargeable. | P1 | Seller |
| FN-SELL-009 | Gestion commandes vendeur | Liste commandes avec filtres (en attente, en cours, expediees, livrees, retournees). Actions : confirmer, preparer, expedier (saisie suivi), annuler. | P0 | Seller |
| FN-SELL-010 | Statistiques vendeur | CA, nb commandes, panier moyen, trafic, taux conversion, top produits, top categories, tendances. Export CSV/PDF. | P0 | Seller |
| FN-SELL-011 | Gestion promotions | Reduction % ou fixe, code promo, flash sale (debut/fin), par categorie, seuil minimum commande. | P1 | Seller |
| FN-SELL-012 | Messages clients | Boite de reception messages clients. Templates de reponse. | P0 | Seller |
| FN-SELL-013 | Parametres boutique | Nom, description, logo, banniere, politique retour, confidentialite, FAQ, horaires reponse. | P0 | Seller |
| FN-SELL-014 | Facturation vendeur | Releves commission, historique paiements, factures. Simulation gains nets. | P0 | Seller |
| FN-SELL-015 | Avis clients | Liste avis avec note, contenu, date, produit. Reponse publique possible. Signalement. | P0 | Seller |
| FN-SELL-016 | Multi-boutiques | Plusieurs boutiques sous un seul compte (phase 2). | P2 | Seller |

### 2.1.8 Module : Avis et Notations

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-REV-001 | Laisser un avis | Note (1-5 etoiles), titre, commentaire (min 20 car.), photos (max 5), taille/commandee. Un avis par produit par commande. Apres reception confirmee. | P0 | Reviews |
| FN-REV-002 | Affichage des avis | Note, titre, commentaire, photos, date, auteur (nom partiel), taille, badge Achat verifie. Tri : plus recent, plus utile, meilleures/moins bonnes notes. | P0 | Reviews |
| FN-REV-003 | Note moyenne | Note moyenne ponderee par produit. Nombre total d'avis. Repartition par etoile (barres visuelles). | P0 | Reviews |
| FN-REV-004 | Filtrer les avis | Par note, avec photos uniquement, taille, langage, Achat verifie uniquement. | P1 | Reviews |
| FN-REV-005 | Utilite d'un avis | Bouton Utile pour voter positivement. Affichage nb votes utiles. | P1 | Reviews |
| FN-REV-006 | Reponse vendeur | Reponse publique a chaque avis. Une seule reponse par avis. | P1 | Reviews |
| FN-REV-007 | Signalement avis | Signaler avis inapproprie (spam, offensant, faux). | P1 | Reviews |
| FN-REV-008 | Photo d'avis | Joindre des photos a un avis. Miniatures avec zoom. | P1 | Reviews |
| FN-REV-009 | Note par variante | Avis associes a une variante specifique. | P2 | Reviews |
### 2.1.9 Module : Messagerie

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-MSG-001 | Conversation acheteur-vendeur | Chat instantane entre acheteur et vendeur concernant une commande ou un produit. | P0 | Messaging |
| FN-MSG-002 | Historique conversations | Liste conversations actives/archivees. Filtres par date, vendeur/acheteur. | P0 | Messaging |
| FN-MSG-003 | Pieces jointes | Images, documents (PDF). Taille max 10 MB par fichier. | P1 | Messaging |
| FN-MSG-004 | Notifications messages | Push/email/in-app. Badge compteur non lus. | P0 | Messaging |
| FN-MSG-005 | Statut de lecture | Indicateur envoye, lu. | P1 | Messaging |
| FN-MSG-006 | Templates reponses | Cote vendeur : templates predefinis (confirmation commande, delai, etc.). | P2 | Messaging |
| FN-MSG-007 | Moderation | Signalement messages abusifs. Envoi admin pour moderation. | P1 | Messaging |

### 2.1.10 Module : Notifications

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-NOT-001 | Notifications in-app | Centre notifications avec liste chronologique. Badge compteur non-lues. | P0 | Notifications |
| FN-NOT-002 | Notifications push | Web Push API pour evenements importants : commande, messages, promotions. | P0 | Notifications |
| FN-NOT-003 | Notifications email | Transactionnels (confirmation, expedition, livraison) et marketing. Templates HTML responsive. | P0 | Notifications |
| FN-NOT-004 | Notifications SMS | SMS pour evenements critiques : OTP, commande confirmee, livraison imminente. | P1 | Notifications |
| FN-NOT-005 | Gestion preferences | Config notifications par canal et par type d'evenement. | P1 | Notifications |
| FN-NOT-006 | Notification baisse de prix | Notif si produit en favori beneficie d'une reduction. | P2 | Notifications |
| FN-NOT-007 | Notification retour stock | Notif quand produit en rupture redevient disponible. | P2 | Notifications |

### 2.1.11 Module : Administration

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-ADM-001 | Dashboard admin | Metriques cles : utilisateurs, commandes, GMV, revenus, croissance, alertes. Graphiques interactifs. | P0 | Admin |
| FN-ADM-002 | Gestion utilisateurs | Liste, recherche, filtrage. Actions : voir detail, suspendre, bannir, supprimer, modifier role. | P0 | Admin |
| FN-ADM-003 | Gestion vendeurs | Liste vendeurs, statut verification, note, nb ventes. Actions : approuver/rejeter inscription, suspendre, verifier documents. | P0 | Admin |
| FN-ADM-004 | Gestion produits | Liste produits, filtres (categorie, vendeur, statut, date). Actions : approuver, rejeter, supprimer, mettre en avant. | P0 | Admin |
| FN-ADM-005 | Moderation avis | Liste avis signales. Actions : valider (supprimer avis), rejeter (l'avis reste). | P0 | Admin |
| FN-ADM-006 | Gestion categories | CRUD categories avec arborescence, icones, ordre d'affichage, visibilite. | P0 | Admin |
| FN-ADM-007 | Gestion litiges | Liste litiges acheteurs/vendeurs. Actions : mediation, remboursement force, avertissement, escalation. | P0 | Admin |
| FN-ADM-008 | Rapports et analytics | Rapports ventes par periode, categorie, vendeur, pays. Export CSV/PDF. | P0 | Admin |
| FN-ADM-009 | Configuration systeme | Parametres globaux : commissions, seuils, features flags, messages info, maintenance mode. | P1 | Admin |
| FN-ADM-010 | Promotions globales | Promotions plateforme (soldes, Black Friday) visibles partout. | P1 | Admin |
| FN-ADM-011 | Notifications globales | Envoi notifications a tous les utilisateurs ou segment cible. | P1 | Admin |
| FN-ADM-012 | Logs et audit trail | Journalisation actions administratrices pour tracabilite. | P1 | Admin |
| FN-ADM-013 | Gestion transporteurs | CRUD transporteurs, configuration zones de livraison et tarifs. | P1 | Admin |
### 2.1.12 Module : Analytics et Rapports

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-ANL-001 | Analytics vendeur | Ventes, revenus, commandes, panier moyen, taux conversion, produits vus, taux ajout panier. Periodes : jour, semaine, mois, trimestre, annee. | P0 | Analytics |
| FN-ANL-002 | Analytics produit | Vues, clics, ajouts panier, ventes, taux conversion, revenus. Classement top produits. | P1 | Analytics |
| FN-ANL-003 | Analytics vendeur (admin) | Vue agregee de tous les vendeurs pour admins. | P1 | Analytics |
| FN-ANL-004 | Export donnees | Export CSV, PDF, Excel. | P1 | Analytics |
| FN-ANL-005 | Comparaison periodes | Comparaison deux periodes (mois vs mois precedent, annee vs annee precedente). | P2 | Analytics |
| FN-ANL-006 | Heatmaps clics | Integration Hotjar/Microsoft Clarity pour analyse comportementale. | P2 | Analytics |
| FN-ANL-007 | Funnel de conversion | Visualisation : visite > recherche > fiche produit > panier > checkout > commande. Taux conversion a chaque etape. | P1 | Analytics |

### 2.1.13 Module : Support Client

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-SUP-001 | Centre d'aide / FAQ | Base de connaissances par categories : acheteur, vendeur, compte, paiement, livraison, retour. Recherche dans FAQ. | P0 | Support |
| FN-SUP-002 | Formulaire contact | Sujet, categorie, description, piece jointe (screenshot). Ticket avec numero de suivi. | P0 | Support |
| FN-SUP-003 | Chatbot IA | Assistant conversationnel IA. Escalade vers agent humain si non resolu. | P1 | Support |
| FN-SUP-004 | Systeme de tickets | Creation, suivi, assignation, resolution. Historique complet des echanges. | P1 | Support |
| FN-SUP-005 | Chat en direct | Chat avec agent support (horaires definis). File d'attente virtuelle. | P2 | Support |
| FN-SUP-006 | Evaluation support | Apres resolution : note (1-5) et commentaire sur la qualite du support. | P1 | Support |

### 2.1.14 Module : Fonctionnalites Transversales

| ID | Fonctionnalite | Description | Priorite | Module |
|---|---|---|---|---|
| FN-TRV-001 | Multilingue (i18n) | Traduction de toutes les chaines, changement langue temps reel, persistance preference, detection langue navigateur. | P0 | Transverse |
| FN-TRV-002 | Multi-devises | Affichage prix en devise locale. Conversion dynamique. Selection manuelle devise. | P0 | Transverse |
| FN-TRV-003 | Design responsive | Mobile (320-480px), tablette (481-768px), desktop (769-1024px), large desktop (1025+). Breakpoints design system. | P0 | Transverse |
| FN-TRV-004 | Mode sombre | Theme sombre complet, toggle header/parametres, respect prefers-color-scheme. | P1 | Transverse |
| FN-TRV-005 | Breadcrumb | Fil d'Ariane sur toutes les pages interieures. | P0 | Transverse |
| FN-TRV-006 | SEO balises meta | Meta dynamiques : title, description, og:title, og:description, og:image, canonical, robots. Structured data JSON-LD produits, avis, breadcrumbs. | P0 | Transverse |
| FN-TRV-007 | PWA Service Worker | Cache ressources statiques, pages visites, offline catalogue/panier. | P0 | Transverse |
| FN-TRV-008 | PWA Manifest | manifest.json : nom, icones, couleur theme, orientation, URL demarrage. | P0 | Transverse |
| FN-TRV-009 | Lazy loading | Chargement paresseux images, composants lourds, modules non critiques. Intersection Observer. | P0 | Transverse |
| FN-TRV-010 | Code splitting | Decoupage bundle par route et par fonctionnalite. Chargement a la demande. | P0 | Transverse |
| FN-TRV-011 | Accessibilite WCAG 2.1 AA | Contraste, navigation clavier, labels ARIA, focus visible, alternatives textuelles, formulaires accessibles. | P0 | Transverse |
| FN-TRV-012 | Gestion erreurs | Pages 404, 500, 503 personnalisees. Message convivial avec lien retour. | P0 | Transverse |
| FN-TRV-013 | Analytics frontend | Tracking : pages vues, clics, conversions, erreurs. Integration Mixpanel/Amplitude. | P0 | Transverse |
| FN-TRV-014 | Gestion cookies | Banniere consentement RGPD. Options granulaires : necessaires, analytics, marketing. | P0 | Transverse |
| FN-TRV-015 | Routeur navigation | React Router SPA. Routes protegees. Lazy loading routes. | P0 | Transverse |
| FN-TRV-016 | Gestion etat global | Redux/Zustand pour : panier, utilisateur, preferences, theme, langue. | P0 | Transverse |
| FN-TRV-017 | Cache API intelligent | Cache reponses API avec TTL configurable. Invalidation. Optimistic updates. | P1 | Transverse |
| FN-TRV-018 | Optimistic UI updates | Mise a jour immediate avant confirmation serveur. Rollback en cas d'erreur. | P1 | Transverse |
| FN-TRV-019 | Infinite scroll / pagination | Chargement progressif listes longues. Choix pagination ou scroll infini. | P0 | Transverse |
| FN-TRV-020 | Skeleton screens | Placeholders animes pendant chargement donnees. | P1 | Transverse |
| FN-TRV-021 | Token authentification | Stockage securise (httpOnly cookie ou memory). Refresh automatique. Interceptor 401/403. | P0 | Transverse |
| FN-TRV-022 | Versioning API | Gestion versions (v1, v2). Migration progressive. | P1 | Transverse |
| FN-TRV-023 | Feature flags | Deploiement progressif. Kill switch en cas de probleme. | P1 | Transverse |
| FN-TRV-024 | Error boundary | React Error Boundary pour capturer erreurs de rendu sans crash. | P0 | Transverse |
---

## 2.2 Besoins non fonctionnels

### 2.2.1 Performance

| ID | Exigence | Metrique | Cible | Mesure |
|---|---|---|---|---|
| NFN-PERF-001 | Largest Contentful Paint (LCP) | Temps de rendu du plus grand element visible | < 2.5 secondes | Lighthouse, CrUX |
| NFN-PERF-002 | First Input Delay (FID) | Delai entre la premiere interaction et la reponse du navigateur | < 100 ms | Lighthouse, CrUX |
| NFN-PERF-003 | Cumulative Layout Shift (CLS) | Stabilite visuelle de la page | < 0.1 | Lighthouse, CrUX |
| NFN-PERF-004 | Time to First Byte (TTFB) | Temps de reponse du serveur | < 200 ms | Lighthouse, WebPageTest |
| NFN-PERF-005 | Interaction to Next Paint (INP) | Delai de reponse aux interactions | < 200 ms | Lighthouse |
| NFN-PERF-006 | Taille du bundle JS | Bundle JavaScript principal gzippe | < 200 KB gzip | Webpack bundle analyzer |
| NFN-PERF-007 | Temps de chargement page | Temps total de chargement d'une page | < 3 secondes sur 4G | WebPageTest |
| NFN-PERF-008 | Score Lighthouse | Score global Lighthouse Performance | > 90/100 | Lighthouse |
| NFN-PERF-009 | Nombre de requetes reseau | Nombre de requetes HTTP par page | < 30 | Chrome DevTools |
| NFN-PERF-010 | Cache du navigateur | Taux de命中 du cache pour les ressources statiques | > 80 % | Analytics reseau |
| NFN-PERF-011 | Scroll fluideite | FPS pendant le defilement | > 50 FPS | Chrome DevTools Performance |
| NFN-PERF-012 | Virtualisation listes | Rendu de 10 000+ elements sans degradation | Sans ralentissement perceptible | Tests de charge UI |

### 2.2.2 Securite

| ID | Exigence | Description | Standard |
|---|---|---|---|
| NFN-SEC-001 | Protection XSS | Prevention des attaques Cross-Site Scripting via sanitization des entrees et Content Security Policy (CSP) | OWASP Top 10 |
| NFN-SEC-002 | Protection CSRF | Prevention des attaques Cross-Site Request Forgery via tokens synchronizer | OWASP Top 10 |
| NFN-SEC-003 | Authentification securise | JWT avec expiration, refresh token rotation, httpOnly cookies | OWASP ASVS |
| NFN-SEC-004 | Transport securise | HTTPS obligatoire (TLS 1.2+), HSTS | OWASP |
| NFN-SEC-005 | Content Security Policy | Politique CSP stricte pour prevenir l'injection de scripts | OWASP |
| NFN-SEC-006 | Protection clickjacking | X-Frame-Options : DENY ou SAMEORIGIN | OWASP |
| NFN-SEC-007 | Validation cote client | Validation de toutes les entrees utilisateur avant envoi au serveur | OWASP |
| NFN-SEC-008 | Securite paiement | Aucune donnee carte bancaire dans le frontend. Iframes securisees (Stripe Elements). | PCI-DSS |
| NFN-SEC-009 | Securite tokens | Stockage securise des tokens d'authentification (httpOnly cookie). Pas de token dans localStorage. | OWASP |
| NFN-SEC-010 | Rate limiting | Protection contre le brute force (login, OTP, recherche). | OWASP |
| NFN-SEC-011 | Audit de securite | Audit de securite annuel par un tiers independant. | ISO 27001 |
| NFN-SEC-012 | Dependances securisees | Scan regulier des vulnerabilites des dependances (npm audit, Snyk). | Best practice |
| NFN-SEC-013 | Headers de securite | Security headers : X-Content-Type-Options, Referrer-Policy, Permissions-Policy | OWASP |

### 2.2.3 Scalabilite

| ID | Exigence | Description |
|---|---|---|
| NFN-SCAL-001 | Utilisateurs simultanes | Le frontend doit supporter 100 000+ utilisateurs simultanes sans degradation |
| NFN-SCAL-002 | Catalogue | Rendu fluide de catalogues de 10M+ produits via pagination et virtualisation |
| NFN-SCAL-003 | Horizontale | Architecture frontend permettant le scaling horizontal via CDN |
| NFN-SCAL-004 | Taille du cache | Strategie de cache adaptee pour reduire la charge sur les API backend |
| NFN-SCAL-005 | Degradation gracieuse | En cas de surcharge backend, le frontend degrad gracieusement (cached data, message informatif) |

### 2.2.4 Accessibilite

| ID | Exigence | Standard | Description |
|---|---|---|---|
| NFN-ACC-001 | Niveau AA | WCAG 2.1 | Conformite au niveau AA des directives WCAG 2.1 |
| NFN-ACC-002 | Navigation clavier | WCAG 2.1 | Toutes les fonctionnalites accessibles via le clavier seul |
| NFN-ACC-003 | Labels ARIA | WCAG 2.1 | Tous les composants interactifs ont des labels ARIA appropries |
| NFN-ACC-004 | Contraste | WCAG 2.1 | Rapport de contraste minimal de 4.5:1 pour le texte normal, 3:1 pour le texte large |
| NFN-ACC-005 | Focus visible | WCAG 2.1 | Indicateur de focus visible pour tous les elements interactifs |
| NFN-ACC-006 | Alternatives textuelles | WCAG 2.1 | Toutes les images informatives ont un alt text descriptif |
| NFN-ACC-007 | Formulaires | WCAG 2.1 | Champs de formulaire associes a des labels, messages d'erreur explicites |
| NFN-ACC-008 | Lecteur d'ecran | WCAG 2.1 | Compatibilite avec les lecteurs d'ecran majeurs (NVDA, JAWS, VoiceOver) |
| NFN-ACC-009 | Refus du mouvement | WCAG 2.1 | Respect de prefers-reduced-motion pour les animations |
| NFN-ACC-010 | Taille de police | WCAG 2.1 | Redimensionnement du texte jusqu'a 200 % sans perte de fonctionnalite |

### 2.2.5 SEO (Referencement Naturel)

| ID | Exigence | Description |
|---|---|---|
| NFN-SEO-001 | Server-Side Rendering (SSR) | Rendu cote serveur pour les pages publiques (produits, categories, accueil) |
| NFN-SEO-002 | Structured Data | Donnees structurees JSON-LD pour : produits (schema.org/Product), avis (Review), breadcrumbs (BreadcrumbList), organisation (Organization) |
| NFN-SEO-003 | Meta tags dynamiques | Title, description, og:title, og:description, og:image, canonical, robots pour chaque page |
| NFN-SEO-004 | Sitemap XML | Generation automatique du sitemap.xml avec mise a jour reguliere |
| NFN-SEO-005 | Fichier robots.txt | Configuration optimisee du robots.txt pour le crawl |
| NFN-SEO-006 | URLs propres | URLs lisibles et SEO-friendly (pas de parametres dynamiques dans l'URL visible) |
| NFN-SEO-007 | Performance | Core Web Vitals dans les normes Google (LCP < 2.5s, CLS < 0.1, INP < 200ms) |
| NFN-SEO-008 | Preload / Prefetch | Prechargement des ressources critiques, prefetch des pages probablement visitées |
| NFN-SEO-009 | Canonical URLs | Tags canoniques pour eviter le contenu duplique |
| NFN-SEO-010 | Hreflang | Tags hreflang pour les versions multilingues des pages |

### 2.2.6 Internationalisation (i18n)

| ID | Exigence | Description |
|---|---|---|
| NFN-I18N-001 | Multi-langue | Support de 3+ langues au MVP, extensible a 50+ langues |
| NFN-I18N-002 | Pluralisation | Gestion correcte de la pluralisation dans toutes les langues |
| NFN-I18N-003 | Formats numeriques | Format des nombres selon la locale (1 234,56 vs 1,234.56) |
| NFN-I18N-004 | Formats de dates | Format des dates selon la locale (JJ/MM/AAAA vs MM/DD/YYYY) |
| NFN-I18N-005 | Formats de monnaie | Format de la monnaie selon la locale (.00 vs 10,00 EUR) |
| NFN-I18N-006 | Direction du texte | Support RTL (Right-to-Left) pour l'arabe, l'hebreu, l'ourdou |
| NFN-I18N-007 | Detection automatique | Detection de la langue du navigateur au premier visit |
| NFN-I18N-008 | Persistance | Sauvegarde de la preference de langue dans le profil utilisateur et localStorage |
| NFN-I18N-009 | Changement temps reel | Changement de langue sans rechargement de la page |

### 2.2.7 Responsive Design

| ID | Exigence | Breakpoints | Description |
|---|---|---|---|
| NFN-RES-001 | Mobile | 320px - 480px | Experience mobile optimisee, navigation hamburger, colonne unique |
| NFN-RES-002 | Mobile large | 481px - 768px | Tablette en mode portrait, deux colonnes possibles |
| NFN-RES-003 | Tablette | 769px - 1024px | Layout 2-3 colonnes, navigation cote |
| NFN-RES-004 | Desktop | 1025px - 1440px | Layout complet, navigation header |
| NFN-RES-005 | Large desktop | 1441px+ | Layout etendu, plus d'elements visibles |
| NFN-RES-006 | Touch | Toutes tailles | Zones de touch cibles minimum 44x44px |
| NFN-RES-007 | Orientation | Toutes | Adaptation au mode portrait et paysage |

### 2.2.8 Progressive Web App (PWA)

| ID | Exigence | Description |
|---|---|---|
| NFN-PWA-001 | Installation | Possibilite d'installer la PWA sur l'ecran d'accueil (iOS, Android, desktop) |
| NFN-PWA-002 | Push notifications | Notifications push natives sur Android, Chrome desktop. Progressive sur iOS (Web Push via Safari 16.4+). |
| NFN-PWA-003 | Mode offline | Consultation du catalogue recemment visite et du panier hors connexion |
| NFN-PWA-004 | Service Worker | Mise en cache des ressources statiques et des pages visitees |
| NFN-PWA-005 | Splash screen | Ecran de demarrage personnalise avec logo et couleur de marque |
| NFN-PWA-006 | Mise a jour | Notification de mise a jour disponible, rechargement pour appliquer |
| NFN-PWA-007 | Manifest | manifest.json complet avec toutes les cles requises |
| NFN-PWA-008 | Icones | Icones de toutes tailles requises pour l'installation (192x192, 512x512) |

### 2.2.9 Support des navigateurs

| Navigateur | Version minimum | Support |
|---|---|---|
| Google Chrome | 90+ | Complet |
| Mozilla Firefox | 88+ | Complet |
| Apple Safari | 14+ | Complet |
| Microsoft Edge | 90+ | Complet |
| Samsung Internet | 15+ | Complet |
| Opera | 76+ | Complet |
| iOS Safari | 14+ | Complet (PWA partielle) |
| Chrome Android | 90+ | Complet |
| UC Browser | 15+ | Base (fonctionnalites essentielles) |

---

## 2.3 Contraintes

### 2.3.1 Contraintes techniques

| ID | Contrainte | Description | Impact |
|---|---|---|---|
| C-TECH-001 | Framework frontend | ReactJS (version 18+) comme framework principal | Definit l'ensemble du stack technique frontend |
| C-TECH-002 | Langage | TypeScript obligatoire pour toute la codebase | Type safety, maintenabilite, refactoring facilité |
| C-TECH-003 | Systeme de style | Tailwind CSS ou equivalent (CSS-in-JS ou CSS Modules) avec design system | Cohérence visuelle, productivité developpeur |
| C-TECH-004 | Etat global | Redux Toolkit, Zustand ou Recoil pour la gestion d'etat globale | Architecture previsible, debug facilité |
| C-TECH-005 | Routing | React Router v6+ pour la navigation SPA | Standard React, lazy loading intégré |
| C-TECH-006 | API communication | Axios ou fetch avec interceptors pour les appels API | Gestion centralisée des erreurs, tokens |
| C-TECH-007 | Tests | Jest + React Testing Library (unitaires), Cypress ou Playwright (E2E) | Qualité logicielle, regression prevention |
| C-TECH-008 | Build | Vite ou Webpack 5+ avec code splitting, tree shaking, minification | Performance de bundle, DX |
| C-TECH-009 | Linting | ESLint + Prettier avec regles predefinies | Code style uniforme, détection d'erreurs |
| C-TECH-010 | Git | Gitflow ou GitHub Flow avec PR obligatoires et revue de code | Qualite du code, tracabilite |
| C-TECH-011 | CI/CD | Pipeline automatisé (GitHub Actions, GitLab CI) : lint, test, build, deploy | Deploiement continu, fiabilite |
| C-TECH-012 | CDN | CloudFront, Cloudflare ou equivalent pour les assets statiques | Performance globale, cache proche de l'utilisateur |
| C-TECH-013 | Environnements | Dev, staging, production avec deploiement automatique | Tests en environnement replicable |
| C-TECH-014 | API backend | REST API documentée (OpenAPI/Swagger) ou GraphQL | Contrat clair frontend/backend |
| C-TECH-015 | Timezone | Gestion correcte des fuseaux horaires côté client | Affichage correct des dates/heures |

### 2.3.2 Contraintes metier

| ID | Contrainte | Description |
|---|---|---|
| C-BIZ-001 | MVP en 6 mois | Le MVP doit etre livré en 6 mois calendar |
| C-BIZ-002 | Budget frontend | Budget maximal de 400 000 $ pour le frontend (development, design, tests) |
| C-BIZ-003 | Equipe | Equipe de 6-8 devs + 1 lead + 1 designer + 1 QA |
| C-BIZ-004 | 3 langues MVP | Le MVP doit supporter le francais, l'anglais et l'arabe |
| C-BIZ-005 | Mobile-first | Le design est mobile-first, le desktop est secondaire au MVP |
| C-BIZ-006 | API backend existantes | Le frontend s'appuie sur des API backend developpees par une equipe separee |
| C-BIZ-007 | Pas de stock | La plateforme ne stocke aucun produit physiquement |
| C-BIZ-008 | Paiement tier | Le traitement des paiements est externalisé (Stripe, PayPal, etc.) |
| C-BIZ-009 | Conformite RGPD | Conformite RGPD obligatoire des le lancement |
| C-BIZ-010 | Brand guidelines | Respect strict des guidelines de marque (couleurs, polices, logos) |

### 2.3.3 Contraintes reglementaires

| ID | Contrainte | Juridiction | Description |
|---|---|---|---|
| C-REG-001 | RGPD | Union Europeenne | Consentement cookies, droit a l'oubli, portabilite, minimisation des donnees, DPO |
| C-REG-002 | CCPA/CPRA | Californie, USA | Opt-out de la vente de donnees, notice de confidentialite, droits des consommateurs |
| C-REG-003 | PCI-DSS | International | Pas de stockage de donnees de cartes côté frontend, iframes securisees |
| C-REG-004 | DSA | Union Europeenne | Mechanismes de moderation, transparence algorithmique, signalement de contenus illicites |
| C-REG-005 | LGPD | Bresil | Consentement explicite, droits des titulaires de donnees |
| C-REG-006 | POPIA | Afrique du Sud | Protection des informations personnelles |
| C-REG-007 | NDPR | Nigeria | Protection des donnees personnelles |
| C-REG-008 | PIPL | Chine | Restrictions sur le transfert de donnees hors de Chine |
| C-REG-009 | ePrivacy | Union Europeenne | Reglement sur la vie privee dans les communications electroniques |
| C-REG-010 | Loi anti-discrimmation | Multiple | Prix non discriminatoires, accessibilite universelle |

---

## 2.4 Hypotheses

| ID | Hypothese | Categorie | Verification requise |
|---|---|---|---|
| HYP-001 | Les utilisateurs des marches emerging preferent une experience mobile a une experience desktop | Utilisateur | Enquete terrain, donnees analytics des marches cibles |
| HYP-002 | Les vendeurs sont prets a payer 5-8 % de commission si la plateforme leur offre une visibilite significative | Marche | Interviews vendeurs, analyse de sensibilite |
| HYP-003 | Une PWA peut remplacer une application native pour 90 % des cas d'usage e-commerce | Technologie | Tests A/B PWA vs site classique, taux d'engagement |
| HYP-004 | Les utilisateurs dans les marches emerging ont une connectivité moyenne de 3G+ sufficient pour charger une page en < 5 secondes | Technologie | Tests reseau sur les marches cibles (Ookla, GSMA) |
| HYP-005 | Le checkout invite sans creation de compte augmentera le taux de conversion de 15-25 % | Metrique | A/B testing lors du lancement MVP |
| HYP-006 | Les utilisateurs preferent une interface simple et épurée a une interface avec de nombreuses fonctionnalites visibles | UX | Tests d'utilisabilite, enquetes de satisfaction |
| HYP-007 | La livraison a la livraison (cash on delivery) est indispensable pour les marches d'Afrique subsaharienne | Marche | Donnees sectorielles Jumia, enquetes terrain |
| HYP-008 | ReactJS est le framework le plus adapte pour ce projet en termes de performance, ecosysteme et vivier de talents | Technologie | Benchmark technique, analyse du marche du travail |
| HYP-009 | Les utilisateurs will share products on social media if incentives (coupons) are offered | Viralite | A/B testing avec/ sans incitation au partage |
| HYP-010 | Le support multilingue (français, anglais, arabe) couvre 80 % des utilisateurs cibles au MVP | Marche | Analyse demographique des marches cibles |
| HYP-011 | Les vendeurs PME seront le segment le plus rentable pour la plateforme | Business | Modele financier, analyse de la CLV par segment |
| HYP-012 | Un bundle JS < 200 KB gzip est possible avec ReactJS pour une application de cette envergure | Technologie | Profiling bundle, analyse des dependances |
| HYP-013 | Les utilisateurs abandonnent le panier principalement a cause des frais de livraison inattendus | UX | Donnees analytics e-commerce, etudes sectorielles |
| HYP-014 | Un systeme d'avis verifiables augmentera la confiance et le taux de conversion de 20 % | Business | A/B testing avec/sans badge achat verifie |
| HYP-015 | La concurrence dans les marches emerging (Afrique, LatAm) est moins intense que dans les marches matures | Marche | Analyse concurrentielle geographique |

---

## 2.5 Matrice des risques

| ID | Risque | Description | Probabilite | Impact | Niveau | Strategie d'attenuation |
|---|---|---|---|---|---|---|
| RSK-001 | Retard de livraison du backend | Les API backend ne sont pas pretes a temps pour le developpement frontend | Elevee | Eleve | Critique | Mock API des le debut, definition du contrat API (OpenAPI), developpement en parallele avec stubs |
| RSK-002 | Dette technique rapide | La pression des delais pousse a des raccourcis techniques | Elevee | Moyen | Eleve | Code reviews obligatoires, 15 % du sprint pour le remboursement, tests automatises |
| RSK-003 | Problemes de performance | Le frontend est lent sur les appareils anciens et les reseaux lents | Moyenne | Eleve | Eleve | Bundle < 200 KB, lazy loading, PWA offline, tests sur appareils低端 |
| RSK-004 | Failles de securite | Exploitation de vulnerabilites XSS, CSRF, ou fuite de tokens | Moyenne | Tres eleve | Critique | Audit securite, CSP strict, OWASP guidelines, pentest |
| RSK-005 | Depart d'un membre clé de l'equipe | Un developpeur senior quitte l'equipe pendant le projet | Moyenne | Moyen | Moyen | Documentation exhaustive, pair programming, connaissance partagee |
| RSK-006 | Changements de specification | Les besoins evoluent pendant le developpement | Elevee | Moyen | Eleve | Methode agile, sprints de 2 semaines, backlog affine regulierement |
| RSK-007 | Incompatibilite navigateur | Des bugs majeurs sur certains navigateurs cibles | Faible | Eleve | Moyen | Tests multi-navigateurs automatises (BrowserStack), polyfills |
| RSK-008 | Dependance provider cloud | Panne ou changement de tarification du fournisseur cloud | Faible | Tres eleve | Moyen | Architecture multi-cloud strategique, conteneurisation Docker/K8s |
| RSK-009 | Non-conformite RGPD | Non-respect des exigences RGPD entrainant des amendes | Faible | Tres eleve | Eleve | DPO dedie, audit RGPD, Privacy by Design, banniere cookies |
| RSK-010 | Attaque DDoS | Deni de service rendant la plateforme indisponible | Moyenne | Eleve | Eleve | Protection DDoS (Cloudflare), architecture résiliente, rate limiting |
| RSK-011 | Depassement budget | Les couts de developpement depassent le budget prevu | Moyenne | Eleve | Eleve | Suivi budget hebdomadaire, reserve de 15 %, scope management strict |
| RSK-012 | Faible adoption utilisateurs | Les utilisateurs n'adoptent pas la plateforme | Moyenne | Tres eleve | Critique | Tests utilisateurs des le MVP, iterer vite, marketing d'acquisition cible |
| RSK-013 | Probleme de scaling frontend | Le frontend ne supporte pas le volume d'utilisateurs en croissance | Faible | Eleve | Moyen | Tests de charge, architecture optimisee, CDN, code splitting |
| RSK-014 | Contrefaon et contenus illicites | Des vendeurs publient des produits contrefaits ou illicites | Elevee | Eleve | Critique | Systeme de moderation, verification vendeurs, signalement, IA de detection |
| RSK-015 | Regression apres mise a jour | Une mise a jour de dependance casse des fonctionnalites existantes | Moyenne | Moyen | Moyen | Tests automatises avant deploiement, mise a jour progressive, rollback |
| RSK-016 | Fraude aux paiements | Utilisation de cartes volees ou frauduleuses sur la plateforme | Moyenne | Tres eleve | Critique | 3D Secure, verification AVS, monitoring des transactions suspectes |
| RSK-017 | Problemes d'internationalisation | Erreurs de traduction, formats de dates/nombres incorrects | Moyenne | Moyen | Moyen | Processus de traduction professionnel, tests de localisation |
| RSK-018 | Concurrence agressive | Les concurrents reagissent avec des features similaires ou des prix inferieurs | Elevee | Moyen | Eleve | Innovation continue,.focus sur l'UX et la localisation |
| RSK-019 | Problemes d'accessibilite | Non-conformite WCAG entrainant des poursuites ou une experience degradee | Faible | Moyen | Moyen | Tests d'accessibilite automatises et manuels, audit WCAG |
| RSK-020 | Perte de donnees | Perte de donnees utilisateurs ou de donnees de la plateforme | Faible | Tres eleve | Moyen | Sauvegardes automatiques, redondance, plan de reprise d'activite |

---

## 2.6 Criteres de reussite

### 2.6.1 Criteres pour la phase MVP (6 mois)

| ID | Critere | Mesure | Cible | Methode de verification |
|---|---|---|---|---|
| CR-MVP-001 | Parcours acheteur complet fonctionnel | Un utilisateur peut s'inscrire, rechercher, ajouter au panier, payer et suivre sa commande | 100 % du parcours testé et fonctionnel | Tests E2E automatisés + tests manuels |
| CR-MVP-002 | Dashboard vendeur fonctionnel | Un vendeur peut creer une boutique, ajouter/modifier des produits, gerer les commandes, voir ses statistiques | 100 % des fonctionnalites P0 livrees | Tests E2E + demo vendeur |
| CR-MVP-003 | Performance | LCP < 2.5s, FID < 100ms, CLS < 0.1, Score Lighthouse > 90 | Toutes les metriques dans les cibles | Lighthouse CI, CrUX, WebPageTest |
| CR-MVP-004 | Multilingue | Changement de langue sans rechargement, 3 langues (FR, EN, AR) fonctionnelles | 100 % des strings traduites, RTL fonctionnel | Revue de traduction, tests RTL |
| CR-MVP-005 | Mobile responsive | Interface adaptee et fluide sur mobile (320px+), tablette et desktop | Aucun bug majeur sur les 5 breakpoints | Tests sur devices reels, responsive testing |
| CR-MVP-006 | Accessibilite | Conformite WCAG 2.1 AA | Score Lighthouse Accessibility > 90 | Lighthouse, tests manuels, audit WCAG |
| CR-MVP-007 | Tests automatises | Couverture de tests | > 80 % de couverture de code, > 90 % des chemins critiques testes | Rapport de couverture Jest |
| CR-MVP-008 | SEO | Pages indexables, structured data, meta tags | Score Lighthouse SEO > 90 | Lighthouse, Google Search Console |
| CR-MVP-009 | PWA | Installation, offline, push notifications | PWA installable, offline fonctionnel, push sur Android | Tests PWA sur devices reels |
| CR-MVP-010 | Zero bug critique | Aucun bug de securite ou de fonctionnalite critique en production | 0 bug critique/apres release | Suivi des bugs Jira/Linear |
| CR-MVP-011 | Utilisateurs pilotes | Nombre d'utilisateurs inscrits et actifs | 5 000 utilisateurs inscrits, 500 actifs/semaine | Analytics |
| CR-MVP-012 | Vendeurs pilotes | Nombre de vendeurs avec produits | 200 vendeurs actifs | Dashboard admin |

### 2.6.2 Criteres pour la phase de croissance (6-18 mois)

| ID | Critere | Cible |
|---|---|---|
| CR-GRO-001 | Scalabilite | Support de 50 000 utilisateurs simultanes |
| CR-GRO-002 | Languages | 10 langues deployees |
| CR-GRO-003 | Vendeurs | 10 000 vendeurs actifs |
| CR-GRO-004 | Acheteurs | 100 000 acheteurs mensuels |
| CR-GRO-005 | GMV | 500 000 $ de GMV mensuel |
| CR-GRO-006 | NPS | Score NPS > 40 |
| CR-GRO-007 | Performance | Score Lighthouse > 95 |
| CR-GRO-008 | Couverture tests | > 85 % de couverture |
| CR-GRO-009 | IA recommandation | Taux de clic > 8 % sur les recommandations |
| CR-GRO-010 | Taux de conversion | > 2,5 % de taux de conversion global |

### 2.6.3 Criteres pour la phase d'ecosysteme (2-5 ans)

| ID | Critere | Cible |
|---|---|---|
| CR-ECO-001 | Marches | 50+ pays actifs |
| CR-ECO-002 | Vendeurs | 1 000 000 de vendeurs actifs |
| CR-ECO-003 | Acheteurs | 100 000 000 d'utilisateurs actifs mensuels |
| CR-ECO-004 | GMV | 10 milliards $ de GMV annuel |
| CR-ECO-005 | Services | 5 services additionnels (paiements, finance, assurance, etc.) |
| CR-ECO-006 | Top 3 | Rang top 3 dans 3 marches emerging |
| CR-ECO-007 | Revenus | Revenus de la plateforme > 500 M $ annuels |
| CR-ECO-008 | Employes | Creation de 1M+ emplois indirects |

---

<a name="chapitre-3"></a>

# CHAPITRE 3 : Personas

---

## 3.1 Acheteur Occasional — "Marie" (28 ans, France)

### 3.1.1 Profil

| Attribut | Detail |
|---|---|
| **Nom** | Marie Dupont |
| **Age** | 28 ans |
| **Genre** | Femme |
| **Localisation** | Lyon, France |
| **Situation familiale** | Celibe, vit en appartement avec une colocation |
| **Profession** | Chef de projet marketing dans une agence digitale |
| **Revenu annuel** | 35 000 EUR |
| **Niveau d'education** | Master en Marketing Digital |
| **Langues** | Francais (natif), Anglais (C1) |

### 3.1.2 Bio

Marie est une jeune professionnelle urbaine qui navigue quotidiennement sur les reseaux sociaux et achete occasionnellement en ligne. Elle decouvre souvent des produits via Instagram et TikTok, mais achete principalement sur Amazon par habitude. Elle est sensible au rapport qualite-prix et aime decouvrir de nouvelles marques. Elle utilise son smartphone pour 70 % de ses achats en ligne et son ordinateur pour les achats plus importants. Elle a un budget e-commerce d'environ 200-400 EUR par mois.

### 3.1.3 Objectifs

- Trouver des produits uniques et tendance a des prix accessibles
- Comparer facilement les prix entre differents vendeurs
- Beneficier d'une livraison rapide et fiable
- Avoir des avis fiables avant d'acheter
- Simplifier ses retours si le produit ne convient pas
- Decouvrir de nouvelles marques et boutiques

### 3.1.4 Frustrations

- Difficulte a trouver des produits originaux (tout le meme sur Amazon)
- Commissions cachees et prix gonfles par les vendeurs Amazon
- Delais de livraison longs pour les produits importes
- Avis souvent douteux ou suspects sur les plateformes existantes
- Processus de retour complique et couteux
- Publicites cibles envahissantes mais produits proposes peu pertinents

### 3.1.5 Competences techniques

| Competence | Niveau |
|---|---|
| Utilisation smartphone | Avance |
| Navigation web | Avance |
| Reseaux sociaux | Avance |
| Achats en ligne | Avance |
| Utilisation d'applications | Intermediaire |
| Comprehension technique | Base |

### 3.1.6 Appareils utilises

- Smartphone : iPhone 15 (appareil principal, 70 % du temps)
- Ordinateur : MacBook Air M2 (30 % du temps, travail et achats importants)
- Tablette : Pas de tablette

### 3.1.7 Habitudes d'achat

| Aspect | Detail |
|---|---|
| Frequence | 3-5 achats en ligne par mois |
| Panier moyen | 40-80 EUR |
| Categories preferees | Mode, beaute, maison, electronique accessoire |
| Canal de decouverte | Instagram (40 %), TikTok (25 %), recherche Google (20 %), bouche-a-oreille (15 %) |
| Mode de paiement preferé | Carte bancaire, Apple Pay |
| Livraison preferee | Standard (gratuite si possible), express si urgence |
| Heures d'achat | Soirees (20h-23h), pauses dejeuner |
| Fidelite | Faible — compare toujours avant d'acheter |

### 3.1.8 Citation representative

> "Je veux decouvrir des choses que tout le monde n'a pas deja. Si la plateforme peut me proposer des produits originaux avec de vrais avis, je suis prete a quitter Amazon."

### 3.1.9 Implications pour le produit

- Recommandations personnalisees basees sur l'historique et les tendances
- Section « Decouvertes » ou « Tendances » en page d'accueil
- Filtre par « Vendeurs independants » ou « Artisanal »
- Avis avec photos verifiees
- Processus de retour simple et gratuit
- Integration avec les reseaux sociaux (partage, achat via Instagram)
- Mode sombre pour les achats nocturnes
- Checkout express (Apple Pay, carte enregistree)
- Notifications de promotions ciblees

---

## 3.2 Acheteur Regulier — "Ahmed" (35 ans, Maroc)

### 3.2.1 Profil

| Attribut | Detail |
|---|---|
| **Nom** | Ahmed Benali |
| **Age** | 35 ans |
| **Genre** | Homme |
| **Localisation** | Casablanca, Maroc |
| **Situation familiale** | Marié, 2 enfants (4 et 7 ans) |
| **Profession** | Ingenieur informatique dans une ESI marocaine |
| **Revenu annuel** | 480 000 MAD (~44 000 EUR) |
| **Niveau d'education** | Ingenieur d'État en informatique |
| **Langues** | Arabe (natif), Francais (C1), Anglais (B2) |

### 3.2.2 Bio

Ahmed est un professionnel informaticien marocain, pere de famille, qui achete regulierement en ligne pour sa famille et pour lui-meme. Il achete des produits pour les enfants (vetements, jouets, fournitures scolaires), des electroniques (accessoires, gadgets), et des produits menagers. Il est tres sensible au prix et compare systematiquement avant d'acheter. Il utilise mobile money (M-Wavel, inwi money) et prefererait payer a la livraison quand c'est possible. Il navigue en francais et en arabe selon les sites.

### 3.2.3 Objectifs

- Acheter des produits de qualite a des prix competitifs
- Payer par mobile money ou a la livraison (pas de carte bancaire pour les achats en ligne)
- Recevoir les commandes rapidement (3-5 jours maximum)
- Avoir un support client reactif en arabe ou en francais
- Profiter des promotions et codes promo
- Gerer les commandes de toute la famille depuis un seul compte

### 3.2.4 Frustrations

- La plupart des sites internationaux ne livrent pas au Maroc ou avec des frais exorbitants
- Les sites locaux ont un catalogue limite et des prix eleves
- Le paiement par carte bancaire n'est pas toujours possible ou fiable
- Le service client est souvent en anglais uniquement
- Les delais de livraison sont imprévisibles (15-30 jours pour des produits importes)
- La qualite des produits ne correspond pas toujours a la description

### 3.2.5 Competences techniques

| Competence | Niveau |
|---|---|
| Utilisation smartphone | Avance |
| Navigation web | Avance |
| Reseaux sociaux | Intermediaire |
| Achats en ligne | Avance |
| Utilisation d'applications | Avance |
| Comprehension technique | Avance |

### 3.2.6 Appareils utilises

- Smartphone : Samsung Galaxy S24 (appareil principal, 80 % du temps)
- Ordinateur : PC Windows (20 % du temps, travail)

### 3.2.7 Habitudes d'achat

| Aspect | Detail |
|---|---|
| Frequence | 6-10 achats en ligne par mois |
| Panier moyen | 200-500 MAD (~18-46 EUR) |
| Categories preferees | Electronique, jouets enfants, vetements famille, maison |
| Canal de decouverte | Facebook (35 %), recherche Google (30 %), Instagram (15 %), recommandations (20 %) |
| Mode de paiement preferé | Paiement a la livraison (55 %), mobile money (30 %), carte bancaire (15 %) |
| Livraison preferee | Standard 3-5 jours, frais de livraison acceptables (< 10 % du prix) |
| Heures d'achat | Soirees (21h-00h), week-ends |
| Fidelite | Moyenne — reste si l'experience est bonne |

### 3.2.8 Citation representative

> "Si je peux payer a la livraison et recevoir ma commande en une semaine, c'est deja mieux que 90 % des sites que j'utilise actuellement."

### 3.2.9 Implications pour le produit

- Support bilingue arabe/francais (RTL inclus)
- Integration mobile money marocain (M-Wavel, inwi money, CIH Pay)
- Option paiement a la livraison (COD)
- Livraison optimisee au Maroc avec delais cles
- Catalogue local adapte au marche marocain
- Filtre prix en MAD avec conversion transparente
- Comparateur de prix integre
- Centre d'aide en arabe et en francais
- Notifications de promotions et soldes

---

## 3.3 Power User/Buyer — "Sophie" (42 ans, Canada)

### 3.3.1 Profil

| Attribut | Detail |
|---|---|
| **Nom** | Sophie Tremblay |
| **Age** | 42 ans |
| **Genre** | Femme |
| **Localisation** | Montreal, Quebec, Canada |
| **Situation familiale** Mariee, 3 enfants (8, 12, 15 ans) |
| **Profession** | Directrice financière d'une PME |
| **Revenu annuel** | 120 000 CAD |
| **Niveau d'education** | MBA |
| **Langues** | Francais (natif), Anglais (C1) |

### 3.3.2 Bio

Sophie est une acheteure experimentee et exigeante. Elle achete en ligne pour toute la famille : vetements, electronique, produits de maison, alimentaire, livres. Elle est habituee a Amazon Canada et a Costco en ligne. Elle est prête a payer plus pour une qualite superieure et une livraison fiable. Elle utilise un systeme de gestion de budget personnel et suit ses depenses e-commerce de près. Elle est tres active sur Amazon et a un abonnement Prime. Elle cherche des alternatives a Amazon pour soutenir des entreprises plus petites.

### 3.3.3 Objectifs

- Accéder a un large catalogue de produits de qualité a des prix justes
- Beneficier d'une livraison fiable et rapide au Canada
- Gérer toutes les commandes de la famille depuis un seul tableau de bord
- Avoir des avis fiables et detailles
- Soutenir des vendeurs canadiens et independants
- Gerer son budget d'achats en ligne avec des outils de suivi
- Acceder a des produits eco-responsables et durables

### 3.3.4 Frustrations

- Amazon vend de plus en plus de produits de faible qualite (contrefacons, listings trompeurs)
- Difficulte a identifier les vrais vendeurs canadiens parmi les millions de listings
- Les prix varient constamment sur Amazon (algorithme dynamique)
- Le programme Prime coute de plus en plus cher sans benefices proportionnels
- Manque de transparence sur l'origine des produits
- Les retours sont de plus en plus compliques

### 3.3.5 Competences techniques

| Competence | Niveau |
|---|---|
| Utilisation smartphone | Avance |
| Navigation web | Avance |
| Reseaux sociaux | Intermediaire |
| Achats en ligne | Expert |
| Utilisation d'applications | Avance |
| Comprehension technique | Intermediaire |

### 3.3.6 Appareils utilises

- Smartphone : iPhone 15 Pro (60 % du temps)
- Ordinateur : MacBook Pro (30 % du temps)
- Tablette : iPad Air (10 % du temps, achats de soir au lit)

### 3.3.7 Habitudes d'achat

| Aspect | Detail |
|---|---|
| Frequence | 15-20 achats en ligne par mois |
| Panier moyen | 80-200 CAD |
| Categories preferees | Tout : electronique, vetements, maison, alimentaire, livres, sport |
| Canal de decouverte | Recherche Google (40 %), Amazon (30 %), recommandations IA (20 %), bouche-a-oreille (10 %) |
| Mode de paiement preferé | Carte de credit (reward points), PayPal |
| Livraison preferee | Express (meme jour ou lendemain si possible) |
| Heures d'achat | 7h-8h (matin), 12h-13h (dejeuner), 21h-23h (soiree) |
| Fidelite | Forte — mais cher alternatives a Amazon |

### 3.3.8 Citation representative

> "Je depense 500 $ par mois en achats en ligne pour ma famille. Je suis prete a changer de plateforme si elle m'offre une vraie transparence sur les produits, les prix et les vendeurs."

### 3.3.9 Implications pour le produit

- Dashboard acheteur avancé avec suivi de depenses et budget
- Filtre « Produits canadiens » et « Eco-responsables »
- Avis detailles avec photos et videos
- Programme de fidelite pour les acheteurs reguliers
- Checkout express (carte enregistree, Apple Pay, PayPal)
- Livraison express au Canada (integration transporteurs locaux)
- Gestion de famille (multi-profils sous un compte)
- Notification de prix et alertes de promotions
- Comparateur de prix transparent entre vendeurs

---

# CHAPITRE 5 : Parcours Utilisateur

Ce chapitre décrit de manière exhaustive l'ensemble des parcours utilisateur pour chaque type d'acteur de la plateforme Marketplace Global. Chaque étape est décrite avec le nom de l'écran, l'action effectuée, les éléments UI visibles, l'appel API réalisé, le changement d'état et la gestion des erreurs.

---

## 5.1 Parcours Visiteur (non authentifié)

Le parcours vise à convertir un visiteur anonyme en utilisateur inscrit ou acheteur.

### Étape 1 : Atterrissage sur la Page d'Accueil

| Élément | Détail |
|---|---|
| **Écran** | `LandingPage` (`/`) |
| **Action** | Le visiteur arrive sur la plateforme via une URL directe, un lien partagé ou un moteur de recherche |
| **Éléments UI visibles** | Header (logo, barre de recherche, icône panier, bouton "Se connecter" / "S'inscrire"), carrousel promotionnel, catégories populaires, produits tendance, bannières CTA, footer avec liens légaux |
| **Composants** | `Header`, `SearchBar`, `HeroCarousel`, `CategoryGrid`, `ProductCard`, `Footer`, `NewsletterSignup` |
| **API appelée** | `GET /api/v1/products/featured` — récupère les produits mis en avant ; `GET /api/v1/categories` — récupère la liste des catégories |
| **État** | Redux store : `products.featured` et `categories.list` chargés ; Context : `cart` initialisé (vide, localStorage) ; AuthContext : `isAuthenticated = false` |
| **Gestion des erreurs** | Si l'API échoue, affichage de produits placeholder (skeleton loading), banner de maintenance si code 503 |

### Étape 2 : Navigation et Exploration des Produits

| Élément | Détail |
|---|---|
| **Écran** | `ProductListingPage` (`/products`) ou `CategoryPage` (`/category/:slug`) |
| **Action** | Le visiteur clique sur une catégorie ou un lien de navigation |
| **Éléments UI visibles** | Filtres latéraux (catégorie, prix, marque, note, disponibilité), grille de produits avec pagination, barre de tri, compteur de résultats, breadcrumbs |
| **Composants** | `FilterSidebar`, `FilterChips`, `ProductGrid`, `ProductCard`, `Pagination`, `SortDropdown`, `Breadcrumb` |
| **API appelée** | `GET /api/v1/products?category=:id&minPrice=&maxPrice=&sort=&page=&limit=` |
| **État** | `products.list` mis à jour, `products.filters` synchronisé avec les query params URL, `products.pagination` mis à jour |
| **Gestion des erreurs** | Aucun produit trouvé → message "Aucun résultat" avec suggestion de filtres ; timeout → retry automatique 3 fois |

### Étape 3 : Consultation d'un Produit

| Élément | Détail |
|---|---|
| **Écran** | `ProductDetailPage` (`/product/:slug`) |
| **Action** | Le visiteur clique sur une carte produit |
| **Éléments UI visibles** | Galerie d'images (zoom au survol), titre du produit, prix, description, variantes (taille, couleur), note et avis, vendeur, disponibilité, bouton "Ajouter au panier" (désactivé si non connecté ou indisponible), bouton "Acheter maintenant", section produits similaires |
| **Composants** | `ImageGallery`, `ProductInfo`, `VariantSelector`, `RatingStars`, `ReviewList`, `SellerCard`, `AddToCartButton`, `RelatedProducts` |
| **API appelée** | `GET /api/v1/products/:slug` ; `GET /api/v1/products/:id/reviews?limit=10` |
| **État** | `product.current` chargé, `product.reviews` chargé |
| **Gestion des erreurs** | Produit introuvable → redirection 404 ; produit désactivé → message "Ce produit n'est plus disponible" |

### Étape 4 : Tentative d'Ajout au Panier (Non authentifié)

| Élément | Détail |
|---|---|
| **Écran** | `ProductDetailPage` avec modal `LoginPromptModal` |
| **Action** | Le visiteur clique sur "Ajouter au panier" |
| **Éléments UI visibles** | Modal demandant de se connecter ou de créer un compte, avec deux boutons : "Se connecter" et "Créer un compte", et un lien "Continuer en tant que visiteur" (panier local) |
| **API appelée** | Aucun appel API (panier stocké en localStorage) |
| **État** | `cart.items` mis à jour dans localStorage, `ui.showLoginModal = true` |
| **Gestion des erreurs** | Si le panier local dépasse 50 articles → toast "Connectez-vous pour sauvegarder votre panier" |

### Étape 5 : Inscription

| Élément | Détail |
|---|---|
| **Écran** | `RegisterPage` (`/register`) |
| **Action** | Le visiteur remplit le formulaire d'inscription |
| **Éléments UI visibles** | Formulaire avec champs : nom complet, email, mot de passe (avec force), confirmation mot de passe, case à cocher "Conditions d'utilisation", bouton "S'inscrire", liens "Déjà inscrit ? Se connecter", icônes de connexion sociale (Google, Facebook, Apple) |
| **Composants** | `RegisterForm`, `PasswordField`, `SocialLoginButtons`, `CheckboxField` |
| **API appelée** | `POST /api/v1/auth/register` avec body `{ fullName, email, password, role: 'customer' }` |
| **État** | `auth.isLoading = true` → `false`, `auth.pendingVerification = true`, redirection vers `/verify-email` |
| **Gestion des erreurs** | Email déjà utilisé → message sous le champ "Cet email est déjà utilisé" ; mot de passe faible → indicateurs de force en temps réel ; rate limit → "Trop de tentatives, veuillez patienter 5 minutes" |

### Étape 6 : Vérification Email

| Élément | Détail |
|---|---|
| **Écran** | `EmailVerificationPage` (`/verify-email`) |
| **Action** | Le visiteur saisit le code reçu par email |
| **Éléments UI visibles** | Titre "Vérifiez votre email", description, champ de code OTP (6 chiffres, séparés en 6 cases), bouton "Vérifier", bouton "Renvoyer le code", timer countdown (60s) |
| **API appelée** | `POST /api/v1/auth/verify-email` avec body `{ code }` ; `POST /api/v1/auth/resend-verification` |
| **État** | `auth.emailVerified = true`, redirection vers `/login` avec message de succès |
| **Gestion des erreurs** | Code incorrect → "Code invalide, il vous reste X tentatives" ; code expiré → "Code expiré, demandez un nouveau code" |

### Étape 7 : Connexion

| Élément | Détail |
|---|---|
| **Écran** | `LoginPage` (`/login`) |
| **Action** | Le visiteur saisit ses identifiants |
| **Éléments UI visibles** | Formulaire : email, mot de passe (toggle visibilité), bouton "Se connecter", lien "Mot de passe oublié ?", "Pas encore de compte ? S'inscrire", icônes connexion sociale |
| **API appelée** | `POST /api/v1/auth/login` avec body `{ email, password }` → retourne `{ accessToken, refreshToken, user }` |
| **État** | `auth.isAuthenticated = true`, `auth.user` mis à jour, `auth.tokens` stockés (httpOnly cookie refresh, access token en mémoire), panier local synchronisé avec panier serveur |
| **Gestion des erreurs** | Identifiants incorrects → "Email ou mot de passe incorrect" (message générique par sécurité) ; compte non vérifié → "Vérifiez votre email" avec lien renvoi ; compte bloqué → "Compte suspendu, contactez le support" ; 2FA requis → redirection vers `/2fa-verify` |

### Étape 8 : Recherche Produit

| Élément | Détail |
|---|---|
| **Écran** | `SearchResultsPage` (`/search?q=:query`) |
| **Action** | Le visiteur tape dans la barre de recherche |
| **Éléments UI visibles** | Barre de recherche avec suggestions auto-complete, résultats avec highlighting du terme recherché, filtres, tri, compteur, produits sous forme de liste ou grille |
| **Composants** | `SearchBar`, `AutoComplete`, `SearchResults`, `ProductCard`, `FilterSidebar` |
| **API appelée** | `GET /api/v1/search?q=:query&suggest=true` (autocomplete, debounce 300ms) ; `GET /api/v1/search?q=:query&page=&limit=&sort=` (résultats complets) |
| **État** | `search.query` synchronisé avec URL, `search.results` mis à jour, `search.suggestions` mis à jour |
| **Gestion des erreurs** | Aucun résultat → "Aucun produit trouvé pour 'X'" avec suggestions de reformulation |

### Étape 9 : Consultation du Panier

| Élément | Détail |
|---|---|
| **Écran** | `CartPage` (`/cart`) |
| **Action** | Le visiteur clique sur l'icône panier |
| **Éléments UI visibles** | Liste des articles avec image, titre, prix unitaire, sélecteur quantité, sous-total par article, bouton supprimer, résumé panier (total, frais estimés), bouton "Passer la commande" (redirige vers login si non authentifié), bouton "Continuer mes achats", input code promo |
| **API appelée** | Pas d'appel API pour panier local ; pour panier serveur : `GET /api/v1/cart` |
| **État** | `cart.items`, `cart.total`, `cart.itemCount` |
| **Gestion des erreurs** | Produit indisponible → badge rouge "Indisponible" sur l'article, bouton "Retirer" ; quantité supérieure au stock → message "Seulement X disponibles" |

### Étape 10 : Passage à la Caisse (Redirection Login)

| Élément | Détail |
|---|---|
| **Écran** | Redirection vers `/login?redirect=/checkout` |
| **Action** | Le visiteur clique sur "Passer la commande" sans être connecté |
| **Éléments UI visibles** | Page de connexion standard avec message "Connectez-vous pour finaliser votre commande" |
| **API appelée** | Identique à l'étape 7 |
| **État** | Après connexion, redirection automatique vers `/checkout` |
| **Gestion des erreurs** | Comme l'étape 7, avec préservation du panier après connexion |

---

## 5.2 Parcours Acheteur

### Étape 1 : Connexion

| Élément | Détail |
|---|---|
| **Écran** | `LoginPage` (`/login`) |
| **Action** | L'acheteur saisit email et mot de passe |
| **API appelée** | `POST /api/v1/auth/login` |
| **État** | `auth.isAuthenticated = true`, `auth.user.role = 'customer'`, token stocké |
| **Gestion des erreurs** | 401 → "Identifiants incorrects" ; 403 → "Compte suspendu" ; 429 → "Trop de tentatives, attendez X minutes" |

### Étape 2 : Recherche Avancée

| Élément | Détail |
|---|---|
| **Écran** | `SearchResultsPage` (`/search?q=:query&category=&minPrice=&maxPrice=&rating=&sort=&page=`) |
| **Action** | L'acheteur utilise la barre de recherche et applique des filtres |
| **Éléments UI visibles** | Barre de recherche pré-remplie, panneau de filtres (catégories hiérarchiques avec expand/collapse, plage de prix avec slider, fourchette d'évaluation par étoiles, disponibilité "En stock", livraison gratuite, vendeurs vérifiés), chips de filtres actifs, compteur de résultats, grille produits, pagination |
| **API appelée** | `GET /api/v1/search?q=:query&category=:id&minPrice=&maxPrice=&minRating=&inStock=true&freeShipping=true&verifiedSeller=true&sort=&page=&limit=20` |
| **État** | `search.filters` synchronisé avec URL, `search.results` paginé, `search.total` |
| **Gestion des erreurs** | Erreur réseau → retry 3x avec exponential backoff ; timeout 10s → afficher résultats partiels avec message |

### Étape 3 : Comparaison de Produits

| Élément | Détail |
|---|---|
| **Écran** | `ComparePage` (`/compare?ids=1,2,3`) |
| **Action** | L'acheteur sélectionne 2 à 4 produits à comparer via le bouton "Comparer" sur les cartes produits |
| **Éléments UI visibles** | Tableau comparatif colonnes par produit, lignes par attribut (prix, caractéristiques, notes, vendeur, livraison), surbrillance des meilleures offres, bouton "Ajouter au panier" par produit, bouton "Retirer de la comparaison" |
| **API appelée** | `GET /api/v1/products/compare?ids=1,2,3` |
| **État** | `compare.products` (max 4), stocké en localStorage et URL |
| **Gestion des erreurs** | Produit indisponible → "Produit non disponible, retiré de la comparaison" |

### Étape 4 : Ajout au Panier

| Élément | Détail |
|---|---|
| **Écran** | `ProductDetailPage` avec toast de confirmation |
| **Action** | L'acheteur sélectionne les variantes et clique "Ajouter au panier" |
| **Éléments UI visibles** | Sélecteur de variante actif, compteur de quantité (-/+), bouton "Ajouter au panier" avec animation, toast "Produit ajouté au panier" avec lien "Voir le panier", mini-panier dropdown dans le header avec compteur mis à jour |
| **API appelée** | `POST /api/v1/cart/items` avec body `{ productId, variantId, quantity }` |
| **État** | `cart.items` mis à jour, `cart.total` recalculé, `cart.itemCount` incrémenté |
| **Gestion des erreurs** | Stock insuffisant → "Il ne reste que X articles en stock" ; produit retiré → "Ce produit n'est plus disponible" ; duplicate → incrémente la quantité avec confirmation |

### Étape 5 : Gestion du Panier

| Élément | Détail |
|---|---|
| **Écran** | `CartPage` (`/cart`) |
| **Action** | L'acheteur modifie quantités, supprime des articles, applique un code promo |
| **Éléments UI visibles** | Articles avec image, titres, variantes, prix unitaire, sélecteur quantité avec min/max, bouton supprimer (icône Trash2), résumé : sous-total, frais de livraison estimés, réduction éventuelle, total, bouton "Passer la commande", input code promo avec bouton "Appliquer", lien "Continuer mes achats" |
| **API appelée** | `PUT /api/v1/cart/items/:itemId` (mise à jour quantité) ; `DELETE /api/v1/cart/items/:itemId` (suppression) ; `POST /api/v1/cart/coupon` avec body `{ code }` |
| **État** | `cart.items`, `cart.total`, `cart.discount`, `cart.couponApplied` |
| **Gestion des erreurs** | Code promo invalide → "Code promo invalide ou expiré" ; code promo expiré → "Ce code promo a expiré le JJ/MM/AAAA" ; panier vide → affichage empty state avec CTA vers catalogue |

### Étape 6 : Checkout — Adresse de Livraison

| Élément | Détail |
|---|---|
| **Écran** | `CheckoutPage` étape 1 — Adresse (`/checkout?step=shipping`) |
| **Action** | L'acheteur saisit ou sélectionne une adresse de livraison |
| **Éléments UI visibles** | Stepper (3 étapes : Livraison → Paiement → Confirmation), liste des adresses enregistrées avec radio buttons, bouton "Ajouter une nouvelle adresse" (formulaire inline), champs : nom complet, téléphone, adresse ligne 1, ligne 2, ville, code postal, pays (dropdown), défaut checkbox |
| **API appelée** | `GET /api/v1/user/addresses` ; `POST /api/v1/user/addresses` (nouvelle adresse) ; `GET /api/v1/shipping/options?addressId=` |
| **État** | `checkout.step = 1`, `checkout.selectedAddress`, `checkout.shippingOptions` |
| **Gestion des erreurs** | Erreur de validation adresse → messages inline sous chaque champ ; zone non livrable → "Nous ne livrons pas encore dans cette zone" |

### Étape 7 : Checkout — Sélection de Livraison

| Élément | Détail |
|---|---|
| **Écran** | `CheckoutPage` étape 1b — Options de livraison |
| **Action** | L'acheteur choisit un mode de livraison |
| **Éléments UI visibles** | Options de livraison sous forme de cartes radio : Standard (3-5 jours, gratuit si >50€), Express (1-2 jours, 9.99€), Point relais (2-4 jours, 4.99€), chaque option avec icône Truck/Package, délai estimé, prix, date de livraison estimée |
| **API appelée** | `GET /api/v1/shipping/options?addressId=:id&cartId=:id` |
| **État** | `checkout.shippingMethod`, `checkout.shippingCost`, `checkout.estimatedDelivery` |
| **Gestion des erreurs** | Aucune option disponible → "Aucune option de livraison disponible pour cette adresse" |

### Étape 8 : Checkout — Paiement

| Élément | Détail |
|---|---|
| **Écran** | `CheckoutPage` étape 2 — Paiement (`/checkout?step=payment`) |
| **Action** | L'acheteur sélectionne le mode de paiement et saisit les informations |
| **Éléments UI visibles** | Options : Carte bancaire (champs numéro, expiration, CVV avec icône Lock), PayPal (redirection), Apple Pay/Google Pay, Virement bancaire, Résumé de commande à droite (articles, adresse, livraison, sous-total, frais, total), bouton "Payer X €", badge de sécurité SSL |
| **Composants** | `PaymentMethodSelector`, `CreditCardForm`, `PayPalButton`, `OrderSummary`, `SecureBadge` |
| **API appelée** | `POST /api/v1/payment/create-intent` (Stripe/PayPal) ; après paiement : `POST /api/v1/orders` avec body complet |
| **État** | `checkout.paymentMethod`, `checkout.paymentIntentId`, `order.created` |
| **Gestion des erreurs** | Carte refusée → "Paiement refusé, vérifiez vos informations" ; timeout → "Paiement en cours de traitement, ne quittez pas la page" ; error 402 → "Fonds insuffisants" ; 3D Secure échoué → "Authentification échouée, réessayez" |

### Étape 9 : Confirmation de Commande

| Élément | Détail |
|---|---|
| **Écran** | `OrderConfirmationPage` (`/order/confirmation/:orderId`) |
| **Action** | Redirection automatique après paiement réussi |
| **Éléments UI visibles** | Icône checkmark animée verte, titre "Commande confirmée !", numéro de commande, récapitulatif (articles, adresse, livraison estimée, montant total), bouton "Suivre ma commande", bouton "Continuer mes achats", bouton "Imprimer le récépissé", message "Un email de confirmation vous a été envoyé" |
| **API appelée** | `GET /api/v1/orders/:orderId` (vérification) |
| **État** | `order.current` chargé, `cart` vidé |
| **Gestion des erreurs** | Commande non trouvée → "Commande en cours de traitement, vérifiez votre email" |

### Étape 10 : Suivi de Commande

| Élément | Détail |
|---|---|
| **Écran** | `OrderDetailPage` (`/orders/:orderId`) |
| **Action** | L'acheteur consulte l'avancement de sa commande |
| **Éléments UI visibles** | Timeline verticale : Commande passée → Paiement confirmé → En préparation → Expédié → En livraison → Livré, détails du colis (numéro de suivi, transporteur, lien de suivi externe), articles commandés, adresse de livraison, historique des statuts avec dates/heures |
| **API appelée** | `GET /api/v1/orders/:orderId` ; `GET /api/v1/orders/:orderId/tracking` |
| **État** | `order.current`, `order.tracking` |
| **Gestion des erreurs** | Statut non mis à jour → "Statut en attente de mise à jour" ; lien suivi cassé → "Suivi non disponible, contactez le transporteur" |

### Étape 11 : Historique des Commandes

| Élément | Détail |
|---|---|
| **Écran** | `OrderHistoryPage` (`/orders`) |
| **Action** | L'acheteur consulte la liste de ses commandes |
| **Éléments UI visibles** | Liste des commandes avec numéro, date, statut (badge coloré), total, nombre d'articles, bouton "Voir les détails", filtres par statut, par date, pagination |
| **API appelée** | `GET /api/v1/orders?page=&limit=&status=&sort=` |
| **État** | `orders.list`, `orders.pagination`, `orders.filters` |
| **Gestion des erreurs** | Erreur de chargement → retry avec skeleton loading |

### Étape 12 : Avis et Évaluation

| Élément | Détail |
|---|---|
| **Écran** | `ReviewPage` (`/orders/:orderId/review`) ou modal `ReviewModal` |
| **Action** | L'acheteur évalue un produit après livraison |
| **Éléments UI visibles** | Image du produit, étoiles cliquables (1-5), champ texte pour le commentaire, upload de photos (max 5), slider satisfaction globale, bouton "Publier l'avis" |
| **API appelée** | `POST /api/v1/reviews` avec body `{ productId, rating, comment, images }` |
| **État** | `review.submitted = true`, toast "Avis publié, merci !" |
| **Gestion des erreurs** | Avis déjà soumis → "Vous avez déjà évalué ce produit" ; contenu inapproprié → "Votre avis ne respecte pas nos guidelines" ; 403 → "Vous ne pouvez évaluer que des produits achetés" |

### Étape 13 : Demande de Retour

| Élément | Détail |
|---|---|
| **Écran** | `ReturnRequestPage` (`/orders/:orderId/return`) |
| **Action** | L'acheteur initie un retour de produit |
| **Éléments UI visibles** | Sélection du/des articles à retourner, motif du retour (dropdown : produit défectueux, ne correspond pas, taille incorrecte, etc.), description du problème (textarea, max 500 chars), upload de photos de preuve, choix du remboursement (remboursement original, avoir), bouton "Soumettre la demande" |
| **API appelée** | `POST /api/v1/returns` avec body `{ orderId, items[], reason, description, images, refundMethod }` |
| **État** | `return.requested`, toast "Demande de retour soumise" |
| **Gestion des erreurs** | Délai dépassé → "Le délai de retour de 30 jours est dépassé" ; article non éligible → "Cet article n'est pas éligible au retour" |

---

## 5.3 Parcours Vendeur

### Étape 1 : Inscription Vendeur

| Élément | Détail |
|---|---|
| **Écran** | `SellerRegisterPage` (`/seller/register`) |
| **Action** | Un utilisateur s'inscrit en tant que vendeur |
| **Éléments UI visibles** | Formulaire multi-étapes (stepper) : 1) Informations personnelles (nom, email, téléphone, adresse), 2) Informations entreprise (nom commercial, SIRET, type : particulier/entreprise, adresse siège), 3) Documents vérification (pièce d'identité, justificatif d'entreprise, RIB), 4) Confirmation |
| **API appelée** | `POST /api/v1/sellers/register` avec body multi-part (données + fichiers upload) |
| **État** | `seller.registrationStep`, `seller.application.submitted` |
| **Gestion des erreurs** | SIRET invalide → vérification en temps réel avec l'API gouvernementale ; document illisible → "Document illisible, veuillez recommencer" ; email déjà utilisé → "Un compte vendeur existe déjà avec cet email" |

### Étape 2 : Configuration de la Boutique

| Élément | Détail |
|---|---|
| **Écran** | `ShopSetupPage` (`/seller/shop/setup`) |
| **Action** | Le vendeur personnalise sa boutique |
| **Éléments UI visibles** | Champs : nom de la boutique (unique, vérifié en temps réel), logo (upload avec preview), bannière (upload avec preview), description (rich text editor), politique de retour (textarea), délai de traitement (dropdown), catégories de produits vendus, réseaux sociaux (champs URL), couleur du thème de la boutique |
| **API appelée** | `PUT /api/v1/sellers/shop` avec body formData |
| **État** | `seller.shop` mis à jour, preview en temps réel |
| **Gestion des erreurs** | Nom de boutique pris → suggestions alternatives ; logo trop volumineux → "Fichier trop volumineux (max 2MB)" ; description trop courte → "Minimum 50 caractères" |

### Étape 3 : Ajout de Produits

| Élément | Détail |
|---|---|
| **Écran** | `ProductCreatePage` (`/seller/products/new`) |
| **Action** | Le vendeur crée une nouvelle fiche produit |
| **Éléments UI visibles** | Formulaire complet : Titre (max 200), description (rich text avec aperçu), catégories (sélecteur hiérarchique), prix (montant + devise), prix compare (barré), SKU (auto-généré ou manuel), barcode (EAN/UPC), poids/dimensions (pour calcul frais), galerie photos (drag & drop, max 10, réordonnable), variantes (tableau dynamique : taille/couleur/prix/stock), quantité en stock, seuil stock minimum, mots-clés/tags, statut (brouillon/publié), SEO title/description |
| **Composants** | `ProductForm`, `ImageUploader`, `VariantTable`, `CategoryPicker`, `PriceInput`, `RichTextEditor`, `TagInput` |
| **API appelée** | `POST /api/v1/products` (body formData complet) ; `GET /api/v1/categories/tree` ; `POST /api/v1/uploads/images` (upload images) |
| **État** | `product.editing`, `product.saving`, `product.saved` |
| **Gestion des erreurs** | Titre dupliqué → "Un produit avec ce titre existe déjà" ; images > 10 → "Maximum 10 images" ; prix négatif → validation en temps réel ; SKU dupliqué → "Ce SKU existe déjà" |

### Étape 4 : Gestion des Produits

| Élément | Détail |
|---|---|
| **Écran** | `SellerProductsPage` (`/seller/products`) |
| **Action** | Le vendeur consulte et gère son catalogue |
| **Éléments UI visibles** | Tableau/liste des produits avec miniature, titre, SKU, prix, stock (badge coloré : vert/orange/rouge), statut (brouillon/actif/suspendu), ventes totales, date de création, actions (éditer/dupliquer/supprimer/désactiver), barre de recherche, filtres (statut, catégorie, stock), bouton "Ajouter un produit", export CSV |
| **API appelée** | `GET /api/v1/seller/products?page=&limit=&status=&search=&sort=` ; `DELETE /api/v1/products/:id` ; `PATCH /api/v1/products/:id/toggle-status` |
| **État** | `seller.products.list`, `seller.products.pagination` |
| **Gestion des erreurs** | Produit avec commandes en cours → "Impossible de supprimer un produit avec des commandes en cours" |

### Étape 5 : Gestion des Commandes

| Élément | Détail |
|---|---|
| **Écran** | `SellerOrdersPage` (`/seller/orders`) |
| **Action** | Le vendeur traite les commandes reçues |
| **Éléments UI visibles** | Tableau des commandes : numéro, date, client (anonymisé), articles, total, statut (Nouvelle/En préparation/Expédiée/Livrée/Retournée), actions (Voir détails, Marquer expédiée), filtres par statut, par date, onglets par statut avec compteur badge |
| **API appelée** | `GET /api/v1/seller/orders?page=&limit=&status=` ; `PATCH /api/v1/seller/orders/:id/status` avec body `{ status: 'shipped', trackingNumber: '...' }` |
| **État** | `seller.orders.list`, `seller.orders.stats` |
| **Gestion des erreurs** | Statut invalide → "Transition de statut non autorisée" ; déjà expédiée → "Cette commande a déjà été expédiée" |

### Étape 6 : Analytics Vendeur

| Élément | Détail |
|---|---|
| **Écran** | `SellerAnalyticsPage` (`/seller/analytics`) |
| **Action** | Le vendeur consulte ses performances |
| **Éléments UI visibles** | KPI cards : Chiffre d'affaires (mois/année), nombre de ventes, panier moyen, taux de retour, note moyenne, graphiques : ventes par jour/semaine/mois (line chart), produits les plus vendus (bar chart), répartition par catégorie (pie chart), sources de trafic, période sélectionnable (7j/30j/90j/1an/personnalisé) |
| **Composants** | `KPICard`, `SalesChart`, `TopProductsChart`, `DateRangePicker`, `StatsCard` |
| **API appelée** | `GET /api/v1/seller/analytics?period=&start=&end=&metrics=` |
| **État** | `seller.analytics` |
| **Gestion des erreurs** | Pas de données → "Aucune donnée pour cette période" |

### Étape 7 : Paiements et Virements

| Élément | Détail |
|---|---|
| **Écran** | `SellerPayoutsPage` (`/seller/payouts`) |
| **Action** | Le vendeur consulte ses revenus et configure ses virements |
| **Éléments UI visibles** | Solde disponible (montant grand), historique des virements (date, montant, statut), commission marketplace retenue, configuration du compte bancaire (IBAN, BIC), fréquence de virement (hebdomadaire/mensuel), montant minimum de virement, prévisualisation du prochain virement |
| **API appelée** | `GET /api/v1/seller/payouts` ; `GET /api/v1/seller/balance` ; `PUT /api/v1/seller/payout-settings` |
| **État** | `seller.balance`, `seller.payouts.history`, `seller.payouts.settings` |
| **Gestion des erreurs** | IBAN invalide → "Numéro IBAN invalide" ; payout en cours → "Un virement est en cours de traitement" |

---

## 5.4 Parcours Administrateur

### Étape 1 : Tableau de Bord Admin

| Élément | Détail |
|---|---|
| **Écran** | `AdminDashboardPage` (`/admin`) |
| **Action** | L'administrateur accède au dashboard global |
| **Éléments UI visibles** | KPI en temps réel : chiffre d'affaires total (J/sem/mois), nombre de commandes, nouveaux utilisateurs, litiges en cours, graphiques : évolution CA, top vendeurs, top catégories, alertes système (stock critique, litiges en attente, produits signalés), activité récente (timeline) |
| **API appelée** | `GET /api/v1/admin/dashboard?period=` ; `GET /api/v1/admin/alerts` ; `GET /api/v1/admin/activity?limit=20` |
| **État** | `admin.dashboard`, `admin.alerts`, `admin.activity` |
| **Gestion des erreurs** | Données non disponibles → skeleton loading avec placeholder |

### Étape 2 : Gestion des Utilisateurs

| Élément | Détail |
|---|---|
| **Écran** | `AdminUsersPage` (`/admin/users`) |
| **Action** | L'administrateur gère les comptes utilisateurs |
| **Éléments UI visibles** | Tableau paginé : avatar, nom, email, rôle (badge : Acheteur/Vendeur/Admin), date d'inscription, statut (actif/suspendu/banni), nombre de commandes, actions (voir profil, suspendre, bannir, modifier le rôle), filtres (rôle, statut, date), recherche, export |
| **API appelée** | `GET /api/v1/admin/users?page=&limit=&role=&status=&search=` ; `PATCH /api/v1/admin/users/:id/status` ; `PATCH /api/v1/admin/users/:id/role` |
| **État** | `admin.users.list`, `admin.users.pagination` |
| **Gestion des erreurs** | Tenter de bannir un admin → "Impossible de bannir un administrateur" ; self-suspend → "Vous ne pouvez pas modifier votre propre compte" |

### Étape 3 : Modération des Produits

| Élément | Détail |
|---|---|
| **Écran** | `AdminModerationPage` (`/admin/moderation`) |
| **Action** | L'administrateur modère les produits signalés |
| **Éléments UI visibles** | Liste des produits en attente de modération : miniature, titre, vendeur, raison du signalement (contrefaçon, inapproprié, prix abusif, fausse description), date du signalement, nombre de signalements, actions (Approuver/Rejeter/Suspendre), modal de décision avec champ motif obligatoire |
| **API appelée** | `GET /api/v1/admin/moderation?page=&limit=&status=pending` ; `PATCH /api/v1/admin/moderation/:id/decide` avec body `{ action: 'approve'|'reject'|'suspend', reason }` |
| **État** | `admin.moderation.list` |
| **Gestion des erreurs** | Produit déjà traité → "Cette notification a déjà été traitée" |

### Étape 4 : Rapports et Statistiques

| Élément | Détail |
|---|---|
| **Écran** | `AdminReportsPage` (`/admin/reports`) |
| **Action** | L'administrateur génère et consulte des rapports |
| **Éléments UI visibles** | Types de rapports (Ventes, Utilisateurs, Produits, Financier, Performance vendeurs), période personnalisable, graphiques interactifs (Chart.js/Recharts), tableau récapitulatif, bouton Export PDF/CSV/Excel, comparaison période à période |
| **API appelée** | `GET /api/v1/admin/reports/:type?start=&end=&granularity=` ; `GET /api/v1/admin/reports/:type/export?format=pdf` |
| **État** | `admin.reports` |
| **Gestion des erreurs** | Rapport trop volumineux → "Données trop volumineuses, réduisez la période" |

### Étape 5 : Paramètres Système

| Élément | Détail |
|---|---|
| **Écran** | `AdminSettingsPage` (`/admin/settings`) |
| **Action** | L'administrateur configure la plateforme |
| **Éléments UI visibles** | Onglets : Général (nom site, logo, maintenance mode toggle), Commission (% par catégorie), Livraison (zones, transporteurs), Paiement (méthodes actives, seuil minimum virement), Email (templates, SMTP), Sécurité (2FA obligatoire, durée session), SEO (meta par défaut, sitemap) |
| **API appelée** | `GET /api/v1/admin/settings` ; `PUT /api/v1/admin/settings` |
| **État** | `admin.settings` |
| **Gestion des erreurs** | Valeur hors limites → validation en temps réel ; mode maintenance activé → message pour tous les utilisateurs |

---

## 5.5 Parcours Livreur

### Étape 1 : Réception d'une Livraison

| Élément | Détail |
|---|---|
| **Écran** | `DeliveryListPage` (`/delivery`) |
| **Action** | Le livreur consulte les livraisons disponibles |
| **Éléments UI visibles** | Liste des livraisons assignées : adresse pickup, adresse dropoff, distance estimée, rémunération, délai, bouton "Accepter", filtre par statut (Disponible/Assignée/En cours/Livrée), carte avec positions (pickup en vert, dropoff en bleu) |
| **API appelée** | `GET /api/v1/deliveries?status=available` ; `POST /api/v1/deliveries/:id/accept` |
| **État** | `delivery.list`, `delivery.assigned` |
| **Gestion des erreurs** | Livraison déjà prise → "Cette livraison a déjà été acceptée par un autre livreur" ; hors zone → "Cette livraison est hors de votre zone" |

### Étape 2 : Navigation vers le Point de Pickup

| Élément | Détail |
|---|---|
| **Écran** | `DeliveryActivePage` (`/delivery/:id`) |
| **Action** | Le livreur se rend au point de collecte |
| **Éléments UI visibles** | Carte en plein écran avec itinéraire, bouton "Ouvrir dans Google Maps/Waze", adresse pickup, bouton "J'ai récupéré le colis" (désactivé tant qu'il n'est pas proche — géofencing), informations sur le colis (dimensions, poids, fragile) |
| **API appelée** | `POST /api/v1/deliveries/:id/status` avec body `{ status: 'picked_up' }` |
| **État** | `delivery.current.status = 'picked_up'` |
| **Gestion des erreurs** | Géolocalisation refusée → "Activez la géolocalisation pour utiliser cette fonctionnalité" ; colis introuvable → "Signaler un problème" avec formulaire |

### Étape 3 : Livraison au Client

| Élément | Détail |
|---|---|
| **Écran** | `DeliveryActivePage` avec modal de confirmation |
| **Action** | Le livreur dépose le colis et confirme la livraison |
| **Éléments UI visibles** | Itinéraire vers l'adresse de livraison, bouton "Confirmer la livraison", modal : photo du colis déposé (obligatoire), code de confirmation saisi par le client (ou signature), option "Livré au voisin/consigne", commentaire |
| **API appelée** | `POST /api/v1/deliveries/:id/complete` avec body `{ proofPhoto, confirmationCode, notes }` |
| **État** | `delivery.current.status = 'delivered'`, rémunération crédité |
| **Gestion des erreurs** | Code incorrect → "Code de confirmation invalide" ; client absent → "Marquer comme tenté" (relance automatique après 24h) |

---

## 5.6 Parcours Support

### Étape 1 : Réception d'un Ticket

| Élément | Détail |
|---|---|
| **Écran** | `SupportDashboardPage` (`/support/dashboard`) |
| **Action** | L'agent de support consulte les tickets entrants |
| **Éléments UI visibles** | Liste des tickets : ID, sujet, client, vendeur concerné, catégorie (commande/livraison/paiement/produit/autre), priorité (haute/moyenne/basse — badge coloré), statut (ouvert/en cours/resolu/fermé), date de création, dernier message, SLA restant (timer coloré), assignment (non assigné, assigné à moi) |
| **API appelée** | `GET /api/v1/support/tickets?page=&limit=&status=&priority=&assignedTo=&mine=true` |
| **État** | `support.tickets.list`, `support.tickets.stats` |
| **Gestion des erreurs** | Ticket assigné à un autre → "Ticket assigné à [agent]" avec option réassigner |

### Étape 2 : Investigation du Ticket

| Élément | Détail |
|---|---|
| **Écran** | `TicketDetailPage` (`/support/tickets/:id`) |
| **Action** | L'agent examine le ticket et communique avec le client |
| **Éléments UI visibles** | Panneau gauche : détails du ticket, infos client (historique commandes, tickets précédents), panneau droite : fil de conversation (chat-like, avec horodatage, fichiers joints), actions latérales : changement de statut, changement de priorité, réassignation, lien vers commande concernée, accès aux logs système, templates de réponse rapide |
| **API appelée** | `GET /api/v1/support/tickets/:id` ; `GET /api/v1/support/tickets/:id/messages` ; `POST /api/v1/support/tickets/:id/messages` avec body `{ content, attachments[] }` ; `PATCH /api/v1/support/tickets/:id` avec body `{ status, priority, assignedTo }` |
| **État** | `support.ticket.current`, `support.ticket.messages` |
| **Gestion des erreurs** | Pièce jointe trop volumineuse → "Taille maximale : 10MB" ; ticket fermé → "Ticket fermé, rouvrir ?" |

### Étape 3 : Résolution du Ticket

| Élément | Détail |
|---|---|
| **Écran** | `TicketDetailPage` avec modal de résolution |
| **Action** | L'agent résout le problème et clôt le ticket |
| **Éléments UI visibles** | Modal de résolution : motif (dropdown : résolu, remboursement effectué, échange initié, pas de réponse du client, autre), notes internes (textarea, non visibles par le client), résumé de l'action prise, bouton "Résoudre et fermer", envoi d'un email automatique de résolution au client |
| **API appelée** | `PATCH /api/v1/support/tickets/:id/resolve` avec body `{ resolution, internalNotes }` |
| **État** | `support.ticket.current.status = 'resolved'` |
| **Gestion des erreurs** | SLA dépassé → alerte "SLA dépassé" avec escalade automatique |

### Étape 4 : Suivi Post-Résolution

| Élément | Détail |
|---|---|
| **Écran** | Email automatique + `TicketDetailPage` en lecture seule |
| **Action** | Le client reçoit un email et peut rouvrir le ticket |
| **Éléments UI visibles** | Email : "Votre ticket #XXX a été résolu", lien vers le ticket, bouton "Rouvrir si non résolu", demande d'évaluation du support (1-5 étoiles), ticket en lecture seule avec lien "Rouvrir ce ticket" |
| **API appelée** | `POST /api/v1/support/tickets/:id/reopen` ; `POST /api/v1/support/tickets/:id/feedback` avec body `{ rating, comment }` |
| **État** | `support.ticket.current.status = 'reopened'` ou `support.ticket.current.feedback = { rating }` |
| **Gestion des erreurs** | Ticket fermé depuis > 30 jours → "Délai de réouverture dépassé, créez un nouveau ticket" |

---

# CHAPITRE 6 : Architecture Générale

---

## 6.1 Architecture Frontend (SPA, Routing, State Management)

### 6.1.1 Single Page Application (SPA)

L'application est construite en tant que SPA React, offrant une navigation fluide sans rechargement de page. Le rendu est principalement côté client (CSR) avec hydration potentielle pour le SEO via SSR partiel (si migration Next.js ultérieure).

```
┌─────────────────────────────────────────────────────────────┐
│                     BROWSER (Client)                         │
│                                                              │
│  ┌──────────────┐    ┌──────────────────────────────────┐   │
│  │   index.html  │    │         React Application        │   │
│  │   (Shell)     │───>│                                   │   │
│  │               │    │  ┌─────────┐  ┌───────────────┐  │   │
│  │  <div id=     │    │  │  Router  │  │  State Layer   │  │   │
│  │  \"root\">      │    │  │  (RRD)   │  │  (Ctx+Redux)  │  │   │
│  │  </div>       │    │  └────┬────┘  └───────┬───────┘  │   │
│  │               │    │       │               │           │   │
│  │  <script>     │    │  ┌────▼───────────────▼───────┐  │   │
│  │  bundle.js    │    │  │     Component Tree          │  │   │
│  │  </script>    │    │  │                              │  │   │
│  └──────────────┘    │  │  Layout ─> Page ─> Composants│  │   │
│                       │  │                              │  │   │
│                       │  │  ┌──────────────────────┐   │  │   │
│                       │  │  │    API Service Layer  │   │  │   │
│                       │  │  │    (Axios + Intercepts│   │  │   │
│                       │  │  └──────────┬───────────┘   │  │   │
│                       │  └─────────────┼───────────────┘  │   │
│                       └────────────────┼──────────────────┘   │
│                                        │                      │
└────────────────────────────────────────┼──────────────────────┘
                                         │ HTTPS
                          ┌──────────────▼──────────────┐
                          │       API Server (REST)      │
                          │       /api/v1/*              │
                          └─────────────────────────────┘
```

### 6.1.2 Routing Stratégie

- **React Router DOM v6+** avec routes imbriquées (`<Outlet>`)
- Routing basé sur le layout : chaque section de l'app a son layout parent
- Lazy loading de toutes les pages via `React.lazy()` + `Suspense`
- Route guards : `ProtectedRoute`, `AdminRoute`, `SellerRoute`, `DeliveryRoute`
- URL-based state : filtres, pagination, recherche synchronisés avec les query params

### 6.1.3 Stratégie de State Management

```
┌──────────────────────────────────────────────────────────────┐
│                    STATE MANAGEMENT LAYERS                     │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Layer 1: Component State (useState/useReducer)          │ │
│  │ - UI state local (modals, formulaires, animations)      │ │
│  │ - Données dérivées du composant                          │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Layer 2: URL State (useSearchParams, useParams)         │ │
│  │ - Filtres de recherche, pagination, tri                  │ │
│  │ - Tab actif, étapes de checkout                          │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Layer 3: React Query (TanStack Query)                   │ │
│  │ - Server state : cache, invalidation, refetch            │ │
│  │ - Données API avec staleTime, cacheTime configurés       │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Layer 4: Context API                                    │ │
│  │ - Auth (user, tokens, permissions)                       │ │
│  │ - Cart (items, total)                                    │ │
│  │ - Theme (dark/light, colors)                             │ │
│  │ - Notifications (toasts, badges)                         │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Layer 5: Redux Toolkit (si nécessaire)                  │ │
│  │ - État global complexe inter-composants                  │ │
│  │ - Flux de données multi-étapes (checkout wizard)         │ │
│  │ - RTK Query pour le cache API global                     │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Layer 6: LocalStorage / SessionStorage                  │ │
│  │ - Panier guest, préférences UI, tokens refresh           │ │
│  └─────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

---

## 6.2 Architecture des Composants (Atomic Design)

L'application suit la méthodologie **Atomic Design** de Brad Frost, organisée en 5 niveaux de granularité.

### Hiérarchie des Composants

```
Atoms (éléments de base)
    │
    ▼
Molecules (combinaisons d'atoms)
    │
    ▼
Organisms (sections complexes)
    │
    ▼
Templates (structures de page)
    │
    ▼
Pages (templates + données + interactions)
```

### Règles de Composition

| Niveau | Rôle | Exemples | Règles |
|---|---|---|---|
| **Atoms** | Éléments UI indivisibles, sans dépendance métier | `Button`, `Input`, `Badge`, `Avatar`, `Icon`, `Spinner`, `Divider`, `Tooltip` | Pas d'appel API ; props simples (string, boolean, callback) |
| **Molecules** | Combinaisons d'atoms formant un bloc fonctionnel | `SearchBar` (Input + Button + Icon), `CartItem` (Image + Input + Button), `RatingStars` (5x Icon), `FormField` (Label + Input + ErrorMessage) | Composent 2-5 atoms ; pas d'appel API direct |
| **Organisms** | Sections UI complexes, autonomes | `Header`, `Footer`, `ProductGrid`, `FilterSidebar`, `CheckoutForm`, `OrderTimeline`, `ChatWidget` | Peuvent contenir des molecules et atoms ; gèrent leur propre state local |
| **Templates** | Layouts de page structurels, sans données | `DashboardLayout`, `AuthLayout`, `MarketplaceLayout`, `CheckoutLayout` | Utilisent `<Outlet>` pour le contenu dynamique |
| **Pages** | Composants connectés aux données et au routing | `HomePage`, `ProductDetailPage`, `CheckoutPage` | Connectés aux hooks/data fetching ; contiennent la logique métier |

---

## 6.3 Architecture des Dossiers

```
src/
│
├── components/           # Composants réutilisables (Atomic Design)
│   ├── atoms/            # Éléments de base (Button, Input, Badge...)
│   ├── molecules/        # Blocs fonctionnels (SearchBar, CartItem...)
│   ├── organisms/        # Sections complexes (Header, ProductGrid...)
│   └── templates/        # Layouts de page (DashboardLayout...)
│
├── pages/                # Pages de l'application (connectées au routing)
│   ├── Home/
│   ├── Products/
│   ├── Cart/
│   ├── Checkout/
│   ├── Auth/
│   ├── Seller/
│   ├── Admin/
│   ├── Delivery/
│   ├── Support/
│   └── Legal/
│
├── layouts/              # Layouts racine (wrappent les routes)
│   ├── MainLayout.jsx
│   ├── AuthLayout.jsx
│   ├── AdminLayout.jsx
│   ├── SellerLayout.jsx
│   ├── DeliveryLayout.jsx
│   └── MinimalLayout.jsx
│
├── routes/               # Configuration des routes
│   ├── index.jsx         # Routeur principal
│   ├── ProtectedRoute.jsx
│   ├── AdminRoute.jsx
│   ├── SellerRoute.jsx
│   ├── DeliveryRoute.jsx
│   ├── SupportRoute.jsx
│   └── GuestRoute.jsx
│
├── context/              # Context API providers
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── ThemeContext.jsx
│   └── NotificationContext.jsx
│
├── store/                # Redux Toolkit (si utilisé)
│   ├── index.js
│   └── slices/
│       ├── authSlice.js
│       └── ...
│
├── services/             # Couche API (Axios wrappers)
│   ├── api.js            # Instance Axios + interceptors
│   ├── auth.service.js
│   ├── product.service.js
│   ├── cart.service.js
│   ├── order.service.js
│   ├── seller.service.js
│   ├── admin.service.js
│   ├── delivery.service.js
│   └── support.service.js
│
├── hooks/                # Custom hooks réutilisables
│   ├── useAuth.js
│   ├── useCart.js
│   ├── useProducts.js
│   ├── usePagination.js
│   ├── useDebounce.js
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   ├── useClickOutside.js
│   └── useInfiniteScroll.js
│
├── utils/                # Fonctions pures utilitaires
│   ├── formatCurrency.js
│   ├── formatDate.js
│   ├── validate.js
│   ├── slugify.js
│   ├── truncate.js
│   └── storage.js
│
├── constants/            # Constantes de l'application
│   ├── routes.js
│   ├── roles.js
│   ├── statuses.js
│   ├── currencies.js
│   ├── themes.js
│   └── api.js
│
├── types/                # Types JSDoc / PropTypes / TypeScript
│   └── index.js
│
├── assets/               # Ressources statiques
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── styles/               # Styles globaux
│   ├── globals.css       # Tailwind imports + custom base
│   └── utilities.css     # Custom utility classes
│
├── config/               # Configuration de l'app
│   ├── index.js          # Variables d'environnement
│   └── axios.js          # Configuration Axios
│
├── i18n/                 # Internationalisation
│   ├── index.js
│   ├── fr.json
│   └── en.json
│
└── tests/                # Tests
    ├── unit/
    ├── integration/
    └── e2e/
```

---

## 6.4 Architecture Modulaire (Feature-Based)

Chaque fonctionnalité métier est encapsulée dans un module `features/` contenant ses propres composants, hooks, services et slices.

```
src/features/
│
├── auth/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── ForgotPasswordForm.jsx
│   │   ├── ResetPasswordForm.jsx
│   │   ├── EmailVerification.jsx
│   │   ├── SocialLoginButtons.jsx
│   │   └── PasswordStrengthIndicator.jsx
│   ├── hooks/
│   │   └── useAuth.js
│   ├── services/
│   │   └── auth.service.js
│   └── index.js
│
├── products/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── VariantSelector.jsx
│   │   ├── ReviewSection.jsx
│   │   └── RelatedProducts.jsx
│   ├── hooks/
│   │   ├── useProduct.js
│   │   └── useProducts.js
│   ├── services/
│   │   └── product.service.js
│   └── index.js
│
├── cart/
│   ├── components/
│   │   ├── CartDrawer.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   └── CouponInput.jsx
│   ├── hooks/
│   │   └── useCart.js
│   ├── context/
│   │   └── CartContext.jsx
│   └── index.js
│
├── checkout/
│   ├── components/
│   │   ├── CheckoutStepper.jsx
│   │   ├── AddressForm.jsx
│   │   ├── ShippingSelector.jsx
│   │   ├── PaymentForm.jsx
│   │   └── OrderSummary.jsx
│   ├── hooks/
│   │   └── useCheckout.js
│   └── index.js
│
├── orders/
│   ├── components/
│   │   ├── OrderCard.jsx
│   │   ├── OrderTimeline.jsx
│   │   ├── OrderDetail.jsx
│   │   └── ReturnForm.jsx
│   ├── hooks/
│   │   ├── useOrders.js
│   │   └── useOrder.js
│   └── index.js
│
├── seller/
│   ├── components/
│   │   ├── SellerDashboard.jsx
│   │   ├── ShopSetupForm.jsx
│   │   ├── SellerProductForm.jsx
│   │   ├── SellerOrdersTable.jsx
│   │   ├── SellerAnalytics.jsx
│   │   └── PayoutHistory.jsx
│   ├── hooks/
│   │   ├── useSellerDashboard.js
│   │   └── useSellerProducts.js
│   ├── services/
│   │   └── seller.service.js
│   └── index.js
│
├── admin/
│   ├── components/
│   │   ├── AdminDashboard.jsx
│   │   ├── UsersTable.jsx
│   │   ├── ModerationQueue.jsx
│   │   ├── ReportsPanel.jsx
│   │   └── SettingsForm.jsx
│   ├── hooks/
│   │   └── useAdmin.js
│   ├── services/
│   │   └── admin.service.js
│   └── index.js
│
├── delivery/
│   ├── components/
│   │   ├── DeliveryMap.jsx
│   │   ├── DeliveryCard.jsx
│   │   └── DeliveryConfirmation.jsx
│   ├── hooks/
│   │   └── useDelivery.js
│   └── index.js
│
└── support/
    ├── components/
    │   ├── TicketList.jsx
    │   ├── TicketDetail.jsx
    │   ├── ChatMessage.jsx
    │   └── QuickReplyTemplates.jsx
    ├── hooks/
    │   └── useSupport.js
    └── index.js
```

**Principe** : Chaque feature est autonome. Les imports cross-feature se font uniquement via les barrel exports (`index.js`). Une feature ne doit jamais importer directement depuis les dossiers internes d'une autre feature.

---

## 6.5 Architecture des Routes (Nested Routing, Guards)

### 6.5.1 Structure des Routes

```jsx
// src/routes/index.jsx
<Routes>
  {/* Layout minimal (pas de header/footer) */}
  <Route element={<MinimalLayout />}>
    <Route path=\"/login\" element={<LoginPage />} />
    <Route path=\"/register\" element={<RegisterPage />} />
    <Route path=\"/forgot-password\" element={<ForgotPasswordPage />} />
    <Route path=\"/reset-password/:token\" element={<ResetPasswordPage />} />
    <Route path=\"/verify-email\" element={<EmailVerificationPage />} />
    <Route path=\"/maintenance\" element={<MaintenancePage />} />
  </Route>

  {/* Layout principal (header + footer) */}
  <Route element={<MainLayout />}>
    <Route path=\"/\" element={<HomePage />} />
    <Route path=\"/products\" element={<ProductListingPage />} />
    <Route path=\"/product/:slug\" element={<ProductDetailPage />} />
    <Route path=\"/category/:slug\" element={<CategoryPage />} />
    <Route path=\"/search\" element={<SearchResultsPage />} />
    <Route path=\"/compare\" element={<ComparePage />} />
    <Route path=\"/cart\" element={<CartPage />} />
    <Route path=\"/about\" element={<AboutPage />} />
    <Route path=\"/contact\" element={<ContactPage />} />
    <Route path=\"/terms\" element={<TermsPage />} />
    <Route path=\"/privacy\" element={<PrivacyPage />} />

    {/* Routes protégées (authentification requise) */}
    <Route element={<ProtectedRoute />}>
      <Route path=\"/checkout\" element={<CheckoutPage />}>
        <Route index element={<Navigate to=\"shipping\" replace />} />
        <Route path=\"shipping\" element={<ShippingStep />} />
        <Route path=\"payment\" element={<PaymentStep />} />
        <Route path=\"confirmation\" element={<ConfirmationStep />} />
      </Route>
      <Route path=\"/orders\" element={<OrderHistoryPage />} />
      <Route path=\"/orders/:orderId\" element={<OrderDetailPage />} />
      <Route path=\"/orders/:orderId/review\" element={<ReviewPage />} />
      <Route path=\"/orders/:orderId/return\" element={<ReturnRequestPage />} />
      <Route path=\"/profile\" element={<UserProfilePage />} />
      <Route path=\"/settings\" element={<UserSettingsPage />} />
      <Route path=\"/wishlist\" element={<WishlistPage />} />
    </Route>

    {/* Routes vendeur */}
    <Route element={<SellerRoute />}>
      <Route path=\"/seller\" element={<SellerLayout />}>
        <Route index element={<SellerDashboardPage />} />
        <Route path=\"shop\" element={<ShopManagementPage />} />
        <Route path=\"shop/setup\" element={<ShopSetupPage />} />
        <Route path=\"products\" element={<SellerProductsPage />} />
        <Route path=\"products/new\" element={<ProductCreatePage />} />
        <Route path=\"products/:id/edit\" element={<ProductEditPage />} />
        <Route path=\"orders\" element={<SellerOrdersPage />} />
        <Route path=\"orders/:id\" element={<SellerOrderDetailPage />} />
        <Route path=\"analytics\" element={<SellerAnalyticsPage />} />
        <Route path=\"payouts\" element={<SellerPayoutsPage />} />
      </Route>
    </Route>

    {/* Routes admin */}
    <Route element={<AdminRoute />}>
      <Route path=\"/admin\" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path=\"users\" element={<AdminUsersPage />} />
        <Route path=\"users/:id\" element={<AdminUserDetailPage />} />
        <Route path=\"products\" element={<AdminProductsPage />} />
        <Route path=\"moderation\" element={<AdminModerationPage />} />
        <Route path=\"orders\" element={<AdminOrdersPage />} />
        <Route path=\"reports\" element={<AdminReportsPage />} />
        <Route path=\"settings\" element={<AdminSettingsPage />} />
      </Route>
    </Route>

    {/* Routes livreur */}
    <Route element={<DeliveryRoute />}>
      <Route path=\"/delivery\" element={<DeliveryLayout />}>
        <Route index element={<DeliveryListPage />} />
        <Route path=\":id\" element={<DeliveryActivePage />} />
        <Route path=\"history\" element={<DeliveryHistoryPage />} />
        <Route path=\"earnings\" element={<DeliveryEarningsPage />} />
      </Route>
    </Route>

    {/* Routes support */}
    <Route element={<SupportRoute />}>
      <Route path=\"/support\" element={<SupportLayout />}>
        <Route index element={<SupportDashboardPage />} />
        <Route path=\"tickets\" element={<TicketListPage />} />
        <Route path=\"tickets/:id\" element={<TicketDetailPage />} />
        <Route path=\"knowledge-base\" element={<KnowledgeBasePage />} />
      </Route>
    </Route>

    {/* 404 */}
    <Route path=\"*\" element={<NotFoundPage />} />
  </Route>
</Routes>
```

### 6.5.2 Route Guards

```
┌─────────────────────────────────────────────────────────────┐
│                    ROUTE GUARDS FLOW                         │
│                                                              │
│  URL Request                                                 │
│      │                                                       │
│      ▼                                                       │
│  ┌────────────┐                                              │
│  │ Maintenance│──Oui──> MaintenancePage                     │
│  │  Mode?     │                                              │
│  └─────┬──────┘                                              │
│        │ Non                                                 │
│        ▼                                                     │
│  ┌────────────┐                                              │
│  │  Auth      │──Non──> Redirect /login                     │
│  │  Required? │         (with return URL)                    │
│  └─────┬──────┘                                              │
│        │ Oui                                                 │
│        ▼                                                     │
│  ┌────────────┐                                              │
│  │  User      │──Oui──> Redirect /unauthorized              │
│  │  Role OK?  │                                              │
│  └─────┬──────┘                                              │
│        │ Oui                                                 │
│        ▼                                                     │
│  ┌────────────┐                                              │
│  │  Route     │                                              │
│  │  Allowed   │                                              │
│  └────────────┘                                              │
└─────────────────────────────────────────────────────────────┘
```

**Composant `ProtectedRoute`** :

```jsx
// src/routes/ProtectedRoute.jsx
const ProtectedRoute = ({ children, roles }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <FullScreenSpinner />;
  if (!isAuthenticated) return <Navigate to=\"/login\" state={{ from: location }} replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to=\"/unauthorized\" replace />;

  return children || <Outlet />;
};
```

---

## 6.6 Architecture des Services (API Layer, Interceptors)

### 6.6.1 Instance Axios Centralisée

```javascript
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Request Interceptor : ajout du token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response Interceptor : refresh token automatique
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(`${api.defaults.baseURL}/auth/refresh`, {
          refreshToken: localStorage.getItem('refreshToken'),
        });
        localStorage.setItem('accessToken', data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
```

### 6.6.2 Services par Domaine

| Service | Fichier | Endpoints |
|---|---|---|
| Authentification | `auth.service.js` | login, register, logout, verifyEmail, forgotPassword, resetPassword, refreshToken, socialLogin |
| Produits | `product.service.js` | getAll, getBySlug, getFeatured, getByCategory, search, getReviews, createReview |
| Panier | `cart.service.js` | get, addItem, updateItem, removeItem, clear, applyCoupon, removeCoupon |
| Commandes | `order.service.js` | create, getAll, getById, getTracking, requestReturn |
| Vendeur | `seller.service.js` | register, updateShop, getProducts, createProduct, updateProduct, deleteProduct, getOrders, updateOrderStatus, getAnalytics, getPayouts |
| Admin | `admin.service.js` | getDashboard, getUsers, updateUserStatus, getProducts, moderateProduct, getOrders, getReports, getSettings, updateSettings |
| Livraison | `delivery.service.js` | getAvailable, accept, updateStatus, complete, getHistory |
| Support | `support.service.js` | getTickets, getTicket, createTicket, addMessage, resolveTicket, reopenTicket |

---

## 6.7 Architecture des Hooks (Custom Hooks, Shared Logic)

### Hooks Réutilisables

| Hook | Fichier | Rôle |
|---|---|---|
| `useAuth` | `hooks/useAuth.js` | Accès au contexte d'authentification, helpers login/logout/register |
| `useCart` | `hooks/useCart.js` | Accès au contexte panier, helpers add/remove/update |
| `useDebounce` | `hooks/useDebounce.js` | Debounce d'une valeur (pour la recherche), delay configurable |
| `usePagination` | `hooks/usePagination.js` | Gestion de la pagination (page, limit, totalPages, goTo, next, prev) |
| `useLocalStorage` | `hooks/useLocalStorage.js` | Sync bidirectionnelle useState + localStorage |
| `useMediaQuery` | `hooks/useMediaQuery.js` | Détection de breakpoint responsive |
| `useClickOutside` | `hooks/useClickOutside.js` | Fermeture de dropdown/modal au clic extérieur |
| `useInfiniteScroll` | `hooks/useInfiniteScroll.js` | Chargement infini avec Intersection Observer |
| `usePreviousLocation` | `hooks/usePreviousLocation.js` | Historique de navigation pour retour |
| `useConfirmDialog` | `hooks/useConfirmDialog.js` | Confirmation avant action destructive |

### Hooks de Data Fetching (via React Query)

| Hook | Fichier | Rôle |
|---|---|---|
| `useProducts` | `features/products/hooks/useProducts.js` | Query produits avec filtres, pagination, tri |
| `useProduct` | `features/products/hooks/useProduct.js` | Query d'un produit par slug |
| `useOrders` | `features/orders/hooks/useOrders.js` | Query commandes utilisateur |
| `useSellerProducts` | `features/seller/hooks/useSellerProducts.js` | Query produits vendeur |
| `useSellerOrders` | `features/seller/hooks/useSellerOrders.js` | Query commandes vendeur |
| `useAdminUsers` | `features/admin/hooks/useAdminUsers.js` | Query utilisateurs admin |
| `useTickets` | `features/support/hooks/useTickets.js` | Query tickets support |

---

## 6.8 Architecture Context API

### 6.8.1 AuthContext

```jsx
const AuthContext = {
  user: { id, email, fullName, role, avatar, isVerified },
  tokens: { accessToken, refreshToken },
  isAuthenticated: boolean,
  loading: boolean,
  login: async (email, password) => {},
  register: async (data) => {},
  logout: async () => {},
  updateProfile: async (data) => {},
  hasRole: (role) => boolean,
  hasPermission: (permission) => boolean,
};
```

### 6.8.2 CartContext

```jsx
const CartContext = {
  items: [{ productId, variantId, title, price, quantity, image, maxQuantity }],
  total: number,
  itemCount: number,
  shippingCost: number,
  discount: number,
  couponCode: string | null,
  addItem: async (productId, variantId, quantity) => {},
  updateQuantity: async (itemId, quantity) => {},
  removeItem: async (itemId) => {},
  clearCart: async () => {},
  applyCoupon: async (code) => {},
  removeCoupon: () => {},
  isItemInCart: (productId, variantId) => boolean,
};
```

### 6.8.3 ThemeContext

```jsx
const ThemeContext = {
  theme: 'light' | 'dark' | 'system',
  resolvedTheme: 'light' | 'dark',
  setTheme: (theme) => {},
  toggleTheme: () => {},
  daisyUITheme: string,
};
```

### 6.8.4 NotificationContext

```jsx
const NotificationContext = {
  notifications: [{ id, type, message, duration, action }],
  toasts: [{ id, type, title, message }],
  addNotification: (notification) => {},
  removeNotification: (id) => {},
  showToast: (type, title, message) => {},
  success: (message) => {},
  error: (message) => {},
  warning: (message) => {},
  info: (message) => {},
};
```

### Fournisseurs Imbriqués

```
<ThemeProvider>
  <AuthProvider>
    <CartProvider>
      <NotificationProvider>
        <QueryClientProvider>
          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </NotificationProvider>
    </CartProvider>
  </AuthProvider>
</ThemeProvider>
```

---

## 6.9 Architecture Redux Toolkit (si nécessaire)

### 6.9.1 Quand Utiliser Redux

| Utiliser Redux | Utiliser React Query |
|---|---|
| État du checkout wizard multi-étapes | Données serveur (produits, commandes) |
| Filtres synchronisés multi-composants | Cache des réponses API |
| WebSocket state (notifications temps réel) | Pagination, infinite scroll |
| Undo/redo pour certaines actions | Données qui changent fréquemment |

### 6.9.2 Structure Redux Store

```
src/store/
├── index.js              # configureStore
├── middleware/
│   └── logger.js         # Logger middleware (dev)
└── slices/
    ├── authSlice.js       # Auth state persisté
    ├── cartSlice.js       # Panier (si non via Context)
    ├── checkoutSlice.js   # Checkout wizard state
    ├── filterSlice.js     # Filtres produits globaux
    └── uiSlice.js         # UI state (sidebar, modals)
```

### 6.9.3 Exemple de Slice

```javascript
// src/store/slices/checkoutSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { orderService } from '@/services/order.service';

export const createOrder = createAsyncThunk(
  'checkout/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await orderService.create(orderData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Erreur lors de la commande');
    }
  }
);

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    step: 1,
    shippingAddress: null,
    shippingMethod: null,
    paymentMethod: null,
    order: null,
    loading: false,
    error: null,
  },
  reducers: {
    setStep: (state, action) => { state.step = action.payload; },
    setShippingAddress: (state, action) => { state.shippingAddress = action.payload; },
    setShippingMethod: (state, action) => { state.shippingMethod = action.payload; },
    setPaymentMethod: (state, action) => { state.paymentMethod = action.payload; },
    resetCheckout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(createOrder.fulfilled, (state, action) => { state.loading = false; state.order = action.payload; })
      .addCase(createOrder.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  },
});
```

---

## 6.10 Architecture des Appels API (REST, Error Handling, Retry, Loading States)

### 6.10.1 Convention REST

| Méthode HTTP | Opération | Exemple |
|---|---|---|
| `GET` | Récupérer une ressource | `GET /products` → liste ; `GET /products/:id` → détail |
| `POST` | Créer une ressource | `POST /products` → crée un produit |
| `PUT` | Remplacer une ressource | `PUT /products/:id` → remplace entièrement |
| `PATCH` | Modifier partiellement | `PATCH /products/:id/stock` → modifie le stock |
| `DELETE` | Supprimer | `DELETE /products/:id` → supprime |

### 6.10.2 Structure de Réponse API

```json
{
  \"success\": true,
  \"data\": { ... },
  \"meta\": {
    \"page\": 1,
    \"limit\": 20,
    \"total\": 156,
    \"totalPages\": 8
  },
  \"message\": \"Opération réussie\"
}
```

### 6.10.3 Gestion des erreurs API

```javascript
const ERROR_MESSAGES = {
  400: \"Requête invalide. Veuillez vérifier vos données.\",
  401: \"Session expirée. Veuillez vous reconnecter.\",
  403: \"Vous n'avez pas les droits nécessaires.\",
  404: \"La ressource demandée est introuvable.\",
  409: \"Un conflit est survenu. La ressource a peut-être été modifiée.\",
  422: \"Données de validation invalides.\",
  429: \"Trop de requêtes. Veuillez patienter avant de réessayer.\",
  500: \"Erreur serveur. Veuillez réessayer plus tard.\",
  503: \"Service temporairement indisponible.\",
};
```

### 6.10.4 Stratégie de Retry

| Type d'erreur | Retry automatique | Nombre max | Délai |
|---|---|---|---|
| Réseau (timeout, DNS) | Oui | 3 | Exponential backoff: 1s, 2s, 4s |
| 500 / 502 / 503 | Oui | 2 | 3s, 6s |
| 408 (timeout) | Oui | 2 | 2s, 4s |
| 401 (unauthorized) | Non (refresh token d'abord) | - | - |
| 400 / 404 / 422 | Non | - | - |
| 429 (rate limit) | Oui | 1 | Selon header `Retry-After` |

### 6.10.5 Patterns de Loading States

```jsx
const { data, isLoading, isError, error, refetch } = useQuery({
  queryKey: ['products', filters],
  queryFn: () => productService.getAll(filters),
  staleTime: 5 * 60 * 1000,
  cacheTime: 30 * 60 * 1000,
  retry: 2,
  refetchOnWindowFocus: false,
});

if (isLoading) return <ProductGridSkeleton />;
if (isError) return <ErrorState error={error} onRetry={refetch} />;
if (!data?.length) return <EmptyState />;
return <ProductGrid products={data} />;
```

---

## 6.11 Architecture de la Gestion des Erreurs

### 6.11.1 Error Boundaries

```jsx
<ErrorBoundary fallback={<GlobalErrorPage />}>
  <App />
    <ErrorBoundary fallback={<PageErrorFallback />}>
      <Routes>
        <Route ... />
      </Routes>
    </ErrorBoundary>
</ErrorBoundary>
```

### 6.11.2 Stratégie de Notification d'Erreurs

| Type d'erreur | Méthode de notification | Exemple |
|---|---|---|
| Erreur de validation formulaire | Message inline sous le champ | "Ce champ est obligatoire" |
| Erreur API 4xx (utilisateur) | Toast warning (3s) | "Données invalides" |
| Erreur API 5xx (serveur) | Toast error (5s) + lien retry | "Erreur serveur, réessayez" |
| Erreur réseau | Toast error + bouton retry | "Pas de connexion réseau" |
| Erreur non catchée | Error Boundary page | Page d'erreur avec diagnostic |
| Erreur critique système | Page de maintenance | "Service temporairement indisponible" |

### 6.11.3 Composant Toast (DaisyUI)

```jsx
const { showToast } = useNotification();

showToast('success', 'Produit ajouté', 'Le produit a été ajouté à votre panier.');
showToast('error', 'Erreur', 'Impossible de sauvegarder. Réessayez.');
showToast('warning', 'Attention', 'Ce produit est en rupture de stock.');
showToast('info', 'Information', 'Une nouvelle version est disponible.');
```

---

## 6.12 Architecture de la Gestion des États

### 6.12.1 Taxonomie des États

| Type | Source | Durée de vie | Mécanisme | Exemples |
|---|---|---|---|---|
| **État local UI** | Composant | Vie du composant | `useState` | Modal ouvert, input value, hover state |
| **État local formulaire** | Composant | Vie du composant | `useReducer` / Formik | Données formulaire, erreurs validation |
| **État dérivé** | Calcul | Recalculé à chaque render | `useMemo` / `useCallback` | Total panier, filtres actifs |
| **État URL** | Navigateur | Persiste navigation | `useSearchParams` | Page, filtres, tri, recherche |
| **État serveur** | API | Variable | React Query | Produits, commandes, profil |
| **État global app** | App | Vie de l'app | Context / Redux | Auth, thème, notifications |
| **État persisté** | LocalStorage | Persiste refresh | localStorage | Panier guest, préférences |
| **État temporaire** | Session | Vie onglet | sessionStorage | Données transitoires |

### 6.12.2 Règles de Choix du Mécanisme

```
┌─────────────────────────────────────────────────────┐
│  Le state doit-il survivre à la navigation ?        │
│  OUI → URL State (query params)                     │
│  NON ↓                                              │
│                                                     │
│  Le state vient du serveur ?                        │
│  OUI → React Query (server state)                   │
│  NON ↓                                              │
│                                                     │
│  Le state est utilisé par >3 composants distants ?  │
│  OUI → Context ou Redux                             │
│  NON ↓                                              │
│                                                     │
│  Le state est un formulaire complexe multi-étapes ? │
│  OUI → useReducer ou Redux (checkout wizard)        │
│  NON ↓                                              │
│                                                     │
│  → useState / useReducer local                      │
└─────────────────────────────────────────────────────┘
```

---

## 6.13 Architecture du Cache (React Query Patterns)

### 6.13.1 Configuration Globale

```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: 0,
    },
  },
});
```

### 6.13.2 Stratégies par Type de Donnée

| Type de donnée | staleTime | cacheTime | refetchInterval | Exemple |
|---|---|---|---|---|
| Produits catalogue | 10 min | 1 heure | Non | Liste produits |
| Détail produit | 5 min | 30 min | Non | Page produit |
| Panier utilisateur | 0 (always stale) | 30 min | 30s si page active | Panier |
| Commandes | 2 min | 10 min | Non | Liste commandes |
| Dashboard admin | 1 min | 5 min | 60s si page active | Stats temps réel |
| Notifications | 0 (always stale) | 5 min | 10s si page active | Notifications |
| Données utilisateur | 5 min | 30 min | Non | Profil |

### 6.13.3 Invalidation du Cache

```javascript
const queryClient = useQueryClient();

const createProductMutation = useMutation({
  mutationFn: productService.create,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['products'] });
    queryClient.invalidateQueries({ queryKey: ['seller-products'] });
    queryClient.invalidateQueries({ queryKey: ['seller-dashboard'] });
  },
});
```

### 6.13.4 Optimistic Updates

```javascript
const updateCartMutation = useMutation({
  mutationFn: cartService.updateItem,
  onMutate: async ({ itemId, quantity }) => {
    await queryClient.cancelQueries({ queryKey: ['cart'] });
    const previousCart = queryClient.getQueryData(['cart']);
    queryClient.setQueryData(['cart'], (old) => ({
      ...old,
      items: old.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    }));
    return { previousCart };
  },
  onError: (err, variables, context) => {
    queryClient.setQueryData(['cart'], context.previousCart);
    showToast('error', 'Erreur', 'Impossible de mettre à jour le panier.');
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['cart'] });
  },
});
```

---

## 6.14 Architecture des Permissions (RBAC, Route Guards, Component-Level)

### 6.14.1 Modèle RBAC

```
┌───────────────────────────────────────────────────────────┐
│                    RÔLES & PERMISSIONS                     │
│                                                            │
│  Guest (non authentifié)                                   │
│    └── browse, search, view products, view shop            │
│                                                            │
│  Customer (acheteur)                                       │
│    └── all Guest permissions +                             │
│        checkout, manage profile, view orders,              │
│        write reviews, request returns, open tickets        │
│                                                            │
│  Seller (vendeur)                                          │
│    └── all Customer permissions +                          │
│        manage shop, CRUD products, manage orders,          │
│        view analytics, manage payouts                      │
│                                                            │
│  Support Agent                                             │
│    └── all Customer permissions +                          │
│        view tickets, respond tickets, resolve tickets,     │
│        view user profiles, escalate issues                 │
│                                                            │
│  Admin (administrateur)                                    │
│    └── ALL permissions:                                    │
│        manage users, moderate products, manage orders,     │
│        view reports, configure system, manage payouts,     │
│        manage support agents, view analytics global        │
└───────────────────────────────────────────────────────────┘
```

### 6.14.2 Implémentation

```javascript
// src/constants/roles.js
export const ROLES = {
  GUEST: 'guest',
  CUSTOMER: 'customer',
  SELLER: 'seller',
  SUPPORT: 'support',
  ADMIN: 'admin',
};

// src/constants/permissions.js
export const PERMISSIONS = {
  [ROLES.CUSTOMER]: ['checkout', 'review', 'return', 'ticket'],
  [ROLES.SELLER]: ['shop_manage', 'product_crud', 'order_manage', 'analytics', 'payouts'],
  [ROLES.SUPPORT]: ['ticket_manage', 'user_view', 'escalate'],
  [ROLES.ADMIN]: ['*'],
};

// Guard route-level
<Route element={<ProtectedRoute roles={[ROLES.SELLER]} />}>
  <Route path=\"/seller/*\" element={<SellerLayout />} />
</Route>

// Guard component-level
{hasPermission('product_crud') && <Button onClick={createProduct}>Ajouter</Button>}
```

---

## 6.15 Architecture des Thèmes (Dark/Light, DaisyUI Themes)

### 6.15.1 Configuration DaisyUI

```javascript
// tailwind.config.js
module.exports = {
  daisyui: {
    themes: [
      \"light\",
      \"dark\",
      \"corporate\",
      \"business\",
      \"nord\",
    ],
    darkTheme: \"dark\",
    base: true,
    styled: true,
    utils: true,
  },
};
```

### 6.15.2 Mapping des Thèmes

| Thème DaisyUI | Mode | Cas d'usage |
|---|---|---|
| `light` | Clair par défaut | Mode jour, thème principal |
| `dark` | Sombre par défaut | Mode nuit, thème secondaire |
| `corporate` | Clair professionnel | Pages admin, dashboard vendeur |
| `business` | Sombre professionnel | Mode sombre admin |
| `nord` | Palette nordique neutre | Thème alternatif |

### 6.15.3 Système de Thématisation

```javascript
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const resolvedTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    localStorage.setItem('theme', theme);
  }, [theme, resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

## 6.16 Architecture Responsive (Mobile-First, Breakpoints)

### 6.16.1 Stratégie Mobile-First

L'application est conçue **mobile-first** : les styles sont définis pour le plus petit écran puis adaptés aux breakpoints supérieurs.

### 6.16.2 Breakpoints Tailwind CSS

| Breakpoint | Taille | Utilisation |
|---|---|---|
| `sm` | >= 640px | Petit tablette : grille 2 colonnes, navigation élargie |
| `md` | >= 768px | Tablette : sidebar visible, grille 3 colonnes |
| `lg` | >= 1024px | Desktop : layout complet, sidebar fixe |
| `xl` | >= 1280px | Grand desktop : plus d'espace, produits en grille 4 |
| `2xl` | >= 1536px | Ultra-wide : max-width container, espacement plus large |

### 6.16.3 Patterns Responsive

```
┌───────────────────────────────────────────────────────┐
│                RESPONSIVE PATTERNS                      │
│                                                        │
│  Mobile (< 640px)                                      │
│  ┌────────────────────────┐                            │
│  │ [≡] Logo     [🔍][🛒] │  Header hamburger menu     │
│  ├────────────────────────┤                            │
│  │  Produit en pleine     │  Pas de sidebar filtres    │
│  │  largeur               │  Filtres en bottom sheet   │
│  │  1 colonne             │                            │
│  │                        │  Grille : 1-2 colonnes     │
│  │                        │  Pagination simple         │
│  ├────────────────────────┤                            │
│  │ [🏠][🔍][🛒][👤]      │  Bottom navigation bar     │
│  └────────────────────────┘                            │
│                                                        │
│  Tablette (640-1024px)                                 │
│  ┌──────────────────────────┐                          │
│  │ Logo  [🔍🔍🔍] [🛒][👤]│ Header avec recherche    │
│  ├──────────────────────────┤                          │
│  │ [Filtres]  │ Grille 2-3  │  Sidebar filtres visible │
│  │ Sidebar    │ colonnes    │  Grille responsive       │
│  │            │             │                          │
│  ├──────────────────────────┤                          │
│  │        Pagination        │                          │
│  └──────────────────────────┘                          │
│                                                        │
│  Desktop (>= 1024px)                                   │
│  ┌──────────────────────────────────┐                  │
│  │ Logo  [🔍🔍🔍🔍🔍] [🛒][🔔][👤]│ Header complet   │
│  ├──────────────────────────────────┤                  │
│  │ [Filtres]  │    Grille 3-4       │ Sidebar fixe    │
│  │ Sidebar    │    colonnes         │ Layout 2 colonnes│
│  │ fixe       │                     │                  │
│  │            │                     │                  │
│  │            │    Pagination       │                  │
│  └──────────────────────────────────┘                  │
└───────────────────────────────────────────────────────┘
```

---

# CHAPITRE 7 : Arborescence Complète du Projet React

Ce chapitre présente l'arborescence exhaustive du dossier `src/` avec le rôle détaillé de chaque fichier et dossier.

---

```
src/
│
├── main.jsx                              # Point d'entrée : rendu React dans #root, montage du Provider racine
├── App.jsx                               # Composant racine : composition des providers, routes, ErrorBoundary
├── index.css                             # Imports Tailwind CSS (@tailwind base/components/utilities), styles globals custom
│
│
├── components/                           # ═══ COMPOSANTS RÉUTILISABLES (Atomic Design) ═══
│   │
│   ├── atoms/                            # ── ÉLÉMENTS DE BASE ──
│   │   ├── Button.jsx                    # Composant bouton multi-variantes : primary/secondary/ghost/danger/success, tailles sm/md/lg, avec icône optionnelle, loading state (spinner), disabled state. Props: variant, size, isLoading, leftIcon, rightIcon, children, ...rest
│   │   ├── Input.jsx                     # Champ de saisie texte : label, placeholder, icône gauche/droite, erreur, disabled, required, type (text/email/password/number/tel). Intègre le feedback visuel d'erreur (border rouge, message sous champ)
│   │   ├── TextArea.jsx                  # Zone de texte multi-lignes : label, rows, maxLength avec compteur, resize optionnel. Utilisé pour descriptions, commentaires
│   │   ├── Select.jsx                    # Champ select (dropdown DaisyUI) : label, options, placeholder, disabled, onChange. Rend un <select> stylé DaisyUI
│   │   ├── Checkbox.jsx                  # Case à cocher DaisyUI : label, checked, indeterminate state, disabled. Utilisé dans formulaires et filtres
│   │   ├── Radio.jsx                     # Bouton radio DaisyUI : label, value, checked, group name. Utilisé dans les choix mutually exclusive
│   │   ├── Toggle.jsx                    # Interrupteur toggle (switch) DaisyUI : label, checked, disabled. Utilisé pour les settings (mode sombre, notifications)
│   │   ├── Badge.jsx                     # Badge/étiquette : variant (primary/secondary/accent/ghost/info/success/warning/error), size, dot (boolean), children. Utilisé pour statuts, labels, compteur
│   │   ├── Avatar.jsx                    # Avatar utilisateur : image ou initiales fallback, size (xs/sm/md/lg/xl), shape (circle/square), online indicator, badge overlay
│   │   ├── Icon.jsx                      # Wrapper pour Lucide React icons : name (string), size, color, className. Centrale l'import des icônes Lucide
│   │   ├── Spinner.jsx                   # Indicateur de chargement : size, color, overlay (boolean pour plein écran). Utilise DaisyUI loading spinner
│   │   ├── Skeleton.jsx                  # Placeholder de chargement : variant (text/circle/rect/card), width, height, animated. Affiche un shimmer pendant le chargement des données
│   │   ├── Divider.jsx                   # Séparateur horizontal : label optionnel, spacing, className. Sépare visuellement des sections
│   │   ├── Tooltip.jsx                   # Info-bulle au survol : content (string ou ReactNode), position (top/bottom/left/right), children. Wrapper React Tooltip
│   │   ├── Modal.jsx                     # Fenêtre modale DaisyUI : open, onClose, title, size (sm/md/lg/xl/full), closable, actions footer. Gère le focus trap et l'échappement clavier
│   │   ├── Drawer.jsx                    # Panneau coulissant (drawer) : side (left/right/top/bottom), open, onClose, children, title. Utilisé pour panier, filtres mobile, profil
│   │   ├── Dropdown.jsx                  # Menu déroulant : trigger element, items (label, icon, onClick, danger, divider), align. Gère l'ouverture/fermeture et le clic extérieur
│   │   ├── Tabs.jsx                      # Onglets : items (label, key, icon, badge), activeKey, onChange, variant (boxed/lifted). Conteneur Tab + Panel
│   │   ├── Accordion.jsx                 # Accordéon (expand/collapse) : items (title, content), multiple (boolean), defaultOpen. Utilisé dans FAQ, filtres
│   │   ├── Alert.jsx                     # Bandeau d'alerte : variant (info/success/warning/error), dismissible, icon, action button, children
│   │   ├── Breadcrumb.jsx                # Fil d'Ariane : items (label, href, active), separator, maxVisible. Navigation hiérarchique
│   │   ├── Pagination.jsx                # Contrôle de pagination : currentPage, totalPages, onPageChange, siblingCount (pages visibles de chaque côté), showFirst/Last
│   │   ├── ProgressBar.jsx               # Barre de progression : value (0-100), color, size, label, showPercentage. Utilisée pour upload, force mot de passe, completion profil
│   │   ├── RatingStars.jsx               # Affichage/saisie d'évaluation par étoiles : value, max, onChange (si interactif), size, readonly, showValue, reviewCount
│   │   ├── PriceDisplay.jsx              # Affichage de prix : amount, currency, originalPrice (barré), discount, size, format. Gère les formats FR/EN
│   │   ├── QuantitySelector.jsx          # Sélecteur de quantité (-/+) : value, min, max, onChange, size. Utilisé dans panier et page produit
│   │   ├── Image.jsx                     # Composant image optimisé : src, alt, fallbackSrc, lazy (boolean), placeholder, aspectRatio, objectFit. Gère le lazy loading et l'erreur d'image
│   │   ├── Link.jsx                      # Composant lien personnalisé : wraps React Router Link avec styles DaisyUI, hover states, active state
│   │   ├── Card.jsx                      # Carte conteneur : padding, shadow, border, hoverable, children. Utilisé comme conteneur pour de nombreux composants
│   │   ├── EmptyState.jsx                # État vide : icon, title, description, action button/label. Affiché quand aucune donnée n'est disponible
│   │   └── ErrorState.jsx                # État d'erreur : error object, retry callback, title, description. Affiché quand une erreur de chargement survient
│   │
│   ├── molecules/                        # ── BLOCS FONCTIONNELS ──
│   │   ├── SearchBar.jsx                 # Barre de recherche : input + button recherche + icône loupe + auto-complete dropdown. Intègre useDebounce pour les suggestions. Props: onSearch, placeholder, suggestions, isLoading
│   │   ├── FormField.jsx                 # Conteneur de champ de formulaire : label, required, error, hint, children (Input/Select/TextArea). Applique les styles d'erreur et les messages sous champ
│   │   ├── CartItem.jsx                  # Article du panier : miniature image, titre, variante, prix unitaire, QuantitySelector, sous-total, bouton supprimer (Trash2 icon). Utilisé dans CartPage et CartDrawer
│   │   ├── OrderItem.jsx                 # Article d'une commande : miniature, titre, variante, quantité, prix. Utilisé dans OrderCard et OrderDetail
│   │   ├── UserCard.jsx                  # Carte utilisateur : avatar, nom, email, rôle badge, date d'inscription, actions. Utilisé dans admin/users et profil
│   │   ├── FilterChip.jsx                # Filtre en forme de chip/tag : label, value, active, onRemove. Affiché au-dessus de la grille quand des filtres sont actifs
│   │   ├── PriceRangeSlider.jsx          # Slider de plage de prix : min, max, onChange, currency. Deux poignées pour sélectionner une fourchette
│   │   ├── StarRating.jsx                # Affichage en lecture seule de note : rating (number), count (nombre d'avis). Utilisé dans les listes de produits
│   │   ├── ShippingOption.jsx            # Carte d'option de livraison : nom (Standard/Express), délai, prix, icône Truck/Package, radio selection. Utilisé dans le checkout
│   │   ├── PaymentMethodCard.jsx         # Carte de méthode de paiement : nom, icône (Visa/PayPal), dernier chiffres, radio selection, bouton supprimer
│   │   ├── AddressCard.jsx               # Carte d'adresse : nom complet, ligne 1-2, ville, code postal, pays, téléphone, boutons modifier/supprimer, radio selection, badge "Défaut"
│   │   ├── ReviewCard.jsx                # Carte d'avis : avatar auteur, nom, date, étoiles, commentaire, photos, bouton "Utile" (likes), auteur vérifié badge
│   │   ├── NotificationItem.jsx          # Item de notification : icône type, titre, message, timestamp, badge non-lu, onclick
│   │   ├── NotificationBell.jsx          # Cloche de notification dans le header : icône Bell Lucide avec badge compteur, dropdown avec liste des 5 dernières notifications, lien "Voir tout"
│   │   ├── ChatMessage.jsx               # Message de chat/ticket : avatar émetteur, contenu texte, timestamp, fichier joint, alignement (gauche/droite selon émetteur)
│   │   ├── StatusBadge.jsx               # Badge de statut contextuel : status (string), mapping couleur par défaut, personnalisable. Utilisé partout pour les statuts (commande, produit, ticket)
│   │   ├── TimelineItem.jsx              # Élément de timeline verticale : title, description, date, status (completed/current/pending), icon. Utilisé dans le suivi de commande
│   │   ├── FileUpload.jsx                # Zone d'upload de fichiers : drag & drop area, sélection fichier, preview, liste des fichiers avec suppression, max size, accepted types, multiple
│   │   ├── RichTextEditor.jsx            # Éditeur de texte riche (via Tiptap ou Slate) : toolbar basique (gras, italique, liste, lien), contenu HTML, onChange. Utilisé pour descriptions produits et templates
│   │   ├── ColorPicker.jsx               # Sélecteur de couleur : palette de couleurs prédéfinies, input hex personnalisé, preview. Utilisé pour variantes produit et thème boutique
│   │   ├── CategoryTree.jsx              # Arbre de catégories : expand/collapse hiérarchique, checkboxes, compteur de produits par catégorie. Utilisé dans filtres et formulaire produit
│   │   └── KPICard.jsx                   # Carte KPI du dashboard : titre, valeur, variation (↑↓), icône, graphique sparkline optionnel, couleur. Utilisé dans dashboards admin et vendeur
│   │
│   ├── organisms/                        # ── SECTIONS COMPLEXES ──
│   │   ├── Header.jsx                    # En-tête global : Logo, Navigation principale (Catégories dropdown, Marques, Promotions), SearchBar, Icônes (NotificationBell, CartDrawerTrigger, Avatar menu dropdown). Mobile : hamburger menu + drawer
│   │   ├── Footer.jsx                    # Pied de page : Colonnes (À propos, Aide, Légal, Réseaux sociaux), newsletter signup input, copyright, liens rapides. Responsive : empilé sur mobile
│   │   ├── Navbar.jsx                    # Navigation principale desktop : liens horizontaux, dropdown mega-menu catégories, état actif. Utilisé sous le Header
│   │   ├── HeroCarousel.jsx              # Carrousel héro de la page d'accueil : slides avec image, titre, sous-titre, bouton CTA, auto-play (5s), dots de navigation, flèches prev/next. Swiper.js ou custom
│   │   ├── CategoryGrid.jsx              # Grille des catégories principales : cards avec image/icône, nom, compteur produits. Utilisé en page d'accueil et navigation
│   │   ├── ProductGrid.jsx               # Grille de produits : layout responsive (2-4 colonnes), map sur array de products, rend des ProductCard. Gère le chargement (skeletons) et l'état vide
│   │   ├── ProductCard.jsx               # Carte produit : image (hover zoom), titre (truncate 2 lignes), étoiles (rating), prix (avec barré si promotion), badge promotion, vendeur, bouton "Ajouter au panier", badge "Nouveau"/"Promo". Responsive
│   │   ├── FilterSidebar.jsx             # Panneau latéral de filtres : CategoryTree, PriceRangeSlider, étoiles rating, checkboxes (livraison gratuite, vendeur vérifié, en stock), bouton réinitialiser, bouton appliquer (mobile)
│   │   ├── CartDrawer.jsx                # Panneau latéral du panier (drawer right) : liste CartItems, résumé (total), bouton "Voir le panier", bouton "Passer la commande", empty state. S'ouvre depuis l'icône panier dans le Header
│   │   ├── CheckoutStepper.jsx           # Stepper de checkout : 3 étapes (Livraison, Paiement, Confirmation) avec icônes, labels, étape active/current/completed, connexion visuelle entre étapes
│   │   ├── AddressForm.jsx               # Formulaire d'adresse : champs nom, téléphone, adresse 1/2, ville, code postal, pays (dropdown searchable), checkbox "Adresse par défaut", boutons annuler/enregistrer. Validation complète
│   │   ├── PaymentForm.jsx               # Formulaire de paiement : sélection méthode (tabs), formulaire carte bancaire (Stripe Elements ou custom), PayPal button, résumé commande sidebar. Gère le 3D Secure
│   │   ├── OrderTimeline.jsx             # Timeline verticale du statut commande : étapes (Commandée, Confirmée, Préparation, Expédiée, En livraison, Livrée), chaque étape avec date, icône, description, statut (completed/current/pending)
│   │   ├── OrderSummary.jsx              # Résumé de commande : liste articles, sous-total, frais livraison, réduction, total. Utilisé dans checkout et pages commande
│   │   ├── ProductImageGallery.jsx       # Galerie d'images produit : image principale (zoom au survol, lightbox), thumbnails cliquables en bas, navigation prev/next. Gère le lazy loading
│   │   ├── ReviewSection.jsx             # Section avis d'un produit : note globale (RatingStars), filtres (par étoile), liste ReviewCards, bouton "Voir plus", formulaire d'ajout d'avis (si éligible), tri (récent/populaire)
│   │   ├── SellerInfoCard.jsx            # Carte d'informations vendeur : avatar/logo, nom boutique, note, nombre ventes, depuis quand, bouton "Voir la boutique", lien contact
│   │   ├── RelatedProducts.jsx           # Section produits similaires : titre, ProductGrid horizontal scrollable (4-6 produits), navigation flèches. Utilisé en bas de page produit
│   │   ├── FAQSection.jsx                # Section FAQ : titre, liste d'Accordéons avec questions/réponses. Utilisé en page Aide, Contact, produit
│   │   ├── NewsletterForm.jsx            # Formulaire newsletter : email input, bouton "S'abonner", mention RGPD, toast confirmation. Utilisé dans Footer
│   │   ├── ChatWidget.jsx                # Widget de chat flottant (en bas à droite) : bouton ouverture, panneau chat, zone messages, input envoi. Support temps réel via WebSocket
│   │   ├── DataTable.jsx                 # Tableau de données générique : colonnes configurables, tri, pagination, actions par ligne, état de chargement, empty state, export. Utilisé dans dashboards admin/vendeur
│   │   ├── StatsOverview.jsx             # Aperçu de statistiques : grille de KPICards avec données, période sélectionnable. Utilisé dans dashboards
│   │   ├── SalesChart.jsx                # Graphique de ventes (Recharts) : line chart ou bar chart, données par période, légende, tooltip. Utilisé dans analytics
│   │   ├── ActivityTimeline.jsx          # Timeline d'activité récente : liste d'événements avec icône, titre, description, timestamp. Utilisé dans dashboards
│   │   ├── SearchSuggestions.jsx          # Dropdown de suggestions de recherche : liste de produits suggérés, catégories, termes populaires. Apparaît sous SearchBar
│   │   ├── QuickReplyTemplates.jsx       # Templates de réponses rapides : liste de templates cliquables, category filter. Utilisé dans support tickets
│   │   ├── DeliveryMap.jsx               # Carte de livraison (Leaflet/Mapbox) : markers pickup/dropoff, itinéraire, géolocalisation livreur, geofencing. Utilisé dans parcours livreur
│   │   ├── ShopHeader.jsx                # En-tête de boutique vendeur : bannière, logo, nom, note, description, nombre produits. Utilisé en page boutique vendeur
│   │   └── MaintenanceBanner.jsx         # Bandeau de maintenance : message, countdown si prévu, style warning. Affiché quand le mode maintenance est actif
│   │
│   └── templates/                        # ── TEMPLATES DE PAGE ──
│       ├── MainLayout.jsx                # Layout principal : Header + Navbar + Outlet (contenu) + Footer. Utilisé pour les pages publiques (home, produits, panier)
│       ├── AuthLayout.jsx                # Layout authentification : layout centralisé (max-width 480px), logo, formulaire au centre, fond décoratif. Utilisé pour login, register, forgot password
│       ├── DashboardLayout.jsx           # Layout dashboard : sidebar latérale (collapsible) + header dashboard + Outlet. Utilisé pour admin et vendeur
│       ├── AdminLayout.jsx               # Layout admin spécifique : sidebar admin avec menu hiérarchique (Dashboard, Users, Products, Orders, Reports, Settings) + breadcrumb + Outlet
│       ├── SellerLayout.jsx              # Layout vendeur : sidebar vendeur (Dashboard, Shop, Products, Orders, Analytics, Payouts) + header avec nom boutique + Outlet
│       ├── DeliveryLayout.jsx            # Layout livreur : header simplifié + Outlet + bottom bar (nav mobile)
│       ├── SupportLayout.jsx             # Layout support : sidebar (Dashboard, Tickets, Knowledge Base) + Outlet
│       ├── CheckoutLayout.jsx            # Layout checkout : pas de header/footer, stepper en haut, contenu centré, OrderSummary sidebar (desktop)
│       └── MinimalLayout.jsx             # Layout minimal : Outlet seul, aucun header/footer/sidebar. Utilisé pour les pages error, maintenance, vérification email
│
│
├── pages/                                # ═══ PAGES DE L'APPLICATION ═══
│   │
│   ├── Home/
│   │   └── HomePage.jsx                  # Page d'accueil : HeroCarousel, CategoryGrid, FeaturedProducts (ProductGrid), DealsOfDay, TrendingProducts, NewArrivals, BrandsCarousel, Testimonials, NewsletterSection, AppDownloadBanner
│   │
│   ├── Products/
│   │   ├── ProductListingPage.jsx        # Page de listing produits : Breadcrumb, FilterSidebar, ProductGrid, Pagination, SortDropdown, FilterChips, compteur résultats, bouton filtres mobile
│   │   ├── ProductDetailPage.jsx         # Page détail produit : ProductImageGallery, ProductInfo (titre, prix, variantes, stock), AddToCartSection, SellerInfoCard, Description (tabs), ReviewSection, RelatedProducts
│   │   ├── CategoryPage.jsx             # Page catégorie : Breadcrumb hiérarchique, sous-catégories grid, produits filtrés par catégorie, filtres, tri
│   │   ├── SearchResultsPage.jsx         # Page résultats recherche : barre de recherche, compteur, ProductGrid, FilterSidebar, SearchSuggestions, message si aucun résultat
│   │   └── ComparePage.jsx              # Page comparaison : tableau comparatif colonnes par produit, attributs en lignes, surbrillance meilleures valeurs, bouton panier par produit
│   │
│   ├── Cart/
│   │   └── CartPage.jsx                  # Page panier : liste CartItems, CouponInput, résumé (OrderSummary), bouton checkout, empty state, bouton continuer achats
│   │
│   ├── Checkout/
│   │   ├── CheckoutPage.jsx              # Conteneur checkout : CheckoutStepper, Outlet pour chaque étape, gestion du step via URL
│   │   ├── ShippingStep.jsx              # Étape livraison : adresses enregistrées, AddressForm (ajout), ShippingOptions
│   │   ├── PaymentStep.jsx              # Étape paiement : PaymentForm, récapitulatif order, conditions à cocher
│   │   └── ConfirmationStep.jsx          # Étape confirmation : récapitulatif final, bouton "Confirmer et payer"
│   │
│   ├── Orders/
│   │   ├── OrderConfirmationPage.jsx     # Page confirmation commande : animation succès, résumé commande, boutons suivre/continuer achats
│   │   ├── OrderHistoryPage.jsx          # Historique commandes : liste OrderCards, filtres statut/date, pagination
│   │   ├── OrderDetailPage.jsx           # Détail commande : OrderTimeline, articles, adresse, livraison, total, actions (annuler, retour, suivi)
│   │   ├── ReviewPage.jsx               # Page avis : formulaire étoiles + commentaire + photos
│   │   └── ReturnRequestPage.jsx         # Page demande retour : sélection articles, motif, description, photos, choix remboursement
│   │
│   ├── Auth/
│   │   ├── LoginPage.jsx                 # Page connexion : formulaire email/mot de passe, SocialLoginButtons, lien forgot, lien register
│   │   ├── RegisterPage.jsx              # Page inscription : formulaire multi-champs, password strength, SocialLogin, conditions
│   │   ├── ForgotPasswordPage.jsx        # Page mot de passe oublié : input email, bouton envoyer, message confirmation
│   │   ├── ResetPasswordPage.jsx         # Page réinitialisation : nouveau mot de passe + confirmation, token validation
│   │   └── EmailVerificationPage.jsx     # Page vérification email : input code OTP 6 chiffres, resend button, timer
│   │
│   ├── User/
│   │   ├── UserProfilePage.jsx           # Profil utilisateur : avatar, infos perso, modifier profil, historique commandes rapide
│   │   ├── UserSettingsPage.jsx          # Paramètres : onglets (Profil, Sécurité, Notifications, Adresses, Préférences)
│   │   └── WishlistPage.jsx             # Liste de souhaits : grille ProductCards, bouton retirer
│   │
│   ├── Seller/
│   │   ├── SellerRegisterPage.jsx        # Inscription vendeur : formulaire multi-étapes, upload documents
│   │   ├── SellerDashboardPage.jsx       # Dashboard vendeur : KPICards, graphiques ventes, commandes récentes, alertes stock
│   │   ├── ShopSetupPage.jsx             # Configuration boutique : formulaire logo/bannière/description/thème
│   │   ├── ShopManagementPage.jsx        # Gestion boutique : preview boutique, paramètres, URL personnalisée
│   │   ├── SellerProductsPage.jsx        # Liste produits vendeur : DataTable, filtres, actions CRUD, export
│   │   ├── ProductCreatePage.jsx         # Création produit : formulaire complet (ProductForm) avec variantes
│   │   ├── ProductEditPage.jsx           # Édition produit : formulaire pré-rempli, modification
│   │   ├── SellerOrdersPage.jsx          # Commandes vendeur : DataTable, filtres statut, marquer expédiée
│   │   ├── SellerOrderDetailPage.jsx     # Détail commande vendeur : info client, articles, timeline, actions
│   │   ├── SellerAnalyticsPage.jsx       # Analytics : KPICards, SalesChart, TopProducts, DateRangePicker
│   │   └── SellerPayoutsPage.jsx         # Paiements : solde, historique virements, config compte bancaire
│   │
│   ├── Admin/
│   │   ├── AdminDashboardPage.jsx        # Dashboard admin : KPICards globaux, graphiques, alertes, activité récente
│   │   ├── AdminUsersPage.jsx            # Gestion utilisateurs : DataTable, filtres rôle/statut, actions (suspend/ban)
│   │   ├── AdminUserDetailPage.jsx       # Détail utilisateur : profil complet, historique commandes, tickets, actions
│   │   ├── AdminProductsPage.jsx         # Produits : DataTable produits globaux, filtres, actions (suspend/approuver)
│   │   ├── AdminModerationPage.jsx       # Modération : file d'attente produits signalés, actions (approuver/rejeter/suspendre)
│   │   ├── AdminOrdersPage.jsx           # Commandes globales : DataTable, filtres, détail
│   │   ├── AdminReportsPage.jsx          # Rapports : types de rapports, graphiques, export PDF/CSV
│   │   └── AdminSettingsPage.jsx         # Paramètres système : onglets (Général, Commission, Livraison, Paiement, Email, Sécurité, SEO)
│   │
│   ├── Delivery/
│   │   ├── DeliveryListPage.jsx          # Liste livraisons : livraisons assignées, accepter, carte
│   │   ├── DeliveryActivePage.jsx        # Livraison active : carte itinéraire, statuts (pickup/livré), confirmation
│   │   ├── DeliveryHistoryPage.jsx       # Historique livraisons : liste des livraisons passées
│   │   └── DeliveryEarningsPage.jsx      # Gains : solde, historique paiements, stats
│   │
│   ├── Support/
│   │   ├── SupportDashboardPage.jsx      # Dashboard support : tickets ouverts, stats, SLA
│   │   ├── TicketListPage.jsx            # Liste tickets : DataTable, filtres priorité/statut
│   │   ├── TicketDetailPage.jsx          # Détail ticket : chat, actions, historique, réassignation
│   │   └── KnowledgeBasePage.jsx         # Base de connaissances : articles, recherche, catégories
│   │
│   ├── Legal/
│   │   ├── AboutPage.jsx                 # Page À propos : mission, équipe, chiffres clés, timeline
│   │   ├── ContactPage.jsx               # Page contact : formulaire, FAQ, chat, coordonnées
│   │   ├── TermsPage.jsx                 # CGV : contenu statique légal, sections, navigation interne
│   │   ├── PrivacyPage.jsx               # Politique confidentialité : RGPD, cookies, données
│   │   └── CookiePolicyPage.jsx          # Politique cookies : types, finalités, gestion consentement
│   │
│   ├── Error/
│   │   ├── NotFoundPage.jsx              # Page 404 : illustration, message, bouton retour accueil, suggestions
│   │   ├── UnauthorizedPage.jsx          # Page 403 : accès refusé, contact support
│   │   └── MaintenancePage.jsx           # Page maintenance : illustration, countdown, réseaux sociaux
│   │
│   └── Static/
│       └── SellerShopPage.jsx            # Page publique d'une boutique vendeur : ShopHeader, produits du vendeur, filtres
│
│
├── layouts/                              # ═══ LAYOUTS RACINE ═══
│   ├── MainLayout.jsx                    # Importe le template MainLayout, ajoute le ScrollRestoration
│   ├── AuthLayout.jsx                    # Layout auth avec redirection si déjà connecté
│   ├── AdminLayout.jsx                   # Layout admin avec AdminRoute guard
│   ├── SellerLayout.jsx                  # Layout vendeur avec SellerRoute guard
│   ├── DeliveryLayout.jsx                # Layout livreur avec DeliveryRoute guard
│   ├── SupportLayout.jsx                 # Layout support avec SupportRoute guard
│   └── MinimalLayout.jsx                 # Layout sans composants UI (juste Outlet)
│
│
├── routes/                               # ═══ CONFIGURATION DES ROUTES ═══
│   ├── index.jsx                         # Configuration principale du Routeur : toutes les routes avec lazy loading, Suspense fallback
│   ├── ProtectedRoute.jsx                # Guard : vérifie authentification, redirige vers /login avec return URL
│   ├── AdminRoute.jsx                    # Guard : vérifie role admin, redirige vers /unauthorized
│   ├── SellerRoute.jsx                   # Guard : vérifie role seller OU admin
│   ├── DeliveryRoute.jsx                 # Guard : vérifie role delivery OU admin
│   ├── SupportRoute.jsx                  # Guard : vérifie role support OU admin
│   ├── GuestRoute.jsx                    # Guard : accessible uniquement aux non-authentifiés (login, register)
│   └── MaintenanceRoute.jsx              # Guard : vérifie si mode maintenance, redirige vers /maintenance
│
│
├── context/                              # ═══ CONTEXT API ═══
│   ├── AuthContext.jsx                    # Fournisseur d'authentification : user, login, logout, register, isAuthenticated, hasRole
│   ├── CartContext.jsx                    # Fournisseur panier : items, addItem, removeItem, total, coupon (sync server/localStorage)
│   ├── ThemeContext.jsx                   # Fournisseur thème : theme, setTheme, toggleTheme, resolvedTheme (sync localStorage)
│   └── NotificationContext.jsx            # Fournisseur notifications : toasts, showToast, success/error/warning/info
│
│
├── store/                                # ═══ REDUX TOOLKIT (si utilisé) ═══
│   ├── index.js                           # configureStore : combine slices, applique middleware (logger en dev)
│   └── slices/
│       ├── authSlice.js                   # State auth persisté (user, tokens)
│       ├── cartSlice.js                   # State panier (alternative au Context si besoin Redux)
│       ├── checkoutSlice.js               # State checkout wizard multi-étapes
│       ├── filterSlice.js                 # State filtres globaux (synchronisés URL)
│       └── uiSlice.js                     # State UI (sidebar ouverte, theme drawer)
│
│
├── services/                             # ═══ COUCHE API (Axios) ═══
│   ├── api.js                            # Instance Axios centralisée, interceptors request/response, gestion refresh token
│   ├── auth.service.js                   # Login, register, logout, verifyEmail, forgotPassword, resetPassword, socialLogin
│   ├── product.service.js                # getAll, getBySlug, getFeatured, getByCategory, search, getReviews, createReview, compare
│   ├── category.service.js               # getAll, getTree, getBySlug
│   ├── cart.service.js                   # get, addItem, updateItem, removeItem, clear, applyCoupon, removeCoupon
│   ├── order.service.js                  # create, getAll, getById, getTracking, requestReturn, cancel
│   ├── seller.service.js                 # register, updateShop, getShop, getProducts, createProduct, updateProduct, deleteProduct, getOrders, updateOrderStatus, getAnalytics, getPayouts
│   ├── admin.service.js                  # getDashboard, getUsers, updateUserStatus, updateRole, getProducts, moderateProduct, getOrders, getReports, getSettings, updateSettings
│   ├── delivery.service.js               # getAvailable, accept, updateStatus, complete, getHistory, getEarnings
│   ├── support.service.js                # getTickets, getTicket, createTicket, addMessage, resolveTicket, reopenTicket, addFeedback
│   ├── upload.service.js                 # uploadImage, uploadDocument, deleteFile
│   └── payment.service.js                # createPaymentIntent, confirmPayment, getPaymentMethods, refund
│
│
├── hooks/                                # ═══ CUSTOM HOOKS ═══
│   ├── useAuth.js                         # Hook wrapper pour AuthContext : helpers (isAuthenticated, user, hasRole, login, logout)
│   ├── useCart.js                         # Hook wrapper pour CartContext : helpers (items, total, addItem, removeItem)
│   ├── useTheme.js                        # Hook wrapper pour ThemeContext : helpers (theme, setTheme, toggleTheme)
│   ├── useNotification.js                 # Hook wrapper pour NotificationContext : helpers (success, error, warning, info)
│   ├── useDebounce.js                     # Debounce une valeur : useDebounce(value, delay) → debouncedValue. Utilisé pour la recherche
│   ├── useDebouncedCallback.js            # Debounce un callback : useDebouncedCallback(fn, delay) → debouncedFn. Utilisé pour les filtres
│   ├── usePagination.js                   # Gestion pagination : { page, limit, totalPages, setPage, nextPage, prevPage, goToPage }
│   ├── useLocalStorage.js                 # Hook sync localStorage : useLocalStorage(key, initialValue) → [value, setValue]. Lecture/écriture localStorage
│   ├── useMediaQuery.js                   # Détection breakpoint : useMediaQuery(query) → boolean. Utilisé pour responsive et thème système
│   ├── useClickOutside.js                 # Fermeture au clic extérieur : useClickOutside(ref, callback). Utilisé pour dropdowns, modals
│   ├── useInfiniteScroll.js               # Scroll infini : useInfiniteScroll(callback, hasMore) → sentinelRef. Intersection Observer
│   ├── usePreviousLocation.js             # Localisation précédente : usePreviousLocation() → previousLocation. Utilisé pour "retour" contextualisé
│   ├── useConfirmDialog.js                # Dialogue de confirmation : useConfirmDialog() → { confirm, DialogComponent }. Confirmation avant action destructive
│   ├── useScrollLock.js                   # Verrouillage scroll : useScrollLock(isLocked). Utilisé quand un modal est ouvert
│   ├── useIntersectionObserver.js         # Observer d'intersection : useIntersectionObserver(ref, options) → isIntersecting. Lazy loading images
│   ├── useClipboard.js                    # Copier dans le presse-papier : useClipboard() → { copy, copied }. Utilisé pour copier liens, codes
│   └── useKeyboardShortcut.js             # Raccourci clavier : useKeyboardShortcut(key, callback, modifiers). Utilisé pour productivité
│
│
├── utils/                                # ═══ FONCTIONS UTILITAIRES ═══
│   ├── formatCurrency.js                  # Formatage monétaire : formatCurrency(amount, currency='EUR', locale='fr-FR') → \"1 234,56 €\"
│   ├── formatDate.js                      # Formatage date : formatDate(date, format='short') → \"12 janv. 2024\" / \"12 janvier 2024 14h30\"
│   ├── formatNumber.js                    # Formatage nombre : formatNumber(1234567) → \"1 234 567\" (séparateur français)
│   ├── validate.js                        # Validations : validateEmail, validatePassword, validatePhone, validateIBAN, validateSIRET, validateRequired
│   ├── slugify.js                         # Génération slug : slugify(\"Mon Produit\") → \"mon-produit\"
│   ├── truncate.js                        # Troncature texte : truncate(text, maxLength) → \"Texte tronqué...\"
│   ├── capitalize.js                      # Capitalisation : capitalize(\"hello world\") → \"Hello World\"
│   ├── debounce.js                        # Utilitaire debounce générique (sans hook)
│   ├── throttle.js                        # Utilitaire throttle générique
│   ├── getInitials.js                     # Initiales : getInitials(\"Jean Dupont\") → \"JD\"
│   ├── classNames.js                      # Concaténation conditionnelle de classes CSS (alternative à clsx)
│   ├── generateId.js                      # Génération d'ID unique (crypto.randomUUID)
│   ├── storage.js                         # Wrapper localStorage : getItem, setItem, removeItem, clear avec JSON.parse/stringify
│   ├── apiErrorHandler.js                 # Traitement centralisé erreurs API : error → { message, code, details }
│   ├── imageUtils.js                      # Utils images : compressImage, generateThumbnail, getAspectRatio
│   └── constants.js                       # Constantes utilitaires : ORDER_STATUSES, PAYMENT_STATUSES, USER_ROLES (backup)
│
│
├── constants/                            # ═══ CONSTANTES ═══
│   ├── routes.js                          # Toutes les routes de l'app : ROUTES = { HOME: '/', PRODUCTS: '/products', ... } pour éviter les hard-coded strings
│   ├── roles.js                           # Rôles utilisateur : ROLES = { GUEST: 'guest', CUSTOMER: 'customer', SELLER: 'seller', ADMIN: 'admin' }
│   ├── statuses.js                        # Statuts : ORDER_STATUSES, PAYMENT_STATUSES, PRODUCT_STATUSES, TICKET_STATUSES avec labels FR et couleurs
│   ├── currencies.js                      # Devises : CURRENCIES = { EUR: { symbol: '€', code: 'EUR', locale: 'fr-FR' }, ... }
│   ├── themes.js                          # Thèmes : THEMES = { LIGHT: 'light', DARK: 'dark', SYSTEM: 'system' } + mapping DaisyUI
│   ├── api.js                             # Constantes API : BASE_URL, TIMEOUT, RETRY_COUNT, ENDPOINTS
│   ├── sorting.js                         # Options de tri : SORT_OPTIONS = { NEWEST: 'newest', PRICE_ASC: 'price_asc', ... }
│   ├── pagination.js                      # Constantes pagination : DEFAULT_PAGE_SIZE = 20, MAX_PAGE_SIZE = 100
│   ├── shipping.js                        # Options livraison : SHIPPING_METHODS, FREE_SHIPPING_THRESHOLD
│   └── moderation.js                      # Raisons de modération : MODERATION_REASONS = { COUNTERFEIT: 'Contrefaçon', ... }
│
│
├── types/                                # ═══ TYPES / PROPTYPES ═══
│   ├── index.js                           # Export centralisé de tous les PropTypes : UserPropType, ProductPropType, OrderPropType, CartItemPropType, ...
│   ├── user.js                            # PropTypes pour User : { id, email, fullName, role, avatar, isVerified, ... }
│   ├── product.js                         # PropTypes pour Product : { id, slug, title, price, images, variants, ... }
│   ├── order.js                           # PropTypes pour Order : { id, status, items, total, shippingAddress, ... }
│   └── seller.js                          # PropTypes pour Seller : { id, shopName, logo, rating, ... }
│
│
├── assets/                               # ═══ RESSOURCES STATIQUES ═══
│   ├── images/
│   │   ├── logo.svg                       # Logo principal de la plateforme (format SVG)
│   │   ├── logo-white.svg                 # Logo version blanche (pour fond sombre)
│   │   ├── logo-icon.svg                  # Icône seule du logo (favicon, mobile)
│   │   ├── hero/                          # Images du carrousel héro
│   │   │   ├── hero-1.jpg                 # Slide 1 : promotion saisonnière
│   │   │   ├── hero-2.jpg                 # Slide 2 : nouvelles collections
│   │   │   └── hero-3.jpg                 # Slide 3 : livraison gratuite
│   │   ├── categories/                    # Images des catégories principales
│   │   │   ├── electronics.jpg
│   │   │   ├── fashion.jpg
│   │   │   ├── home.jpg
│   │   │   ├── beauty.jpg
│   │   │   └── sports.jpg
│   │   ├── empty/                         # Illustrations d'état vide
│   │   │   ├── empty-cart.svg             # Panier vide
│   │   │   ├── no-results.svg             # Aucun résultat
│   │   │   ├── empty-orders.svg           # Pas de commandes
│   │   │   └── empty-wishlist.svg         # Liste de souhaits vide
│   │   ├── errors/                        # Illustrations d'erreur
│   │   │   ├── 404.svg                    # Page non trouvée
│   │   │   ├── 403.svg                    # Accès refusé
│   │   │   ├── 500.svg                    # Erreur serveur
│   │   │   └── maintenance.svg            # Maintenance
│   │   ├── placeholders/                  # Images placeholder
│   │   │   ├── product-placeholder.jpg    # Placeholder produit sans image
│   │   │   └── avatar-placeholder.jpg     # Placeholder avatar
│   │   └── payment/                       # Logos méthodes de paiement
│   │       ├── visa.svg
│   │       ├── mastercard.svg
│   │       ├── paypal.svg
│   │       └── apple-pay.svg
│   ├── icons/
│   │   └── favicon.ico                    # Favicon du site
│   └── fonts/
│       └── inter-variable.woff2           # Police Inter (variable weight) pour le texte
│
│
├── styles/                               # ═══ STYLES GLOBAUX ═══
│   ├── globals.css                        # Imports Tailwind (@tailwind base/components/utilities), @layer base (html/body), custom scrollbar, selection colors
│   ├── utilities.css                      # Classes utilitaires custom au-delà de Tailwind : .text-balance, .scrollbar-hide, .line-clamp-2
│   └── animations.css                     # Keyframes custom : fadeIn, slideUp, slideDown, scaleIn, shimmer (pour skeletons)
│
│
├── config/                               # ═══ CONFIGURATION ═══
│   ├── index.js                           # Variables d'environnement centralisées : API_URL, APP_NAME, CURRENCY, LOCALE, FEATURE_FLAGS
│   ├── axios.js                           # Configuration spécifique d'Axios (timeout, headers, base URL)
│   └── firebase.js                        # Configuration Firebase (si utilisé pour auth sociale ou storage)
│
│
├── i18n/                                 # ═══ INTERNATIONALISATION ═══
│   ├── index.js                           # Configuration i18n : langue par défaut, fallback, détection automatique
│   ├── fr.json                            # Traductions françaises : { \"nav.home\": \"Accueil\", \"cart.title\": \"Mon panier\", ... }
│   ├── en.json                            # Traductions anglaises
│   └── ar.json                            # Traductions arabes (si support RTL)
│
│
└── tests/                                # ═══ TESTS ═══
    ├── setup.js                           # Configuration test : setupTests (mock localStorage, matchMedia), providers wrapper
    ├── unit/
    │   ├── utils/
    │   │   ├── formatCurrency.test.js     # Tests du formatage monétaire
    │   │   ├── validate.test.js           # Tests des validations
    │   │   └── slugify.test.js            # Tests du slugify
    │   ├── components/
    │   │   ├── Button.test.jsx            # Tests du composant Button (render, clic, disabled, loading)
    │   │   ├── Input.test.jsx             # Tests du composant Input (render, error, required)
    │   │   └── ProductCard.test.jsx       # Tests du ProductCard (render, données, clic panier)
    │   └── hooks/
    │       ├── useDebounce.test.js        # Tests du hook useDebounce
    │       └── usePagination.test.js      # Tests du hook usePagination
    ├── integration/
    │   ├── auth/
    │   │   ├── login.test.jsx             # Test du parcours connexion complet
    │   │   └── register.test.jsx          # Test du parcours inscription complet
    │   ├── cart/
    │   │   └── cartFlow.test.jsx          # Test du parcours panier (ajout, modification, suppression)
    │   └── checkout/
    │       └── checkoutFlow.test.jsx      # Test du parcours checkout complet
    └── e2e/
        ├── auth.spec.js                   # Cypress/Playwright : scénario connexion/inscription
        ├── product.spec.js                # Navigation produits, recherche, détail
        ├── purchase.spec.js               # Parcours achat complet (browse → checkout → confirmation)
        ├── seller.spec.js                 # Parcours vendeur (inscription, ajout produit, gestion commandes)
        └── admin.spec.js                  # Parcours admin (dashboard, modération, gestion utilisateurs)
```

---

# CHAPITRE 8 : Toutes les Pages de l'Application

Ce chapitre décrit exhaustivement chaque page de la plateforme avec ses objectifs, composants, wireframes, interactions, accessibilité, SEO et critères d'acceptation.

---

## 8.1 Page d'Accueil (Home/Landing)

### Objectif
Convertir les visiteurs en acheteurs en présentant les produits phares, les promotions et les catégories principales. Maximiser le taux de clic vers les pages produits et catégories.

### Fonction
Afficher une vue d'ensemble attractive de la marketplace avec des sections thématiques, des appels à l'action et une navigation intuitive vers les produits.

### Composants Utilisés
| Composant | Source DaisyUI/Lucide | Rôle |
|---|---|---|
| `Header` | DaisyUI `navbar` | Navigation principale |
| `SearchBar` | DaisyUI `input-group` + Lucide `Search` | Recherche centrale |
| `HeroCarousel` | Custom + Lucide `ChevronLeft`/`ChevronRight` | Carrousel promotionnel |
| `CategoryGrid` | DaisyUI `card` + Lucide icons par catégorie | Grille de catégories |
| `ProductCard` | DaisyUI `card` + Lucide `Heart`/`ShoppingCart` | Carte produit |
| `ProductGrid` | Custom responsive grid | Grille de produits |
| `NewsletterForm` | DaisyUI `join` + Lucide `Mail` | Inscription newsletter |
| `Footer` | DaisyUI `footer` | Pied de page |
| `Badge` | DaisyUI `badge` | Badge promotions |
| `Button` | DaisyUI `btn` | CTA |

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  LOGO   [🔍 Recherche... 🔍]          [🔔] [🛒(3)] [👤]    │
├──────────────────────────────────────────────────────────────┤
│  [Accueil] [Catégories ▼] [Promotions] [Nouveautés] [Vendeur]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │              HERO CAROUSEL                             │  │
│  │    ════════════════════════════════                    │  │
│  │    Titre promotionnel accrocheur                       │  │
│  │    Sous-titre descriptif                               │  │
│  │    [BOUTON CTA]                                        │  │
│  │                                                        │  │
│  │                    ● ○ ○ ○         ◀ ▶                 │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ── CATÉGORIES POPULAIRES ──────────────────────────────    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│  │ 📱   │ │ 👗   │ │ 🏠   │ │ 💄   │ │ ⚽   │ │ 📚   │    │
│  │Élect.│ │Mode  │ │Maison│ │Beauté│ │Sport │ │Livres│    │
│  │(1.2k)│ │(890) │ │(567) │ │(345) │ │(234) │ │(678) │    │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘    │
│                                                              │
│  ── BONS PLANS DU JOUR ─────────────────────────────────    │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │[IMG]    │ │[IMG]    │ │[IMG]    │ │[IMG]    │          │
│  │-30%     │ │-50%     │ │-20%     │ │-40%     │          │
│  │Produit 1│ │Produit 2│ │Produit 3│ │Produit 4│          │
│  │€49.99   │ │€24.99   │ │€39.99   │ │€29.99   │          │
│  │~~€71.42~~│ │~~€49.98~~│ │~~€49.99~~│ │~~€49.99~~│         │
│  │ ★★★★☆   │ │ ★★★★★   │ │ ★★★★☆   │ │ ★★★★☆   │          │
│  │[Ajouter]│ │[Ajouter]│ │[Ajouter]│ │[Ajouter]│          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                              │
│  ── TENDANCES DU MOMENT ────────────────────────────────    │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Produit │ │ Produit │ │ Produit │ │ Produit │          │
│  │ Trend 1 │ │ Trend 2 │ │ Trend 3 │ │ Trend 4 │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                              │
│  ── NOUVEAUTES ──────────────────────────────────────────   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Produit │ │ Produit │ │ Produit │ │ Produit │          │
│  │ New 1   │ │ New 2   │ │ New 3   │ │ New 4   │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                              │
│  ── NEWSLETTER ──────────────────────────────────────────   │
│  ┌────────────────────────────────────────────────────┐     │
│  │  Inscrivez-vous pour recevoir nos offres           │     │
│  │  [📧 Votre email...        ] [S'abonner]           │     │
│  │  En vous inscrivant, vous acceptez notre politique │     │
│  │  de confidentialité                                │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  À propos │ Aide │ Légal │ Réseaux sociaux    © 2024        │
└──────────────────────────────────────────────────────────────┘
```

### Maquette Textuelle

La page se compose de 7 sections verticales :
1. **Header fixe** : logo à gauche, barre de recherche centrée (60% largeur), icônes notifications/panier/profil à droite
2. **Navigation** : barre de liens sous le header avec catégories en dropdown
3. **Hero** : carrousel en pleine largeur (hauteur 400px desktop, 200px mobile), auto-play 5 secondes, dots de pagination
4. **Catégories** : grille 6 colonnes (desktop), 3 colonnes (tablet), scroll horizontal (mobile), chaque carte avec icône, nom et compteur
5. **Produits** : 3 sections (Bons plans, Tendances, Nouveautés), chacune avec titre + lien "Voir tout", grille 4 colonnes de ProductCard
6. **Newsletter** : section centrée avec fond gris clair, input email + bouton, mention RGPD
7. **Footer** : 4 colonnes (À propos, Aide, Légal, Contact), réseaux sociaux, copyright

### Interactions

| Interaction | Comportement |
|---|---|
| Clic sur catégorie | Navigation vers `/category/:slug` |
| Clic sur ProduitCard | Navigation vers `/product/:slug` |
| Clic sur "Ajouter au panier" sur ProductCard | Ajout au panier (toast confirmation), pas de navigation |
| Clic sur "Voir tout" d'une section | Navigation vers `/products?section=:section` |
| Saisie dans SearchBar | Auto-complete dropdown (debounce 300ms), Enter → `/search?q=:query` |
| Clic sur flèche carrousel | Slide suivant/précédent, animation slide horizontal |
| Scroll carrousel auto | Pause au survol, reprend au mouseleave |
| Clic newsletter "S'abonner" | Appel API + toast succès + reset input |
| Clic cœur sur ProductCard | Ajout/retirer de la wishlist (si authentifié), sinon modal login |

### Animations

| Élément | Animation | Durée |
|---|---|---|
| Hero carousel slides | Slide horizontal (translateX) | 500ms ease-in-out |
| ProductCard au survol | scale(1.02) + ombre augmentée | 200ms |
| ProductCard au clic | scale(0.98) | 100ms |
| Category cards au survol | translateY(-4px) + ombre | 200ms |
| Toast de confirmation | slideDown depuis le haut + fade-in | 300ms |
| Chargement page | Skeleton screens (shimmer) | Continue |
| Apparition sections au scroll | fadeInUp avec Intersection Observer | 400ms |

### Comportement Responsive

| Breakpoint | Layout |
|---|---|
| Mobile (< 640px) | Header hamburger, carrousel pleine largeur, catégories scroll horizontal 2 colonnes, produits 2 colonnes, footer empilé |
| Tablette (640-1024px) | Header avec recherche, catégories 3 colonnes, produits 3 colonnes, footer 2 colonnes |
| Desktop (≥ 1024px) | Header complet, catégories 6 colonnes, produits 4 colonnes, footer 4 colonnes |

### Accessibilité

| Critère | Implémentation |
|---|---|
| Alt text images | Toutes les images hero/catégories/produits ont des alt text descriptifs |
| Navigation clavier | Tab navigation dans le header, carrousel via flèches, CTA focus visible |
| Contraste | Tous les textes respectent WCAG AA (ratio 4.5:1 minimum) |
| ARIA | `aria-label` sur les boutons d'action, `aria-current="page"` sur nav active |
| Skip link | "Aller au contenu principal" visible au focus |
| Reduced motion | Si `prefers-reduced-motion`, désactive auto-play carrousel et animations |

### SEO

| Élément | Valeur |
|---|---|
| `<title>` | "Marketplace Global - Achetez en ligne, millions de produits" |
| `<meta name="description">` | "Découvrez des millions de produits à prix compétitifs. Livraison gratuite dès 50€. Vendeurs vérifiés, paiement sécurisé." |
| `<meta name="keywords">` | "marketplace, e-commerce, shopping en ligne, achat, vente, produits" |
| Open Graph | og:title, og:description, og:image (logo), og:type=website |
| Schema.org | `WebSite` + `SearchAction` (barre de recherche Google sitelinks) |
| H1 | Unique : "Marketplace Global" |
| Canonical | `https://www.marketplace-global.com/` |

### API Utilisées

| API | Méthode | Description |
|---|---|---|
| `/api/v1/products/featured` | GET | Produits mis en avant (section Bons Plans) |
| `/api/v1/products/trending` | GET | Produits tendance |
| `/api/v1/products/new` | GET | Nouveaux arrivages |
| `/api/v1/categories` | GET | Liste des catégories avec compteur |
| `/api/v1/newsletter/subscribe` | POST | Inscription newsletter |

### Validation

| Champ | Règle |
|---|---|
| Email newsletter | Format email valide, max 255 caractères, required |
| Recherche | Min 2 caractères pour déclencher l'auto-complete |

### Messages d'Erreur

| Erreur | Message |
|---|---|
| API catégories échoue | Affichage skeleton, retry silencieux |
| Newsletter email invalide | "Veuillez entrer une adresse email valide" |
| Newsletter déjà inscrit | "Cette adresse est déjà inscrite à notre newsletter" |
| Newsletter erreur serveur | "Une erreur est survenue, veuillez réessayer" |

### Optimisations

- **Lazy loading images** : toutes les images produits avec `loading="lazy"`
- **Virtualisation** : si plus de 50 produits affichés, utiliser Intersection Observer
- **Preloading** : `rel="preload"` sur l'image hero
- **Code splitting** : chaque section chargée en lazy si besoin
- **Compression images** : WebP format, responsive images (srcset)

### Cas Particuliers

- Aucun produit featured → afficher message "Aucune promotion en cours"
- Catégories vides → masquer la section
- Newsletter déjà inscrite → toast info "Vous êtes déjà inscrit"
- Mode maintenance → redirection automatique vers `/maintenance`
- Utilisateur vendeur connecté → afficher lien "Mon dashboard" dans header

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-HOME-01 | La page charge en moins de 3 secondes sur mobile 4G |
| AC-HOME-02 | Le carrousel défile automatiquement toutes les 5 secondes |
| AC-HOME-03 | La recherche auto-complete affiche des suggestions après 300ms de frappe |
| AC-HOME-04 | Chaque ProductCard affiche image, titre, prix, note et bouton panier |
| AC-HOME-05 | Le bouton "Ajouter au panier" fonctionne sans rechargement de page |
| AC-HOME-06 | La newsletter soumet correctement et affiche un toast de confirmation |
| AC-HOME-07 | Toutes les images ont un alt text descriptif |
| AC-HOME-08 | La page est entièrement naviguable au clavier |
| AC-HOME-09 | Le design est responsive sur mobile, tablette et desktop |
| AC-HOME-10 | Le SEO meta tags sont présents et conformes |

---

## 8.2 Page Liste de Produits (Products Listing)

### Objectif
Permettre aux utilisateurs de naviguer, filtrer et trier le catalogue de produits pour trouver ce qu'ils cherchent.

### Fonction
Afficher une grille de produits avec des filtres latéraux, un tri, une pagination et un compteur de résultats.

### Composants Utilisés
| Composant | Source DaisyUI/Lucide | Rôle |
|---|---|---|
| `Breadcrumb` | DaisyUI `breadcrumbs` + Lucide `ChevronRight` | Navigation hiérarchique |
| `FilterSidebar` | DaisyUI `collapse`, `checkbox`, `range` | Filtres latéraux |
| `FilterChip` | DaisyUI `badge` | Filtres actifs |
| `ProductCard` | DaisyUI `card` | Carte produit |
| `ProductGrid` | Custom responsive grid | Grille produits |
| `Pagination` | DaisyUI `join` + Lucide `ChevronLeft`/`ChevronRight` | Navigation pages |
| `SortDropdown` | DaisyUI `select` | Tri |
| `Spinner` | DaisyUI `loading` | Chargement |
| `EmptyState` | Custom + Lucide `PackageOpen` | Aucun résultat |
| `Skeleton` | Custom shimmer | Placeholder chargement |

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  Header + Navigation                                         │
├──────────────────────────────────────────────────────────────┤
│  Accueil > Électronique > Smartphones                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┬──────────────────────────────────────────┐     │
│  │ FILTRES  │  156 résultats                    [▼ Tri]│     │
│  │          │  [Électronique ×] [Marque ×] [Prix ×]   │     │
│  │          │                                          │     │
│  │ Catégorie│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │     │
│  │ [✓] Élec │  │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│       │     │
│  │   [✓]Tel │  │Prod1│ │Prod2│ │Prod3│ │Prod4│       │     │
│  │   [ ]Tab │  │€299 │ │€499 │ │€199 │ │€399 │       │     │
│  │ [ ]Audio │  │★★★★☆│ │★★★★★│ │★★★☆☆│ │★★★★☆│       │     │
│  │          │  └─────┘ └─────┘ └─────┘ └─────┘       │     │
│  │ Prix     │                                          │     │
│  │ [====]   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │     │
│  │ 0  500€  │  │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│       │     │
│  │          │  │Prod5│ │Prod6│ │Prod7│ │Prod8│       │     │
│  │ Note     │  │€149 │ │€599 │ │€89  │ │€249 │       │     │
│  │ ★★★★★    │  │★★★★☆│ │★★★★★│ │★★★★☆│ │★★★☆☆│       │     │
│  │ ★★★★☆    │  └─────┘ └─────┘ └─────┘ └─────┘       │     │
│  │ ★★★☆☆    │                                          │     │
│  │          │  [1] [2] [3] ... [8] [Suivant →]         │     │
│  │ Stock    │                                          │     │
│  │ [✓]En stk│                                          │     │
│  │          │                                          │     │
│  │ Livraison│                                          │     │
│  │ [ ]Grat. │                                          │     │
│  │          │                                          │     │
│  │ Vendeur  │                                          │     │
│  │ [✓]Vérif.│                                          │     │
│  └──────────┴──────────────────────────────────────────┘     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  Footer                                                      │
└──────────────────────────────────────────────────────────────┘
```

### Maquette Textuelle

Layout en deux colonnes : sidebar filtres (250px, gauche) et zone contenu (reste, droite). Le breadcrumb est au-dessus. La barre de résultats affiche le compteur et le sélecteur de tri. Les filtres actifs apparaissent en chips sous la barre. La grille de produits est responsive (4 colonnes desktop, 3 tablette, 2 mobile). La pagination est centrée en bas.

### Interactions

| Interaction | Comportement |
|---|---|
| Clic sur filtre catégorie | Met à jour l'URL `?category=`, requête API, met à jour la grille |
| Clic sur filtre prix | Slider met à jour `?minPrice=&maxPrice=` |
| Clic chip "×" | Retire le filtre correspondant, met à jour URL et grille |
| Changement tri | Met à jour `?sort=`, re-fetch avec nouveau tri |
| Clic pagination | Met à jour `?page=`, scroll en haut de la grille |
| Clic ProductCard | Navigation vers `/product/:slug` |
| Clic "Réinitialiser filtres" | Supprime tous les query params de filtre |
| Clic filtres mobile | Ouvre un Drawer avec les filtres |
| Input recherche dans sidebar | Filtre les options de catégorie |

### Animations

| Élément | Animation | Durée |
|---|---|---|
| Produits chargement | Skeleton shimmer → fade-in des produits | 200ms |
| Changement de page | Fade-out anciens → fade-in nouveaux | 300ms |
| Filtre ajouté/retiré | Chip slide-in / slide-out | 200ms |
| Drawer filtres mobile | Slide depuis la gauche | 300ms |

### Comportement Responsive

| Breakpoint | Layout |
|---|---|
| Mobile | Filtres en drawer (bouton "Filtres" en haut), grille 2 colonnes, pagination simple |
| Tablette | Filtres en drawer ou sidebar réduite, grille 3 colonnes |
| Desktop | Sidebar filtres fixe 250px, grille 3-4 colonnes |

### Accessibilité

- Filtres : `role="group"` avec `aria-label` par section
- Pagination : `aria-label="Page X sur Y"`, `aria-current="page"` sur la page active
- Tri : `<select>` natif accessible, label "Trier par"
- Images : alt text descriptif pour chaque produit
- Skip link vers le contenu principal

### SEO

| Élément | Valeur |
|---|---|
| `<title>` | "Smartphones - Marketplace Global \| 156 résultats" |
| `<meta description>` | "Découvrez notre sélection de smartphones. Comparez les prix, lisez les avis. Livraison rapide." |
| H1 | "Smartphones" (nom de la catégorie) |
| Schema.org | `ItemList` + `Product` (JSON-LD) |
| Canonical | `https://www.marketplace-global.com/products?category=smartphones` |
| Pagination | `rel="next"` / `rel="prev"` |

### API Utilisées

| API | Méthode | Description |
|---|---|---|
| `/api/v1/products` | GET | Liste produits avec filtres, tri, pagination |
| `/api/v1/categories` | GET | Catégories pour le sidebar |
| `/api/v1/categories/:id/products/count` | GET | Compteur par sous-catégorie |

### Validation

| Paramètre | Règle |
|---|---|
| `page` | Entier >= 1, défaut 1 |
| `limit` | Entier entre 1 et 100, défaut 20 |
| `minPrice` | Nombre >= 0 |
| `maxPrice` | Nombre > minPrice |
| `sort` | Enum : newest, price_asc, price_desc, rating, popularity |
| `category` | ID catégorie valide |
| `q` | String, min 2 caractères |

### Messages d'Erreur

| Erreur | Message |
|---|---|
| Aucun résultat | "Aucun produit trouvé pour ces critères. Essayez de modifier vos filtres." |
| Erreur chargement | "Impossible de charger les produits. Réessayez." avec bouton retry |
| Catégorie introuvable | "Cette catégorie n'existe pas" + redirection accueil |

### Optimisations

- **Skeleton loading** pendant le chargement initial
- **Pagination par scroll infini** optionnelle (toggle dans settings)
- **Cache React Query** : staleTime 5 minutes pour les listes produits
- **Debounce filtres** : delay 300ms avant requête API
- **Image lazy loading** : `loading="lazy"` sur toutes les images produits
- **URL synchronisée** : les filtres sont dans les query params (partageable, retour history)

### Cas Particuliers

- Catégorie sans produits → "Aucun produit dans cette catégorie"
- Filtres combinés sans résultat → suggérer d'élargir la recherche
- Mobile : sidebar filtres fermée par défaut, bouton flottant "Filtres"
- More than 1000 results → afficher "Plus de 1000 résultats"
- Produit avec stock 0 → badge "Rupture de stock" sur la carte

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-PLIST-01 | La grille affiche les produits en响应 layout responsive selon le breakpoint |
| AC-PLIST-02 | Les filtres synchronisent correctement avec les query params URL |
| AC-PLIST-03 | La pagination fonctionne et met à jour l'URL |
| AC-PLIST-04 | Le tri réordonne correctement les produits |
| AC-PLIST-05 | Les chips de filtres s'affichent et se retirent correctement |
| AC-PLIST-06 | Le compteur de résultats est exact |
| AC-PLIST-07 | Les filtres mobiles s'ouvrent en drawer |
| AC-PLIST-08 | Les skeletons s'affichent pendant le chargement |
| AC-PLIST-09 | Le retour en arrière préserve les filtres |

---

## 8.3 Page Détail de Produit (Product Detail)

### Objectif
Fournir toutes les informations nécessaires pour encourager l'achat : description complète, images haute qualité, avis clients, prix, variantes et informations vendeur.

### Fonction
Afficher la fiche produit complète avec galerie d'images, sélection de variantes, ajout au panier, avis et produits similaires.

### Composants Utilisés
| Composant | Source DaisyUI/Lucide | Rôle |
|---|---|---|
| `ProductImageGallery` | Custom + Lucide `ZoomIn`/`ChevronLeft`/`ChevronRight` | Galerie images zoomable |
| `VariantSelector` | DaisyUI `btn-group`, `radio` | Sélection taille/couleur |
| `QuantitySelector` | DaisyUI `btn-group` + Lucide `Minus`/`Plus` | Sélecteur quantité |
| `Button` | DaisyUI `btn-primary`/`btn-outline` | Ajouter panier / Acheter |
| `RatingStars` | Lucide `Star` | Note et étoiles |
| `ReviewCard` | DaisyUI `card` + Avatar | Avis clients |
| `SellerInfoCard` | DaisyUI `card` + Avatar | Info vendeur |
| `Tabs` | DaisyUI `tabs` | Onglets Description/Avis/Caractéristiques |
| `Breadcrumb` | DaisyUI `breadcrumbs` | Fil d'Ariane |
| `Badge` | DaisyUI `badge-success` | Badge stock/promotion |
| `PriceDisplay` | Custom | Prix avec barré |
| `RelatedProducts` | ProductGrid horizontal | Produits similaires |
| `Tooltip` | DaisyUI `tooltip` | Info-bulles taille guide |

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  Header + Navigation                                         │
├──────────────────────────────────────────────────────────────┤
│  Accueil > Électronique > Smartphones > iPhone 15 Pro        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────┬──────────────────────────────────┐  │
│  │                     │  iPhone 15 Pro Max 256Go          │  │
│  │   IMAGE PRINCIPALE  │  ★★★★★ (128 avis)               │  │
│  │   (zoom au survol)  │                                  │  │
│  │                     │  €1 199,00   ~~€1 299,00~~       │  │
│  │                     │  -8% Économisez 100€              │  │
│  │   [img1][img2][img3]│                                  │  │
│  │   [img4][img5]      │  Couleur : Titanium Noir         │  │
│  │                     │  [●][○][○][○]                    │  │
│  │                     │                                  │  │
│  │                     │  Stock : En stock (15 disponibles)│  │
│  │                     │                                  │  │
│  │                     │  Quantité :  [- 1 +]             │  │
│  │                     │                                  │  │
│  │                     │  [🛒 AJOUTER AU PANIER]          │  │
│  │                     │  [⚡ ACHETER MAINTENANT]         │  │
│  │                     │                                  │  │
│  │                     │  ♡ Ajouter à la liste de souhaits│  │
│  │                     │                                  │  │
│  │                     │  ┌──────────────────────────┐    │  │
│  │                     │  │ 🚚 Livraison gratuite     │    │  │
│  │                     │  │ estimation : 2-3 jours    │    │  │
│  │                     │  └──────────────────────────┘    │  │
│  └─────────────────────┴──────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────────┐│
│  │ [Description] [Caractéristiques] [Avis (128)] [Livraison]││
│  ├──────────────────────────────────────────────────────────┤│
│  │                                                          ││
│  │  Description du produit...                               ││
│  │                                                          ││
│  │  • Caractéristique 1                                     ││
│  │  • Caractéristique 2                                     ││
│  │  • Caractéristique 3                                     ││
│  │                                                          ││
│  └──────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌──────────────────────────┐                                │
│  │ VENDEUR : TechStore      │                                │
│  │ 🏪 Logo  TechStore       │                                │
│  │ ★★★★☆ (234 avis)        │                                │
│  │ 📦 1 234 ventes          │                                │
│  │ 📅 Depuis janvier 2022   │                                │
│  │ [Voir la boutique →]     │                                │
│  └──────────────────────────┘                                │
│                                                              │
│  ── PRODUITS SIMILAIRES ────────────────────────────────    │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                           │
│  │ Sim1│ │ Sim2│ │ Sim3│ │ Sim4│                           │
│  └─────┘ └─────┘ └─────┘ └─────┘                           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Interactions

| Interaction | Comportement |
|---|---|
| Survole image principale | Zoom x2 de la zone survolée (loupe) |
| Clic thumbnail | Image principale change avec transition fade |
| Clic variante couleur | Change les images, met à jour le prix si différent |
| Clic variante taille | Met à jour le stock disponible, vérifie disponibilité |
| Clic [-/+] quantité | Incrémente/décrémente (min 1, max stock) |
| Clic "Ajouter au panier" | POST `/api/v1/cart/items`, toast succès, met à jour compteur panier header |
| Clic "Acheter maintenant" | Ajoute au panier + redirige vers `/checkout` |
| Clik onglet "Avis" | Charge les avis via API, affiche la liste |
| Clic "Écrire un avis" | Si authentifié et acheté → modal formulaire avis |
| Scroll jusqu'aux avis | Chargement lazy des avis (pagination) |
| Clik "Voir la boutique" | Navigation vers `/seller/:shopSlug` |

### Animations

| Élément | Animation | Durée |
|---|---|---|
| Image principale changement | Crossfade | 300ms |
| Zoom au survol | Scale progressif selon position souris | 0ms (instantané) |
| Ajout au panier | L'icone panier "bounce" +1 | 400ms |
| Changement de variante | Fade transition sur le prix | 200ms |
| Onglets | Slide underline indicator | 200ms |
| Toast confirmation | slideDown + fade-in | 300ms |

### Accessibilité

- Galerie images : `role="img"` avec `aria-label`, navigation flèches au clavier
- Variante : `role="radiogroup"` avec `aria-label="Couleur"`, `aria-checked`
- Quantité : `aria-label="Quantité"`, `aria-live="polite"` pour le changement
- Onglets : `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`
- Avis : `aria-label="Note: 4 sur 5 étoiles"`

### SEO

| Élément | Valeur |
|---|---|
| `<title>` | "iPhone 15 Pro Max 256Go - 1 199,00 € - Marketplace Global" |
| `<meta description>` | "Achetez l'iPhone 15 Pro Max 256Go au prix de 1 199,00 €. Livraison gratuite. 128 avis clients. Vendeur vérifié." |
| Schema.org | `Product` avec `Offer`, `AggregateRating`, `Review` (JSON-LD) |
| Images | `og:image` avec la première image du produit |
| Breadcrumbs | `BreadcrumbList` schema.org |

### API Utilisées

| API | Méthode | Description |
|---|---|---|
| `/api/v1/products/:slug` | GET | Détails du produit |
| `/api/v1/products/:id/reviews` | GET | Avis du produit (paginé) |
| `/api/v1/products/:id/related` | GET | Produits similaires |
| `/api/v1/cart/items` | POST | Ajout au panier |
| `/api/v1/wishlist` | POST | Ajout/retrait wishlist |

### Messages d'Erreur

| Erreur | Message |
|---|---|
| Produit introuvable | Page 404 personnalisée |
| Produit désactivé | "Ce produit n'est plus disponible" |
| Stock insuffisant | "Il ne reste que X articles en stock" |
| Erreur ajout panier | "Impossible d'ajouter au panier. Réessayez." |
| Erreur chargement avis | "Les avis n'ont pas pu être chargés" |

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-PDETAIL-01 | La galerie affiche toutes les images avec zoom fonctionnel |
| AC-PDETAIL-02 | Le changement de variante met à jour le prix, le stock et les images |
| AC-PDETAIL-03 | Le bouton "Ajouter au panier" est disabled si aucun stock |
| AC-PDETAIL-04 | Les avis sont chargés et paginés |
| AC-PDETAIL-05 | Le schema.org Product est correctement implémenté |
| AC-PDETAIL-06 | Le breadcrumb reflète la hiérarchie catégories |
| AC-PDETAIL-07 | Les produits similaires sont affichés en bas de page |

---

## 8.4 Page Catégorie (Category Pages)

### Objectif
Regrouper et afficher tous les produits d'une catégorie spécifique avec une navigation hiérarchique.

### Fonction
Filtrer automatiquement les produits par catégorie, afficher les sous-catégories et permettre des filtres avancés.

### Composants Utilisés
Même composants que `ProductListingPage` avec en plus : `CategoryTree` (sous-catégories), icônes Lucide par catégorie.

### Maquette Textuelle

Le layout est identique à la page de listing produits mais pré-filtre par la catégorie sélectionnée. En haut, les sous-catégories sont affichées en grille de cartes cliquables. Le breadcrumb reflète la hiérarchie complète : Accueil > Électronique > Smartphones.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  Breadcrumb : Accueil > Électronique > Smartphones           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                   │
│  │Apple│ │Samsung│ │Xiaomi│ │Huawei│ │Autres│                   │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                   │
│                                                              │
│  [Sidebar Filtres] │ [Grille Produits + Tri + Pagination]   │
│                    │                                         │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-CAT-01 | La catégorie est automatiquement appliquée comme filtre |
| AC-CAT-02 | Les sous-catégories sont affichées en haut de page |
| AC-CAT-03 | Le breadcrumb reflète la hiérarchie complète |
| AC-CAT-04 | Les filtres spécifiques à la catégorie s'affichent (marque pour électronique, taille pour mode) |
| AC-CAT-05 | L'URL contient le slug de la catégorie |

---

## 8.5 Page Résultats de Recherche (Search Results)

### Objectif
Afficher les résultats pertinents pour une requête de recherche avec des filtres et tri.

### Composants Utilisés
`SearchBar`, `ProductGrid`, `FilterSidebar`, `EmptyState`, `Pagination`, `SearchSuggestions`.

### Maquette Textuelle

La page reprend le layout de listing mais avec un titre "Résultats pour 'XXX'" et un compteur. Les suggestions de recherche apparaissent sous la barre de recherche. Un message spécifique s'affiche si aucun résultat.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  [🔍iphone 15]  156 résultats pour "iphone 15"              │
├──────────────────────────────────────────────────────────────┤
│  Suggestions : iPhone 15 Pro, iPhone 15 Coque, iPhone 15     │
├──────────────────────────────────────────────────────────────┤
│  [Filtres] │ [Grille Produits]                              │
│            │                                                 │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SEARCH-01 | La requête est affichée dans la barre de recherche |
| AC-SEARCH-02 | Les suggestions s'affichent avec debounce 300ms |
| AC-SEARCH-03 | Le terme recherché est highlighté dans les résultats |
| AC-SEARCH-04 | Le message "Aucun résultat" s'affiche avec suggestions |
| AC-SEARCH-05 | La recherche est synchronisée avec l'URL `?q=` |

---

## 8.6 Page Panier (Cart)

### Objectif
Permettre à l'utilisateur de consulter, modifier et valider son panier avant le checkout.

### Fonction
Afficher les articles du panier, permettre modification quantités, suppression, application code promo, et accéder au checkout.

### Composants Utilisés
| Composant | Source DaisyUI/Lucide | Rôle |
|---|---|---|
| `CartItem` | DaisyUI `card` + `btn` + Lucide `Trash2` | Article du panier |
| `QuantitySelector` | DaisyUI `btn-group` + Lucide `Minus`/`Plus` | Modification quantité |
| `OrderSummary` | DaisyUI `card` | Résumé panier |
| `CouponInput` | DaisyUI `input-group` + Lucide `Tag` | Code promo |
| `EmptyState` | Custom + Lucide `ShoppingCart` | Panier vide |
| `Button` | DaisyUI `btn-primary` | Passer à la caisse |

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  Mon Panier (3 articles)                                     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────┬───────────────────────┐    │
│  │                              │  RÉSUMÉ                │    │
│  │  ┌──────────────────────┐    │                       │    │
│  │  │ [IMG] iPhone 15 Pro  │    │  Sous-total : 2 398€ │    │
│  │  │      Titanium Noir   │    │  Livraison : 0€      │    │
│  │  │      [- 2 +] €1 199  │    │  Réduction : -100€   │    │
│  │  │      [🗑 Retirer]    │    │  ─────────────────── │    │
│  │  └──────────────────────┘    │  TOTAL : 2 298€      │    │
│  │                              │                       │    │
│  │  ┌──────────────────────┐    │  [CODE PROMO]         │    │
│  │  │ [IMG] Coque Silicone │    │  [Saisir...][Appliquer]│    │
│  │  │      Noir mat        │    │                       │    │
│  │  │      [- 1 +] €29     │    │  [PASSER LA COMMANDE] │    │
│  │  │      [🗑 Retirer]    │    │                       │    │
│  │  └──────────────────────┘    │  🔒 Paiement sécurisé │    │
│  │                              │  🚚 Livraison gratuite │    │
│  │  ┌──────────────────────┐    │  ↩️ Retour gratuit 30j │    │
│  │  │ [IMG] Câble USB-C    │    │                       │    │
│  │  │      [- 3 +] €19     │    │                       │    │
│  │  │      [🗑 Retirer]    │    │                       │    │
│  │  └──────────────────────┘    │                       │    │
│  │                              │                       │    │
│  │  [← Continuer mes achats]    │                       │    │
│  └──────────────────────────────┴───────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Maquette Textuelle

Layout en deux colonnes : panneau principal (articles, 60%) et résumé sticky (sidebar droite, 40%). Chaque article est une carte horizontale avec image (100x100), informations (titre, variante, prix unitaire), sélecteur quantité et bouton supprimer. Le résumé contient le sous-total, frais de livraison, réduction éventuelle, total et bouton checkout. En mobile, le résumé passe sous les articles.

### Interactions

| Interaction | Comportement |
|---|---|
| Clic [-/+] quantité | Appel API `PUT /cart/items/:id`, met à jour le total |
| Clic "Retirer" | Confirmation (tooltip "Retirer du panier ?"), puis `DELETE /cart/items/:id` |
| Saisie code promo + "Appliquer" | `POST /cart/coupon`, affiche la réduction ou erreur |
| Clic "Passer la commande" | Si authentifié → `/checkout` ; sinon → `/login?redirect=/checkout` |
| Produit indisponible | Badge rouge "Indisponible", bouton "Retirer" |
| Quantité > stock | Message "Seulement X disponibles", max ajusté |

### Messages d'Erreur

| Erreur | Message |
|---|---|
| Produit indisponible | "Ce produit n'est plus disponible. Retirez-le de votre panier." |
| Stock insuffisant | "Seulement X articles disponibles. Quantité ajustée." |
| Code promo invalide | "Code promo invalide ou expiré" |
| Panier vide | "Votre panier est vide" + CTA vers catalogue |

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-CART-01 | Les articles s'affichent avec image, titre, variante, prix |
| AC-CART-02 | La modification de quantité met à jour le total en temps réel |
| AC-CART-03 | La suppression d'un article met à jour le compteur header |
| AC-CART-04 | Le code promo est validé et affiche la réduction |
| AC-CART-05 | Le bouton "Passer la commande" redirige vers login si non connecté |
| AC-CART-06 | Le panier est persisté après reconnexion |
| AC-CART-07 | Le panier vide affiche un empty state avec CTA |

---

## 8.7 Page Checkout (Multi-étapes)

### Objectif
Guider l'utilisateur à travers le processus de commande en 3 étapes claires : Livraison, Paiement, Confirmation.

### Fonction
Collecter l'adresse de livraison, le mode de livraison, le mode de paiement, et finaliser la commande.

### Composants Utilisés
| Composant | Source DaisyUI/Lucide | Rôle |
|---|---|---|
| `CheckoutStepper` | DaisyUI `steps` + Lucide icons | Indicateur d'étapes |
| `AddressForm` | DaisyUI `form-control`, `input`, `select` | Formulaire adresse |
| `AddressCard` | DaisyUI `card` + `radio` | Sélection adresse existante |
| `ShippingOption` | DaisyUI `card` + `radio` + Lucide `Truck` | Option livraison |
| `PaymentForm` | DaisyUI `form-control` + Stripe Elements | Formulaire paiement |
| `OrderSummary` | DaisyUI `card` | Récapitulatif |
| `Button` | DaisyUI `btn-primary` | Actions |

### Wireframe (Étape Paiement)

```
┌──────────────────────────────────────────────────────────────┐
│  [✓ Livraison] ────── [● Paiement] ────── [○ Confirmation]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────┬───────────────────────┐    │
│  │  PAIEMENT                    │  RÉCAPITULATIF        │    │
│  │                              │                       │    │
│  │  Mode de paiement :          │  ┌─────────────────┐  │    │
│  │  (●) Carte bancaire          │  │ [IMG] iPhone 15  │  │    │
│  │  ( ) PayPal                  │  │     x1  1 199€   │  │    │
│  │  ( ) Apple Pay               │  ├─────────────────┤  │    │
│  │                              │  │ [IMG] Coque      │  │    │
│  │  Numéro : [4242 4242 ...]    │  │     x1  29€     │  │    │
│  │  Exp. : [12/26] CVV : [***]  │  ├─────────────────┤  │    │
│  │                              │  │ Sous-total:1228€ │  │    │
│  │  🔒 Données chiffrées SSL    │  │ Livraison:  0€   │  │    │
│  │                              │  │ TOTAL:    1 228€ │  │    │
│  │  [ ] J'accepte les CGV       │  └─────────────────┘  │    │
│  │                              │                       │    │
│  │  [← Retour] [PAYER 1 228 €]  │  Adresse :           │    │
│  │                              │  12 Rue Exemple       │    │
│  │                              │  75001 Paris          │    │
│  │                              │                       │    │
│  │                              │  Livraison :          │    │
│  │                              │  Express (1-2 jours)  │    │
│  └──────────────────────────────┴───────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Interactions

| Interaction | Comportement |
|---|---|
| Sélection adresse | Radio button, met à jour les options de livraison |
| Ajout nouvelle adresse | Formulaire inline se déploie sous la liste |
| Sélection option livraison | Met à jour le total (frais de livraison) |
| Saisie carte bancaire | Validation temps réel (format, Luhn check côté client) |
| Clic "Payer" | `POST /payment/create-intent` → 3D Secure si nécessaire → `POST /orders` → redirection confirmation |
| Clic "Retour" | Revient à l'étape précédente, préserve les données |

### Messages d'Erreur

| Erreur | Message |
|---|---|
| Carte refusée | "Paiement refusé. Vérifiez vos informations." |
| 3D Secure échoué | "Authentification échouée. Réessayez." |
| Erreur réseau | "Erreur de connexion. Votre paiement n'a pas été traité." |
| Session expirée | "Votre session a expiré. Reconnectez-vous." |
| Produit plus disponible | "Un produit de votre panier n'est plus disponible." |

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-CHECKOUT-01 | Le stepper affiche correctement l'étape en cours |
| AC-CHECKOUT-02 | L'adresse est sauvegardée pour les prochaines commandes |
| AC-CHECKOUT-03 | Les frais de livraison sont mis à jour dynamiquement |
| AC-CHECKOUT-04 | Le paiement est sécurisé via Stripe (3D Secure) |
| AC-CHECKOUT-05 | La commande est créée et le panier vidé après succès |
| AC-CHECKOUT-06 | L'utilisateur est redirigé vers la page de confirmation |
| AC-CHECKOUT-07 | Un email de confirmation est envoyé |

---

## 8.8 Page Paiement (Payment)

*Intégrée dans le checkout — voir section 8.7 pour les détails complets.*

La page de paiement est la deuxième étape du checkout. Elle intègre Stripe Elements pour le formulaire de carte bancaire et gère le flow 3D Secure.

### Critères d'Acceptation spécifiques

| ID | Critère |
|---|---|
| AC-PAY-01 | Le formulaire carte utilise Stripe Elements (pas de saisie côté serveur) |
| AC-PAY-02 | Le 3D Secure est déclenché automatiquement si requis par la banque |
| AC-PAY-03 | Les données de carte ne transitent jamais par notre serveur |
| AC-PAY-04 | Le paiement PayPal redirige vers PayPal puis revient |
| AC-PAY-05 | En cas d'échec, l'utilisateur peut réessayer sans tout ressaisir |

---

## 8.9 Page Confirmation de Commande (Order Confirmation)

### Objectif
Confirmer la réussite de la commande et fournir un récapitulatif.

### Fonction
Afficher la confirmation, le numéro de commande, un récapitulatif et les prochaines étapes.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    ✓ (checkmark animé vert)                  │
│                                                              │
│              COMMANDE CONFIRMÉE !                            │
│              Commande #MKP-2024-123456                       │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Récapitulatif                                         │  │
│  │  ────────────────────────────────                      │  │
│  │  iPhone 15 Pro Max          x1     1 199,00 €         │  │
│  │  Coque Silicone Noir        x1        29,00 €         │  │
│  │  ────────────────────────────────                      │  │
│  │  Sous-total                       1 228,00 €          │  │
│  │  Livraison (Express)                9,99 €            │  │
│  │  ────────────────────────────────                      │  │
│  │  TOTAL                          1 237,99 €            │  │
│  │                                                        │  │
│  │  Adresse de livraison :                                │  │
│  │  Jean Dupont                                           │  │
│  │  12 Rue de l'Exemple, 75001 Paris                      │  │
│  │                                                        │  │
│  │  Livraison estimée : 24-25 janvier 2024               │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  [SUIVRE MA COMMANDE]  [CONTINUER MES ACHATS]              │
│                                                              │
│  📧 Un email de confirmation a été envoyé à jean@email.com  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-CONFIRM-01 | L'animation de succès s'affiche avec le numéro de commande |
| AC-CONFIRM-02 | Le récapitulatif est complet et exact |
| AC-CONFIRM-03 | Le bouton "Suivre ma commande" redirige vers `/orders/:id` |
| AC-CONFIRM-04 | Un email de confirmation est envoyé dans les 5 minutes |
| AC-CONFIRM-05 | Le panier est vidé |

---

## 8.10 Page Historique des Commandes (Order History)

### Objectif
Permettre à l'utilisateur de consulter l'ensemble de ses commandes passées.

### Composants Utilisés
`OrderCard`, `StatusBadge`, `Pagination`, `EmptyState`, `FilterChip`, `Spinner`.

### Maquette Textuelle

Liste verticale de cartes de commandes, chacune affichant : numéro, date, statut (badge coloré), nombre d'articles, total. Filtres par statut en haut (Toutes, En cours, Livrées, Retournées). Pagination en bas.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ORDERHIST-01 | Les commandes sont affichées du plus récent au plus ancien |
| AC-ORDERHIST-02 | Le statut est affiché avec le badge de couleur correspondant |
| AC-ORDERHIST-03 | Le clic sur une commande ouvre le détail |
| AC-ORDERHIST-04 | Les filtres par statut fonctionnent |
| AC-ORDERHIST-05 | L'état vide affiche "Aucune commande pour le moment" |

---

## 8.11 Page Détail de Commande (Order Detail)

### Objectif
Fournir le suivi complet d'une commande avec timeline, détails articles et actions.

### Composants Utilisés
`OrderTimeline`, `OrderItem`, `Button`, `StatusBadge`, `AddressCard`, `Breadcrumb`.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  Commande #MKP-2024-123456                                   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  TIMELINE VERTICALE :                                        │
│  ● Commande passée        12 jan. 14:30                     │
│  ● Paiement confirmé      12 jan. 14:31                     │
│  ● En préparation         13 jan. 09:15                     │
│  ● Expédiée               13 jan. 16:00                     │
│  ◐ En livraison           14 jan. 08:00                     │
│  ○ Livrée                                              │
│                                                              │
│  ── ARTICLES ──                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ [IMG] iPhone 15 Pro Max     x1    1 199,00 €       │   │
│  │ [IMG] Coque Silicone Noir   x1       29,00 €       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ── ADRESSE DE LIVRAISON ──                                  │
│  Jean Dupont, 12 Rue de l'Exemple, 75001 Paris              │
│                                                              │
│  ── SUIVI COLIS ──                                           │
│  Transporteur : Chronopost                                   │
│  N° de suivi : CD1234567890                                 │
│  [Suivre le colis →]                                        │
│                                                              │
│  [Demander un retour] [Contacter le support]                │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ORDERDET-01 | La timeline affiche chaque étape avec date et heure |
| AC-ORDERDET-02 | L'étape en cours est mise en évidence |
| AC-ORDERDET-03 | Le lien de suivi externe est fonctionnel |
| AC-ORDERDET-04 | Le bouton "Demander un retour" n'apparaît que si éligible |
| AC-ORDERDET-05 | Les informations de transporteur et suivi sont affichées |

---

## 8.12 Page Profil Utilisateur (User Profile)

### Objectif
Permettre à l'utilisateur de consulter et modifier ses informations personnelles.

### Composants Utilisés
`Avatar`, `Input`, `Button`, `Tabs`, `FormField`, `Image` (upload avatar), `Badge` (statut vérification).

### Maquette Textuelle

Layout en deux colonnes : panneau profil (gauche) avec avatar, nom, email, badge vérifié, et panneau de modification (droite) avec onglets : Informations personnelles, Photo de profil, Préférences.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-PROFILE-01 | L'utilisateur peut modifier son nom, email, téléphone |
| AC-PROFILE-02 | L'upload d'avatar fonctionne avec preview |
| AC-PROFILE-03 | La modification email envoie un email de re-vérification |
| AC-PROFILE-04 | Les modifications sont sauvegardées avec toast succès |
| AC-PROFILE-05 | Le changement de mot de passe nécessite le mot de passe actuel |

---

## 8.13 Page Paramètres Utilisateur (User Settings)

### Objectif
Permettre la gestion des préférences, sécurité, notifications et adresses de l'utilisateur.

### Composants Utilisés
`Tabs`, `Toggle`, `Input`, `Select`, `Button`, `AddressCard`, `AddressForm`, `Alert`.

### Maquette Textuelle

Layout avec onglets latéraux (desktop) ou tabs (mobile) : Profil, Sécurité, Notifications, Adresses, Préférences.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SETTINGS-01 | L'onglet Sécurité permet de changer le mot de passe et activer 2FA |
| AC-SETTINGS-02 | L'onglet Notifications permet d'activer/désactiver les emails, push, SMS |
| AC-SETTINGS-03 | L'onglet Adresses permet d'ajouter, modifier, supprimer des adresses |
| AC-SETTINGS-04 | L'adresse par défaut est marquée visuellement |
| AC-SETTINGS-05 | Le thème sombre/clair peut être changé |

---

## 8.14 Page Dashboard Vendeur (Seller Dashboard)

### Objectif
Fournir une vue d'ensemble des performances du vendeur avec des KPIs et alertes.

### Composants Utilisés
`KPICard`, `SalesChart`, `DataTable`, `ActivityTimeline`, `Badge`, `Button`, `Alert`.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  Dashboard Vendeur — TechStore                               │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │CA Mois│ │Ventes│ │Note  │ │Stock │                       │
│  │12 450€│ │ 156  │ │4.8★  │ │3 alertes│                     │
│  │↑ 12%  │ │↑ 8%  │ │      │ │⚠️     │                       │
│  └──────┘ └──────┘ └──────┘ └──────┘                       │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Graphique ventes 30 derniers jours                  │   │
│  │  [Line Chart]                                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ── COMMANDES RÉCENTES ──                                    │
│  ┌─────┬────────┬──────┬────────┬──────┬────────┐           │
│  │ #   │ Date   │Client│ Total  │Statut│ Action │           │
│  ├─────┼────────┼──────┼────────┼──────┼────────┤           │
│  │12345│14/01   │J.D.  │ 299€  │Nouvelle│[Voir] │           │
│  │12344│13/01   │M.L.  │ 150€  │Prépar. │[Voir] │           │
│  └─────┴────────┴──────┴────────┴──────┴────────┘           │
│                                                              │
│  ── ALERTES STOCK ──                                         │
│  ⚠️ iPhone 15 Coque : 2 articles restants                   │
│  ⚠️ Câble USB-C : 0 articles (rupture)                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SELL-DASH-01 | Les KPIs s'affichent avec la tendance (↑↓) par rapport à la période précédente |
| AC-SELL-DASH-02 | Le graphique affiche les ventes par jour/semaine/mois |
| AC-SELL-DASH-03 | Les commandes récentes sont affichées avec les actions rapides |
| AC-SELL-DASH-04 | Les alertes stock critique s'affichent en haut |
| AC-SELL-DASH-05 | Le lien "Paramètres boutique" est accessible |

---

## 8.15 Page Gestion Boutique Vendeur (Seller Shop Management)

### Objectif
Permettre au vendeur de configurer et personnaliser sa boutique.

### Composants Utilisés
`Image` (upload), `RichTextEditor`, `ColorPicker`, `Input`, `Select`, `Button`, `Preview`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SHOP-01 | Le logo et la bannière sont uploadables avec preview |
| AC-SHOP-02 | Le nom de boutique est vérifié en temps réel (unicité) |
| AC-SHOP-03 | La description utilise un éditeur riche |
| AC-SHOP-04 | La preview de la boutique est mise à jour en temps réel |
| AC-SHOP-05 | Les modifications sont sauvegardées avec confirmation |

---

## 8.16 Page Gestion Produits Vendeur (Seller Products CRUD)

### Objectif
Permettre au vendeur de créer, modifier, dupliquer et supprimer ses produits.

### Composants Utilisés
`DataTable`, `Button`, `Badge`, `Modal`, `ConfirmDialog`, `FileUpload`, `Input`, `Select`, `RichTextEditor`, `VariantTable`.

### Maquette Textuelle

Tableau avec colonnes : miniature, titre, SKU, prix, stock (badge coloré), statut, ventes, date, actions (éditer, dupliquer, supprimer, toggle actif/inactif). Filtres par statut, catégorie, recherche. Bouton "Ajouter un produit" en haut à droite.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SELL-PROD-01 | La création de produit accepte toutes les variantes (taille, couleur) |
| AC-SELL-PROD-02 | L'édition pré-remplit le formulaire avec les données existantes |
| AC-SELL-PROD-03 | La suppression demande confirmation et vérifie les commandes en cours |
| AC-SELL-PROD-04 | Le drag & drop d'images fonctionne avec réordonnancement |
| AC-SELL-PROD-05 | Le SKU est vérifié en temps réel pour l'unicité |
| AC-SELL-PROD-06 | La duplication crée un brouillon avec les mêmes données |
| AC-SELL-PROD-07 | Le toggle actif/inactif met à jour le statut sans rechargement |

---

## 8.17 Page Gestion Commandes Vendeur (Seller Orders)

### Objectif
Permettre au vendeur de traiter et suivre les commandes reçues.

### Composants Utilisés
`DataTable`, `StatusBadge`, `Modal`, `Input`, `Button`, `OrderTimeline`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SELL-ORD-01 | Les commandes sont affichées avec les statuts par onglets |
| AC-SELL-ORD-02 | Le marquage "Expédiée" demande le numéro de suivi |
| AC-SELL-ORD-03 | Le détail de la commande affiche les infos client (anonymisées) |
| AC-SELL-ORD-04 | Les filtres par statut et date fonctionnent |

---

## 8.18 Page Analytics Vendeur (Seller Analytics)

### Objectif
Fournir des insights sur les performances de vente du vendeur.

### Composants Utilisés
`KPICard`, `SalesChart`, `TopProductsChart`, `DateRangePicker`, `Select`, `ExportButton`.

### Maquette Textuelle

En haut, 5 KPI cards (CA, ventes, panier moyen, note, taux retour). En dessous, graphique de ventes (line chart) avec sélecteur de période. En bas, tableau des top produits et répartition par catégorie (pie chart).

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SELL-ANA-01 | Les données sont filtrables par période (7j, 30j, 90j, 1an, personnalisé) |
| AC-SELL-ANA-02 | Le graphique est interactif (hover = tooltip avec données exactes) |
| AC-SELL-ANA-03 | Les top produits sont triés par ventes décroissantes |
| AC-SELL-ANA-04 | L'export CSV/Excel fonctionne |

---

## 8.19 Page Paiements Vendeur (Seller Payouts)

### Objectif
Permettre au vendeur de consulter ses revenus et configurer ses virements.

### Composants Utilisés
`KPICard`, `DataTable`, `Input` (IBAN), `Select`, `Button`, `Alert`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SELL-PAY-01 | Le solde disponible est affiché en temps réel |
| AC-SELL-PAY-02 | L'historique des virements est complet |
| AC-SELL-PAY-03 | La configuration IBAN est validée côté client |
| AC-SELL-PAY-04 | La commission marketplace est affichée |

---

## 8.20 Page Dashboard Admin (Admin Dashboard)

### Objectif
Fournir une vue d'ensemble globale de la plateforme avec des KPIs et alertes.

### Composants Utilisés
`KPICard`, `SalesChart`, `ActivityTimeline`, `Alert`, `Badge`, `StatsOverview`.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  Administration — Tableau de bord                            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │ CA   │ │Cmdes │ │Users │ │Vendeurs│ │Litiges│              │
│  │125k€ │ │2 345 │ │12 456│ │  234  │ │  12  │              │
│  │↑ 15% │ │↑ 10% │ │↑ 20% │ │↑ 5%   │ │↓ 30% │              │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘              │
│                                                              │
│  ┌───────────────────────────┬────────────────────────────┐  │
│  │ Évolution CA 12 mois     │  Top catégories             │  │
│  │ [Line Chart]             │  [Pie Chart]               │  │
│  └───────────────────────────┴────────────────────────────┘  │
│                                                              │
│  ── ALERTES ──                                               │
│  ⚠️ 5 produits signalés en attente de modération            │
│  ⚠️ 3 litiges ouverts depuis > 48h                          │
│  ⚠️ Stock critique sur 12 produits                          │
│                                                              │
│  ── ACTIVITÉ RÉCENTE ──                                      │
│  ● Nouveau vendeur inscrit : TechStore (il y a 2h)          │
│  ● Produit signalé : Contrefaçon (il y a 4h)               │
│  ● Remboursement effectué : #12345 (il y a 6h)             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ADMIN-DASH-01 | Les KPIs sont mis à jour en temps réel (polling 60s) |
| AC-ADMIN-DASH-02 | Les alertes sont classées par priorité |
| AC-ADMIN-DASH-03 | L'activité récente affiche les 20 derniers événements |
| AC-ADMIN-DASH-04 | Le graphique CA est interactif et filtrable par période |

---

## 8.21 Page Gestion Utilisateurs Admin (Admin Users)

### Objectif
Permettre à l'administrateur de gérer tous les comptes utilisateurs.

### Composants Utilisés
`DataTable`, `Badge`, `Modal`, `Input`, `Select`, `Button`, `Avatar`, `ConfirmDialog`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ADMIN-USR-01 | Le tableau affiche avatar, nom, email, rôle, statut, date inscription |
| AC-ADMIN-USR-02 | Les filtres par rôle et statut fonctionnent |
| AC-ADMIN-USR-03 | La suspension demande un motif obligatoire |
| AC-ADMIN-USR-04 | Le bannissement empêche la connexion et affiche un message |
| AC-ADMIN-USR-05 | L'export CSV contient toutes les colonnes |

---

## 8.22 Page Modération Produits Admin (Admin Product Moderation)

### Objectif
Permettre à l'administrateur de modérer les produits signalés.

### Composants Utilisés
`DataTable`, `Badge`, `Modal`, `Input` (motif), `Button`, `Image`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ADMIN-MOD-01 | Les produits signalés sont affichés avec la raison du signalement |
| AC-ADMIN-MOD-02 | L'action "Approuver" retire le produit de la file |
| AC-ADMIN-MOD-03 | L'action "Rejeter" supprime le produit et notifie le vendeur |
| AC-ADMIN-MOD-04 | L'action "Suspendre" désactive le produit et notifie le vendeur |
| AC-ADMIN-MOD-05 | Le motif est obligatoire pour toute action de rejet/suspension |

---

## 8.23 Page Commandes Admin (Admin Orders)

### Objectif
Permettre à l'administrateur de consulter et gérer toutes les commandes de la plateforme.

### Composants Utilisés
`DataTable`, `StatusBadge`, `Modal`, `Button`, `Input`, `Select`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ADMIN-ORD-01 | Toutes les commandes sont affichées avec filtres avancés |
| AC-ADMIN-ORD-02 | L'admin peut forcer un changement de statut |
| AC-ADMIN-ORD-03 | L'admin peut initier un remboursement |
| AC-ADMIN-ORD-04 | Les détails de la commande incluent les infos vendeur et client |

---

## 8.24 Page Rapports et Statistiques Admin (Admin Reports/Analytics)

### Objectif
Fournir des rapports détaillés sur l'activité de la plateforme.

### Composants Utilisés
`KPICard`, `SalesChart`, `DataTable`, `DateRangePicker`, `Button` (Export), `Select`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ADMIN-RPT-01 | Les types de rapports incluent : Ventes, Utilisateurs, Produits, Financier |
| AC-ADMIN-RPT-02 | L'export PDF/CSV/Excel fonctionne |
| AC-ADMIN-RPT-03 | La comparaison période à période est affichée |
| AC-ADMIN-RPT-04 | Les graphiques sont interactifs avec tooltips |

---

## 8.25 Page Paramètres Admin (Admin Settings)

### Objectif
Permettre à l'administrateur de configurer les paramètres globaux de la plateforme.

### Composants Utilisés
`Tabs`, `Input`, `Select`, `Toggle`, `Button`, `Alert`.

### Maquette Textuelle

Onglets latéraux : Général, Commission, Livraison, Paiement, Email, Sécurité, SEO. Chaque onglet contient un formulaire avec les paramètres correspondants.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ADMIN-SET-01 | Le mode maintenance peut être activé/désactivé |
| AC-ADMIN-SET-02 | La commission par catégorie est configurable |
| AC-ADMIN-SET-03 | Les méthodes de paiement actives sont gérables |
| AC-ADMIN-SET-04 | Les paramètres email (SMTP) sont testables |
| AC-ADMIN-SET-05 | Les modifications sont sauvegardées avec confirmation |

---

## 8.26 Page Connexion (Login)

### Objectif
Permettre aux utilisateurs de s'authentifier.

### Composants Utilisés
`Input`, `Button`, `SocialLoginButtons`, `FormField`, `Link`, `Alert`.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│              ┌──────────────────────────────┐               │
│              │         LOGO                 │               │
│              │                              │               │
│              │  Connexion à votre compte    │               │
│              │                              │               │
│              │  Email                       │               │
│              │  [jean@email.com      ]      │               │
│              │                              │               │
│              │  Mot de passe                │               │
│              │  [************     ] 👁      │               │
│              │                              │               │
│              │  [Se connecter]              │               │
│              │                              │   OU          │
│              │  [🔵 Google] [🟣 Facebook]   │               │
│              │                              │               │
│              │  Mot de passe oublié ?       │               │
│              │  Pas encore de compte ?      │               │
│              │  Créer un compte             │               │
│              └──────────────────────────────┘               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-LOGIN-01 | Le formulaire valide email et mot de passe avant soumission |
| AC-LOGIN-02 | Le toggle visibilité mot de passe fonctionne |
| AC-LOGIN-03 | Les connexions sociales (Google, Facebook) redirigent correctement |
| AC-LOGIN-04 | Le message d'erreur est générique ("Email ou mot de passe incorrect") |
| AC-LOGIN-05 | La connexion avec 2FA redirige vers `/2fa-verify` |
| AC-LOGIN-06 | Après connexion, l'utilisateur est redirigé vers la page d'origine |
| AC-LOGIN-07 | Le panier guest est synchronisé après connexion |

---

## 8.27 Page Inscription (Register)

### Objectif
Permettre aux nouveaux utilisateurs de créer un compte.

### Composants Utilisés
`Input`, `FormField`, `Button`, `Checkbox`, `SocialLoginButtons`, `PasswordField`, `PasswordStrengthIndicator`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-REGISTER-01 | Le formulaire valide tous les champs avant soumission |
| AC-REGISTER-02 | L'indicateur de force du mot de passe affiche la complexité |
| AC-REGISTER-03 | La case "Conditions d'utilisation" est obligatoire |
| AC-REGISTER-04 | L'email déjà utilisé affiche une erreur sous le champ |
| AC-REGISTER-05 | Après inscription, redirection vers `/verify-email` |
| AC-REGISTER-06 | Un email de vérification est envoyé |

---

## 8.28 Page Mot de Passe Oublié (Forgot Password)

### Objectif
Permettre de réinitialiser le mot de passe via email.

### Composants Utilisés
`Input`, `Button`, `Alert`, `Link`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-FORGOT-01 | L'email est validé avant soumission |
| AC-FORGOT-02 | Un message de confirmation s'affiche toujours (même si l'email n'existe pas, par sécurité) |
| AC-FORGOT-03 | Le lien dans l'email expire après 24h |
| AC-FORGOT-04 | Le rate limit est appliqué (max 3 demandes par heure) |

---

## 8.29 Page Réinitialisation Mot de Passe (Reset Password)

### Objectif
Permettre de définir un nouveau mot de passe via le lien reçu par email.

### Composants Utilisés
`Input`, `FormField`, `Button`, `PasswordField`, `PasswordStrengthIndicator`, `Alert`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-RESET-01 | Le token est validé à l'ouverture de la page |
| AC-RESET-02 | Le token expiré affiche un message avec lien pour renvoyer |
| AC-RESET-03 | Le nouveau mot de passe est confirmé |
| AC-RESET-04 | Après succès, redirection vers `/login` avec message |

---

## 8.30 Page Vérification Email (Email Verification)

### Objectif
Vérifier l'adresse email de l'utilisateur via un code OTP.

### Composants Utilisés
`Input` (6 cases OTP), `Button`, `Alert`, `Spinner`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-VERIFY-01 | Le code OTP est saisi en 6 cases séparées |
| AC-VERIFY-02 | La saisie automatique passe à la case suivante |
| AC-VERIFY-03 | Le bouton "Renvoyer" est désactivé pendant 60 secondes |
| AC-VERIFY-04 | Le code incorrect affiche le nombre de tentatives restantes |
| AC-VERIFY-05 | Après vérification, redirection vers `/login` avec succès |

---

## 8.31 Page Support / Centre d'Aide (Support/Help Center)

### Objectif
Permettre aux utilisateurs de trouver des réponses à leurs questions et de contacter le support.

### Composants Utilisés
`FAQSection`, `Accordion`, `Input` (recherche), `Button`, `Card`, `Badge`.

### Maquette Textuelle

En haut, barre de recherche de la base de connaissances. En dessous, catégories d'articles (Commandes, Paiement, Livraison, Compte, Retours). En bas, formulaire de contact rapide et lien vers ouverture de ticket.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-SUPPORT-01 | La recherche d'articles fonctionne en temps réel |
| AC-SUPPORT-02 | Les FAQ sont regroupées par catégorie |
| AC-SUPPORT-03 | Le formulaire de contact est fonctionnel |
| AC-SUPPORT-04 | Le lien "Ouvrir un ticket" redirige vers le formulaire |

---

## 8.32 Page Contact (Contact)

### Objectif
Fournir un moyen de contact direct avec l'équipe de la plateforme.

### Composants Utilisés
`Input`, `Textarea`, `Select`, `Button`, `Alert`, `Card`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-CONTACT-01 | Le formulaire contient : nom, email, sujet (dropdown), message |
| AC-CONTACT-02 | La validation est complète avant soumission |
| AC-CONTACT-03 | Un email de confirmation est envoyé après soumission |
| AC-CONTACT-04 | Le toast de succès s'affiche |

---

## 8.33 Page À Propos (About Us)

### Objectif
Présenter la mission, les valeurs et l'équipe derrière la plateforme.

### Composants Utilisés
`Card`, `Image`, `TimelineItem`, `StatsCard`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-ABOUT-01 | La page contient la mission, l'histoire, l'équipe |
| AC-ABOUT-02 | Les chiffres clés (vendeurs, produits, clients) sont affichés |
| AC-ABOUT-03 | La page est responsive |

---

## 8.34 Page Conditions Générales de Vente (Terms of Service)

### Objectif
Présenter les conditions juridiques d'utilisation de la plateforme.

### Composants Utilisés
`Card`, `Accordion` (sections), `Link`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-TERMS-01 | Le contenu est complet et légalement valide |
| AC-TERMS-02 | La navigation interne (sommaire) fonctionne |
| AC-TERMS-03 | La date de dernière mise à jour est affichée |

---

## 8.35 Page Politique de Confidentialité (Privacy Policy)

### Objectif
Informer les utilisateurs sur la collecte et l'utilisation de leurs données (RGPD).

### Composants Utilisés
`Card`, `Accordion`, `Link`.

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-PRIVACY-01 | La politique est conforme au RGPD |
| AC-PRIVACY-02 | Les types de données collectées sont listés |
| AC-PRIVACY-03 | Les droits des utilisateurs sont mentionnés |
| AC-PRIVACY-04 | Les cookies et tracking sont expliqués |

---

## 8.36 Page 404 (Not Found)

### Objectif
Informer l'utilisateur que la page demandée n'existe pas et l'orienter.

### Composants Utilisés
`Image` (illustration 404), `Button`, `Link`, `SearchBar`.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    [Illustration 404]                        │
│                                                              │
│              Oups ! Page introuvable                         │
│                                                              │
│    La page que vous recherchez n'existe pas ou a été         │
│    déplacée.                                                 │
│                                                              │
│    [RETOUR À L'ACCUEIL]                                      │
│                                                              │
│    Ou essayez de chercher :                                  │
│    [🔍 Rechercher...                                    ]    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-404-01 | L'illustration est affichée avec un message clair |
| AC-404-02 | Le bouton "Retour à l'accueil" fonctionne |
| AC-404-03 | La barre de recherche est fonctionnelle |
| AC-404-04 | Le code HTTP renvoyé est 404 |

---

## 8.37 Page Maintenance

### Objectif
Informer les utilisateurs que la plateforme est temporairement indisponible.

### Composants Utilisés
`Image` (illustration maintenance), `Countdown`, `SocialLinks`.

### Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    [Illustration maintenance]                │
│                                                              │
│              maintenance en cours                            │
│                                                              │
│    Nous effectuons une maintenance programmée.               │
│    Nous serons de retour dans :                              │
│                                                              │
│              02 : 15 : 30                                    │
│              Heures  Min   Sec                               │
│                                                              │
│    Suivez-nous sur les réseaux sociaux pour les mises à     │
│    jour : [Twitter] [Facebook] [Instagram]                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Critères d'Acceptation

| ID | Critère |
|---|---|
| AC-MAINT-01 | Le countdown affiche le temps restant en temps réel |
| AC-MAINT-02 | Les liens réseaux sociaux sont fonctionnels |
| AC-MAINT-03 | La page est accessible sans JavaScript (message statique fallback) |
| AC-MAINT-04 | Le code HTTP renvoyé est 503 |

---

# CHAPITRE 9 : Documentation Complete de Tous les Composants React

---

## Table des matieres du Chapitre 9

- 9.1 Composants de Navigation (Navbar, Logo, SearchBar, CartIcon, UserMenu, MobileMenu, Sidebar, Footer, Header)
- 9.2 Composants de Produit (ProductCard, ProductGrid, CartItem, OrderCard, UserCard, ShopCard, ReviewCard, StatsCard)
- 9.3 Composants de Formulaire (Button, Input, Textarea, Select, Checkbox, Radio, Toggle, DatePicker, FileUpload)
- 9.4 Composants de Modales et Overlays (Modal, Drawer, Toast, Alert, Popover, Tooltip)
- 9.5 Composants de Donnees et Navigation (Badge, Table, DataTable, Pagination, Tabs, Accordion, Breadcrumb, Stepper)
- 9.6 Composants de Feedback (ProgressBar, Rating, Skeleton, Spinner, Avatar)
- 9.7 Composants de Mise en Page (Card, Divider, Carousel, EmptyState, ErrorState)
- 9.8 Composants Specialises E-commerce (FilterPanel, CategoryTree, PriceRangeSlider, ChatWidget, VideoPlayer, MapComponent, ShareButtons, SocialLoginButtons, TermsCheckbox)

---

## 9.1 Composants de Navigation

---

### 9.1.1 Navbar

**Nom du composant :** Navbar

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'default' \| 'transparent' \| 'solid' | 'default' | Non | Variante visuelle |
| sticky | boolean | true | Non | Fixe la navbar au scroll |
| elevated | boolean | false | Non | Ombre portee sous la navbar |
| className | string | '' | Non | Classes CSS additionnelles |
| showSearch | boolean | true | Non | Affiche la barre de recherche |
| showCart | boolean | true | Non | Affiche l'icone du panier |
| showUserMenu | boolean | true | Non | Affiche le menu utilisateur |
| logoSrc | string | undefined | Non | URL du logo |
| logoAlt | string | 'MarketPlace' | Non | Texte alternatif du logo |
| links | NavLink[] | [] | Non | Liens de navigation |

**Interface NavLink :**

```typescript
interface NavLink {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
  badge?: number | string;
  children?: NavLink[];
}
```

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| isScrolled | boolean | Indique si la page a ete scrollée |
| isMobileMenuOpen | boolean | Controle l'ouverture du menu mobile |
| isSearchOpen | boolean | Controle la recherche mobile |
| isUserMenuOpen | boolean | Controle le menu deroulant utilisateur |

**Comportement :**
- La Navbar se fixe en haut de l'ecran lors du scroll (si sticky est true)
- En mobile (breakpoint < 768px), les elements secondaires sont remplaces par un bouton hamburger
- La recherche s'adapte en plein ecran sur mobile
- Le compteur du panier se met a jour en temps reel via le contexte
- La navigation est geree par React Router DOM
- Effet backdrop-blur sur le fond quand elevated est true
- Animation de transition entre les etats scrolle/non-srolle

**Variantes :**
- default : Fond blanc (bg-base-100), texte noir, bordure inferieure fine
- transparent : Fond transparent, adapte pour les pages avec hero
- solid : Fonde colore (bg-primary), texte blanc

**Exemple d'utilisation :**

```jsx
import { Navbar, SearchBar, CartIcon, UserMenu, MobileMenu } from '@components/navigation';

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar sticky elevated>
        <Navbar.Left>
          <Logo src="/logo.svg" alt="MarketPlace" href="/" />
          <MobileMenu />
        </Navbar.Left>
        <Navbar.Center>
          <SearchBar
            placeholder="Rechercher des produits, marques, categories..."
            onSearch={(query) => navigate(`/search?q=${query}`)}
          />
        </Navbar.Center>
        <Navbar.Right>
          <CartIcon count={cartCount} onClick={() => navigate('/cart')} />
          <UserMenu
            user={currentUser}
            onLogin={() => navigate('/login')}
            onRegister={() => navigate('/register')}
            onProfile={() => navigate('/profile')}
            onOrders={() => navigate('/orders')}
            onSettings={() => navigate('/settings')}
            onLogout={handleLogout}
          />
        </Navbar.Right>
      </Navbar>
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

**Accessibilite :**
- Role banner sur l'element header wrapper
- Attribut aria-label="Navigation principale" sur la nav
- Le bouton hamburger utilise aria-expanded et aria-controls="mobile-menu"
- La barre de recherche possede role="search" et aria-label="Rechercher"
- Navigation au clavier complete (Tab, Enter, Escape)
- Le menu mobile gere le focus trap
- aria-live="polite" sur le compteur du panier

**Responsive :**
- Desktop (>= 1024px) : Logo, recherche, actions cote a cote
- Tablette (768px - 1023px) : Recherche reduite, menu hamburger visible
- Mobile (< 768px) : Logo + hamburger, recherche en overlay, menu lateral

---

### 9.1.2 Logo

**Nom du composant :** Logo

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| src | string | undefined | Non | URL de l'image du logo |
| alt | string | 'MarketPlace' | Oui | Texte alternatif |
| href | string | '/' | Non | Lien de redirection au clic |
| width | number | 120 | Non | Largeur en pixels |
| height | number | 40 | Non | Hauteur en pixels |
| text | string | undefined | Non | Texte du logo si pas d'image |
| className | string | '' | Non | Classes CSS additionnelles |

**Etat interne :** Aucun

**Comportement :**
- Redirige vers la page d'accueil au clic via React Router Link
- Si src est fourni, affiche l'image ; sinon affiche le texte stylise
- Gere les erreurs de chargement d'image avec un fallback textuel
- L'image est chargee avec optimisation lazy loading native

**Exemple d'utilisation :**

```jsx
<Logo src="/images/logo-full.svg" alt="MarketPlace" href="/" width={140} height={45} />
<Logo text="MarketPlace" href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" />
```

**Accessibilite :**
- Le lien contient un aria-label descriptif
- L'image a toujours un alt alternatif
- Focus visible avec outline (focus-visible:ring-2 focus-visible:ring-primary)

**Responsive :**
- Desktop : Logo complet (image ou texte long)
- Mobile : Logo reduit ou favicon

---

### 9.1.3 SearchBar

**Nom du composant :** SearchBar

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| placeholder | string | 'Rechercher...' | Non | Texte indicatif |
| onSearch | (query: string) => void | undefined | Oui | Callback de recherche |
| onAutocomplete | (q: string) => Promise<Suggestion[]> | undefined | Non | Fonction suggestions |
| suggestions | Suggestion[] | [] | Non | Suggestions predefinies |
| recentSearches | string[] | [] | Non | Recherches recentes |
| trendingSearches | string[] | [] | Non | Recherches tendances |
| categories | Category[] | [] | Non | Categories filtrage |
| variant | 'default' \| 'expanded' \| 'compact' | 'default' | Non | Variante |
| autoFocus | boolean | false | Non | Focus automatique |
| debounceMs | number | 300 | Non | Delai debounce ms |
| maxSuggestions | number | 8 | Non | Max suggestions |
| isLoading | boolean | false | Non | Etat chargement |
| className | string | '' | Non | Classes CSS |

**Interface Suggestion :**

```typescript
interface Suggestion {
  id: string;
  text: string;
  type: 'product' | 'category' | 'seller' | 'keyword';
  image?: string;
  url?: string;
  highlight?: string;
}
```

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| query | string | Valeur actuelle |
| isOpen | boolean | Panneau suggestions |
| suggestions | Suggestion[] | Suggestions dynamiques |
| selectedIndex | number | Index selectionne clavier |
| recentSearches | string[] | Historique recherches |

**Comportement :**
- Debounce avant autocomplete
- Navigation clavier (fleches haut/bas, Enter, Escape)
- Fermeture au clic exterieur
- Historique en localStorage (max 10)
- Soumission avec Enter declenche onSearch
- Filtrage par categorie
- Tri par pertinence

**Variantes :**
- default : Barre classique avec loupe et dropdown
- expanded : Pleine largeur avec panneau categories
- compact : Version mobile

**Exemple d'utilisation :**

```jsx
<SearchBar
  placeholder="Rechercher des produits..."
  onSearch={(q) => navigate(`/search?q=${encodeURIComponent(q)}`)}
  onAutocomplete={handleAutocomplete}
  recentSearches={user.recentSearches}
  trendingSearches={trendingSearches}
  isLoading={isSearching}
  debounceMs={250}
  maxSuggestions={10}
/>
```

**Accessibilite :**
- role="combobox" sur le conteneur
- aria-expanded, aria-autocomplete="list" sur l'input
- role="listbox" sur le panneau de suggestions
- aria-activedescendant pour la selection

**Responsive :**
- Desktop : Barre horizontale avec dropdown
- Mobile : Loupe -> overlay plein ecran

---

### 9.1.4 CartIcon

**Nom du composant :** CartIcon

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| count | number | 0 | Non | Nombre d'articles |
| onClick | () => void | undefined | Non | Callback clic |
| showBadge | boolean | true | Non | Affiche badge |
| maxCount | number | 99 | Non | Affiche 99+ au-dela |
| className | string | '' | Non | Classes CSS |
| animate | boolean | true | Non | Animation ajout |
| totalPrice | number | undefined | Non | Prix total |

**Etat interne :** isAnimating: boolean

**Comportement :**
- Icone Lucide ShoppingCart
- Badge anime au rebond
- Tooltip au survol (resume panier)
- count > maxCount affiche 99+

**Exemple d'utilisation :**

```jsx
<CartIcon count={cartItems.length} onClick={() => setShowCart(true)} animate totalPrice={cartTotal} />
```

**Accessibilite :**
- aria-label="Panier, {count} articles"
- role="button"
- Badge avec aria-live="polite"

**Responsive :**
- Desktop : Icone + badge + prix
- Mobile : Icone + badge

---

### 9.1.5 UserMenu

**Nom du composant :** UserMenu

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| user | User \| null | null | Non | Utilisateur connecte |
| onLogin | () => void | undefined | Oui | Callback connexion |
| onRegister | () => void | undefined | Oui | Callback inscription |
| onProfile | () => void | undefined | Non | Callback profil |
| onOrders | () => void | undefined | Non | Callback commandes |
| onFavorites | () => void | undefined | Non | Callback favoris |
| onMessages | () => void | undefined | Non | Callback messages |
| onDashboard | () => void | undefined | Non | Callback dashboard vendeur |
| onSettings | () => void | undefined | Non | Callback parametres |
| onLogout | () => void | undefined | Oui | Callback deconnexion |
| notificationCount | number | 0 | Non | Notifications |
| unreadMessages | number | 0 | Non | Messages non lus |

**Etat interne :** isDropdownOpen: boolean

**Comportement :**
- Si user === null : boutons Connexion/Inscription
- Si user !== null : avatar + dropdown
- Fermeture au clic exterieur / Escape
- Badge notifications/messages non lus

**Exemple d'utilisation :**

```jsx
<UserMenu
  user={currentUser}
  notificationCount={unreadNotifications}
  unreadMessages={unreadMessageCount}
  onLogin={() => navigate('/login')}
  onRegister={() => navigate('/register')}
  onProfile={() => navigate('/profile')}
  onOrders={() => navigate('/orders')}
  onSettings={() => navigate('/settings')}
  onLogout={handleLogout}
/>
```

**Accessibilite :**
- aria-haspopup="true" sur le declencheur
- aria-expanded dynamique
- role="menu" et role="menuitem"
- Focus trap dans le dropdown

**Responsive :**
- Desktop : Dropdown sous l'avatar
- Mobile : Sheet lateral droit

---

### 9.1.6 MobileMenu

**Nom du composant :** MobileMenu

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| isOpen | boolean | false | Oui | Etat ouverture |
| onClose | () => void | undefined | Oui | Callback fermeture |
| navigation | NavItem[] | [] | Oui | Elements navigation |
| user | User \| null | null | Non | Utilisateur connecte |
| categories | Category[] | [] | Non | Categories |
| onLogout | () => void | undefined | Non | Deconnexion |

**Etat interne :** expandedCategory: string | null

**Comportement :**
- Panneau lateral depuis la gauche
- Overlay semi-transparent
- Fermeture par swipe ou bouton
- Navigation hierarchique avec categories pliables
- Focus trap, bloque scroll body

**Exemple d'utilisation :**

```jsx
<MobileMenu
  isOpen={isMobileMenuOpen}
  onClose={() => setMobileMenuOpen(false)}
  navigation={[
    { label: 'Accueil', href: '/', icon: Home },
    { label: 'Categories', href: '/categories', icon: Grid },
  ]}
  user={currentUser}
/>
```

**Accessibilite :**
- role="dialog", aria-label="Menu de navigation"
- aria-modal="true"
- Retour focus au declencheur

**Responsive :** Exclusive mobile (< 768px)

---

### 9.1.7 Sidebar

**Nom du composant :** Sidebar

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'default' \| 'mini' \| 'overlay' | 'default' | Non | Variante |
| collapsible | boolean | true | Non | Reductible |
| collapsed | boolean | false | Non | Etat reduit |
| onCollapse | (collapsed: boolean) => void | undefined | Non | Callback collapse |
| items | SidebarItem[] | [] | Oui | Elements navigation |
| activeItem | string | undefined | Non | Element actif |
| onItemClick | (id: string) => void | undefined | Non | Callback clic |
| header | ReactNode | undefined | Non | Header custom |
| footer | ReactNode | undefined | Non | Footer custom |
| width | number | 280 | Non | Largeur px |
| collapsedWidth | number | 72 | Non | Largeur reduite px |
| position | 'left' \| 'right' | 'left' | Non | Position |
| elevated | boolean | false | Non | Ombre portee |

**Interface SidebarItem :**

```typescript
interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  badge?: number | string;
  children?: SidebarItem[];
  disabled?: boolean;
  divider?: boolean;
  tooltip?: string;
  onClick?: () => void;
}
```

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| isCollapsed | boolean | Etat reduction |
| expandedItems | string[] | Elements depliees |
| hoveredItem | string \| null | Element survoles |

**Comportement :**
- Animation fluide (transition width)
- Mode mini : icones + tooltip
- Navigation hierarchique pliable
- Element actif mis en evidence
- Overlay mobile avec backdrop
- Persiste collapsed dans localStorage

**Variantes :**
- default : Pleine largeur labels + icones
- mini : Reduite icones uniquement
- overlay : Par-dessus le contenu

**Exemple d'utilisation :**

```jsx
import { Sidebar } from '@components/navigation';
import { Home, Package, ShoppingCart, Users, BarChart3, Settings } from 'lucide-react';

const sellerMenuItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: Home, href: '/seller/dashboard' },
  { id: 'products', label: 'Produits', icon: Package, href: '/seller/products', badge: 42 },
  { id: 'orders', label: 'Commandes', icon: ShoppingCart, href: '/seller/orders', badge: 5 },
  { id: 'customers', label: 'Clients', icon: Users, href: '/seller/customers' },
  { id: 'analytics', label: 'Statistiques', icon: BarChart3, href: '/seller/analytics' },
  { id: 'divider', label: '', icon: null, divider: true },
  { id: 'settings', label: 'Parametres', icon: Settings, href: '/seller/settings' },
];

function SellerLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  return (
    <div className="flex min-h-screen">
      <Sidebar
        items={sellerMenuItems}
        activeItem={location.pathname}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        collapsible
        elevated
        header={<Logo text="MarketPlace" />}
      />
      <main className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-[72px]' : 'ml-[280px]'}`}>
        {children}
      </main>
    </div>
  );
}
```

**Accessibilite :**
- role="navigation", aria-label="Sidebar navigation"
- aria-current="page" sur l'actif
- aria-expanded sur les elements a enfants

**Responsive :**
- Desktop (>= 1024px) : Selon variante
- Tablette (768px-1023px) : Mode mini
- Mobile (< 768px) : Overlay ou masquee

---

### 9.1.8 Footer

**Nom du composant :** Footer

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'default' \| 'compact' \| 'full' | 'default' | Non | Variante |
| columns | FooterColumn[] | Voir ci-dessous | Non | Colonnes liens |
| showNewsletter | boolean | true | Non | Section newsletter |
| showSocial | boolean | true | Non | Liens sociaux |
| showLegal | boolean | true | Non | Liens legaux |
| showPaymentIcons | boolean | true | Non | Icones paiement |
| showAppDownload | boolean | true | Non | Boutons app mobile |
| onNewsletterSubmit | (email: string) => void | undefined | Non | Inscription newsletter |
| copyright | string | '(c) 2024 MarketPlace' | Non | Texte copyright |
| socialLinks | SocialLink[] | [] | Non | Liens reseaux sociaux |
| language | string | 'fr' | Non | Langue actuelle |
| onLanguageChange | (lang: string) => void | undefined | Non | Changement langue |
| currency | string | 'EUR' | Non | Devise actuelle |
| onCurrencyChange | (currency: string) => void | undefined | Non | Changement devise |

**Interface FooterColumn :**

```typescript
interface FooterColumn {
  title: string;
  links: { label: string; href: string; external?: boolean; badge?: string }[];
}
```

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| email | string | Email newsletter |
| isSubmitting | boolean | Soumission newsletter |
| isSubscribed | boolean | Confirmation inscription |

**Colonnes par defaut :**
1. A propos : Qui sommes-nous, Carrieres, Presse, Blog
2. Acheter : Comment ca marche, Protection acheteur, Livraison
3. Vendre : Ouvrir boutique, Tarifs, Ressources vendeurs
4. Aide : Centre d'aide, Contact, Signaler probleme
5. Legal : CGV, Confidentialite, Cookies, RGPD

**Exemple d'utilisation :**

```jsx
<Footer
  variant="full"
  showNewsletter
  showSocial
  showLegal
  showPaymentIcons
  showAppDownload
  onNewsletterSubmit={handleNewsletterSubmit}
  socialLinks={[
    { platform: 'facebook', url: 'https://facebook.com/marketplace' },
    { platform: 'twitter', url: 'https://twitter.com/marketplace' },
    { platform: 'instagram', url: 'https://instagram.com/marketplace' },
  ]}
  language={currentLanguage}
  onLanguageChange={setLanguage}
  currency={currentCurrency}
  onCurrencyChange={setCurrency}
/>
```

**Accessibilite :**
- footer avec role="contentinfo"
- nav aria-label="Liens du pied de page"
- Liens externes avec rel="noopener noreferrer"
- Newsletter avec label et aria-live

**Responsive :**
- Desktop (>= 1024px) : 5 colonnes + newsletter
- Tablette (768px-1023px) : 3 colonnes
- Mobile (< 768px) : Colonne unique empilee

---

### 9.1.9 Header (Page Header)

**Nom du composant :** Header

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| title | string | undefined | Oui | Titre de la page |
| subtitle | string | undefined | Non | Sous-titre |
| breadcrumbs | BreadcrumbItem[] | [] | Non | Fil d'Ariane |
| backLink | string | undefined | Non | Lien retour |
| backLabel | string | 'Retour' | Non | Label retour |
| actions | ReactNode | undefined | Non | Actions header |
| background | 'default' \| 'gradient' \| 'image' | 'default' | Non | Arriere-plan |
| backgroundImage | string | undefined | Non | URL image fond |
| centered | boolean | false | Non | Centre le contenu |
| divider | boolean | true | Non | Separation en bas |

**Etat interne :** Aucun

**Exemple d'utilisation :**

```jsx
<Header
  title="Mon Panier"
  subtitle="3 articles dans votre panier"
  breadcrumbs={[
    { label: 'Accueil', href: '/' },
    { label: 'Panier' },
  ]}
  actions={
    <>
      <Button variant="outline" onClick={clearCart}>Vider le panier</Button>
      <Button variant="primary" onClick={checkout}>Passer la commande</Button>
    </>
  }
/>
```

**Accessibilite :**
- header avec role="banner"
- Titre H1 unique par page
- nav aria-label="Fil d'Ariane"

**Responsive :**
- Desktop : Horizontal (titre + actions)
- Mobile : Empile


---

## 9.2 Composants de Produit

---

### 9.2.1 ProductCard

**Nom du composant :** ProductCard

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| product | Product | undefined | Oui | Objet produit |
| variant | 'default' \| 'horizontal' \| 'minimal' \| 'featured' | 'default' | Non | Variante affichage |
| layout | 'grid' \| 'list' | 'grid' | Non | Mode mise en page |
| showRating | boolean | true | Non | Affiche note |
| showSeller | boolean | true | Non | Affiche vendeur |
| showBadges | boolean | true | Non | Affiche badges promo |
| showAddToCart | boolean | true | Non | Bouton ajouter panier |
| showCompare | boolean | false | Non | Bouton comparer |
| showQuickView | boolean | false | Non | Bouton vue rapide |
| showWishlist | boolean | true | Non | Bouton favoris |
| onAddToCart | (product: Product) => void | undefined | Non | Callback panier |
| onAddToWishlist | (id: string) => void | undefined | Non | Callback favoris |
| onQuickView | (id: string) => void | undefined | Non | Callback vue rapide |
| onCompare | (id: string) => void | undefined | Non | Callback comparer |
| className | string | '' | Non | Classes CSS |
| index | number | 0 | Non | Index pour animation |

**Interface Product :**

```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: ProductImage[];
  thumbnail: string;
  category: { id: string; name: string; slug: string };
  seller: {
    id: string;
    name: string;
    slug: string;
    avatar: string;
    rating: number;
    isVerified: boolean;
    shopId: string;
    shopName: string;
  };
  rating: { average: number; count: number };
  reviewCount: number;
  soldCount: number;
  stock: number;
  badges: string[];
  tags: string[];
  isFavorited: boolean;
  isAvailable: boolean;
  shipping: { free: boolean; estimatedDays: number; cost: number };
  condition: 'new' | 'refurbished' | 'used';
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: { length: number; width: number; height: number };
}
```

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| isHovered | boolean | Survol de la carte |
| isFavorited | boolean | Etat favoris |
| imageIndex | number | Image active au survol |
| isAddingToCart | boolean | Animation ajout panier |
| quantity | number | Quantite selectionnee |

**Comportement :**
- Au survol : zoom subtil sur l'image (transform scale 1.05)
- Le badge promo affiche le pourcentage de reduction
- Le bouton favoris pulse a l'ajout
- L'image principale change au survol des miniatures
- Animation d'ajout au panier (icone coche temporaire)
- Le lien navigue vers la page produit
- Lazy loading de l'image avec placeholder Skeleton
- Gestion du stock (texte rouge si < 5, epuise si 0)
- Prix barré pour les reductions

**Variantes :**
- default : Carte verticale, image en haut, details en bas
- horizontal : Carte horizontale, image a gauche
- minimal : Image + prix uniquement
- featured : Plus grande taille, badge "Produit en vedette"

**Exemple d'utilisation :**

```jsx
<ProductCard
  product={product}
  variant="default"
  showRating
  showSeller
  showBadges
  showAddToCart
  showWishlist
  showQuickView
  onAddToCart={(p) => dispatch(addToCart({ productId: p.id, quantity: 1 }))}
  onAddToWishlist={(id) => dispatch(toggleFavorite(id))}
  onQuickView={(id) => openQuickView(id)}
  onCompare={(id) => dispatch(addToCompare(id))}
  className="hover:shadow-xl transition-shadow duration-300"
/>
```

**Accessibilite :**
- article avec role="article" et aria-label
- Le lien englobe l'image + le titre
- aria-label="Ajouter au panier" sur le bouton
- aria-label="Ajouter aux favoris" sur le bouton
- aria-live="polite" sur les messages d'ajout
- Support clavier complet
- Skip link pour les lecteurs d'ecran

**Responsive :**
- Desktop (>= 1024px) : 3-4 colonnes
- Tablette (768px-1023px) : 2 colonnes
- Mobile (< 768px) : 1-2 colonnes, variante minimal

---

### 9.2.2 ProductGrid

**Nom du composant :** ProductGrid

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| products | Product[] | [] | Oui | Liste produits |
| loading | boolean | false | Non | Etat chargement |
| skeletonCount | number | 8 | Non | Nombre skeletons |
| emptyMessage | string | 'Aucun produit' | Non | Message vide |
| emptyIcon | LucideIcon | Package | Non | Icone vide |
| layout | 'grid' \| 'list' | 'grid' | Non | Mode mise en page |
| columns | { sm: number; md: number; lg: number; xl: number } | { sm:1, md:2, lg:3, xl:4 } | Non | Colonnes responsive |
| gap | number | 4 | Non | Espace entre cartes |
| cardVariant | 'default' \| 'horizontal' \| 'minimal' | 'default' | Non | Variante cartes |
| showViewToggle | boolean | true | Non | Bascule grille/liste |
| onAddToCart | (product: Product) => void | undefined | Non | Callback panier |
| onAddToWishlist | (id: string) => void | undefined | Non | Callback favoris |
| onLoadMore | () => void | undefined | Non | Callback pagination |
| hasMore | boolean | false | Non | Plus de produits |
| isLoadingMore | boolean | false | Non | Chargement infini |
| className | string | '' | Non | Classes CSS |
| animate | boolean | true | Non | Animations entree |
| onAnimationComplete | () => void | undefined | Non | Callback animation |

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| viewMode | 'grid' \| 'list' | Mode actif |
| columns | object | Colonnes responsive |

**Comportement :**
- Grille CSS responsive avec grid-template-columns
- Animation staggered pour les cartes au chargement
- Skeleton loader pendant le chargement
- EmptyState si aucun produit
- Infinite scroll ou pagination
- Transition fluide entre grille et liste
- IntersectionObserver pour le infinite scroll

**Exemple d'utilisation :**

```jsx
<ProductGrid
  products={filteredProducts}
  loading={isLoading}
  layout={viewMode}
  columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
  gap={6}
  cardVariant="default"
  showViewToggle
  onAddToCart={(p) => dispatch(addToCart({ productId: p.id, quantity: 1 }))}
  onLoadMore={() => fetchNextPage()}
  hasMore={hasNextPage}
  isLoadingMore={isFetchingNextPage}
  emptyMessage="Aucun produit trouve pour cette recherche"
  emptyIcon={Search}
/>
```

**Accessibilite :**
- role="region" aria-label="Liste des produits"
- aria-live="polite" pour le nombre de resultats
- role="status" pour le chargement

**Responsive :**
- Desktop (>= 1280px) : 4 colonnes
- Tablette-lg (1024px-1279px) : 3 colonnes
- Tablette (768px-1023px) : 2 colonnes
- Mobile (< 768px) : 1 colonne

---

### 9.2.3 CartItem

**Nom du composant :** CartItem

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| item | CartItemData | undefined | Oui | Donnees article |
| onQuantityChange | (itemId: string, quantity: number) => void | undefined | Oui | Changement quantite |
| onRemove | (itemId: string) => void | undefined | Oui | Suppression |
| onSaveForLater | (itemId: string) => void | undefined | Non | Enregistrer plus tard |
| onAddToWishlist | (itemId: string) => void | undefined | Non | Ajouter favoris |
| showSeller | boolean | true | Non | Affiche vendeur |
| showShipping | boolean | true | Non | Infos livraison |
| isEditable | boolean | true | Non | Modifiable |
| selected | boolean | false | Non | Selectionne |
| onSelect | (itemId: string, selected: boolean) => void | undefined | Non | Selection checkbox |
| className | string | '' | Non | Classes CSS |

**Interface CartItemData :**

```typescript
interface CartItemData {
  id: string;
  product: {
    id: string;
    name: string;
    slug: string;
    thumbnail: string;
    price: number;
    originalPrice?: number;
    currency: string;
    stock: number;
    condition: 'new' | 'refurbished' | 'used';
    seller: {
      id: string;
      name: string;
      avatar: string;
      isVerified: boolean;
      shopId: string;
      shopName: string;
    };
    shipping: {
      free: boolean;
      cost: number;
      estimatedDays: number;
      methods: ShippingMethod[];
    };
  };
  quantity: number;
  selectedAttributes?: { [key: string]: string };
  addedAt: string;
}
```

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| isRemoving | boolean | Animation suppression |
| showQuantityError | boolean | Erreur stock |
| isUpdating | boolean | Chargement maj quantite |

**Comportement :**
- Quantite avec +/- et input numerique
- Confirmation avant suppression
- Animation slide-out a la suppression
- Gestion stock (max = stock disponible)
- Prix recalcule en temps reel
- Badge condition (neuf, occasion)

**Exemple d'utilisation :**

```jsx
<CartItem
  item={cartItem}
  onQuantityChange={(id, qty) => dispatch(updateQuantity({ itemId: id, quantity: qty }))}
  onRemove={(id) => dispatch(removeFromCart(id))}
  onSaveForLater={(id) => dispatch(saveForLater(id))}
  onAddToWishlist={(id) => dispatch(addToWishlist(id))}
  showSeller
  showShipping
  isEditable={!isCheckout}
  selected={selectedItems.includes(cartItem.id)}
  onSelect={(id, sel) => dispatch(toggleItemSelection(id))}
/>
```

**Accessibilite :**
- role="listitem" dans le panier
- Label associe a chaque bouton
- aria-label="Quantite, {quantity}"
- aria-live="polite" sur les changements de prix
- aria-disabled si stock max atteint

**Responsive :**
- Desktop : Layout horizontal
- Mobile : Layout vertical empile

---

### 9.2.4 OrderCard

**Nom du composant :** OrderCard

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| order | Order | undefined | Oui | Donnees commande |
| variant | 'compact' \| 'detailed' | 'compact' | Non | Variante |
| onViewDetails | (orderId: string) => void | undefined | Oui | Voir details |
| onTrackOrder | (orderId: string) => void | undefined | Non | Suivi livraison |
| onCancel | (orderId: string) => void | undefined | Non | Annulation |
| onReview | (orderId: string) => void | Non | Non | Laisser avis |
onRefund | (orderId: string) => void | undefined | Non | Remboursement |
| onReorder | (orderId: string) => void | undefined | Non | Recommander |
| className | string | '' | Non | Classes CSS |

**Interface Order :**

```typescript
interface Order {
  id: string;
  orderNumber: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded' | 'disputed';
  items: OrderItem[];
  total: { subtotal: number; shipping: number; tax: number; discount: number; total: number };
  currency: string;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  tracking?: { carrier: string; trackingNumber: string; url: string };
  seller: { id: string; name: string; avatar: string; shopName: string; shopId: string };
  timeline: OrderTimelineEvent[];
  canCancel: boolean;
  canRefund: boolean;
  canReview: boolean;
  hasDispute: boolean;
}

interface OrderItem {
  id: string;
  product: { id: string; name: string; thumbnail: string; slug: string };
  quantity: number;
  price: number;
  total: number;
  selectedAttributes?: Record<string, string>;
}

interface OrderTimelineEvent {
  status: string;
  label: string;
  timestamp: string;
  description?: string;
}
```

**Etat interne :** isExpanded: boolean, isExpandedDetails: boolean

**Comportement :**
- Affiche le numero commande, date, statut, vendeur
- Badge colore selon le statut
- Timeline verticale des evenements
- Actions contextuelles selon le statut
- Miniatures des produits commandes
- Compact : resume ; detailed : tout

**Exemple d'utilisation :**

```jsx
<OrderCard
  order={order}
  variant="detailed"
  onViewDetails={(id) => navigate(`/orders/${id}`)}
  onTrackOrder={(id) => navigate(`/orders/${id}/tracking`)}
  onCancel={(id) => openCancelModal(id)}
  onReview={(id) => openReviewModal(id)}
  onRefund={(id) => openRefundModal(id)}
  onReorder={(id) => dispatch(reorder(id))}
/>
```

**Accessibilite :**
- article avec aria-label="Commande #{orderNumber}"
- Badge statut avec role="status"
- Actions avec aria-label descriptifs

**Responsive :**
- Desktop : Horizontal avec timeline
- Mobile : Empile vertical

---

### 9.2.5 UserCard

**Nom du composant :** UserCard

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| user | UserPublic | undefined | Oui | Donnees utilisateur |
| variant | 'compact' \| 'full' | 'compact' | Non | Variante |
| showStats | boolean | true | Non | Statistiques |
| showFollow | boolean | false | Non | Bouton suivi |
| showContact | boolean | false | Non | Bouton contact |
| isFollowing | boolean | false | Non | Suivi actif |
| onFollow | (userId: string) => void | undefined | Non | Callback suivi |
| onContact | (userId: string) => void | undefined | Non | Callback contact |
| onViewProfile | (userId: string) => void | undefined | Non | Voir profil |
| className | string | '' | Non | Classes CSS |

**Interface UserPublic :**

```typescript
interface UserPublic {
  id: string;
  name: string;
  avatar: string;
  slug: string;
  bio?: string;
  location?: string;
  joinDate: string;
  isVerified: boolean;
  stats: { products: number; sales: number; reviews: number; rating: number; followers: number };
  badges: string[];
  responseRate?: number;
  responseTime?: string;
  languages?: string[];
}
```

**Exemple d'utilisation :**

```jsx
<UserCard
  user={seller}
  variant="compact"
  showStats
  showFollow
  showContact
  isFollowing={isFollowing}
  onFollow={(id) => dispatch(toggleFollow(id))}
  onContact={(id) => openChat(id)}
  onViewProfile={(id) => navigate(`/seller/${id}`)}
/>
```

**Accessibilite :**
- article avec aria-label
- Avatar: img role="img" alt alternatif

**Responsive :**
- Desktop : Horizontal
- Mobile : Vertical empile

---

### 9.2.6 ShopCard

**Nom du composant :** ShopCard

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| shop | Shop | undefined | Oui | Donnees boutique |
| variant | 'compact' \| 'featured' \| 'full' | 'compact' | Non | Variante |
| showProducts | boolean | false | Non | Produits vedettes |
| showStats | boolean | true | Non | Statistiques |
| showFollow | boolean | true | Non | Bouton suivi |
| featuredProducts | Product[] | [] | Non | Produits a afficher |
| isFollowing | boolean | false | Non | Suivi actif |
| onFollow | (shopId: string) => void | undefined | Non | Callback suivi |
| onViewShop | (shopId: string) => void | undefined | Non | Voir boutique |
| className | string | '' | Non | Classes CSS |

**Interface Shop :**

```typescript
interface Shop {
  id: string;
  name: string;
  slug: string;
  logo: string;
  coverImage?: string;
  description?: string;
  location?: string;
  joinDate: string;
  isVerified: boolean;
  isOfficial: boolean;
  stats: {
    products: number;
    sales: number;
    rating: number;
    reviewCount: number;
    followers: number;
    responseRate: number;
    responseTime: string;
  };
  badges: string[];
  tags: string[];
  categories: string[];
  policies: {
    returns: string;
    shipping: string;
  };
}
```

**Exemple d'utilisation :**

```jsx
<ShopCard
  shop={shop}
  variant="compact"
  showStats
  showFollow
  featuredProducts={shopProducts.slice(0, 4)}
  isFollowing={isFollowing}
  onFollow={(id) => dispatch(toggleFollowShop(id))}
  onViewShop={(id) => navigate(`/shop/${id}`)}
/>
```

**Accessibilite :**
- article avec aria-label
- Statut officiel avec badge visuel

**Responsive :**
- Desktop : Horizontal
- Mobile : Vertical

---

### 9.2.7 ReviewCard

**Nom du composant :** ReviewCard

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| review | Review | undefined | Oui | Donnees avis |
| variant | 'default' \| 'compact' \| 'detailed' | 'default' | Non | Variante |
| showProduct | boolean | true | Non | Affiche produit |
| showHelpful | boolean | true | Non | Bouton utile |
| showReply | boolean | true | Non | Reponse vendeur |
| onHelpful | (reviewId: string) => void | undefined | Non | Callback utile |
| onReport | (reviewId: string) => void | undefined | Non | Signaler |
| onReply | (reviewId: string, content: string) => void | undefined | Non | Repondre |
| onAddPhoto | (reviewId: string) => void | undefined | Non | Ajouter photo |
| className | string | '' | Non | Classes CSS |

**Interface Review :**

```typescript
interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  author: { id: string; name: string; avatar: string; slug: string; isVerified: boolean };
  product?: { id: string; name: string; thumbnail: string; slug: string };
  images: ReviewImage[];
  purchaseVerified: boolean;
  helpful: { count: number; hasVoted: boolean };
  reply?: { content: string; author: string; date: string };
  createdAt: string;
  updatedAt?: string;
}
```

**Etat interne :** isHelpful: boolean, isReporting: boolean, showReplyForm: boolean

**Exemple d'utilisation :**

```jsx
<ReviewCard
  review={review}
  variant="detailed"
  showProduct
  showHelpful
  showReply
  onHelpful={(id) => dispatch(markHelpful(id))}
  onReport={(id) => openReportModal(id)}
  onReply={(id, content) => dispatch(replyToReview({ reviewId: id, content }))}
/>
```

**Accessibilite :**
- article avec aria-label
- Role rating pour les etoiles

**Responsive :**
- Desktop : Horizontal
- Mobile : Vertical empile

---

### 9.2.8 StatsCard

**Nom du composant :** StatsCard

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| title | string | undefined | Oui | Titre |
| value | string \| number | undefined | Oui | Valeur |
| change | number | undefined | Non | Variation % |
| changeType | 'positive' \| 'negative' \| 'neutral' | 'positive' | Non | Type variation |
| icon | LucideIcon | undefined | Non | Icone |
| iconColor | string | 'bg-primary' | Non | Couleur icone |
| iconBgColor | string | 'bg-primary/10' | Non | Couleur fond icone |
| period | string | 'vs mois precedent' | Non | Periode comparaison |
| loading | boolean | false | Non | Chargement |
| onClick | () => void | undefined | Non | Clic sur la carte |
| sparkline | number[] | [] | Non | Donnees mini-graph |
| className | string | '' | Non | Classes CSS |
| format | 'number' \| 'currency' \| 'percent' | 'number' | Non | Formatage |

**Etat interne :** isHovered: boolean

**Comportement :**
- Animation du compteur au montage
- Change positive = vert + fleche haut
- Change negative = rouge + fleche bas
- Sparkline optionnelle en bas
- Skeleton si loading

**Exemple d'utilisation :**

```jsx
<StatsCard
  title="Chiffre d'affaires"
  value={totalRevenue}
  format="currency"
  change={12.5}
  changeType="positive"
  icon={DollarSign}
  iconColor="bg-success"
  period="vs mois dernier"
  sparkline={revenueData}
  onClick={() => navigate('/seller/analytics/revenue')}
/>
```

**Accessibilite :**
- article avec aria-label
- Change avec role="status" aria-live="polite"

**Responsive :**
- Desktop : Carte 250px min
- Mobile : Pleine largeur

---

## 9.3 Composants de Formulaire

---

### 9.3.1 Button

**Nom du composant :** Button

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'primary' \| 'secondary' \| 'accent' \| 'outline' \| 'ghost' \| 'link' \| 'danger' \| 'warning' \| 'success' | 'primary' | Non | Variante visuelle |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Non | Taille |
| color | 'primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' | 'primary' | Non | Couleur |
| outlined | boolean | false | Non | Style outline |
| ghost | boolean | false | Non | Style transparent |
| block | boolean | false | Non | Pleine largeur |
| loading | boolean | false | Non | Etat chargement |
| disabled | boolean | false | Non | Desactive |
| active | boolean | false | Non | Etat actif |
| icon | LucideIcon | undefined | Non | Icone |
| iconPosition | 'left' \| 'right' | 'left' | Non | Position icone |
| iconOnly | boolean | false | Non | Uniquement icone |
| tooltip | string | undefined | Non | Tooltip |
| type | 'button' \| 'submit' \| 'reset' | 'button' | Non | Type HTML |
| className | string | '' | Non | Classes CSS |
| children | ReactNode | undefined | Non | Contenu |
| onClick | (e: MouseEvent) => void | undefined | Non | Callback clic |
| href | string | undefined | Non | Lien |
| download | boolean | false | Non | Telechargement |
| target | '_blank' \| '_self' | undefined | Non | Cible lien |
| rel | string | undefined | Non | Attribut rel |
| leftIcon | LucideIcon | undefined | Non | Icone gauche |
| rightIcon | LucideIcon | undefined | Non | Icone droite |

**Etat interne :** isLoading: boolean, isPressed: boolean

**Comportement :**
- Gere loading automatiquement
- Gere disabled (pointer-events-none, opacity)
- Ripple effect au clic (optionnel)
- Loading = Spinner a la place de l'icone
- Button group si dans ButtonGroup

**Variantes :**
- primary : Fond primary, texte blanc
- secondary : Fond secondary, texte blanc
- accent : Fond accent, texte blanc
- outline : Bordure primary, fond transparent
- ghost : Transparent, texte primary
- link : Style lien texte
- danger : Fond error, texte blanc
- warning : Fond warning, texte noir
- success : Fond success, texte blanc

**Tailles :**
- xs : px-2 py-1, text-xs
- sm : px-3 py-1.5, text-sm
- md : px-4 py-2, text-sm
- lg : px-6 py-3, text-base
- xl : px-8 py-4, text-lg

**Exemple d'utilisation :**

```jsx
<Button
  variant="primary"
  size="lg"
  loading={isSubmitting}
  disabled={isDisabled}
  icon={ShoppingCart}
  iconPosition="left"
  block
  onClick={handleAddToCart}
>
  Ajouter au panier - {formatPrice(total)}
</Button>

<Button
  variant="ghost"
  size="sm"
  icon={Heart}
  iconOnly
  tooltip="Ajouter aux favoris"
  className={isFavorited ? 'text-error' : 'text-base-content'}
  onClick={handleToggleFavorite}
/>

<Button
  variant="danger"
  outline
  size="sm"
  icon={Trash2}
  onClick={handleDelete}
>
  Supprimer
</Button>
```

**Accessibilite :**
- role="button" (si div)
- aria-disabled si disabled
- aria-busy si loading
- aria-label si iconOnly
- aria-pressed si active
- Focus visible (focus-visible:ring-2)
- Keyboard accessible

**Responsive :**
- Meme rendu toutes tailles
- block pour mobile

---

### 9.3.2 Input

**Nom du composant :** Input

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| type | 'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search' | 'text' | Non | Type input |
| name | string | undefined | Non | Attribut name |
| value | string \| number | undefined | Non | Controle |
| defaultValue | string \| number | undefined | Non | Defaut non controle |
| placeholder | string | '' | Non | Placeholder |
| label | string | undefined | Non | Label |
| helperText | string | undefined | Non | Texte aide |
| error | string | undefined | Non | Message erreur |
| warning | string | undefined | Non | Message alerte |
| success | string | undefined | Non | Message succes |
| disabled | boolean | false | Non | Desactive |
| readOnly | boolean | false | Non | Lecture seule |
| required | boolean | false | Non | Obligatoire |
| autoFocus | boolean | false | Non | Focus auto |
| autoComplete | string | undefined | Non | Autocomplete |
| maxLength | number | undefined | Non | Longueur max |
| minLength | number | undefined | Non | Longueur min |
| pattern | string | undefined | Non | Regex validation |
| leftAddon | ReactNode | undefined | Non | Element gauche |
| rightAddon | ReactNode | undefined | Non | Element droite |
| leftIcon | LucideIcon | undefined | Non | Icone gauche |
| rightIcon | LucideIcon | undefined | Non | Icone droite |
| prefix | string | undefined | Non | Prefixe texte |
| suffix | string | undefined | Non | Suffixe texte |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| fullWidth | boolean | true | Non | Pleine largeur |
| className | string | '' | Non | Classes CSS |
| inputClassName | string | '' | Non | Classes input |
| onChange | (e: ChangeEvent<HTMLInputElement>) => void | undefined | Non | Changement |
| onBlur | (e: FocusEvent<HTMLInputElement>) => void | undefined | Non | Perte focus |
| onFocus | (e: FocusEvent<HTMLInputElement>) => void | undefined | Non | Focus |
| onKeyPress | (e: KeyboardEvent) => void | undefined | Non | Touche |
| validate | (value: string) => string \| null | undefined | Non | Validation custom |
| debounceMs | number | undefined | Non | Debounce |

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| localValue | string \| number | Valeur locale |
| isFocused | boolean | Focus |
| showPassword | boolean | Visibilite password |
| validationError | string \| null | Erreur validation |

**Comportement :**
- Label flottant ou au-dessus
- Validation cote client (pattern, required, custom)
- Debounce optionnel
- Password toggle show/hide
- Auto-grow pour type textarea-like
- Char count si maxLength

**Exemple d'utilisation :**

```jsx
<Input
  type="email"
  name="email"
  label="Adresse email"
  placeholder="exemple@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
  leftIcon={Mail}
  autoComplete="email"
  validate={(v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Email invalide'}
/>

<Input
  type="password"
  name="password"
  label="Mot de passe"
  placeholder="Minimum 8 caracteres"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  rightIcon={showPassword ? Eye : EyeOff}
  onRightIconClick={() => setShowPassword(!showPassword)}
  helperText="Au moins 8 caracteres, 1 majuscule, 1 chiffre"
/>

<Input
  type="number"
  name="quantity"
  label="Quantite"
  value={quantity}
  onChange={(e) => setQuantity(parseInt(e.target.value))}
  leftAddon={<Button onClick={() => setQuantity(q => q - 1)}>-</Button>}
  rightAddon={<Button onClick={() => setQuantity(q => q + 1)}>+</Button>}
  min={1}
  max={stock}
/>
```

**Accessibilite :**
- Label associe avec htmlFor/id automatique
- aria-describedby vers helperText/error
- aria-invalid si error
- aria-required si required
- aria-disabled si disabled

**Responsive :**
- fullWidth par defaut
- Taille adapte

---

### 9.3.3 Textarea

**Nom du composant :** Textarea

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| name | string | undefined | Non | Nom |
| value | string | undefined | Non | Controle |
| defaultValue | string | undefined | Non | Defaut |
| placeholder | string | '' | Non | Placeholder |
| label | string | undefined | Non | Label |
| helperText | string | undefined | Non | Texte aide |
| error | string | undefined | Non | Message erreur |
| disabled | boolean | false | Non | Desactive |
| readOnly | boolean | false | Non | Lecture seule |
| required | boolean | false | Non | Obligatoire |
| rows | number | 4 | Non | Lignes |
| minRows | number | 2 | Non | Lignes min |
| maxRows | number | 10 | Non | Lignes max |
| maxLength | number | undefined | Non | Longueur max |
| fullWidth | boolean | true | Non | Pleine largeur |
| autoResize | boolean | false | Non | Redimensionnement auto |
| showCharCount | boolean | false | Non | Compteur caracteres |
| className | string | '' | Non | Classes |
| onChange | (e: ChangeEvent<HTMLTextAreaElement>) => void | undefined | Non | Changement |
| onBlur | (e: FocusEvent) => void | undefined | Non | Perte focus |

**Etat interne :** localValue, isFocused, charCount

**Exemple d'utilisation :**

```jsx
<Textarea
  name="description"
  label="Description du produit"
  placeholder="Decrivez votre produit en detail..."
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  autoResize
  minRows={3}
  maxRows={8}
  maxLength={2000}
  showCharCount
  required
/>
```

**Accessibilite :** Meme que Input

---

### 9.3.4 Select

**Nom du composant :** Select

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| name | string | undefined | Non | Nom |
| value | string | undefined | Non | Controle |
| options | SelectOption[] | [] | Oui | Options |
| label | string | undefined | Non | Label |
| placeholder | string | 'Selectionner...' | Non | Placeholder |
| helperText | string | undefined | Non | Texte aide |
| error | string | undefined | Non | Erreur |
| disabled | boolean | false | Non | Desactive |
| required | boolean | false | Non | Obligatoire |
| searchable | boolean | false | Non | Rechercheable |
| clearable | boolean | false | Non | Effacable |
| multiple | boolean | false | Non | Selection multiple |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| fullWidth | boolean | true | Non | Pleine largeur |
| className | string | '' | Non | Classes |
| onChange | (value: string \| string[]) => void | undefined | Non | Changement |
| renderOption | (option: SelectOption) => ReactNode | undefined | Non | Rendu custom |
| renderValue | (option: SelectOption) => ReactNode | undefined | Non | Affichage custom |

**Interface SelectOption :**

```typescript
interface SelectOption {
  value: string;
  label: string;
  icon?: LucideIcon;
  disabled?: boolean;
  group?: string;
  description?: string;
  image?: string;
}
```

**Etat interne :** isOpen, searchQuery, selectedValues

**Exemple d'utilisation :**

```jsx
<Select
  name="category"
  label="Categorie"
  options={categories.map(c => ({ value: c.id, label: c.name, icon: c.icon }))}
  value={selectedCategory}
  onChange={setSelectedCategory}
  searchable
  clearable
  required
/>

<Select
  name="shipping"
  label="Methode de livraison"
  options={[
    { value: 'standard', label: 'Standard (3-5 jours)', description: 'Gratuit', group: 'France' },
    { value: 'express', label: 'Express (1-2 jours)', description: '4.99 EUR', group: 'France' },
    { value: 'international', label: 'International (7-14 jours)', description: '12.99 EUR', group: 'International' },
  ]}
  value={shippingMethod}
  onChange={setShippingMethod}
  renderOption={(opt) => (
    <div className="flex justify-between w-full">
      <span>{opt.label}</span>
      <span className="text-sm text-base-content/60">{opt.description}</span>
    </div>
  )}
/>
```

**Accessibilite :**
- role="listbox" sur le dropdown
- aria-expanded
- aria-activedescendant
- aria-multiselectable si multiple
- Keyboard navigation

**Responsive :**
- Desktop : Dropdown standard
- Mobile : Sheet ou bottom sheet

---

### 9.3.5 Checkbox

**Nom du composant :** Checkbox

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| name | string | undefined | Non | Nom |
| checked | boolean | undefined | Non | Controle |
| defaultChecked | boolean | false | Non | Defaut |
| label | string | undefined | Non | Label |
| description | string | undefined | Non | Description |
| disabled | boolean | false | Non | Desactive |
| indeterminate | boolean | false | Non | Etat intermediaire |
| color | 'primary' \| 'secondary' \| 'accent' \| 'success' \| 'warning' \| 'error' | 'primary' | Non | Couleur |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| className | string | '' | Non | Classes |
| onChange | (checked: boolean) => void | undefined | Non | Changement |

**Etat interne :** isChecked

**Exemple d'utilisation :**

```jsx
<Checkbox
  name="terms"
  checked={acceptTerms}
  onChange={setAcceptTerms}
  label="J'accepte les conditions generales de vente"
  description="En cochant cette case, vous acceptez nos CGV et notre politique de confidentialite"
  required
  color="primary"
/>

<Checkbox
  name="selectAll"
  indeterminate={selectedCount > 0 && selectedCount < totalCount}
  checked={selectedCount === totalCount}
  onChange={toggleSelectAll}
  label={`Tout selectionner (${selectedCount}/${totalCount})`}
/>
```

**Accessibilite :**
- input role="checkbox"
- aria-checked (true/false/mixed)
- aria-label si pas de label visible
- Keyboard (Space)

**Responsive :** Meme rendu

---

### 9.3.6 Radio

**Nom du composant :** Radio

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| name | string | undefined | Non | Groupe |
| value | string | undefined | Non | Valeur |
| checked | boolean | false | Non | Selectionne |
| label | string | undefined | Non | Label |
| description | string | undefined | Non | Description |
| disabled | boolean | false | Non | Desactive |
| color | 'primary' \| 'secondary' \| 'accent' | 'primary' | Non | Couleur |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| className | string | '' | Non | Classes |
| onChange | (value: string) => void | undefined | Non | Changement |

**Exemple d'utilisation :**

```jsx
<Radio name="condition" value="new" checked={condition === 'new'} onChange={setCondition} label="Neuf" />
<Radio name="condition" value="used" checked={condition === 'used'} onChange={setCondition} label="Occasion" />
<Radio name="condition" value="refurbished" checked={condition === 'refurbished'} onChange={setCondition} label="Reconditionne" />
```

---

### 9.3.7 Toggle

**Nom du composant :** Toggle

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| checked | boolean | false | Non | Controle |
| label | string | undefined | Non | Label |
| description | string | undefined | Non | Description |
| disabled | boolean | false | Non | Desactive |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| color | 'primary' \| 'secondary' \| 'accent' | 'primary' | Non | Couleur |
| className | string | '' | Non | Classes |
| onChange | (checked: boolean) => void | undefined | Non | Changement |
| onLabel | string | 'Oui' | Non | Label actif |
| offLabel | string | 'Non' | Non | Label inactif |

**Exemple d'utilisation :**

```jsx
<Toggle
  checked={notificationsEnabled}
  onChange={setNotificationsEnabled}
  label="Notifications par email"
  description="Recevez des notifications pour vos commandes et promotions"
/>
<Toggle
  checked={darkMode}
  onChange={toggleDarkMode}
  label="Mode sombre"
  onLabel="On" offLabel="Off"
/>
```

**Accessibilite :**
- role="switch"
- aria-checked
- Keyboard (Space)

---

### 9.3.8 DatePicker

**Nom du composant :** DatePicker

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| name | string | undefined | Non | Nom |
| value | Date \| null | null | Non | Valeur controle |
| minDate | Date \| undefined | undefined | Non | Date min |
| maxDate | Date \| undefined | undefined | Non | Date max |
| label | string | undefined | Non | Label |
| placeholder | string | 'Selectionner une date' | Non | Placeholder |
| helperText | string | undefined | Non | Aide |
| error | string | undefined | Non | Erreur |
| disabled | boolean | false | Non | Desactive |
| required | boolean | false | Non | Obligatoire |
| format | string | 'dd/MM/yyyy' | Non | Format affichage |
| locale | string | 'fr-FR' | Non | Locale |
| showTime | boolean | false | Non | Horloge |
| timeFormat | 'HH:mm' \| 'hh:mm a' | 'HH:mm' | Non | Format heure |
| range | boolean | false | Non | Plage dates |
| minRange | Date \| undefined | undefined | Non | Min plage |
| maxRange | Date \| undefined | undefined | Non | Max plage |
| disableWeekends | boolean | false | Non | Desactive weekends |
| disableDates | Date[] | [] | Non | Dates desactivees |
| firstDayOfWeek | number | 1 | Non | Premier jour (0=Dim) |
| inline | boolean | false | Non | Affichage inline |
| className | string | '' | Non | Classes |
| onChange | (date: Date \| [Date, Date]) => void | undefined | Non | Changement |

**Etat interne :** isOpen, viewDate, selectedDate, view (days/months/years)

**Exemple d'utilisation :**

```jsx
<DatePicker
  label="Date de naissance"
  value={birthDate}
  onChange={setBirthDate}
  maxDate={new Date()}
  format="dd/MM/yyyy"
  required
/>

<DatePicker
  label="Periode"
  range
  value={dateRange}
  onChange={setDateRange}
  minDate={new Date()}
  disableWeekends
  showTime
/>
```

**Accessibilite :**
- role="dialog" sur le picker
- Keyboard navigation complete
- aria-label sur les jours

**Responsive :**
- Desktop : Dropdown
- Mobile : Bottom sheet

---

### 9.3.9 FileUpload

**Nom du composant :** FileUpload

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| name | string | undefined | Non | Nom |
| accept | string | undefined | Non | Types acceptes |
| multiple | boolean | false | Non | Multiples fichiers |
| maxFiles | number | 5 | Non | Max fichiers |
| maxSize | number | 10485760 | Non | Taille max (octets) |
| label | string | undefined | Non | Label |
| helperText | string | undefined | Non | Aide |
| error | string | undefined | Non | Erreur |
| disabled | boolean | false | Non | Desactive |
| dragAndDrop | boolean | true | Non | Drag & drop |
| showPreview | boolean | true | Non | Preview |
| previewType | 'image' \| 'file' \| 'thumbnail' | 'thumbnail' | Non | Type preview |
| uploadProgress | number | undefined | Non | Progression upload |
| isUploading | boolean | false | Non | En cours upload |
| onFilesChange | (files: File[]) => void | undefined | Non | Changement |
| onUpload | (files: File[]) => void | undefined | Non | Upload |
| onRemove | (index: number) => void | undefined | Non | Suppression |
| className | string | '' | Non | Classes |

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| files | File[] | Fichiers selectionnes |
| previews | string[] | URLs preview |
| isDragOver | boolean | Drag over |
| errors | ValidationError[] | Erreurs |

**Comportement :**
- Drag & drop zone avec visual feedback
- Preview images/videos
- Progression upload barre
- Validation taille/type avant upload
- Suppression individuelle
- Cropping optionnel pour images

**Exemple d'utilisation :**

```jsx
<FileUpload
  label="Photos du produit"
  accept="image/*"
  multiple
  maxFiles={8}
  maxSize={5242880}
  dragAndDrop
  showPreview
  previewType="thumbnail"
  onFilesChange={setFiles}
  onUpload={handleUpload}
  onRemove={handleRemove}
  helperText="JPG, PNG ou WebP. Maximum 5 Mo par image. 8 photos max."
/>
```

**Accessibilite :**
- role="button" sur la zone drag
- aria-label="Deposer vos fichiers ici"
- Keyboard accessible

**Responsive :**
- Desktop : Zone large avec preview
- Mobile : Zone reduite, preview empilee

---

## 9.4 Composants de Modales et Overlays

---

### 9.4.1 Modal

**Nom du composant :** Modal

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| isOpen | boolean | false | Oui | Controle ouverture |
| onClose | () => void | undefined | Oui | Fermeture |
| title | string | undefined | Non | Titre |
| description | string | undefined | Non | Description |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full' | 'md' | Non | Taille |
| variant | 'default' \| 'danger' \| 'warning' \| 'info' \| 'success' | 'default' | Non | Variante |
| children | ReactNode | undefined | Non | Contenu |
| footer | ReactNode | undefined | Non | Pied de page |
| header | ReactNode | undefined | Non | Header custom |
| showCloseButton | boolean | true | Non | Bouton fermer |
| closeOnOverlay | boolean | true | Non | Fermer sur overlay |
| closeOnEscape | boolean | true | Non | Fermer Escape |
| preventScroll | boolean | true | Non | Bloquer scroll |
| centered | boolean | true | Non | Centre |
| className | string | '' | Non | Classes |
| initialFocus | RefObject | undefined | Non | Focus initiale |
| animation | 'fade' \| 'scale' \| 'slide' \| 'none' | 'scale' | Non | Animation |

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| isVisible | boolean | Visibilite animee |
| previousFocus | HTMLElement \| null | Focus precedente |

**Comportement :**
- Animation ouverture/fermeture
- Focus trap dans la modale
- Bloquer scroll body
- Fermer sur Escape / overlay
- Restaurer focus precedente
- aria-modal="true"

**Variantes :**
- default : Fond blanc, bordure douce
- danger : Bande rouge en haut
- warning : Bande orange en haut
- info : Bande bleue en haut
- success : Bande verte en haut

**Tailles :**
- sm : max-w-sm (384px)
- md : max-w-md (448px)
- lg : max-w-lg (512px)
- xl : max-w-xl (576px)
- 2xl : max-w-2xl (672px)
- full : max-w-full mx-4

**Exemple d'utilisation :**

```jsx
<Modal
  isOpen={showDeleteConfirm}
  onClose={() => setShowDeleteConfirm(false)}
  title="Confirmer la suppression"
  size="sm"
  variant="danger"
  footer={
    <div className="flex gap-2 justify-end">
      <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>Annuler</Button>
      <Button variant="danger" onClick={handleDelete} loading={isDeleting}>Supprimer</Button>
    </div>
  }
>
  <p>Etes-vous sur de vouloir supprimer ce produit ? Cette action est irreversible.</p>
</Modal>

<Modal
  isOpen={showQuickView}
  onClose={() => setShowQuickView(false)}
  title={product.name}
  size="2xl"
  closeOnOverlay
  animation="scale"
>
  <ProductQuickView product={product} />
</Modal>
```

**Accessibilite :**
- role="dialog" aria-modal="true"
- aria-labelledby vers title
- aria-describedby vers description
- Focus trap (Tab, Shift+Tab)
- Fermeture Escape
- Focus restauré

**Responsive :**
- Desktop : Centre avec fond overlay
- Mobile : Bottom sheet (animation slide-up)

---

### 9.4.2 Drawer

**Nom du composant :** Drawer

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| isOpen | boolean | false | Oui | Controle ouverture |
| onClose | () => void | undefined | Oui | Fermeture |
| position | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' | Non | Position |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'md' | Non | Taille |
| title | string | undefined | Non | Titre |
| showCloseButton | boolean | true | Non | Bouton fermer |
| closeOnOverlay | boolean | true | Non | Fermer overlay |
| closeOnEscape | boolean | true | Non | Fermer Escape |
| preventScroll | boolean | true | Non | Bloquer scroll |
| children | ReactNode | undefined | Non | Contenu |
| footer | ReactNode | undefined | Non | Pied de page |
| header | ReactNode | undefined | Non | Header custom |
| className | string | '' | Non | Classes |
| animation | 'slide' \| 'fade' | 'slide' | Non | Animation |

**Etat interne :** isVisible

**Exemple d'utilisation :**

```jsx
<Drawer
  isOpen={showCart}
  onClose={() => setShowCart(false)}
  position="right"
  size="lg"
  title="Mon Panier"
  footer={
    <div className="space-y-2">
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>{formatPrice(cartTotal)}</span>
      </div>
      <Button variant="primary" block onClick={checkout}>Passer la commande</Button>
    </div>
  }
>
  {cartItems.map(item => (
    <CartItem
      key={item.id}
      item={item}
      onQuantityChange={handleQuantityChange}
      onRemove={handleRemove}
    />
  ))}
</Drawer>

<Drawer
  isOpen={showFilters}
  onClose={() => setShowFilters(false)}
  position="left"
  size="sm"
  title="Filtres"
>
  <FilterPanel filters={filters} onChange={handleFilterChange} />
</Drawer>
```

**Accessibilite :**
- role="dialog" aria-modal="true"
- Focus trap
- Fermeture Escape/overlay

**Responsive :**
- Desktop : Cote avec animation slide
- Mobile : Bottom sheet ou full-width

---

### 9.4.3 Toast

**Nom du composant :** Toast

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'info' \| 'success' \| 'warning' \| 'error' \| 'loading' | 'info' | Oui | Variante |
| title | string | undefined | Non | Titre |
| message | string | undefined | Non | Message |
| duration | number | 5000 | Non | Duree ms |
| position | 'top-right' \| 'top-center' \| 'top-left' \| 'bottom-right' \| 'bottom-center' \| 'bottom-left' | 'top-right' | Non | Position |
| showClose | boolean | true | Non | Bouton fermer |
| action | { label: string; onClick: () => void } | undefined | Non | Action |
| onDismiss | () => void | undefined | Non | Fermeture |
| icon | LucideIcon | undefined | Non | Icone custom |
| avatar | string | undefined | Non | Avatar |
| progress | number | undefined | Non | Barre progression |
| stackable | boolean | true | Non | Empilable |
| className | string | '' | Non | Classes |
| id | string | undefined | Non | ID unique |

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| isVisible | boolean | Visibilite |
| isExiting | boolean | Animation sortie |

**Comportement :**
- Animation entree/sortie
- Auto-dismiss apres duration
- Empilable (max 3 visibles)
- Swipe pour dismiss (mobile)
- Loading avec spinner
- Action button pour undo

**Exemple d'utilisation :**

```jsx
<Toast
  variant="success"
  title="Produit ajoute"
  message="Le produit a ete ajoute a votre panier"
  duration={3000}
  action={{ label: 'Voir le panier', onClick: () => navigate('/cart') }}
  onDismiss={() => {}}
/>

<Toast
  variant="error"
  title="Erreur"
  message="Une erreur est survenue lors de la sauvegarde"
  showClose
/>
```

**Accessibilite :**
- role="alert"
- aria-live="assertive"
- Auto-dismiss avec aria-live

**Responsive :**
- Desktop : Coin ecran
- Mobile : Bas ou haut, plein largeur

---

### 9.4.4 Alert

**Nom du composant :** Alert

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'info' \| 'success' \| 'warning' \| 'error' | 'info' | Oui | Variante |
| title | string | undefined | Non | Titre |
| children | ReactNode | undefined | Non | Contenu |
| icon | LucideIcon | undefined | Non | Icone custom |
| showIcon | boolean | true | Non | Affiche icone |
| showClose | boolean | false | Non | Bouton fermer |
| action | { label: string; onClick: () => void } | undefined | Non | Action |
| onDismiss | () => void | undefined | Non | Fermeture |
| bordered | boolean | true | Non | Bordure |
| filled | boolean | false | Non | Fond colore |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<Alert variant="warning" title="Stock limite" showClose onDismiss={dismissAlert}>
  Il ne reste que <strong>3 articles</strong> en stock. Commandez vite !
  <Action label="Ajouter au panier" onClick={handleAddToCart} />
</Alert>

<Alert variant="error" title="Erreur de paiement" showIcon>
  Votre carte a ete refusee. Verifiez vos informations ou essayez un autre moyen de paiement.
</Alert>
```

**Accessibilite :**
- role="alert"
- aria-live="polite" (warning) / "assertive" (error)
- Fermeture avec keyboard

**Responsive :** Pleine largeur

---

### 9.4.5 Tooltip

**Nom du composant :** Tooltip

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| content | string \| ReactNode | undefined | Oui | Contenu |
| position | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | Non | Position |
| delay | number | 300 | Non | Delai affichage ms |
| duration | number | 200 | Non | Animation ms |
| arrow | boolean | true | Non | Fleche |
| children | ReactNode | undefined | Oui | Declencheur |
| className | string | '' | Non | Classes |
| disabled | boolean | false | Non | Desactive |
| maxWidth | number | 250 | Non | Largeur max |

**Etat interne :** isVisible

**Exemple d'utilisation :**

```jsx
<Tooltip content="Ajouter aux favoris" position="top">
  <Button icon={Heart} iconOnly onClick={handleToggleFavorite} />
</Tooltip>

<Tooltip content={<div><strong>Prix total</strong><br />Livraison incluse</div>} position="bottom">
  <span className="text-lg font-bold">{formatPrice(total)}</span>
</Tooltip>
```

**Accessibilite :**
- aria-describedby
- role="tooltip"
- Affiche au focus/keyboard

---

### 9.4.6 Popover

**Nom du composant :** Popover

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| content | ReactNode | undefined | Oui | Contenu |
| trigger | 'click' \| 'hover' | 'click' | Non | Declencheur |
| position | 'top' \| 'bottom' \| 'left' \| 'right' | 'bottom' | Non | Position |
| children | ReactNode | undefined | Oui | Declencheur |
| isOpen | boolean | undefined | Non | Controle |
| onOpenChange | (open: boolean) => void | undefined | Non | Changement ouverture |
| showClose | boolean | true | Non | Bouton fermer |
| className | string | '' | Non | Classes |
| arrow | boolean | true | Non | Fleche |
| offset | number | 8 | Non | Decalage |

**Etat interne :** isVisible

**Exemple d'utilisation :**

```jsx
<Popover content={<DatePicker value={date} onChange={setDate} inline />} trigger="click" position="bottom">
  <Button variant="outline" icon={Calendar}>
    {date ? formatDate(date) : 'Selectionner une date'}
  </Button>
</Popover>
```

---

## 9.5 Composants de Donnees et Navigation

---

### 9.5.1 Badge

**Nom du composant :** Badge

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'default' \| 'primary' \| 'secondary' \| 'accent' \| 'ghost' \| 'outline' \| 'danger' \| 'success' \| 'warning' \| 'info' | 'default' | Non | Variante |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' | 'sm' | Non | Taille |
| color | 'primary' \| 'secondary' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' | 'primary' | Non | Couleur |
| children | ReactNode | undefined | Non | Contenu |
| icon | LucideIcon | undefined | Non | Icone |
| dot | boolean | false | Non | Point colore |
| removeable | boolean | false | Non | Supprimable |
| onRemove | () => void | undefined | Non | Callback suppression |
| pulse | boolean | false | Non | Animation pulse |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<Badge variant="success" dot>Nouveau</Badge>
<Badge variant="danger">{stock} restants</Badge>
<Badge variant="warning" icon={AlertTriangle}>Stock faible</Badge>
<Badge removeable onRemove={() => removeTag(tag)}>Tag <X className="w-3 h-3" /></Badge>
```

---

### 9.5.2 Table

**Nom du composant :** Table

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| columns | TableColumn[] | [] | Oui | Definitions colonnes |
| data | any[] | [] | Oui | Donnees |
| variant | 'default' \| 'striped' \| 'hoverable' \| 'compact' | 'default' | Non | Variante |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| bordered | boolean | false | Non | Bordures |
| loading | boolean | false | Non | Chargement |
| emptyMessage | string | 'Aucune donnee' | Non | Message vide |
| selectable | boolean | false | Non | Selectionnable |
| selectedRows | any[] | [] | Non | Selectionnees |
| onSelectionChange | (rows: any[]) => void | undefined | Non | Changement selection |
| onRowClick | (row: any) => void | undefined | Non | Clic ligne |
| stickyHeader | boolean | false | Non | Header fixe |
| caption | string | undefined | Non | Legende |
| className | string | '' | Non | Classes |
| rowKey | string \| ((row: any) => string) | 'id' | Non | Cle ligne |

**Interface TableColumn :**

```typescript
interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any, index: number) => ReactNode;
  className?: string;
  headerClassName?: string;
}
```

**Exemple d'utilisation :**

```jsx
<Table
  columns={[
    { key: 'name', label: 'Produit', sortable: true, render: (v, row) => (
      <div className="flex items-center gap-3">
        <img src={row.thumbnail} className="w-10 h-10 rounded" />
        <span>{row.name}</span>
      </div>
    )},
    { key: 'price', label: 'Prix', sortable: true, align: 'right', render: (v) => formatPrice(v) },
    { key: 'stock', label: 'Stock', align: 'center', render: (v) => <Badge variant={v > 0 ? 'success' : 'danger'}>{v}</Badge> },
    { key: 'actions', label: 'Actions', align: 'right', render: (_, row) => <TableActions row={row} /> },
  ]}
  data={products}
  variant="striped"
  selectable
  onSelectionChange={setSelectedProducts}
  onRowClick={(row) => navigate(`/products/${row.id}`)}
  stickyHeader
/>
```

---

### 9.5.3 DataTable

**Nom du composant :** DataTable

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| columns | DataTableColumn[] | [] | Oui | Colonnes avancees |
| data | any[] | [] | Oui | Donnees |
| sortable | boolean | true | Non | Tri |
| filterable | boolean | false | Non | Filtrage |
| searchable | boolean | false | Non | Recherche globale |
| paginated | boolean | true | Non | Pagination |
| pageSize | number | 10 | Non | Elements/page |
| pageSizeOptions | number[] | [10, 25, 50, 100] | Non | Options taille |
| selectable | boolean | false | Non | Selection |
| exportable | boolean | false | Non | Export CSV |
| refreshable | boolean | false | Non | Rafraichir |
| loading | boolean | false | Non | Chargement |
| variant | 'default' \| 'striped' \| 'bordered' \| 'compact' | 'default' | Non | Variante |
| emptyMessage | string | 'Aucune donnee' | Non | Message vide |
| title | string | undefined | Non | Titre |
| actions | ReactNode | undefined | Non | Actions header |
| onSort | (column: string, direction: 'asc' \| 'desc') => void | undefined | Non | Tri serveur |
| onFilter | (filters: Record<string, any>) => void | undefined | Non | Filtre serveur |
| onPageChange | (page: number) => void | undefined | Non | Pagination serveur |
| totalItems | number | undefined | Non | Total serveur |
| currentPage | number | 1 | Non | Page actuelle |
| rowKey | string | 'id' | Non | Cle |
| onRowClick | (row: any) => void | undefined | Non | Clic ligne |
| onSelectionChange | (rows: any[]) => void | undefined | Non | Changement selection |
| className | string | '' | Non | Classes |

**Interface DataTableColumn :**

```typescript
interface DataTableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: 'text' | 'select' | 'date' | 'number' | 'boolean';
  filterOptions?: { label: string; value: any }[];
  width?: string | number;
  minWidth?: number;
  maxWidth?: number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any, index: number) => ReactNode;
  headerRender?: (column: DataTableColumn) => ReactNode;
  className?: string;
  sticky?: boolean;
  hidden?: boolean;
}
```

**Etat interne :**

| Etat | Type | Description |
|------|------|-------------|
| sort | { column: string; direction: 'asc' \| 'desc' } | Tri |
| filters | Record<string, any> | Filtres actifs |
| search | string | Recherche |
| page | number | Page actuelle |
| pageSize | number | Taille page |
| selectedRows | any[] | Selectionnees |
| columnFilters | Record<string, any> | Filtres par colonne |

**Comportement :**
- Tri multi-colonne
- Filtres par colonne (header filtre)
- Recherche globale
- Pagination client ou serveur
- Selection avec checkboxes
- Export CSV/Excel
- Colonnes redimensionnables
- Sticky header + first column

**Exemple d'utilisation :**

```jsx
<DataTable
  title="Gestion des produits"
  columns={[
    { key: 'thumbnail', label: '', width: '60px', render: (v) => <img src={v} className="w-10 h-10 rounded" /> },
    { key: 'name', label: 'Nom', sortable: true, filterable: true, minWidth: 200 },
    { key: 'category', label: 'Categorie', sortable: true, filterable: true, filterType: 'select', filterOptions: categories },
    { key: 'price', label: 'Prix', sortable: true, align: 'right', render: (v) => formatPrice(v) },
    { key: 'stock', label: 'Stock', sortable: true, align: 'center', render: (v) => <Badge variant={v > 0 ? 'success' : 'danger'}>{v}</Badge> },
    { key: 'status', label: 'Statut', sortable: true, filterable: true, filterType: 'boolean', render: (v) => <StatusBadge status={v} /> },
    { key: 'actions', label: '', width: '100px', render: (_, row) => <RowActions row={row} /> },
  ]}
  data={products}
  paginated
  pageSize={25}
  sortable
  filterable
  searchable
  selectable
  exportable
  refreshable
  loading={isLoading}
  onRefresh={refetch}
  onSort={(col, dir) => setSort({ column: col, direction: dir })}
  onFilter={(filters) => setFilters(filters)}
  onPageChange={(page) => setCurrentPage(page)}
  onSelectionChange={setSelected}
  onRowClick={(row) => navigate(`/products/${row.id}`)}
  actions={<Button icon={Plus} onClick={createProduct}>Ajouter</Button>}
/>
```

---

### 9.5.4 Pagination

**Nom du composant :** Pagination

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| currentPage | number | 1 | Oui | Page actuelle |
| totalPages | number | 1 | Oui | Total pages |
| totalItems | number | undefined | Non | Total elements |
| pageSize | number | 10 | Non | Elements/page |
| showFirstLast | boolean | true | Non | Boutons premier/dernier |
| showPageNumbers | boolean | true | Non | Numeros de page |
| maxVisible | number | 5 | Non | Pages visibles max |
| showPrevNext | boolean | true | Non | Precedent/Suivant |
| showPageSize | boolean | false | Non | Selecteur taille |
| pageSizeOptions | number[] | [10, 25, 50, 100] | Non | Options taille |
| variant | 'default' \| 'compact' \| 'minimal' | 'default' | Non | Variante |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| onPageChange | (page: number) => void | undefined | Oui | Changement page |
| onPageSizeChange | (size: number) => void | undefined | Non | Changement taille |
| loading | boolean | false | Non | Chargement |
| className | string | '' | Non | Classes |

**Etat interne :** currentPage, pageSize

**Exemple d'utilisation :**

```jsx
<Pagination
  currentPage={page}
  totalPages={totalPages}
  totalItems={totalItems}
  pageSize={pageSize}
  maxVisible={7}
  showFirstLast
  showPageSize
  pageSizeOptions={[10, 20, 50]}
  onPageChange={(p) => { setPage(p); fetchProducts(p, pageSize); }}
  onPageSizeChange={(s) => { setPageSize(s); setPage(1); fetchProducts(1, s); }}
  variant="compact"
/>
```

**Accessibilite :**
- nav aria-label="Pagination"
- aria-current="page" sur la page actuelle
- aria-disabled sur boutons desactives
- Keyboard navigation

---

### 9.5.5 Tabs

**Nom du composant :** Tabs

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| tabs | TabItem[] | [] | Oui | Onglets |
| activeTab | string | undefined | Non | Controle |
| defaultActiveTab | string | undefined | Non | Defaut |
| variant | 'default' \| 'boxed' \| 'lifted' \| 'bordered' | 'default' | Non | Variante |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| fullWidth | boolean | false | Non | Pleine largeur |
| onTabChange | (tabId: string) => void | undefined | Non | Changement |
| className | string | '' | Non | Classes |

**Interface TabItem :**

```typescript
interface TabItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: ReactNode;
  badge?: number | string;
  disabled?: boolean;
}
```

**Etat interne :** activeTabId

**Exemple d'utilisation :**

```jsx
<Tabs
  tabs={[
    { id: 'details', label: 'Details', icon: Info, content: <ProductDetails product={product} /> },
    { id: 'specs', label: 'Specifications', icon: FileText, content: <ProductSpecs product={product} /> },
    { id: 'reviews', label: 'Avis', icon: Star, badge: reviewCount, content: <ProductReviews productId={product.id} /> },
    { id: 'shipping', label: 'Livraison', icon: Truck, content: <ShippingInfo product={product} /> },
  ]}
  variant="lifted"
  fullWidth
/>
```

**Accessibilite :**
- role="tablist" sur le conteneur
- role="tab" sur chaque onglet
- role="tabpanel" sur le contenu
- aria-selected, aria-controls, aria-labelledby
- Keyboard (fleches, Home, End)

---

### 9.5.6 Accordion

**Nom du composant :** Accordion

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| items | AccordionItem[] | [] | Oui | Elements |
| allowMultiple | boolean | false | Non | Multiples ouverts |
| defaultOpen | string[] | [] | Non | Ouverts par defaut |
| variant | 'default' \| 'bordered' \| 'shadow' | 'default' | Non | Variante |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| chevronPosition | 'left' \| 'right' | 'right' | Non | Position chevron |
| onToggle | (openIds: string[]) => void | undefined | Non | Changement |
| className | string | '' | Non | Classes |

**Interface AccordionItem :**

```typescript
interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  icon?: LucideIcon;
  disabled?: boolean;
}
```

**Etat interne :** openIds

**Exemple d'utilisation :**

```jsx
<Accordion
  allowMultiple
  variant="bordered"
  items={[
    { id: 'desc', title: 'Description', content: <p>{product.description}</p>, icon: FileText },
    { id: 'specs', title: 'Specifications', content: <SpecsTable specs={product.specs} />, icon: List },
    { id: 'shipping', title: 'Politique de livraison', content: <ShippingPolicy />, icon: Truck },
    { id: 'returns', title: 'Politique de retour', content: <ReturnPolicy />, icon: RotateCcw },
    { id: 'warranty', title: 'Garantie', content: <WarrantyInfo />, icon: Shield },
  ]}
/>
```

---

### 9.5.7 Breadcrumb

**Nom du composant :** Breadcrumb

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| items | BreadcrumbItem[] | [] | Oui | Elements |
| separator | ReactNode | '/' | Non | Separateur |
| maxItems | number | 5 | Non | Max elements |
| showHome | boolean | true | Non | Element Accueil |
| homeHref | string | '/' | Non | Lien accueil |
| collapseFrom | number | 2 | Non | Collapser a partir de |
| variant | 'default' \| 'compact' | 'default' | Non | Variante |
| className | string | '' | Non | Classes |
| onNavigate | (href: string) => void | undefined | Non | Navigation custom |

**Exemple d'utilisation :**

```jsx
<Breadcrumb
  items={[
    { label: 'Accueil', href: '/' },
    { label: 'Electronique', href: '/category/electronique' },
    { label: 'Smartphones', href: '/category/electronique/smartphones' },
    { label: 'iPhone 15 Pro' },
  ]}
  separator={<ChevronRight className="w-4 h-4" />}
  showHome
  maxItems={4}
/>
```

---

### 9.5.8 Stepper

**Nom du composant :** Stepper

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| steps | StepItem[] | [] | Oui | Etapes |
| currentStep | number | 0 | Non | Etape actuelle |
| variant | 'default' \| 'compact' \| 'vertical' | 'default' | Non | Variante |
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Non | Orientation |
| showLabels | boolean | true | Non | Labels |
| showDescriptions | boolean | true | Non | Descriptions |
| showNumbers | boolean | true | Non | Numeros |
| clickable | boolean | false | Non | Cliquable |
| onStepClick | (step: number) => void | undefined | Non | Clic etape |
| className | string | '' | Non | Classes |

**Interface StepItem :**

```typescript
interface StepItem {
  id: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  status?: 'pending' | 'active' | 'completed' | 'error';
  optional?: boolean;
}
```

**Exemple d'utilisation :**

```jsx
<Stepper
  steps={[
    { id: 'cart', title: 'Panier', description: 'Verifiez vos articles' },
    { id: 'shipping', title: 'Livraison', description: 'Adresse de livraison' },
    { id: 'payment', title: 'Paiement', description: 'Mode de paiement' },
    { id: 'confirm', title: 'Confirmation', description: 'Verifier la commande' },
  ]}
  currentStep={currentCheckoutStep}
  variant="compact"
  showDescriptions
/>

<Stepper
  steps={orderTimelineSteps}
  orientation="vertical"
  variant="compact"
/>
```

---

## 9.6 Composants de Feedback

---

### 9.6.1 ProgressBar

**Nom du composant :** ProgressBar

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| value | number | 0 | Oui | Valeur (0-100) |
| max | number | 100 | Non | Maximum |
| variant | 'default' \| 'striped' \| 'animated' \| 'segmented' | 'default' | Non | Variante |
| color | 'primary' \| 'secondary' \| 'accent' \| 'success' \| 'warning' \| 'error' | 'primary' | Non | Couleur |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| showLabel | boolean | false | Non | Etiquette |
| label | string | undefined | Non | Texte label |
| labelPosition | 'inside' \| 'outside' \| 'top' | 'outside' | Non | Position label |
| indeterminate | boolean | false | Non | Indetermine |
| showValue | boolean | false | Non | Affiche valeur |
| valueFormat | 'percent' \| 'number' \| 'custom' | 'percent' | Non | Format valeur |
| className | string | '' | Non | Classes |
| segments | { value: number; color: string; label: string }[] | [] | Non | Segments |

**Exemple d'utilisation :**

```jsx
<ProgressBar value={uploadProgress} color="primary" showValue animated size="md" />

<ProgressBar value={75} color="success" striped showLabel label="75% termine" labelPosition="inside" />

<ProgressBar indeterminate color="secondary" size="sm" />
```

---

### 9.6.2 Rating

**Nom du composant :** Rating

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| value | number | 0 | Non | Note (0-5) |
| maxStars | number | 5 | Non | Etoiles max |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Non | Taille |
| color | string | 'text-warning' | Non | Couleur etoile |
| emptyColor | string | 'text-base-300' | Non | Couleur vide |
| readonly | boolean | true | Non | Lecture seule |
| showValue | boolean | false | Non | Affiche valeur |
| showCount | boolean | false | Non | Affiche nombre avis |
| count | number | undefined | Non | Nombre avis |
| allowHalf | boolean | false | Non | Demi-etoile |
| allowClear | boolean | false | Non | Effacer note |
| precision | 0.5 \| 1 | 1 | Non | Precision |
| onChange | (value: number) => void | undefined | Non | Changement |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<Rating value={4.5} showValue showCount count={1247} size="md" allowHalf />

<Rating
  value={userRating}
  readonly={false}
  allowHalf
  onChange={(v) => setUserRating(v)}
  size="lg"
  color="text-yellow-500"
  emptyColor="text-gray-300"
/>
```

---

### 9.6.3 Skeleton

**Nom du composant :** Skeleton

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'text' \| 'circular' \| 'rectangular' \| 'card' \| 'image' \| 'avatar' \| 'button' | 'text' | Non | Variante |
| width | string \| number | '100%' | Non | Largeur |
| height | string \| number | undefined | Non | Hauteur |
| count | number | 1 | Non | Nombre lignes |
| className | string | '' | Non | Classes |
| animated | boolean | true | Non | Anime |

**Exemple d'utilisation :**

```jsx
// Card skeleton
<div className="card bg-base-100 shadow-md">
  <Skeleton variant="image" height={200} />
  <div className="card-body space-y-3">
    <Skeleton variant="text" width="70%" />
    <Skeleton variant="text" width="40%" />
    <Skeleton variant="text" width="30%" />
  </div>
</div>

// Product grid skeleton
<div className="grid grid-cols-4 gap-6">
  {Array(8).fill(0).map((_, i) => <ProductCardSkeleton key={i} />)}
</div>
```

---

### 9.6.4 Spinner

**Nom du composant :** Spinner

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Non | Taille |
| color | 'primary' \| 'secondary' \| 'accent' \| 'neutral' | 'primary' | Non | Couleur |
| thickness | number | 4 | Non | Epaisseur px |
| label | string | undefined | Non | Label (aria) |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<Spinner size="lg" color="primary" label="Chargement en cours..." />

<div className="flex items-center justify-center min-h-screen">
  <div className="text-center space-y-4">
    <Spinner size="xl" />
    <p className="text-base-content/60">Chargement des produits...</p>
  </div>
</div>
```

---

### 9.6.5 Avatar

**Nom du composant :** Avatar

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| src | string | undefined | Non | URL image |
| alt | string | '' | Non | Texte alternatif |
| name | string | undefined | Non | Nom (fallback) |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Non | Taille |
| shape | 'circle' \| 'rounded' \| 'square' | 'circle' | Non | Forme |
| status | 'online' \| 'offline' \| 'away' \| 'busy' | undefined | Non | Statut |
| badge | ReactNode | undefined | Non | Badge |
| className | string | '' | Non | Classes |
| onClick | () => void | undefined | Non | Clic |

**Exemple d'utilisation :**

```jsx
<Avatar src={user.avatar} alt={user.name} size="lg" status="online" />
<Avatar name="Marcellin" size="md" />
<AvatarGroup users={users} max={4} size="sm" />
```

---

## 9.7 Composants de Mise en Page

---

### 9.7.1 Card

**Nom du composant :** Card

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'default' \| 'bordered' \| 'glass' \| 'side' | 'default' | Non | Variante |
| direction | 'vertical' \| 'horizontal' | 'vertical' | Non | Direction |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| hoverable | boolean | false | Non | Effet hover |
| bordered | boolean | true | Non | Bordure |
| compact | boolean | false | Non | Compact |
| image | string | undefined | Non | Image |
| imageAlt | string | '' | Non | Alt image |
| imagePosition | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | Non | Position image |
| header | ReactNode | undefined | Non | Header |
| headerClassName | string | '' | Non | Classes header |
| body | ReactNode | undefined | Non | Body |
| bodyClassName | string | '' | Non | Classes body |
| footer | ReactNode | undefined | Non | Footer |
| footerClassName | string | '' | Non | Classes footer |
| actions | ReactNode | undefined | Non | Actions |
| className | string | '' | Non | Classes |
| onClick | () => void | undefined | Non | Clic |
| glass | boolean | false | Non | Effet verre |

**Exemple d'utilisation :**

```jsx
<Card variant="bordered" hoverable onClick={() => navigate(`/products/${product.id}`)}>
  <Card.Image src={product.thumbnail} alt={product.name} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Description>{product.description}</Card.Description>
    <div className="flex items-center justify-between mt-2">
      <span className="text-lg font-bold">{formatPrice(product.price)}</span>
      <Rating value={product.rating.average} size="sm" />
    </div>
  </Card.Body>
  <Card.Actions>
    <Button size="sm" variant="primary" onClick={handleAddToCart}>Ajouter au panier</Button>
    <Button size="sm" variant="ghost" icon={Heart} onClick={handleToggleFavorite} />
  </Card.Actions>
</Card>
```

---

### 9.7.2 Divider

**Nom du composant :** Divider

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| variant | 'default' \| 'dashed' \| 'dotted' | 'default' | Non | Variante |
| label | string | undefined | Non | Etiquette |
| labelPosition | 'left' \| 'center' \| 'right' | 'center' | Non | Position label |
| color | string | 'border-base-300' | Non | Couleur |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<Divider label="Ou" />
<Divider variant="dashed" />
<Divider label="Details supplementaires" labelPosition="left" />
```

---

### 9.7.3 Carousel

**Nom du composant :** Carousel

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| items | CarouselItem[] | [] | Oui | Elements |
| autoPlay | boolean | false | Non | Lecture auto |
| interval | number | 5000 | Non | Intervalle ms |
| infinite | boolean | false | Non | Boucle infinie |
| showDots | boolean | true | Non | Points indicateurs |
| showArrows | boolean | true | Non | Fleches navigation |
| effect | 'slide' \| 'fade' | 'slide' | Non | Effet transition |
| direction | 'ltr' \| 'rtl' | 'ltr' | Non | Direction |
| pauseOnHover | boolean | true | Non | Pause au survol |
| swipeToSlide | boolean | true | Non | Swipe mobile |
| slidesToShow | number | 1 | Non | Slides visibles |
| slidesToScroll | number | 1 | Non | Slides par defilement |
| vertical | boolean | false | Non | Vertical |
| centerMode | boolean | false | Non | Mode centre |
| className | string | '' | Non | Classes |
| onSlideChange | (index: number) => void | undefined | Non | Changement slide |
| renderItem | (item: CarouselItem) => ReactNode | undefined | Non | Rendu custom |

**Interface CarouselItem :**

```typescript
interface CarouselItem {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  buttonText?: string;
  content?: ReactNode;
}
```

**Exemple d'utilisation :**

```jsx
<Carousel
  items={heroSlides}
  autoPlay
  interval={6000}
  infinite
  showDots
  showArrows
  effect="fade"
  onSlideChange={(i) => setActiveSlide(i)}
/>

<Carousel
  items={productImages.map(img => ({ id: img.id, image: img.url }))}
  slidesToShow={4}
  slidesToScroll={1}
  showArrows
  centerMode
  className="product-images-carousel"
/>
```

---

### 9.7.4 EmptyState

**Nom du composant :** EmptyState

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| title | string | undefined | Oui | Titre |
| description | string | undefined | Non | Description |
| icon | LucideIcon | Package | Non | Icone |
| image | string | undefined | Non | Illustration |
| action | { label: string; onClick: () => void; variant?: string; icon?: LucideIcon } | undefined | Non | Action |
| secondaryAction | { label: string; onClick: () => void } | undefined | Non | Action secondaire |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<EmptyState
  icon={ShoppingCart}
  title="Votre panier est vide"
  description="Ajoutez des produits pour commencer vos achats."
  action={{ label: 'Voir les produits', onClick: () => navigate('/products'), variant: 'primary', icon: ArrowRight }}
/>

<EmptyState
  icon={Search}
  title="Aucun resultat"
  description="Aucun produit ne correspond a votre recherche. Essayez avec d'autres mots-cles."
  secondaryAction={{ label: 'Effacer les filtres', onClick: clearFilters }}
/>
```

---

### 9.7.5 ErrorState

**Nom du composant :** ErrorState

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| title | string | 'Une erreur est survenue' | Non | Titre |
| message | string | undefined | Non | Message |
| code | number \| string | undefined | Non | Code erreur |
| icon | LucideIcon | AlertTriangle | Non | Icone |
| image | string | undefined | Non | Illustration |
| retry | { label: string; onClick: () => void } | undefined | Non | Bouton reessayer |
| homeLink | { label: string; onClick: () => void } | undefined | Non | Retour accueil |
| support | { label: string; onClick: () => void } | undefined | Non | Support |
| showDetails | boolean | false | Non | Details erreur |
| details | string | undefined | Non | Stack trace |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<ErrorState
  code={404}
  title="Page introuvable"
  message="La page que vous recherchez n'existe pas ou a ete deplacee."
  retry={{ label: 'Reessayer', onClick: refetch }}
  homeLink={{ label: "Retour a l'accueil", onClick: () => navigate('/') }}
/>

<ErrorState
  code={500}
  title="Erreur serveur"
  message="Un probleme temporaire empêche le chargement."
  retry={{ label: 'Reessayer', onClick: refetch }}
  support={{ label: 'Contacter le support', onClick: openSupport }}
  showDetails
  details={error.stack}
/>
```

---

## 9.8 Composants Specialises E-commerce

---

### 9.8.1 FilterPanel

**Nom du composant :** FilterPanel

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| filters | FilterConfig[] | [] | Oui | Configuration filtres |
| activeFilters | Record<string, any> | {} | Non | Filtres actifs |
| onFilterChange | (filters: Record<string, any>) => void | undefined | Oui | Changement filtres |
| onClearAll | () => void | undefined | Non | Tout effacer |
| variant | 'sidebar' \| 'drawer' \| 'horizontal' | 'sidebar' | Non | Variante |
| showActiveCount | boolean | true | Non | Compteur actifs |
| collapsible | boolean | true | Non | Pliable |
| defaultExpanded | string[] | [] | Non | Defaut deplie |
| className | string | '' | Non | Classes |

**Interface FilterConfig :**

```typescript
interface FilterConfig {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range' | 'select' | 'color' | 'rating';
  options?: { value: string; label: string; count?: number; color?: string }[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}
```

**Exemple d'utilisation :**

```jsx
<FilterPanel
  filters={[
    { id: 'category', label: 'Categorie', type: 'checkbox', options: categories },
    { id: 'price', label: 'Prix', type: 'range', min: 0, max: 1000, step: 10, unit: 'EUR' },
    { id: 'rating', label: 'Note', type: 'rating', options: [
      { value: '4', label: '4 et plus', count: 156 },
      { value: '3', label: '3 et plus', count: 234 },
    ]},
    { id: 'color', label: 'Couleur', type: 'color', options: [
      { value: '#000000', label: 'Noir', count: 45 },
      { value: '#FFFFFF', label: 'Blanc', count: 38 },
    ]},
    { id: 'condition', label: 'Etat', type: 'checkbox', options: [
      { value: 'new', label: 'Neuf', count: 89 },
      { value: 'used', label: 'Occasion', count: 23 },
    ]},
  ]}
  activeFilters={filters}
  onFilterChange={setFilters}
  onClearAll={clearFilters}
  variant="sidebar"
  collapsible
  defaultExpanded={['category', 'price']}
/>
```

---

### 9.8.2 CategoryTree

**Nom du composant :** CategoryTree

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| categories | CategoryNode[] | [] | Oui | Categories |
| selectedCategory | string | undefined | Non | Selectionnee |
| expandedCategories | string[] | [] | Non | Depliees |
| onCategorySelect | (id: string) => void | undefined | Oui | Selection |
| onCategoryExpand | (id: string) => void | undefined | Non | Expansion |
| showCount | boolean | true | Non | Compteur produits |
| showIcons | boolean | true | Non | Icones |
| showImages | boolean | false | Non | Miniatures |
| maxDepth | number | 3 | Non | Profondeur max |
| selectable | boolean | true | Non | Selectionnable |
| showBreadcrumbs | boolean | false | Non | Filiere |
| className | string | '' | Non | Classes |
| renderItem | (cat: CategoryNode) => ReactNode | undefined | Non | Rendu custom |
| searchable | boolean | false | Non | Rechercheable |

**Interface CategoryNode :**

```typescript
interface CategoryNode {
  id: string;
  name: string;
  slug: string;
  icon?: LucideIcon;
  image?: string;
  count?: number;
  children?: CategoryNode[];
  isExpanded?: boolean;
  level?: number;
}
```

**Exemple d'utilisation :**

```jsx
<CategoryTree
  categories={categoryTree}
  selectedCategory={selectedCategory}
  expandedCategories={expandedCategories}
  onCategorySelect={(id) => navigate(`/category/${id}`)}
  onCategoryExpand={(id) => toggleExpand(id)}
  showCount
  showIcons
  searchable
  maxDepth={3}
/>
```

---

### 9.8.3 PriceRangeSlider

**Nom du composant :** PriceRangeSlider

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| min | number | 0 | Non | Minimum |
| max | number | 10000 | Non | Maximum |
| value | [number, number] | [0, 10000] | Non | Valeur controle |
| step | number | 10 | Non | Pas |
| unit | string | 'EUR' | Non | Unite |
| showInputs | boolean | true | Non | Champs numeriques |
| showLabels | boolean | true | Non | Labels min/max |
| showHistogram | boolean | false | Non | Histogramme distribution |
| histogramData | number[] | [] | Non | Donnees histogramme |
| currency | string | 'EUR' | Non | Symbole devise |
| formatValue | (value: number) => string | undefined | Non | Formatage custom |
| onValueChange | (value: [number, number]) => void | undefined | Oui | Changement |
| onValueCommit | (value: [number, number]) => void | undefined | Non | Apres interaction |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<PriceRangeSlider
  min={0}
  max={5000}
  value={priceRange}
  onValueChange={setPriceRange}
  onValueCommit={(range) => applyFilters({ price: range })}
  step={50}
  showInputs
  showHistogram
  histogramData={priceDistribution}
  currency="EUR"
  formatValue={(v) => `${v} EUR`}
/>
```

---

### 9.8.4 ChatWidget

**Nom du composant :** ChatWidget

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| isOpen | boolean | false | Non | Controle ouverture |
| onToggle | () => void | undefined | Oui | Bascule |
| position | 'bottom-right' \| 'bottom-left' | 'bottom-right' | Non | Position |
| conversations | Conversation[] | [] | Oui | Conversations |
| activeConversation | string | undefined | Non | Active |
| onConversationSelect | (id: string) => void | undefined | Non | Selection |
| onSendMessage | (conversationId: string, content: string, attachments?: File[]) => void | undefined | Oui | Envoyer |
| onMarkRead | (conversationId: string) => void | undefined | Non | Marquer lu |
| user | User \| null | null | Non | Utilisateur connecte |
| showOnlineStatus | boolean | true | Non | Statut en ligne |
| className | string | '' | Non | Classes |

**Interface Conversation :**

```typescript
interface Conversation {
  id: string;
  participant: { id: string; name: string; avatar: string; isOnline: boolean };
  lastMessage: { content: string; timestamp: string; isRead: boolean; isMine: boolean };
  unreadCount: number;
  product?: { id: string; name: string; thumbnail: string; price: number };
}
```

**Etat interne :** isOpen, activeConversationId, messageText, conversations

**Exemple d'utilisation :**

```jsx
<ChatWidget
  conversations={conversations}
  activeConversation={activeConversation}
  onConversationSelect={selectConversation}
  onSendMessage={(convId, content, files) => sendMessage(convId, content, files)}
  onMarkRead={(convId) => markAsRead(convId)}
  user={currentUser}
  showOnlineStatus
/>
```

---

### 9.8.5 VideoPlayer

**Nom du composant :** VideoPlayer

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| src | string | undefined | Oui | URL video |
| poster | string | undefined | Non | Image poster |
| title | string | '' | Non | Titre |
| autoplay | boolean | false | Non | Lecture auto |
| loop | boolean | false | Non | Boucle |
| muted | boolean | false | Non | Muet |
| controls | boolean | true | Non | Controles |
| preload | 'auto' \| 'metadata' \| 'none' | 'metadata' | Non | Prechargement |
| quality | 'auto' \| '720p' \| '1080p' | 'auto' | Non | Qualite |
| playbackRates | number[] | [0.5, 1, 1.25, 1.5, 2] | Non | Vitesses |
| showFullscreen | boolean | true | Non | Plein ecran |
| showPiP | boolean | false | Non | Picture-in-Picture |
| onPlay | () => void | undefined | Non | Lecture |
| onPause | () => void | undefined | Non | Pause |
| onEnded | () => void | undefined | Non | Fin |
| onTimeUpdate | (currentTime: number, duration: number) => void | undefined | Non | Progression |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<VideoPlayer
  src={product.videoUrl}
  poster={product.thumbnail}
  title={product.name}
  controls
  preload="metadata"
  showFullscreen
  onTimeUpdate={(t, d) => trackProgress(t, d)}
/>
```

---

### 9.8.6 MapComponent

**Nom du composant :** MapComponent

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| center | { lat: number; lng: number } | undefined | Oui | Centre |
| zoom | number | 12 | Non | Zoom |
| markers | MapMarker[] | [] | Non | Marqueurs |
| polyline | { lat: number; lng: number }[] | [] | Non | Ligne |
| height | string \| number | '400px' | Non | Hauteur |
| width | string \| number | '100%' | Non | Largeur |
| showControls | boolean | true | Non | Controles |
| showSearch | boolean | false | Non | Recherche lieu |
| showCurrentLocation | boolean | false | Non | Ma position |
| draggable | boolean | false | Non | Deplaçable |
| onMarkerClick | (marker: MapMarker) => void | undefined | Non | Clic marqueur |
| onLocationSelect | (lat: number, lng: number) => void | undefined | Non | Selection lieu |
| className | string | '' | Non | Classes |

**Interface MapMarker :**

```typescript
interface MapMarker {
  id: string;
  position: { lat: number; lng: number };
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  popup?: ReactNode;
}
```

**Exemple d'utilisation :**

```jsx
<MapComponent
  center={{ lat: 48.8566, lng: 2.3522 }}
  zoom={13}
  markers={sellerLocations}
  showCurrentLocation
  onMarkerClick={(m) => navigate(`/seller/${m.id}`)}
  height={350}
/>
```

---

### 9.8.7 ShareButtons

**Nom du composant :** ShareButtons

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| url | string | undefined | Oui | URL a partager |
| title | string | '' | Non | Titre |
| description | string | '' | Non | Description |
| image | string | undefined | Non | Image |
| platforms | string[] | ['facebook', 'twitter', 'whatsapp', 'email', 'copy'] | Non | Plateformes |
| variant | 'default' \| 'icon' \| 'label' \| 'icon-label' | 'default' | Non | Variante |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| showCount | boolean | false | Non | Compteur shares |
| onShare | (platform: string) => void | undefined | Non | Tracking |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<ShareButtons
  url={productUrl}
  title={product.name}
  description={product.description}
  image={product.thumbnail}
  platforms={['facebook', 'twitter', 'whatsapp', 'pinterest', 'email', 'copy']}
  variant="icon-label"
  onShare={(platform) => trackShare(platform)}
/>
```

---

### 9.8.8 SocialLoginButtons

**Nom du composant :** SocialLoginButtons

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| providers | SocialProvider[] | ['google', 'facebook', 'apple'] | Non | Fournisseurs |
| onLogin | (provider: string) => void | undefined | Oui | Connexion |
| variant | 'default' \| 'icon' \| 'block' | 'default' | Non | Variante |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Non | Taille |
| loading | string \| null | null | Non | Provider en cours |
| disabled | boolean | false | Non | Desactive |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<SocialLoginButtons
  providers={['google', 'facebook', 'apple']}
  onLogin={(provider) => handleSocialLogin(provider)}
  variant="block"
  loading={loadingProvider}
/>
```

---

### 9.8.9 TermsCheckbox

**Nom du composant :** TermsCheckbox

**Proprietes (props) :**

| Prop | Type | Defaut | Obligatoire | Description |
|------|------|--------|-------------|-------------|
| checked | boolean | false | Non | Controle |
| onChange | (checked: boolean) => void | undefined | Oui | Changement |
| termsUrl | string | '/terms' | Non | URL CGV |
| privacyUrl | string | '/privacy' | Non | URL confidentialite |
| required | boolean | true | Non | Obligatoire |
| error | string | undefined | Non | Erreur |
| label | string | "J'accepte" | Non | Label |
| showLinks | boolean | true | Non | Liens legaux |
| className | string | '' | Non | Classes |

**Exemple d'utilisation :**

```jsx
<TermsCheckbox
  checked={acceptTerms}
  onChange={setAcceptTerms}
  required
  error={!acceptTerms && submitted ? "Vous devez accepter les conditions" : undefined}
  termsUrl="/terms"
  privacyUrl="/privacy"
/>
```


---

# CHAPITRE 10 : Fonctionnalites de l'Application

---

## Table des matieres du Chapitre 10

- 10.1 Authentification
- 10.2 Gestion des profils
- 10.3 Boutiques
- 10.4 Produits
- 10.5 Gestion des images
- 10.6 Gestion des videos
- 10.7 Gestion des stocks
- 10.8 Commandes
- 10.9 Paiements
- 10.10 Favoris
- 10.11 Recherche
- 10.12 Filtrage
- 10.13 Messagerie
- 10.14 Notifications
- 10.15 Avis et evaluations
- 10.16 Historique
- 10.17 Factures
- 10.18 Statistiques et analytics
- 10.19 Administration
- 10.20 Parametres
- 10.21 Support client
- 10.22 Panier
- 10.23 Livraison et suivi

---

## 10.1 Authentification

### 10.1.1 Inscription

**Description :** Permet a un nouvel utilisateur de creer un compte sur la plateforme.

**Fonctionnalites detaillees :**

| Fonctionnalite | Description |
|---------------|-------------|
| Formulaire multi-etapes | Etape 1: informations personnelles, Etape 2: verifications, Etape 3: confirmation |
| Validation en temps reel | Chaque champ est valide au fur et a mesure de la saisie |
| Double opt-in email | Email de confirmation avec lien de valide expire apres 24h |
| Validation telephone | Code OTP envoye par SMS (6 chiffres, expire apres 5 minutes) |
| Verification CAPTCHA | Protection anti-bot (Google reCAPTCHA v3) |
| Mot de passe fort | Minimum 8 caracteres, 1 majuscule, 1 minuscule, 1 chiffre, 1 special |
| Verification disponibilite email | Check en temps reel si l'email est deja utilise |
| Acceptation CGV | Obligation d'accepter les conditions generales de vente |
| Creation de compte vendeur | Option de creation de boutique pendant l'inscription |
| Redirection post-inscription | Vers le dashboard ou la page de bienvenue |

**Champs du formulaire :**

| Champ | Type | Obligatoire | Validation |
|-------|------|-------------|------------|
| email | email | Oui | Format email, unicite |
| password | password | Oui | Min 8 char, force |
| confirmPassword | password | Oui | Coincide avec password |
| firstName | text | Oui | 2-50 caracteres, alpha |
| lastName | text | Oui | 2-50 caracteres, alpha |
| phone | tel | Non | Format international |
| acceptTerms | checkbox | Oui | Doit etre coche |
| acceptNewsletter | checkbox | Non | Defaut coche |
| accountType | radio | Oui | buyer / seller / both |

**Etapes du flux :**

```
1. Remplir formulaire
2. Valider email (double opt-in)
   -> Email contenant un lien unique (token valide 24h)
   -> Clic sur le lien -> compte active
3. Optionnel: Verifier telephone (OTP)
4. Redirection vers dashboard
```

**Etat de l'authentification apres inscription :**
- Le navigateur stocke un JWT token (access token: 15 min, refresh token: 7 jours)
- Le refresh token est envoye automatiquement avant expiration
- La session persiste dans localStorage (optionnel: cookies httpOnly)

**Messages d'erreur :**

| Erreur | Message |
|--------|---------|
| Email deja utilise | "Un compte existe deja avec cette adresse email" |
| Password faible | "Le mot de passe doit contenir au moins 8 caracteres..." |
| Token expire | "Le lien de confirmation a expire. Renvoyez l'email." |
| Code OTP invalide | "Le code de verification est invalide" |
| Rate limit | "Trop de tentatives. Reessayez dans 15 minutes" |

---

### 10.1.2 Connexion

**Description :** Permet a un utilisateur existant d'acceder a son compte.

**Fonctionnalites detaillees :**

| Fonctionnalite | Description |
|---------------|-------------|
| Connexion email/mot de passe | Authentification standard |
| Connexion social | Google, Facebook, Apple |
| Se souvenir de moi | Persiste la session 30 jours |
| Mot de passe oublie | Reinitialisation par email |
| Double authentification | 2FA optionnelle (TOTP/SMS) |
| Verif. device inconnu | Email de notification |
| Compteur tentatives | Verrouillage apres 5 echecs (15 min) |
| Captcha adaptatif | Appele apres 3 tentatives echouees |

**Champs du formulaire :**

| Champ | Type | Obligatoire | Validation |
|-------|------|-------------|------------|
| email | email | Oui | Format email |
| password | password | Oui | Non vide |
| rememberMe | checkbox | Non | Defaut coche |

**Flux de connexion :**

```
1. Saisie email + mot de passe
2. Validation cote client
3. Requete POST /api/v1/auth/login
4. Si succes:
   a. Stocker access token (15 min) + refresh token (7 jours)
   b. Charger le profil utilisateur
   c. Rediriger vers la page precedente ou dashboard
5. Si 2FA active:
   a. Rediriger vers /verify-2fa
   b. Saisie code TOTP ou SMS
   c. Validation -> tokens
6. Si echec:
   a. Incrementer compteur tentatives
   b. Afficher message erreur (ne pas reveler si email existe)
   c. Apres 5 echecs: afficher CAPTCHA
```

**Flux Mot de passe oublie :**

```
1. Clic sur "Mot de passe oublie?"
2. Saisie email
3. Requete POST /api/v1/auth/forgot-password
4. Email envoye avec lien (token, expire 1h)
5. Clic sur lien -> formulaire nouveau mot de passe
6. Validation token + nouveau mot de passe
7. Requete POST /api/v1/auth/reset-password
8. Redirection vers login avec message succes
```

---

### 10.1.3 Deconnexion

**Description :** Termine la session utilisateur.

**Details :**
- Supprime les tokens du stockage local
- Appelle l'API POST /api/v1/auth/logout (invalide le refresh token)
- Redirige vers la page d'accueil
- Reinitialise le state global (Context/Redux)
- Sur demande: deconnexion de toutes les sessions

---

## 10.2 Gestion des profils

### 10.2.1 Profil acheteur

**Description :** Gestion des informations personnelles de l'acheteur.

**Sections :**

| Section | Champs |
|---------|--------|
| Informations personnelles | Prenom, nom, date de naissance, genre |
| Photo de profil | Upload avec crop (max 5 Mo, JPG/PNG/WebP) |
| Email | Modification avec revalidation |
| Telephone | Modification avec revalidation OTP |
| Adresses | Liste, ajout, modification, suppression |
| Preferences | Langue, devise, notifications, theme |
| Securite | Mot de passe, 2FA, sessions actives |
| Notification par email | Commandes, promotions, newsletters, avis |
| Notification push | Commandes, promotions, messages |
| Preferences de notification | Frequence: immediate, quotidienne, hebdomadaire |

**Flux de modification :**

```
1. Clic sur "Modifier"
2. Mode edition (champs modifiables)
3. Validation cote client
4. Enregistrement (PATCH /api/v1/users/profile)
5. Message succes (Toast)
6. Retour mode lecture
```

---

### 10.2.2 Profil vendeur

**Description :** Gestion des informations du vendeur et de sa boutique.

**Sections :**

| Section | Champs |
|---------|--------|
| Informations boutique | Nom, description, logo, banniere |
| Coordonnees | Adresse, ville, pays, code postal |
| Politiques | Retour, livraison, remboursement |
| Statut | Verifie, officiel, premium |
| Statistiques | Ventes, notes, temps reponse |
| Verification | Piece d'identite, registre commerce |
| Abonnement | Plan actuel, facturation, limites |

---

## 10.3 Boutiques

### 10.3.1 Creation de boutique

**Description :** Permet a un vendeur de creer sa boutique.

**Etapes :**

| Etape | Details |
|-------|---------|
| 1. Type de compte | Selection "Vendeur" ou upgrade depuis acheteur |
| 2. Informations boutique | Nom, description, categorie principale, logo, banniere |
| 3. Verification | Piece d'identite + RIB |
| 4. Politiques | Politique de retour, delai de traitement, zones de livraison |
| 5. Abonnement | Selection du plan (gratuit, pro, enterprise) |
| 6. Activation | Verification admin sous 24-48h |
| 7. Premiere connexion | Onboarding guide |

**Conditions de validation :**
- Nom de boutique unique
- Logo minimum 300x300px
- Description minimum 100 caracteres
- Piece d'identite valide
- RIB pour les vendeurs pro

---

### 10.3.2 Gestion de boutique

**Description :** Interface de gestion complete pour le vendeur.

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Dashboard | Vue d'ensemble (ventes, commandes, revenus) |
| Produits | CRUD produits, import/export, duplication |
| Commandes | Gestion des commandes, expedition, suivi |
| Clients | Liste clients, messagerie, notes |
| Marketing | Promotions, codes promo, publicite |
| Analytics | Ventes, trafic, conversions, revenus |
| Parametres | Boutique, livraison, paiements, notifications |
| Support | Tickets, litiges, avis clients |

---

## 10.4 Produits

### 10.4.1 Creation de produit

**Description :** Formulaire de creation d'un nouveau produit.

**Champs du formulaire :**

| Champ | Type | Obligatoire | Details |
|-------|------|-------------|---------|
| name | text | Oui | 5-200 caracteres |
| description | rich-text | Oui | Minimum 50 caracteres |
| shortDescription | text | Oui | 10-300 caracteres |
| category | select | Oui | Categorie principale |
| subcategory | select | Oui | Sous-categorie |
| brand | text | Non | Marque |
| sku | text | Oui | Unique par vendeur |
| price | number | Oui | > 0, 2 decimales |
| originalPrice | number | Non | Prix barre |
| currency | select | Oui | Defaut: EUR |
| stock | number | Oui | >= 0 |
| lowStockThreshold | number | Non | Defaut: 5 |
| weight | number | Non | En kg |
| dimensions | object | Non | L x l x h en cm |
| condition | select | Oui | Neuf / Reconditionne / Occasion |
| images | file[] | Oui | 1-8 images, max 5 Mo chacune |
| video | file | Non | MP4, max 50 Mo |
| tags | multi-select | Non | Mots-cles SEO |
| shipping | select | Oui | Gratuit / Payant |
| shippingCost | number | Si payant | > 0 |
| freeShipping | boolean | Non | Defaut: false |
| estimatedDays | number | Oui | Jours livraison |
| variants | array | Non | Variantes (taille, couleur...) |
| specifications | key-value | Non | Specs techniques |

**Variantes :**

```typescript
interface ProductVariant {
  id: string;
  name: string;
  options: {
    id: string;
    value: string;
    image?: string;
    colorCode?: string;
    additionalPrice?: number;
    stock: number;
    sku: string;
  }[];
}
```

---

### 10.4.2 Edition de produit

**Description :** Modification d'un produit existant.

**Details :**
- Pre-remplissage du formulaire avec les donnees actuelles
- Historique des modifications
- Gestion des variantes (ajout, suppression, reorganisation)
- Preview en temps reel
- Sauvegarde automatique (brouillon)
- Notification aux clients qui ont le produit en favori si prix change

---

### 10.4.3 Publication / Brouillon

**Description :** Gestion du statut de publication.

**Statuts :**

| Statut | Description |
|--------|-------------|
| draft | Brouillon, non visible |
| pending | En attente de validation admin |
| published | Publie, visible |
| archived | Archive, non visible |
| suspended | Suspendu par admin |
| sold_out | Epuise, visible mais non achetable |

---

## 10.5 Gestion des images

### 10.5.1 Upload d'images

**Description :** Systeme d'upload et de gestion des images produits.

**Specifications :**

| Parametre | Valeur |
|-----------|--------|
| Formats acceptes | JPG, JPEG, PNG, WebP, GIF |
| Taille max | 5 Mo par image |
| Dimensions min | 800x800 px |
| Dimensions max | 5000x5000 px |
| Nombre max | 8 images par produit |
| Resolution | 72 dpi min |
| Espace couleur | sRGB |

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Drag and drop | Deposer les fichiers |
| Selection fichiers | Explorer de fichiers |
| Upload multiple | Plusieurs fichiers en parallele |
| Progression | Barre de progression par image |
| Crop | Recadrage libre, carre, 16:9 |
| Rotation | 0, 90, 180, 270 degres |
| Zoom | Zoom molette |
| Suppression | Confirmation avant suppression |
| Reorganisation | Drag pour reordonner |
| Miniatures | Generation automatique (400x400, 200x200) |

---

### 10.5.2 Optimisation des images

**Description :** Pipeline d'optimisation automatique.

**Traitements :**

| Traitement | Description |
|-----------|-------------|
| Compression | WebP auto, JPEG 85%, PNG optimise |
| Resize | Creation de 3 tailles: thumb, medium, large |
| Format | Conversion WebP si non supporte |
| CDN | Distribution via CDN global |
| Lazy loading | Chargement differe |
| Cache | Cache navigateur + CDN |

---

## 10.6 Gestion des videos

### 10.6.1 Upload de videos

**Description :** Systeme d'upload et de gestion des videos produits.

**Specifications :**

| Parametre | Valeur |
|-----------|--------|
| Formats acceptes | MP4, MOV, WebM |
| Taille max | 50 Mo |
| Duree max | 3 minutes |
| Resolution | 720p min, 4K max |
| Nombre max | 1 video par produit |

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Upload | Selection ou drag and drop |
| Progression | Barre de progression |
| Preview | Apercu avant envoi |
| Trim | Decoupage debut/fin |
| Miniature | Selection de la frame |
| Encodage | Transcodage multi-qualite (360p, 720p, 1080p) |
| Streaming | Progressive + adaptive (HLS) |

---

## 10.7 Gestion des stocks

### 10.7.1 Suivi des stocks

**Description :** Suivi en temps reel des niveaux de stock.

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Stock principal | Quantite totale disponible |
| Stock par variante | Quantite par variante |
| Seuil d'alerte | Notification si stock < seuil |
| Historique mouvements | Entrees, sorties, ajustements |
| Mode inventaire | Comptage periodique |
| Synchronisation | Stock unifie multivendeur |
| Gestion multi-entrepot | Stock par localisation |
| Commandes en cours | Stock reserve non expedie |
| Stock disponible | Stock total - reserve |

**Etats du stock :**

| Etat | Condition | Affichage |
|------|-----------|-----------|
| Disponible | stock > 0 | Badge vert |
| Stock faible | stock <= seuil | Badge orange |
| Epuise | stock = 0 | Badge rouge |
| Precommande | stock = 0, precommande active | Badge bleu |

---

## 10.8 Commandes

### 10.8.1 Flux de commande

**Description :** Cycle de vie complet d'une commande.

**Etapes :**

| Etape | Statut | Actions vendeur | Actions acheteur |
|-------|--------|-----------------|------------------|
| 1 | pending | Recevoir notification | Paiement en attente |
| 2 | paid | Confirmer / Refuser | - |
| 3 | confirmed | Preparer | Suivre |
| 4 | processing | Emballer | - |
| 5 | shipped | Inserer tracking | Suivre livraison |
| 6 | delivered | - | Confirmer reception |
| 7 | completed | - | Laisser avis |

**Statuts detailles :**

| Statut | Description | Duree max |
|--------|-------------|-----------|
| pending | En attente de paiement | 30 min |
| paid | Paye, en attente confirmation vendeur | 48h |
| confirmed | Confirme par le vendeur | - |
| processing | En cours de preparation | 7 jours |
| shipped | Expedie avec numero de suivi | - |
| delivered | Livre | 14 jours |
| completed | Termine | - |
| cancelled | Annule | - |
| refunded | Rembourse | - |
| disputed | Litige ouvert | 30 jours |

---

### 10.8.2 Annulation

**Description :** Possibilite d'annulation selon le statut.

**Regles :**

| Statut | Annulable par acheteur | Annulable par vendeur |
|--------|----------------------|----------------------|
| pending | Oui | Oui |
| paid | Oui | Oui |
| confirmed | Non | Oui (remboursement auto) |
| processing | Non | Oui (remboursement auto) |
| shipped | Non | Non |
| delivered | Non | Non |

---

## 10.9 Paiements

### 10.9.1 Methodes de paiement

**Description :** Support de multiples methodes de paiement.

**Methodes supportees :**

| Methode | Zones | Delai traitement |
|---------|-------|------------------|
| Carte bancaire (Visa, Mastercard, Amex) | Mondial | Instantane |
| PayPal | Mondial | Instantane |
| Apple Pay | International | Instantane |
| Google Pay | International | Instantane |
| Virement bancaire | Europe | 1-3 jours |
| Klarna (3x sans frais) | France, Allemagne, UK | Instantane |
| Alipay | Asie | Instantane |
| WeChat Pay | Asie | Instantane |
| Paiement a la livraison | Zones selectes | A la livraison |

**Securite :**
- Tokenisation PCI DSS niveau 1
- 3D Secure 2.0 obligatoire pour les cartes
- Verification AVS (Adresse)
- Anti-fraude algorithmique (machine learning)
- 3DS exemption pour les petits montants

---

### 10.9.2 Escrow / Sequestre

**Description :** Protection des fonds pendant la transaction.

**Mecanisme :**

```
1. L'acheteur paie -> fonds bloques (escrow)
2. Le vendeur expedie -> delai de protection
3. L'acheteur recoit -> delai de 48h pour confirmer
4. Confirmation -> fonds liberes au vendeur (moins commission)
5. Litige -> fonds bloques jusqu'a resolution
```

**Delais :**

| Scenario | Delai |
|----------|-------|
| Confirmation auto | 48h apres livraison confirme |
| Delai protection | 14 jours max |
| Contestation | 30 jours |
| Remboursement | 3-5 jours ouvrables |

---

### 10.9.3 Remboursement

**Description :** Systeme de remboursement partiel ou total.

**Types :**

| Type | Description | Delai |
|------|-------------|-------|
| Total | Remboursement integral | 3-5 jours ouvrables |
| Partiel | Montant specifique | 3-5 jours ouvrables |
| Frais de livraison | Uniquement la livraison | 3-5 jours ouvrables |
| Annulation vendeur | Auto: total + frais livraison | 3-5 jours ouvrables |

---

## 10.10 Favoris

### 10.10.1 Liste de favoris

**Description :** Ajout et gestion des produits favoris.

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Ajout/Retrait | Toggle avec animation |
| Notification | Alerte si prix baisse |
| Notification | Alerte si stock faible |
| Liste publique | Partageable |
| Import/Export | Via CSV |
| Limite | 500 produits |
| Tri | Par date ajout, prix, note |
| Filtrage | Par categorie, vendeur, prix |
| Partage | Lien de partage |
| Comparaison | Selection pour comparaison |
| Alerte prix | Objectif prix cible |

---

## 10.11 Recherche

### 10.11.1 Recherche globale

**Description :** Moteur de recherche unifie sur toute la plateforme.

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Autocomplete | Suggestions en temps reel (debounce 200ms) |
| Recherche semantique | Comprehension de l'intention |
| Correction orthographique | "Did you mean...?" |
| Suggestions recentes | Historique personnel |
| Suggestions tendances | Recherches populaires |
| Filtrage par categorie | Affiner la recherche |
| Filtrage par vendeur | Rechercher dans une boutique |
| Tri | Pertinence, prix, date, note, ventes |
| Recherche vocale | Via Web Speech API |
| Recherche image | Upload image similaire |
| QR code | Scanner un code produit |
| Pagination | Infinite scroll ou pages |
| Resultats enrichis | Cartes produits dans les suggestions |

---

### 10.11.2 Recherche avancee

**Description :** Criteres de recherche detailles.

**Criteres :**

| Critere | Type | Details |
|---------|------|---------|
| Mots-cles | text | Recherche plein texte |
| Categorie | select | Categorie/sous-categorie |
| Prix | range | Min-max |
| Note | rating | Note minimum |
| Vendeur | text | Nom boutique |
| Etat | select | Neuf, occasion, reconditionne |
| Livraison | select | Gratuite ou non |
| Localisation | text | Pays, region, ville |
| Disponibilite | toggle | En stock uniquement |
| Promotion | toggle | En promotion uniquement |
| Date ajout | date | Publies apres le... |
| Tri | select | Pertinence, prix, note, date |

---

## 10.12 Filtrage

### 10.12.1 Filtres dynamiques

**Description :** Systeme de filtrage adaptatif selon la categorie.

**Filtres communs :**

| Filtre | Type | Description |
|--------|------|-------------|
| Categorie | checkbox | Categories disponibles |
| Prix | range | Fourchette de prix |
| Note | rating | Note minimum |
| Etat | checkbox | Condition produit |
| Livraison | checkbox | Gratuite uniquement |
| Vendeur | checkbox | Boutique specifique |
| Marque | checkbox | Marques disponibles |
| Promotion | checkbox | En promotion |
| Disponibilite | toggle | En stock |

**Filtres specifiques par categorie :**

| Categorie | Filtres additionnels |
|-----------|---------------------|
| Vetements | Taille, couleur, matiere, style, saison |
| Electronique | Marque, connectivite, capacite, resolution |
| Maison | Type, materiau, style, piece |
| Sport | Sport, niveau, taille, genre |
| Auto | Marque vehicule, annee, type piece |

**Comportement :**
- Les filtres se mettent a jour selon la categorie selectionnee
- Les compteurs de resultats se recalculent en temps reel
- Les filtres incompatibles sont grises
- Les filtres actifs sont visibles en haut (chips avec X)

---

## 10.13 Messagerie

### 10.13.1 Messagerie privee

**Description :** Systeme de messagerie entre utilisateurs.

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Conversations | Liste des conversations |
| Messages texte | Envoi/reception temps reel (WebSocket) |
| Images | Envoi d'images (max 5) |
| Fichiers | Envoi de documents (max 10 Mo) |
| Emojis | Selecteur d'emojis |
| Reponse rapide | Boutons de reponse |
| Statut | En ligne, lu, envoye |
| Recherche | Dans les messages |
| Notification | Push + email |
| Suppression | Messages individuels ou conversation |
| Signalement | Abus, spam, inappropriate |
| Bloquer | Bloquer un utilisateur |
| Historique | Conservation indefinie |

---

## 10.14 Notifications

### 10.14.1 Centre de notifications

**Description :** Gestion centralisee de toutes les notifications.

**Types de notifications :**

| Type | Canaux | Description |
|------|--------|-------------|
| Commande | Push, Email, In-app | Nouvelle commande, statut |
| Paiement | Push, Email | Paiement recu, remboursement |
| Message | Push, In-app | Nouveau message |
| Promotion | Email, In-app | Offres, soldes, codes promo |
| Avis | Push, Email | Nouvel avis recu |
| Stock | Push | Produit en stock |
| Prix | Push | Baisse de prix |
| Favori | Email | Produit favori en promo |
| Systeme | In-app | Maintenance, mises a jour |
| Support | Push, Email | Reponse support |

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Badge compteur | Non-lus dans le header |
| Panel deroulant | 10 dernieres notifications |
| Marquer lu | Individuellement ou toutes |
| Supprimer | Individuellement ou toutes |
| Centrale | Page /notifications avec filtres |
| Preferences | Parametrer par type |
| Push browser | Notifications push |
| Email digest | Resume quotidien/hebdo |
| Silence | Pause temporaire |

---

## 10.15 Avis et evaluations

### 10.15.1 Deposer un avis

**Description :** Permet aux acheteurs de laisser un avis sur un produit.

**Champs :**

| Champ | Type | Obligatoire | Details |
|-------|------|-------------|---------|
| rating | stars | Oui | 1 a 5 etoiles |
| title | text | Non | Titre de l'avis (max 100) |
| content | textarea | Oui | Texte (min 10, max 2000) |
| images | file[] | Non | Photos (max 5, 5 Mo chacune) |
| recommend | boolean | Non | Recommande / Non recommande |

**Conditions :**
- Avoir achete le produit (verification)
- Delai de 14 jours apres livraison
- Un seul avis par produit par utilisateur
- Modifiable dans les 30 jours
- Supprimable par l'auteur
- Signalement par les autres utilisateurs

---

### 10.15.2 Reponse vendeur

**Description :** Le vendeur peut repondre aux avis.

**Details :**
- Une seule reponse par avis
- Visible sous l'avis
- Notification a l'acheteur
- Modifiable par le vendeur

---

### 10.15.3 Utilite des avis

**Description :** Vote d'utilite des avis.

**Details :**
- Bouton "Utile" / "Pas utile"
- Compteur visible
- Avis tries par utilite
- Impact sur le classement

---

## 10.16 Historique

### 10.16.1 Historique de navigation

**Description :** Suivi des produits vus.

**Details :**
- Derniers 50 produits vus
- Stocke localement (localStorage)
- Suggestion basee sur l'historique
- Suppression individuelle ou globale

---

### 10.16.2 Historique d'achat

**Description :** Liste des achats passes.

**Details :**
- Toutes les commandes
- Filtres par statut, date, vendeur
- Recherche dans les commandes
- Recommandation (recommander)

---

## 10.17 Factures

### 10.17.1 Generation de factures

**Description :** Generation automatique de factures.

**Contenu de la facture :**

| Element | Details |
|---------|---------|
| En-tete | Logo, nom vendeur, SIRET, adresse |
| Facture numero | Numero unique (FAC-YYYY-XXXXX) |
| Date | Date de la facture |
| Client | Nom, adresse email |
| Articles | Liste des produits, quantites, prix HT, TVA, TTC |
| Sous-total | HT, TVA, TTC |
| Frais de livraison | Montant HT, TVA, TTC |
| Total | TTC avec TVA detaillee |
| Paiement | Methode, reference |
| Mentions legales | Objet, reglement, penalites |

**Formats :**
- PDF genere automatiquement
- Telechargeable depuis la page commande
- Envoye par email automatiquement
- Archive dans l'espace client

---

## 10.18 Statistiques et analytics

### 10.18.1 Dashboard vendeur

**Description :** Tableau de bord analytique pour le vendeur.

**Metriques principales :**

| Metrique | Periode | Description |
|----------|---------|-------------|
| Chiffre d'affaires | Jour/Semaine/Mois/Annee | CA total |
| Nombre de ventes | Jour/Semaine/Mois/Annee | Commandes |
| Panier moyen | Jour/Semaine/Mois/Annee | CA / Nombre commandes |
| Taux de conversion | Jour/Semaine/Mois/Annee | Visites / Ventes |
| Produits vendus | Jour/Semaine/Mois/Annee | Unites |
| Note moyenne | En cours | Moyenne des avis |
| Temps de reponse | En cours | Delai reponse messages |
| Taux de satisfaction | En cours | % avis positifs |
| Revenu net | Jour/Semaine/Mois/Annee | CA - commissions - frais |
| Trafic boutique | Jour/Semaine/Mois/Annee | Visites |
| Produits les plus vus | 7/30/90 jours | Top produits |
| Sources de trafic | 7/30/90 jours | Provenance visiteurs |
| Geographie clients | 30/90 jours | Pays, villes |
| Taux de retour | Mensuel | % retours |
| Marge beneficiaire | Mensuel | Marge nette |

**Graphiques :**

| Graphique | Type | Description |
|-----------|------|-------------|
| Evolution ventes | Line | Ventes dans le temps |
| Repartition categories | Pie | Ventes par categorie |
| Top produits | Bar | 10 meilleurs produits |
| Conversion | Funnel | Visite -> Panier -> Achat |
| Revenu cumule | Area | CA cumule dans le temps |
| Jours de la semaine | Bar | Ventes par jour |
| Heures de pointe | Heatmap | Heures les plus actives |

---

## 10.19 Administration

### 10.19.1 Dashboard admin

**Description :** Tableau de bord pour l'administration.

**Sections :**

| Section | Description |
|---------|-------------|
| Vue d'ensemble | KPIs globaux |
| Utilisateurs | Gestion des comptes |
| Vendeurs | Validation, suivi, sanctions |
| Produits | Validation, moderation |
| Commandes | Litiges, annulations |
| Paiements | Transactions, remboursements |
| Contenus | Signalements, avis, messages |
| Marketing | Promotions, publicites |
| Systeme | Configuration, maintenance |

**KPIs admin :**

| KPI | Description |
|-----|-------------|
| Utilisateurs totaux | Nombre total |
| Nouveaux / jour | Inscriptions quotidiennes |
| Vendeurs actifs | Ventes > 0 / mois |
| CA total | Chiffre d'affaires |
| Commission | Revenu plateforme |
| Commandes / jour | Volume |
| Litiges ouverts | En cours |
| Taux satisfaction | Note moyenne |

---

### 10.19.2 Moderation

**Description :** Systeme de moderation des contenus.

**Actions :**

| Action | Description |
|--------|-------------|
| Approuver | Validation contenu |
| Rejeter | Refus avec motif |
| Suspendre | Desactivation temporaire |
| Supprimer | Retrait definitif |
| Avertir | Notification d'avertissement |
| Bannir | Exclusion permanente |

**Contenus soumis a moderation :**
- Produits (apres creation)
- Avis (apres publication)
- Photos d'utilisateurs
- Messages signales
- Signalements

---

## 10.20 Parametres

### 10.20.1 Parametres generaux

**Description :** Configuration generale de l'application.

| Parametre | Description | Valeurs |
|-----------|-------------|---------|
| Langue | Langue de l'interface | FR, EN, ES, DE, AR, ZH |
| Devise | Devise d'affichage | EUR, USD, GBP, MAD, etc. |
| Fuseau horaire | Zone horaire | Auto / Manuel |
| Theme | Apparence | Light, Dark, System |
| Notifications | Preferences par type | Par canal, par type |
| Confidentialite | Visibilite profil | Public, Amis, Prive |
| Securite | 2FA, sessions, mdp | Configuration |
| Cookies | Preferences | Strict, Analytique, Marketing |
| Accessibilite | Taille texte, contraste | Options |

---

## 10.21 Support client

### 10.21.1 Centre d'aide

**Description :** Base de connaissances et assistance.

**Contenu :**

| Section | Description |
|---------|-------------|
| FAQ | Questions frequentes (50+ articles) |
| Guides | Tutoriels pas a pas |
| Videos | Videos explicatives |
| Contact | Formulaire de contact |
| Chat en direct | Support temps reel |
| Tickets | Suivi des demandes |
| Signalement | Signaler un probleme |

**Structure de la FAQ :**

| Categorie | Exemples |
|-----------|---------|
| Compte | Inscription, connexion, parametres |
| Achats | Commande, paiement, livraison |
| Ventes | Boutique, produits, commandes |
| Paiements | Cartes, remboursements, factures |
| Securite | Mot de passe, 2FA, arnaques |
| Technique | Application, navigation, bugs |
| Legale | CGV, RGPD, litiges |

---

## 10.22 Panier

### 10.22.1 Gestion du panier

**Description :** Panier d'achat persistant.

**Fonctionnalites :**

| Fonctionnalite | Description |
|---------------|-------------|
| Persistance | Panier sauvegarde (localStorage + serveur) |
| Multi-device | Synchronise entre appareils |
| Ajout | Depuis la page produit ou la recherche |
| Quantite | Modification avec + / - |
| Suppression | Suppression individuelle |
| Selection | Cocher/decocher pour commande |
| Sauvegarder | Enregistrer pour plus tard |
| Partager | Lien de partage du panier |
| Recommandations | Produits similaires dans le panier |
| Code promo | Application de code de reduction |
| Calcul en temps reel | Total, livraison, taxes, reductions |
| Gestion stock | Verification stock avant paiement |
| Expiration | Produits retires si stock epuise |
| Delai | 30 jours de conservation |
| Max articles | 50 produits |

---

## 10.23 Livraison et suivi

### 10.23.1 Options de livraison

**Description :** Multiples options de livraison.

| Option | Delai | Prix | Zones |
|--------|-------|------|-------|
| Standard | 3-5 jours | 0-4.99 EUR | France |
| Express | 1-2 jours | 9.99 EUR | France |
| Point relais | 3-7 jours | 2.99 EUR | France |
| Mondial Relay | 5-10 jours | 3.99 EUR | Europe |
| International | 7-21 jours | 12.99 EUR | Monde |
| Retrait magasin | Immediat | Gratuit | Points relais |
| Livraison le lendemain | 1 jour | 14.99 EUR | Paris + grande ville |

---

### 10.23.2 Suivi de livraison

**Description :** Suivi en temps reel de la livraison.

**Informations de suivi :**

| Information | Details |
|-------------|---------|
| Transporteur | Nom, logo |
| Numero de suivi | Code de suivi |
| Lien de suivi | Page externe |
| Etapes | Confirme -> Expedie -> En cours -> Livre |
| Date estimee | Jour prevu |
| Signature | Preuve de livraison |
| Photo | Photo du colis |

---

### 10.23.3 Politique de retour

**Description :** Conditions et processus de retour.

**Conditions :**

| Condition | Details |
|-----------|---------|
| Delai | 14 jours apres reception |
| Etat | Produit non utilise, emballage d'origine |
| Exceptions | Produits personnalises, sous-vetements, nourriture |
| Frais | Offerts (vendeur ou plateforme) |
| Remboursement | Original ou credit boutique |

**Processus :**

```
1. Demande de retour depuis la page commande
2. Selection du motif (taille, defaut, etc.)
3. Validation par le vendeur (48h)
4. Expedition du retour (etiquette prepayee)
5. Reception et verification (72h)
6. Remboursement (3-5 jours ouvrables)
```


---

# CHAPITRE 11 : Points d'entree API (API Endpoints)

---

## Table des matieres du Chapitre 11

- 11.1 Authentification (/api/v1/auth)
- 11.2 Utilisateurs (/api/v1/users)
- 11.3 Produits (/api/v1/products)
- 11.4 Categories (/api/v1/categories)
- 11.5 Boutiques (/api/v1/shops)
- 11.6 Commandes (/api/v1/orders)
- 11.7 Paiements (/api/v1/payments)
- 11.8 Avis (/api/v1/reviews)
- 11.9 Favoris (/api/v1/favorites)
- 11.10 Messages (/api/v1/messages)
- 11.11 Notifications (/api/v1/notifications)
- 11.12 Recherche (/api/v1/search)
- 11.13 Panier (/api/v1/cart)
- 11.14 Livraison (/api/v1/shipping)
- 11.15 Support (/api/v1/support)
- 11.16 Administration (/api/v1/admin)
- 11.17 Upload (/api/v1/upload)

---

## Convention generale

**Base URL :** `https://api.marketplace.com/api/v1`

**Headers :**
```
Content-Type: application/json
Authorization: Bearer <access_token>
X-Request-Id: <uuid>
X-Client-Version: 1.0.0
Accept-Language: fr-FR
```

**Format de reponse standard :**

```typescript
// Succes
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}

// Erreur
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email invalide",
    "details": [
      { "field": "email", "message": "Format email invalide" }
    ]
  }
}
```

**Codes d'erreur :**

| Code HTTP | Signification |
|-----------|---------------|
| 200 | Succes |
| 201 | Cree |
| 204 | Supprime (pas de contenu) |
| 400 | Requete invalide |
| 401 | Non authentifie |
| 403 | Non autorise |
| 404 | Non trouve |
| 409 | Conflit (doublon) |
| 422 | Entite non traitable (validation) |
| 429 | Trop de requetes (rate limit) |
| 500 | Erreur serveur |

---

## 11.1 Authentification

### POST /api/v1/auth/register
**Description :** Inscription d'un nouvel utilisateur.

**Body :**
```typescript
{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  acceptTerms: boolean;
  acceptNewsletter?: boolean;
  accountType?: 'buyer' | 'seller' | 'both';
}
```

**Reponse 201 :**
```typescript
{
  success: true,
  data: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      role: 'buyer' | 'seller' | 'admin';
      emailVerified: boolean;
      createdAt: string;
    },
    message: string;
  }
}
```

**Erreurs :**

| Code | Message |
|------|---------|
| 409 | Email already exists |
| 422 | Validation errors |
| 429 | Too many attempts |

---

### POST /api/v1/auth/login
**Description :** Connexion utilisateur.

**Body :**
```typescript
{
  email: string;
  password: string;
  rememberMe?: boolean;
}
```

**Reponse 200 :**
```typescript
{
  success: true,
  data: {
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      avatar?: string;
      role: 'buyer' | 'seller' | 'admin';
    },
    tokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    },
    requires2FA?: boolean;
  }
}
```

---

### POST /api/v1/auth/logout
**Description :** Deconnexion (invalide le refresh token).

**Headers :** Authorization: Bearer <access_token>

**Body :**
```typescript
{
  refreshToken?: string;
  allDevices?: boolean;
}
```

---

### POST /api/v1/auth/forgot-password
**Description :** Demande de reinitialisation mot de passe.

**Body :** `{ email: string; }`

---

### POST /api/v1/auth/reset-password
**Description :** Reinitialisation mot de passe.

**Body :**
```typescript
{
  token: string;
  password: string;
  confirmPassword: string;
}
```

---

### POST /api/v1/auth/verify-email
**Description :** Verification d'email.

**Body :** `{ token: string; }`

---

### POST /api/v1/auth/resend-verification
**Description :** Renvoyer l'email de verification.

**Body :** `{ email: string; }`

---

### POST /api/v1/auth/verify-2fa
**Description :** Verification code 2FA.

**Body :**
```typescript
{
  code: string;
  sessionToken: string;
}
```

---

### POST /api/v1/auth/refresh-token
**Description :** Renouvellement du access token.

**Body :** `{ refreshToken: string; }`

---

### POST /api/v1/auth/social/:provider
**Description :** Connexion/inscription sociale.

**Params :** provider = 'google' | 'facebook' | 'apple'

**Body :**
```typescript
{
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}
```

---

### POST /api/v1/auth/change-password
**Description :** Changement de mot de passe.

**Body :**
```typescript
{
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
```

---

### POST /api/v1/auth/enable-2fa
**Description :** Activation 2FA.

**Reponse 200 :**
```typescript
{
  success: true,
  data: {
    secret: string;
    qrCode: string;
    backupCodes: string[];
  }
}
```

---

### POST /api/v1/auth/disable-2fa
**Description :** Desactivation 2FA.

**Body :** `{ code: string; }`

---

## 11.2 Utilisateurs

### GET /api/v1/users/me
**Description :** Profil utilisateur connecte.

---

### PATCH /api/v1/users/me
**Description :** Mise a jour du profil.

**Body :**
```typescript
{
  firstName?: string;
  lastName?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  bio?: string;
  preferences?: {
    language?: string;
    currency?: string;
    theme?: string;
    notifications?: {
      email?: boolean;
      push?: boolean;
      sms?: boolean;
    };
  };
}
```

---

### PUT /api/v1/users/me/avatar
**Description :** Mise a jour de l'avatar.

---

### POST /api/v1/users/me/addresses
**Description :** Ajout d'une adresse.

**Body :**
```typescript
{
  label: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault?: boolean;
}
```

---

### GET /api/v1/users/me/addresses
**Description :** Liste des adresses.

---

### PATCH /api/v1/users/me/addresses/:id
**Description :** Mise a jour d'une adresse.

---

### DELETE /api/v1/users/me/addresses/:id
**Description :** Suppression d'une adresse.

---

### GET /api/v1/users/:id/public
**Description :** Profil public d'un utilisateur.

---

### POST /api/v1/users/me/delete-request
**Description :** Demande de suppression de compte.

---

## 11.3 Produits

### GET /api/v1/products
**Description :** Liste des produits (paginee, filtree, triee).

**Query params :**

| Param | Type | Defaut | Description |
|-------|------|--------|-------------|
| page | number | 1 | Page |
| limit | number | 20 | Elements/page |
| sort | string | created_at:desc | Tri |
| category | string | - | ID categorie |
| subcategory | string | - | ID sous-categorie |
| minPrice | number | - | Prix min |
| maxPrice | number | - | Prix max |
| rating | number | - | Note min |
| condition | string | - | Neuf/occasion |
| freeShipping | boolean | - | Livraison gratuite |
| onSale | boolean | - | En promotion |
| seller | string | - | ID vendeur |
| shop | string | - | ID boutique |
| brand | string | - | Marque |
| inStock | boolean | true | En stock |
| tags | string | - | Tags (virgule) |

---

### GET /api/v1/products/:id
**Description :** Details d'un produit.

---

### POST /api/v1/products
**Description :** Creation d'un produit (vendeur uniquement).

**Body :**
```typescript
{
  name: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  subcategoryId: string;
  brand?: string;
  price: number;
  originalPrice?: number;
  currency: string;
  stock: number;
  lowStockThreshold?: number;
  condition: 'new' | 'refurbished' | 'used';
  weight?: number;
  dimensions?: { length: number; width: number; height: number };
  images: string[];
  videoId?: string;
  tags?: string[];
  shipping: {
    free: boolean;
    cost?: number;
    estimatedDays: number;
  };
  variants?: ProductVariant[];
  specifications?: Specification[];
}
```

---

### PATCH /api/v1/products/:id
**Description :** Mise a jour d'un produit.

---

### DELETE /api/v1/products/:id
**Description :** Suppression d'un produit.

---

### POST /api/v1/products/:id/publish
**Description :** Publier un produit.

---

### POST /api/v1/products/:id/archive
**Description :** Archiver un produit.

---

### GET /api/v1/products/:id/variants
**Description :** Liste des variantes.

---

### POST /api/v1/products/:id/variants
**Description :** Ajout d'une variante.

---

### PATCH /api/v1/products/:id/variants/:variantId
**Description :** Mise a jour d'une variante.

---

### DELETE /api/v1/products/:id/variants/:variantId
**Description :** Suppression d'une variante.

---

### POST /api/v1/products/:id/duplicate
**Description :** Dupliquer un produit.

---

### GET /api/v1/products/seller
**Description :** Produits du vendeur connecte.

---

### POST /api/v1/products/bulk
**Description :** Import en masse (CSV/Excel).

---

### GET /api/v1/products/:id/related
**Description :** Produits associes/recommandes.

---

## 11.4 Categories

### GET /api/v1/categories
**Description :** Arbre des categories.

---

### GET /api/v1/categories/:id
**Description :** Details d'une categorie.

---

### GET /api/v1/categories/:id/subcategories
**Description :** Sous-categories d'une categorie.

---

## 11.5 Boutiques

### GET /api/v1/shops
**Description :** Liste des boutiques.

---

### GET /api/v1/shops/:id
**Description :** Details d'une boutique.

---

### POST /api/v1/shops
**Description :** Creation d'une boutique.

---

### PATCH /api/v1/shops/:id
**Description :** Mise a jour d'une boutique.

---

### GET /api/v1/shops/:id/products
**Description :** Produits d'une boutique.

---

### GET /api/v1/shops/:id/reviews
**Description :** Avis d'une boutique.

---

### POST /api/v1/shops/:id/follow
**Description :** Suivre/Ne plus suivre une boutique.

---

### GET /api/v1/shops/:id/followers
**Description :** Liste des abonnes.

---

### GET /api/v1/shops/seller/me
**Description :** Boutique du vendeur connecte.

---

### PATCH /api/v1/shops/seller/settings
**Description :** Parametres de la boutique vendeur.

---

## 11.6 Commandes

### GET /api/v1/orders
**Description :** Commandes de l'utilisateur.

**Query params :**

| Param | Type | Description |
|-------|------|-------------|
| status | string | Filtrer par statut |
| page | number | Page |
| limit | number | Elements/page |
| sort | string | Tri |
| startDate | string | Date debut |
| endDate | string | Date fin |
| search | string | Recherche |

---

### GET /api/v1/orders/:id
**Description :** Details d'une commande.

---

### POST /api/v1/orders
**Description :** Creation d'une commande (checkout).

**Body :**
```typescript
{
  items: {
    productId: string;
    quantity: number;
    variantId?: string;
    selectedAttributes?: Record<string, string>;
  }[];
  shippingAddressId: string;
  billingAddressId?: string;
  shippingMethodId: string;
  paymentMethodId: string;
  couponCode?: string;
  notes?: string;
}
```

---

### POST /api/v1/orders/:id/cancel
**Description :** Annulation d'une commande.

**Body :** `{ reason: string; details?: string; }`

---

### POST /api/v1/orders/:id/confirm-reception
**Description :** Confirmation de reception.

---

### GET /api/v1/orders/:id/tracking
**Description :** Suivi de livraison.

---

### POST /api/v1/orders/:id/dispute
**Description :** Ouvrir un litige.

**Body :**
```typescript
{
  reason: string;
  description: string;
  evidence?: string[];
}
```

---

### POST /api/v1/orders/:id/refund-request
**Description :** Demande de remboursement.

---

### GET /api/v1/orders/seller
**Description :** Commandes recues par le vendeur.

---

### PATCH /api/v1/orders/seller/:id/status
**Description :** Mise a jour du statut (vendeur).

**Body :**
```typescript
{
  status: 'confirmed' | 'processing' | 'shipped';
  trackingNumber?: string;
  carrier?: string;
  estimatedDelivery?: string;
}
```

---

### POST /api/v1/orders/:id/invoice
**Description :** Generer la facture PDF.

---

## 11.7 Paiements

### POST /api/v1/payments/create-intent
**Description :** Creer une intention de paiement.

**Body :**
```typescript
{
  orderId: string;
  amount: number;
  currency: string;
  paymentMethod: 'card' | 'paypal' | 'apple_pay' | 'google_pay' | 'klarna';
  returnUrl?: string;
}
```

---

### POST /api/v1/payments/confirm
**Description :** Confirmer un paiement.

**Body :**
```typescript
{
  paymentIntentId: string;
  paymentMethodId?: string;
  threeDSecureToken?: string;
}
```

---

### GET /api/v1/payments/:id
**Description :** Details d'un paiement.

---

### GET /api/v1/payments/history
**Description :** Historique des paiements.

---

### POST /api/v1/payments/refund
**Description :** Demande de remboursement.

**Body :**
```typescript
{
  paymentId: string;
  amount?: number;
  reason: string;
}
```

---

### GET /api/v1/payments/methods
**Description :** Methodes de paiement enregistrees.

---

### POST /api/v1/payments/methods
**Description :** Ajouter une methode de paiement.

---

### DELETE /api/v1/payments/methods/:id
**Description :** Supprimer une methode de paiement.

---

### POST /api/v1/payments/webhook
**Description :** Webhook de confirmation de paiement.

---

### POST /api/v1/payments/escrow/release
**Description :** Liberer les fonds en escrow (admin).

---

### POST /api/v1/payments/payout
**Description :** Declencher un versement vendeur.

---

## 11.8 Avis

### GET /api/v1/reviews
**Description :** Liste des avis.

**Query params :**

| Param | Type | Description |
|-------|------|-------------|
| product | string | ID produit |
| seller | string | ID vendeur |
| rating | number | Note exacte |
| minRating | number | Note minimum |
| sort | string | Tri |
| page | number | Page |
| limit | number | Elements/page |

---

### POST /api/v1/reviews
**Description :** Deposer un avis.

**Body :**
```typescript
{
  productId: string;
  orderId: string;
  rating: number;
  title?: string;
  content: string;
  images?: string[];
  recommend?: boolean;
}
```

---

### GET /api/v1/reviews/:id
**Description :** Details d'un avis.

---

### PATCH /api/v1/reviews/:id
**Description :** Modifier un avis.

---

### DELETE /api/v1/reviews/:id
**Description :** Supprimer un avis.

---

### POST /api/v1/reviews/:id/helpful
**Description :** Voter Utile.

---

### POST /api/v1/reviews/:id/report
**Description :** Signaler un avis.

---

### POST /api/v1/reviews/:id/reply
**Description :** Reponse du vendeur.

---

### GET /api/v1/reviews/seller/stats
**Description :** Statistiques des avis vendeur.

---

## 11.9 Favoris

### GET /api/v1/favorites
**Description :** Liste des favoris.

---

### POST /api/v1/favorites/:productId
**Description :** Ajouter aux favoris.

---

### DELETE /api/v1/favorites/:productId
**Description :** Retirer des favoris.

---

### GET /api/v1/favorites/check/:productId
**Description :** Verifier si un produit est en favori.

---

### GET /api/v1/favorites/price-alerts
**Description :** Alertes prix actives.

---

### POST /api/v1/favorites/price-alerts
**Description :** Creer une alerte prix.

**Body :** `{ productId: string; targetPrice: number; }`

---

## 11.10 Messages

### GET /api/v1/messages/conversations
**Description :** Liste des conversations.

---

### POST /api/v1/messages/conversations
**Description :** Creer une conversation.

**Body :**
```typescript
{
  recipientId: string;
  productId?: string;
  initialMessage: string;
}
```

---

### GET /api/v1/messages/conversations/:id
**Description :** Messages d'une conversation.

---

### POST /api/v1/messages/conversations/:id/messages
**Description :** Envoyer un message.

**Body :**
```typescript
{
  content: string;
  attachments?: string[];
}
```

---

### PATCH /api/v1/messages/conversations/:id/read
**Description :** Marquer comme lu.

---

### DELETE /api/v1/messages/conversations/:id
**Description :** Supprimer une conversation.

---

### POST /api/v1/messages/block/:userId
**Description :** Bloquer un utilisateur.

---

### GET /api/v1/messages/unread
**Description :** Nombre de messages non lus.

---

## 11.11 Notifications

### GET /api/v1/notifications
**Description :** Liste des notifications.

**Query params :**

| Param | Type | Description |
|-------|------|-------------|
| type | string | Type de notification |
| read | boolean | Lu/non-lu |
| page | number | Page |
| limit | number | Elements/page |

---

### PATCH /api/v1/notifications/:id/read
**Description :** Marquer comme lu.

---

### PATCH /api/v1/notifications/read-all
**Description :** Tout marquer comme lu.

---

### DELETE /api/v1/notifications/:id
**Description :** Supprimer une notification.

---

### DELETE /api/v1/notifications/all
**Description :** Supprimer toutes les notifications.

---

### GET /api/v1/notifications/unread
**Description :** Nombre de non-lus.

---

### PATCH /api/v1/notifications/preferences
**Description :** Preferences de notifications.

---

## 11.12 Recherche

### GET /api/v1/search
**Description :** Recherche globale.

**Query params :**

| Param | Type | Description |
|-------|------|-------------|
| q | string | Requete |
| type | string | products/shops/all |
| category | string | Categorie |
| minPrice | number | Prix min |
| maxPrice | number | Prix max |
| sort | string | Tri |
| page | number | Page |
| limit | number | Elements/page |

---

### GET /api/v1/search/autocomplete
**Description :** Suggestions de recherche.

**Query params :**

| Param | Type | Description |
|-------|------|-------------|
| q | string | Requete (min 2 char) |
| limit | number | Max 10 |

---

### GET /api/v1/search/trending
**Description :** Recherches tendances.

---

### GET /api/v1/search/recent
**Description :** Recherches recentes.

---

### DELETE /api/v1/search/recent
**Description :** Effacer l'historique de recherche.

---

## 11.13 Panier

### GET /api/v1/cart
**Description :** Contenu du panier.

---

### POST /api/v1/cart/items
**Description :** Ajouter au panier.

**Body :**
```typescript
{
  productId: string;
  quantity: number;
  variantId?: string;
  selectedAttributes?: Record<string, string>;
}
```

---

### PATCH /api/v1/cart/items/:itemId
**Description :** Modifier la quantite.

**Body :** `{ quantity: number; }`

---

### DELETE /api/v1/cart/items/:itemId
**Description :** Retirer du panier.

---

### DELETE /api/v1/cart
**Description :** Vider le panier.

---

### POST /api/v1/cart/apply-coupon
**Description :** Appliquer un code promo.

**Body :** `{ code: string; }`

---

### DELETE /api/v1/cart/coupon
**Description :** Retirer le code promo.

---

### POST /api/v1/cart/save-for-later/:itemId
**Description :** Enregistrer pour plus tard.

---

### GET /api/v1/cart/saved
**Description :** Produits enregistres pour plus tard.

---

### POST /api/v1/cart/move-to-cart/:savedItemId
**Description :** Deplacer vers le panier.

---

## 11.14 Livraison

### GET /api/v1/shipping/methods
**Description :** Methodes de livraison disponibles.

---

### POST /api/v1/shipping/estimate
**Description :** Estimation des frais.

**Body :**
```typescript
{
  items: { productId: string; quantity: number; variantId?: string }[];
  addressId: string;
}
```

---

### GET /api/v1/shipping/tracking/:trackingNumber
**Description :** Suivi de livraison.

---

### POST /api/v1/shipping/return
**Description :** Demande de retour.

---

### GET /api/v1/shipping/return/:returnId
**Description :** Statut d'un retour.

---

## 11.15 Support

### GET /api/v1/support/tickets
**Description :** Liste des tickets.

---

### POST /api/v1/support/tickets
**Description :** Creer un ticket.

**Body :**
```typescript
{
  subject: string;
  category: string;
  description: string;
  orderId?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  attachments?: string[];
}
```

---

### GET /api/v1/support/tickets/:id
**Description :** Details d'un ticket.

---

### POST /api/v1/support/tickets/:id/messages
**Description :** Ajouter un message au ticket.

---

### POST /api/v1/support/tickets/:id/close
**Description :** Fermer un ticket.

---

### POST /api/v1/support/tickets/:id/rate
**Description :** Noter le support.

---

### GET /api/v1/support/faq
**Description :** FAQ.

---

### POST /api/v1/support/contact
**Description :** Formulaire de contact.

---

## 11.16 Administration

### GET /api/v1/admin/dashboard
**Description :** KPIs admin.

---

### GET /api/v1/admin/users
**Description :** Liste des utilisateurs.

---

### PATCH /api/v1/admin/users/:id
**Description :** Modifier un utilisateur.

---

### DELETE /api/v1/admin/users/:id
**Description :** Supprimer un utilisateur.

---

### POST /api/v1/admin/users/:id/suspend
**Description :** Suspendre un utilisateur.

---

### POST /api/v1/admin/users/:id/ban
**Description :** Bannir un utilisateur.

---

### GET /api/v1/admin/shops/pending
**Description :** Boutiques en attente de validation.

---

### POST /api/v1/admin/shops/:id/approve
**Description :** Approuver une boutique.

---

### POST /api/v1/admin/shops/:id/reject
**Description :** Rejeter une boutique.

---

### POST /api/v1/admin/shops/:id/suspend
**Description :** Suspendre une boutique.

---

### GET /api/v1/admin/products/pending
**Description :** Produits en attente de moderation.

---

### POST /api/v1/admin/products/:id/approve
**Description :** Approuver un produit.

---

### POST /api/v1/admin/products/:id/reject
**Description :** Rejeter un produit.

---

### GET /api/v1/admin/orders/disputes
**Description :** Litiges ouverts.

---

### POST /api/v1/admin/orders/:id/resolve-dispute
**Description :** Resoudre un litige.

---

### GET /api/v1/admin/payments
**Description :** Historique des paiements.

---

### POST /api/v1/admin/payments/:id/refund
**Description :** Rembourser (admin).

---

### GET /api/v1/admin/reports
**Description :** Rapports et statistiques.

---

### POST /api/v1/admin/settings
**Description :** Configuration systeme.

---

### GET /api/v1/admin/audit-log
**Description :** Journal d'audit.

---

## 11.17 Upload

### POST /api/v1/upload/image
**Description :** Upload d'une image.

**Body :**
```typescript
{
  file: File;
  folder?: string;
}
```

**Reponse 200 :**
```typescript
{
  success: true,
  data: {
    id: string;
    url: string;
    thumbnailUrl: string;
    mediumUrl: string;
    width: number;
    height: number;
    size: number;
    format: string;
  }
}
```

---

### POST /api/v1/upload/video
**Description :** Upload d'une video.

**Body :**
```typescript
{
  file: File;
  folder?: string;
}
```

---

### DELETE /api/v1/upload/:id
**Description :** Supprimer un fichier upload.

---

### GET /api/v1/upload/:id/status
**Description :** Statut d'un upload (video en cours d'encodage).


---

# CHAPITRE 12 : Gestion de l'Etat React

---

## Table des matieres du Chapitre 12

- 12.1 Context API
- 12.2 Redux Toolkit
- 12.3 TanStack Query (React Query)
- 12.4 Custom Hooks
- 12.5 LocalStorage
- 12.6 SessionStorage
- 12.7 Cookies
- 12.8 Strategies de cache

---

## 12.1 Context API

### 12.1.1 AuthContext

**Description :** Gestion de l'authentification utilisateur.

```typescript
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  refreshUser: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  changePassword: (current: string, newPass: string) => Promise<void>;
  enable2FA: () => Promise<{ secret: string; qrCode: string; backupCodes: string[] }>;
  disable2FA: (code: string) => Promise<void>;
}
```

**Implementation :**

```typescript
// contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '@services/api/auth';
import { tokenStorage } from '@utils/tokenStorage';

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = tokenStorage.getAccessToken();
        if (token) {
          const userData = await authAPI.getMe();
          setUser(userData);
        }
      } catch (error) {
        try {
          const refreshToken = tokenStorage.getRefreshToken();
          if (refreshToken) {
            const { accessToken, refreshToken: newRefresh } = await authAPI.refreshToken(refreshToken);
            tokenStorage.setTokens(accessToken, newRefresh);
            const userData = await authAPI.getMe();
            setUser(userData);
          }
        } catch {
          tokenStorage.clearTokens();
        }
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = useCallback(async (email: string, password: string, rememberMe = false) => {
    const response = await authAPI.login({ email, password, rememberMe });
    tokenStorage.setTokens(response.tokens.accessToken, response.tokens.refreshToken);
    setUser(response.user);
    navigate('/dashboard');
  }, [navigate]);

  const logout = useCallback(async () => {
    try {
      await authAPI.logout();
    } finally {
      tokenStorage.clearTokens();
      setUser(null);
      navigate('/');
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{
      user, isAuthenticated: !!user, isLoading, login, logout,
      register: async (data) => { await authAPI.register(data); },
      updateProfile: async (data) => { const updated = await authAPI.updateProfile(data); setUser(updated); },
      refreshUser: async () => { const userData = await authAPI.getMe(); setUser(userData); },
      forgotPassword: async (email) => { await authAPI.forgotPassword(email); },
      resetPassword: async (token, password) => { await authAPI.resetPassword({ token, password }); },
      verifyEmail: async (token) => { await authAPI.verifyEmail(token); },
      changePassword: async (current, newPass) => { await authAPI.changePassword({ currentPassword: current, newPassword: newPass }); },
      enable2FA: async () => { return await authAPI.enable2FA(); },
      disable2FA: async (code) => { await authAPI.disable2FA(code); },
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

**Utilisation dans les composants :**

```jsx
function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  return (
    <header>
      {isAuthenticated ? (
        <div>
          <Avatar src={user.avatar} name={user.firstName} />
          <span>{user.firstName}</span>
          <Button onClick={logout}>Deconnexion</Button>
        </div>
      ) : (
        <Button onClick={() => navigate('/login')}>Connexion</Button>
      )}
    </header>
  );
}
```

---

### 12.1.2 CartContext

**Description :** Gestion du panier d'achat.

```typescript
interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  couponCode: string | null;
  discount: number;
  isLoading: boolean;
  addItem: (productId: string, quantity: number, variantId?: string) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  applyCoupon: (code: string) => Promise<void>;
  removeCoupon: () => Promise<void>;
  saveForLater: (itemId: string) => Promise<void>;
  moveToCart: (savedItemId: string) => Promise<void>;
  savedItems: SavedItem[];
  refreshCart: () => Promise<void>;
}
```

**Implementation :**

```typescript
// contexts/CartContext.tsx
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) { loadCart(); }
  }, [isAuthenticated]);

  const loadCart = async () => {
    setIsLoading(true);
    try {
      const cart = await cartAPI.getCart();
      setItems(cart.items);
      setSavedItems(cart.savedItems);
      setCouponCode(cart.couponCode);
      setDiscount(cart.discount);
    } finally { setIsLoading(false); }
  };

  const addItem = useCallback(async (productId: string, quantity: number, variantId?: string) => {
    setIsLoading(true);
    try {
      await cartAPI.addItem({ productId, quantity, variantId });
      await loadCart();
      toast.success('Produit ajoute au panier');
    } catch (error) {
      toast.error("Impossible d'ajouter le produit");
      throw error;
    } finally { setIsLoading(false); }
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () => subtotal + shippingCost + tax - discount,
    [subtotal, shippingCost, tax, discount]
  );

  return (
    <CartContext.Provider value={{
      items, itemCount, subtotal, shippingCost, tax, total,
      couponCode, discount, isLoading, savedItems,
      addItem, removeItem, updateQuantity, clearCart,
      applyCoupon, removeCoupon, saveForLater, moveToCart, refreshCart: loadCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
```

---

### 12.1.3 ThemeContext

**Description :** Gestion du theme (clair/sombre).

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleTheme: () => void;
}
```

**Implementation :**

```typescript
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const resolve = () => {
      const resolved = theme === 'system'
        ? (mediaQuery.matches ? 'dark' : 'light')
        : theme;
      setResolvedTheme(resolved);
      document.documentElement.setAttribute('data-theme', resolved);
    };
    resolve();
    mediaQuery.addEventListener('change', resolve);
    return () => mediaQuery.removeEventListener('change', resolve);
  }, [theme]);

  const setTheme = useCallback((newTheme: 'light' | 'dark' | 'system') => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

---

### 12.1.4 NotificationContext

**Description :** Gestion des notifications en temps reel.

```typescript
interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  deleteNotification: (id: string) => Promise<void>;
  clearAll: () => Promise<void>;
  refresh: () => Promise<void>;
}
```

**Implementation :**

```typescript
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchNotifications = async () => {
      const data = await notificationAPI.getNotifications({ limit: 20 });
      setNotifications(data);
    };
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;
    const ws = new WebSocket(`${WS_URL}/notifications`);
    ws.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      setNotifications(prev => [notification, ...prev]);
      toast[notification.type === 'error' ? 'error' : 'info'](notification.title, {
        description: notification.message,
      });
    };
    return () => ws.close();
  }, [isAuthenticated]);

  const unreadCount = useMemo(
    () => notifications.filter(n => !n.isRead).length,
    [notifications]
  );

  return (
    <NotificationContext.Provider value={{
      notifications, unreadCount,
      markAsRead: async (id) => {
        await notificationAPI.markAsRead(id);
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
      },
      markAllAsRead: async () => {
        await notificationAPI.markAllAsRead();
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      },
      deleteNotification: async (id) => {
        await notificationAPI.delete(id);
        setNotifications(prev => prev.filter(n => n.id !== id));
      },
      clearAll: async () => { await notificationAPI.deleteAll(); setNotifications([]); },
      refresh: async () => {
        const data = await notificationAPI.getNotifications({ limit: 20 });
        setNotifications(data);
      },
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);
```

---

### 12.1.5 Structure de l'arbre de Context

```tsx
// App.tsx
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <CompareProvider>
              <WishlistProvider>
                <ChatProvider>
                  <Router>
                    <AppLayout>
                      <Routes>{/* ... */}</Routes>
                    </AppLayout>
                  </Router>
                  <ToastContainer />
                </ChatProvider>
              </WishlistProvider>
            </CompareProvider>
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

**Ordre de nesting :**

```
1. ThemeProvider      (pas de dependance)
2. AuthProvider        (depend de Theme)
3. CartProvider        (depend de Auth)
4. NotificationProvider (depend de Auth)
5. CompareProvider     (pas de dependance)
6. WishlistProvider    (depend de Auth)
7. ChatProvider        (depend de Auth)
```

---

## 12.2 Redux Toolkit

### 12.2.1 Structure du Store

```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { cartReducer } from './slices/cartSlice';
import { uiReducer } from './slices/uiSlice';
import { searchReducer } from './slices/searchSlice';
import { checkoutReducer } from './slices/checkoutSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
    search: searchReducer,
    checkout: checkoutReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

### 12.2.2 Slice Auth

```typescript
// store/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '@services/api/auth';
import { tokenStorage } from '@utils/tokenStorage';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  twoFactorRequired: boolean;
  sessionToken: string | null;
}

const initialState: AuthState = {
  user: null, isAuthenticated: false, isLoading: true,
  error: null, twoFactorRequired: false, sessionToken: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }: { email: string; password: string; rememberMe?: boolean }, { rejectWithValue }) => {
    try {
      const response = await authAPI.login({ email, password, rememberMe });
      tokenStorage.setTokens(response.tokens.accessToken, response.tokens.refreshToken);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error?.message || 'Erreur de connexion');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try { await authAPI.logout(); } finally { tokenStorage.clearTokens(); }
});

export const refreshUser = createAsyncThunk('auth/refreshUser', async (_, { rejectWithValue }) => {
  try { return await authAPI.getMe(); }
  catch { tokenStorage.clearTokens(); throw rejectWithValue('Session expiree'); }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => { state.error = null; },
    setUser: (state, action: PayloadAction<User>) => { state.user = action.payload; state.isAuthenticated = true; },
    setTwoFactorRequired: (state, action: PayloadAction<{ required: boolean; sessionToken?: string }>) => {
      state.twoFactorRequired = action.required;
      state.sessionToken = action.sessionToken || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.requires2FA) {
          state.twoFactorRequired = true;
          state.sessionToken = action.payload.sessionToken;
        } else {
          state.user = action.payload.user;
          state.isAuthenticated = true;
        }
      })
      .addCase(login.rejected, (state, action) => { state.isLoading = false; state.error = action.payload as string; })
      .addCase(logout.fulfilled, (state) => {
        state.user = null; state.isAuthenticated = false;
        state.twoFactorRequired = false; state.sessionToken = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false; state.user = action.payload; state.isAuthenticated = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false; state.user = null; state.isAuthenticated = false;
      });
  },
});

export const { clearError, setUser, setTwoFactorRequired } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
```

---

### 12.2.3 Slice Cart

```typescript
// store/slices/cartSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartAPI } from '@services/api/cart';

interface CartState {
  items: CartItem[];
  savedItems: SavedItem[];
  isLoading: boolean;
  error: string | null;
  couponCode: string | null;
  discount: number;
}

const initialState: CartState = {
  items: [], savedItems: [], isLoading: false,
  error: null, couponCode: null, discount: 0,
};

export const fetchCart = createAsyncThunk('cart/fetch', async () => await cartAPI.getCart());

export const addToCart = createAsyncThunk(
  'cart/addItem',
  async ({ productId, quantity, variantId }: { productId: string; quantity: number; variantId?: string }) => {
    await cartAPI.addItem({ productId, quantity, variantId });
    return await cartAPI.getCart();
  }
);

export const removeFromCart = createAsyncThunk('cart/removeItem', async (itemId: string) => {
  await cartAPI.removeItem(itemId);
  return itemId;
});

export const applyCoupon = createAsyncThunk('cart/applyCoupon', async (code: string) => {
  const result = await cartAPI.applyCoupon(code);
  return { code, discount: result.discount };
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => { state.items = []; state.couponCode = null; state.discount = 0; },
    clearError: (state) => { state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.savedItems = action.payload.savedItems;
        state.couponCode = action.payload.couponCode;
        state.discount = action.payload.discount;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.savedItems = action.payload.savedItems;
      })
      .addCase(addToCart.rejected, (state, action) => { state.error = action.error.message || 'Erreur ajout panier'; })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.couponCode = action.payload.code;
        state.discount = action.payload.discount;
      });
  },
});

export const { clearCart, clearError } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartSubtotal = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
```

---

### 12.2.4 Slice UI

```typescript
// store/slices/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isSidebarOpen: boolean;
  isMobileMenuOpen: boolean;
  isCartOpen: boolean;
  isSearchOpen: boolean;
  isChatOpen: boolean;
  modalStack: ModalItem[];
  toasts: Toast[];
  viewMode: 'grid' | 'list';
  language: string;
  currency: string;
}

const initialState: UIState = {
  isSidebarOpen: true, isMobileMenuOpen: false, isCartOpen: false,
  isSearchOpen: false, isChatOpen: false, modalStack: [], toasts: [],
  viewMode: 'grid', language: 'fr', currency: 'EUR',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => { state.isSidebarOpen = !state.isSidebarOpen; },
    toggleMobileMenu: (state) => { state.isMobileMenuOpen = !state.isMobileMenuOpen; },
    toggleCart: (state) => { state.isCartOpen = !state.isCartOpen; },
    toggleSearch: (state) => { state.isSearchOpen = !state.isSearchOpen; },
    toggleChat: (state) => { state.isChatOpen = !state.isChatOpen; },
    openModal: (state, action: PayloadAction<ModalItem>) => { state.modalStack.push(action.payload); },
    closeModal: (state, action: PayloadAction<string>) => {
      state.modalStack = state.modalStack.filter(m => m.id !== action.payload);
    },
    closeAllModals: (state) => { state.modalStack = []; },
    addToast: (state, action: PayloadAction<Toast>) => { state.toasts.push(action.payload); },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(t => t.id !== action.payload);
    },
    setViewMode: (state, action: PayloadAction<'grid' | 'list'>) => { state.viewMode = action.payload; },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
      localStorage.setItem('currency', action.payload);
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
```

---

### 12.2.5 Slice Checkout

```typescript
// store/slices/checkoutSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkoutAPI } from '@services/api/checkout';

interface CheckoutState {
  step: number;
  shippingAddress: Address | null;
  billingAddress: Address | null;
  shippingMethod: ShippingMethod | null;
  paymentMethod: PaymentMethod | null;
  couponCode: string | null;
  notes: string;
  isProcessing: boolean;
  orderId: string | null;
  error: string | null;
}

export const createOrder = createAsyncThunk(
  'checkout/createOrder',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const { checkout, cart } = state;
      return await checkoutAPI.createOrder({
        items: cart.items.map(item => ({
          productId: item.product.id, quantity: item.quantity, variantId: item.variantId,
        })),
        shippingAddressId: checkout.shippingAddress!.id,
        shippingMethodId: checkout.shippingMethod!.id,
        paymentMethodId: checkout.paymentMethod!.id,
        couponCode: checkout.couponCode, notes: checkout.notes,
      });
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error?.message || 'Erreur commande');
    }
  }
);

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    step: 1, shippingAddress: null, billingAddress: null, shippingMethod: null,
    paymentMethod: null, couponCode: null, notes: '', isProcessing: false,
    orderId: null, error: null,
  } as CheckoutState,
  reducers: {
    setStep: (state, action) => { state.step = action.payload; },
    setShippingAddress: (state, action) => { state.shippingAddress = action.payload; },
    setShippingMethod: (state, action) => { state.shippingMethod = action.payload; },
    setPaymentMethod: (state, action) => { state.paymentMethod = action.payload; },
    setCouponCode: (state, action) => { state.couponCode = action.payload; },
    resetCheckout: (state) => { Object.assign(state, { step: 1, shippingAddress: null, ... }); },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => { state.isProcessing = true; state.error = null; })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isProcessing = false; state.orderId = action.payload.orderId;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isProcessing = false; state.error = action.payload as string;
      });
  },
});

export const checkoutActions = checkoutSlice.actions;
export const checkoutReducer = checkoutSlice.reducer;
```

---

### 12.2.6 Hooks Personnalises pour le Store

```typescript
// hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
export const useAppDispatch = () => useDispatch<AppDispatch>();

// hooks/useAppSelector.ts
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

### 12.2.7 Utilisation dans les composants

```jsx
// components/Navbar/CartIcon.tsx
import { useAppSelector, useAppDispatch } from '@hooks';
import { selectCartItemCount } from '@store/slices/cartSlice';
import { uiActions } from '@store/slices/uiSlice';
import { ShoppingCart } from 'lucide-react';

export function CartIcon() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCartItemCount);
  return (
    <button className="relative" onClick={() => dispatch(uiActions.toggleCart())}
      aria-label={`Panier, ${count} articles`}>
      <ShoppingCart className="w-6 h-6" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}
```

```jsx
// pages/Checkout/CheckoutPage.tsx
import { useAppDispatch, useAppSelector } from '@hooks';
import { checkoutActions, createOrder } from '@store/slices/checkoutSlice';

export function CheckoutPage() {
  const dispatch = useAppDispatch();
  const { step, isProcessing, error } = useAppSelector(state => state.checkout);

  return (
    <div>
      <Stepper currentStep={step} steps={checkoutSteps} />
      {step === 1 && <ShippingStep />}
      {step === 2 && <PaymentStep />}
      {step === 3 && <ReviewStep />}
      {error && <Alert variant="error">{error}</Alert>}
      <Button variant="primary" loading={isProcessing} onClick={() => dispatch(createOrder())}>
        Passer la commande
      </Button>
    </div>
  );
}
```

---

## 12.3 TanStack Query (React Query)

### 12.3.1 Configuration

```typescript
// providers/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

---

### 12.3.2 Query Hooks Produits

```typescript
// hooks/queries/useProducts.ts
import { useQuery, useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productsAPI } from '@services/api/products';

export function useProducts(filters: ProductFilters) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => productsAPI.getProducts(filters),
    keepPreviousData: true,
  });
}

export function useProduct(id: string) {
  return useQuery({ queryKey: ['product', id], queryFn: () => productsAPI.getProduct(id), enabled: !!id });
}

export function useInfiniteProducts(filters: ProductFilters) {
  return useInfiniteQuery({
    queryKey: ['products', 'infinite', filters],
    queryFn: ({ pageParam = 1 }) => productsAPI.getProducts({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.meta.page < lastPage.meta.totalPages ? lastPage.meta.page + 1 : undefined,
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProductData) => productsAPI.createProduct(data),
    onSuccess: () => { queryClient.invalidateQueries(['products']); },
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateProductData> }) => productsAPI.updateProduct(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['products']);
      queryClient.invalidateQueries(['product', id]);
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => productsAPI.deleteProduct(id),
    onSuccess: () => { queryClient.invalidateQueries(['products']); },
  });
}

export function useRelatedProducts(productId: string) {
  return useQuery({
    queryKey: ['products', 'related', productId],
    queryFn: () => productsAPI.getRelatedProducts(productId),
    enabled: !!productId,
    staleTime: 10 * 60 * 1000,
  });
}
```

---

### 12.3.3 Query Hooks Commandes

```typescript
// hooks/queries/useOrders.ts
export function useOrders(filters?: OrderFilters) {
  return useQuery({ queryKey: ['orders', filters], queryFn: () => ordersAPI.getOrders(filters) });
}

export function useOrder(id: string) {
  return useQuery({ queryKey: ['order', id], queryFn: () => ordersAPI.getOrder(id), enabled: !!id });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateOrderData) => ordersAPI.createOrder(data),
    onSuccess: () => { queryClient.invalidateQueries(['orders']); queryClient.invalidateQueries(['cart']); },
  });
}

export function useCancelOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, reason }: { id: string; reason: string }) => ordersAPI.cancelOrder(id, reason),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['orders']);
      queryClient.invalidateQueries(['order', id]);
    },
  });
}

export function useOrderTracking(id: string) {
  return useQuery({
    queryKey: ['order', id, 'tracking'],
    queryFn: () => ordersAPI.getTracking(id),
    enabled: !!id,
    refetchInterval: 60000,
  });
}
```

---

### 12.3.4 Query Hooks Boutique

```typescript
// hooks/queries/useShops.ts
export function useShop(id: string) {
  return useQuery({ queryKey: ['shop', id], queryFn: () => shopsAPI.getShop(id), enabled: !!id });
}

export function useShopProducts(shopId: string, filters?: ProductFilters) {
  return useQuery({
    queryKey: ['shop', shopId, 'products', filters],
    queryFn: () => shopsAPI.getShopProducts(shopId, filters),
    enabled: !!shopId,
  });
}

export function useFollowShop() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (shopId: string) => shopsAPI.toggleFollow(shopId),
    onSuccess: (_, shopId) => { queryClient.invalidateQueries(['shop', shopId]); },
  });
}
```

---

### 12.3.5 Query Hooks Recherche

```typescript
// hooks/queries/useSearch.ts
export function useSearch(query: string, filters?: SearchFilters) {
  return useQuery({
    queryKey: ['search', query, filters],
    queryFn: () => searchAPI.search(query, filters),
    enabled: query.length >= 2,
    keepPreviousData: true,
  });
}

export function useAutocomplete(query: string) {
  return useQuery({
    queryKey: ['autocomplete', query],
    queryFn: () => searchAPI.autocomplete(query),
    enabled: query.length >= 2,
    staleTime: 60000,
  });
}

export function useTrendingSearches() {
  return useQuery({
    queryKey: ['search', 'trending'],
    queryFn: () => searchAPI.getTrending(),
    staleTime: 5 * 60 * 1000,
  });
}
```

---

### 12.3.6 Query Hooks Reviews

```typescript
// hooks/queries/useReviews.ts
export function useProductReviews(productId: string, filters?: ReviewFilters) {
  return useQuery({
    queryKey: ['reviews', 'product', productId, filters],
    queryFn: () => reviewsAPI.getProductReviews(productId, filters),
    enabled: !!productId,
  });
}

export function useCreateReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateReviewData) => reviewsAPI.createReview(data),
    onSuccess: (_, { productId }) => {
      queryClient.invalidateQueries(['reviews', 'product', productId]);
      queryClient.invalidateQueries(['product', productId]);
    },
  });
}

export function useHelpfulReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reviewId: string) => reviewsAPI.markHelpful(reviewId),
    onSuccess: () => { queryClient.invalidateQueries(['reviews']); },
  });
}
```

---

### 12.3.7 Query Hooks Favoris

```typescript
// hooks/queries/useFavorites.ts
export function useFavorites() {
  return useQuery({ queryKey: ['favorites'], queryFn: () => favoritesAPI.getFavorites() });
}

export function useToggleFavorite() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: string) => favoritesAPI.toggleFavorite(productId),
    onSuccess: () => { queryClient.invalidateQueries(['favorites']); },
  });
}

export function useCheckFavorite(productId: string) {
  return useQuery({
    queryKey: ['favorites', 'check', productId],
    queryFn: () => favoritesAPI.checkFavorite(productId),
    enabled: !!productId,
  });
}
```

---

## 12.4 Custom Hooks

### 12.4.1 Hook useDebounce

```typescript
// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
```

---

### 12.4.2 Hook useLocalStorage

```typescript
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });

  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(storedValue)); }
    catch (error) { console.error(`Error saving to localStorage: ${error}`); }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

---

### 12.4.3 Hook useMediaQuery

```typescript
// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);
  return matches;
}
```

---

### 12.4.4 Hook useClickOutside

```typescript
// hooks/useClickOutside.ts
import { useEffect, RefObject } from 'react';

export function useClickOutside(ref: RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
```

---

### 12.4.5 Hook useKeyPress

```typescript
// hooks/useKeyPress.ts
import { useState, useEffect } from 'react';

export function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === targetKey) setKeyPressed(true); };
    const upHandler = (e: KeyboardEvent) => { if (e.key === targetKey) setKeyPressed(false); };
    window.addEventListener('keydown', handler);
    window.addEventListener('keyup', upHandler);
    return () => { window.removeEventListener('keydown', handler); window.removeEventListener('keyup', upHandler); };
  }, [targetKey]);
  return keyPressed;
}
```

---

### 12.4.6 Hook useScrollPosition

```typescript
// hooks/useScrollPosition.ts
import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0, y: 0, direction: 'down' as 'up' | 'down', isAtTop: true, isAtBottom: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const currentY = window.scrollY;
      setScrollPosition({
        x: window.scrollX, y: currentY,
        direction: currentY > lastY ? 'down' : 'up',
        isAtTop: currentY === 0,
        isAtBottom: currentY + window.innerHeight >= document.documentElement.scrollHeight,
      });
      lastY = currentY;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return scrollPosition;
}
```

---

### 12.4.7 Hook useIntersectionObserver

```typescript
// hooks/useIntersectionObserver.ts
import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(options?: IntersectionObserverInit): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return [ref, isVisible];
}
```

---

### 12.4.8 Hook useOnlineStatus

```typescript
// hooks/useOnlineStatus.ts
import { useState, useEffect } from 'react';

export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => { window.removeEventListener('online', handleOnline); window.removeEventListener('offline', handleOffline); };
  }, []);
  return isOnline;
}
```

---

### 12.4.9 Hook useForm

```typescript
// hooks/useForm.ts
import { useState, useCallback } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  validate?: (values: T) => Record<string, string>;
  onSubmit: (values: T) => Promise<void>;
}

export function useForm<T extends Record<string, any>>({ initialValues, validate, onSubmit }: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name] && validate) {
      const validationErrors = validate({ ...values, [name]: value });
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] || '' }));
    }
  }, [values, touched, validate]);

  const handleBlur = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    if (validate) {
      const validationErrors = validate(values);
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] || '' }));
    }
  }, [values, validate]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) return;
    }
    setIsSubmitting(true);
    try { await onSubmit(values); } finally { setIsSubmitting(false); }
  }, [values, validate, onSubmit]);

  const reset = useCallback(() => { setValues(initialValues); setErrors({}); setTouched({}); }, [initialValues]);

  return { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, reset, setValues };
}
```

---

### 12.4.10 Hook usePagination

```typescript
// hooks/usePagination.ts
import { useState, useMemo, useCallback } from 'react';

interface UsePaginationOptions {
  totalItems: number;
  initialPage?: number;
  initialPageSize?: number;
  maxVisiblePages?: number;
}

export function usePagination({ totalItems, initialPage = 1, initialPageSize = 20, maxVisiblePages = 5 }: UsePaginationOptions) {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = useMemo(() => Math.ceil(totalItems / pageSize), [totalItems, pageSize]);

  const visiblePages = useMemo(() => {
    const pages: (number | string)[] = [];
    const start = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages, start + maxVisiblePages - 1);
    if (start > 1) { pages.push(1); if (start > 2) pages.push('...'); }
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages) { if (end < totalPages - 1) pages.push('...'); pages.push(totalPages); }
    return pages;
  }, [page, totalPages, maxVisiblePages]);

  const goToPage = useCallback((p: number) => setPage(Math.max(1, Math.min(p, totalPages))), [totalPages]);

  return {
    page, pageSize, totalPages, totalItems, visiblePages,
    hasNext: page < totalPages, hasPrev: page > 1,
    offset: (page - 1) * pageSize,
    setPage: goToPage,
    setPageSize: (size: number) => { setPageSize(size); setPage(1); },
    nextPage: () => setPage(p => Math.min(p + 1, totalPages)),
    prevPage: () => setPage(p => Math.max(p - 1, 1)),
    firstPage: () => setPage(1),
    lastPage: () => setPage(totalPages),
  };
}
```

---

## 12.5 LocalStorage

### 12.5.1 Donnees stockees dans LocalStorage

| Cle | Type | Description | TTL |
|-----|------|-------------|-----|
| theme | string | Theme selectionne | Permanent |
| language | string | Langue selectionnee | Permanent |
| currency | string | Devise selectionnee | Permanent |
| recentSearches | string[] | Recherches recentes (max 10) | 30 jours |
| viewMode | string | Mode affichage grille/liste | Permanent |
| sidebarCollapsed | string | Etat sidebar | Permanent |
| cart_guest | string | Panier invite (JSON) | 30 jours |
| comparison | string | Produits en comparaison | Session |
| recentlyViewed | string | Derniers produits vus (max 50) | 30 jours |
| priceRange | string | Filtre prix sauvegarde | Session |
| sortPreference | string | Tri par defaut | Permanent |

### 12.5.2 Utilisation securisee

```typescript
// utils/storage.ts
export const storage = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch { return defaultValue; }
  },
  set<T>(key: string, value: T): void {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (error) { console.error('LocalStorage error:', error); }
  },
  remove(key: string): void {
    try { localStorage.removeItem(key); }
    catch (error) { console.error('LocalStorage error:', error); }
  },
  clear(): void {
    try { localStorage.clear(); }
    catch (error) { console.error('LocalStorage error:', error); }
  },
  getAvailableSpace(): number {
    let total = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) total += localStorage.getItem(key)?.length || 0;
      }
    } catch {}
    return 5 * 1024 * 1024 - total;
  },
};
```

---

## 12.6 SessionStorage

### 12.6.1 Donnees stockees dans SessionStorage

| Cle | Type | Description |
|-----|------|-------------|
| checkout_step | string | Etape du checkout |
| checkout_data | string | Donnees partielles checkout |
| form_draft | string | Brouillon de formulaire |
| scroll_position | string | Position de scroll |
| auth_redirect | string | URL de redirection post-login |
| modal_state | string | Etat d'une modale ouverte |

---

## 12.7 Cookies

### 12.7.1 Cookies utilises

| Cookie | Duree | Description | Secure |
|--------|-------|-------------|--------|
| access_token | 15 min | JWT access token | HttpOnly, Secure |
| refresh_token | 7 jours | JWT refresh token | HttpOnly, Secure |
| session_id | Session | ID de session | Secure |
| csrf_token | Session | Protection CSRF | Secure |
| consent | 1 an | Preferences cookies | Non |
| cart_id | 30 jours | Panier invite | Secure |

---

## 12.8 Strategies de cache

### 12.8.1 Niveaux de cache

| Niveau | Location | Duree | Usage |
|--------|----------|-------|-------|
| L1 - Memo | useMemo/useCallback | Session component | Donnees derivees |
| L2 - Context | React Context | Session app | Etat global |
| L3 - Redux | Redux Store | Session app | Etat persistant |
| L4 - React Query | Cache memoire | Configurable | Donnees serveur |
| L5 - LocalStorage | Navigateur | 30 jours | Preferences |
| L6 - SessionStorage | Navigateur | Session | Etat transitoire |
| L7 - Cookies | Navigateur | Variable | Tokens, consent |
| L8 - HTTP Cache | Navigateur + CDN | Configurable | Assets, API |
| L9 - Service Worker | Offline | Indefini | Offline support |

### 12.8.2 Strategie par type de donnee

| Type de donnee | Strategy | Cache TTL | Invalidation |
|----------------|----------|-----------|--------------|
| Produits | Stale-While-Revalidate | 5 min | Mutation |
| Categories | Cache First | 1 jour | Navigation |
| Profil utilisateur | Network First | - | Refresh |
| Panier | Network Only | - | - |
| Commandes | Stale-While-Revalidate | 1 min | Mutation |
| Avis | Stale-While-Revalidate | 5 min | Mutation |
| Recherche | Cache First + params | 5 min | Nouvelle recherche |
| Notifications | Polling | 30 sec | WebSocket |
| Messages | WebSocket temps reel | - | - |
| Images | Cache First + CDN | 7 jours | Versioning |
| Assets JS/CSS | Cache Busting | Indefini | Deploiement |

### 12.8.3 Cache Invalidation Patterns

```typescript
// patterns/cacheInvalidation.ts
export const cachePatterns = {
  // Invalidation apres mutation
  afterMutation: {
    createProduct: ['products'],
    updateProduct: (id: string) => [['product', id], ['products']],
    deleteProduct: (id: string) => [['product', id], ['products']],
    addToCart: ['cart'],
    removeFromCart: ['cart'],
    createOrder: [['orders'], ['cart']],
    createReview: (productId: string) => [['reviews', 'product', productId], ['product', productId]],
    toggleFavorite: [['favorites']],
  },

  // Invalidation temporelle
  timeBased: {
    products: 5 * 60 * 1000,      // 5 minutes
    categories: 24 * 60 * 60 * 1000, // 1 jour
    shop: 10 * 60 * 1000,         // 10 minutes
    reviews: 5 * 60 * 1000,       // 5 minutes
    orders: 60 * 1000,            // 1 minute
  },

  // Invalidation au focus
  onFocus: {
    notifications: true,
    messages: true,
    orders: true,
  },
};
```

### 12.8.4 Optimistic Updates

```typescript
// patterns/optimisticUpdates.ts
export function useOptimisticFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => favoritesAPI.toggleFavorite(productId),

    onMutate: async (productId) => {
      await queryClient.cancelQueries(['favorites', 'check', productId]);

      const previous = queryClient.getQueryData(['favorites', 'check', productId]);

      queryClient.setQueryData(['favorites', 'check', productId], (old: any) => ({
        ...old, isFavorited: !old?.isFavorited,
      }));

      return { previous };
    },

    onError: (err, productId, context) => {
      queryClient.setQueryData(['favorites', 'check', productId], context?.previous);
    },

    onSettled: (data, error, productId) => {
      queryClient.invalidateQueries(['favorites']);
      queryClient.invalidateQueries(['favorites', 'check', productId]);
    },
  });
}
```

### 12.8.5 Prefetching Strategies

```typescript
// patterns/prefetching.ts
export function usePrefetchProduct() {
  const queryClient = useQueryClient();

  return (productId: string) => {
    queryClient.prefetchQuery({
      queryKey: ['product', productId],
      queryFn: () => productsAPI.getProduct(productId),
      staleTime: 5 * 60 * 1000,
    });
  };
}

// Dans ProductCard
function ProductCard({ product }) {
  const prefetchProduct = usePrefetchProduct();

  return (
    <div
      onMouseEnter={() => prefetchProduct(product.id)}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* ... */}
    </div>
  );
}
```

### 12.8.6 Cache et Offline Support

```typescript
// patterns/offlineSupport.ts
export function useOfflineDetection() {
  const isOnline = useOnlineStatus();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isOnline) {
      // Afficher banniere hors ligne
      toast.warning('Vous etes hors ligne. Les donnees affichees peuvent etre obsolete.');

      // Desactiver les refetch automatiques
      queryClient.setDefaultOptions({
        queries: { ...queryClient.getDefaultOptions().queries, refetchOnWindowFocus: false, refetchOnReconnect: false },
      });
    } else {
      // Reactiver les refetch
      queryClient.setDefaultOptions({
        queries: { ...queryClient.getDefaultOptions().queries, refetchOnWindowFocus: true, refetchOnReconnect: true },
      });

      // Refraichir les donnees
      queryClient.invalidateQueries();
      toast.success('Connexion restauree');
    }
  }, [isOnline, queryClient]);
}
```

### 12.8.7 Service Worker Cache

```typescript
// service-worker.js
const CACHE_VERSION = 'v1';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/static/js/main.js',
  '/static/css/main.css',
  '/offline.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API requests - Network First
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Images - Cache First
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const clone = response.clone();
          caches.open(IMAGE_CACHE).then((cache) => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // Static assets - Cache First
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).catch(() => caches.match('/offline.html')))
  );
});
```

---

# CHAPITRES 13-16 : Specifications Techniques - Marketplace E-Commerce Mondiale

---

# CHAPITRE 13 : Design System Complet

## 13.1 Palette de Couleurs

Le design system repose sur une palette de couleurs unifiee, definie via les tokens DaisyUI et etendue avec des variables CSS personnalisees pour des cas d'usage specifiques.

### 13.1.1 Couleurs Principales (Primary)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `primary` | `#3B82F6` | `59, 130, 246` | Boutons principaux, liens, elements interactifs |
| `primary-focus` | `#2563EB` | `37, 99, 235` | Etat hover/focus des elements primaires |
| `primary-content` | `#FFFFFF` | `255, 255, 255` | Texte sur fond primary |

### 13.1.2 Couleurs Secondaires (Secondary)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `secondary` | `#8B5CF6` | `139, 92, 246` | Elements secondaires, badges, tags |
| `secondary-focus` | `#7C3AED` | `124, 58, 237` | Etat hover/focus secondaire |
| `secondary-content` | `#FFFFFF` | `255, 255, 255` | Texte sur fond secondary |

### 13.1.3 Couleurs d'Accent (Accent)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `accent` | `#F59E0B` | `245, 158, 11` | Mise en avant, promotions, highlights |
| `accent-focus` | `#D97706` | `217, 119, 6` | Etat hover/focus accent |
| `accent-content` | `#1F2937` | `31, 41, 55` | Texte sur fond accent (contraste fonce) |

### 13.1.4 Couleurs Neutres (Neutral)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `neutral` | `#1F2937` | `31, 41, 55` | Texte principal, bordures sombres |
| `neutral-focus` | `#111827` | `17, 24, 39` | Etat hover neutre |
| `neutral-content` | `#F9FAFB` | `249, 250, 251` | Texte sur fond neutre |

### 13.1.5 Couleurs de Base (Base)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `base-100` | `#FFFFFF` | `255, 255, 255` | Fond de page principal (light mode) |
| `base-200` | `#F3F4F6` | `243, 244, 246` | Fond de cartes, sections secondaires |
| `base-300` | `#E5E7EB` | `229, 231, 235` | Borderes legeres, separateurs |
| `base-content` | `#1F2937` | `31, 41, 55` | Texte sur fond base |

### 13.1.6 Couleurs Semantiques

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `info` | `#06B6D4` | `6, 182, 212` | Informations, tooltips, notices |
| `info-content` | `#FFFFFF` | `255, 255, 255` | Texte sur fond info |
| `success` | `#10B981` | `16, 185, 129` | Succes, confirmations, disponibilite |
| `success-content` | `#FFFFFF` | `255, 255, 255` | Texte sur fond success |
| `warning` | `#F59E0B` | `245, 158, 11` | Alertes, stocks faibles, attention |
| `warning-content` | `#1F2937` | `31, 41, 55` | Texte sur fond warning (contraste fonce) |
| `error` | `#EF4444` | `239, 68, 68` | Erreurs, suppressions, danger |
| `error-content` | `#FFFFFF` | `255, 255, 255` | Texte sur fond error |

### 13.1.7 Couleurs Etendues (Extended Palette)

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#F8FAFC` | Fond des surfaces surlevees |
| `surface-dim` | `#E2E8F0` | Surface en etat desactive |
| `surface-bright` | `#FFFFFF` | Surface en etat actif |
| `border-default` | `#CBD5E1` | Bordure par defaut |
| `border-strong` | `#94A3B8` | Bordure renforcee |
| `overlay` | `rgba(0,0,0,0.5)` | Fond des modals, overlays |
| `highlight` | `#FEF3C7` | Mise en surbrillance de texte |
| `link` | `#2563EB` | Liens hypertextes |
| `link-hover` | `#1D4ED8` | Liens hypertextes au survol |
| `muted` | `#6B7280` | Texte secondaire, placeholders |

---

## 13.2 Configuration DaisyUI Theme

### 13.2.1 Theme Light et Dark (Configuration Complete)

```javascript
// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      boxShadow: {
        'colored-primary': '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
        'colored-success': '0 4px 14px 0 rgba(16, 185, 129, 0.39)',
        'colored-error': '0 4px 14px 0 rgba(239, 68, 68, 0.39)',
        'colored-warning': '0 4px 14px 0 rgba(245, 158, 11, 0.39)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '70%': { transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'fade-in-up': 'fadeInUp 300ms ease-out',
        'slide-in-left': 'slideInLeft 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
        'pop-in': 'popIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        "marketplace-light": {
          "primary": "#3B82F6",
          "primary-content": "#FFFFFF",
          "primary-focus": "#2563EB",
          "secondary": "#8B5CF6",
          "secondary-content": "#FFFFFF",
          "secondary-focus": "#7C3AED",
          "accent": "#F59E0B",
          "accent-content": "#1F2937",
          "accent-focus": "#D97706",
          "neutral": "#1F2937",
          "neutral-content": "#F9FAFB",
          "neutral-focus": "#111827",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          "base-content": "#1F2937",
          "info": "#06B6D4",
          "info-content": "#FFFFFF",
          "success": "#10B981",
          "success-content": "#FFFFFF",
          "warning": "#F59E0B",
          "warning-content": "#1F2937",
          "error": "#EF4444",
          "error-content": "#FFFFFF",
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.97",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
      {
        "marketplace-dark": {
          "primary": "#60A5FA",
          "primary-content": "#1E3A5F",
          "primary-focus": "#3B82F6",
          "secondary": "#A78BFA",
          "secondary-content": "#2D1B69",
          "secondary-focus": "#8B5CF6",
          "accent": "#FBBF24",
          "accent-content": "#422006",
          "accent-focus": "#F59E0B",
          "neutral": "#F9FAFB",
          "neutral-content": "#1F2937",
          "neutral-focus": "#E5E7EB",
          "base-100": "#1A1A2E",
          "base-200": "#16213E",
          "base-300": "#0F3460",
          "base-content": "#E2E8F0",
          "info": "#22D3EE",
          "info-content": "#164E63",
          "success": "#34D399",
          "success-content": "#064E3B",
          "warning": "#FBBF24",
          "warning-content": "#422006",
          "error": "#F87171",
          "error-content": "#450A0A",
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.97",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
    darkTheme: "marketplace-dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
  },
};
```

### 13.2.2 Variables CSS Globales (Custom Tokens)

```css
/* src/styles/design-tokens.css */
:root {
  --color-surface: #F8FAFC;
  --color-surface-dim: #E2E8F0;
  --color-surface-bright: #FFFFFF;
  --color-border-default: #CBD5E1;
  --color-border-strong: #94A3B8;
  --color-overlay: rgba(0, 0, 0, 0.5);
  --color-highlight: #FEF3C7;
  --color-muted: #6B7280;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;
}

[data-theme="marketplace-dark"] {
  --color-surface: #1A1A2E;
  --color-surface-dim: #16213E;
  --color-surface-bright: #1E2A4A;
  --color-border-default: #334155;
  --color-border-strong: #475569;
  --color-overlay: rgba(0, 0, 0, 0.7);
  --color-muted: #94A3B8;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
}
```

### 13.2.3 Application du theme par defaut

```jsx
// src/providers/ThemeProvider.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('marketplace-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'marketplace-dark'
      : 'marketplace-light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('marketplace-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev =>
      prev === 'marketplace-light'
        ? 'marketplace-dark'
        : 'marketplace-light'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

---

## 13.3 Typographies

### 13.3.1 Familles de Polices

| Role | Famille | Fallback |
|---|---|---|
| Heading | `'Inter', system-ui, -apple-system` | `sans-serif` |
| Body | `'Inter', system-ui, -apple-system` | `sans-serif` |
| Monospace | `'JetBrains Mono', 'Fira Code', monospace` | `monospace` |
| Display | `'Plus Jakarta Sans', 'Inter', sans-serif` | `system-ui` |

### 13.3.2 Echelle Typographique

| Taille | Font Size | Line Height | Font Weight | Usage |
|---|---|---|---|---|
| `text-xs` | `0.75rem` | `1rem` | 400 | Legendes, badges, metadata |
| `text-sm` | `0.875rem` | `1.25rem` | 400 | Captions, labels, texte secondaire |
| `text-base` | `1rem` | `1.5rem` | 400 | Corps de texte par defaut |
| `text-lg` | `1.125rem` | `1.75rem` | 400 | Texte augmente, intros |
| `text-xl` | `1.25rem` | `1.75rem` | 500 | Sous-titres legers |
| `text-2xl` | `1.5rem` | `2rem` | 600 | Titres de sections (h3) |
| `text-3xl` | `1.875rem` | `2.25rem` | 700 | Titres de pages (h2) |
| `text-4xl` | `2.25rem` | `2.5rem` | 700 | Titres hero (h1) |
| `text-5xl` | `3rem` | `1` | 800 | Display numbers, pricing |
| `text-6xl` | `3.75rem` | `1` | 800 | Hero banner headlines |

### 13.3.3 Poids de Police

| Token | Valeur | Usage |
|---|---|---|
| `font-light` | 300 | Texte decoratif, accents |
| `font-normal` | 400 | Corps de texte, labels |
| `font-medium` | 500 | Sous-titres, navigation active |
| `font-semibold` | 600 | Titres secondaires, boutons importants |
| `font-bold` | 700 | Titres principaux, mise en avant |
| `font-extrabold` | 800 | Display, hero headlines |

### 13.3.4 Importation des Polices

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

---

## 13.4 Systeme d'Espacement

### 13.4.1 Echelle d'Espacement Tailwind

| Token | Valeur | Pixel | Usage |
|---|---|---|---|
| `p-0 / m-0` | `0px` | 0 | Aucun espacement |
| `p-px / m-px` | `1px` | 1 | Borderes fines |
| `p-0.5 / m-0.5` | `0.125rem` | 2 | Micro-espacement |
| `p-1 / m-1` | `0.25rem` | 4 | Espacement minimal (icon padding) |
| `p-1.5 / m-1.5` | `0.375rem` | 6 | Padding boutons compacts |
| `p-2 / m-2` | `0.5rem` | 8 | Espacement interne cartes compacts |
| `p-3 / m-3` | `0.75rem` | 12 | Padding boutons standards, inputs |
| `p-4 / m-4` | `1rem` | 16 | Espacement sections internes |
| `p-5 / m-5` | `1.25rem` | 20 | Espacement cartes moyennes |
| `p-6 / m-6` | `1.5rem` | 24 | Espacement sections |
| `p-8 / m-8` | `2rem` | 32 | Espacement sections larges |
| `p-10 / m-10` | `2.5rem` | 40 | Marges sections |
| `p-12 / m-12` | `3rem` | 48 | Espacement hero sections |
| `p-16 / m-16` | `4rem` | 64 | Espacement grand format |
| `p-20 / m-20` | `5rem` | 80 | Espacement ultra-large |
| `p-24 / m-24` | `6rem` | 96 | Espacement max desktop |
| `p-32 / m-32` | `8rem` | 128 | Espacement extra-large |

### 13.4.2 Gap System (Grille)

| Token | Valeur | Usage |
|---|---|---|
| `gap-0` | `0px` | Items collés |
| `gap-1` | `0.25rem` | Inline items compacts |
| `gap-2` | `0.5rem` | Listes compacts |
| `gap-3` | `0.75rem` | Grille de produits (mobile) |
| `gap-4` | `1rem` | Grille de produits (desktop) |
| `gap-6` | `1.5rem` | Sections internes |
| `gap-8` | `2rem` | Sections externes |
| `gap-10` | `2.5rem` | Blocs majeurs |
| `gap-12` | `3rem` | Separation de sections |

### 13.4.3 Espacement des Composants Cles

```
+-----------------------------------------------------+
|  Header:  h-16 (64px) padding-x: 4-6              |
+-----------------------------------------------------+
|  Sidebar: w-64 (256px)  padding: 4                 |
+-----------------------------------------------------+
|  Main:    padding: 4-8 (responsive)                |
+-----------------------------------------------------+
|  Card:    padding: 4-6  gap-4                      |
+-----------------------------------------------------+
|  Footer:  padding-y: 12  padding-x: 4-8            |
+-----------------------------------------------------+
```

---

## 13.5 Borderes et Arrondis

### 13.5.1 Echelle d'Arrondis (Border Radius)

| Token | Valeur | Usage |
|---|---|---|
| `rounded-none` | `0px` | Elements sans arrondi |
| `rounded-sm` | `0.125rem` | Petits badges, indicateurs |
| `rounded` | `0.25rem` | Inputs, boutons standards |
| `rounded-md` | `0.375rem` | Cards, containers secondaires |
| `rounded-lg` | `0.5rem` | Cards principales, modals |
| `rounded-xl` | `0.75rem` | Grandes cards, conteneurs (DaisyUI `--rounded-box`) |
| `rounded-2xl` | `1rem` | Hero sections, conteneurs premium |
| `rounded-3xl` | `1.5rem` | Avatars, elements decoratifs |
| `rounded-full` | `9999px` | Avatars, boutons circulaires, badges ronds |

### 13.5.2 Borderes

| Token | Valeur | Usage |
|---|---|---|
| `border` | `1px` | Bordure par defaut (inputs, cards) |
| `border-2` | `2px` | Bordure renforcee (focus, highlights) |
| `border-4` | `4px` | Bordure decorative, avatars |
| `border-dashed` | dashed | Zones de drop, upload |
| `border-dotted` | dotted | Separateurs visuels |

### 13.5.3 Couleurs de Bordure

| Classe | Usage |
|---|---|
| `border-base-300` | Bordure standard |
| `border-base-content/10` | Bordure subtile |
| `border-primary` | Bordure d'accent primary |
| `border-error` | Bordure d'erreur (validation) |
| `border-success` | Bordure de succes |

---

## 13.6 Ombres (Systeme d'Elevation)

### 13.6.1 Niveaux d'Elevation

| Niveau | Token CSS | Tailwind | Usage |
|---|---|---|---|
| Level 0 | — | `shadow-none` | Elements plats, backgrounds |
| Level 1 | `--shadow-sm` | `shadow-sm` | Inputs au repos, badges |
| Level 2 | `--shadow-md` | `shadow-md` | Cards au repos, dropdowns |
| Level 3 | `--shadow-lg` | `shadow-lg` | Cards au survol, popovers |
| Level 4 | `--shadow-xl` | `shadow-xl` | Modals, dialogs |
| Level 5 | custom | `shadow-2xl` | Notifications toast, elements flottants |

### 13.6.2 Ombres Colored (Accent)

```css
.shadow-primary { box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39); }
.shadow-success { box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39); }
.shadow-error   { box-shadow: 0 4px 14px 0 rgba(239, 68, 68, 0.39); }
.shadow-warning { box-shadow: 0 4px 14px 0 rgba(245, 158, 11, 0.39); }
```

---

## 13.7 Icones (Lucide React)

### 13.7.1 Tailles d'Icones

| Token | Taille | Stroke Width | Usage |
|---|---|---|---|
| `xs` | 12px | 2 | Inline text icons, badges |
| `sm` | 16px | 2 | Icons dans les boutons compacts |
| `md` (default) | 20px | 2 | Navigation, boutons standards |
| `lg` | 24px | 2 | Icons dans les cards, headers |
| `xl` | 32px | 1.5 | Icons hero, sections vides |
| `2xl` | 40px | 1.5 | Icons hero, illustrations |
| `3xl` | 48px | 1.5 | Illustrations majeures, empty states |

### 13.7.2 Composant Icon Wrapper

```jsx
// src/components/ui/Icon.jsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const iconSizes = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-12 w-12',
};

const Icon = forwardRef(({ icon: LucideIcon, size = 'md', className, ...props }, ref) => (
  <LucideIcon
    ref={ref}
    className={cn(iconSizes[size], 'shrink-0', className)}
    strokeWidth={size === 'xl' || size === '2xl' || size === '3xl' ? 1.5 : 2}
    {...props}
  />
));

Icon.displayName = 'Icon';
export default Icon;
```

### 13.7.3 Couleurs d'Icones par Contexte

| Contexte | Classe | Exemple d'icone |
|---|---|---|
| Navigation | `text-base-content` | Home, Search, User |
| Succes | `text-success` | CheckCircle, Check |
| Erreur | `text-error` | AlertCircle, X |
| Information | `text-info` | Info, HelpCircle |
| Avertissement | `text-warning` | AlertTriangle, Clock |
| Primary (interactive) | `text-primary` | Heart, ShoppingCart |
| Muted (secondaire) | `text-muted` | Calendar, Hash |
| Sur bouton primary | `text-primary-content` | ArrowRight, Plus |

### 13.7.4 Icones Frequentes du Marketplace

```jsx
import {
  Home, Search, ShoppingCart, Heart, User, Bell,
  Settings, Package, Truck, Star, MapPin, CreditCard,
  ChevronDown, ChevronRight, Menu, X, Plus, Minus,
  Edit, Trash2, Eye, Filter, Grid, List, SortAsc,
  ArrowLeft, ArrowRight, RefreshCw, Download, Upload,
  Share2, Copy, ExternalLink, CheckCircle, AlertTriangle,
  Info, Clock, Tag, Percent, Image, FileText,
  MessageSquare, Phone, Mail, Globe, Shield,
} from 'lucide-react';
```

---

## 13.8 Animations et Transitions

### 13.8.1 Durees de Transition

| Token | Valeur | Usage |
|---|---|---|
| `duration-75` | 75ms | Micro-interactions (scale, opacity) |
| `duration-100` | 100ms | Hover states rapides |
| `duration-150` | 150ms | Etats de focus, toggles |
| `duration-200` | 200ms | Transitions standard (couleur, bordure) |
| `duration-300` | 300ms | Entrees/sorties d'elements (dropdown, modal) |
| `duration-500` | 500ms | Animations de contenu, changement de page |

### 13.8.2 Courbes d'Easing

| Nom | Valeur | Usage |
|---|---|---|
| `ease-linear` | `linear` | Animations continues |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Sorties d'elements |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Entrees d'elements |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transitions d'etat |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Animations bouncy (favoris, panier) |

### 13.8.3 Animations d'Entree

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes popIn {
  0%   { opacity: 0; transform: scale(0.8); }
  70%  { transform: scale(1.02); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-fade-in      { animation: fadeIn 200ms ease-out; }
.animate-fade-in-up   { animation: fadeInUp 300ms ease-out; }
.animate-fade-in-down { animation: fadeInDown 300ms ease-out; }
.animate-slide-in-left { animation: slideInLeft 300ms ease-out; }
.animate-slide-in-right { animation: slideInRight 300ms ease-out; }
.animate-scale-in     { animation: scaleIn 200ms ease-out; }
.animate-pop-in       { animation: popIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1); }
```

### 13.8.4 Animations de Chargement (Loading)

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50%      { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-spin     { animation: spin 1s linear infinite; }
.animate-pulse    { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-bounce   { animation: bounce 1s infinite; }

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-base-200) 25%,
    var(--color-base-300) 50%,
    var(--color-base-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
```

### 13.8.5 Micro-Interactions

```jsx
// Bouton avec micro-interaction
<button className="
  btn btn-primary
  transition-all duration-200 ease-in-out
  hover:scale-[1.02] hover:shadow-lg
  active:scale-[0.98]
  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
">
  Ajouter au panier
</button>

// Card avec elevation au hover
<div className="
  card bg-base-100 shadow-sm
  transition-all duration-300 ease-out
  hover:shadow-lg hover:-translate-y-1
">
  <div className="card-body">...</div>
</div>
```

---

## 13.9 Responsive Design

### 13.9.1 Breakpoints

| Nom | Min Width | Usage |
|---|---|---|
| `xs` | 475px | Telephones larges (custom) |
| `sm` | 640px | Telephones paysage, petits tablets |
| `md` | 768px | Tablets en mode portrait |
| `lg` | 1024px | Tablets paysage, petits ecrans desktop |
| `xl` | 1280px | Ecrans desktop standards |
| `2xl` | 1536px | Grands ecrans, ultra-wide |

### 13.9.2 Grille Responsive

```
Mobile (< 640px)     : grid-cols-1, gap-4, px-4
Tablet (640-768px)    : grid-cols-2, gap-4, px-6
Tablet LG (768-1024px): grid-cols-2-3, gap-6, px-6
Desktop (1024-1280px) : grid-cols-3-4, gap-6, px-8
Desktop XL (1280+)    : grid-cols-4-5, gap-8, px-8, max-w-7xl mx-auto
```

### 13.9.3 Layout Responsive du Marketplace

```
MOBILE (< 640px)
+-----+
| ☰   | Hamburger menu
+-----+
| 🔍  | Search bar pleine largeur
+-----+
| 📦  | 1 colonne de produits
| 📦  |
+-----+

TABLET (640-1024px)
+--------------------------------+
| Logo    🔍    🛒  👤  🔔      |
+--------------------------------+
|  📦  📦  |                    |
|  📦  📦  | Sidebar filtres    |
|  📦  📦  | (optionnel)        |
+--------------------------------+

DESKTOP (1024px+)
+------------------------------------------+
| Logo  Categories   🔍    🛒  👤  🔔     |
+------------------------------------------+
| Sidebar |  📦  📦  📦                   |
| Filtres |  📦  📦  📦  max-w-7xl        |
| w-64    |  📦  📦  📦                   |
+------------------------------------------+
```

### 13.9.4 Container Queries

```css
.product-card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .product-card-layout {
    grid-template-columns: 1fr;
  }
}

@container (min-width: 500px) {
  .product-card-layout {
    grid-template-columns: 200px 1fr;
  }
}
```

### 13.9.5 Tailles Maximales de Conteneurs

| Breakpoint | Max Width | Classe |
|---|---|---|
| Default | 100% | `w-full` |
| sm | 640px | `max-w-screen-sm` |
| md | 768px | `max-w-screen-md` |
| lg | 1024px | `max-w-screen-lg` |
| xl | 1280px | `max-w-screen-xl` |
| 2xl | 1536px | `max-w-screen-2xl` |
| Marketplace | 1280px | `max-w-7xl mx-auto px-4` |

---

## 13.10 Accessibilite WCAG 2.1 AA

### 13.10.1 Ratios de Contraste (AA Normal Text: 4.5:1, Large Text: 3:1)

| Combinaison | Ratio | Conforme AA | Conforme AAA |
|---|---|---|---|
| base-content sur base-100 | 12.5:1 | Oui | Oui |
| primary-content sur primary | 4.8:1 | Oui | Non |
| neutral-content sur neutral | 13.2:1 | Oui | Oui |
| info-content sur info | 4.6:1 | Oui | Non |
| success-content sur success | 4.5:1 | Oui | Non |
| error-content sur error | 4.7:1 | Oui | Non |
| warning-content sur warning | 8.1:1 | Oui | Oui |
| accent-content sur accent | 7.2:1 | Oui | Oui |
| muted sur base-100 (light) | 4.6:1 | Oui | Non |
| muted sur base-100 (dark) | 5.1:1 | Oui | Non |

### 13.10.2 Etats de Focus

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--rounded-btn);
}

.focus-ring:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-base-100), 0 0 0 4px var(--color-primary);
}

:focus:not(:focus-visible) {
  outline: none;
}
```

### 13.10.3 Attributs ARIA Requis

| Element | Attributs ARIA requis |
|---|---|
| Bouton | `aria-label` si pas de texte visible |
| Modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Navigation | `role="navigation"`, `aria-label` |
| Menu | `role="menubar"`, `aria-expanded` |
| Champ input | `aria-label` ou `<label>` associe via `htmlFor` |
| Badge d'erreur | `role="alert"`, `aria-live="assertive"` |
| Progress bar | `role="progressbar"`, `aria-valuenow`, `aria-valuemax` |
| Tabs | `role="tablist"`, `role="tab"`, `aria-selected` |
| Dropdown | `aria-haspopup="true"`, `aria-expanded` |
| Toast/Snackbar | `role="status"`, `aria-live="polite"` |
| Image decorative | `alt=""` (vide) |
| Image informative | `alt="description concise"` |
| Loader | `role="status"`, `aria-label="Chargement..."` |

### 13.10.4 Regles d'Accessibilite

1. **Navigation clavier** : Tous les elements interactifs accessibles via `Tab` et `Shift+Tab`
2. **Ordre logique** : L'ordre de tabulation suit l'ordre visuel de la page
3. **Skip links** : Lien "Aller au contenu principal" en premier element focusable
4. **Textes alternatifs** : Toutes les images informatives ont un `alt` descriptif
5. **Contraste** : Tous les textes respectent les ratios AA minimum (4.5:1)
6. **Taille de texte** : Le texte peut etre agrandi a 200% sans perte de fonctionnalite
7. **Motion** : Respect de `prefers-reduced-motion` pour toutes les animations
8. **Formulaires** : Chaque input a un label visible ou accessible aux lecteurs d'ecran
9. **Erreurs** : Les messages d'erreur sont lies aux champs via `aria-describedby`
10. **Timeout** : Les sessions temporisees avertissent l'utilisateur avant expiration

```jsx
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:btn focus:btn-primary"
    >
      Aller au contenu principal
    </a>
  );
}
```

---

## 13.11 Dark Mode / Light Mode

### 13.11.1 Strategie de Toggle

```jsx
// src/components/ui/ThemeToggle.jsx
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import Icon from '@/components/ui/Icon';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'marketplace-dark';

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      <Icon
        icon={isDark ? Sun : Moon}
        size="md"
        className="transition-transform duration-300"
      />
    </button>
  );
}
```

### 13.11.2 Logique de Persistance

| Priorite | Source | Description |
|---|---|---|
| 1 | `localStorage` | Preference de l'utilisateur sauvegardee |
| 2 | `prefers-color-scheme` | Preference systeme de l'OS |
| 3 | Default | `marketplace-light` (fallback) |

### 13.11.3 Transition entre Themes

```css
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.card, .btn, .input, .navbar, .sidebar {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
}
```

---

## 13.12 Composants Reutilisables (Component Library)

### 13.12.1 Inventaire des Composants

#### Composants de Base (Atoms)

| Composant | Fichier | Props principaux |
|---|---|---|
| `Button` | `src/components/ui/Button.jsx` | `variant`, `size`, `loading`, `icon`, `iconPosition` |
| `Input` | `src/components/ui/Input.jsx` | `label`, `error`, `helperText`, `icon`, `type` |
| `Select` | `src/components/ui/Select.jsx` | `label`, `options`, `value`, `error` |
| `Textarea` | `src/components/ui/Textarea.jsx` | `label`, `error`, `rows`, `maxLength` |
| `Checkbox` | `src/components/ui/Checkbox.jsx` | `label`, `checked`, `error`, `indeterminate` |
| `Radio` | `src/components/ui/Radio.jsx` | `label`, `value`, `name`, `checked` |
| `Toggle` | `src/components/ui/Toggle.jsx` | `label`, `checked`, `size` |
| `Badge` | `src/components/ui/Badge.jsx` | `variant`, `size`, `dot`, `icon` |
| `Avatar` | `src/components/ui/Avatar.jsx` | `src`, `alt`, `size`, `shape`, `status` |
| `Icon` | `src/components/ui/Icon.jsx` | `icon`, `size`, `className` |
| `Skeleton` | `src/components/ui/Skeleton.jsx` | `variant` (text/circle/rect), `width`, `height` |

#### Composants de Forme (Molecules)

| Composant | Fichier | Props principaux |
|---|---|---|
| `SearchBar` | `src/components/ui/SearchBar.jsx` | `placeholder`, `onSearch`, `suggestions` |
| `PriceInput` | `src/components/ui/PriceInput.jsx` | `currency`, `value`, `onChange`, `min`, `max` |
| `Rating` | `src/components/ui/Radi.jsx` | `value`, `max`, `readonly`, `onRate` |
| `TagInput` | `src/components/ui/TagInput.jsx` | `tags`, `onAdd`, `onRemove`, `suggestions` |
| `FileUpload` | `src/components/ui/FileUpload.jsx` | `accept`, `multiple`, `maxSize`, `onUpload` |
| `DateRangePicker` | `src/components/ui/DateRangePicker.jsx` | `startDate`, `endDate`, `onChange` |
| `PasswordStrength` | `src/components/ui/PasswordStrength.jsx` | `password`, `showRequirements` |

#### Composants de Contenu (Molecules)

| Composant | Fichier | Props principaux |
|---|---|---|
| `Card` | `src/components/ui/Card.jsx` | `variant`, `hover`, `onClick`, `children` |
| `ProductCard` | `src/components/marketplace/ProductCard.jsx` | `product`, `onAddToCart`, `onAddToWishlist` |
| `Alert` | `src/components/ui/Alert.jsx` | `variant`, `icon`, `closable`, `action` |
| `Toast` | `src/components/ui/Toast.jsx` | `variant`, `title`, `message`, `duration` |
| `Tooltip` | `src/components/ui/Tooltip.jsx` | `content`, `position`, `children` |
| `Popover` | `src/components/ui/Popover.jsx` | `trigger`, `content`, `placement` |

#### Composants de Navigation (Organisms)

| Composant | Fichier | Props principaux |
|---|---|---|
| `Navbar` | `src/components/layout/Navbar.jsx` | `logo`, `links`, `actions` |
| `Sidebar` | `src/components/layout/Sidebar.jsx` | `items`, `collapsed`, `onToggle` |
| `Breadcrumb` | `src/components/ui/Breadcrumb.jsx` | `items`, `separator` |
| `Pagination` | `src/components/ui/Pagination.jsx` | `currentPage`, `totalPages`, `onPageChange` |
| `Tabs` | `src/components/ui/Tabs.jsx` | `items`, `activeTab`, `onChange` |
| `Stepper` | `src/components/ui/Stepper.jsx` | `steps`, `currentStep` |

#### Composants de Liste (Organisms)

| Composant | Fichier | Props principaux |
|---|---|---|
| `DataTable` | `src/components/ui/DataTable.jsx` | `columns`, `data`, `sortable`, `pagination` |
| `VirtualizedList` | `src/components/ui/VirtualizedList.jsx` | `items`, `renderItem`, `itemHeight` |
| `FilterPanel` | `src/components/marketplace/FilterPanel.jsx` | `filters`, `values`, `onChange` |
| `ProductGrid` | `src/components/marketplace/ProductGrid.jsx` | `products`, `layout`, `onSort` |

#### Composants de Feedback (Organisms)

| Composant | Fichier | Props principaux |
|---|---|---|
| `Modal` | `src/components/ui/Modal.jsx` | `open`, `onClose`, `title`, `size`, `children` |
| `Drawer` | `src/components/ui/Drawer.jsx` | `open`, `onClose`, `side`, `children` |
| `Dropdown` | `src/components/ui/Dropdown.jsx` | `trigger`, `items`, `onSelect` |
| `CommandPalette` | `src/components/ui/CommandPalette.jsx` | `open`, `onClose`, `commands` |
| `EmptyState` | `src/components/ui/EmptyState.jsx` | `icon`, `title`, `description`, `action` |
| `LoadingSpinner` | `src/components/ui/LoadingSpinner.jsx` | `size`, `label` |

### 13.12.2 Convention de Nommage des Fichiers

```
src/
+-- components/
|   +-- ui/                     # Composants generiques reutilisables
|   |   +-- Button.jsx
|   |   +-- Button.test.jsx
|   |   +-- Input.jsx
|   |   +-- Input.test.jsx
|   |   +-- index.js           # Export barrel
|   +-- layout/                 # Composants de mise en page
|   |   +-- Navbar.jsx
|   |   +-- Sidebar.jsx
|   |   +-- Footer.jsx
|   |   +-- index.js
|   +-- marketplace/            # Composants metier marketplace
|       +-- ProductCard.jsx
|       +-- ProductGrid.jsx
|       +-- FilterPanel.jsx
|       +-- index.js
+-- hooks/                      # Custom hooks
+-- lib/                        # Utilitaires
+-- providers/                  # Context providers
+-- pages/                      # Pages / routes
```

### 13.12.3 Interface Commune de Tout Composant

```jsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const ComponentName = forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  return (
    <div ref={ref} className={cn('base-classes', className)} {...props}>
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';
export default ComponentName;
```

### 13.12.4 Utilitaire `cn` (Class Merge)

```javascript
// src/lib/utils.js
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

---

---

# CHAPITRE 14 : Securite Frontend

## 14.1 Authentification JWT

### 14.1.1 Flux d'Authentification Complet

```
+----------+         +----------+         +----------+
|  Client  |         |  API     |         |  Serveur |
| (React)  |         | Gateway  |         |  Auth    |
+----+-----+         +----+-----+         +----+-----+
     |                    |                    |
     |  POST /auth/login  |                    |
     |  {email, password} |                    |
     |------------------->|                    |
     |                    |  Verifier creds    |
     |                    |------------------->|
     |                    |                    |
     |                    |  {accessToken,     |
     |                    |   refreshToken,    |
     |                    |   user}            |
     |                    |<-------------------|
     |                    |                    |
     |  200 OK            |                    |
     |  {accessToken,     |                    |
     |   refreshToken,    |                    |
     |   user}            |                    |
     |<-------------------|                    |
     |                    |                    |
     |  Set-Cookie:       |                    |
     |  httpOnly refresh  |                    |
     |  token             |                    |
     |                    |                    |
     |  GET /products     |                    |
     |  Authorization:    |                    |
     |  Bearer <access>   |                    |
     |------------------->|                    |
     |                    |  Valider JWT       |
     |                    |------------------->|
     |                    |                    |
     |  200 OK {data}     |                    |
     |<-------------------|                    |
```

### 14.1.2 Structure du JWT

```json
{
  "sub": "user-uuid-1234",
  "email": "user@example.com",
  "role": "seller",
  "permissions": ["products:read", "products:write", "orders:read"],
  "iat": 1700000000,
  "exp": 1700003600,
  "iss": "marketplace-api",
  "aud": "marketplace-frontend"
}
```

### 14.1.3 Gestion du Token dans le Frontend

```javascript
// src/lib/auth.js
const AUTH_CONFIG = {
  ACCESS_TOKEN_KEY: 'marketplace_access_token',
  REFRESH_TOKEN_KEY: 'marketplace_refresh_token',
  ACCESS_TOKEN_EXPIRY: 15 * 60 * 1000,
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60 * 1000,
  REFRESH_BUFFER: 5 * 60 * 1000,
};

export const authService = {
  _accessToken: null,

  setTokens(accessToken) {
    this._accessToken = accessToken;
  },

  getAccessToken() {
    return this._accessToken;
  },

  isTokenExpiring() {
    if (!this._accessToken) return true;
    try {
      const payload = JSON.parse(atob(this._accessToken.split('.')[1]));
      const expiryTime = payload.exp * 1000;
      return Date.now() >= expiryTime - AUTH_CONFIG.REFRESH_BUFFER;
    } catch {
      return true;
    }
  },

  clearTokens() {
    this._accessToken = null;
  },
};
```

### 14.1.4 Regles de Stockage des Tokens

| Token | Stockage | Justification |
|---|---|---|
| Access Token | Variable en memoire (JS) | Non accessible via JS malveillant (XSS limite) |
| Refresh Token | Cookie httpOnly + Secure + SameSite=Strict | Non lisible par JavaScript, transmis automatiquement |
| User Data | State React + Context | Pas de localStorage pour les donnees sensibles |
| Preferences | localStorage | Donnees non sensibles uniquement |

---

## 14.2 Refresh Token

### 14.2.1 Rotation des Refresh Tokens

```
+------------------------------------------------------+
|  Refresh Token Rotation Flow                         |
+------------------------------------------------------+
|                                                      |
|  1. Access token expire (ou sur le point d'expirer)  |
|  2. Client envoie POST /auth/refresh                 |
|  3. Le refresh token est envoye via cookie httpOnly   |
|  4. Le serveur valide le refresh token               |
|  5. Le serveur genere:                               |
|     - Nouveau access token                           |
|     - Nouveau refresh token (rotation)               |
|  6. Ancien refresh token invalide (one-time use)     |
|  7. Si ancien refresh token reutilise -> frauduleux   |
|     -> TOUTES les sessions de l'utilisateur revoquees |
|                                                      |
+------------------------------------------------------+
```

### 14.2.2 Interceptor Axios pour Refresh Silencieux

```javascript
// src/lib/axios.js
import axios from 'axios';
import { authService } from './auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = authService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const { accessToken } = response.data;
        authService.setTokens(accessToken);

        processQueue(null, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        authService.clearTokens();
        window.location.href = '/auth/login?session=expired';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
```

---

## 14.3 Routes Protegees

### 14.3.1 Systeme de Guards par Role

```jsx
// src/components/auth/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function ProtectedRoute({
  children,
  requiredRoles = [],
  requiredPermissions = [],
  fallback = '/auth/login',
}) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner label="Verification de l'authentification..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to={fallback} state={{ from: location }} replace />;
  }

  if (requiredRoles.length > 0) {
    const hasRole = requiredRoles.includes(user.role);
    if (!hasRole) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  if (requiredPermissions.length > 0) {
    const hasPermission = requiredPermissions.every(
      (perm) => user.permissions?.includes(perm)
    );
    if (!hasPermission) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return children;
}
```

### 14.3.2 Configuration des Routes Protegees

```jsx
// src/routes/index.jsx
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Role } from '@/constants/roles';

export function AppRoutes() {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      {/* Routes utilisateur authentifie */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      {/* Routes vendeur */}
      <Route
        path="/seller/*"
        element={
          <ProtectedRoute requiredRoles={[Role.SELLER, Role.ADMIN]}>
            <SellerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="products" element={<SellerProductsPage />} />
        <Route path="products/new" element={<CreateProductPage />} />
        <Route path="products/:id/edit" element={<EditProductPage />} />
        <Route path="orders" element={<SellerOrdersPage />} />
        <Route path="analytics" element={<SellerAnalyticsPage />} />
      </Route>

      {/* Routes admin */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute
            requiredRoles={[Role.ADMIN]}
            requiredPermissions={['admin:access']}
          >
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="products" element={<AdminProductsPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
```

---

## 14.4 Permissions (RBAC Matrix)

### 14.4.1 Matrice des Roles et Permissions

| Permission | Buyer | Seller | Admin | Super Admin |
|---|:---:|:---:|:---:|:---:|
| **Produits** | | | | |
| products:read | Oui | Oui | Oui | Oui |
| products:write | -- | Oui* | Oui | Oui |
| products:delete | -- | Oui* | Oui | Oui |
| products:publish | -- | Oui* | Oui | Oui |
| products:feature | -- | -- | Oui | Oui |
| **Commandes** | | | | |
| orders:read | Oui* | Oui* | Oui | Oui |
| orders:update | -- | Oui* | Oui | Oui |
| orders:refund | -- | -- | Oui | Oui |
| **Utilisateurs** | | | | |
| users:read | -- | -- | Oui | Oui |
| users:update | Oui* | Oui* | Oui | Oui |
| users:delete | -- | -- | -- | Oui |
| users:ban | -- | -- | Oui | Oui |
| **Paiements** | | | | |
| payments:read | Oui* | Oui* | Oui | Oui |
| payments:process | -- | -- | Oui | Oui |
| payments:refund | -- | -- | Oui | Oui |
| **Avis** | | | | |
| reviews:read | Oui | Oui | Oui | Oui |
| reviews:write | Oui | -- | Oui | Oui |
| reviews:moderate | -- | -- | Oui | Oui |
| **Analytics** | | | | |
| analytics:own | -- | Oui* | Oui | Oui |
| analytics:platform | -- | -- | Oui | Oui |
| **Systeme** | | | | |
| admin:access | -- | -- | Oui | Oui |
| system:settings | -- | -- | -- | Oui |
| system:logs | -- | -- | Oui | Oui |

*`Oui*` = limitation scope : l'utilisateur ne voit que ses propres donnees*

### 14.4.2 Feature Flags

```javascript
// src/constants/featureFlags.js
export const FeatureFlags = {
  MULTI_CURRENCY: 'multi_currency',
  INTERNATIONAL_SHIPPING: 'international_shipping',
  DIGITAL_PRODUCTS: 'digital_products',
  AI_RECOMMENDATIONS: 'ai_recommendations',
  LIVE_CHAT: 'live_chat',
  VIDEO_REVIEWS: 'video_reviews',
  ADVANCED_ANALYTICS: 'advanced_analytics',
  BULK_OPERATIONS: 'bulk_operations',
  API_ACCESS: 'api_access',
  SELLER_SUBSCRIPTIONS: 'seller_subscriptions',
  AFFILIATE_PROGRAM: 'affiliate_program',
};
```

```jsx
function useFeatureFlag(flag) {
  const { featureFlags } = useConfig();
  return featureFlags.includes(flag);
}

function ProductPage() {
  const hasAI = useFeatureFlag(FeatureFlags.AI_RECOMMENDATIONS);

  return (
    <div>
      <ProductDetails />
      {hasAI && <AIRecommendations productId={id} />}
    </div>
  );
}
```

---

## 14.5 Validation des Formulaires

### 14.5.1 Schemas Zod

```javascript
// src/lib/validations/auth.js
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
  password: z
    .string()
    .min(1, 'Le mot de passe est requis')
    .min(8, 'Le mot de passe doit contenir au moins 8 caracteres'),
});

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Le prenom est requis')
    .max(50, 'Le prenom ne peut depasser 50 caracteres')
    .regex(/^[a-zA-ZA-y\s'-]+$/, 'Le prenom contient des caracteres invalides'),
  lastName: z
    .string()
    .min(1, 'Le nom est requis')
    .max(50, 'Le nom ne peut depasser 50 caracteres')
    .regex(/^[a-zA-ZA-y\s'-]+$/, 'Le nom contient des caracteres invalides'),
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
  password: z
    .string()
    .min(1, 'Le mot de passe est requis')
    .min(8, 'Minimum 8 caracteres')
    .regex(/[A-Z]/, 'Doit contenir au moins une majuscule')
    .regex(/[a-z]/, 'Doit contenir au moins une minuscule')
    .regex(/[0-9]/, 'Doit contenir au moins un chiffre')
    .regex(/[^A-Za-z0-9]/, 'Doit contenir au moins un caractere special'),
  confirmPassword: z.string().min(1, 'Confirmation requise'),
  role: z.enum(['buyer', 'seller'], {
    errorMap: () => ({ message: 'Role invalide' }),
  }),
  sellerName: z.string().optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions d'utilisation" }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword'],
}).refine(
  (data) => {
    if (data.role === 'seller') {
      return data.sellerName && data.sellerName.length >= 3;
    }
    return true;
  },
  {
    message: 'Le nom du vendeur est requis (minimum 3 caracteres)',
    path: ['sellerName'],
  }
);

export const productSchema = z.object({
  title: z
    .string()
    .min(5, 'Le titre doit contenir au moins 5 caracteres')
    .max(200, 'Le titre ne peut depasser 200 caracteres'),
  description: z
    .string()
    .min(20, 'La description doit contenir au moins 20 caracteres')
    .max(5000, 'La description ne peut depasser 5000 caracteres'),
  price: z
    .number()
    .positive('Le prix doit etre positif')
    .max(999999.99, 'Le prix ne peut depasser 999 999,99'),
  currency: z.enum(['EUR', 'USD', 'GBP']),
  categoryId: z.string().uuid('Categorie invalide'),
  images: z
    .array(z.string().url())
    .min(1, 'Au moins 1 image requise')
    .max(10, 'Maximum 10 images'),
  stock: z
    .number()
    .int('Doit etre un entier')
    .min(0, 'Le stock ne peut etre negatif'),
  tags: z.array(z.string()).max(10, 'Maximum 10 tags'),
});

export const reviewSchema = z.object({
  rating: z.number().int().min(1, 'Note minimale : 1').max(5, 'Note maximale : 5'),
  title: z.string().min(3, 'Titre requis').max(100),
  comment: z.string().min(10, 'Commentaire requis (10 caracteres min)').max(2000),
});
```

### 14.5.2 Hook de Form avec Validation

```javascript
// src/hooks/useForm.js
import { useState, useCallback } from 'react';
import { ZodError } from 'zod';

export function useForm({ schema, onSubmit, defaultValues = {} }) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback(
    (data) => {
      try {
        schema.parse(data);
        setErrors({});
        return true;
      } catch (error) {
        if (error instanceof ZodError) {
          const fieldErrors = {};
          error.errors.forEach((err) => {
            const field = err.path[0];
            if (!fieldErrors[field]) {
              fieldErrors[field] = err.message;
            }
          });
          setErrors(fieldErrors);
        }
        return false;
      }
    },
    [schema]
  );

  const handleChange = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validate(values)) return;

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        setErrors({ form: error.message });
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validate, onSubmit]
  );

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors,
    reset: () => {
      setValues(defaultValues);
      setErrors({});
    },
  };
}
```

---

## 14.6 Protection XSS

### 14.6.1 Protection Integree de React

React echappe automatiquement les valeurs inserees dans le JSX. Ceci protege contre la majorite des XSS basiques.

```jsx
// SECURISE : React echappe le contenu
function SafeComponent({ userInput }) {
  return <div>{userInput}</div>;
}

// DANGEREUX : Ne jamais utiliser dangerouslySetInnerHTML
// avec du contenu non sanitise
function UnsafeComponent({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
```

### 14.6.2 Sanitization avec DOMPurify

```javascript
// src/lib/sanitize.js
import DOMPurify from 'dompurify';

const PURIFY_CONFIG = {
  ALLOWED_TAGS: [
    'p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'a', 'img', 'blockquote', 'code', 'pre',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'span', 'div',
  ],
  ALLOWED_ATTR: [
    'href', 'src', 'alt', 'title', 'class', 'target',
    'rel', 'width', 'height', 'colspan', 'rowspan',
  ],
  ALLOW_DATA_ATTR: false,
};

export function sanitizeHTML(dirty) {
  return DOMPurify.sanitize(dirty, PURIFY_CONFIG);
}

export function sanitizeUserContent(content) {
  if (typeof content !== 'string') return '';
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href'],
  });
}
```

### 14.6.3 Content Security Policy (CSP)

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{random}';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https://*.amazonaws.com https://*.cloudfront.net;
  connect-src 'self' https://api.marketplace.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
```

---

## 14.7 Protection CSRF

### 14.7.1 Strategie CSRF

```
+------------------------------------------------------+
|  Strategie de protection CSRF                        |
+------------------------------------------------------+
|                                                      |
|  1. SameSite Cookies (Strict ou Lax)                 |
|     -> Empeche l'envoi automatique cross-origin       |
|                                                      |
|  2. Custom Headers (X-Requested-With)                |
|     -> Les requetes cross-origin ne peuvent pas       |
|       definir de headers custom sans CORS            |
|                                                      |
|  3. CSRF Token (double submit cookie pattern)        |
|     -> Token genere cote serveur, inclus dans         |
|       le cookie ET le header de la requete           |
|                                                      |
|  4. Origin / Referer Header Validation               |
|     -> Verification cote serveur                      |
|                                                      |
+------------------------------------------------------+
```

### 14.7.2 Configuration des Cookies

```
Set-Cookie:
  refresh_token=<token>;
  HttpOnly;
  Secure;
  SameSite=Strict;
  Path=/auth/refresh;
  Max-Age=604800;
```

### 14.7.3 Interceptor CSRF cote Frontend

```javascript
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

api.interceptors.request.use((config) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken;
  }
  return config;
});
```

---

## 14.8 Protection des Formulaires

### 14.8.1 Rate Limiting Cote Client

```javascript
// src/lib/rateLimit.js
class RateLimiter {
  constructor(maxAttempts, windowMs) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.attempts = new Map();
  }

  isAllowed(key) {
    const now = Date.now();
    const record = this.attempts.get(key);

    if (!record || now - record.start > this.windowMs) {
      this.attempts.set(key, { count: 1, start: now });
      return true;
    }

    if (record.count >= this.maxAttempts) {
      return false;
    }

    record.count++;
    return true;
  }

  getRemainingTime(key) {
    const record = this.attempts.get(key);
    if (!record) return 0;
    const elapsed = Date.now() - record.start;
    return Math.max(0, this.windowMs - elapsed);
  }
}

export const loginLimiter = new RateLimiter(5, 15 * 60 * 1000);
export const passwordResetLimiter = new RateLimiter(3, 60 * 60 * 1000);
export const contactLimiter = new RateLimiter(10, 60 * 60 * 1000);
```

### 14.8.2 Honeypot Fields

```jsx
function HoneypotField({ onBotDetected }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      onBotDetected?.();
    }
  }, [value, onBotDetected]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-9999px',
        opacity: 0,
        height: 0,
        width: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        tabIndex: -1,
      }}
    >
      <label htmlFor="website">Website</label>
      <input
        id="website"
        name="website"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
      />
    </div>
  );
}
```

### 14.8.3 CAPTCHA (Cloudflare Turnstile)

```jsx
import { useEffect, useRef } from 'react';

function Turnstile({ siteKey, onVerify }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.onload = () => {
      window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => onVerify(token),
        theme: document.documentElement.getAttribute('data-theme')?.includes('dark')
          ? 'dark'
          : 'light',
      });
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [siteKey, onVerify]);

  return <div ref={containerRef} />;
}

function ContactForm() {
  const handleVerify = (token) => {
    // Token CAPTCHA a envoyer avec le formulaire
  };

  return (
    <form>
      <HoneypotField />
      <Input name="name" label="Nom" />
      <Input name="email" label="Email" type="email" />
      <Input name="message" label="Message" as="textarea" />
      <Turnstile
        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
        onVerify={handleVerify}
      />
      <Button type="submit">Envoyer</Button>
    </form>
  );
}
```

---

## 14.9 Stockage Securise

### 14.9.1 Matrice de Stockage

| Donnee | Stockage | Justification |
|---|---|---|
| Access Token | Memoire (state) | Non persistant, XSS limite |
| Refresh Token | Cookie httpOnly | Non accessible par JS |
| Donnees utilisateur (nom) | React Context | Reinitialise au refresh de page |
| Preferences (theme) | localStorage | Non sensible, persistant |
| Panier (invite) | localStorage | Non sensible |
| Donnees de session | Pas de stockage | gerees cote serveur |
| Secrets / API keys | Interdit | Jamais cote client |
| Donnees bancaires | Interdit | gerees par le processor de paiement |
| Historique de navigation | Pas de stockage | Vie privee |

### 14.9.2 Risques par Type de Stockage

| Type | Risque XSS | Risque CSRF | Persistance | Acces cross-tab |
|---|:---:|:---:|:---:|:---:|
| localStorage | Eleve | Non | Oui | Oui |
| sessionStorage | Eleve | Non | Non (onglet) | Non |
| Cookie standard | Moyen | Oui | Configurable | Oui |
| Cookie httpOnly | Faible | Oui | Configurable | Oui |
| Memory (state JS) | Faible | Non | Non | Non |
| IndexedDB | Eleve | Non | Oui | Oui |

### 14.9.3 Wrapper Securise pour localStorage

```javascript
// src/lib/storage.js
// UTILISER UNIQUEMENT POUR DES DONNEES NON SENSIBLES

const STORAGE_PREFIX = 'marketplace_';

export const safeStorage = {
  get(key) {
    try {
      const item = localStorage.getItem(STORAGE_PREFIX + key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (error) {
      console.warn('Storage error:', error);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (error) {
      console.warn('Storage error:', error);
    }
  },

  clear() {
    try {
      Object.keys(localStorage)
        .filter((key) => key.startsWith(STORAGE_PREFIX))
        .forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      console.warn('Storage error:', error);
    }
  },
};
```

---

## 14.10 Gestion des Sessions

### 14.10.1 Session Timeout

```javascript
// src/hooks/useSessionTimeout.js
import { useEffect, useRef } from 'react';
import { useAuth } from './useAuth';

const TIMEOUT_MS = 30 * 60 * 1000;
const WARNING_MS = 5 * 60 * 1000;

export function useSessionTimeout() {
  const { logout, isAuthenticated } = useAuth();
  const timeoutRef = useRef(null);
  const warningRef = useRef(null);

  const resetTimer = () => {
    clearTimeout(timeoutRef.current);
    clearTimeout(warningRef.current);

    warningRef.current = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('session-warning', {
        detail: { remainingTime: WARNING_MS }
      }));
    }, TIMEOUT_MS - WARNING_MS);

    timeoutRef.current = setTimeout(() => {
      logout('session_timeout');
    }, TIMEOUT_MS);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach((event) => document.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      events.forEach((event) => document.removeEventListener(event, resetTimer));
      clearTimeout(timeoutRef.current);
      clearTimeout(warningRef.current);
    };
  }, [isAuthenticated, logout]);
}
```

### 14.10.2 Gestion des Sessions Concurrentes

```
+------------------------------------------------------+
|  Politique de Sessions Concurrentes                   |
+------------------------------------------------------+
|                                                      |
|  Buyer : Maximum 5 sessions simultanees              |
|  Seller: Maximum 3 sessions simultanees              |
|  Admin : Maximum 2 sessions simultanees              |
|                                                      |
|  En cas de depassement :                             |
|  - La session la plus ancienne est revoquee          |
|  - Notification envoyee a l'utilisateur              |
|  - L'appareil est ajoute a la liste des devices     |
|                                                      |
+------------------------------------------------------+
```

---

## 14.11 Content Security Policy

### 14.11.1 CSP Detaille

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-a1b2c3d4e5' 'strict-dynamic';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https://*.amazonaws.com https://*.cloudfront.net https://images.unsplash.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.marketplace.com https://sentry.io;
  media-src 'self' blob:;
  object-src 'none';
  child-src 'none';
  frame-src 'none';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  manifest-src 'self';
  worker-src 'self' blob:;
  upgrade-insecure-requests;
```

### 14.11.2 Implementation avec Nonce

```javascript
// src/lib/csp.js
export function getCSPHeaders(nonce) {
  return {
    'Content-Security-Policy': [
      `default-src 'self'`,
      `script-src 'self' 'nonce-${nonce}'`,
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
      `img-src 'self' data: https://*.amazonaws.com`,
      `font-src 'self' https://fonts.gstatic.com`,
      `connect-src 'self' https://api.marketplace.com`,
      `frame-ancestors 'none'`,
      `base-uri 'self'`,
      `form-action 'self'`,
    ].join('; '),
  };
}
```

---

## 14.12 HTTPS Enforcement

### 14.12.1 Strategie HTTPS

| Environnement | HTTPS requis | HSTS |
|---|:---:|---|
| Production | Oui | `max-age=31536000; includeSubDomains` |
| Staging | Oui | `max-age=86400` |
| Development | Non (localhost) | N/A |

### 14.12.2 Redirection HTTP vers HTTPS

```nginx
# Nginx configuration
server {
    listen 80;
    server_name marketplace.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name marketplace.com;

    ssl_certificate /etc/ssl/marketplace.com.pem;
    ssl_certificate_key /etc/ssl/marketplace.com.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
}
```

---

## 14.13 Secrets Management

### 14.13.1 Regles Absolues

| Regle | Violation | Consequence |
|---|:---:|---|
| JAMAIS de cles API dans le code source | Critique | Compromission de l'application |
| JAMAIS de secrets dans localStorage | Critique | Accessible via XSS |
| JAMAIS de mots de passe en dur | Critique | Fuite de donnees |
| JAMAIS de tokens dans l'URL | Eleve | Visible dans les logs, historique |
| Utiliser des variables d'environnement VITE_ | Standard | Vite ne les expose que cote client |
| Prefixer les cles publiques avec VITE_ | Standard | Transparence sur ce qui est expose |

### 14.13.2 Variables d'Environnement

```bash
# .env (NE PAS COMMITTER - dans .gitignore)
VITE_API_BASE_URL=https://api.marketplace.com/v1
VITE_STRIPE_PUBLIC_KEY=pk_live_xxx
VITE_TURNSTILE_SITE_KEY=0x4AAAAXXX
VITE_SENTRY_DSN=https://xxx@sentry.io/xxx
VITE_APP_VERSION=1.0.0

# NE JAMAIS Mettre cote client :
# STRIPE_SECRET_KEY=sk_live_xxx
# DATABASE_URL=postgresql://...
# JWT_SECRET=xxx
# API_SECRET_KEY=xxx
```

### 14.13.3 Verification Automatique

```javascript
// src/lib/env.js
const DANGEROUS_KEYS = [
  'SECRET', 'PASSWORD', 'PRIVATE_KEY', 'DATABASE_URL',
  'SMTP_', 'AWS_SECRET', 'API_KEY',
];

Object.keys(import.meta.env).forEach((key) => {
  if (DANGEROUS_KEYS.some((danger) => key.toUpperCase().includes(danger))) {
    if (!key.startsWith('VITE_PUBLIC_')) {
      console.error(`[SECURITY] Variable potentiellement sensible detectee: ${key}`);
    }
  }
});
```

---

## 14.14 Input Sanitization

### 14.14.1 Strategie de Sanitization

```javascript
// src/lib/sanitize.js

export function sanitizeTextInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/data:/gi, '')
    .trim();
}

export function sanitizeURL(url) {
  if (typeof url !== 'string') return '';
  const trimmed = url.trim();
  const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
  try {
    const parsed = new URL(trimmed);
    if (allowedProtocols.includes(parsed.protocol)) {
      return parsed.href;
    }
  } catch {
    // URL invalide
  }
  return '';
}

export function sanitizeFilename(filename) {
  if (typeof filename !== 'string') return '';
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_{2,}/g, '_')
    .substring(0, 255);
}
```

### 14.14.2 Validation par Type d'Input

| Type d'Input | Validation | Sanitization |
|---|---|---|
| Email | Regex RFC 5322 + debounce | Trim, lowercase |
| Nom | Alpha + espaces, 1-100 chars | Trim, suppression HTML entities |
| URL | URL constructor + protocole allowlist | HTTPS uniquement |
| Nombre | Number() + isFinite() + range check | Parse strict |
| Fichier | Extension allowlist + MIME type + taille | Filename sanitization |
| HTML (rich text) | DOMPurify avec allowlist stricte | Tag/attribute stripping |
| Recherche | Longueur max, pas de chars speciaux | Trim, compression espaces |

---

## 14.15 Clickjacking Protection

### 14.15.1 X-Frame-Options

```
X-Frame-Options: DENY

# Ou si iframe cross-origin est necessaire (ex: Stripe)
X-Frame-Options: SAMEORIGIN
```

### 14.15.2 CSP frame-ancestors

```
frame-ancestors 'none';

# Si integration Stripe/PayPal necessaire :
frame-ancestors 'self' https://js.stripe.com https://www.paypal.com;
```

### 14.15.3 Implementation React

```jsx
// src/components/auth/FrameKiller.jsx
import { useEffect } from 'react';

export function FrameKiller() {
  useEffect(() => {
    if (window.self !== window.top) {
      window.top.location = window.self.location;
    }
  }, []);

  return null;
}
```

---

## 14.16 Checklist de Securite Frontend

| # | Categorie | Check | Priorite |
|---|---|---|:---:|
| 1 | JWT | Access token stocke en memoire uniquement | Critique |
| 2 | JWT | Refresh token dans cookie httpOnly + Secure + SameSite | Critique |
| 3 | JWT | Rotation des refresh tokens implementee | Critique |
| 4 | Routes | Toutes les routes sensibles protegees par auth guard | Critique |
| 5 | Routes | Verification cote client ET cote serveur | Critique |
| 6 | RBAC | Matrice de permissions documentee et testee | Eleve |
| 7 | Validation | Tous les formulaires valides (Zod) cote client | Eleve |
| 8 | Validation | Validation serveur pour toutes les mutations | Critique |
| 9 | XSS | Aucun `dangerouslySetInnerHTML` avec donnees user | Critique |
| 10 | XSS | DOMPurify pour le contenu HTML utilisateur | Eleve |
| 11 | XSS | CSP header configure avec nonce | Eleve |
| 12 | CSRF | SameSite=Strict sur cookies sensibles | Critique |
| 13 | CSRF | Custom header (X-Requested-With) sur API | Eleve |
| 14 | Formulaires | Honeypot fields sur formulaires publics | Moyen |
| 15 | Formulaires | CAPTCHA (Turnstile) sur actions critiques | Eleve |
| 16 | Formulaires | Rate limiting client implemente | Moyen |
| 17 | Stockage | Aucun secret dans localStorage | Critique |
| 18 | Stockage | Aucune cle API dans le code source | Critique |
| 19 | Sessions | Timeout de session configure (30 min) | Eleve |
| 20 | Sessions | Gestion des sessions concurrentes | Moyen |
| 21 | HTTPS | Redirection HTTP vers HTTPS | Critique |
| 22 | HTTPS | HSTS header configure | Eleve |
| 23 | Headers | X-Frame-Options: DENY | Eleve |
| 24 | Headers | X-Content-Type-Options: nosniff | Eleve |
| 25 | Headers | Referrer-Policy configure | Moyen |
| 26 | Headers | Permissions-Policy configure | Moyen |
| 27 | Secrets | Variables d'env prefixees VITE_ | Critique |
| 28 | Secrets | Aucun secret dans .env commite | Critique |
| 29 | Input | Tous les inputs sanitises | Eleve |
| 30 | Clickjacking | frame-ancestors 'none' dans CSP | Eleve |

---

---

# CHAPITRE 15 : Performance

## 15.1 Lazy Loading

### 15.1.1 Lazy Loading au Niveau des Routes

```jsx
// src/routes/index.jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/components/ui/PageLoader';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ProductListPage = lazy(() => import('@/pages/ProductListPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const CartPage = lazy(() => import('@/pages/CartPage'));
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const SellerDashboard = lazy(() => import('@/pages/seller/SellerDashboard'));
const SellerProducts = lazy(() => import('@/pages/seller/SellerProducts'));
const SellerOrders = lazy(() => import('@/pages/seller/SellerOrders'));
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const AdminUsers = lazy(() => import('@/pages/admin/AdminUsers'));

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/seller/*" element={<SellerDashboard />}>
          <Route path="products" element={<SellerProducts />} />
          <Route path="orders" element={<SellerOrders />} />
        </Route>
        <Route path="/admin/*" element={<AdminDashboard />}>
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
```

### 15.1.2 Lazy Loading de Composants Lourds

```jsx
const RichTextEditor = lazy(() => import('@/components/ui/RichTextEditor'));
const ImageUploader = lazy(() => import('@/components/ui/ImageUploader'));
const DataChart = lazy(() => import('@/components/ui/DataChart'));
const MapView = lazy(() => import('@/components/ui/MapView'));

function ProductEditForm() {
  return (
    <form>
      <Input name="title" label="Titre" />
      <Suspense fallback={<Skeleton className="h-40 w-full" />}>
        <RichTextEditor name="description" />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-32 w-full" />}>
        <ImageUploader maxFiles={10} />
      </Suspense>
    </form>
  );
}
```

### 15.1.3 Lazy Loading des Images

```jsx
// src/components/ui/LazyImage.jsx
import { useState, useRef, useEffect } from 'react';

export function LazyImage({
  src,
  alt,
  className,
  placeholder = 'data:image/svg+xml;base64,...',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
          aria-hidden="true"
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}
```

### 15.1.4 Strategie de Prechargement des Routes Adjacentes

```jsx
function ProductCard({ product }) {
  const prefetchProduct = () => {
    import('@/pages/ProductDetailPage');
  };

  return (
    <Link
      to={`/products/${product.id}`}
      onMouseEnter={prefetchProduct}
      onFocus={prefetchProduct}
    >
      {/* Product card content */}
    </Link>
  );
}
```

---

## 15.2 Code Splitting

### 15.2.1 Strategie de Chunks

| Chunk | Contenu | Priorite |
|---|---|:---:|
| `vendor-react` | React, ReactDOM, React DOM | Critique |
| `vendor-router` | React Router DOM | Critique |
| `vendor-ui` | DaisyUI, Tailwind | Eleve |
| `vendor-icons` | Lucide React | Moyen |
| `vendor-charts` | Chart.js / Recharts | Faible |
| `vendor-editor` | Rich text editor | Faible |
| `page-home` | Page d'accueil | Haute |
| `page-products` | Liste des produits | Haute |
| `page-product` | Detail produit | Haute |
| `page-cart` | Panier | Moyenne |
| `page-checkout` | Paiement | Moyenne |
| `page-seller` | Dashboard vendeur | Basse |
| `page-admin` | Dashboard admin | Basse |
| `shared-utils` | Fonctions utilitaires | Haute |

### 15.2.2 Configuration Vite (Rollup)

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-forms': ['react-hook-form', 'zod'],
          'vendor-utils': ['date-fns', 'clsx', 'tailwind-merge'],
          'vendor-charts': ['recharts'],
          'vendor-icons': ['lucide-react'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 250,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
```

### 15.2.3 Bundle Size Budget

| Categorie | Max Size (gzip) | Max Size (uncompressed) |
|---|:---:|:---:|
| Total JS (initial load) | 150 KB | 450 KB |
| Vendor React | 40 KB | 120 KB |
| Vendor Router | 15 KB | 45 KB |
| Vendor UI (Tailwind + DaisyUI) | 25 KB | 75 KB |
| Page chunks (chaque page) | 30 KB | 90 KB |
| CSS total | 30 KB | 90 KB |
| **Budget total par page** | **180 KB** | **540 KB** |

---

## 15.3 Memoization

### 15.3.1 Quand Utiliser Chaque Outil

| Outil | Usage | Quand l'utiliser |
|---|---|---|
| `React.memo` | Evite re-rendu si props inchangees | Composant pur avec props stables |
| `useMemo` | Memorise une valeur calculee | Calcul couteux, filtrage de liste, dependances |
| `useCallback` | Memorise une fonction | Fonction passee en prop a un composant memoise |
| `useRef` | Valeur persistante qui ne trigger pas de re-rendu | Timer, previous value, DOM node |

### 15.3.2 Examples d'Implementation

```jsx
// React.memo : Composant pur avec props stables
const ProductCard = React.memo(function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="text-primary font-bold">{product.price} EUR</p>
        <div className="card-actions justify-end">
          <button onClick={() => onAddToCart(product.id)} className="btn btn-primary btn-sm">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
});

// useMemo : Filtrage couteux
function ProductList({ products, filters, sortBy }) {
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (filters.category && p.category !== filters.category) return false;
        if (filters.priceMin && p.price < filters.priceMin) return false;
        if (filters.priceMax && p.price > filters.priceMax) return false;
        if (filters.inStock && p.stock === 0) return false;
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc': return a.price - b.price;
          case 'price-desc': return b.price - a.price;
          case 'rating': return b.rating - a.rating;
          case 'newest': return new Date(b.createdAt) - new Date(a.createdAt);
          default: return 0;
        }
      });
  }, [products, filters, sortBy]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// useCallback : Fonction stable pour composant memoise
function ProductListPage() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = useCallback((productId) => {
    setCart((prev) => [...prev, productId]);
  }, []);

  return <ProductList products={products} onAddToCart={handleAddToCart} />;
}
```

### 15.3.3 Anti-Patterns a Eviter

```jsx
// MAUVAIS : Creation d'objet inline dans les props
<div style={{ padding: '16px', margin: '8px' }}>

// BON : Styles via Tailwind classes
<div className="p-4 m-2">

// MAUVAIS : Fonction inline dans les props
<button onClick={() => console.log('clicked')}>

// BON : useCallback
const handleClick = useCallback(() => console.log('clicked'), []);
<button onClick={handleClick}>

// MAUVAIS : useMemo sur des valeurs simples
const name = useMemo(() => `${firstName} ${lastName}`, [firstName, lastName]);

// BON : Pas de memo pour les calculs simples
const name = `${firstName} ${lastName}`;
```

---

## 15.4 Optimisation des Images

### 15.4.1 Strategie de Formats

| Format | Usage | Savings vs JPEG |
|---|---|:---:|
| WebP | Format par defaut pour toutes les images | 25-35% |
| AVIF | Support progressif, meilleure compression | 50% |
| SVG | Icones, logos, illustrations vectorielles | N/A |
| JPEG | Fallback pour navigateurs anciens | Baseline |
| PNG | Transparence requise, screenshots | Pas de perte |

### 15.4.2 Responsive Images

```jsx
function ResponsiveImage({ src, alt, sizes, className }) {
  const generateSrcSet = (baseSrc) => {
    const widths = [320, 480, 640, 768, 1024, 1280, 1536];
    return widths
      .map((w) => `${baseSrc}?w=${w}&q=80&format=webp ${w}w`)
      .join(', ');
  };

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={generateSrcSet(src.replace(/\.w+$/, '.avif'))}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={generateSrcSet(src.replace(/\.w+$/, '.webp'))}
        sizes={sizes}
      />
      <img
        src={`${src}?w=800&q=80`}
        alt={alt}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

// Utilisation
<ResponsiveImage
  src="/images/products/chaussure-rouge.jpg"
  alt="Chaussure de sport rouge"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="w-full h-48 object-cover rounded-lg"
/>
```

### 15.4.3 Blur Placeholder

```jsx
function BlurPlaceholder({ width, height, color = '#e2e8f0' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={color} />
    </svg>
  );
}
```

### 15.4.4 CDN d'Images

```
const imageCDN = 'https://cdn.marketplace.com';

`${imageCDN}/images/products/${imageId}?w=400&h=300&fit=crop&q=80&format=webp`
`${imageCDN}/images/products/${imageId}?w=800&h=600&fit=crop&q=80&format=webp`
`${imageCDN}/images/products/${imageId}?w=1200&fit=max&q=85&format=webp`
```

---

## 15.5 Optimisation des Composants

### 15.5.1 Virtualisation des Listes

```jsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualizedProductList({ products }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: products.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 280,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="h-[600px] overflow-auto">
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <ProductCard product={products[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 15.5.2 Eviter les Re-Renders Inutiles

```jsx
// Strategie 1 : Selecteurs granulaires avec React Query
function ProductPage({ id }) {
  const { data: product } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });

  return <ProductDetails product={product} />;
}

// Strategie 2 : Separer les composants avec state local
function ProductPage({ id }) {
  return (
    <div>
      <ProductHeader id={id} />
      <ProductImages id={id} />
      <ProductInfo id={id} />
      <ProductReviews id={id} />
    </div>
  );
}

// Strategie 3 : Context splitting
// MAUVAIS : Un seul context trop gros
const AppContext = createContext();

// BON : Contexts separes par domaine
const AuthContext = createContext();
const CartContext = createContext();
const ThemeContext = createContext();
const NotificationContext = createContext();
```

---

## 15.6 Optimisation du Rendu

### 15.6.1 Strategie de `key`

```jsx
// BON : key stable et unique (ID de la donnee)
products.map((product) => (
  <ProductCard key={product.id} product={product} />
));

// MAUVAIS : key basee sur l'index
products.map((product, index) => (
  <ProductCard key={index} product={product} />
));

// MAUVAIS : key aleatoire ou generee a chaque render
products.map((product) => (
  <ProductCard key={Math.random()} product={product} />
));
```

### 15.6.2 Eviter les Fonctions Inline

```jsx
// MAUVAIS
<div onClick={() => handleDelete(item.id)}>
<button className={isActive ? 'btn-primary' : 'btn-ghost'}>

// BON
const handleItemClick = useCallback(() => handleDelete(item.id), [item.id, handleDelete]);
<div onClick={handleItemClick}>
<button className={cn('btn', isActive ? 'btn-primary' : 'btn-ghost')}>
```

### 15.6.3 References Stables

```jsx
// Objet de configuration stable
const PRODUCT_TABLE_COLUMNS = useMemo(() => [
  { key: 'title', label: 'Produit', sortable: true },
  { key: 'price', label: 'Prix', sortable: true },
  { key: 'stock', label: 'Stock', sortable: true },
], []);

// Options de select stables
const CURRENCY_OPTIONS = useMemo(() => [
  { value: 'EUR', label: 'Euro (EUR)' },
  { value: 'USD', label: 'Dollar ($)' },
  { value: 'GBP', label: 'Livre (L)' },
], []);
```

---

## 15.7 Bundle Analysis

### 15.7.1 Commandes d'Analyse

```bash
npm run build -- --mode analyze
```

```javascript
// Configuration dans vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  visualizer({
    open: true,
    filename: 'bundle-analysis.html',
    gzipSize: true,
    brotliSize: true,
  }),
]
```

### 15.7.2 Tree Shaking

```javascript
// MAUVAIS : Import complet (augmente le bundle)
import _ from 'lodash';
import moment from 'moment';

// BON : Import specifique (tree-shakable)
import debounce from 'lodash/debounce';
import { format, parseISO } from 'date-fns';

// MAUVAIS : Import de composant entier
import { Button, Input, Select, Card, Modal } from '@/components/ui';

// BON : Imports directs
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
```

### 15.7.3 Checklist Bundle

| # | Check | Status |
|---|---|:---:|
| 1 | Bundle total < 150 KB gzip | O |
| 2 | Aucune librairie inutilisee dans le bundle | O |
| 3 | Tree shaking actif (imports specifiques) | O |
| 4 | Code splitting au niveau des routes | O |
| 5 | Code splitting au niveau des composants lourds | O |
| 6 | Console.log supprimes en production | O |
| 7 | Source maps generees (pour debug staging) | O |
| 8 | Compression Brotli/Gzip activee cote serveur | O |
| 9 | Pas de doublons dans les chunks | O |
| 10 | Vendor chunks separes et stables | O |

---

## 15.8 Caching

### 15.8.1 Cache Headers HTTP

```
# Assets statiques (hash dans le nom de fichier)
/assets/js/vendor-react-abc123.js
Cache-Control: public, max-age=31536000, immutable

# Images
/images/*
Cache-Control: public, max-age=2592000, stale-while-revalidate=86400

# API responses
/api/products
Cache-Control: private, max-age=300, stale-while-revalidate=60

# API (donnees utilisateur)
/api/user/profile
Cache-Control: no-store, no-cache, must-revalidate

# HTML (index.html - pour le SPA)
/
Cache-Control: no-cache
```

### 15.8.2 React Query Configuration

```javascript
// src/providers/QueryProvider.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      retry: 1,
    },
  },
});

queryClient.setQueryDefaults(['products'], { staleTime: 10 * 60 * 1000 });
queryClient.setQueryDefaults(['cart'], { staleTime: 30 * 1000 });
queryClient.setQueryDefaults(['user'], { staleTime: 2 * 60 * 1000 });
```

### 15.8.3 Service Worker Caching

```javascript
// sw.js - Strategie de cache
const CACHE_VERSION = 'v1';
const STATIC_CACHE = `marketplace-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `marketplace-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `marketplace-images-${CACHE_VERSION}`;

const APP_SHELL = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/vendor-react.js',
  '/assets/js/vendor-router.js',
  '/assets/js/app.js',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE && key !== IMAGE_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Images : Cache First
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // API : Network First avec fallback cache
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Assets : Stale While Revalidate
  event.respondWith(
    caches.open(STATIC_CACHE).then((cache) =>
      cache.match(request).then((cached) => {
        const fetchPromise = fetch(request).then((response) => {
          cache.put(request, response.clone());
          return response;
        });
        return cached || fetchPromise;
      })
    )
  );
});
```

---

## 15.9 Prechargement

### 15.9.1 Balises Link de Prechargement

```html
<!-- index.html -->

<!-- DNS Prefetch pour les domaines externes -->
<link rel="dns-prefetch" href="https://api.marketplace.com" />
<link rel="dns-prefetch" href="https://cdn.marketplace.com" />
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://fonts.gstatic.com" />

<!-- Preconnect (DNS + TLS + connexion) -->
<link rel="preconnect" href="https://api.marketplace.com" crossorigin />
<link rel="preconnect" href="https://cdn.marketplace.com" crossorigin />

<!-- Preload des assets critiques -->
<link rel="preload" href="/assets/css/main.css" as="style" />
<link rel="preload" href="/assets/js/vendor-react.js" as="script" />
<link rel="preload" href="/assets/js/vendor-router.js" as="script" />
<link rel="preload" href="/assets/js/app.js" as="script" />
<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossorigin />

<!-- Prefetch des routes proches -->
<link rel="prefetch" href="/assets/js/page-products.js" as="script" />
<link rel="prefetch" href="/assets/js/page-product.js" as="script" />

<!-- Preload de l'image hero (LCP candidate) -->
<link rel="preload" href="/images/hero-banner.webp" as="image" type="image/webp" />
```

### 15.9.2 Prechargement Intelligent

```jsx
function ProductListPage() {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (products.length > 0) {
      products.slice(0, 4).forEach((product) => {
        queryClient.prefetchQuery({
          queryKey: ['product', product.id],
          queryFn: () => fetchProduct(product.id),
          staleTime: 10 * 60 * 1000,
        });
      });
    }
  }, [products, queryClient]);

  return <ProductGrid products={products} />;
}
```

---

## 15.10 Core Web Vitals

### 15.10.1 Cibles par Metrique

| Metrique | Cible Bonne | Cible A Ameliorer | Cible Mauvaise |
|---|:---:|:---:|:---:|
| **LCP** (Largest Contentful Paint) | <= 2.5 s | 2.5 - 4.0 s | > 4.0 s |
| **FID** (First Input Delay) | <= 100 ms | 100 - 300 ms | > 300 ms |
| **INP** (Interaction to Next Paint) | <= 200 ms | 200 - 500 ms | > 500 ms |
| **CLS** (Cumulative Layout Shift) | <= 0.1 | 0.1 - 0.25 | > 0.25 |
| **TTFB** (Time to First Byte) | <= 800 ms | 800 - 1800 ms | > 1800 ms |
| **FCP** (First Contentful Paint) | <= 1.8 s | 1.8 - 3.0 s | > 3.0 s |
| **TBT** (Total Blocking Time) | <= 200 ms | 200 - 600 ms | > 600 ms |

### 15.10.2 Mesure des Core Web Vitals

```javascript
// src/lib/webVitals.js
import { onLCP, onFID, onCLS, onINP, onTTFB, onFCP } from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType,
    entries: metric.entries,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics/vitals', body);
  } else {
    fetch('/api/analytics/vitals', { body, method: 'POST', keepalive: true });
  }
}

onLCP(sendToAnalytics);
onFID(sendToAnalytics);
onCLS(sendToAnalytics);
onINP(sendToAnalytics);
onTTFB(sendToAnalytics);
onFCP(sendToAnalytics);
```

---

## 15.11 Service Workers (PWA)

### 15.11.1 Manifest PWA

```json
{
  "name": "Marketplace - E-Commerce Mondial",
  "short_name": "Marketplace",
  "description": "La place de marche en ligne pour tous",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#3B82F6",
  "orientation": "portrait-primary",
  "scope": "/",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

### 15.11.2 Offline Support

```javascript
// Pages accessibles hors-ligne
const OFFLINE_PAGES = [
  '/',
  '/products',
  '/cart',
  '/offline',
];

// Contenu du cache offline
const OFFLINE_CACHE = 'marketplace-offline-v1';
```

---

## 15.12 CDN Strategy

### 15.12.1 Architecture CDN

```
Utilisateur
    |
    v
CDN Edge (CloudFront / Cloudflare)
    |
    +-- Static Assets (JS, CSS, Images) -> Cache HIT -> Retour immediat
    |
    +-- API Requests -> Origin Server (API Gateway)
    |
    +-- Image Transforms -> Image CDN (imgix / Cloudinary)
```

### 15.12.2 Configuration CDN

```
# CloudFront Distribution
Origin: marketplace-origin.s3.amazonaws.com
Default TTL: 86400 (24h)
Max TTL: 31536000 (1 an)
Min TTL: 0

# Cache Policy par type de contenu
Static Assets (JS/CSS):     max-age=31536000, immutable
Images:                     max-age=2592000, stale-while-revalidate=86400
HTML:                       no-cache, must-revalidate
API:                        private, no-cache
```

### 15.12.3 Checklist Performance

| # | Check | Cible | Status |
|---|---|---|:---:|
| 1 | LCP | <= 2.5s | O |
| 2 | CLS | <= 0.1 | O |
| 3 | INP | <= 200ms | O |
| 4 | FCP | <= 1.8s | O |
| 5 | TTFB | <= 800ms | O |
| 6 | Bundle JS total | <= 150 KB gzip | O |
| 7 | Bundle CSS total | <= 30 KB gzip | O |
| 8 | Images optimisees (WebP/AVIF) | 100% | O |
| 9 | Lazy loading images | Active | O |
| 10 | Lazy loading routes | Active | O |
| 11 | Code splitting | Configure | O |
| 12 | Tree shaking | Actif | O |
| 13 | Cache headers HTTP | Configures | O |
| 14 | Service Worker | Installe | O |
| 15 | Preloading ressources critiques | Fait | O |
| 16 | Compression Brotli/Gzip | Activee | O |
| 17 | CDN active | Oui | O |
| 18 | PWA configure | Oui | O |
| 19 | Core Web Vitals mesures | En production | O |
| 20 | Pas de layout shift visible | Verifie | O |

---

---

# CHAPITRE 16 : Tests

## 16.1 Strategie de Test (Testing Pyramid)

### 16.1.1 Pyramide de Tests

```
                    +-----------+
                    |   E2E     |  5% (~20 tests)
                    |           |  Tests bout-en-bout
                   +-----------+
                  | Integration |  15% (~80 tests)
                  |             |  Tests d'integration API/UI
                 +---------------+
                |   Fonctionnels  |  30% (~200 tests)
                |                 |  Tests de flux utilisateur
               +-------------------+
              |     Unitaires      |  50% (~500 tests)
              |                    |  Tests de composants, hooks,
              |                    |  utilitaires, services
              +--------------------+
```

### 16.1.2 Repartition des Tests par Couche

| Couche | Type de Test | Quantite | Temps max par test | Couverture cible |
|---|---|:---:|:---:|:---:|
| Utilitaires | Tests unitaires | 150 | 5ms | 95% |
| Hooks custom | Tests unitaires | 80 | 10ms | 90% |
| Composants UI | Tests unitaires | 200 | 50ms | 85% |
| Composants metier | Tests unitaires | 70 | 50ms | 80% |
| Services / API | Tests unitaires | 50 | 20ms | 90% |
| Flux utilisateur | Tests fonctionnels | 100 | 200ms | 85% |
| Formulaires | Tests fonctionnels | 60 | 100ms | 90% |
| Navigation | Tests fonctionnels | 40 | 100ms | 80% |
| Integration API | Tests d'integration | 40 | 500ms | 75% |
| State management | Tests d'integration | 25 | 200ms | 80% |
| Routes | Tests d'integration | 15 | 300ms | 70% |
| Accessibilite | Tests speciaux | 30 | 100ms | 90% |
| E2E critiques | Tests E2E | 20 | 30s | Flux critiques |
| **Total** | | **~880** | | **85% global** |

### 16.1.3 Outil de Test par Couche

| Couche | Outil | Configuration |
|---|---|---|
| Tests unitaires | Vitest | `vitest.config.js` |
| Composants React | React Testing Library | Integre dans Vitest |
| Tests fonctionnels | React Testing Library + MSW | Mock API |
| Tests E2E | Playwright | `playwright.config.js` |
| Accessibilite | jest-axe / axe-core | Integre dans RTL |
| Visual regression | Storybook + Chromatic | `storybook` |
| Performance | Lighthouse CI | `lighthouserc.js` |

---

## 16.2 Tests Unitaires (Vitest + React Testing Library)

### 16.2.1 Convention de Nommage des Fichiers de Test

```
src/
+-- components/
|   +-- ui/
|   |   +-- Button.jsx
|   |   +-- Button.test.jsx          # Test co-localise
|   +-- marketplace/
|       +-- ProductCard.jsx
|       +-- ProductCard.test.jsx
+-- hooks/
|   +-- useDebounce.js
|   +-- useDebounce.test.jsx
+-- lib/
|   +-- utils.js
|   +-- utils.test.js
|   +-- sanitize.js
|   +-- sanitize.test.js
|   +-- validations/
|       +-- auth.js
|       +-- auth.test.js
+-- services/
|   +-- api.js
|   +-- api.test.js
```

**Regles de nommage :**
- Fichier de test : `*.test.jsx` ou `*.test.js` (co-localise avec le source)
- Fichier de test isole : `*.spec.jsx` (pour les tests qui testent plusieur fichiers)
- Dossier de fixtures : `__fixtures__/` ou `fixtures/` au meme niveau
- Dossier de mocks : `__mocks__/` pour les mocks automatiques Vitest

### 16.2.2 Configuration Vitest

```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: ['node_modules', 'dist', '.storybook'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/test/**',
        'src/**/*.test.*',
        'src/**/*.spec.*',
        'src/**/*.stories.*',
        'src/main.jsx',
        'src/vite-env.d.ts',
      ],
      thresholds: {
        statements: 85,
        branches: 80,
        functions: 85,
        lines: 85,
      },
    },
    reporters: ['default', 'verbose'],
    testTimeout: 10000,
    hookTimeout: 10000,
  },
});
```

### 16.2.3 Setup de Test

```javascript
// src/test/setup.js
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, afterAll } from 'vitest';
import { server } from './mocks/server';

// Demarrer le serveur MSW avant tous les tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Reinitialiser les handlers apres chaque test
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

// Arreter le serveur apres tous les tests
afterAll(() => server.close());

// Mock de matchMedia (necessaire pour les tests de themes)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock de IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock de ResizeObserver
class MockResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver,
});

// Mock de scrollTo
window.scrollTo = () => {};

// Supprimer les warnings de console pendant les tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
```

### 16.2.4 Tests de Composants

```jsx
// src/components/ui/Button/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('rend le texte enfants correctement', () => {
    render(<Button>Ajouter au panier</Button>);
    expect(screen.getByRole('button', { name: /ajouter au panier/i })).toBeInTheDocument();
  });

  it('applique la variante primaire par defaut', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn-primary');
  });

  it('applique la variante secondaire', () => {
    render(<Button variant="secondary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
  });

  it('applique les differentes tailles', () => {
    const { rerender } = render(<Button size="sm">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-sm');

    rerender(<Button size="lg">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-lg');
  });

  it('appele onClick quand clique', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test</Button>);

    await fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('est desactive quand disabled', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('affiche le spinner quand loading', () => {
    render(<Button loading>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('loading');
  });

  it('rend un element link quand href est fourni', () => {
    render(<Button href="/products">Voir produits</Button>);
    expect(screen.getByRole('link', { name: /voir produits/i })).toHaveAttribute(
      'href',
      '/products'
    );
  });
});
```

### 16.2.5 Tests de Hooks

```jsx
// src/hooks/useDebounce.test.jsx
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('retourne la valeur initiale immediatement', () => {
    const { result } = renderHook(() => useDebounce('hello', 500));
    expect(result.current).toBe('hello');
  });

  it('debounce les changements de valeur', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'hello', delay: 500 } }
    );

    rerender({ value: 'world', delay: 500 });
    expect(result.current).toBe('hello');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('world');
  });

  it('reset le timer si la valeur change avant le delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'a', delay: 500 } }
    );

    rerender({ value: 'b', delay: 500 });
    act(() => { vi.advanceTimersByTime(300); });

    rerender({ value: 'c', delay: 500 });
    act(() => { vi.advanceTimersByTime(300); });

    expect(result.current).toBe('a');

    act(() => { vi.advanceTimersByTime(200); });
    expect(result.current).toBe('c');
  });
});
```

### 16.2.6 Tests de Fonctions Utilitaires

```javascript
// src/lib/utils.test.js
import { describe, it, expect } from 'vitest';
import { cn, formatPrice, slugify, truncate } from './utils';

describe('cn', () => {
  it('fusionne les classes correctement', () => {
    expect(cn('p-4', 'm-2')).toBe('p-4 m-2');
  });

  it('resout les conflits de Tailwind', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('gere les valeurs falsy', () => {
    expect(cn('p-4', null, undefined, false, '')).toBe('p-4');
  });
});

describe('formatPrice', () => {
  it('formate un prix en EUR par defaut', () => {
    expect(formatPrice(29.99)).toBe('29,99 EUR');
  });

  it('formate un prix en USD', () => {
    expect(formatPrice(29.99, 'USD')).toBe('$29.99');
  });

  it('gere les prix de zero', () => {
    expect(formatPrice(0)).toBe('0,00 EUR');
  });

  it('gere les grands prix', () => {
    expect(formatPrice(999999.99)).toBe('999 999,99 EUR');
  });
});

describe('slugify', () => {
  it('convertit en slug', () => {
    expect(slugify('Chaussure de sport')).toBe('chaussure-de-sport');
  });

  it('gere les accents', () => {
    expect(slugify('Cafe avec accent')).toBe('cafe-avec-accent');
  });

  it('supprime les caracteres speciaux', () => {
    expect(slugify('Hello! @World#')).toBe('hello-world');
  });
});

describe('truncate', () => {
  it('tronque le texte a la longueur specifiee', () => {
    expect(truncate('Ceci est un texte tres long', 10)).toBe('Ceci est u...');
  });

  it('ne tronque pas si le texte est plus court', () => {
    expect(truncate('Court', 10)).toBe('Court');
  });
});
```

### 16.2.7 Tests de Services

```javascript
// src/services/products.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { productsService } from './products';
import api from '@/lib/axios';

vi.mock('@/lib/axios');

describe('productsService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getProducts', () => {
    it('recupere la liste des produits', async () => {
      const mockProducts = [
        { id: '1', title: 'Produit 1', price: 29.99 },
        { id: '2', title: 'Produit 2', price: 49.99 },
      ];

      api.get.mockResolvedValueOnce({ data: { items: mockProducts, total: 2 } });

      const result = await productsService.getProducts({ page: 1, limit: 20 });

      expect(api.get).toHaveBeenCalledWith('/products', { params: { page: 1, limit: 20 } });
      expect(result.items).toEqual(mockProducts);
      expect(result.total).toBe(2);
    });

    it('gere les erreurs de reseau', async () => {
      api.get.mockRejectedValueOnce(new Error('Network Error'));

      await expect(productsService.getProducts({})).rejects.toThrow('Network Error');
    });
  });

  describe('getProduct', () => {
    it('recupere un produit par ID', async () => {
      const mockProduct = { id: '1', title: 'Produit 1', price: 29.99 };
      api.get.mockResolvedValueOnce({ data: mockProduct });

      const result = await productsService.getProduct('1');

      expect(api.get).toHaveBeenCalledWith('/products/1');
      expect(result).toEqual(mockProduct);
    });
  });

  describe('createProduct', () => {
    it('cree un nouveau produit', async () => {
      const newProduct = { title: 'Nouveau', price: 19.99, stock: 10 };
      const createdProduct = { ...newProduct, id: '3' };
      api.post.mockResolvedValueOnce({ data: createdProduct });

      const result = await productsService.createProduct(newProduct);

      expect(api.post).toHaveBeenCalledWith('/products', newProduct);
      expect(result.id).toBe('3');
    });
  });
});
```

---

## 16.3 Tests Fonctionnels

### 16.3.1 Tests de Flux Utilisateur

```jsx
// src/features/checkout/checkout-flow.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from '@/App';

function renderWithProviders(ui, options = {}) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={options.initialEntries || ['/']}>
        {ui}
      </MemoryRouter>
    </QueryClientProvider>,
    options
  );
}

describe('Flux de checkout', () => {
  it('permet d\'ajouter un produit au panier et de payer', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />, { initialEntries: ['/products'] });

    // 1. Naviguer vers la page produit
    await user.click(screen.getByText(/chaussure de sport/i));

    // 2. Ajouter au panier
    await user.click(screen.getByRole('button', { name: /ajouter au panier/i }));
    await waitFor(() => {
      expect(screen.getByText(/1 article/i)).toBeInTheDocument();
    });

    // 3. Aller au panier
    await user.click(screen.getByTestId('cart-icon'));

    // 4. Verifier le produit dans le panier
    expect(screen.getByText(/chaussure de sport/i)).toBeInTheDocument();
    expect(screen.getByText('29,99 EUR')).toBeInTheDocument();

    // 5. Passer au checkout
    await user.click(screen.getByRole('button', { name: /passer la commande/i }));

    // 6. Remplir les infos de livraison
    await user.type(screen.getByLabelText(/adresse/i), '123 Rue Test');
    await user.type(screen.getByLabelText(/ville/i), 'Paris');
    await user.type(screen.getByLabelText(/code postal/i), '75001');

    // 7. Continuer vers le paiement
    await user.click(screen.getByRole('button', { name: /continuer/i }));

    // 8. Verifier la confirmation
    await waitFor(() => {
      expect(screen.getByText(/commande confirmee/i)).toBeInTheDocument();
    });
  });
});
```

### 16.3.2 Tests de Validation de Formulaires

```jsx
// src/features/auth/register-form.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm', () => {
  it('affiche les erreurs de validation pour un formulaire vide', async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);

    await user.click(screen.getByRole('button', { name: /creer mon compte/i }));

    await waitFor(() => {
      expect(screen.getByText(/le prenom est requis/i)).toBeInTheDocument();
      expect(screen.getByText(/le nom est requis/i)).toBeInTheDocument();
      expect(screen.getByText(/l'email est requis/i)).toBeInTheDocument();
      expect(screen.getByText(/le mot de passe est requis/i)).toBeInTheDocument();
    });
  });

  it('valide le format email', async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);

    await user.type(screen.getByLabelText(/email/i), 'email-invalide');
    await user.click(screen.getByRole('button', { name: /creer mon compte/i }));

    await waitFor(() => {
      expect(screen.getByText(/format d'email invalide/i)).toBeInTheDocument();
    });
  });

  it('valide la force du mot de passe', async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);

    await user.type(screen.getByLabelText(/mot de passe/i), '123');
    await user.click(screen.getByRole('button', { name: /creer mon compte/i }));

    await waitFor(() => {
      expect(screen.getByText(/minimum 8 caracteres/i)).toBeInTheDocument();
    });
  });

  it('valide la correspondance des mots de passe', async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);

    await user.type(screen.getByLabelText(/mot de passe/i), 'MotDePasse123!');
    await user.type(screen.getByLabelText(/confirmer/i), 'MotDePasse456!');
    await user.click(screen.getByRole('button', { name: /creer mon compte/i }));

    await waitFor(() => {
      expect(screen.getByText(/les mots de passe ne correspondent pas/i)).toBeInTheDocument();
    });
  });

  it('soumet le formulaire avec des donnees valides', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<RegisterForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/prenom/i), 'Jean');
    await user.type(screen.getByLabelText(/nom/i), 'Dupont');
    await user.type(screen.getByLabelText(/email/i), 'jean@example.com');
    await user.type(screen.getByLabelText(/mot de passe/i), 'MotDePasse123!');
    await user.type(screen.getByLabelText(/confirmer/i), 'MotDePasse123!');
    await user.click(screen.getByLabelText(/conditions/i));
    await user.click(screen.getByRole('button', { name: /creer mon compte/i }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jean@example.com',
        password: 'MotDePasse123!',
        confirmPassword: 'MotDePasse123!',
        role: 'buyer',
        terms: true,
      });
    });
  });
});
```

### 16.3.3 Tests de Navigation

```jsx
// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

describe('Navigation', () => {
  it('affiche la page d\'accueil par defaut', () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByRole('heading', { name: /bienvenue/i })).toBeInTheDocument();
  });

  it('navigue vers la page produits', async () => {
    const user = userEvent.setup();
    render(<App />, { wrapper: MemoryRouter });

    await user.click(screen.getByRole('link', { name: /produits/i }));
    expect(screen.getByRole('heading', { name: /nos produits/i })).toBeInTheDocument();
  });

  it('navigue vers la page de connexion', async () => {
    const user = userEvent.setup();
    render(<App />, { wrapper: MemoryRouter });

    await user.click(screen.getByRole('link', { name: /connexion/i }));
    expect(screen.getByRole('heading', { name: /se connecter/i })).toBeInTheDocument();
  });

  it('redirige vers login pour les routes protegees', async () => {
    render(<App />, {
      wrapper: MemoryRouter,
      initialEntries: ['/dashboard'],
    });

    expect(screen.getByRole('heading', { name: /se connecter/i })).toBeInTheDocument();
  });
});
```

---

## 16.4 Tests d'Integration

### 16.4.1 Tests d'Integration API (avec MSW)

```jsx
// src/features/products/product-list.integration.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { server } from '@/test/mocks/server';
import { ProductList } from './ProductList';

function renderWithQuery(ui) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

describe('ProductList Integration', () => {
  it('charge et affiche les produits depuis l\'API', async () => {
    renderWithQuery(<ProductList />);

    expect(screen.getByText(/chargement/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/chargement/i)).not.toBeInTheDocument();
    });

    expect(screen.getAllByRole('article')).toHaveLength(12);
  });

  it('affiche un message d\'erreur si l\'API echoue', async () => {
    server.use(
      http.get('/api/products', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    renderWithQuery(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText(/erreur/i)).toBeInTheDocument();
    });
  });

  it('filtre les produits par categorie', async () => {
    const user = (await import('@testing-library/userEvent')).default.setup();
    renderWithQuery(<ProductList />);

    await waitFor(() => {
      expect(screen.getAllByRole('article')).toHaveLength(12);
    });

    await user.selectOptions(
      screen.getByLabelText(/categorie/i),
      'electronique'
    );

    await waitFor(() => {
      expect(screen.getAllByRole('article')).toHaveLength(6);
    });
  });
});
```

### 16.4.2 Tests de State Management

```jsx
// src/features/cart/cart-context.test.jsx
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CartProvider, useCart } from './cart-context';

function renderCartHook() {
  return renderHook(() => useCart(), { wrapper: CartProvider });
}

describe('CartContext', () => {
  it('ajoute un produit au panier', () => {
    const { result } = renderCartHook();

    act(() => {
      result.current.addToCart({ id: '1', title: 'Produit 1', price: 29.99, quantity: 1 });
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.total).toBe(29.99);
  });

  it('incremente la quantite si le produit est deja dans le panier', () => {
    const { result } = renderCartHook();

    act(() => {
      result.current.addToCart({ id: '1', title: 'Produit 1', price: 29.99, quantity: 1 });
      result.current.addToCart({ id: '1', title: 'Produit 1', price: 29.99, quantity: 1 });
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(2);
    expect(result.current.total).toBe(59.98);
  });

  it('supprime un produit du panier', () => {
    const { result } = renderCartHook();

    act(() => {
      result.current.addToCart({ id: '1', title: 'Produit 1', price: 29.99, quantity: 1 });
      result.current.addToCart({ id: '2', title: 'Produit 2', price: 49.99, quantity: 1 });
    });

    act(() => {
      result.current.removeFromCart('1');
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.total).toBe(49.99);
  });

  it('vide le panier', () => {
    const { result } = renderCartHook();

    act(() => {
      result.current.addToCart({ id: '1', title: 'Produit 1', price: 29.99, quantity: 1 });
      result.current.addToCart({ id: '2', title: 'Produit 2', price: 49.99, quantity: 1 });
    });

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.total).toBe(0);
  });

  it('calcule le nombre total d\'articles', () => {
    const { result } = renderCartHook();

    act(() => {
      result.current.addToCart({ id: '1', title: 'Produit 1', price: 29.99, quantity: 2 });
      result.current.addToCart({ id: '2', title: 'Produit 2', price: 49.99, quantity: 3 });
    });

    expect(result.current.itemCount).toBe(5);
  });
});
```

### 16.4.3 Tests de Routes

```jsx
// src/routes/routes.integration.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './index';
import { AuthProvider } from '@/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function renderWithProviders(entries) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MemoryRouter initialEntries={entries}>
          <AppRoutes />
        </MemoryRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

describe('AppRoutes', () => {
  it('affiche la page d\'accueil a /', () => {
    renderWithProviders(['/']);
    expect(screen.getByRole('heading', { name: /bienvenue/i })).toBeInTheDocument();
  });

  it('affiche la page produits a /products', () => {
    renderWithProviders(['/products']);
    expect(screen.getByRole('heading', { name: /nos produits/i })).toBeInTheDocument();
  });

  it('affiche 404 pour les routes inconnues', () => {
    renderWithProviders(['/route-inconnue']);
    expect(screen.getByRole('heading', { name: /page non trouvee/i })).toBeInTheDocument();
  });

  it('redirige vers /unauthorized pour les routes admin sans role', () => {
    renderWithProviders(['/admin/users']);
    expect(screen.getByRole('heading', { name: /non autorise/i })).toBeInTheDocument();
  });
});
```

---

## 16.5 Tests UI (Storybook, Visual Regression)

### 16.5.1 Configuration Storybook

```javascript
// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
```

### 16.5.2 Exemple de Story

```jsx
// src/components/ui/Button/Button.stories.jsx
import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'link', 'outline'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Small = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Loading = {
  args: {
    children: 'Chargement',
    loading: true,
  },
};

export const Disabled = {
  args: {
    children: 'Desactive',
    disabled: true,
  },
};

export const WithIcon = {
  args: {
    children: 'Ajouter',
    icon: 'Plus',
    iconPosition: 'left',
  },
};
```

### 16.5.3 Visual Regression Testing

```bash
# Capture des snapshots visuels
npx storybook dev --ci
npx chromatic --project-token=<token>

# Ou avec Percy
npx percy storybook
```

---

## 16.6 Tests Responsive (Multi-Viewport)

```jsx
// src/components/ui/ProductGrid/ProductGrid.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductGrid } from './ProductGrid';

// Simulation de differentes tailles d'ecran
const viewports = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
  ultrawide: { width: 1920, height: 1080 },
};

describe('ProductGrid Responsive', () => {
  Object.entries(viewports).forEach(([name, { width, height }]) => {
    it(`affiche la grille correctement sur ${name} (${width}x${height})`, () => {
      // Simuler la taille de la fenetre
      vi.stubGlobal('innerWidth', width);
      vi.stubGlobal('innerHeight', height);
      window.dispatchEvent(new Event('resize'));

      const products = Array.from({ length: 12 }, (_, i) => ({
        id: `${i}`,
        title: `Produit ${i}`,
        price: 29.99,
        image: `/images/product-${i}.jpg`,
      }));

      render(<ProductGrid products={products} />);

      const grid = screen.getByTestId('product-grid');

      // Verifier le nombre de colonnes selon le viewport
      if (width < 640) {
        expect(grid).toHaveClass('grid-cols-1');
      } else if (width < 1024) {
        expect(grid).toHaveClass('grid-cols-2');
      } else if (width < 1280) {
        expect(grid).toHaveClass('grid-cols-3');
      } else {
        expect(grid).toHaveClass('grid-cols-4');
      }
    });
  });
});
```

---

## 16.7 Tests d'Accessibilite (axe-core)

```jsx
// src/components/accessibility/a11y.test.jsx
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';
import { App } from '@/App';

expect.extend(toHaveNoViolations);

describe('Accessibilite', () => {
  it('la page d\'accueil n\'a pas de violations d\'accessibilite', async () => {
    const { container } = render(<App />, { wrapper: MemoryRouter });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('le formulaire de login est accessible', async () => {
    const { container } = render(<LoginPage />, { wrapper: MemoryRouter });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('la page produits est accessible', async () => {
    const { container } = render(<ProductListPage />, { wrapper: MemoryRouter });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

// Test d'accessibilite d'un composant specifique
describe('Button Accessibility', () => {
  it('a un label accessible', async () => {
    const { container } = render(
      <button aria-label="Fermer le panier">X</button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('a un contraste de couleur suffisant', async () => {
    const { container } = render(
      <div style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }}>
        Texte lisibl
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

## 16.8 Tests de Performance (Lighthouse CI)

### 16.8.1 Configuration Lighthouse CI

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:4173/',
        'http://localhost:4173/products',
        'http://localhost:4173/products/1',
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'interactive': ['error', { maxNumericValue: 3500 }],
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://your-lhci-server.com',
    },
  },
};
```

### 16.8.2 Script de Test Performance

```json
{
  "scripts": {
    "test:performance": "npm run build && npm run preview && lhci autorun",
    "test:performance:ci": "lhci autorun --collect.url=http://localhost:4173"
  }
}
```

---

## 16.9 Tests E2E (Playwright)

### 16.9.1 Configuration Playwright

```javascript
// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 16.9.2 Tests E2E du Flux Principal

```javascript
// e2e/purchase-flow.spec.js
import { test, expect } from '@playwright/test';

test.describe('Flux d\'achat complet', () => {
  test('un utilisateur peut rechercher, selectionner et acheter un produit', async ({ page }) => {
    // 1. Page d'accueil
    await page.goto('/');
    await expect(page).toHaveTitle(/Marketplace/);

    // 2. Rechercher un produit
    await page.fill('[data-testid="search-input"]', 'chaussure');
    await page.press('[data-testid="search-input"]', 'Enter');
    await expect(page.locator('[data-testid="product-card"]')).toHaveCount({ min: 1 });

    // 3. Selectionner un produit
    await page.click('[data-testid="product-card"]:first-child');
    await expect(page.locator('h1')).toContainText('Chaussure');

    // 4. Ajouter au panier
    await page.click('[data-testid="add-to-cart-button"]');
    await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1');

    // 5. Aller au panier
    await page.click('[data-testid="cart-icon"]');
    await expect(page.locator('[data-testid="cart-item"]')).toHaveCount(1);

    // 6. Passer au checkout
    await page.click('[data-testid="checkout-button"]');

    // 7. Remplir les informations de livraison
    await page.fill('#firstName', 'Jean');
    await page.fill('#lastName', 'Dupont');
    await page.fill('#address', '123 Rue de Paris');
    await page.fill('#city', 'Paris');
    await page.fill('#postalCode', '75001');
    await page.selectOption('#country', 'FR');

    // 8. Continuer vers le paiement
    await page.click('[data-testid="continue-to-payment"]');

    // 9. Remplir les informations de paiement (Stripe test)
    await page.fill('#card-number', '4242 4242 4242 4242');
    await page.fill('#card-expiry', '12/30');
    await page.fill('#card-cvc', '123');

    // 10. Confirmer la commande
    await page.click('[data-testid="place-order-button"]');

    // 11. Verifier la confirmation
    await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Commande confirmee');
  });
});

test.describe('Authentification', () => {
  test('un utilisateur peut se connecter et se deconnecter', async ({ page }) => {
    // 1. Aller a la page de connexion
    await page.goto('/auth/login');

    // 2. Remplir le formulaire
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', 'MotDePasse123!');

    // 3. Se connecter
    await page.click('[data-testid="login-button"]');

    // 4. Verifier la redirection vers le dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();

    // 5. Se deconnecter
    await page.click('[data-testid="user-menu"]');
    await page.click('[data-testid="logout-button"]');

    // 6. Verifier la redirection vers l'accueil
    await expect(page).toHaveURL('/');
  });

  test('un utilisateur peut s\'inscrire', async ({ page }) => {
    await page.goto('/auth/register');

    await page.fill('#firstName', 'Marie');
    await page.fill('#lastName', 'Martin');
    await page.fill('#email', 'marie@example.com');
    await page.fill('#password', 'MotDePasse123!');
    await page.fill('#confirmPassword', 'MotDePasse123!');
    await page.check('#terms');
    await page.click('[data-testid="register-button"]');

    await expect(page).toHaveURL('/auth/login?registered=true');
  });
});

test.describe('Vendeur', () => {
  test('un vendeur peut creer un produit', async ({ page }) => {
    // Login en tant que vendeur
    await page.goto('/auth/login');
    await page.fill('#email', 'seller@example.com');
    await page.fill('#password', 'MotDePasse123!');
    await page.click('[data-testid="login-button"]');

    // Naviguer vers la creation de produit
    await page.goto('/seller/products/new');

    // Remplir le formulaire
    await page.fill('#title', 'Nouveau Produit');
    await page.fill('#description', 'Description du nouveau produit');
    await page.fill('#price', '49.99');
    await page.selectOption('#currency', 'EUR');
    await page.fill('#stock', '100');

    // Soumettre
    await page.click('[data-testid="create-product-button"]');

    // Verifier la confirmation
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="success-message"]')).toContainText('Produit cree');
  });
});
```

---

## 16.10 Mock Strategies (MSW for API Mocking)

### 16.10.1 Configuration MSW

```javascript
// src/test/mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

### 16.10.2 Handlers MSW

```javascript
// src/test/mocks/handlers.js
import { http, HttpResponse } from 'msw';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// Donnees de test
const mockProducts = [
  {
    id: '1',
    title: 'Chaussure de Sport Pro',
    description: 'Chaussure de sport haute performance',
    price: 89.99,
    currency: 'EUR',
    category: 'sport',
    images: ['/images/product-1.jpg'],
    stock: 25,
    rating: 4.5,
    reviewCount: 128,
    seller: { id: 's1', name: 'SportMax' },
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Sac a Dos Premium',
    description: 'Sac a dos en cuir synthetique',
    price: 59.99,
    currency: 'EUR',
    category: 'accessories',
    images: ['/images/product-2.jpg'],
    stock: 50,
    rating: 4.2,
    reviewCount: 87,
    seller: { id: 's2', name: 'BagStyle' },
    createdAt: '2024-02-20T14:30:00Z',
  },
];

const mockUser = {
  id: 'u1',
  email: 'test@example.com',
  firstName: 'Jean',
  lastName: 'Dupont',
  role: 'buyer',
  permissions: ['products:read', 'orders:read', 'orders:write'],
};

export const handlers = [
  // GET /products
  http.get(`${API_BASE}/products`, ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const category = url.searchParams.get('category');

    let filtered = [...mockProducts];
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    return HttpResponse.json({
      items: filtered.slice((page - 1) * limit, page * limit),
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit),
    });
  }),

  // GET /products/:id
  http.get(`${API_BASE}/products/:id`, ({ params }) => {
    const product = mockProducts.find((p) => p.id === params.id);
    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(product);
  }),

  // POST /products
  http.post(`${API_BASE}/products`, async ({ request }) => {
    const body = await request.json();
    const newProduct = {
      id: String(mockProducts.length + 1),
      ...body,
      createdAt: new Date().toISOString(),
    };
    mockProducts.push(newProduct);
    return HttpResponse.json(newProduct, { status: 201 });
  }),

  // GET /auth/me
  http.get(`${API_BASE}/auth/me`, () => {
    return HttpResponse.json(mockUser);
  }),

  // POST /auth/login
  http.post(`${API_BASE}/auth/login`, async ({ request }) => {
    const body = await request.json();
    if (body.email === 'test@example.com' && body.password === 'MotDePasse123!') {
      return HttpResponse.json({
        accessToken: 'mock-access-token',
        user: mockUser,
      });
    }
    return new HttpResponse(null, { status: 401 });
  }),

  // POST /auth/refresh
  http.post(`${API_BASE}/auth/refresh`, () => {
    return HttpResponse.json({
      accessToken: 'new-mock-access-token',
    });
  }),

  // GET /cart
  http.get(`${API_BASE}/cart`, () => {
    return HttpResponse.json({
      items: [],
      total: 0,
      itemCount: 0,
    });
  }),

  // POST /orders
  http.post(`${API_BASE}/orders`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({
      id: 'order-' + Date.now(),
      ...body,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    }, { status: 201 });
  }),
];
```

### 16.10.3 Handlers MSW pour les Erreurs

```javascript
// src/test/mocks/handlers/error-handlers.js
import { http, HttpResponse } from 'msw';

export const errorHandlers = [
  // Simuler une erreur reseau
  http.get(`${API_BASE}/products`, () => {
    return HttpResponse.error(new Error('Failed to fetch'));
  }),

  // Simuler un timeout
  http.get(`${API_BASE}/products`, async () => {
    await new Promise((resolve) => setTimeout(resolve, 30000));
    return HttpResponse.json({ items: [] });
  }),

  // Simuler une erreur 429 (rate limit)
  http.get(`${API_BASE}/products`, () => {
    return new HttpResponse(null, {
      status: 429,
      headers: { 'Retry-After': '60' },
    });
  }),

  // Simuler une erreur 500
  http.get(`${API_BASE}/products`, () => {
    return new HttpResponse(null, { status: 500 });
  }),
];
```

---

## 16.11 CI/CD Test Pipeline

### 16.11.1 Pipeline GitHub Actions

```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck

  unit-tests:
    name: Unit Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run test:unit -- --coverage
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: coverage-report
          path: coverage/

  integration-tests:
    name: Integration Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run test:integration

  e2e-tests:
    name: E2E Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/

  performance-tests:
    name: Performance Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - run: npm run test:performance

  accessibility-tests:
    name: Accessibility Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run test:a11y

  bundle-analysis:
    name: Bundle Analysis
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Check bundle size
        run: |
          BUNDLE_SIZE=$(du -sb dist/assets/js/*.js | awk '{sum += $1} END {print sum}')
          MAX_SIZE=460800  # 450KB
          if [ "$BUNDLE_SIZE" -gt "$MAX_SIZE" ]; then
            echo "Bundle trop volumineux: ${BUNDLE_SIZE} bytes (max: ${MAX_SIZE})"
            exit 1
          fi
          echo "Bundle size: ${BUNDLE_SIZE} bytes - OK"
```

### 16.11.2 Scripts de Test dans package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:unit": "vitest run --reporter=verbose",
    "test:integration": "vitest run --reporter=verbose --testPathPattern=integration",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug",
    "test:performance": "npm run build && npm run preview && lhci autorun",
    "test:a11y": "vitest run --testPathPattern=a11y",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest watch",
    "test:ui": "vitest --ui",
    "test:storybook": "test-storybook",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
    "typecheck": "tsc --noEmit",
    "build": "vite build",
    "preview": "vite preview --port 4173"
  }
}
```

---

## 16.12 Checklist Complete de Test

### 16.12.1 Couverture Minimum Requise

| Module | Statements | Branches | Functions | Lines |
|---|:---:|:---:|:---:|:---:|
| `src/lib/` (utilitaires) | 95% | 90% | 95% | 95% |
| `src/services/` (API) | 90% | 85% | 90% | 90% |
| `src/hooks/` (custom hooks) | 90% | 85% | 90% | 90% |
| `src/components/ui/` (atoms) | 85% | 80% | 85% | 85% |
| `src/components/marketplace/` | 80% | 75% | 80% | 80% |
| `src/pages/` | 80% | 75% | 80% | 80% |
| `src/features/` (features) | 80% | 75% | 80% | 80% |
| **Global** | **85%** | **80%** | **85%** | **85%** |

### 16.12.2 Checklist avant Merge

| # | Check | Outils | Status |
|---|---|---|:---:|
| 1 | Tous les tests unitaires passent | Vitest | O |
| 2 | Tous les tests d'integration passent | Vitest + MSW | O |
| 3 | Tous les tests E2E passent | Playwright | O |
| 4 | Couverture de code >= 85% | Vitest Coverage | O |
| 5 | Lint sans erreur | ESLint | O |
| 6 | Typecheck sans erreur | TypeScript | O |
| 7 | Pas de regression visuelle | Storybook / Chromatic | O |
| 8 | Tests d'accessibilite passent | axe-core | O |
| 9 | Bundle size dans le budget | bundle-analyzer | O |
| 10 | Lighthouse score >= 90 | Lighthouse CI | O |
| 11 | Tous les tests responsive passent | Playwright (multi-device) | O |
| 12 | Pas de console.error dans les tests | Vitest | O |
| 13 | Mocks MSW synchronises avec l'API | MSW handlers | O |
| 14 | Snapshots visuels a jour | Chromatic | O |
| 15 | Tests de performance passes | Lighthouse CI | O |

### 16.12.3 Convention de Test Structure (Template)

```jsx
// Template pour tout fichier de test
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  // Setup avant chaque test
  beforeEach(() => {
    // Arrange
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Feature A', () => {
    it('devrait [comportement attendu] quand [condition]', () => {
      // Arrange
      const props = { /* props de test */ };

      // Act
      render(<ComponentName {...props} />);

      // Assert
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('devrait [comportement alternatif] quand [autre condition]', () => {
      // Arrange
      // Act
      // Assert
    });
  });

  describe('Feature B', () => {
    it('devrait [comportement attendu]', () => {
      // Arrange
      // Act
      // Assert
    });
  });

  describe('Accessibilite', () => {
    it('devrait etre accessible', async () => {
      // Arrange
      const { container } = render(<ComponentName />);

      // Act
      const results = await axe(container);

      // Assert
      expect(results).toHaveNoViolations();
    });
  });
});
```

### 16.12.4 Regles de Test

1. **Un test = une assertion principale** : Chaque test doit verifier une seule chose
2. **Nommage descriptif** : `it('devrait [action] quand [condition]')`
3. **Pas de dependances entre tests** : Chaque test doit etre isole
4. **Utiliser des data-testid** : Pour les selects de test, preferer `data-testid` aux selecteurs CSS
5. **Mocks minimalises** : Ne mocker que ce qui est necessaire
6. **Tests de regression** : Ajouter un test quand on corrige un bug
7. **Pas de test de implementation** : Tester le comportement, pas l'implementation
8. **Utiliser userEvent** : Preferer `userEvent` a `fireEvent` pour les interactions
9. **Attendre les async** : Utiliser `waitFor` ou `findBy*` pour les operations asynchrones
10. **Couvrir les cas limites** : Tester les valeurs nulles, vides, extremums

### 16.12.5 Commandes Utiles

```bash
# Lancer tous les tests
npm run test

# Lancer les tests en mode watch
npm run test:watch

# Lancer un fichier specifique
npm run test -- src/components/ui/Button/Button.test.jsx

# Lancer avec couverture
npm run test:coverage

# Lancer les tests E2E
npm run test:e2e

# Lancer les tests E2E avec UI Playwright
npm run test:e2e:ui

# Lancer les tests d'accessibilite
npm run test:a11y

# Lancer les tests de performance
npm run test:performance

# Lancer le linter
npm run lint

# Lancer la verification de types
npm run typecheck

# Lancer tous les checks de qualite
npm run lint && npm run typecheck && npm run test:unit && npm run test:e2e
```

---

*Fin du document — Chapitres 13 a 16*
*Version 1.0 — Derniere mise a jour : Juillet 2026*

---

# CHAPITRE 17 : Déploiement

---

## 17.1 Préparation du projet

### 17.1.1 Optimisation du build

Avant tout déploiement en production, le projet doit être soumis à un processus d'optimisation rigoureux afin de garantir des performances optimales, un temps de chargement minimal et une expérience utilisateur fluide sur l'ensemble des appareils et connexions réseau.

#### 17.1.1.1 Analyse de la taille du bundle

L'analyse de la taille du bundle constitue la première étape de l'optimisation. Elle permet d'identifier les dépendances lourdes, les code-splitting opportunities et les modules redondants.

**Outils recommandés :**

| Outil | Commande | Description |
|-------|----------|-------------|
| `rollup-plugin-visualizer` | `npm run build -- --mode analyze` | Génère une visualisation interactive du bundle |
| `source-map-explorer` | `npx source-map-explorer 'dist/**/*.js'` | Explore les source maps pour analyser la taille |
| `bundlesize` | `npx bundlesize` | Vérifie les seuils de taille définis |
| `vite-bundle-analyzer` | Plugin Vite natif | Intégration directe dans le pipeline Vite |

**Seuils de performance par page (Largest Contentful Paint) :**

| Ressource | Taille max recommandée | Priorité |
|-----------|----------------------|----------|
| JavaScript total (parsé) | < 300 KB | Critique |
| CSS total | < 60 KB | Haute |
| Polices web | < 100 KB | Moyenne |
| Images (premier écran) | < 200 KB | Haute |
| HTML initial | < 50 KB | Critique |
| Taux de compression Brotli | > 70% | Haute |

#### 17.1.1.2 Code Splitting

Le code splitting est implémenté au niveau des routes React via `React.lazy()` et `Suspense` pour réduire le JavaScript initial chargé.

```javascript
// src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy-loaded route components
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const AuthPage = lazy(() => import('./pages/auth/AuthPage'));
const SellerDashboard = lazy(() => import('./pages/seller/SellerDashboard'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const UserProfilePage = lazy(() => import('./pages/user/UserProfilePage'));
const OrderTrackingPage = lazy(() => import('./pages/orders/OrderTrackingPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/auth/*" element={<AuthPage />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/profile/*" element={<UserProfilePage />} />
          <Route path="/orders/:id/track" element={<OrderTrackingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
```

#### 17.1.1.3 Tree Shaking

Vite effectue le tree shaking automatiquement via Rollup. Les conditions suivantes doivent être respectées :

- Utiliser les imports nommés : `import { Button } from 'react'` plutôt que `import React from 'react'`
- Éviter les side effects dans les modules (marquer les fichiers purs dans `package.json`)
- Privilégier les bibliothèques ESM (`lodash-es` plutôt que `lodash`)
- Utiliser `babel-plugin-transform-imports` pour convertir automatiquement les imports barrel

**Configuration `package.json` :**

```json
{
  "sideEffects": [
    "*.css",
    "*.scss",
    "src/polyfills.ts"
  ]
}
```

#### 17.1.1.4 Compression et minification

| Technique | Outil | Configuration |
|-----------|-------|---------------|
| Minification JavaScript | Terser (intégré à Vite) | `build.minify: 'terser'` |
| Minification CSS | esbuild (intégré à Vite) | Automatique |
| Compression Brotli | `vite-plugin-compression` | Niveau 11 |
| Compression Gzip | `vite-plugin-compression` | Niveau 9 |
| Suppression des console.log | `drop_console` (terser) | Production uniquement |
| Suppression du debugger | `drop_debugger` (terser) | Production uniquement |

**Configuration Vite optimisée :**

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    compression({ algorithm: 'gzip', ext: '.gz' }),
    mode === 'analyze' && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/analysis.html',
    }),
  ].filter(Boolean),
  build: {
    target: 'es2020',
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: mode !== 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['daisyui', 'tailwindcss'],
          state: ['zustand'],
          http: ['axios'],
          forms: ['react-hook-form', 'zod'],
          date: ['date-fns'],
          icons: ['lucide-react'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: ['console.log', 'console.debug'],
      },
      format: {
        comments: false,
      },
    },
  },
}));
```

### 17.1.2 Préparation des assets

#### 17.1.2.1 Optimisation des images

| Format | Usage | Outil d'optimisation |
|--------|-------|---------------------|
| WebP | Photos produits, avatars | `sharp`, `imagemin` |
| AVIF | Photos haute qualité | `sharp` (avec fallback) |
| SVG | Icônes, logos, illustrations | `svgo` |
| PNG | Fallback transparent | `imagemin-pngquant` |
| JPEG XL | Futur format (progressive) | `sharp` (expérimental) |

**Génération des responsive images :**

```javascript
// scripts/optimize-images.js
import sharp from 'sharp';
import glob from 'fast-glob';

const sizes = [320, 640, 768, 1024, 1280, 1536, 1920];

async function optimizeImages() {
  const files = await glob('src/assets/images/**/*.{jpg,jpeg,png}');

  for (const file of files) {
    for (const size of sizes) {
      await sharp(file)
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(file.replace(/\.\w+$/, `-${size}w.webp`));
    }
  }
}

optimizeImages();
```

#### 17.1.2.2 Préchargement des ressources critiques

```html
<!-- index.html -->
<head>
  <!-- Preconnect aux domaines externes -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://api.marketplace.com" />

  <!-- Preload des polices critiques -->
  <link
    rel="preload"
    href="/fonts/Inter-Regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
  <link
    rel="preload"
    href="/fonts/Inter-SemiBold.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />

  <!-- Preload de l'image LCP -->
  <link
    rel="preload"
    as="image"
    href="/images/hero-banner-1200w.webp"
    imagesrcset="/images/hero-banner-640w.webp 640w, /images/hero-banner-1200w.webp 1200w"
    imagesizes="100vw"
  />

  <!-- DNS-Prefetch -->
  <link rel="dns-prefetch" href="https://cdn.marketplace.com" />
  <link rel="dns-prefetch" href="https://sentry.io" />
</head>
```

---

## 17.2 Variables d'environnement

### 17.2.1 Types de variables

Les variables d'environnement du projet sont classées en plusieurs catégories selon leur sensibilité et leur domaine d'application. Seules les variables préfixées par `VITE_` sont exposées au bundle client (coté navigateur). Toutes les autres restent côté serveur uniquement.

### 17.2.2 Liste complète des variables

| Variable | Type | Requise | Description | Valeur par défaut |
|----------|------|---------|-------------|-------------------|
| `VITE_APP_NAME` | `string` | Oui | Nom de l'application affiché dans l'UI | `Marketplace` |
| `VITE_APP_VERSION` | `string` | Oui | Version actuelle de l'application | `1.0.0` |
| `VITE_APP_ENV` | `string` | Oui | Environnement d'exécution : `development`, `staging`, `production` | `development` |
| `VITE_API_BASE_URL` | `string` | Oui | URL de base de l'API backend | `http://localhost:3000/api/v1` |
| `VITE_API_TIMEOUT` | `number` | Non | Timeout des requêtes API en millisecondes | `30000` |
| `VITE_API_RETRY_COUNT` | `number` | Non | Nombre de tentatives en cas d'échec API | `3` |
| `VITE_API_RETRY_DELAY` | `number` | Non | Délai entre les tentatives API (ms) | `1000` |
| `VITE_WS_URL` | `string` | Oui | URL du serveur WebSocket (chat, notifications) | `ws://localhost:3000/ws` |
| `VITE_AUTH_TOKEN_KEY` | `string` | Non | Clé de stockage du token JWT dans localStorage | `mp_access_token` |
| `VITE_AUTH_REFRESH_KEY` | `string` | Non | Clé de stockage du refresh token | `mp_refresh_token` |
| `VITE_AUTH_EXPIRY_KEY` | `string` | Non | Clé de stockage de la date d'expiration | `mp_token_expiry` |
| `VITE_SENTRY_DSN` | `string` | Non | DSN Sentry pour le tracking d'erreurs | — |
| `VITE_SENTRY_TRACES_SAMPLE_RATE` | `number` | Non | Taux d'échantillonnage des traces Sentry | `0.1` |
| `VITE_SENTRY_REPLAYS_SAMPLE_RATE` | `number` | Non | Taux d'échantillonnage des replays Sentry | `0.1` |
| `VITE_GA_MEASUREMENT_ID` | `string` | Non | ID de mesure Google Analytics 4 | — |
| `VITE_GTM_CONTAINER_ID` | `string` | Non | ID du conteneur Google Tag Manager | — |
| `VITE_STRIPE_PUBLIC_KEY` | `string` | Oui | Clé publique Stripe pour le paiement | — |
| `VITE_STRIPE_CURRENCY` | `string` | Non | Devise par défaut pour Stripe | `usd` |
| `VITE_CLOUDINARY_CLOUD_NAME` | `string` | Non | Nom du cloud Cloudinary pour les images | — |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | `string` | Non | Preset d'upload Cloudinary (unsigned) | `marketplace_unsigned` |
| `VITE_CLOUDINARY_FOLDER` | `string` | Non | Dossier racine Cloudinary | `marketplace` |
| `VITE_GOOGLE_MAPS_API_KEY` | `string` | Non | Clé API Google Maps pour la géolocalisation | — |
| `VITE_ALGOLIA_APP_ID` | `string` | Non | ID de l'application Algolia (recherche) | — |
| `VITE_ALGOLIA_SEARCH_KEY` | `string` | Non | Clé de recherche Algolia (publique) | — |
| `VITE_CDN_URL` | `string` | Non | URL du CDN pour les assets statiques | `/` |
| `VITE_I18N_DEFAULT_LOCALE` | `string` | Non | Locale par défaut pour l'internationalisation | `fr` |
| `VITE_I18N_SUPPORTED_LOCALES` | `string` | Non | Locales supportées (séparées par des virgules) | `fr,en,es,de,ar,zh` |
| `VITE_PWA_ENABLED` | `boolean` | Non | Activer le mode PWA | `true` |
| `VITE_PWA_THEME_COLOR` | `string` | Non | Couleur thème de la PWA | `#1d4ed8` |
| `VITE_MAINTENANCE_MODE` | `boolean` | Non | Activer le mode maintenance | `false` |
| `VITE_ENABLE_ANALYTICS` | `boolean` | Non | Activer le tracking analytique | `true` |
| `VITE_ENABLE_CHAT` | `boolean` | Non | Activer le système de chat | `true` |
| `VITE_ENABLE_NOTIFICATIONS` | `boolean` | Non | Activer les notifications push | `true` |
| `VITE_ENABLE_MULTI_CURRENCY` | `boolean` | Non | Activer le multi-devises | `false` |
| `VITE_MAX_UPLOAD_SIZE_MB` | `number` | Non | Taille maximale d'upload en MB | `10` |
| `VITE_DEFAULT_PAGE_SIZE` | `number` | Non | Nombre d'éléments par page par défaut | `20` |
| `VITE_MAX_PAGE_SIZE` | `number` | Non | Nombre maximum d'éléments par page | `100` |
| `VITE_CACHE_VERSION` | `string` | Non | Version du cache (pour invalidation) | `v1` |
| `VITE_DEBUG_MODE` | `boolean` | Non | Activer les logs de debug | `false` |

### 17.2.3 Fichiers d'environnement

Le projet utilise le système de chargement d'environnement natif de Vite. Les fichiers suivants doivent être présents :

| Fichier | Usage | Versionné |
|---------|-------|-----------|
| `.env` | Variables communes à tous les environnements | Oui |
| `.env.development` | Variables spécifiques au développement local | Oui (valeurs par défaut) |
| `.env.staging` | Variables spécifiques au staging | Non |
| `.env.production` | Variables spécifiques à la production | Non |
| `.env.local` | Variables locales personnelles (écrase .env.*) | Non |
| `.env.example` | Template documenté pour les développeurs | Oui |

**Exemple de fichier `.env.example` :**

```env
# =============================================
# MARKETPLACE - VARIABLES D'ENVIRONNEMENT
# =============================================
# Copiez ce fichier en .env.local et remplissez les valeurs
# NE VERSIONNEZ JAMAIS .env.local

# --- Application ---
VITE_APP_NAME=Marketplace
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development

# --- API Backend ---
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_API_TIMEOUT=30000
VITE_API_RETRY_COUNT=3
VITE_API_RETRY_DELAY=1000

# --- WebSocket ---
VITE_WS_URL=ws://localhost:3000/ws

# --- Authentification ---
VITE_AUTH_TOKEN_KEY=mp_access_token
VITE_AUTH_REFRESH_KEY=mp_refresh_token
VITE_AUTH_EXPIRY_KEY=mp_token_expiry

# --- Monitoring ---
VITE_SENTRY_DSN=
VITE_SENTRY_TRACES_SAMPLE_RATE=0.1
VITE_SENTRY_REPLAYS_SAMPLE_RATE=0.1

# --- Analytics ---
VITE_GA_MEASUREMENT_ID=
VITE_GTM_CONTAINER_ID=

# --- Paiement ---
VITE_STRIPE_PUBLIC_KEY=
VITE_STRIPE_CURRENCY=usd

# --- Stockage d'images ---
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=marketplace_unsigned
VITE_CLOUDINARY_FOLDER=marketplace

# --- Recherche ---
VITE_ALGOLIA_APP_ID=
VITE_ALGOLIA_SEARCH_KEY=

# --- CDN ---
VITE_CDN_URL=/

# --- Internationalisation ---
VITE_I18N_DEFAULT_LOCALE=fr
VITE_I18N_SUPPORTED_LOCALES=fr,en,es,de,ar,zh

# --- PWA ---
VITE_PWA_ENABLED=true
VITE_PWA_THEME_COLOR=#1d4ed8

# --- Fonctionnalites ---
VITE_MAINTENANCE_MODE=false
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=true
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_MULTI_CURRENCY=false

# --- Limites ---
VITE_MAX_UPLOAD_SIZE_MB=10
VITE_DEFAULT_PAGE_SIZE=20
VITE_MAX_PAGE_SIZE=100

# --- Debug ---
VITE_DEBUG_MODE=false
```

### 17.2.4 Validation des variables

Un script de validation s'exécute au démarrage pour s'assurer que toutes les variables requises sont définies :

```typescript
// src/config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_NAME: z.string().min(1),
  VITE_APP_VERSION: z.string().regex(/^\d+\.\d+\.\d+$/),
  VITE_APP_ENV: z.enum(['development', 'staging', 'production']),
  VITE_API_BASE_URL: z.string().url(),
  VITE_WS_URL: z.string().startsWith('ws://').or(z.string().startsWith('wss://')),
  VITE_STRIPE_PUBLIC_KEY: z.string().startsWith('pk_'),
  VITE_SENTRY_DSN: z.string().url().optional(),
  VITE_GA_MEASUREMENT_ID: z.string().optional(),
  VITE_I18N_DEFAULT_LOCALE: z.string().min(2).max(5),
  VITE_I18N_SUPPORTED_LOCALES: z.string(),
});

type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  const parsed = envSchema.safeParse(import.meta.env);

  if (!parsed.success) {
    console.error(
      '❌ Variables d\'environnement invalides :',
      parsed.error.flatten().fieldErrors
    );
    throw new Error('Variables d\'environnement invalides. Vérifiez le fichier .env.local');
  }

  return parsed.data;
}

export const env = validateEnv();
```

---

## 17.3 Build de production

### 17.3.1 Commande de build

```bash
# Build de production standard
npm run build

# Build avec analyse du bundle
npm run build -- --mode analyze

# Build avec sourcemaps (pour le debugging en staging)
VITE_SOURCEMAP=true npm run build
```

### 17.3.2 Scripts package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:analyze": "vite build --mode analyze",
    "build:staging": "tsc && vite build --mode staging",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,json}\"",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

### 17.3.3 Structure du dossier de sortie `dist/`

Apres l'execution de `npm run build`, la structure suivante est generee :

```
dist/
├── index.html                    # Point d'entree HTML (minifie)
├── assets/
│   ├── css/
│   │   ├── main-[hash].css       # CSS principal (minifie, purge)
│   │   ├── vendor-[hash].css     # CSS des dependances
│   │   └── fonts-[hash].css      # Declarations de polices
│   ├── js/
│   │   ├── vendor-[hash].js      # React, React Router, dependances
│   │   ├── main-[hash].js        # Code applicatif principal
│   │   ├── ui-[hash].js          # Composants UI
│   │   ├── state-[hash].js       # Gestion d'etat
│   │   ├── http-[hash].js        # Client HTTP
│   │   ├── forms-[hash].js       # Formulaires
│   │   ├── date-[hash].js        # Utilitaires de date
│   │   ├── icons-[hash].js       # Icones
│   │   ├── HomePage-[hash].js    # Chunk route: HomePage
│   │   ├── ProductListing-[hash].js
│   │   ├── ProductDetail-[hash].js
│   │   ├── CartPage-[hash].js
│   │   ├── CheckoutPage-[hash].js
│   │   ├── AuthPage-[hash].js
│   │   ├── SellerDashboard-[hash].js
│   │   ├── AdminDashboard-[hash].js
│   │   ├── UserProfilePage-[hash].js
│   │   └── OrderTracking-[hash].js
│   ├── images/
│   │   ├── hero-banner-640w.webp
│   │   ├── hero-banner-1200w.webp
│   │   ├── hero-banner-1920w.webp
│   │   └── logo-[hash].svg
│   └── fonts/
│       ├── Inter-Regular.[hash].woff2
│       ├── Inter-SemiBold.[hash].woff2
│       └── Inter-Bold.[hash].woff2
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── manifest.json                 # Manifest PWA
├── sw.js                         # Service Worker
├── robots.txt
├── sitemap.xml
└── _headers                      # En-tetes personnalises (Netlify)
```

### 17.3.4 Analyse des resultats

**Metriques cibles apres build :**

| Metrique | Objectif | Alerte |
|----------|----------|--------|
| Taille totale gzippee | < 300 KB | > 500 KB |
| Taille JS gzippee | < 200 KB | > 350 KB |
| Taille CSS gzippee | < 30 KB | > 60 KB |
| Nombre de chunks | 15-25 | > 40 |
| Premier chunk (vendor) gzip | < 80 KB | > 120 KB |
| Largest Contentful Paint | < 2.5s | > 4.0s |
| First Contentful Paint | < 1.5s | > 3.0s |
| Time to Interactive | < 3.5s | > 5.0s |
| Cumulative Layout Shift | < 0.1 | > 0.25 |
| Total Blocking Time | < 200ms | > 600ms |

---

## 17.4 Deploiement Vercel

### 17.4.1 Configuration Vercel

Le deploiement sur Vercel est recommande pour les projets React car il offre des optimisations natives (Edge Network, ISR, optimisation automatique des assets).

**Fichier `vercel.json` :**

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "version": 2,
  "name": "marketplace-frontend",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm ci",
  "nodeVersion": "20.x",
  "regions": ["cdg1", "bru1", "lhr1", "iad1", "sfo1", "hnd1", "syd1"],

  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    },
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache, no-store, must-revalidate"
        }
      ]
    },
    {
      "source": "/manifest.json",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache"
        }
      ]
    }
  ],

  "rewrites": [
    {
      "source": "/((?!assets/|fonts/|images/|favicon.ico|manifest.json|sw.js|robots.txt|sitemap.xml|_headers).*)",
      "destination": "/index.html"
    }
  ],

  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/shop",
      "destination": "/products",
      "permanent": true
    },
    {
      "source": "/product/:id",
      "destination": "/products/:id",
      "permanent": true
    },
    {
      "source": "/signin",
      "destination": "/auth/login",
      "permanent": true
    },
    {
      "source": "/signup",
      "destination": "/auth/register",
      "permanent": true
    },
    {
      "source": "/login",
      "destination": "/auth/login",
      "permanent": true
    },
    {
      "source": "/register",
      "destination": "/auth/register",
      "permanent": true
    },
    {
      "source": "/dashboard",
      "destination": "/seller/dashboard",
      "permanent": false
    },
    {
      "source": "/admin",
      "destination": "/admin/dashboard",
      "permanent": false
    },
    {
      "source": "/api-docs",
      "destination": "https://api.marketplace.com/docs",
      "permanent": false
    }
  ],

  "env": {
    "VITE_APP_ENV": "production"
  },

  "buildEnv": {
    "VITE_APP_ENV": "production"
  }
}
```

### 17.4.2 Domaine personnalise

**Configuration DNS (enregistrements a ajouter chez le registrar) :**

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| A | `@` | `76.76.21.21` | 600 |
| CNAME | `www` | `cname.vercel-dns.com` | 600 |
| CNAME | `marketplace` | `cname.vercel-dns.com` | 600 |
| TXT | `_vercel` | `vc-domain-verify=marketplace-xxxxx` | 600 |

### 17.4.3 Configuration Vercel CLI

```bash
# Installation
npm i -g vercel

# Connexion
vercel login

# Initialisation du projet
vercel

# Deploiement staging (branch develop)
vercel --yes

# Deploiement production (branch main)
vercel --yes --prod

# Variables d'environnement
vercel env add VITE_STRIPE_PUBLIC_KEY production
vercel env add VITE_SENTRY_DSN production
vercel env add VITE_API_BASE_URL production

# Configuration du domaine
vercel domains add marketplace.com
vercel domains add www.marketplace.com

# Logs
vercel logs marketplace.com --follow

# Analyse des performances
vercel analytics
```

### 17.4.4 Environnements Vercel

| Branche | Environnement | URL | Auto-deploy |
|---------|--------------|-----|-------------|
| `main` | Production | `marketplace.com` | Oui |
| `develop` | Staging | `marketplace-git-develop.vercel.app` | Oui |
| `feature/*` | Preview | `marketplace-git-{branch-name}.vercel.app` | Oui (PR) |

---

## 17.5 Deploiement Netlify

### 17.5.1 Configuration Netlify

**Fichier `netlify.toml` :**

```toml
[build]
  command = "npm run build"
  publish = "dist"
  environment = { NODE_VERSION = "20", VITE_APP_ENV = "production" }

# Redirection SPA - toutes les routes non trouvees vers index.html
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Redirections permanentes
[[redirects]]
  from = "/home"
  to = "/"
  status = 301

[[redirects]]
  from = "/shop"
  to = "/products"
  status = 301

[[redirects]]
  from = "/product/:id"
  to = "/products/:id"
  status = 301

[[redirects]]
  from = "/signin"
  to = "/auth/login"
  status = 301

[[redirects]]
  from = "/signup"
  to = "/auth/register"
  status = 301

# Headers de securite
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.marketplace.com https://sentry.io wss://api.marketplace.com; frame-src https://js.stripe.com;"

# Cache immuable pour les assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Pas de cache pour les pages
[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "no-cache, must-revalidate"

# Edge Functions pour le middleware
[[edge_functions]]
  path = "/*"
  function = "geo-redirect"

# Plugins
[[plugins]]
  package = "@netlify/plugin-lighthouse"
  [plugins.inputs]
    audits = ["first-contentful-paint", "largest-contentful-paint", "cumulative-layout-shift", "total-blocking-time"]

# Fonctions serverless
[functions]
  node_bundler = "esbuild"
  included_files = ["src/data/**"]

# Build hooks
[build.processing.html]
  pretty_urls = true

# Environnements par contexte
[context.production.environment]
  VITE_APP_ENV = "production"
  VITE_ENABLE_ANALYTICS = "true"
  VITE_DEBUG_MODE = "false"

[context.deploy-preview.environment]
  VITE_APP_ENV = "staging"
  VITE_ENABLE_ANALYTICS = "false"
  VITE_DEBUG_MODE = "true"
```

### 17.5.2 Netlify Functions

```typescript
// netlify/functions/geo-redirect.ts
import type { Context } from '@netlify/edge-functions';

export default async function geoRedirect(request: Request, context: Context) {
  const country = context.geo?.country?.code;

  if (!country) return;

  const localeMap: Record<string, string> = {
    FR: 'fr',
    BE: 'fr',
    CH: 'fr',
    CA: 'fr',
    US: 'en',
    GB: 'en',
    DE: 'de',
    AT: 'de',
    ES: 'es',
    MX: 'es',
    AR: 'es',
    CN: 'zh',
    JP: 'zh',
    SA: 'ar',
    AE: 'ar',
  };

  const locale = localeMap[country] || 'en';
  const url = new URL(request.url);
  const currentLocale = url.pathname.split('/')[1];

  const supportedLocales = ['fr', 'en', 'es', 'de', 'ar', 'zh'];

  if (supportedLocales.includes(currentLocale)) {
    return new Response(null, {
      status: 302,
      headers: { Location: `/${locale}${url.pathname.slice(1)}${url.search}` },
    });
  }
}

export const config = {
  path: '/*',
  cache: 'manual',
};
```

### 17.5.3 Netlify Forms

```html
<!-- Formulaire de contact integre -->
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action="/success"
>
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden" style="display: none;">
    <label>Ne pas remplir : <input name="bot-field" /></label>
  </p>
  <div>
    <label for="name">Nom</label>
    <input type="text" name="name" id="name" required />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required />
  </div>
  <div>
    <label for="message">Message</label>
    <textarea name="message" id="message" required></textarea>
  </div>
  <button type="submit">Envoyer</button>
</form>
```

---

## 17.6 Deploiement Docker

### 17.6.1 Dockerfile multi-stage

```dockerfile
# ============================================
# STAGE 1: Installation des dependances
# ============================================
FROM node:20-alpine AS deps

WORKDIR /app

# Copie des fichiers de dependances
COPY package.json package-lock.json ./

# Installation des dependances (production + development pour le build)
RUN npm ci --ignore-scripts

# ============================================
# STAGE 2: Build de production
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des dependances depuis le stage precedent
COPY --from=deps /app/node_modules ./node_modules

# Copie du code source
COPY . .

# Variables d'environnement pour le build
ARG VITE_APP_ENV=production
ARG VITE_API_BASE_URL
ARG VITE_WS_URL
ARG VITE_STRIPE_PUBLIC_KEY
ARG VITE_SENTRY_DSN
ARG VITE_CDN_URL=/

ENV VITE_APP_ENV=$VITE_APP_ENV
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_WS_URL=$VITE_WS_URL
ENV VITE_STRIPE_PUBLIC_KEY=$VITE_STRIPE_PUBLIC_KEY
ENV VITE_SENTRY_DSN=$VITE_SENTRY_DSN
ENV VITE_CDN_URL=$VITE_CDN_URL

# Build de production
RUN npm run build

# ============================================
# STAGE 3: Production (Nginx)
# ============================================
FROM nginx:1.25-alpine AS production

# Installation de curl pour le healthcheck
RUN apk add --no-cache curl

# Suppression de la configuration par defaut
RUN rm /etc/nginx/conf.d/default.conf

# Copie de la configuration Nginx personnalisee
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/ /etc/nginx/conf.d/
COPY nginx/snippets/ /etc/nginx/snippets/

# Copie des fichiers du build depuis le stage precedent
COPY --from=builder /app/dist /usr/share/nginx/html

# Copie du robots.txt et sitemap
COPY public/robots.txt /usr/share/nginx/html/
COPY public/sitemap.xml /usr/share/nginx/html/

# Creation d'un utilisateur non-root
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup && \
    chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R appuser:appgroup /var/run/nginx.pid

USER appuser

# Exposition du port
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Demarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]
```

### 17.6.2 Configuration Nginx

**Fichier `nginx/nginx.conf` :**

```nginx
user appuser;
worker_processes auto;
pid /var/run/nginx.pid;
error_log /var/log/nginx/error.log warn;

events {
    worker_connections 1024;
    multi_accept on;
    use epoll;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging format
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for" '
                    'rt=$request_time';

    access_log /var/log/nginx/access.log main;

    # Performance
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 10M;
    server_tokens off;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_min_length 256;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml
        application/xml+rss
        application/vnd.ms-fontobject
        application/x-font-ttf
        font/opentype
        image/svg+xml
        image/x-icon;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=api:10m rate=30r/s;
    limit_req_zone $binary_remote_addr zone=auth:10m rate=5r/s;

    # Real IP (si derriere un proxy/load balancer)
    set_real_ip_from 10.0.0.0/8;
    set_real_ip_from 172.16.0.0/12;
    set_real_ip_from 192.168.0.0/16;
    real_ip_header X-Forwarded-For;
    real_ip_recursive on;

    include /etc/nginx/conf.d/*.conf;
}
```

**Fichier `nginx/conf.d/marketplace.conf` :**

```nginx
upstream api_backend {
    least_conn;
    server api:3000 max_fails=3 fail_timeout=30s;
    keepalive 32;
}

server {
    listen 3000;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    # Security headers
    include /etc/nginx/snippets/security-headers.conf;

    # Health check endpoint
    location /health {
        access_log off;
        return 200 '{"status":"healthy","timestamp":"$time_iso8601"}';
        add_header Content-Type application/json;
    }

    # Assets statiques - cache immuable
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable, max-age=31536000";
        access_log off;
        try_files $uri =404;
    }

    # Fonts - cache immuable
    location /fonts/ {
        expires 1y;
        add_header Cache-Control "public, immutable, max-age=31536000";
        add_header Access-Control-Allow-Origin "*";
        access_log off;
        try_files $uri =404;
    }

    # Images - cache longue duree
    location /images/ {
        expires 6M;
        add_header Cache-Control "public, max-age=15552000";
        access_log off;
        try_files $uri =404;
    }

    # Service Worker - pas de cache
    location = /sw.js {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
        try_files $uri =404;
    }

    # Manifest PWA - pas de cache
    location = /manifest.json {
        add_header Cache-Control "no-cache";
        try_files $uri =404;
    }

    # Robots.txt et sitemap
    location = /robots.txt {
        add_header Cache-Control "no-cache";
        try_files $uri =404;
    }

    location = /sitemap.xml {
        add_header Cache-Control "no-cache";
        try_files $uri =404;
    }

    # Proxy API backend
    location /api/ {
        limit_req zone=api burst=20 nodelay;

        proxy_pass http://api_backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
        proxy_set_header X-Request-ID $request_id;

        proxy_connect_timeout 5s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;

        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 4k;

        # CORS
        add_header Access-Control-Allow-Origin $http_origin always;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, PATCH, DELETE, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Authorization, Content-Type, X-Requested-With, Accept, Origin" always;
        add_header Access-Control-Allow-Credentials "true" always;

        if ($request_method = OPTIONS) {
            return 204;
        }
    }

    # Proxy WebSocket
    location /ws/ {
        proxy_pass http://api_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }

    # Auth routes - rate limiting strict
    location /api/v1/auth/ {
        limit_req zone=auth burst=5 nodelay;

        proxy_pass http://api_backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
    }

    # Favicon
    location = /favicon.ico {
        log_not_found off;
        access_log off;
        try_files /favicon.ico =204;
    }

    # SPA fallback
    location / {
        limit_req zone=general burst=10 nodelay;

        try_files $uri $uri/ /index.html;

        # Cache court pour le HTML
        add_header Cache-Control "no-cache, must-revalidate";
    }

    # Pages d'erreur
    error_page 404 /index.html;
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
        internal;
    }
}
```

**Fichier `nginx/snippets/security-headers.conf` :**

```nginx
# Security Headers
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.marketplace.com https://sentry.io wss://api.marketplace.com; frame-src https://js.stripe.com;" always;
```

### 17.6.3 Docker Compose

**Fichier `docker-compose.yml` :**

```yaml
version: '3.9'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        VITE_APP_ENV: production
        VITE_API_BASE_URL: https://api.marketplace.com/api/v1
        VITE_WS_URL: wss://api.marketplace.com/ws
        VITE_STRIPE_PUBLIC_KEY: ${VITE_STRIPE_PUBLIC_KEY}
        VITE_SENTRY_DSN: ${VITE_SENTRY_DSN}
        VITE_CDN_URL: https://cdn.marketplace.com/
    ports:
      - "3000:3000"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 10s
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 128M
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    networks:
      - frontend-network

  nginx-proxy:
    image: nginx:1.25-alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./nginx/snippets:/etc/nginx/snippets:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./dist:/usr/share/nginx/html:ro
    depends_on:
      frontend:
        condition: service_healthy
    restart: unless-stopped
    networks:
      - frontend-network
      - backend-network

networks:
  frontend-network:
    driver: bridge
  backend-network:
    external: true
```

### 17.6.4 Commandes Docker

```bash
# Build de l'image
docker build -t marketplace-frontend:latest .

# Build avec arguments
docker build \
  --build-arg VITE_API_BASE_URL=https://api.marketplace.com/api/v1 \
  --build-arg VITE_STRIPE_PUBLIC_KEY=pk_live_xxx \
  -t marketplace-frontend:latest .

# Execution
docker run -d -p 3000:3000 --name marketplace-frontend marketplace-frontend:latest

# Docker Compose
docker-compose up -d --build

# Logs
docker logs -f marketplace-frontend

# Health check
curl http://localhost:3000/health

# Stopping
docker-compose down

# Cleanup
docker system prune -af --volumes
```

---

## 17.7 CI/CD avec GitHub Actions

### 17.7.1 Workflow principal

**Fichier `.github/workflows/ci.yml` :**

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  NODE_VERSION: '20'
  PNPM_VERSION: '8'

permissions:
  contents: write
  pull-requests: write
  actions: write

jobs:
  # ============================================
  # Job 1: Verification de la qualite du code
  # ============================================
  lint:
    name: Lint & Format
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Run Prettier check
        run: npx prettier --check "src/**/*.{ts,tsx,json,css}"

  # ============================================
  # Job 2: Verification des types TypeScript
  # ============================================
  typecheck:
    name: Type Check
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run TypeScript compiler
        run: npm run type-check

  # ============================================
  # Job 3: Tests unitaires
  # ============================================
  test:
    name: Tests
    runs-on: ubuntu-latest
    needs: [lint, typecheck]
    strategy:
      matrix:
        shard: [1, 2, 3, 4]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests (shard ${{ matrix.shard }}/4)
        run: npx vitest run --shard=${{ matrix.shard }}/4 --coverage

      - name: Upload coverage
        uses: actions/upload-artifact@v4
        with:
          name: coverage-${{ matrix.shard }}
          path: coverage/
          retention-days: 5

  # ============================================
  # Job 4: Couverture de code
  # ============================================
  coverage:
    name: Coverage Report
    runs-on: ubuntu-latest
    needs: [test]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests with coverage
        run: npm run test:coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          fail_ci_if_error: false

  # ============================================
  # Job 5: Analyse de securite
  # ============================================
  security:
    name: Security Audit
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run npm audit
        run: npm audit --audit-level=high
        continue-on-error: true

      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        continue-on-error: true
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  # ============================================
  # Job 6: Build de production
  # ============================================
  build:
    name: Build Production
    runs-on: ubuntu-latest
    needs: [test, security]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run build
        run: npm run build
        env:
          VITE_APP_ENV: production
          VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL }}
          VITE_WS_URL: ${{ secrets.VITE_WS_URL }}
          VITE_STRIPE_PUBLIC_KEY: ${{ secrets.VITE_STRIPE_PUBLIC_KEY }}
          VITE_SENTRY_DSN: ${{ secrets.VITE_SENTRY_DSN }}
          VITE_CLOUDINARY_CLOUD_NAME: ${{ secrets.VITE_CLOUDINARY_CLOUD_NAME }}
          VITE_CLOUDINARY_UPLOAD_PRESET: ${{ secrets.VITE_CLOUDINARY_UPLOAD_PRESET }}

      - name: Check build size
        run: |
          echo "=== Build Size Analysis ==="
          du -sh dist/
          echo "---"
          echo "JS files:"
          find dist/assets/js -name "*.js" -exec du -sh {} \;
          echo "---"
          echo "CSS files:"
          find dist/assets/css -name "*.css" -exec du -sh {} \;

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: production-build
          path: dist/
          retention-days: 7

  # ============================================
  # Job 7: Lighthouse Performance Check
  # ============================================
  lighthouse:
    name: Lighthouse Audit
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Download build
        uses: actions/download-artifact@v4
        with:
          name: production-build
          path: dist/

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:9000/
            http://localhost:9000/products
            http://localhost:9000/auth/login
          configPath: .lighthouserc.json
          uploadArtifacts: true

  # ============================================
  # Job 8: Deploiement Staging
  # ============================================
  deploy-staging:
    name: Deploy Staging
    runs-on: ubuntu-latest
    needs: [build, lighthouse]
    if: github.ref == 'refs/heads/develop' && github.event_name == 'push'
    environment:
      name: staging
      url: https://marketplace-git-develop.vercel.app
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy to Vercel (Staging)
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
          vercel-args: '--pre'

      - name: Run smoke tests
        run: |
          curl -sf https://marketplace-git-develop.vercel.app/health || exit 1
          curl -sf https://marketplace-git-develop.vercel.app/ | grep -q "Marketplace" || exit 1

  # ============================================
  # Job 9: Deploiement Production
  # ============================================
  deploy-production:
    name: Deploy Production
    runs-on: ubuntu-latest
    needs: [build, lighthouse]
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    environment:
      name: production
      url: https://marketplace.com
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy to Vercel (Production)
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
          vercel-args: '--prod'

      - name: Run production smoke tests
        run: |
          sleep 30
          curl -sf https://marketplace.com/health || exit 1
          curl -sf https://marketplace.com/ | grep -q "Marketplace" || exit 1
          curl -sf https://marketplace.com/manifest.json || exit 1

      - name: Notify deployment
        if: success()
        run: |
          echo "Production deployment successful"
          echo "Version: $(node -p 'require(\"./package.json\").version')"

  # ============================================
  # Job 10: Post-deploiement
  # ============================================
  post-deploy:
    name: Post-Deploy Checks
    runs-on: ubuntu-latest
    needs: [deploy-production]
    steps:
      - name: Run E2E tests
        run: |
          echo "Running E2E tests against production..."
          # npx playwright test --config=playwright.config.prod.ts

      - name: Update Sentry release
        uses: getsentry/action-release@v1
        env:
          SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}
          SENTRY_ORG: ${{ secrets.SENTRY_ORG }}
          SENTRY_PROJECT: ${{ secrets.SENTRY_PROJECT }}
        with:
          version: ${{ github.sha }}
          environment: production
```

### 17.7.2 Configuration Lighthouse

**Fichier `.lighthouserc.json` :**

```json
{
  "ci": {
    "collect": {
      "startServerCommand": "npx serve dist -l 9000 -s",
      "startServerReadyPattern": "Accepting connections",
      "startServerTimeout": 30,
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["warn", { "minScore": 0.85 }],
        "categories:seo": ["warn", { "minScore": 0.9 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 200 }],
        "interactive": ["error", { "maxNumericValue": 3500 }]
      }
    },
    "upload": {
      "target": "lhci",
      "serverBaseUrl": "https://lhci.marketplace.com"
    }
  }
}
```

---

## 17.8 GitHub

### 17.8.1 Strategie de branching

Le projet adopte la strategie Git Flow, adaptee aux cycles de release du marketplace.

```
main -------------------------------------------------------->
  |                                                          ^
  |  v1.2.0                                        v1.3.0   |
  +---+-----------------------------------------------------++
  |                                                          |
  +-- develop -----------------------------------------------+
       |       |       |       |       |
       v       v       v       v       v
    feature/  feature/ feature/ feature/ feature/
    auth      search   cart    seller  admin
```

**Regles de branchement :**

| Branche | Description | Protection | Merge |
|---------|-------------|------------|-------|
| `main` | Code de production stabilise | PR obligatoire, 2 approbations, CI green | Merge commit uniquement |
| `develop` | Integration des features | PR obligatoire, 1 approbation, CI green | Squash & merge |
| `feature/*` | Developpement de fonctionnalites | Aucune protection | Squash & merge vers develop |
| `hotfix/*` | Corrections critiques de production | PR rapide, 1 approbation | Merge vers main + develop |
| `release/*` | Preparation d'une release | PR finale, 2 approbations | Merge vers main + develop |
| `bugfix/*` | Corrections de bugs non critiques | PR standard, 1 approbation | Squash & merge vers develop |

### 17.8.2 Releases et tags

**Convention de tagging :**

```
v<major>.<minor>.<patch>
```

| Type de changement | Exemple | Description |
|-------------------|---------|-------------|
| Nouvelle fonctionnalite majeure | `v2.0.0` | Breaking changes, nouvelle architecture |
| Nouvelle fonctionnalite | `v1.1.0` | Feature addition, retrocompatible |
| Correction de bug | `v1.1.1` | Bug fix, retrocompatible |
| Securite | `v1.1.2-security` | Patch de securite |
| Release candidate | `v2.0.0-rc.1` | Version de test pre-release |
| Alpha | `v2.0.0-alpha.1` | Version de test interne |
| Beta | `v2.0.0-beta.1` | Version de test externe |

**Template de release notes :**

```markdown
## Release v1.3.0

### Nouveautes
- Systeme de recherche avancee avec filtres multiples (#234)
- Multi-devises supporte (EUR, USD, GBP) (#256)
- Chat en temps reel entre acheteurs et vendeurs (#267)

### Ameliorations
- Performance de chargement des pages produits reduite de 40% (#245)
- Optimisation du bundle (-15KB gzip) (#251)
- Cache HTTP ameliore pour les assets statiques (#259)

### Corrections
- Correction du crash au checkout sur Safari (#238)
- Fix du formulaire d'inscription qui ne validait pas l'email (#241)
- Resolution du bug de scroll infini sur la page de recherche (#248)

### Securite
- Mise a jour des dependances critiques (#262)
- Renforcement du Content Security Policy (#265)

### Dependances mises a jour
- React 18.3.1 -> 18.3.2
- Tailwind CSS 4.0.0 -> 4.1.0
- DaisyUI 5.0.0 -> 5.0.5
- Vite 5.4.0 -> 5.4.5

### Breaking Changes
- Aucun

### Metriques
- Bundle size: 285KB gzip (-15KB)
- Lighthouse Score: 98 (+2)
- Test Coverage: 87% (+3%)
```

---

## 17.9 Monitoring

### 17.9.1 Sentry

**Configuration Sentry :**

```typescript
// src/config/sentry.ts
import * as Sentry from '@sentry/react';
import { env } from './env';

export function initSentry() {
  if (!env.VITE_SENTRY_DSN) return;

  Sentry.init({
    dsn: env.VITE_SENTRY_DSN,
    environment: env.VITE_APP_ENV,
    release: `marketplace-frontend@${env.VITE_APP_VERSION}`,

    // Performance Monitoring
    tracesSampleRate: Number(env.VITE_SENTRY_TRACES_SAMPLE_RATE) || 0.1,

    // Session Replay
    replaysSessionSampleRate: Number(env.VITE_SENTRY_REPLAYS_SAMPLE_RATE) || 0.1,
    replaysOnErrorSampleRate: 1.0,

    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
      Sentry.browserProfilingIntegration(),
    ],

    // Filtrage des erreurs
    beforeSend(event) {
      // Filtrer les erreurs de navigateur connues
      if (event.exception?.values?.[0]?.type === 'ResizeObserver loop') {
        return null;
      }
      // Filtrer les erreurs de chunk loading (navigation SPA)
      if (event.message?.includes('Loading chunk')) {
        return null;
      }
      return event;
    },

    // Tags par defaut
    tags: {
      app: 'marketplace-frontend',
      version: env.VITE_APP_VERSION,
    },

    // Ignore les erreurs de performance connues
    ignoreTransactions: [
      '/api/health',
      '/favicon.ico',
    ],
  });
}
```

**Integration dans le point d'entree :**

```typescript
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initSentry } from './config/sentry';
import './index.css';

initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### 17.9.2 Analytics

**Configuration Google Analytics 4 :**

```typescript
// src/config/analytics.ts
import { env } from './env';

// Types
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PurchaseEvent {
  transactionId: string;
  value: number;
  currency: string;
  items: Array<{
    itemId: string;
    itemName: string;
    price: number;
    quantity: number;
  }>;
}

// Initialisation
export function initAnalytics() {
  if (!env.VITE_GA_MEASUREMENT_ID) return;
  if (env.VITE_APP_ENV !== 'production') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', env.VITE_GA_MEASUREMENT_ID, {
    send_page_view: false,
    cookie_flags: 'SameSite=None;Secure',
  });

  window.gtag = gtag;
}

// Evenements personnalises
export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (!window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackPageView(path: string, title: string) {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  });
}

export function trackPurchase(event: PurchaseEvent) {
  if (!window.gtag) return;
  window.gtag('event', 'purchase', {
    transaction_id: event.transactionId,
    value: event.value,
    currency: event.currency,
    items: event.items,
  });
}

export function trackAddToCart(itemId: string, itemName: string, price: number, quantity: number) {
  if (!window.gtag) return;
  window.gtag('event', 'add_to_cart', {
    currency: 'USD',
    value: price * quantity,
    items: [{ item_id: itemId, item_name: itemName, price, quantity }],
  });
}

// Declaration des types globaux
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
```

### 17.9.3 Error Tracking personnalise

```typescript
// src/utils/errorTracker.ts
import * as Sentry from '@sentry/react';
import { env } from '../config/env';

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  additionalData?: Record<string, unknown>;
}

export function trackError(
  error: Error | unknown,
  severity: ErrorSeverity = ErrorSeverity.MEDIUM,
  context: ErrorContext = {}
) {
  const errorObj = error instanceof Error ? error : new Error(String(error));

  if (env.VITE_APP_ENV === 'development') {
    console.error(`[${severity.toUpperCase()}]`, errorObj, context);
  }

  if (env.VITE_APP_ENV === 'production' && env.VITE_SENTRY_DSN) {
    Sentry.withScope((scope) => {
      scope.setLevel(severity as Sentry.SeverityLevel);
      scope.setTag('component', context.component || 'unknown');
      scope.setTag('action', context.action || 'unknown');
      if (context.userId) {
        scope.setUser({ id: context.userId });
      }
      if (context.additionalData) {
        scope.setExtras(context.additionalData);
      }
      Sentry.captureException(errorObj);
    });
  }
}

export function trackMessage(
  message: string,
  severity: ErrorSeverity = ErrorSeverity.LOW
) {
  if (env.VITE_APP_ENV === 'development') {
    console.log(`[${severity}] ${message}`);
  }

  if (env.VITE_APP_ENV === 'production' && env.VITE_SENTRY_DSN) {
    Sentry.captureMessage(message, severity as Sentry.SeverityLevel);
  }
}
```

### 17.9.4 Metriques de performance

```typescript
// src/utils/performanceMonitor.ts
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
import { trackEvent } from '../config/analytics';

interface VitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

function sendToAnalytics(metric: VitalMetric) {
  trackEvent({
    action: metric.name,
    category: 'Web Vitals',
    label: metric.rating,
    value: Math.round(metric.value),
  });
}

export function initPerformanceMonitoring() {
  onCLS(sendToAnalytics);    // Cumulative Layout Shift
  onFID(sendToAnalytics);    // First Input Delay
  onFCP(sendToAnalytics);    // First Contentful Paint
  onLCP(sendToAnalytics);    // Largest Contentful Paint
  onTTFB(sendToAnalytics);   // Time to First Byte
}
```

---

## 17.10 Rollback Strategy

### 17.10.1 Strategie de rollback par plateforme

#### Vercel Rollback

```bash
# Rollback instantane vers le dernier deploiement precedent
vercel rollback

# Rollback vers un deploiement specifique par ID
vercel rollback <deployment-id>

# Rollback via l'interface Vercel
# Dashboard > Project > Deployments > [Deployment] > ... > Promote to Production
```

| Scenario | Action | Delai |
|----------|--------|-------|
| Bug critique en production | Rollback vers deploiement precedent | < 30 secondes |
| Erreur de build non detectee | Rollback + fix + redeploy | < 5 minutes |
| Probleme de config serveur | Vercel > Env Variables > Fix > Redeploy | < 2 minutes |
| Outage Vercel complet | Basculer sur Netlify (failover) | < 10 minutes |

#### Docker Rollback

```bash
# Identifier le dernier build fonctionnel
docker images marketplace-frontend

# Rollback vers une version specifique
docker stop marketplace-frontend
docker rm marketplace-frontend
docker run -d \
  --name marketplace-frontend \
  -p 3000:3000 \
  marketplace-frontend:1.2.0

# Avec Docker Compose
# Modifier le tag dans docker-compose.yml
docker-compose up -d --no-deps frontend
```

### 17.10.2 Plan de rollback detaille

| Etape | Action | Responsable | Delai max |
|-------|--------|-------------|-----------|
| 1 | Detecter l'anomalie (alertes, monitoring) | DevOps / SRE | 2 min |
| 2 | Evaluer l'impact (nombre d'utilisateurs affectes) | Tech Lead | 3 min |
| 3 | Decider du rollback (go/no-go) | Tech Lead + Product | 5 min |
| 4 | Executer le rollback | DevOps | 2 min |
| 5 | Verifier la stabilite post-rollback | QA / DevOps | 5 min |
| 6 | Communiquer aux parties prenantes | Product / Comms | 10 min |
| 7 | Analyser la cause racine | Tech Lead | 24h |
| 8 | Implementer le fix | Developpeurs | Variable |
| 9 | Redeployer le fix | DevOps | Variable |

### 17.10.3 Feature Flags

Pour eviter les rollbacks complets, les features risquees sont activees via des feature flags :

```typescript
// src/config/features.ts
import { env } from './env';

interface FeatureFlags {
  MULTI_CURRENCY: boolean;
  ADVANCED_SEARCH: boolean;
  CHAT_ENABLED: boolean;
  NOTIFICATIONS_PUSH: boolean;
  NEW_CHECKOUT_FLOW: boolean;
  SELLER_ANALYTICS_V2: boolean;
  MAINTENANCE_MODE: boolean;
}

export const features: FeatureFlags = {
  MULTI_CURRENCY: env.VITE_ENABLE_MULTI_CURRENCY === 'true',
  ADVANCED_SEARCH: true,
  CHAT_ENABLED: env.VITE_ENABLE_CHAT === 'true',
  NOTIFICATIONS_PUSH: env.VITE_ENABLE_NOTIFICATIONS === 'true',
  NEW_CHECKOUT_FLOW: env.VITE_APP_ENV !== 'production',
  SELLER_ANALYTICS_V2: false,
  MAINTENANCE_MODE: env.VITE_MAINTENANCE_MODE === 'true',
};

// Hook React pour verifier une feature
export function useFeature(feature: keyof FeatureFlags): boolean {
  return features[feature];
}
```



# CHAPITRE 18 : Roadmap completee

---

## 18.1 Methodologie Agile/Scrum

### 18.1.1 Cadre methodologique

Le projet Marketplace suit la methodologie **Scrum** avec des adaptations Kanban pour les taches de maintenance et de support. Le choix de Scrum est justifie par la nature iterative du developpement frontend, la necessite de feedback regulier et la complexite croissante des fonctionnalites.

**Principes directeurs :**

| Principe | Application concrete |
|----------|---------------------|
| Transparence | Tableau Kanban partage, daily standups, demos de sprint |
| Inspection | Revue de sprint, retrospective, revue de code |
| Adaptation | Ajustement du backlog apres chaque sprint, priorisation continue |
| Iteration | Sprints de 2 semaines, livrables incrementaux a chaque fin de sprint |
| Timeboxing | Cadences strictes, pas de depassement de sprint |
| Valeur metier | Priorisation par la valeur utilisateur, MVP avant perfection |

### 18.1.2 Cadences et ceremonies

| Ceremonie | Frequence | Duree | Participants | Objectif |
|-----------|-----------|-------|-------------|----------|
| Sprint Planning | Debut de sprint | 2-4h | Equipe complete | Planifier le contenu du sprint |
| Daily Standup | Quotidien | 15 min | Equipe complete | Synchronisation et blocages |
| Sprint Review | Fin de sprint | 1-2h | Equipe + stakeholders | Demontrer l'incrementation |
| Sprint Retrospective | Fin de sprint | 1-1.5h | Equipe technique | Amelioration continue |
| Backlog Refinement | Mi-sprint | 1-2h | PO + Tech Lead | Estimer et detailler les stories |
| Tech Talk | Hebdomadaire | 30-45 min | Equipe technique | Partage de connaissances |

### 18.1.3 Outils Scrum

| Outil | Usage |
|-------|-------|
| Jira / Linear | Gestion du backlog, sprints, sprints boards |
| GitHub Projects | Suivi des issues et PRs liees |
| Figma | Maquettes et prototypes UI |
| Miro | Retrospectives, brainstorming, diagrammes |
| Slack / Teams | Communication quotidienne, notifications CI/CD |
| Notion / Confluence | Documentation, decisions techniques, ADR |

---

## 18.2 Equipe recommandee

### 18.2.1 Composition de l'equipe

| Role | Nombre | Responsabilites principales |
|------|--------|---------------------------|
| **Tech Lead / Architecte Frontend** | 1 | Architecture technique, revue de code, decisions techniques, mentorat |
| **Developpeur Senior Frontend** | 2 | Developpement des fonctionnalites critiques, optimisation performance, code review |
| **Developpeur Mid Frontend** | 2-3 | Developpement de features, tests, documentation |
| **Developpeur Junior Frontend** | 1-2 | Taches simples, bug fixes, apprentissage |
| **UI/UX Designer** | 1 | Maquettes, prototypes, design system, accessibilite |
| **Product Owner** | 1 | Backlog, priorisation, stakeholder management, specifications metier |
| **Scrum Master / Agile Coach** | 1 (partage) | Facilitation, coaching, resolution d'impediments |
| **QA Engineer** | 1 | Tests manuels, automation, plan de test |
| **DevOps** | 1 (partage) | CI/CD, infrastructure, monitoring, deploiement |

**Taille totale recommandee :** 9-12 personnes

### 18.2.2 Matrice des competences

| Competence | Senior Dev 1 | Senior Dev 2 | Mid Dev 1 | Mid Dev 2 | Mid Dev 3 |
|------------|:---:|:---:|:---:|:---:|:---:|
| React / Hooks | Expert | Expert | Confirme | Confirme | Intermediaire |
| TypeScript | Expert | Expert | Confirme | Intermediaire | Intermediaire |
| Tailwind CSS / DaisyUI | Expert | Confirme | Confirme | Confirme | Intermediaire |
| State Management (Zustand) | Expert | Confirme | Intermediaire | Intermediaire | Basique |
| API Integration (REST) | Expert | Expert | Confirme | Confirme | Intermediaire |
| Testing (Vitest, Testing Library) | Confirme | Expert | Intermediaire | Intermediaire | Basique |
| Performance Optimization | Expert | Confirme | Basique | Basique | Basique |
| Accessibilite (WCAG) | Confirme | Confirme | Intermediaire | Basique | Basique |
| CI/CD & DevOps | Confirme | Intermediaire | Basique | Basique | Basique |
| Design System | Expert | Confirme | Intermediaire | Basique | Basique |

### 18.2.3 RACI

| Activite | Tech Lead | Senior Dev | Mid Dev | UI/UX | PO | QA | DevOps |
|----------|:---------:|:----------:|:-------:|:-----:|:--:|:--:|:------:|
| Architecture technique | **R/A** | C | I | C | I | I | C |
| Developpement features | A | **R** | **R** | C | I | I | I |
| Design UI/UX | C | C | I | **R/A** | A | I | I |
| Code Review | **R** | **R** | I | I | I | I | I |
| Tests | C | C | C | I | I | **R/A** | I |
| Deploiement | C | I | I | I | I | I | **R/A** |
| Priorisation backlog | C | C | I | C | **R/A** | C | I |
| Documentation | C | **R** | **R** | I | I | I | I |
| Monitoring | C | I | I | I | I | C | **R/A** |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 18.3 Sprint Planning

### 18.3.1 Structure d'un sprint

| Element | Detail |
|---------|--------|
| Duree du sprint | 2 semaines (10 jours ouvres) |
| Capacity par personne | ~6h/jour de dev (hors meetings) = ~60h/personne/sprint |
| Sprint start | Lundi matin |
| Sprint end | Vendredi apres-midi |
| Point de commitment | Apres Sprint Planning (Lundi) |
| Point de No-Return | Mardi de la 2eme semaine (pour les features) |

### 18.3.2 Estimation en Story Points

Le projet utilise l'echelle **Fibonacci modifiee** pour l'estimation des user stories :

| Points | Complexite | Temps estime | Description |
|--------|-----------|-------------|-------------|
| 1 | Tres simple | 0.5-1h | Tache triviale, configuration, typo |
| 2 | Simple | 1-3h | Composant simple, modification isolee |
| 3 | Moyen | 3-6h | Fonctionnalite standard avec logique metier |
| 5 | Complexe | 1-2 jours | Integration API, logique metier avancee |
| 8 | Tres complexe | 2-3 jours | Systeme multi-composants, state management complexe |
| 13 | Extra-complexe | 3-5 jours | Fonctionnalite majeure, architecture nouvelle |
| 21 | Epique | 1+ sprint | A decomposer en sous-stories |
| ? | Inconnu | -- | A affiner lors du backlog refinement |

### 18.3.3 Velocity tracking

La velocite de l'equipe est mesuree en **story points completes par sprint**. Les objectifs initiaux sont a ajuster apres les 3 premiers sprints.

**Objectifs de velocite :**

| Phase | Sprint | Objectif velocite | Justification |
|-------|--------|-------------------|---------------|
| Formation | S0-S1 | 25-35 points | Montee en competences, setup |
| Croissance | S2-S4 | 40-55 points | Equipe rodee, patterns etablis |
| Stabilisation | S5-S8 | 55-70 points | Pleine capacite |
| Optimisation | S9-S12 | 60-75 points | Excellence technique |

**Format du burndown chart :**

```
Story Points
70 |##
65 |## ##
60 |## ## ##
55 |## ## ## ##
50 |## ## ## ## ##
45 |## ## ## ## ## ##
40 |## ## ## ## ## ## ##
35 |## ## ## ## ## ## ## ##
30 |## ## ## ## ## ## ## ## ##
25 |## ## ## ## ## ## ## ## ## ##
20 |## ## ## ## ## ## ## ## ## ##
15 |## ## ## ## ## ## ## ## ## ##
10 |## ## ## ## ## ## ## ## ## ##
 5 |## ## ## ## ## ## ## ## ## ##
 0 |__ __ __ __ __ __ __ __ __ __
   D1 D2 D3 D4 D5 D6 D7 D8 D9 D10
   ---------------------------------
   Ideal burndown - - - - - - - - -
   Actual burndown ==============
```

Le burndown ideal est une ligne droite descendant de la velocite totale du sprint a zero sur 10 jours ouvres. Les ecarts significatifs declenchent des actions correctives lors du daily standup.

---

## 18.4 Detail par Sprint

### Sprint 0 -- Foundation (Semaines 1-2)

**Objectif :** Mettre en place les fondations techniques, l'architecture, le CI/CD et le design system de base.

**Story Points estimes : 35**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S0-01 | En tant que developpeur, je veux initialiser le projet Vite + React + TypeScript | Must | 3 | Senior Dev 1 |
| S0-02 | En tant que developpeur, je veux configurer Tailwind CSS v4 et DaisyUI v5 | Must | 2 | Senior Dev 1 |
| S0-03 | En tant que developpeur, je veux mettre en place ESLint + Prettier avec les regles du projet | Must | 2 | Senior Dev 2 |
| S0-04 | En tant que developpeur, je veux creer la structure de dossiers du projet | Must | 3 | Senior Dev 1 |
| S0-05 | En tant que developpeur, je veux configurer le routeur React Router v6 | Must | 3 | Senior Dev 2 |
| S0-06 | En tant que developpeur, je veux mettre en place le client HTTP (Axios) avec intercepteurs | Must | 5 | Senior Dev 2 |
| S0-07 | En tant que developpeur, je veux configurer le store Zustand (auth, cart, UI) | Must | 3 | Senior Dev 1 |
| S0-08 | En tant que developpeur, je veux creer le design system de base (Button, Input, Card, Modal) | Must | 5 | Mid Dev 1 |
| S0-09 | En tant que DevOps, je veux configurer GitHub Actions (lint, typecheck, test) | Must | 3 | DevOps |
| S0-10 | En tant que developpeur, je veux configurer les variables d'environnement | Must | 2 | Mid Dev 2 |
| S0-11 | En tant que developpeur, je veux configurer Vitest + React Testing Library | Must | 2 | Mid Dev 2 |
| S0-12 | En tant que developpeur, je veux creer le layout principal (header, footer, sidebar) | Must | 5 | Mid Dev 1 |

**Livrables :**
- Projet initialise avec Vite, React, TypeScript
- Design system avec 10+ composants de base
- Structure de dossiers etablie
- CI/CD fonctionnel
- Routing de base configure
- Client HTTP pret

---

### Sprint 1 -- Authentification (Semaines 3-4)

**Objectif :** Implementer le systeme complet d'authentification : inscription, connexion, profil, gestion JWT.

**Story Points estimes : 50**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S1-01 | En tant qu'utilisateur, je veux m'inscrire avec email/mot de passe | Must | 5 | Mid Dev 1 |
| S1-02 | En tant qu'utilisateur, je veux me connecter avec email/mot de passe | Must | 3 | Mid Dev 1 |
| S1-03 | En tant qu'utilisateur, je veux me connecter avec Google OAuth | Should | 5 | Mid Dev 2 |
| S1-04 | En tant qu'utilisateur, je veux recevoir un email de verification | Must | 3 | Senior Dev 2 |
| S1-05 | En tant qu'utilisateur, je veux reinitialiser mon mot de passe | Must | 3 | Mid Dev 2 |
| S1-06 | En tant que developpeur, je veux implementer le flux JWT (access + refresh tokens) | Must | 8 | Senior Dev 2 |
| S1-07 | En tant qu'utilisateur, je veux gerer mon profil (avatar, bio, infos personnelles) | Must | 5 | Mid Dev 1 |
| S1-08 | En tant qu'utilisateur, je veux modifier mes parametres de securite (mot de passe, 2FA) | Should | 5 | Mid Dev 2 |
| S1-09 | En tant que developpeur, je veux creer les pages d'auth (login, register, forgot-password) | Must | 5 | Senior Dev 1 |
| S1-10 | En tant que developpeur, je veux implementer la protection des routes (auth guard) | Must | 3 | Senior Dev 1 |
| S1-11 | En tant qu'utilisateur, je veux gerer mes notifications par email | Could | 3 | Mid Dev 3 |
| S1-12 | En tant que developpeur, je veux ecrire les tests pour le module auth | Must | 3 | QA Engineer |

**Livrables :**
- Pages d'inscription et de connexion fonctionnelles
- Systeme JWT complet (access + refresh tokens)
- Page de profil utilisateur
- Mot de passe oublie / reinitialisation
- Auth guards sur les routes protegees
- Couverture de tests > 80% pour le module auth

---

### Sprint 2 -- Navigation Produits (Semaines 5-6)

**Objectif :** Permettre aux utilisateurs de naviguer, rechercher et filtrer les produits.

**Story Points estimes : 55**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S2-01 | En tant qu'acheteur, je veux voir la page d'accueil avec les produits en vedette | Must | 5 | Mid Dev 1 |
| S2-02 | En tant qu'acheteur, je veux parcourir la liste des produits avec pagination | Must | 5 | Senior Dev 2 |
| S2-03 | En tant qu'acheteur, je veux voir le detail d'un produit | Must | 5 | Mid Dev 1 |
| S2-04 | En tant qu'acheteur, je veux naviguer par categories et sous-categories | Must | 3 | Mid Dev 2 |
| S2-05 | En tant qu'acheteur, je veux filtrer les produits (prix, marque, note, taille) | Must | 5 | Senior Dev 2 |
| S2-06 | En tant qu'acheteur, je veux trier les produits (prix, popularite, date, note) | Must | 3 | Mid Dev 2 |
| S2-07 | En tant qu'acheteur, je veux rechercher des produits par mot-cle | Must | 5 | Senior Dev 1 |
| S2-08 | En tant qu'acheteur, je veux voir des suggestions de recherche en temps reel | Should | 5 | Senior Dev 1 |
| S2-09 | En tant qu'acheteur, je veux voir les images du produit en galerie | Must | 3 | Mid Dev 3 |
| S2-10 | En tant qu'acheteur, je veux voir les informations du vendeur sur la page produit | Must | 3 | Mid Dev 3 |
| S2-11 | En tant qu'acheteur, je veux voir les produits similaires | Should | 3 | Mid Dev 2 |
| S2-12 | En tant qu'acheteur, je veux utiliser les filtres URL (partageable, bookmarkable) | Must | 3 | Senior Dev 2 |
| S2-13 | En tant que developpeur, je veux implementer le lazy loading des images | Must | 3 | Mid Dev 1 |
| S2-14 | En tant que developpeur, je veux optimiser les performances de listing | Must | 3 | Senior Dev 1 |
| S2-15 | En tant que QA, je veux ecrire les tests E2E pour la navigation produits | Must | 3 | QA Engineer |

**Livrables :**
- Page d'accueil dynamique
- Catalogue de produits avec pagination infinie
- Page detail produit complete
- Systeme de filtres et tri avance
- Recherche avec autosuggest
- Lazy loading des images
- Tests E2E du parcours acheteur

---

### Sprint 3 -- Panier et Checkout (Semaines 7-8)

**Objectif :** Implementer le processus d'achat complet : panier, checkout et paiement Stripe.

**Story Points estimes : 60**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S3-01 | En tant qu'acheteur, je veux ajouter des produits a mon panier | Must | 3 | Mid Dev 1 |
| S3-02 | En tant qu'acheteur, je veux modifier les quantites dans le panier | Must | 2 | Mid Dev 1 |
| S3-03 | En tant qu'acheteur, je veux supprimer des produits du panier | Must | 2 | Mid Dev 1 |
| S3-04 | En tant qu'acheteur, je veux voir mon panier persistant (localStorage + API) | Must | 5 | Senior Dev 2 |
| S3-05 | En tant qu'acheteur, je veux voir le recapitulatif du panier (sous-total, taxes, total) | Must | 3 | Mid Dev 1 |
| S3-06 | En tant qu'acheteur, je veux passer au checkout (adresse de livraison) | Must | 5 | Mid Dev 2 |
| S3-07 | En tant qu'acheteur, je veux selectionner un mode de livraison | Must | 5 | Mid Dev 2 |
| S3-08 | En tant qu'acheteur, je veux payer avec Stripe (CB, Apple Pay, Google Pay) | Must | 8 | Senior Dev 2 |
| S3-09 | En tant qu'acheteur, je veux recevoir une confirmation de commande par email | Must | 3 | Mid Dev 3 |
| S3-10 | En tant qu'acheteur, je veux voir un recapitulatif de commande apres paiement | Must | 3 | Mid Dev 3 |
| S3-11 | En tant qu'acheteur, je veux utiliser un code promo | Should | 5 | Mid Dev 2 |
| S3-12 | En tant que developpeur, je veux implementer la validation cote client (Zod) | Must | 3 | Senior Dev 1 |
| S3-13 | En tant que developpeur, je veux gerer les erreurs de paiement gracieusement | Must | 3 | Senior Dev 1 |
| S3-14 | En tant que developpeur, je veux securiser le checkout (PCI compliance via Stripe) | Must | 5 | Senior Dev 2 |
| S3-15 | En tant que QA, je veux tester le flux complet d'achat | Must | 3 | QA Engineer |

**Livrables :**
- Panier fonctionnel (ajout, modification, suppression)
- Checkout en 3 etapes (adresse > livraison > paiement)
- Integration Stripe (CB, Apple Pay, Google Pay)
- Confirmation de commande
- Gestion des erreurs de paiement
- Validation de formulaire avec Zod

---

### Sprint 4 -- Commandes et Profil (Semaines 9-10)

**Objectif :** Gestion des commandes (historique, detail, suivi) et du profil utilisateur avance.

**Story Points estimes : 50**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S4-01 | En tant qu'acheteur, je veux voir l'historique de mes commandes | Must | 5 | Mid Dev 1 |
| S4-02 | En tant qu'acheteur, je veux voir les details d'une commande | Must | 3 | Mid Dev 1 |
| S4-03 | En tant qu'acheteur, je veux suivre le statut de ma commande | Must | 5 | Senior Dev 2 |
| S4-04 | En tant qu'acheteur, je veux annuler une commande (si eligible) | Should | 5 | Mid Dev 2 |
| S4-05 | En tant qu'acheteur, je veux demander un retour/remboursement | Should | 5 | Mid Dev 2 |
| S4-06 | En tant qu'acheteur, je veux gerer mes adresses de livraison | Must | 3 | Mid Dev 1 |
| S4-07 | En tant qu'acheteur, je veux telecharger mes factures PDF | Should | 5 | Senior Dev 2 |
| S4-08 | En tant qu'utilisateur, je veux gerer mes methodes de paiement | Must | 5 | Senior Dev 1 |
| S4-09 | En tant qu'utilisateur, je veux gerer mes preferences de notification | Should | 3 | Mid Dev 3 |
| S4-10 | En tant qu'utilisateur, je veux gerer mes abonnements newsletter | Could | 2 | Mid Dev 3 |
| S4-11 | En tant que developpeur, je veux creer les composants de statut de commande | Must | 3 | Senior Dev 1 |
| S4-12 | En tant que QA, je veux tester le flux complet de gestion de commande | Must | 3 | QA Engineer |
| S4-13 | En tant que developpeur, je veux implementer la page "Mes factures" | Should | 3 | Mid Dev 3 |

**Livrables :**
- Page historique des commandes
- Details de commande avec suivi en temps reel
- Gestion des annulations et retours
- Gestion des adresses de livraison
- Telechargement de factures PDF
- Gestion des methodes de paiement

---

### Sprint 5 -- Seller Core (Semaines 11-12)

**Objectif :** Creer l'espace vendeur : creation de boutique, CRUD produits, gestion des images.

**Story Points estimes : 65**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S5-01 | En tant que vendeur, je veux creer ma boutique (nom, description, logo, banniere) | Must | 8 | Senior Dev 1 |
| S5-02 | En tant que vendeur, je veux configurer les parametres de ma boutique | Must | 5 | Mid Dev 1 |
| S5-03 | En tant que vendeur, je veux ajouter un produit (toutes informations) | Must | 8 | Senior Dev 2 |
| S5-04 | En tant que vendeur, je veux gerer les variantes de produits (taille, couleur) | Must | 8 | Senior Dev 2 |
| S5-05 | En tant que vendeur, je veux telecharger/modifier/supprimer des images produit | Must | 5 | Mid Dev 2 |
| S5-06 | En tant que vendeur, je veux definir les prix et le stock | Must | 3 | Mid Dev 1 |
| S5-07 | En tant que vendeur, je veux gerer les categories et tags de mes produits | Must | 3 | Mid Dev 2 |
| S5-08 | En tant que vendeur, je veux dupliquer un produit existant | Should | 3 | Mid Dev 3 |
| S5-09 | En tant que vendeur, je veux activer/desactiver mes produits | Must | 2 | Mid Dev 3 |
| S5-10 | En tant que vendeur, je veux voir un apercu de mon produit avant publication | Should | 3 | Mid Dev 1 |
| S5-11 | En tant que developpeur, je veux integrer Cloudinary pour les images | Must | 5 | Senior Dev 1 |
| S5-12 | En tant que developpeur, je veux creer le dashboard vendeur | Must | 5 | Mid Dev 2 |
| S5-13 | En tant que QA, je veux tester le flux complet de creation de produit | Must | 3 | QA Engineer |
| S5-14 | En tant que developpeur, je veux gerer la validation des formulaires vendeur | Must | 3 | Senior Dev 2 |
| S5-15 | En tant que developpeur, je veux implementer l'upload drag & drop | Should | 3 | Mid Dev 3 |

**Livrables :**
- Espace vendeur complet avec dashboard
- Creation et configuration de boutique
- CRUD produits avec variantes
- Upload d'images Cloudinary (drag & drop)
- Gestion du stock et des prix
- Previsualisation avant publication

---

### Sprint 6 -- Seller Management (Semaines 13-14)

**Objectif :** Gestion avancee pour les vendeurs : commandes, inventaire, analytics.

**Story Points estimes : 55**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S6-01 | En tant que vendeur, je veux voir les commandes recues | Must | 5 | Mid Dev 1 |
| S6-02 | En tant que vendeur, je veux traiter/expedier une commande | Must | 5 | Mid Dev 1 |
| S6-03 | En tant que vendeur, je veux mettre a jour le numero de suivi | Must | 3 | Mid Dev 2 |
| S6-04 | En tant que vendeur, je veux gerer mon inventaire (stock, alertes) | Must | 5 | Senior Dev 2 |
| S6-05 | En tant que vendeur, je veux voir mon tableau de bord analytics (ventes, revenus) | Must | 8 | Senior Dev 1 |
| S6-06 | En tant que vendeur, je veux voir les tendances de vente (graphiques) | Should | 5 | Mid Dev 2 |
| S6-07 | En tant que vendeur, je veux exporter mes donnees de vente (CSV) | Should | 3 | Mid Dev 3 |
| S6-08 | En tant que vendeur, je veux gerer les retours/remboursements | Must | 5 | Senior Dev 2 |
| S6-09 | En tant que vendeur, je veux voir les avis sur mes produits | Must | 3 | Mid Dev 1 |
| S6-10 | En tant que vendeur, je veux repondre aux avis clients | Should | 3 | Mid Dev 3 |
| S6-11 | En tant que developpeur, je veux creer les graphiques analytics (Recharts) | Must | 5 | Senior Dev 1 |
| S6-12 | En tant que developpeur, je veux optimiser les requetes de dashboard | Must | 3 | Senior Dev 2 |
| S6-13 | En tant que QA, je veux tester le flux complet vendeur | Must | 2 | QA Engineer |

**Livrables :**
- Dashboard vendeur avec analytics
- Gestion des commandes (traitement, expedition, suivi)
- Gestion d'inventaire avec alertes
- Systeme de graphiques de ventes
- Gestion des retours/remboursements
- Export CSV des donnees

---

### Sprint 7 -- Messagerie et Notifications (Semaines 15-16)

**Objectif :** Systeme de chat en temps reel entre acheteurs/vendeurs et systeme de notifications.

**Story Points estimes : 55**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S7-01 | En tant qu'utilisateur, je veux envoyer un message a un vendeur | Must | 8 | Senior Dev 1 |
| S7-02 | En tant que vendeur, je veux repondre aux messages des acheteurs | Must | 5 | Mid Dev 1 |
| S7-03 | En tant qu'utilisateur, je veux voir la liste de mes conversations | Must | 5 | Mid Dev 2 |
| S7-04 | En tant qu'utilisateur, je veux recevoir les messages en temps reel (WebSocket) | Must | 8 | Senior Dev 1 |
| S7-05 | En tant qu'utilisateur, je veux recevoir des notifications (commande, message, promo) | Must | 5 | Senior Dev 2 |
| S7-06 | En tant qu'utilisateur, je veux gerer mes preferences de notification | Should | 3 | Mid Dev 2 |
| S7-07 | En tant qu'utilisateur, je veux voir le badge de notifications non lues | Must | 3 | Mid Dev 1 |
| S7-08 | En tant que developpeur, je veux implementer le WebSocket (Socket.io) | Must | 8 | Senior Dev 1 |
| S7-09 | En tant que developpeur, je veux gerer la reconnexion automatique | Must | 3 | Senior Dev 2 |
| S7-10 | En tant que developpeur, je veux implementer les notifications push (navigateur) | Should | 5 | Mid Dev 3 |
| S7-11 | En tant qu'utilisateur, je veux marquer les notifications comme lues | Must | 2 | Mid Dev 3 |
| S7-12 | En tant que developpeur, je veux creer le composant de notification toast | Must | 3 | Mid Dev 1 |

**Livrables :**
- Systeme de chat en temps reel (WebSocket)
- Interface de conversation avec historique
- Systeme de notifications (in-app + push)
- Gestion des preferences de notification
- Badge de notifications non lues
- Notifications toast

---

### Sprint 8 -- Avis et Favoris (Semaines 17-18)

**Objectif :** Systeme d'evaluation/avis et fonctionnalites sociales (favoris, listes d'envies).

**Story Points estimes : 45**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S8-01 | En tant qu'acheteur, je veux laisser un avis sur un produit (note + commentaire) | Must | 5 | Mid Dev 1 |
| S8-02 | En tant qu'acheteur, je veux modifier/supprimer mon avis | Must | 3 | Mid Dev 1 |
| S8-03 | En tant qu'acheteur, je veux voir les avis d'autres utilisateurs | Must | 3 | Mid Dev 2 |
| S8-04 | En tant qu'acheteur, je veux filtrer/trier les avis | Should | 3 | Mid Dev 2 |
| S8-05 | En tant qu'acheteur, je veux noter les avis utiles (upvote) | Could | 3 | Mid Dev 3 |
| S8-06 | En tant qu'acheteur, je veux ajouter un produit a mes favoris | Must | 3 | Mid Dev 1 |
| S8-07 | En tant qu'acheteur, je veux voir ma liste de favoris | Must | 3 | Mid Dev 2 |
| S8-08 | En tant qu'acheteur, je veux creer des listes d'envies personnalisees | Should | 5 | Mid Dev 3 |
| S8-09 | En tant qu'acheteur, je veux partager un produit (lien, reseaux sociaux) | Should | 3 | Mid Dev 3 |
| S8-10 | En tant que developpeur, je veux calculer la note moyenne en temps reel | Must | 3 | Senior Dev 2 |
| S8-11 | En tant que developpeur, je veux implementer le systeme d'anti-spam pour les avis | Must | 5 | Senior Dev 1 |
| S8-12 | En tant que developpeur, je veux creer les composants StarRating, ReviewCard | Must | 3 | Senior Dev 2 |
| S8-13 | En tant que QA, je veux tester le systeme d'avis | Must | 2 | QA Engineer |
| S8-14 | En tant que developpeur, je veux optimiser les appels API favoris (cache) | Should | 3 | Senior Dev 1 |

**Livrables :**
- Systeme d'avis avec notes et commentaires
- Anti-spam et moderation des avis
- Systeme de favoris / listes d'envies
- Partage de produits
- Composants StarRating et ReviewCard
- Calcul de note moyen en temps reel

---

### Sprint 9 -- Admin Dashboard (Semaines 19-20)

**Objectif :** Creer le tableau de bord administrateur pour la gestion de la plateforme.

**Story Points estimes : 60**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S9-01 | En tant qu'admin, je veux voir le dashboard principal (KPIs) | Must | 5 | Senior Dev 1 |
| S9-02 | En tant qu'admin, je veux gerer les utilisateurs (voir, suspendre, bannir) | Must | 5 | Mid Dev 1 |
| S9-03 | En tant qu'admin, je veux gerer les vendeurs (approuver, suspendre) | Must | 5 | Mid Dev 1 |
| S9-04 | En tant qu'admin, je veux moderer les produits (approuver, rejeter) | Must | 5 | Mid Dev 2 |
| S9-05 | En tant qu'admin, je veux moderer les avis (supprimer, signaler) | Must | 3 | Mid Dev 2 |
| S9-06 | En tant qu'admin, je veux gerer les categories de produits | Must | 3 | Mid Dev 3 |
| S9-07 | En tant qu'admin, je veux voir les statistiques de la plateforme | Must | 8 | Senior Dev 1 |
| S9-08 | En tant qu'admin, je veux gerer les litiges (reclamations) | Must | 5 | Mid Dev 2 |
| S9-09 | En tant qu'admin, je veux gerer les promotions et codes promo | Should | 5 | Senior Dev 2 |
| S9-10 | En tant qu'admin, je veux gerer les parametres de la plateforme | Should | 5 | Mid Dev 1 |
| S9-11 | En tant qu'admin, je veux voir les logs d'activite | Should | 3 | Mid Dev 3 |
| S9-12 | En tant que developpeur, je veux creer le composant DataTable reutilisable | Must | 5 | Senior Dev 2 |
| S9-13 | En tant que developpeur, je veux proteger les routes admin (RBAC) | Must | 3 | Senior Dev 1 |
| S9-14 | En tant que QA, je veux tester les permissions admin | Must | 2 | QA Engineer |

**Livrables :**
- Dashboard admin avec KPIs en temps reel
- Gestion des utilisateurs et vendeurs
- Moderation des produits et avis
- Gestion des categories
- Systeme de litiges
- Composant DataTable reutilisable
- Controle d'acces base sur les roles (RBAC)

---

### Sprint 10 -- Avance (Semaines 21-22)

**Objectif :** Multi-devises, internationalisation (i18n), recherche avancee.

**Story Points estimes : 50**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S10-01 | En tant qu'utilisateur, je veux changer la langue de l'interface | Must | 5 | Mid Dev 1 |
| S10-02 | En tant qu'utilisateur, je veux changer la devise d'affichage | Must | 5 | Mid Dev 2 |
| S10-03 | En tant que developpeur, je veux implementer react-i18next | Must | 5 | Senior Dev 2 |
| S10-04 | En tant que developpeur, je veux traduire les contenus en FR, EN, ES, DE, AR, ZH | Must | 8 | Mid Dev 1 + Mid Dev 2 |
| S10-05 | En tant que developpeur, je veux gerer le RTL pour l'arabe | Must | 5 | Senior Dev 1 |
| S10-06 | En tant qu'acheteur, je veux une recherche avancee (facettes, filtres composites) | Must | 8 | Senior Dev 2 |
| S10-07 | En tant qu'acheteur, je veux une recherche par image | Could | 8 | Senior Dev 1 |
| S10-08 | En tant qu'utilisateur, je veux une URL localisee (/fr/products, /en/products) | Must | 3 | Mid Dev 3 |
| S10-09 | En tant que developpeur, je veux detecter automatiquement la langue du navigateur | Should | 2 | Mid Dev 3 |
| S10-10 | En tant que developpeur, je veux gerer les fuseaux horaires | Should | 3 | Senior Dev 2 |
| S10-11 | En tant que developpeur, je veux creer les fichiers de traduction | Must | 3 | Mid Dev 3 |

**Livrables :**
- Internationalisation completee (6 langues)
- Support RTL (arabe)
- Multi-devises avec taux de change
- Recherche avancee avec facettes
- URLs localisees
- Detection automatique de la langue

---

### Sprint 11 -- Optimisation (Semaines 23-24)

**Objectif :** Performance, PWA, cache, tests end-to-end.

**Story Points estimes : 50**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S11-01 | En tant que developpeur, je veux optimiser le score Lighthouse > 95 | Must | 5 | Senior Dev 1 |
| S11-02 | En tant que developpeur, je veux implementer le service worker (PWA) | Must | 5 | Senior Dev 2 |
| S11-03 | En tant qu'utilisateur, je veux une experience hors ligne partielle | Should | 5 | Senior Dev 2 |
| S11-04 | En tant que developpeur, je veux optimiser le cache HTTP | Must | 3 | Senior Dev 1 |
| S11-05 | En tant que developpeur, je veux implementer le virtual scrolling pour les listes | Should | 5 | Mid Dev 1 |
| S11-06 | En tant que developpeur, je veux reduire le bundle size de 20% | Must | 5 | Senior Dev 1 |
| S11-07 | En tant que developpeur, je veux ajouter les tests E2E (Playwright) | Must | 8 | Mid Dev 2 |
| S11-08 | En tant que developpeur, je veux ajouter les tests de performance | Should | 3 | Mid Dev 3 |
| S11-09 | En tant que developpeur, je veux optimiser le Time to Interactive | Must | 5 | Senior Dev 2 |
| S11-10 | En tant que developpeur, je veux implementer le prefetching des routes | Should | 3 | Mid Dev 1 |
| S11-11 | En tant que developpeur, je veux analyser et reduire les re-renders | Must | 3 | Senior Dev 1 |

**Livrables :**
- Score Lighthouse > 95 sur toutes les metriques
- PWA installable avec mode hors ligne
- Cache HTTP optimise
- Bundle size reduit de 20%
- Tests E2E avec Playwright
- Virtual scrolling pour les longues listes

---

### Sprint 12 -- Polish (Semaines 25-26)

**Objectif :** Corrections de bugs, polissage UX, documentation finale, preparation du lancement.

**Story Points estimes : 40**

| ID | User Story | Priorite | Points | Assigne |
|----|-----------|----------|--------|---------|
| S12-01 | En tant que QA, je veux executer la campagne completee de tests | Must | 5 | QA Engineer |
| S12-02 | En tant que developpeur, je veux corriger tous les bugs identifies | Must | 8 | Toute l'equipe |
| S12-03 | En tant que developpeur, je veux polir les animations et transitions | Should | 5 | Mid Dev 1 |
| S12-04 | En tant que developpeur, je veux verifier l'accessibilite WCAG 2.1 AA | Must | 5 | Senior Dev 2 |
| S12-05 | En tant que developpeur, je veux finaliser la documentation API | Must | 3 | Mid Dev 2 |
| S12-06 | En tant que developpeur, je veux rediger le guide de l'utilisateur | Should | 3 | Mid Dev 3 |
| S12-07 | En tant que developpeur, je veux preparer la page 404 et les pages d'erreur | Must | 2 | Mid Dev 1 |
| S12-08 | En tant que developpeur, je veux optimiser le SEO (meta tags, structured data) | Must | 3 | Senior Dev 1 |
| S12-09 | En tant que DevOps, je veux finaliser la configuration de monitoring | Must | 3 | DevOps |
| S12-10 | En tant que PO, je veux valider l'ensemble des fonctionnalites | Must | 3 | PO |

**Livrables :**
- Tous les bugs critiques et majeurs resolus
- Score d'accessibilite > 90
- Documentation completee
- Monitoring et alertes configures
- Page 404 et pages d'erreur personnalisees
- SEO optimise
- Checklist de lancement validee

---

## 18.5 Backlog

### 18.5.1 User Stories priorisees

| ID | Epic | Story | Priorite | Estimation |
|----|------|-------|----------|-----------|
| US-001 | Auth | Inscription email/mot de passe | P0 - Must | 5 |
| US-002 | Auth | Connexion email/mot de passe | P0 - Must | 3 |
| US-003 | Auth | OAuth Google | P1 - Should | 5 |
| US-004 | Auth | Mot de passe oublie | P0 - Must | 3 |
| US-005 | Auth | Verification email | P0 - Must | 3 |
| US-006 | Auth | Gestion du profil | P0 - Must | 5 |
| US-007 | Auth | Changement de mot de passe | P0 - Must | 3 |
| US-008 | Auth | Two-Factor Authentication | P2 - Could | 8 |
| US-010 | Products | Page d'accueil | P0 - Must | 5 |
| US-011 | Products | Liste des produits | P0 - Must | 5 |
| US-012 | Products | Detail produit | P0 - Must | 5 |
| US-013 | Products | Categories | P0 - Must | 3 |
| US-014 | Products | Recherche | P0 - Must | 5 |
| US-015 | Products | Filtres | P0 - Must | 5 |
| US-016 | Products | Tri | P0 - Must | 3 |
| US-017 | Products | Suggestions de recherche | P1 - Should | 5 |
| US-018 | Products | Produits similaires | P1 - Should | 3 |
| US-020 | Cart | Ajouter au panier | P0 - Must | 3 |
| US-021 | Cart | Modifier quantites | P0 - Must | 2 |
| US-022 | Cart | Supprimer du panier | P0 - Must | 2 |
| US-023 | Cart | Panier persistant | P0 - Must | 5 |
| US-024 | Cart | Recapitulatif panier | P0 - Must | 3 |
| US-025 | Checkout | Adresse de livraison | P0 - Must | 5 |
| US-026 | Checkout | Mode de livraison | P0 - Must | 5 |
| US-027 | Checkout | Paiement Stripe | P0 - Must | 8 |
| US-028 | Checkout | Confirmation commande | P0 - Must | 3 |
| US-029 | Checkout | Code promo | P1 - Should | 5 |
| US-030 | Orders | Historique commandes | P0 - Must | 5 |
| US-031 | Orders | Details commande | P0 - Must | 3 |
| US-032 | Orders | Suivi de commande | P0 - Must | 5 |
| US-033 | Orders | Annulation commande | P1 - Should | 5 |
| US-034 | Orders | Retour/remboursement | P1 - Should | 5 |
| US-035 | Orders | Factures PDF | P1 - Should | 5 |
| US-040 | Seller | Creation de boutique | P0 - Must | 8 |
| US-041 | Seller | Parametres boutique | P0 - Must | 5 |
| US-042 | Seller | Ajout de produit | P0 - Must | 8 |
| US-043 | Seller | Variantes produit | P0 - Must | 8 |
| US-044 | Seller | Upload images | P0 - Must | 5 |
| US-045 | Seller | Gestion du stock | P0 - Must | 3 |
| US-046 | Seller | Dashboard analytics | P0 - Must | 8 |
| US-047 | Seller | Gestion commandes | P0 - Must | 5 |
| US-048 | Seller | Reponses aux avis | P1 - Should | 3 |
| US-050 | Chat | Messagerie temps reel | P0 - Must | 8 |
| US-051 | Chat | Liste des conversations | P0 - Must | 5 |
| US-052 | Notifications | Notifications in-app | P0 - Must | 5 |
| US-053 | Notifications | Notifications push | P1 - Should | 5 |
| US-054 | Notifications | Preferences notification | P1 - Should | 3 |
| US-060 | Reviews | Laisser un avis | P0 - Must | 5 |
| US-061 | Reviews | Voir les avis | P0 - Must | 3 |
| US-062 | Favorites | Ajouter aux favoris | P0 - Must | 3 |
| US-063 | Favorites | Liste de favoris | P0 - Must | 3 |
| US-064 | Favorites | Listes d'envies | P1 - Should | 5 |
| US-065 | Favorites | Partager un produit | P1 - Should | 3 |
| US-070 | Admin | Dashboard KPIs | P0 - Must | 5 |
| US-071 | Admin | Gestion utilisateurs | P0 - Must | 5 |
| US-072 | Admin | Gestion vendeurs | P0 - Must | 5 |
| US-073 | Admin | Moderation produits | P0 - Must | 5 |
| US-074 | Admin | Moderation avis | P0 - Must | 3 |
| US-075 | Admin | Gestion categories | P0 - Must | 3 |
| US-076 | Admin | Statistiques plateforme | P0 - Must | 8 |
| US-077 | Admin | Gestion litiges | P0 - Must | 5 |
| US-078 | Admin | Codes promo | P1 - Should | 5 |
| US-080 | i18n | Changement de langue | P0 - Must | 5 |
| US-081 | i18n | Multi-devises | P0 - Must | 5 |
| US-082 | i18n | RTL arabe | P0 - Must | 5 |
| US-083 | Search | Recherche avancee facettes | P0 - Must | 8 |
| US-084 | Search | Recherche par image | P2 - Could | 8 |
| US-090 | PWA | Service Worker | P1 - Should | 5 |
| US-091 | PWA | Mode hors ligne | P2 - Could | 5 |
| US-092 | Performance | Optimisation Lighthouse > 95 | P0 - Must | 5 |
| US-093 | Performance | Virtual scrolling | P1 - Should | 5 |
| US-094 | Testing | Tests E2E Playwright | P0 - Must | 8 |

**Total estime : ~625 story points**

### 18.5.2 Repartition par priorite

| Priorite | Nombre de stories | Story Points | Pourcentage |
|----------|------------------|-------------|------------|
| P0 - Must | 42 | ~400 | 64% |
| P1 - Should | 18 | ~150 | 24% |
| P2 - Could | 6 | ~65 | 10% |
| P3 - Won't (this time) | -- | -- | -- |

---

## 18.6 Definition of Done

Une user story est consideree comme "Done" (Terminee) uniquement si **toutes** les criteres suivants sont remplies :

### 18.6.1 Criteres obligatoires

| # | Critere | Verification |
|---|---------|-------------|
| 1 | Le code est ecrit et fonctionnel | Fonctionnalite testee manuellement |
| 2 | Le code passe la revue de code | PR approuvee par au moins 1 reviewer |
| 3 | Les tests unitaires sont ecrits | Couverture > 80% pour le module concerne |
| 4 | Les tests passent en CI | Pipeline verte sur GitHub Actions |
| 5 | TypeScript compile sans erreur | `npm run type-check` sans erreur |
| 6 | ESLint ne retourne pas d'avertissement | `npm run lint` sans warning |
| 7 | Le code est formate | `prettier --check` passe |
| 8 | La fonctionnalite est responsive | Teste sur mobile (375px), tablette (768px), desktop (1440px) |
| 9 | L'accessibilite est respectee | Navigation clavier, contraste, aria-labels |
| 10 | Les donnees sont validees | Validation cote client (Zod) et serveur |
| 11 | Les erreurs sont gerees | Etats d'erreur, loading, vide affiches |
| 12 | La documentation est mise a jour | JSDoc, Storybook si applicable |
| 13 | Le bundle size n'augmente pas significativement | Verification avant/apres |
| 14 | Pas de regression | Tests existants toujours verts |
| 15 | La feature est branchie sur develop | PR mergee apres CI verte |

### 18.6.2 Criteres bonus (story complete)

| # | Critere | Condition |
|---|---------|-----------|
| B1 | Tests d'integration ecrits | Pour les composants complexes |
| B2 | Storybook stories ajoutees | Pour les composants reutilisables |
| B3 | Performance testee | Lighthouse score maintenu |
| B4 | Analytics trackes | Evenements GA4 configures |
| B5 | Sentry integre | Error boundaries mis a jour |

---

## 18.7 Livrables par sprint

| Sprint | Livrables | Cumul |
|--------|----------|-------|
| S0 | Projet initialise, CI/CD, Design System base | Foundation |
| S1 | Auth completee (login, register, profil, JWT) | + Auth |
| S2 | Navigation produits (catalogue, recherche, filtres) | + Products |
| S3 | Panier et checkout (paiement Stripe) | + Cart & Checkout |
| S4 | Commandes et profil avance | + Orders & Profile |
| S5 | Espace vendeur (boutique, CRUD produits) | + Seller Core |
| S6 | Gestion vendeur (commandes, analytics, inventaire) | + Seller Mgmt |
| S7 | Chat temps reel et notifications | + Messaging |
| S8 | Avis et favoris | + Reviews & Favorites |
| S9 | Dashboard admin | + Admin |
| S10 | i18n, multi-devises, recherche avancee | + International |
| S11 | Performance, PWA, tests E2E | + Performance |
| S12 | Bug fixes, polish, documentation, lancement | + Launch Ready |

---

## 18.8 Estimation totale

### 18.8.1 Resume par sprint

| Sprint | Theme | Story Points | Duree |
|--------|-------|-------------|-------|
| S0 | Foundation | 35 | 2 semaines |
| S1 | Auth | 50 | 2 semaines |
| S2 | Products | 55 | 2 semaines |
| S3 | Cart & Checkout | 60 | 2 semaines |
| S4 | Orders & Profile | 50 | 2 semaines |
| S5 | Seller Core | 65 | 2 semaines |
| S6 | Seller Management | 55 | 2 semaines |
| S7 | Messaging | 55 | 2 semaines |
| S8 | Reviews & Favorites | 45 | 2 semaines |
| S9 | Admin | 60 | 2 semaines |
| S10 | Advanced | 50 | 2 semaines |
| S11 | Optimization | 50 | 2 semaines |
| S12 | Polish | 40 | 2 semaines |
| **Total** | | **~670** | **26 semaines** |

### 18.8.2 Estimation budgetaire indicative

| Poste | Cout mensuel estime | Duree | Total |
|-------|-------------------|-------|-------|
| Tech Lead / Architecte (1) | 10 000 - 14 000 EUR | 6 mois | 60 000 - 84 000 EUR |
| Senior Frontend Dev (2) | 8 000 - 11 000 EUR x 2 | 6 mois | 96 000 - 132 000 EUR |
| Mid Frontend Dev (3) | 5 000 - 7 000 EUR x 3 | 6 mois | 90 000 - 126 000 EUR |
| Junior Frontend Dev (1) | 3 000 - 4 500 EUR | 6 mois | 18 000 - 27 000 EUR |
| UI/UX Designer (1) | 6 000 - 8 000 EUR | 6 mois | 36 000 - 48 000 EUR |
| Product Owner (1) | 7 000 - 9 000 EUR | 6 mois | 42 000 - 54 000 EUR |
| QA Engineer (1) | 5 000 - 7 000 EUR | 6 mois | 30 000 - 42 000 EUR |
| DevOps (1 - partage) | 3 000 - 4 000 EUR | 6 mois | 18 000 - 24 000 EUR |
| **Total salaires** | | | **390 000 - 537 000 EUR** |
| Infrastructure (cloud, outils) | 500 - 2 000 EUR | 6 mois | 3 000 - 12 000 EUR |
| Licences et outils | 300 - 800 EUR | 6 mois | 1 800 - 4 800 EUR |
| **Total projet** | | | **~400 000 - 555 000 EUR** |



---

# CHAPITRE 19 : Documentation developpeur

---

## 19.1 Conventions de code

### 19.1.1 Configuration ESLint

**Fichier `.eslintrc.cjs` :**

```javascript
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
    },
  },
  plugins: [
    '@typescript-eslint', 'react', 'react-hooks', 'react-refresh',
    'import', 'jsx-a11y', 'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'newlines-between': 'always', alphabetize: { order: 'asc', caseInsensitive: true } }],
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-alert': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    eqeqeq: ['error', 'always'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
  },
  ignorePatterns: ['dist/', 'node_modules/', '*.config.js', '*.config.cjs', '*.config.mjs', '.eslintrc.cjs'],
};
```

### 19.1.2 Configuration Prettier

**Fichier `.prettierrc` :**

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "jsxSingleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "quoteProps": "consistent",
  "htmlWhitespaceSensitivity": "css",
  "embeddedLanguageFormatting": "auto",
  "singleAttributePerLine": false,
  "overrides": [
    { "files": "*.md", "options": { "printWidth": 80, "proseWrap": "always" } },
    { "files": "*.css", "options": { "singleQuote": false } }
  ]
}
```

**Fichier `.prettierignore` :**

```
node_modules/
dist/
build/
coverage/
*.config.js
*.config.cjs
*.config.mjs
*.min.js
*.min.css
*.map
package-lock.json
pnpm-lock.yaml
yarn.lock
storybook-static/
src/assets/images/
src/assets/fonts/
```

---

## 19.2 Naming conventions

### 19.2.1 Conventions de nommage des fichiers

| Type de fichier | Convention | Exemple |
|----------------|------------|---------|
| Composant React | PascalCase `.tsx` | `ProductCard.tsx`, `UserProfile.tsx` |
| Hook personnalise | camelCase `use` prefix `.ts` | `useAuth.ts`, `useDebounce.ts` |
| Utilitaire | camelCase `.ts` | `formatCurrency.ts`, `validateEmail.ts` |
| Type / Interface | PascalCase `.ts` | `User.ts`, `Product.ts`, `ApiResponse.ts` |
| Constante | SCREAMING_SNAKE_CASE `.ts` | `API_ENDPOINTS.ts`, `ROUTES.ts` |
| Style | camelCase `.css` ou `.module.css` | `globals.css`, `ProductCard.module.css` |
| Test | Meme nom + `.test.tsx` | `ProductCard.test.tsx` |
| Story | Meme nom + `.stories.tsx` | `ProductCard.stories.tsx` |
| Mock | Meme nom + `.mock.ts` | `api.mock.ts` |
| Context | PascalCase `Context` suffix `.tsx` | `AuthContext.tsx`, `CartContext.tsx` |
| Provider | PascalCase `Provider` suffix `.tsx` | `AuthProvider.tsx` |
| Store | camelCase `store` suffix `.ts` | `authStore.ts`, `cartStore.ts` |
| Page / Route | PascalCase `Page` suffix `.tsx` | `HomePage.tsx`, `ProductDetailPage.tsx` |
| Layout | PascalCase `Layout` suffix `.tsx` | `MainLayout.tsx`, `DashboardLayout.tsx` |
| Modal / Dialog | PascalCase `Modal` suffix `.tsx` | `ConfirmModal.tsx`, `ProductModal.tsx` |

### 19.2.2 Conventions de nommage du code

| Element | Convention | Exemple |
|---------|------------|---------|
| Composant React | PascalCase | `ProductCard`, `UserAvatar` |
| Fonction | camelCase | `formatPrice()`, `validateForm()` |
| Hook | camelCase avec prefix `use` | `useAuth()`, `useCart()` |
| Variable | camelCase | `userName`, `isAuthenticated` |
| Constante | camelCase ou UPPER_SNAKE | `MAX_PAGE_SIZE`, `apiBaseUrl` |
| Interface / Type | PascalCase | `User`, `Product`, `CartItem` |
| Enum | PascalCase pour le nom, PascalCase pour les valeurs | `enum Role { Admin, User }` |
| Prop du composant | camelCase | `productName`, `onClick` |
| CSS variable | kebab-case | `--color-primary`, `--spacing-lg` |
| CSS class (Tailwind) | kebab-case DaisyUI | `btn-primary`, `card-bordered` |

---

## 19.3 Architecture

### 19.3.1 Structure des dossiers

```
src/
|-- assets/
|   |-- fonts/
|   |-- images/
|   |-- icons/
|   +-- svg/
|
|-- components/
|   |-- ui/
|   |-- layout/
|   |-- product/
|   |-- cart/
|   |-- checkout/
|   |-- seller/
|   |-- admin/
|   |-- auth/
|   |-- chat/
|   |-- reviews/
|   |-- notifications/
|   |-- common/
|   +-- icons/
|
|-- pages/
|   |-- Home/
|   |-- Products/
|   |-- Cart/
|   |-- Checkout/
|   |-- Auth/
|   |-- Seller/
|   |-- Admin/
|   |-- User/
|   |-- NotFound/
|   +-- index.ts
|
|-- hooks/
|   |-- useAuth.ts
|   |-- useCart.ts
|   |-- useDebounce.ts
|   |-- useLocalStorage.ts
|   |-- useMediaQuery.ts
|   |-- usePagination.ts
|   |-- useClickOutside.ts
|   |-- useIntersection.ts
|   +-- index.ts
|
|-- services/
|   |-- api.ts
|   |-- auth.service.ts
|   |-- product.service.ts
|   |-- cart.service.ts
|   |-- order.service.ts
|   |-- seller.service.ts
|   |-- review.service.ts
|   |-- chat.service.ts
|   +-- index.ts
|
|-- stores/
|   |-- authStore.ts
|   |-- cartStore.ts
|   |-- uiStore.ts
|   |-- notificationStore.ts
|   +-- index.ts
|
|-- types/
|   |-- user.ts
|   |-- product.ts
|   |-- cart.ts
|   |-- order.ts
|   |-- seller.ts
|   |-- review.ts
|   |-- chat.ts
|   |-- api.ts
|   |-- common.ts
|   +-- index.ts
|
|-- utils/
|   |-- format.ts
|   |-- validation.ts
|   |-- storage.ts
|   |-- debounce.ts
|   |-- throttle.ts
|   |-- cn.ts
|   |-- constants.ts
|   +-- index.ts
|
|-- config/
|   |-- env.ts
|   |-- features.ts
|   |-- sentry.ts
|   +-- analytics.ts
|
|-- i18n/
|   |-- index.ts
|   +-- locales/
|       |-- fr/
|       |-- en/
|       +-- ...
|
|-- context/
|   |-- AuthContext.tsx
|   |-- CartContext.tsx
|   +-- ThemeContext.tsx
|
|-- errors/
|   +-- ErrorBoundary.tsx
|
|-- routes/
|   +-- AppRouter.tsx
|
|-- main.tsx
|-- App.tsx
|-- index.css
+-- vite-env.d.ts
```

### 19.3.2 Ordre des imports

```typescript
// 1. React et librairies externes
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import clsx from 'clsx';

// 2. Composants UI
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

// 3. Hooks
import { useAuth } from '@/hooks/useAuth';

// 4. Services
import { productService } from '@/services/product.service';

// 5. Stores
import { useCartStore } from '@/stores/cartStore';

// 6. Types
import type { Product, CartItem } from '@/types';

// 7. Utils
import { formatCurrency } from '@/utils/format';

// 8. Constantes
import { API_ENDPOINTS } from '@/utils/constants';

// 9. Styles
import styles from './ProductCard.module.css';
```

---

## 19.4 Bonnes pratiques React

### 19.4.1 Patterns recommandes

| Pattern | Description | Usage |
|---------|-------------|-------|
| Composition | Composer des composants via les children | Layout, Cards, Containers |
| Props drilling evite | Zustand, Context pour l'etat global | Auth, Cart, Theme |
| Custom hooks | Extraire la logique reutilisable | useAuth, useCart, useDebounce |
| Memoization | React.memo, useMemo, useCallback | Composants couteux, callbacks stables |
| Lazy loading | React.lazy + Suspense | Routes, composants lourds |
| Error boundaries | Capturer les erreurs de rendu | Pages, sections critiques |
| Controlled/Uncontrolled | Choisir le bon pattern selon le cas | Formulaires |
| Compound components | Composants composites | Select, Dropdown, Tabs |

### 19.4.2 Anti-patterns a eviter

| Anti-pattern | Probleme | Solution |
|-------------|----------|----------|
| Prop drilling profond | Code fragile, difficile a maintenir | Zustand, Context |
| Props multiples | Trop de props transmisees | Object spread, interface unique |
| useEffect pour tout | Abus de side effects | Utiliser les bons outils (memo, callback) |
| Inline functions | Re-renders inutiles | useCallback, reference stable |
| State local excessif | Composants trop gros | Extraire des sous-composants |
| Barrel exports massifs | Tree-shaking inefficace | Imports directs |
| Async dans useEffect | Race conditions | AbortController, cleanup |
| Copier-coller de code | Duplication | Extraire des composants/hooks utilitaires |
| Negliger les keys | Bugs de rendu | Keys uniques et stables |

### 19.4.3 Template de composant

```typescript
// src/components/product/ProductCard.tsx
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { cn } from '@/utils/cn';
import { formatCurrency } from '@/utils/format';
import { useCartStore } from '@/stores/cartStore';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

function ProductCardComponent({ product, className }: ProductCardProps) {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      addToCart(product);
    },
    [addToCart, product]
  );

  const handleCardClick = useCallback(() => {
    navigate(`/products/${product.id}`);
  }, [navigate, product.id]);

  return (
    <div
      className={cn(
        'card bg-base-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer',
        className
      )}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <figure className="relative aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        {product.discount && (
          <span className="absolute top-2 left-2 badge badge-error text-white">
            -{product.discount}%
          </span>
        )}
      </figure>

      <div className="card-body">
        <h3 className="card-title text-sm line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-primary">
            {formatCurrency(product.price)}
          </span>
          <div className="card-actions">
            <button
              className="btn btn-circle btn-sm btn-ghost"
              onClick={handleAddToCart}
              aria-label="Ajouter au panier"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button
              className="btn btn-circle btn-sm btn-ghost"
              onClick={(e) => e.stopPropagation()}
              aria-label="Ajouter aux favoris"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProductCard = memo(ProductCardComponent);
```

---

## 19.5 Git Flow

### 19.5.1 Branches principales

```
main ---------------------------------------------------------->
  |                                                          ^
  |  v1.2.0                                        v1.3.0   |
  +---+-----------------------------------------------------++
  |                                                          |
  +-- develop -----------------------------------------------+
       |       |       |       |       |
       v       v       v       v       v
    feature/  feature/ feature/ feature/ feature/
    auth      search   cart    seller  admin
```

### 19.5.2 Regles de branchement

| Branche | Description | Protection | Merge |
|---------|-------------|------------|-------|
| `main` | Code de production stabilise | PR obligatoire, 2 approbations, CI green | Merge commit uniquement |
| `develop` | Integration des features | PR obligatoire, 1 approbation, CI green | Squash & merge |
| `feature/*` | Developpement de fonctionnalites | Aucune protection | Squash & merge vers develop |
| `hotfix/*` | Corrections critiques de production | PR rapide, 1 approbation | Merge vers main + develop |
| `release/*` | Preparation d'une release | PR finale, 2 approbations | Merge vers main + develop |
| `bugfix/*` | Corrections de bugs non critiques | PR standard, 1 approbation | Squash & merge vers develop |

---

## 19.6 Convention de branches

### 19.6.1 Naming convention

| Type | Format | Exemple |
|------|--------|---------|
| Feature | `feature/<ticket-id>-<description>` | `feature/MP-123-add-product-cart` |
| Bug fix | `bugfix/<ticket-id>-<description>` | `bugfix/MP-456-fix-cart-total` |
| Hotfix | `hotfix/<ticket-id>-<description>` | `hotfix/MP-789-fix-payment-crash` |
| Release | `release/v<major>.<minor>.<patch>` | `release/v1.3.0` |
| Chore | `chore/<description>` | `chore/update-dependencies` |
| Docs | `docs/<description>` | `docs/update-api-docs` |

### 19.6.2 Lifecycle d'une branche

| Etape | Action | Commande |
|-------|--------|----------|
| 1. Creer | Partir de develop | `git checkout develop && git pull && git checkout -b feature/MP-123-desc` |
| 2. Developper | Commits reguliers | `git commit -m "feat(products): add product card component"` |
| 3. Pousser | Push vers remote | `git push -u origin feature/MP-123-desc` |
| 4. Creer la PR | Vers develop | `gh pr create --base develop` |
| 5. Revue | Attendre les approbations | Minimum 1 reviewer |
| 6. Merge | Squash & merge | Via GitHub UI |
| 7. Cleanup | Supprimer la branche | `git branch -d feature/MP-123-desc` |

---

## 19.7 Convention de commits

### 19.7.1 Format Conventional Commits

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### 19.7.2 Types de commits

| Type | Description | Exemple |
|------|-------------|---------|
| `feat` | Nouvelle fonctionnalite | `feat(auth): add Google OAuth login` |
| `fix` | Correction de bug | `fix(cart): fix total calculation rounding` |
| `docs` | Documentation | `docs(readme): update setup instructions` |
| `style` | Formatage (sans changement de logique) | `style(ui): fix button padding` |
| `refactor` | Refactorisation | `refactor(api): extract retry logic to helper` |
| `perf` | Amelioration de performance | `perf(products): add virtual scrolling` |
| `test` | Ajout/modification de tests | `test(auth): add login form validation tests` |
| `build` | Systeme de build | `build(vite): configure code splitting` |
| `ci` | Configuration CI/CD | `ci(actions): add lighthouse audit job` |
| `chore` | Taches de maintenance | `chore(deps): update react to 18.3.2` |
| `revert` | Revert d'un commit | `revert: revert feat(auth): add 2FA` |
| `init` | Initialisation du projet | `init: scaffold Vite + React + TypeScript` |

### 19.7.3 Exemples de messages de commits

```bash
# Feature
feat(products): add product search with autocomplete
feat(cart): implement add to cart functionality
feat(seller): add product creation form with image upload
feat(checkout): integrate Stripe payment processing
feat(admin): add user management dashboard
feat(i18n): add French and English translations
feat(notifications): implement real-time WebSocket notifications

# Bug fix
fix(auth): prevent duplicate form submission on register
fix(cart): correct tax calculation for international orders
fix(products): fix image lazy loading on Safari
fix(checkout): handle Stripe payment declined gracefully

# Refactor
refactor(hooks): extract usePagination from ProductListing
refactor(services): centralize API error handling
refactor(store): simplify cart store state management

# Performance
perf(products): implement virtual scrolling for product list
perf(images): add WebP format with JPEG fallback
perf(bundle): reduce bundle size by lazy loading admin routes

# Documentation
docs(api): add JSDoc comments to product service
docs(readme): add development setup guide
```

### 19.7.4 Regles de commit

| Regle | Description |
|-------|-------------|
| Message en anglais | Tous les messages de commit sont en anglais |
| Description imperative | Utiliser l'imperatif : "add feature" pas "added feature" |
| Pas de point final | La description ne se termine pas par un point |
| Majuscule en premier | La premiere lettre est en majuscule |
| Longueur max 72 | Limiter la premiere ligne a 72 caracteres |
| Scope optionnel | Le scope est optionnel mais recommande |
| Corps optionnel | Ajouter le corps pour les changements complexes |
| Reference ticket | Referencer le ticket Jira/GitHub en fin de message |

---

## 19.8 Pull Requests

### 19.8.1 Template de PR

**Fichier `.github/PULL_REQUEST_TEMPLATE.md` :**

```markdown
## Description

[Decrivez brievement les changements effectues]

## Type de changement

- [ ] Nouvelle fonctionnalite (feat)
- [ ] Correction de bug (fix)
- [ ] Refactorisation (refactor)
- [ ] Amelioration de performance (perf)
- [ ] Documentation (docs)
- [ ] Tests (test)
- [ ] Autre (specifiez) : _______________

## Related Issues

Fixe #(numero de l'issue)

## Comment tester

1. Aller a ...
2. Cliquer sur ...
3. Verifier que ...

## Screenshots (si applicable)

[Ajoutez des captures d'ecran avant/apres]

## Checklist

- [ ] Le code suit les conventions du projet
- [ ] ESLint passe sans erreur
- [ ] Prettier formate le code correctement
- [ ] TypeScript compile sans erreur
- [ ] Les tests existants passent
- [ ] Les nouveaux tests sont ajoutes si necessaire
- [ ] La documentation est mise a jour si necessaire
- [ ] Le code est responsive (mobile, tablette, desktop)
- [ ] L'accessibilite est respectee
- [ ] Pas de console.log en production
- [ ] Pas de secret ou cle API dans le code
```

### 19.8.2 Regles de PR

| Regle | Detail |
|-------|--------|
| Titre concis | Format `feat(scope): description` ou `fix(scope): description` |
| Taille limite | < 500 lignes modifiees de preference |
| Une feature par PR | Eviter les PRs melangeant plusieurs features |
| Description completee | Remplir le template de PR |
| Tests inclus | Ajouter les tests associes |
| Screenshots si UI | Montrer l'impact visuel |
| Review obligatoire | Minimum 1 approbation (2 pour main) |
| CI verte | Tous les checks doivent passer avant le merge |

---

## 19.9 Code Review

### 19.9.1 Guidelines

| Critere | Description |
|---------|-------------|
| Comprehension | Le reviewer a-t-il compris l'objectif du changement ? |
| Correctitude | Le code fait-il ce qu'il est cense faire ? |
| Lisibilite | Le code est-il facile a lire et comprendre ? |
| Maintenance | Le code sera-t-il facile a maintenir ? |
| Performance | Y a-t-il des problemes de performance potentiels ? |
| Securite | Y a-t-il des vulnerabilities de securite ? |
| Tests | Les tests sont-ils suffisants et significatifs ? |
| Conventions | Le code suit-il les conventions du projet ? |
| DRY | Y a-t-il de la duplication de code ? |
| Error handling | Les erreurs sont-elles gerees correctement ? |

### 19.9.2 Checklist de code review

```markdown
## Checklist de Code Review

### General
- [ ] Le code est-il comprehensible sans commentaires excessifs ?
- [ ] Les noms de variables/fonctions sont-ils descriptifs ?
- [ ] Y a-t-il de la duplication de code a extraire ?
- [ ] Le code suit-il les principes SOLID et DRY ?

### React
- [ ] Les composants sont-ils bien decomposes ?
- [ ] Les props sont-elles typées correctement ?
- [ ] Les hooks sont-ils utilises correctement ?
- [ ] Y a-t-il des memoizations necessaires ?
- [ ] Les effets de bord sont-ils bien nettoyes ?
- [ ] Les keys sont-elles uniques et stables ?

### TypeScript
- [ ] Le code est-il bien type (pas de `any`) ?
- [ ] Les interfaces sont-elles exportees si necessaire ?
- [ ] Les types sont-ils coherents avec le reste du codebase ?

### Performance
- [ ] Y a-t-il des re-renders inutiles evitables ?
- [ ] Les images sont-elles optimisees ?
- [ ] Le code splitting est-il implemente ?

### Accessibilite
- [ ] Les elements interactifs sont-ils accessibles au clavier ?
- [ ] Les aria-labels sont-resents ?
- [ ] Le contraste des couleurs est-il suffisant ?

### Securite
- [ ] Pas de donnees sensibles exposees ?
- [ ] Les inputs sont-ils valides ?
- [ ] Les tokens sont-ils bien stockes ?
```

---

## 19.10 Documentation API

### 19.10.1 JSDoc

```typescript
/**
 * Recupere la liste des produits avec filtres et pagination.
 *
 * @param {ProductFilters} filters - Filtres de recherche
 * @param {PaginationParams} pagination - Parametres de pagination
 * @returns {Promise<PaginatedResponse<Product>>} Liste paginee de produits
 *
 * @example
 * ```ts
 * const products = await getProducts(
 *   { category: 'electronics', minPrice: 100 },
 *   { page: 1, limit: 20 }
 * );
 * ```
 *
 * @throws {ApiError} Si l'appel API echoue
 */
export async function getProducts(
  filters: ProductFilters,
  pagination: PaginationParams
): Promise<PaginatedResponse<Product>> {
  const response = await api.get('/products', { params: { ...filters, ...pagination } });
  return response.data;
}
```

### 19.10.2 Storybook

**Configuration `storybook/main.ts` :**

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
```

**Exemple de story :**

```typescript
// src/components/ui/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'link', 'outline', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Button', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary' },
};

export const Small: Story = {
  args: { children: 'Small', size: 'sm' },
};

export const Loading: Story = {
  args: { children: 'Loading...', loading: true, variant: 'primary' },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};
```

---

## 19.11 Environnement de developpement

### 19.11.1 Setup guide

```bash
# 1. Cloner le repository
git clone https://github.com/marketplace/frontend.git
cd frontend

# 2. Installer les dependances
npm ci

# 3. Copier le fichier d'environnement
cp .env.example .env.local

# 4. Remplir les variables d'environnement
# Editer .env.local avec les valeurs correctes

# 5. Demarrer le serveur de developpement
npm run dev

# 6. Ouvrir dans le navigateur
# http://localhost:5173
```

### 19.11.2 Configuration IDE

**VS Code extensions recommandees :**

| Extension | ID | Description |
|-----------|-----|-------------|
| ESLint | dbaeumer.vscode-eslint | Integration ESLint |
| Prettier | esbenp.prettier-vscode | Formatage automatique |
| Tailwind CSS IntelliSense | bradlc.vscode-tailwindcss | Autocomplete Tailwind |
| ES7+ Snippets | dsznajder.es7-react-js-snippets | Snippets React |
| Auto Rename Tag | formulahendry.auto-rename-tag | Renommage automatique des tags |
| Import Cost | wix.vscode-import-cost | Taille des imports |
| GitLens | eamodio.gitlens | blame, history, etc. |
| Thunder Client | rangav.vscode-thunder-client | Client API |
| Error Lens | usernamehw.errorlens | Affichage inline des erreurs |
| Todo Highlight | wayou.vscode-todo-highlight | Highlight des TODO/FIXME |

**Fichier `.vscode/settings.json` :**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.rulers": [100],
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/build": true
  },
  "emmet.includeLanguages": {
    "typescriptreact": "html"
  }
}
```

**Fichier `.vscode/extensions.json` :**

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets",
    "formulahendry.auto-rename-tag",
    "wix.vscode-import-cost",
    "eamodio.gitlens",
    "usernamehw.errorlens"
  ]
}
```



---

# CHAPITRE 20 : Annexes

---

## 20.1 Glossaire technique

| Terme | Definition |
|-------|-----------|
| **Accessibilite (a11y)** | Pratiques de conception permettant l'utilisation par des personnes en situation de handicap |
| **ACL (Access Control List)** | Liste de controle d'acces definissant les permissions des utilisateurs |
| **API (Application Programming Interface)** | Interface de programmation permettant la communication entre systemes |
| **API REST** | Architecture d'API basee sur les principes REST (Representational State Transfer) |
| **Atomic Design** | Methodologie de conception d'UI basee sur des niveaux d'abstraction (atoms, molecules, organisms) |
| **Authentication** | Processus de verification de l'identite d'un utilisateur |
| **Authorization** | Processus de verification des droits d'acces d'un utilisateur |
| **Brotli** | Algorithme de compression de texte optimise pour le web |
| **Bundle** | Ensemble des fichiers JavaScript combines apres le build |
| **Bundle splitting** | Technique de division du code en plusieurs fichiers pour le chargement progressif |
| **CDN (Content Delivery Network)** | Reseau de distribution de contenu pour servir les assets statiques |
| **CI/CD (Continuous Integration / Continuous Delivery)** | Pipeline d'integration et de deploiement continus |
| **CORS (Cross-Origin Resource Sharing)** | Mecanisme de securite pour les requetes inter-domaines |
| **CRUD (Create, Read, Update, Delete)** | Les 4 operations de base sur les donnees |
| **CSRF (Cross-Site Request Forgery)** | Type d'attaque web exploitant la confiance d'un site |
| **CSR (Client-Side Rendering)** | Rendu cote client, le HTML est genere par JavaScript |
| **DaisyUI** | Composants UI preconstruits pour Tailwind CSS |
| **Debounce** | Technique pour retarder l'execution d'une fonction apres un delai |
| **Design System** | Collection de composants, regles et pratiques pour la conception d'interfaces |
| **DevOps** | Culture et pratiques unissant developpement et operations |
| **DOM (Document Object Model)** | Modele objet du document HTML manipule par JavaScript |
| **Docker** | Plateforme de conteneurisation pour deployer des applications |
| **Edge Network** | Reseau de distribution au plus pres de l'utilisateur final |
| **E2E Testing (End-to-End)** | Tests d'integration completee simulant un parcours utilisateur reel |
| **Error Boundary** | Composant React qui capture les erreurs de ses enfants |
| **Feature Flag** | Mecanisme d'activation/desactivation de fonctionnalites a la demande |
| **Fibonacci** | Echelle d'estimation relative utilisee en Agile (1, 2, 3, 5, 8, 13, 21) |
| **Gzip** | Algorithme de compression de donnees largement utilise sur le web |
| **HSTS (HTTP Strict Transport Security)** | Directive de securite forcant HTTPS |
| **i18n (Internationalization)** | Preparation d'une application a etre adaptee a differentes langues/regions |
| **Immutable** | Donnee qui ne peut pas etre modifiee apres sa creation |
| **JWT (JSON Web Token)** | Standard d'authentisation basee sur des tokens signes |
| **Lighthouse** | Outil Google pour mesurer les performances et qualite des pages web |
| **LCP (Largest Contentful Paint)** | Metrique Core Web Vitals mesurant le temps de rendu du plus grand element |
| **Lazy loading** | Technique de chargement differe des ressources non critiques |
| **Memoization** | Technique d'optimisation consistant a memoriser les resultats de calculs |
| **Micro-frontend** | Architecture decomposant une application frontend en sous-applications |
| **OAuth 2.0** | Protocole d'autorisation standard pour les connexions tierces |
| **OWASP (Open Web Application Security Project)** | Organisation dediee a la securite des applications web |
| **PWA (Progressive Web App)** | Application web progressive fonctionnant hors ligne et installable |
| **RBAC (Role-Based Access Control)** | Controle d'acces base sur les roles attribues aux utilisateurs |
| **RTL (Right-to-Left)** | Mode d'affichage de droite a gauche pour certaines langues |
| **Sentry** | Plateforme de monitoring d'erreurs et de performance |
| **SEO (Search Engine Optimization)** | Techniques d'optimisation pour les moteurs de recherche |
| **Service Worker** | Script JavaScript s'executant en arriere-plan pour le caching et les notifications |
| **SSR (Server-Side Rendering)** | Rendu cote serveur, le HTML est genere par le serveur |
| **Storybook** | Outil de developpement et de documentation de composants UI |
| **Tailwind CSS** | Framework CSS utility-first pour la conception rapide d'interfaces |
| **Throttle** | Technique limitant la frequence d'execution d'une fonction |
| **Tree shaking** | Technique d'elimination du code mort lors du build |
| **TypeScript** | Sur-ensemble typé de JavaScript developpe par Microsoft |
| **Virtual scrolling** | Technique d'affichage de listes longues en ne rendant que les elements visibles |
| **Vite** | Outil de developpement frontend rapide utilisant ESM natifs |
| **WCAG (Web Content Accessibility Guidelines)** | Guidelines d'accessibilite du W3C |
| **WebSocket** | Protocole de communication bidirectionnelle en temps reel |
| **XSS (Cross-Site Scripting)** | Type d'attaque injectant du code malveillant dans des pages web |
| **Zod** | Bibliotheque de validation de schemas TypeScript |
| **Zustand** | Bibliotheque legere de gestion d'etat pour React |

---

## 20.2 Diagrammes

### 20.2.1 Diagramme d'architecture globale

```
+------------------------------------------------------------------+
|                         UTILISATEUR                              |
|                    (Navigateur Web / Mobile)                      |
+------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------+
|                     FRONTEND (React + Vite)                       |
|  +------------------+  +------------------+  +------------------+ |
|  |    Auth Module    |  |  Product Module  |  |   Cart Module    | |
|  +------------------+  +------------------+  +------------------+ |
|  +------------------+  +------------------+  +------------------+ |
|  |   Seller Module   |  |   Admin Module   |  |  Order Module    | |
|  +------------------+  +------------------+  +------------------+ |
|  +------------------+  +------------------+  +------------------+ |
|  |  Chat Module      |  |  Review Module   |  | i18n Module      | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                 |
|  +------------------------------------------------------------+ |
|  |                    Zustand Stores                           | |
|  |  [authStore] [cartStore] [uiStore] [notificationStore]      | |
|  +------------------------------------------------------------+ |
|  +------------------------------------------------------------+ |
|  |                   Services Layer (Axios)                    | |
|  |  [authService] [productService] [cartService] [orderService]| |
|  +------------------------------------------------------------+ |
+------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------+
|                      CDN (Cloudflare / Vercel Edge)               |
|                  [Cache des assets statiques]                     |
+------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------+
|                    API BACKEND (Node.js / Express)                |
|  +------------------+  +------------------+  +------------------+ |
|  |   Auth Routes     |  | Product Routes   |  |  Cart Routes     | |
|  +------------------+  +------------------+  +------------------+ |
|  +------------------+  +------------------+  +------------------+ |
|  |   Order Routes    |  | Seller Routes    |  |  Chat Routes     | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                 |
|  +------------------------------------------------------------+ |
|  |                   Middleware Layer                          | |
|  |  [JWT Auth] [RBAC] [Rate Limiting] [Validation] [CORS]     | |
|  +------------------------------------------------------------+ |
+------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------+
|                    BASE DE DONNEES (PostgreSQL)                   |
|  +------------------+  +------------------+  +------------------+ |
|  |     Users         |  |    Products      |  |     Orders       | |
|  +------------------+  +------------------+  +------------------+ |
|  +------------------+  +------------------+  +------------------+ |
|  |     Reviews       |  |   Categories     |  |     Messages     | |
|  +------------------+  +------------------+  +------------------+ |
+------------------------------------------------------------------+
                                |
                                v
+------------------------------------------------------------------+
|                    SERVICES EXTERNES                              |
|  +----------+  +-----------+  +----------+  +---------------+    |
|  |  Stripe   |  | Cloudinary|  |  Sentry  |  | Google Analytics| |
|  +----------+  +-----------+  +----------+  +---------------+    |
+------------------------------------------------------------------+
```

### 20.2.2 Diagramme de flux d'authentification

```
Utilisateur                Frontend                API Backend         Base de donnees
    |                          |                        |                     |
    |-- POST /auth/register ->|                        |                     |
    |                          |-- POST /api/v1/auth/register -------------->|
    |                          |<-- 201 Created ---------|<-- Enregistrement --|
    |<-- Page de connexion ----|                        |                     |
    |                          |                        |                     |
    |-- POST /auth/login ----->|                        |                     |
    |                          |-- POST /api/v1/auth/login --------------->|
    |                          |                        |-- Verification ---->|
    |                          |                        |<-- User + hash -----|
    |                          |<-- { accessToken,     --|                    |
    |                          |      refreshToken }    |                    |
    |<-- Stocker tokens -------|                        |                     |
    |    (localStorage)        |                        |                     |
    |                          |                        |                     |
    |== Requetes authentifiees =========================|                     |
    |                          |-- Authorization: Bearer -->                  |
    |                          |   <accessToken>          |                  |
    |                          |<-- 200 OK + Donnees ----|                    |
    |<-- Reponse --------------|                        |                     |
    |                          |                        |                     |
    |== Token expire ========================================|               |
    |                          |-- POST /api/v1/auth/refresh -->              |
    |                          |<-- { newAccessToken,    --|                 |
    |                          |      newRefreshToken }   |                 |
    |== Nouvelle tentative avec nouveau token =============================>|
```

### 20.2.3 Diagramme de flux de checkout

```
Etape 1: Panier
    Utilisateur -> Ajoute produit au panier
    Frontend -> PUT /api/v1/cart/items { productId, quantity }
    API -> Met a jour le panier en base
    Frontend -> Affiche le panier mis a jour

Etape 2: Checkout - Adresse
    Utilisateur -> Saisit/Selectionne adresse de livraison
    Frontend -> Validation Zod -> POST /api/v1/checkout/address
    API -> Valide et stocke l'adresse
    Frontend -> Affiche les options de livraison

Etape 3: Checkout - Livraison
    Utilisateur -> Selectionne le mode de livraison
    Frontend -> POST /api/v1/checkout/shipping { method, addressId }
    API -> Calcule les frais de livraison
    Frontend -> Affiche le recapitulatif

Etape 4: Checkout - Paiement
    Utilisateur -> Confirme et clique "Payer"
    Frontend -> Stripe.js -> Tokenisation des donnees CB
    Frontend -> POST /api/v1/checkout/payment { stripeToken, orderId }
    API -> Charge le client via Stripe API
    API -> Cree la commande en base
    API -> Envoie email de confirmation
    Frontend -> Affiche la page de confirmation
```

### 20.2.4 Diagramme de composants (ProductCard)

```
+------------------------------------------+
|              ProductCard                  |
|                                          |
|  +------------------------------------+  |
|  |            ImageContainer           |  |
|  |  +------------------------------+  |  |
|  |  |     ProductImage             |  |  |
|  |  |   (lazy loading, WebP)       |  |  |
|  |  +------------------------------+  |  |
|  |  +------------------------------+  |  |
|  |  |     DiscountBadge           |  |  |
|  |  |   (si remise > 0)           |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  |          ProductInfo               |  |
|  |  - ProductTitle                    |  |
|  |  - ProductRating (Stars + Count)   |  |
|  |  - ProductPrice (current + old)    |  |
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  |          ProductActions            |  |
|  |  - AddToCartButton                 |  |
|  |  - FavoriteButton                  |  |
|  +------------------------------------+  |
+------------------------------------------+
```

---

## 20.3 Checklists

### 20.3.1 Checklist de developpement

| # | Critere | Verifie |
|---|---------|---------|
| 1 | La fonctionnalite correspond aux specifications | [ ] |
| 2 | Le code compile sans erreur TypeScript | [ ] |
| 3 | ESLint ne retourne pas d'avertissement | [ ] |
| 4 | Le code est formate selon Prettier | [ ] |
| 5 | Les tests unitaires sont ecrits et passent | [ ] |
| 6 | La couverture de test est > 80% | [ ] |
| 7 | Le composant est responsive (375px, 768px, 1440px) | [ ] |
| 8 | La navigation clavier fonctionne | [ ] |
| 9 | Les aria-labels sont presents sur les elements interactifs | [ ] |
| 10 | Les etats de chargement sont affiches (skeleton/spinner) | [ ] |
| 11 | Les etats d'erreur sont geres et affiches | [ ] |
| 12 | L'etat vide est gere (aucun resultat) | [ ] |
| 13 | La validation des inputs fonctionne (cote client) | [ ] |
| 14 | Les messages d'erreur sont explicites | [ ] |
| 15 | Aucun console.log ne subsiste en production | [ ] |
| 16 | Aucun secret ou cle API n'est expose | [ ] |
| 17 | Le lazy loading est implemente pour les images | [ ] |
| 18 | Le composant utilise React.memo si necessaire | [ ] |
| 19 | Les imports suivent l'ordre conventionne | [ ] |
| 20 | La documentation JSDoc est completee | [ ] |

### 20.3.2 Checklist de code review

| # | Critere | Verifie |
|---|---------|---------|
| 1 | Le code est comprehensible sans commentaires excessifs | [ ] |
| 2 | Les noms de variables/fonctions sont descriptifs | [ ] |
| 3 | Pas de duplication de code | [ ] |
| 4 | Les principes SOLID et DRY sont respectes | [ ] |
| 5 | Les composants React sont bien decomposes | [ ] |
| 6 | Les props sont typées correctement | [ ] |
| 7 | Pas de `any` TypeScript | [ ] |
| 8 | Les hooks sont utilises correctement | [ ] |
| 9 | Les effets de bord sont nettoyes (cleanup) | [ ] |
| 10 | Les memoizations sont justifiees | [ ] |
| 11 | Les keys sont uniques et stables | [ ] |
| 12 | Pas de re-renders inutiles | [ ] |
| 13 | Le code splitting est implemente | [ ] |
| 14 | Les erreurs sont gerees gracieusement | [ ] |
| 15 | Les donnees sensibles ne sont pas exposees | [ ] |
| 16 | La validation des inputs est presente | [ ] |
| 17 | Le code suit les conventions du projet | [ ] |
| 18 | Les tests couvrent les cas principaux et edge cases | [ ] |
| 19 | La documentation est mise a jour | [ ] |
| 20 | Le bundle size n'a pas augmente significativement | [ ] |

### 20.3.3 Checklist de deploiement

| # | Critere | Verifie |
|---|---------|---------|
| 1 | La pipeline CI/CD est verte | [ ] |
| 2 | Tous les tests passent | [ ] |
| 3 | ESLint et Prettier sont OK | [ ] |
| 4 | TypeScript compile sans erreur | [ ] |
| 5 | Le build de production reussit | [ ] |
| 6 | Le bundle size est dans les seuils | [ ] |
| 7 | Les variables d'environnement sont configurees | [ ] |
| 8 | Les secrets ne sont pas dans le code | [ ] |
| 9 | Les redirections sont configurees | [ ] |
| 10 | Les headers de securite sont en place | [ ] |
| 11 | Le cache HTTP est optimise | [ ] |
| 12 | Le healthcheck fonctionne | [ ] |
| 13 | Les smoke tests passent | [ ] |
| 14 | Le monitoring (Sentry) est actif | [ ] |
| 15 | Les analytics sont configures | [ ] |
| 16 | Le rollback est possible en < 5 minutes | [ ] |
| 17 | Le SSL/TLS est valide | [ ] |
| 18 | Le DNS est correctement configure | [ ] |
| 19 | Le mode maintenance est pret si necessaire | [ ] |
| 20 | L'equipe est notifiee du deploiement | [ ] |

### 20.3.4 Checklist de securite

| # | Critere | Verifie |
|---|---------|---------|
| 1 | HTTPS est force (HSTS) | [ ] |
| 2 | Les headers CSP sont configures | [ ] |
| 3 | X-Content-Type-Options: nosniff | [ ] |
| 4 | X-Frame-Options: DENY | [ ] |
| 5 | X-X-Protection: 1; mode=block | [ ] |
| 6 | Referrer-Policy est configure | [ ] |
| 7 | Permissions-Policy est configure | [ ] |
| 8 | Les tokens JWT sont stockes de maniere securisee | [ ] |
| 9 | Le refresh token est rotationne | [ ] |
| 10 | Le rate limiting est actif sur les routes d'auth | [ ] |
| 11 | La validation des inputs est presente (Zod) | [ ] |
| 12 | Pas de XSS possible (DOM purifie, CSP) | [ ] |
| 13 | Pas de CSRF possible | [ ] |
| 14 | Pas de donnees sensibles dans les logs | [ ] |
| 15 | Les secrets ne sont pas dans le code | [ ] |
| 16 | Les dependances sont a jour (npm audit) | [ ] |
| 17 | La compression est active (Brotli/Gzip) | [ ] |
| 18 | Le stockage local ne contient pas de donnees critiques | [ ] |
| 19 | Les APIs tierces sont appelees en HTTPS | [ ] |
| 20 | Le Content Security Policy est strict | [ ] |

### 20.3.5 Checklist de performance

| # | Critere | Verifie |
|---|---------|---------|
| 1 | Lighthouse Performance > 90 | [ ] |
| 2 | LCP < 2.5 secondes | [ ] |
| 3 | FCP < 1.5 secondes | [ ] |
| 4 | CLS < 0.1 | [ ] |
| 5 | TBT < 200ms | [ ] |
| 6 | Bundle JS gzippe < 200 KB | [ ] |
| 7 | Bundle CSS gzippe < 30 KB | [ ] |
| 8 | Code splitting implemente par route | [ ] |
| 9 | Lazy loading des images | [ ] |
| 10 | Preconnect/Prefetch configures | [ ] |
| 11 | Cache HTTP optimise (immutable pour assets) | [ ] |
| 12 | Compression Brotli/Gzip activee | [ ] |
| 13 | Images en format WebP/AVIF | [ ] |
| 14 | Polices optimisees (preload, font-display: swap) | [ ] |
| 15 | Pas de layout shift inattendu | [ ] |
| 16 | Virtual scrolling pour les longues listes | [ ] |
| 17 | Debounce sur les recherches | [ ] |
| 18 | Pas de re-rendus inutiles | [ ] |
| 19 | Les assets statiques ont des noms avec hash | [ ] |
| 20 | Le Time to Interactive < 3.5s | [ ] |

### 20.3.6 Checklist d'accessibilite

| # | Critere | Verifie |
|---|---------|---------|
| 1 | Toutes les images ont un alt text | [ ] |
| 2 | Les boutons ont un aria-label | [ ] |
| 3 | La navigation clavier fonctionne sur toute la page | [ ] |
| 4 | Le focus est visible sur tous les elements interactifs | [ ] |
| 5 | L'ordre de tabulation est logique | [ ] |
| 6 | Les formulaires ont des labels associes | [ ] |
| 7 | Les messages d'erreur sont associes aux champs | [ ] |
| 8 | Le contraste des couleurs est >= 4.5:1 (texte) | [ ] |
| 9 | Le contraste des couleurs est >= 3:1 (grands elements) | [ ] |
| 10 | Les videos ont des sous-titres si applicable | [ ] |
| 11 | Le texte est redimensionnable a 200% sans perte | [ ] |
| 12 | Les animations sont reducibles (prefers-reduced-motion) | [ ] |
| 13 | Les landmarks ARIA sont presents (header, nav, main, footer) | [ ] |
| 14 | Les titres sont hierarchiques (h1 > h2 > h3) | [ ] |
| 15 | Les liens sont descriptifs (pas "cliquez ici") | [ ] |
| 16 | Les changements dynamiques sont announces (aria-live) | [ ] |
| 17 | Le mode RTL fonctionne (pour l'arabe) | [ ] |
| 18 | Les erreurs de validation sont announcees | [ ] |
| 19 | Le skip-to-content est present | [ ] |
| 20 | L'outil axe-core ne retourne pas d'erreur critique | [ ] |

### 20.3.7 Checklist de lancement

| # | Critere | Verifie |
|---|---------|---------|
| 1 | Toutes les fonctionnalites P0 sont implementees | [ ] |
| 2 | Tous les bugs critiques et majeurs sont resolus | [ ] |
| 3 | Les tests E2E couvrent les parcours principaux | [ ] |
| 4 | Le score Lighthouse est > 90 partout | [ ] |
| 5 | Le score d'accessibilite est > 90 | [ ] |
| 6 | Le SEO est optimise (meta, sitemap, robots.txt) | [ ] |
| 7 | Le monitoring (Sentry) est actif | [ ] |
| 8 | Les alertes de securite sont configurees | [ ] |
| 9 | Le backup des donnees est automatise | [ ] |
| 10 | Le plan de rollback est documente et teste | [ ] |
| 11 | La documentation developpeur est completee | [ ] |
| 12 | Le guide de demarrage fonctionne | [ ] |
| 13 | Les licenses des dependances sont verifiees | [ ] |
| 14 | Les performances sont stables (pas de regression) | [ ] |
| 15 | L'equipe support est formee | [ ] |
| 16 | Le SLA est defini et mesure | [ ] |
| 17 | Le mode maintenance est fonctionnel | [ ] |
| 18 | Les communications marketing sont pretes | [ ] |
| 19 | Le feedback utilisateurs est planifie | [ ] |
| 20 | La retrospective de lancement est planifiee | [ ] |

---

## 20.4 Normes et standards

### 20.4.1 WCAG 2.1 (Web Content Accessibility Guidelines)

| Niveau | Critere | Application dans le projet |
|--------|---------|---------------------------|
| A | Images textuelles | Toutes les images ont un `alt` text |
| A | Sous-titres | Les contenus video ont des sous-titres |
| A | Navigation clavier | Tous les elements interactifs sont accessibles au clavier |
| A | Structure | Utilisation semantique des elements HTML |
| A | Labels | Tous les champs de formulaire ont des labels |
| AA | Contraste | Ratio minimum 4.5:1 pour le texte, 3:1 pour les grands elements |
| AA | Redimensionnement | Le contenu reste utilisable a 200% de zoom |
| AA | Orientation | Le contenu s'adapte a l'orientation landscape/portrait |
| AA | Erreurs | Les erreurs de saisie sont decrites et suggerent des corrections |
| AAA | Signes linguistiques | Les abbreviations et expressions sont explicitees |

### 20.4.2 OWASP Top 10

| # | Risque | Mesures dans le projet |
|---|--------|----------------------|
| A01 | Broken Access Control | RBAC, validation cote serveur, JWT |
| A02 | Cryptographic Failures | HTTPS force, tokens JWT signes, pas de mots de passe en clair |
| A03 | Injection | Validation Zod, requetes parametrees |
| A04 | Insecure Design | Threat modeling, security review |
| A05 | Security Misconfiguration | Headers de securite CSP, HSTS, X-Frame-Options |
| A06 | Vulnerable Components | npm audit, dependabot, mise a jour reguliere |
| A07 | Auth Failures | Rate limiting, protection brute force, 2FA optionnelle |
| A08 | Data Integrity Failures | Verification des signatures, CSRF protection |
| A09 | Logging Failures | Sentry, logs structures (cote backend) |
| A10 | SSRF | Validation des URLs, restriction des appels reseau |

### 20.4.3 Conventions REST API

| Principe | Convention | Exemple |
|----------|------------|---------|
| Ressources | Noms pluriels en kebab-case | `/api/v1/products`, `/api/v1/order-items` |
| Verbes HTTP | CRUD mappe sur les verbes | GET (read), POST (create), PUT/PATCH (update), DELETE (delete) |
| Nommage | Snake case pour les champs JSON | `first_name`, `created_at` |
| Pagination | Query params `page` et `limit` | `/api/v1/products?page=1&limit=20` |
| Filtrage | Query params | `/api/v1/products?category=electronics&min_price=100` |
| Tri | Query param `sort` | `/api/v1/products?sort=-created_at` |
| Recherche | Query param `q` | `/api/v1/products?q=telephone` |
| Versioning | Prefixed dans l'URL | `/api/v1/...`, `/api/v2/...` |
| Erreurs | Format standardise | `{ "error": { "code": "VALIDATION_ERROR", "message": "...", "details": [...] } }` |
| Success | Format standardise | `{ "data": {...}, "meta": { "total": 100, "page": 1, "limit": 20 } }` |

---

## 20.5 References bibliographiques

| # | Reference | Auteur / Source | Annee |
|---|-----------|-----------------|-------|
| 1 | React Documentation | Meta (Facebook) | 2024 |
| 2 | TypeScript Handbook | Microsoft | 2024 |
| 3 | Tailwind CSS Documentation | Tailwind Labs | 2024 |
| 4 | DaisyUI Documentation | Pouya Saadeghi | 2024 |
| 5 | Vite Documentation | Evan You | 2024 |
| 6 | React Router Documentation | Remix Software | 2024 |
| 7 | Zustand Documentation | Poimandres | 2024 |
| 8 | Zod Documentation | Colin Kaine | 2024 |
| 9 | React Hook Form Documentation | React Hook Form | 2024 |
| 10 | Axios Documentation | Axios | 2024 |
| 11 | Lucide Icons | Lucide | 2024 |
| 12 | Recharts Documentation | Recharts Team | 2024 |
| 13 | Playwright Documentation | Microsoft | 2024 |
| 14 | Vitest Documentation | Vitest Team | 2024 |
| 15 | Storybook Documentation | Chromatic | 2024 |
| 16 | Sentry JavaScript SDK Documentation | Sentry | 2024 |
| 17 | Stripe.js Documentation | Stripe | 2024 |
| 18 | Cloudinary Documentation | Cloudinary | 2024 |
| 19 | Web Content Accessibility Guidelines (WCAG) 2.1 | W3C | 2023 |
| 20 | OWASP Top Ten | OWASP Foundation | 2021 |
| 21 | Conventional Commits v1.0.0 | Conventional Commits | 2020 |
| 22 | Git Flow - A successful Git branching model | Vincent Driessen | 2010 |
| 23 | Atomic Design | Brad Frost | 2016 |
| 24 | Clean Code | Robert C. Martin | 2008 |
| 25 | The Pragmatic Programmer | Andrew Hunt, David Thomas | 2019 |

---

## 20.6 Documentation externe - Liens utiles

| Categorie | Ressource | URL |
|-----------|-----------|-----|
| Framework | React | https://react.dev |
| Framework | Vite | https://vitejs.dev |
| Framework | React Router | https://reactrouter.com |
| CSS | Tailwind CSS | https://tailwindcss.com |
| CSS | DaisyUI | https://daisyui.com |
| Language | TypeScript | https://www.typescriptlang.org |
| State | Zustand | https://zustand-demo.pmnd.rs |
| Forms | React Hook Form | https://react-hook-form.com |
| Validation | Zod | https://zod.dev |
| HTTP | Axios | https://axios-http.com |
| Icons | Lucide | https://lucide.dev |
| Charts | Recharts | https://recharts.org |
| Testing | Vitest | https://vitest.dev |
| Testing | Testing Library | https://testing-library.com |
| Testing | Playwright | https://playwright.dev |
| Storybook | Storybook | https://storybook.js.org |
| Monitoring | Sentry | https://sentry.io |
| Deployment | Vercel | https://vercel.com |
| Deployment | Netlify | https://netlify.com |
| Container | Docker | https://docker.com |
| CI/CD | GitHub Actions | https://docs.github.com/actions |
| Payments | Stripe | https://stripe.com |
| Images | Cloudinary | https://cloudinary.com |
| Analytics | Google Analytics 4 | https://analytics.google.com |
| Search | Algolia | https://www.algolia.com |
| A11y | WCAG 2.1 | https://www.w3.org/TR/WCAG21/ |
| Security | OWASP | https://owasp.org |
| Linting | ESLint | https://eslint.org |
| Formatting | Prettier | https://prettier.io |
| Commit Convention | Conventional Commits | https://www.conventionalcommits.org |

---

## 20.7 Table des matieres completee du document

| Chapitre | Titre | Sections |
|----------|-------|----------|
| **1** | Presentation du projet | 1.1 Vision, 1.2 Objectifs, 1.3 Parties prenantes, 1.4 Perimetre |
| **2** | Architecture technique | 2.1 Vue d'ensemble, 2.2 Frontend architecture, 2.3 Choix technologiques, 2.4 Patterns d'architecture |
| **3** | Stack technique | 3.1 React, 3.2 TypeScript, 3.3 Vite, 3.4 Tailwind CSS v4, 3.5 DaisyUI v5, 3.6 Dependances |
| **4** | Structure du projet | 4.1 Dossiers, 4.2 Fichiers de configuration, 4.3 Path aliases, 4.4 Assets |
| **5** | Systeme de routing | 5.1 React Router v6, 5.2 Routes, 5.3 Navigation, 5.4 Guards |
| **6** | Gestion d'etat | 6.1 Zustand, 6.2 Stores, 6.3 Persistance, 6.4 DevTools |
| **7** | Client HTTP | 7.1 Axios, 7.2 Intercepteurs, 7.3 Retry, 7.4 Error handling |
| **8** | Design System | 8.1 Composants UI, 8.2 DaisyUI, 8.3 Themes, 8.4 Responsive |
| **9** | Formulaire | 9.1 React Hook Form, 9.2 Zod, 9.3 Validation, 9.4 Patterns |
| **10** | Authentification | 10.1 Login, 10.2 Register, 10.3 JWT, 10.4 OAuth, 10.5 Guards |
| **11** | Module Produits | 11.1 Listing, 11.2 Detail, 11.3 Recherche, 11.4 Filtres |
| **12** | Panier | 12.1 Store panier, 12.2 UI panier, 12.3 Persistance, 12.4 Sync |
| **13** | Checkout | 13.1 Flow, 13.2 Adresses, 13.3 Livraison, 13.4 Paiement Stripe |
| **14** | Espace Vendeur | 14.1 Dashboard, 14.2 Produits CRUD, 14.3 Commandes, 14.4 Analytics |
| **15** | Espace Admin | 15.1 Dashboard, 15.2 Users, 15.3 Moderation, 15.4 Config |
| **16** | Tests | 16.1 Vitest, 16.2 Testing Library, 16.3 E2E, 16.4 Coverage |
| **17** | Deploiement | 17.1 Preparation, 17.2 Env vars, 17.3 Build, 17.4 Vercel, 17.5 Netlify, 17.6 Docker, 17.7 CI/CD, 17.8 GitHub, 17.9 Monitoring, 17.10 Rollback |
| **18** | Roadmap | 18.1 Agile/Scrum, 18.2 Equipe, 18.3 Sprint Planning, 18.4 Sprints 0-12, 18.5 Backlog, 18.6 DoD, 18.7 Livrables, 18.8 Estimations |
| **19** | Documentation dev | 19.1 ESLint/Prettier, 19.2 Naming, 19.3 Architecture, 19.4 React patterns, 19.5 Git Flow, 19.6 Branches, 19.7 Commits, 19.8 PR, 19.9 Code Review, 19.10 JSDoc/Storybook, 19.11 IDE setup |
| **20** | Annexes | 20.1 Glossaire, 20.2 Diagrammes, 20.3 Checklists, 20.4 Normes, 20.5 References, 20.6 Liens, 20.7 Table des matieres, 20.8 Page de garde |

---

## 20.8 Page de garde

```
================================================================================
================================================================================

                              MARKETPLACE
                     Plateforme E-Commerce Mondiale

                     SPECIFICATION TECHNIQUE FRONTEND

                              ReactJS + Vite
                          Tailwind CSS v4 / DaisyUI v5

================================================================================
================================================================================

Version du document    : 1.0
Date de creation       : 22 juillet 2026
Derniere modification  : 22 juillet 2026
Statut                 : Version definitive

================================================================================
                              AUTEURS
================================================================================

Role                      | Nom                | Email
--------------------------|--------------------|---------------------------
Tech Lead / Architecte    | [Nom]              | [email]
Lead Frontend Developer   | [Nom]              | [email]
UI/UX Designer            | [Nom]              | [email]
Product Owner             | [Nom]              | [email]
QA Lead                   | [Nom]              | [email]
DevOps Engineer           | [Nom]              | [email]

================================================================================
                            APPROBATIONS
================================================================================

Role                      | Nom                | Date          | Signature
--------------------------|--------------------|---------------|----------
Directeur Technique       | [Nom]              | __/__/____    | __________
Product Manager           | [Nom]              | __/__/____    | __________
Responsable Qualite       | [Nom]              | __/__/____    | __________
Security Officer          | [Nom]              | __/__/____    | __________

================================================================================
                           HISTORIQUE DES VERSIONS
================================================================================

Version | Date          | Auteur         | Description
--------|---------------|----------------|--------------------------------------
0.1     | __/__/____    | [Nom]          | Premiere version - brouillon
0.2     | __/__/____    | [Nom]          | Revue technique
0.3     | __/__/____    | [Nom]          | Integration retours
0.9     | __/__/____    | [Nom]          | Version pre-release
1.0     | 22/07/2026    | [Nom]          | Version definitive

================================================================================
                            CLASSIFICATION
================================================================================

Ce document est confidentiel et destine exclusivement aux membres de
l'equipe projet Marketplace. Toute reproduction, distribution ou
utilisation non autorisee est strictement interdite.

Projet     : Marketplace - Plateforme E-Commerce Mondiale
Societe    : [Nom de la societe]
Reference  : SPEC-FE-MKT-2026-001

================================================================================
```

---




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

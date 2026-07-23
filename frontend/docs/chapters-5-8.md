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

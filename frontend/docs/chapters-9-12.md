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

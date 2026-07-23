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

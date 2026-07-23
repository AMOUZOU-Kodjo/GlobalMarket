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

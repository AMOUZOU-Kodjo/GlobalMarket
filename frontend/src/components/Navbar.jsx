import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  ShoppingCart,
  User,
  LogOut,
  Store,
  Menu,
  X,
  Search,
  Heart,
  Bell,
  Settings,
  Package,
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  Tag,
  Home,
  ShoppingBag,
  Megaphone,
  HelpCircle,
  MessageCircle,
} from 'lucide-react'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCart } from '../context/CartContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import messageService from '../services/message.service'

const WISHLIST_KEY = 'marcostore_wishlist'

function loadWishlistCount() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]').length
  } catch { return 0 }
}

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { totalItems } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(loadWishlistCount)
  const [notifCount, setNotifCount] = useState(0)
  const searchInputRef = useRef(null)
  const categoriesRef = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      setWishlistCount(loadWishlistCount())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!user) return
    let mounted = true
    const fetchUnread = () => {
      messageService.getUnreadCount()
        .then((data) => {
          if (mounted) setNotifCount(data.count ?? data ?? 0)
        })
        .catch(() => {})
    }
    fetchUnread()
    const interval = setInterval(fetchUnread, 15000)
    return () => { mounted = false; clearInterval(interval) }
  }, [user])

  const CATEGORIES = useMemo(() => [
    { id: 'electronique', label: t('cat.electronique'), icon: '📱', href: '/products?category=electronique' },
    { id: 'mode-vetements', label: t('cat.modeVetements'), icon: '👕', href: '/products?category=mode-vetements' },
    { id: 'maison-jardin', label: t('cat.maisonJardin'), icon: '🏠', href: '/products?category=maison-jardin' },
    { id: 'sports-loisirs', label: t('cat.sportsLoisirs'), icon: '⚽', href: '/products?category=sports-loisirs' },
    { id: 'beaute-sante', label: t('cat.beauteSante'), icon: '💄', href: '/products?category=beaute-sante' },
    { id: 'jouets-enfants', label: t('cat.jouetsEnfants'), icon: '🧸', href: '/products?category=jouets-enfants' },
    { id: 'automobile', label: t('cat.automobile'), icon: '🚗', href: '/products?category=automobile' },
    { id: 'livres-medias', label: t('cat.livresMedias'), icon: '📚', href: '/products?category=livres-medias' },
    { id: 'alimentation', label: t('cat.alimentation'), icon: '🍎', href: '/products?category=alimentation' },
    { id: 'art-artisanat', label: t('cat.artArtisanat'), icon: '🎨', href: '/products?category=art-artisanat' },
  ], [t])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
        setCategoriesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleSearch = useCallback((e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }, [searchQuery, navigate])

  const handleLogout = () => {
    logout()
    navigate('/')
    setMobileOpen(false)
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <header role="banner" className="sticky top-0 z-50">
      <nav
        aria-label="Navigation principale"
        className={`navbar bg-base-100 transition-all duration-300 ${
          scrolled ? 'shadow-lg backdrop-blur-md bg-base-100/95' : 'shadow-sm'
        }`}
      >
        <div className="navbar-start">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="btn btn-ghost text-xl gap-2 normal-case" aria-label="MarcoStore - Accueil">
            <img src="/logo.png" alt="MarcoStore" className="h-8 w-8 object-contain" />
            <span className="hidden sm:inline font-bold">
              <span className="text-primary">Marco</span>Store
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `btn btn-ghost btn-sm gap-2 ${isActive ? 'btn-active' : ''}`
            }
          >
            <Home size={16} />
            {t('nav.home')}
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `btn btn-ghost btn-sm gap-2 ${isActive ? 'btn-active' : ''}`
            }
          >
            <Tag size={16} />
            {t('nav.products')}
          </NavLink>

          <div className="relative" ref={categoriesRef}>
            <button
              className={`btn btn-ghost btn-sm gap-2 ${categoriesOpen ? 'btn-active' : ''}`}
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
            >
              <Megaphone size={16} />
              {t('nav.categories')}
              <ChevronDown size={14} className={`transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesOpen && (
              <div className="absolute left-0 top-full mt-2 w-[500px] bg-base-100 rounded-box shadow-xl border border-base-300 p-4 z-50">
                <div className="grid grid-cols-2 gap-1">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={cat.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-base-200 transition-colors"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <span className="text-xl">{cat.icon}</span>
                      <span className="text-sm font-medium">{cat.label}</span>
                      <ChevronRight size={14} className="ml-auto opacity-40" />
                    </Link>
                  ))}
                </div>
                <div className="divider my-2"></div>
                <Link
                  to="/products"
                  className="btn btn-primary btn-sm btn-block"
                  onClick={() => setCategoriesOpen(false)}
                >
                  {t('home.allCategories')}
                </Link>
              </div>
            )}
          </div>

          {user?.role === 'admin' && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm gap-2 ${isActive ? 'btn-active' : ''}`
              }
            >
              <LayoutDashboard size={16} />
              {t('nav.admin')}
            </NavLink>
          )}
        </div>

        <div className="navbar-end gap-1 sm:gap-2">
          <LanguageSwitcher />

          <button
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={() => setSearchOpen(true)}
            aria-label="Rechercher"
          >
            <Search size={20} />
          </button>

          <div className="hidden lg:flex">
            <form onSubmit={handleSearch} role="search" aria-label="Rechercher">
              <label className="input input-bordered flex items-center gap-2 w-64 xl:w-80 focus-within:input-primary transition-colors">
                <Search size={16} className="opacity-50 shrink-0" />
                <input
                  type="text"
                  placeholder={t('home.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="grow"
                />
              </label>
            </form>
          </div>

          {user && (
            <Link to="/wishlist" className="btn btn-ghost btn-circle hidden sm:flex" aria-label="Favoris">
              <div className="indicator">
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="badge badge-xs badge-success indicator-item">{wishlistCount}</span>
                )}
              </div>
            </Link>
          )}

          {user && (
            <button className="btn btn-ghost btn-circle hidden sm:flex" aria-label="Notifications">
              <div className="indicator">
                <Bell size={20} />
                {notifCount > 0 && (
                  <span className="badge badge-xs badge-error indicator-item">{notifCount}</span>
                )}
              </div>
            </button>
          )}

          <Link to="/cart" className="btn btn-ghost btn-circle" aria-label="Panier">
            <div className="indicator">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="badge badge-xs badge-primary indicator-item" aria-live="polite">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>

          {user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                aria-label={`Menu de ${user.name}`}
                aria-haspopup="true"
              >
                <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="bg-primary text-primary-content w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">{user.name?.charAt(0)?.toUpperCase()}</span>
                    </div>
                  )}
                </div>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-3 shadow-xl border border-base-300"
              >
                <li className="menu-title px-2 py-1">
                  <div className="flex flex-col">
                    <span className="font-bold">{user.name}</span>
                    <span className="text-xs text-base-content/50">{user.email}</span>
                  </div>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <Link to="/profile" className="gap-3">
                    <User size={16} />
                    {t('profile.title')}
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="gap-3">
                    <Package size={16} />
                    {t('seller.orders')}
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="gap-3 justify-between">
                    <span className="flex items-center gap-3">
                      <Heart size={16} />
                      {t('profile.wishlist')}
                    </span>
                    {wishlistCount > 0 && (
                      <span className="badge badge-xs badge-success">{wishlistCount}</span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link to="/messages" className="gap-3 justify-between">
                    <span className="flex items-center gap-3">
                      <MessageCircle size={16} />
                      {t('nav.messages')}
                    </span>
                    {notifCount > 0 && (
                      <span className="badge badge-xs badge-error">{notifCount}</span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="gap-3">
                    <Settings size={16} />
                    {t('seller.settings')}
                  </Link>
                </li>
                {user.role === 'seller' || user.role === 'admin' ? (
                  <li>
                    <Link to="/seller/shop" className="gap-3">
                      <ShoppingBag size={16} />
                      {t('nav.shop')}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/seller/register" className="gap-3">
                      <Store size={16} />
                      {t('nav.seller')}
                    </Link>
                  </li>
                )}
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleLogout} className="gap-3 text-error">
                    <LogOut size={16} />
                    {t('nav.logout')}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-1 sm:gap-2">
              <Link to="/login" className="btn btn-ghost btn-sm">
                {t('nav.login')}
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                {t('nav.register')}
              </Link>
            </div>
          )}
        </div>
      </nav>

      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setSearchOpen(false)}>
          <div className="bg-base-100 p-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="flex gap-2" role="search" aria-label="Rechercher">
              <label className="input input-bordered input-primary flex items-center gap-2 flex-1">
                <Search size={18} className="opacity-50" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t('home.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="grow"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                {t('nav.search')}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setSearchOpen(false)}
              >
                <X size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[55] lg:hidden"
          role="dialog"
          aria-label="Menu mobile"
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMobile}></div>
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-base-100 shadow-2xl overflow-y-auto animate-slide-in">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="flex items-center gap-2" onClick={closeMobile}>
                  <Store size={24} className="text-primary" />
                  <span className="font-bold text-lg">
                    <span className="text-primary">Global</span>Market
                  </span>
                </Link>
                <button className="btn btn-ghost btn-circle btn-sm" onClick={closeMobile} aria-label="Fermer le menu">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSearch} className="mb-4" role="search">
                <label className="input input-bordered flex items-center gap-2 w-full">
                  <Search size={16} className="opacity-50" />
                  <input
                    type="text"
                    placeholder={t('nav.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="grow"
                  />
                </label>
              </form>

              <ul className="menu w-full gap-1">
                <li>
                  <NavLink to="/" end onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>
                    <Home size={18} />
                    {t('nav.home')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>
                    <Tag size={18} />
                    {t('nav.products')}
                  </NavLink>
                </li>
                <li>
                  <details>
                    <summary className="gap-3">
                      <Megaphone size={18} />
                      {t('nav.categories')}
                    </summary>
                    <ul className="pl-8">
                      {CATEGORIES.map((cat) => (
                        <li key={cat.id}>
                          <Link to={cat.href} onClick={closeMobile}>
                            <span>{cat.icon}</span>
                            {cat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                {user?.role === 'admin' && (
                  <li>
                    <NavLink to="/admin" onClick={closeMobile} className={({ isActive }) => isActive ? 'active' : ''}>
                      <LayoutDashboard size={18} />
                      {t('nav.admin')}
                    </NavLink>
                  </li>
                )}
              </ul>

              <div className="divider"></div>

              {user ? (
                <>
                  <div className="flex items-center gap-3 px-2 mb-3">
                    <div className="avatar shrink-0">
                      <div className="bg-primary text-primary-content w-10 rounded-full overflow-hidden">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-sm">{user.name?.charAt(0)?.toUpperCase()}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-sm">{user.name}</p>
                      <p className="text-xs text-base-content/50">{user.email}</p>
                    </div>
                  </div>
                  <ul className="menu w-full gap-1">
                    <li>
                      <Link to="/profile" onClick={closeMobile}>
                        <User size={18} />
                        {t('profile.title')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders" onClick={closeMobile}>
                        <Package size={18} />
                        {t('seller.orders')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist" onClick={closeMobile} className="justify-between">
                        <span className="flex items-center gap-3">
                          <Heart size={18} />
                          {t('profile.wishlist')}
                        </span>
                        {wishlistCount > 0 && (
                          <span className="badge badge-xs badge-success">{wishlistCount}</span>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/messages" onClick={closeMobile} className="justify-between">
                        <span className="flex items-center gap-3">
                          <MessageCircle size={18} />
                          {t('nav.messages')}
                        </span>
                        {notifCount > 0 && (
                          <span className="badge badge-xs badge-error">{notifCount}</span>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings" onClick={closeMobile}>
                        <Settings size={18} />
                        {t('seller.settings')}
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="text-error gap-3">
                        <LogOut size={18} />
                        {t('nav.logout')}
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                <div className="flex flex-col gap-2 px-2">
                  <Link to="/login" className="btn btn-outline btn-block" onClick={closeMobile}>
                    {t('nav.login')}
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-block" onClick={closeMobile}>
                    {t('nav.register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

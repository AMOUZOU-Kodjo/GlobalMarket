import { useState, useEffect } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Shield,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Menu,
  X,
  Store,
  Bell,
  Search,
} from 'lucide-react'

const NAV_ITEMS = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/users', label: 'Utilisateurs', icon: Users },
  { to: '/admin/products', label: 'Produits', icon: Package },
  { to: '/admin/orders', label: 'Commandes', icon: ShoppingCart },
  { to: '/admin/moderation', label: 'Modération', icon: Shield },
  { to: '/admin/reports', label: 'Rapports', icon: BarChart3 },
  { to: '/admin/settings', label: 'Paramètres', icon: Settings },
]

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleLogout = () => {
    logout()
    setMobileOpen(false)
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-base-300 ${collapsed ? 'justify-center' : ''}`}>
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="GlobalMarket" className="h-7 w-7 object-contain" />
          {!collapsed && (
            <span className="text-lg font-bold">
              <span className="text-primary">Global</span>Market
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-2" aria-label="Navigation admin">
        <ul className="menu gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `gap-3 ${isActive ? 'active font-semibold' : ''} ${collapsed ? 'justify-center px-2' : ''}`
                  }
                  title={collapsed ? item.label : undefined}
                >
                  <Icon size={20} />
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="border-t border-base-300 p-3">
        <div className={`flex items-center gap-3 px-2 py-2 ${collapsed ? 'justify-center' : ''}`}>
          <div className="avatar placeholder shrink-0">
            <div className="bg-primary text-primary-content w-9 rounded-full">
              <span className="text-sm">{user?.name?.charAt(0)?.toUpperCase()}</span>
            </div>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{user?.name}</p>
              <p className="text-xs text-base-content/50 truncate capitalize">{user?.role}</p>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className={`btn btn-ghost btn-sm gap-3 w-full mt-2 text-error ${collapsed ? 'justify-center px-2' : ''}`}
          title={collapsed ? 'Déconnexion' : undefined}
        >
          <LogOut size={18} />
          {!collapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex bg-base-200">
      <aside
        className={`hidden lg:flex flex-col bg-base-100 border-r border-base-300 transition-all duration-300 ${
          collapsed ? 'w-[72px]' : 'w-64'
        }`}
      >
        {sidebarContent}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-6 -right-3 z-10 btn btn-circle btn-sm btn-primary shadow-md hidden lg:flex items-center justify-center"
          style={{ right: collapsed ? '-12px' : '-12px' }}
          aria-label={collapsed ? 'Déplier le menu' : 'Replier le menu'}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-base-100 shadow-2xl animate-slide-in">
            <button
              onClick={() => setMobileOpen(false)}
              className="btn btn-ghost btn-circle btn-sm absolute top-4 right-4 z-10"
              aria-label="Fermer le menu"
            >
              <X size={20} />
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-base-100 border-b border-base-300 sticky top-0 z-40">
          <div className="flex items-center gap-4 px-4 lg:px-6 h-16">
            <button
              onClick={() => setMobileOpen(true)}
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={22} />
            </button>

            <div className="flex-1 max-w-md hidden sm:block">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <Search size={16} className="opacity-50 shrink-0" />
                <input type="text" placeholder="Rechercher..." className="grow" />
              </label>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button className="btn btn-ghost btn-circle relative" aria-label="Notifications">
                <Bell size={20} />
              </button>
              <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <div className="bg-primary text-primary-content w-full h-full rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">{user?.name?.charAt(0)?.toUpperCase()}</span>
                    </div>
                  </div>
                </button>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-xl border border-base-300">
                  <li className="menu-title px-2">
                    <span>{user?.name}</span>
                  </li>
                  <li>
                    <Link to="/" className="gap-2">
                      <Store size={16} />
                      Retour au site
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="gap-2 text-error">
                      <LogOut size={16} />
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

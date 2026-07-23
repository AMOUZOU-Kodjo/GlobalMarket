import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productsAPI } from '../services/api'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import formatCurrency from '../utils/formatCurrency'

export default function Dashboard() {
  const [stats, setStats] = useState({ products: 0, orders: 0, users: 0 })
  const [recentProducts, setRecentProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await productsAPI.getAll()
        const products = productsData.products || productsData || []
        setRecentProducts(products.slice(0, 5))
        setStats({ products: products.length, orders: 0, users: 0 })
      } catch {
        // silently fail
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link to="/dashboard/products/new" className="btn btn-primary btn-sm">
          <Plus size={16} />
          Nouveau produit
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="stat bg-base-100 rounded-box shadow">
          <div className="stat-title">Produits</div>
          <div className="stat-value text-primary">{stats.products}</div>
          <div className="stat-desc">Total en catalogue</div>
        </div>
        <div className="stat bg-base-100 rounded-box shadow">
          <div className="stat-title">Commandes</div>
          <div className="stat-value text-secondary">{stats.orders}</div>
          <div className="stat-desc">Total</div>
        </div>
        <div className="stat bg-base-100 rounded-box shadow">
          <div className="stat-title">Utilisateurs</div>
          <div className="stat-value text-accent">{stats.users}</div>
          <div className="stat-desc">Inscrits</div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Produits récents</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prix</th>
                  <th>Catégorie</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentProducts.map((p) => (
                  <tr key={p._id}>
                    <td className="font-medium">{p.name}</td>
                    <td>{formatCurrency(p.price)} </td>
                    <td>
                      <span className="badge badge-ghost">{p.category}</span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Link
                          to={`/dashboard/products/${p._id}/edit`}
                          className="btn btn-ghost btn-xs"
                        >
                          <Pencil size={14} />
                        </Link>
                        <button className="btn btn-ghost btn-xs text-error">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {recentProducts.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-base-content/50">
                      Aucun produit
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

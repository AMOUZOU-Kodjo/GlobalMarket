import { useState, useEffect, useCallback } from 'react'
import {
  Search, Users, AlertCircle, UserCheck, UserX, Shield, Eye,
} from 'lucide-react'
import adminService from '../../services/admin.service'
import DataTable from '../../components/organisms/DataTable'
import Pagination from '../../components/atoms/Pagination'
import Modal from '../../components/atoms/Modal'
import Spinner from '../../components/atoms/Spinner'
import StatusBadge from '../../components/molecules/StatusBadge'
import usePagination from '../../hooks/usePagination'
import { formatDate } from '../../utils/formatDate'

const ROLES = [
  { value: '', label: 'Tous les rôles' },
  { value: 'user', label: 'Utilisateur' },
  { value: 'seller', label: 'Vendeur' },
  { value: 'admin', label: 'Admin' },
]

const STATUSES = [
  { value: '', label: 'Tous les statuts' },
  { value: 'active', label: 'Actif' },
  { value: 'inactive', label: 'Inactif' },
  { value: 'banned', label: 'Banni' },
]

export default function AdminUsersPage() {
  const [users, setUsers] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [userDetail, setUserDetail] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)

  const { page, totalPages, goToPage } = usePagination(totalItems, 10)

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = { page, limit: 10 }
      if (search) params.search = search
      if (roleFilter) params.role = roleFilter
      if (statusFilter) params.status = statusFilter
      const res = await adminService.getUsers(params)
      const data = res.data || res
      setUsers(data.users || data || [])
      setTotalItems(data.total || (data.users || data || []).length)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Erreur lors du chargement des utilisateurs.')
    } finally {
      setLoading(false)
    }
  }, [page, search, roleFilter, statusFilter])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleStatusToggle = async (userId, currentStatus) => {
    const newStatus = currentStatus === 'banned' ? 'active' : 'banned'
    try {
      await adminService.updateUserStatus(userId, newStatus)
      fetchUsers()
    } catch (err) {
      setError(err?.response?.data?.message || 'Erreur lors de la mise à jour du statut.')
    }
  }

  const handleRoleChange = async (userId, newRole) => {
    try {
      await adminService.updateUserRole(userId, newRole)
      fetchUsers()
    } catch (err) {
      setError(err?.response?.data?.message || 'Erreur lors du changement de rôle.')
    }
  }

  const handleViewDetail = async (user) => {
    setDetailLoading(true)
    setUserDetail(user)
    try {
      const res = await adminService.getUserDetail(user._id || user.id)
      setUserDetail(res.data || res)
    } catch {
      // keep basic user info
    } finally {
      setDetailLoading(false)
    }
  }

  const columns = [
    {
      key: 'avatar',
      label: '',
      width: '40px',
      render: (_, row) => (
        <div className="avatar placeholder">
          <div className="bg-primary/20 text-primary rounded-full w-8 h-8">
            <span className="text-xs font-bold">
              {(row.name || row.email || '?').charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: 'name',
      label: 'Nom',
      sortable: true,
      render: (val, row) => (
        <div>
          <p className="font-medium text-sm">{val || '—'}</p>
          <p className="text-xs text-base-content/50">{row.email}</p>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Rôle',
      render: (val, row) => (
        <select
          className="select select-bordered select-xs"
          value={val || 'user'}
          onChange={(e) => handleRoleChange(row._id || row.id, e.target.value)}
        >
          <option value="user">Utilisateur</option>
          <option value="seller">Vendeur</option>
          <option value="admin">Admin</option>
        </select>
      ),
    },
    {
      key: 'status',
      label: 'Statut',
      render: (val) => <StatusBadge status={val} type="user" />,
    },
    {
      key: 'createdAt',
      label: 'Inscrit le',
      sortable: true,
      render: (val) => <span className="text-sm">{formatDate(val)}</span>,
    },
    {
      key: 'actions',
      label: 'Actions',
      width: '100px',
      render: (_, row) => (
        <div className="flex gap-1">
          <button
            className="btn btn-ghost btn-xs"
            onClick={(e) => { e.stopPropagation(); handleViewDetail(row) }}
          >
            <Eye size={14} />
          </button>
          <button
            className={`btn btn-ghost btn-xs ${row.status === 'banned' ? 'text-success' : 'text-error'}`}
            onClick={(e) => { e.stopPropagation(); handleStatusToggle(row._id || row.id, row.status) }}
            title={row.status === 'banned' ? 'Débannir' : 'Bannir'}
          >
            {row.status === 'banned' ? <UserCheck size={14} /> : <UserX size={14} />}
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Utilisateurs</h1>
        <p className="text-base-content/60 text-sm">Gérez les comptes utilisateurs de la plateforme</p>
      </div>

      {error && (
        <div className="alert alert-error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <label className="input input-bordered flex items-center gap-2 flex-1">
              <Search size={16} className="opacity-50" />
              <input
                type="text"
                placeholder="Rechercher un utilisateur..."
                className="grow"
                value={search}
                onChange={(e) => { setSearch(e.target.value); goToPage(1) }}
              />
            </label>
            <select
              className="select select-bordered"
              value={roleFilter}
              onChange={(e) => { setRoleFilter(e.target.value); goToPage(1) }}
            >
              {ROLES.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
            <select
              className="select select-bordered"
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); goToPage(1) }}
            >
              {STATUSES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <DataTable
            columns={columns}
            data={users}
            loading={loading}
            emptyMessage="Aucun utilisateur trouvé"
          />

          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={!!userDetail}
        onClose={() => setUserDetail(null)}
        title="Détails de l'utilisateur"
      >
        {detailLoading ? (
          <div className="flex justify-center py-8">
            <Spinner size="md" />
          </div>
        ) : userDetail ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-primary/20 text-primary rounded-full w-12 h-12">
                  <span className="text-lg font-bold">
                    {(userDetail.name || '?').charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              <div>
                <p className="font-bold">{userDetail.name}</p>
                <p className="text-sm text-base-content/60">{userDetail.email}</p>
              </div>
            </div>
            <div className="divider my-1" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-base-content/50">Rôle</span>
                <p className="font-medium capitalize">{userDetail.role || 'user'}</p>
              </div>
              <div>
                <span className="text-base-content/50">Statut</span>
                <p><StatusBadge status={userDetail.status} type="user" /></p>
              </div>
              <div>
                <span className="text-base-content/50">Inscrit le</span>
                <p className="font-medium">{formatDate(userDetail.createdAt)}</p>
              </div>
              <div>
                <span className="text-base-content/50">Téléphone</span>
                <p className="font-medium">{userDetail.phone || '—'}</p>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  )
}

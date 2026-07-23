import { useAuth } from '../context/AuthContext'
import { User, Mail, Shield } from 'lucide-react'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Mon Profil</h1>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-6">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content w-20 rounded-full">
                <span className="text-3xl">{user?.name?.charAt(0)?.toUpperCase()}</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <span className="badge badge-primary">{user?.role}</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <User size={20} className="text-base-content/50" />
              <div>
                <p className="text-sm text-base-content/50">Nom</p>
                <p className="font-medium">{user?.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-base-content/50" />
              <div>
                <p className="text-sm text-base-content/50">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-base-content/50" />
              <div>
                <p className="text-sm text-base-content/50">Rôle</p>
                <p className="font-medium capitalize">{user?.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

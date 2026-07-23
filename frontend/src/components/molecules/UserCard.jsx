import { Mail, Calendar } from 'lucide-react'
import { Badge } from '../atoms/Badge'
import { formatDate } from '../../utils/formatDate'

export function UserCard({ user, actions }) {
  const { name, email, avatar, role, createdAt } = user

  const roleVariant = {
    admin: 'error',
    seller: 'primary',
    user: 'neutral',
    moderator: 'accent',
  }[role] || 'neutral'

  const roleLabel = {
    admin: 'Administrateur',
    seller: 'Vendeur',
    user: 'Utilisateur',
    moderator: 'Modérateur',
  }[role] || role

  return (
    <div className="card bg-base-100 border border-base-300">
      <div className="card-body p-5">
        <div className="flex items-start gap-4">
          <div className="avatar placeholder shrink-0">
            {avatar ? (
              <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
              </div>
            ) : (
              <div className="bg-primary text-primary-content w-14 h-14 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">{name?.charAt(0)?.toUpperCase()}</span>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-base">{name}</h3>
              <Badge variant={roleVariant} size="sm">
                {roleLabel}
              </Badge>
            </div>
            <div className="flex flex-col gap-1 mt-1.5">
              {email && (
                <div className="flex items-center gap-1.5 text-xs text-base-content/60">
                  <Mail size={12} />
                  <span className="truncate">{email}</span>
                </div>
              )}
              {createdAt && (
                <div className="flex items-center gap-1.5 text-xs text-base-content/60">
                  <Calendar size={12} />
                  <span>Membre depuis {formatDate(createdAt, { style: 'short' })}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {actions && (
          <div className="divider my-0"></div>
        )}
        {actions && (
          <div className="flex items-center gap-2 flex-wrap">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserCard

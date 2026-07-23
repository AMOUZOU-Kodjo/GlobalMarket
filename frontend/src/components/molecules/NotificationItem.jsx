import {
  Bell,
  Package,
  Star,
  MessageSquare,
  CreditCard,
  Truck,
  AlertCircle,
  Info,
  Trash2,
} from 'lucide-react'
import { formatDate } from '../../utils/formatDate'
import classNames from '../../utils/classNames'

const NOTIFICATION_ICONS = {
  order: Package,
  review: Star,
  message: MessageSquare,
  payment: CreditCard,
  shipping: Truck,
  alert: AlertCircle,
  info: Info,
}

const NOTIFICATION_COLORS = {
  order: 'text-primary',
  review: 'text-warning',
  message: 'text-info',
  payment: 'text-success',
  shipping: 'text-secondary',
  alert: 'text-error',
  info: 'text-base-content/50',
}

export function NotificationItem({ notification, onRead, onDelete }) {
  const { id, type = 'info', title, message, read = false, createdAt } = notification
  const Icon = NOTIFICATION_ICONS[type] || Bell
  const iconColor = NOTIFICATION_COLORS[type] || 'text-base-content/50'

  const handleRead = () => {
    if (!read) {
      onRead?.(id)
    }
  }

  return (
    <div
      className={classNames(
        'flex items-start gap-3 p-4 transition-colors cursor-pointer',
        read ? 'bg-base-100' : 'bg-primary/5'
      )}
      onClick={handleRead}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleRead()
        }
      }}
    >
      <div className={classNames(
        'w-9 h-9 rounded-full flex items-center justify-center shrink-0',
        read ? 'bg-base-200' : 'bg-primary/10'
      )}>
        <Icon size={16} className={iconColor} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className={classNames('text-sm truncate', !read && 'font-semibold')}>
            {title}
          </h4>
          {!read && (
            <span className="badge badge-primary badge-xs shrink-0">Nouveau</span>
          )}
        </div>
        {message && (
          <p className="text-xs text-base-content/60 mt-0.5 line-clamp-2">{message}</p>
        )}
        {createdAt && (
          <p className="text-xs text-base-content/40 mt-1">
            {formatDate(createdAt, { style: 'relative' })}
          </p>
        )}
      </div>

      {onDelete && (
        <button
          className="btn btn-ghost btn-circle btn-xs text-base-content/30 hover:text-error shrink-0"
          onClick={(e) => {
            e.stopPropagation()
            onDelete(id)
          }}
          aria-label="Supprimer la notification"
        >
          <Trash2 size={14} />
        </button>
      )}
    </div>
  )
}

export default NotificationItem

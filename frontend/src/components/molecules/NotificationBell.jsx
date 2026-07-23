import { useState, useRef, useEffect } from 'react'
import { Bell, CheckCheck, Trash2, X } from 'lucide-react'
import { NotificationItem } from './NotificationItem'
import classNames from '../../utils/classNames'

export function NotificationBell({
  notifications = [],
  unreadCount = 0,
  onReadAll,
  onDelete,
  onRead,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleReadAll = () => {
    onReadAll?.()
  }

  const handleDeleteAll = () => {
    notifications.forEach((n) => onDelete?.(n.id))
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="btn btn-ghost btn-circle relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Notifications${unreadCount > 0 ? ` (${unreadCount} non lues)` : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 badge badge-xs badge-primary indicator-item min-w-5 h-5 flex items-center justify-center text-[10px]">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 bg-base-100 rounded-box shadow-xl border border-base-300 z-50">
          <div className="flex items-center justify-between p-4 border-b border-base-300">
            <h3 className="font-bold text-sm">Notifications</h3>
            <div className="flex items-center gap-1">
              {unreadCount > 0 && (
                <button
                  className="btn btn-ghost btn-xs gap-1"
                  onClick={handleReadAll}
                  title="Tout marquer comme lu"
                >
                  <CheckCheck size={14} />
                  <span className="hidden sm:inline">Tout lire</span>
                </button>
              )}
              <button
                className="btn btn-ghost btn-circle btn-xs"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto divide-y divide-base-300">
            {notifications.length === 0 ? (
              <div className="py-12 text-center text-sm text-base-content/40">
                <Bell size={32} className="mx-auto mb-2 opacity-30" />
                <p>Aucune notification</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onRead={onRead}
                  onDelete={onDelete}
                />
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-base-300">
              <button
                className="btn btn-ghost btn-sm btn-block text-xs gap-2"
                onClick={handleDeleteAll}
              >
                <Trash2 size={12} />
                Supprimer toutes les notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default NotificationBell

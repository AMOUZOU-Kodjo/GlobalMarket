import { MapPin, Phone, Edit3, Trash2, CheckCircle } from 'lucide-react'
import classNames from '../../utils/classNames'

export function AddressCard({
  address,
  onEdit,
  onDelete,
  selectable = false,
  selected = false,
  onSelect,
}) {
  const { name, street, city, state, zip, country, phone, isDefault } = address

  const handleClick = () => {
    if (selectable) {
      onSelect?.(address)
    }
  }

  return (
    <div
      className={classNames(
        'card bg-base-100 border-2 transition-all',
        selected
          ? 'border-primary shadow-md shadow-primary/10'
          : 'border-base-300 hover:border-primary/40',
        selectable && 'cursor-pointer hover:shadow-md'
      )}
      onClick={handleClick}
      role={selectable ? 'radio' : undefined}
      aria-checked={selectable ? selected : undefined}
      tabIndex={selectable ? 0 : undefined}
      onKeyDown={(e) => {
        if (selectable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      <div className="card-body p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            {selectable && (
              <div className={classNames(
                'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors',
                selected ? 'border-primary bg-primary' : 'border-base-content/30'
              )}>
                {selected && <CheckCircle size={12} className="text-primary-content" />}
              </div>
            )}
            <h3 className="font-semibold text-sm">{name}</h3>
            {isDefault && (
              <span className="badge badge-primary badge-xs">Défaut</span>
            )}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {onEdit && (
              <button
                className="btn btn-ghost btn-circle btn-xs"
                onClick={(e) => {
                  e.stopPropagation()
                  onEdit(address)
                }}
                aria-label="Modifier l'adresse"
              >
                <Edit3 size={14} />
              </button>
            )}
            {onDelete && (
              <button
                className="btn btn-ghost btn-circle btn-xs text-error"
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete(address)
                }}
                aria-label="Supprimer l'adresse"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="text-sm text-base-content/70 space-y-1 mt-1">
          <div className="flex items-start gap-2">
            <MapPin size={14} className="shrink-0 mt-0.5 opacity-50" />
            <div>
              <p>{street}</p>
              <p>{city}{state ? `, ${state}` : ''} {zip}</p>
              <p>{country}</p>
            </div>
          </div>
          {phone && (
            <div className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 opacity-50" />
              <p>{phone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddressCard

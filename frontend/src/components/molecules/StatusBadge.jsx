import { Badge } from '../atoms/Badge'

const ORDER_STATUS_MAP = {
  pending: { label: 'En attente', variant: 'warning' },
  confirmed: { label: 'Confirmée', variant: 'info' },
  processing: { label: 'En cours', variant: 'info' },
  shipped: { label: 'Expédiée', variant: 'primary' },
  delivered: { label: 'Livrée', variant: 'success' },
  completed: { label: 'Terminée', variant: 'success' },
  cancelled: { label: 'Annulée', variant: 'error' },
  refunded: { label: 'Remboursée', variant: 'accent' },
  returned: { label: 'Retournée', variant: 'warning' },
  failed: { label: 'Échouée', variant: 'error' },
}

const PRODUCT_STATUS_MAP = {
  active: { label: 'Actif', variant: 'success' },
  draft: { label: 'Brouillon', variant: 'ghost' },
  archived: { label: 'Archivé', variant: 'neutral' },
  out_of_stock: { label: 'Rupture de stock', variant: 'error' },
  low_stock: { label: 'Stock faible', variant: 'warning' },
  suspended: { label: 'Suspendu', variant: 'error' },
}

const USER_STATUS_MAP = {
  active: { label: 'Actif', variant: 'success' },
  inactive: { label: 'Inactif', variant: 'ghost' },
  banned: { label: 'Banni', variant: 'error' },
  pending: { label: 'En attente', variant: 'warning' },
  verified: { label: 'Vérifié', variant: 'info' },
  unverified: { label: 'Non vérifié', variant: 'neutral' },
}

const STATUS_MAPS = {
  order: ORDER_STATUS_MAP,
  product: PRODUCT_STATUS_MAP,
  user: USER_STATUS_MAP,
}

export function StatusBadge({ status, type = 'order', className = '' }) {
  const map = STATUS_MAPS[type] || {}
  const config = map[status] || { label: status, variant: 'neutral' }

  return (
    <Badge variant={config.variant} size="sm" dot className={className}>
      {config.label}
    </Badge>
  )
}

export default StatusBadge

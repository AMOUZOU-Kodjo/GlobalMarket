import { CheckCircle, Clock, Circle, AlertCircle } from 'lucide-react'
import { formatDate } from '../../utils/formatDate'
import classNames from '../../utils/classNames'

export function TimelineItem({
  title,
  description,
  date,
  status = 'pending',
  icon,
  isLast = false,
}) {
  const statusConfig = {
    completed: {
      icon: icon || <CheckCircle size={20} />,
      lineColor: 'bg-primary',
      iconBg: 'bg-primary text-primary-content',
      ringColor: 'ring-primary/20',
    },
    active: {
      icon: icon || <Clock size={20} />,
      lineColor: 'bg-primary/30',
      iconBg: 'bg-primary text-primary-content animate-pulse',
      ringColor: 'ring-primary/30',
    },
    pending: {
      icon: icon || <Circle size={20} />,
      lineColor: 'bg-base-300',
      iconBg: 'bg-base-300 text-base-content/50',
      ringColor: 'ring-base-300/30',
    },
  }[status] || {
    icon: icon || <AlertCircle size={20} />,
    lineColor: 'bg-base-300',
    iconBg: 'bg-base-300 text-base-content/50',
    ringColor: 'ring-base-300/30',
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={classNames(
            'w-10 h-10 rounded-full flex items-center justify-center ring-4 shrink-0 z-10',
            statusConfig.iconBg,
            statusConfig.ringColor
          )}
        >
          {statusConfig.icon}
        </div>
        {!isLast && (
          <div className={classNames('w-0.5 flex-1 min-h-8', statusConfig.lineColor)} />
        )}
      </div>

      <div className={classNames('pb-8', isLast && 'pb-0')}>
        <h4 className={classNames(
          'font-semibold text-sm',
          status === 'pending' && 'text-base-content/50'
        )}>
          {title}
        </h4>
        {description && (
          <p className="text-sm text-base-content/60 mt-0.5">{description}</p>
        )}
        {date && (
          <p className="text-xs text-base-content/40 mt-1">
            {formatDate(date, { style: 'relative' })}
          </p>
        )}
      </div>
    </div>
  )
}

export default TimelineItem

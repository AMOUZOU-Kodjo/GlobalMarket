import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  Clock,
  Package,
  Truck,
  MapPin,
  CreditCard,
  AlertCircle,
  XCircle,
} from "lucide-react";
import { formatDate } from "../../utils/formatDate";

const statusConfig = {
  pending: { icon: Clock, color: "text-base-content/50", bg: "bg-base-300" },
  confirmed: { icon: CheckCircle, color: "text-info", bg: "bg-info/10" },
  processing: { icon: Package, color: "text-warning", bg: "bg-warning/10" },
  shipped: { icon: Truck, color: "text-secondary", bg: "bg-secondary/10" },
  delivered: { icon: MapPin, color: "text-success", bg: "bg-success/10" },
  paid: { icon: CreditCard, color: "text-success", bg: "bg-success/10" },
  cancelled: { icon: XCircle, color: "text-error", bg: "bg-error/10" },
  failed: { icon: AlertCircle, color: "text-error", bg: "bg-error/10" },
  default: { icon: Clock, color: "text-base-content/50", bg: "bg-base-300" },
};

function getConfig(status) {
  const key = (status || "").toLowerCase().replace(/\s+/g, "");
  return statusConfig[key] || statusConfig.default;
}

export function OrderTimeline({
  status,
  timeline = [],
  className = "",
}) {
  const { t } = useTranslation();
  if (!timeline.length) {
    return (
      <div className={`text-center py-8 opacity-50 ${className}`}>
        <Clock size={32} className="mx-auto mb-2" />
        <p className="text-sm">{t('orders.noTracking')}</p>
      </div>
    );
  }

  return (
    <div className={`flow-root ${className}`}>
      <ul className="-mb-8">
        {timeline.map((item, index) => {
          const isLast = index === timeline.length - 1;
          const isCompleted = item.completed;
          const isCurrent =
            item.status &&
            status &&
            item.status.toLowerCase() === status.toLowerCase();
          const config = getConfig(item.status);
          const Icon = config.icon;

          return (
            <li key={index}>
              <div className="relative pb-8">
                {!isLast && (
                  <span
                    className={`absolute top-4 left-4 -ml-px h-full w-0.5 ${
                      isCompleted ? "bg-primary" : "bg-base-300"
                    }`}
                    aria-hidden="true"
                  />
                )}

                <div className="relative flex items-start gap-3">
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
                      isCompleted
                        ? `${config.bg} ${config.color}`
                        : isCurrent
                        ? `${config.bg} ${config.color} ring-4 ring-base-200`
                        : "bg-base-200 text-base-content/40"
                    }`}
                  >
                    <Icon size={16} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4
                        className={`text-sm font-medium ${
                          isCurrent ? "text-base-content" : "text-base-content/70"
                        }`}
                      >
                        {item.status}
                      </h4>
                      {isCurrent && (
                        <span className="badge badge-primary badge-sm">
                          {t('orders.current')}
                        </span>
                      )}
                      {isCompleted && !isCurrent && (
                        <CheckCircle size={14} className="text-success" />
                      )}
                    </div>
                    {item.description && (
                      <p className="text-sm opacity-60 mt-0.5">
                        {item.description}
                      </p>
                    )}
                    {item.date && (
                      <time className="text-xs opacity-40 mt-0.5 block">
                        {formatDate(item.date, { style: "long" })}
                      </time>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderTimeline;

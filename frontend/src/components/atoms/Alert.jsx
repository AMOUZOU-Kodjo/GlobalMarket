import { X, Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const defaultIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

export function Alert({
  type = "info",
  children,
  closable = false,
  onClose,
  icon: IconProp,
  className = "",
}) {
  const alertClass = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  }[type];

  const Icon = IconProp || defaultIcons[type];

  return (
    <div role="alert" className={`alert ${alertClass} ${className}`}>
      {Icon && <Icon size={20} />}
      <span className="flex-1">{children}</span>
      {closable && (
        <button type="button" className="btn btn-ghost btn-xs" onClick={onClose}>
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default Alert;

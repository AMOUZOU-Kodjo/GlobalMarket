import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  actions,
  closable = true,
}) {
  const sizeClass = {
    sm: "modal-middle",
    md: "modal-middle",
    lg: "modal-middle",
    xl: "modal-middle",
    full: "modal-middle",
  }[size];

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget && closable) {
        onClose();
      }
    },
    [closable, onClose]
  );

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen && closable) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closable, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <dialog
      className={`modal ${isOpen ? "modal-open" : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={`modal-box ${sizeClass} w-full`}>
        {(title || closable) && (
          <div className="flex items-center justify-between mb-4">
            {title && <h3 className="text-lg font-bold">{title}</h3>}
            {closable && (
              <button
                type="button"
                className="btn btn-ghost btn-sm btn-circle"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}
        <div>{children}</div>
        {actions && (
          <div className="modal-action">{actions}</div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        {closable ? <button type="button" onClick={onClose}>close</button> : <button type="button">close</button>}
      </form>
    </dialog>
  );
}

export default Modal;

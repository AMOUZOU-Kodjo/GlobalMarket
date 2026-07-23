import { useEffect } from "react";
import { X } from "lucide-react";

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  side = "right",
  size,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const widthClass = {
    sm: "w-72",
    md: "w-96",
    lg: "w-[32rem]",
  }[size] || "w-96";

  return (
    <div className={`drawer ${side === "left" ? "drawer-start" : "drawer-end"} ${isOpen ? "drawer-open" : ""}`}>
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="drawer-content" onClick={isOpen ? onClose : undefined}>
        <label
          className="drawer-overlay"
          onClick={onClose}
          aria-label="Close drawer"
        />
      </div>
      <div className={`drawer-side z-50 ${widthClass}`}>
        <div className="bg-base-100 min-h-full flex flex-col">
          {title && (
            <div className="flex items-center justify-between p-4 border-b border-base-200">
              {title && <h3 className="text-lg font-bold">{title}</h3>}
              <button
                type="button"
                className="btn btn-ghost btn-sm btn-circle"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          )}
          <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

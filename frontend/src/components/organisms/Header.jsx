import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";

export function Header({
  title,
  subtitle,
  breadcrumbs = [],
  backLink,
  backLabel = "Retour",
  actions,
  className = "",
}) {
  return (
    <div className={`mb-6 ${className}`}>
      {breadcrumbs.length > 0 && (
        <nav className="text-sm mb-3">
          <ol className="flex items-center gap-1 flex-wrap">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={index} className="flex items-center gap-1">
                  {index > 0 && (
                    <ChevronRight size={14} className="opacity-40" />
                  )}
                  {crumb.href && !isLast ? (
                    <Link
                      to={crumb.href}
                      className="link link-hover opacity-60 hover:opacity-100"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "font-medium" : "opacity-60"}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-0">
          {backLink && (
            <Link
              to={backLink}
              className="inline-flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 mb-2 transition-opacity"
            >
              <ArrowLeft size={16} />
              {backLabel}
            </Link>
          )}
          {title && (
            <h1 className="text-2xl md:text-3xl font-bold truncate">{title}</h1>
          )}
          {subtitle && (
            <p className="text-sm opacity-60 mt-1">{subtitle}</p>
          )}
        </div>

        {actions && <div className="flex items-center gap-2 flex-shrink-0">{actions}</div>}
      </div>
    </div>
  );
}

export default Header;

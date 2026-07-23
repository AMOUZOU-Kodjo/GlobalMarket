import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items = [], className = "" }) {
  return (
    <div className={`text-sm breadcrumbs ${className}`}>
      <ul>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index}>
              {item.href && !isLast ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span className={isLast ? "font-semibold opacity-80" : ""}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb;

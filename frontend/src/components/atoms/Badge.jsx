export function Badge({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  outline = false,
  className = "",
}) {
  const variantClass = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    neutral: "badge-neutral",
    success: "badge-success",
    warning: "badge-warning",
    error: "badge-error",
    info: "badge-info",
    ghost: "badge-ghost",
  }[variant];

  const sizeClass = {
    xs: "badge-xs",
    sm: "badge-sm",
    md: "badge-md",
  }[size];

  return (
    <span
      className={`badge ${variantClass} ${sizeClass} ${outline ? "badge-outline" : ""} ${className}`}
    >
      {dot && (
        <span
          className={`badge-${variant === "ghost" ? "neutral" : variant} badge-xs badge-${outline ? "outline" : "solid"} rounded-full`}
          style={{ width: 6, height: 6, minWidth: 6 }}
        />
      )}
      {children}
    </span>
  );
}

export default Badge;

export function Card({
  children,
  className = "",
  hover = false,
  bordered = true,
  compact = false,
}) {
  return (
    <div
      className={`card ${bordered ? "card-border" : ""} ${hover ? "hover:shadow-md transition-shadow" : ""} ${compact ? "card-compact" : ""} bg-base-100 ${className}`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;

export function ProgressBar({
  value = 0,
  color = "primary",
  size = "md",
  showLabel = false,
  striped = false,
  animated = false,
}) {
  const colorClass = {
    primary: "progress-primary",
    secondary: "progress-secondary",
    accent: "progress-accent",
    neutral: "progress-neutral",
    success: "progress-success",
    warning: "progress-warning",
    error: "progress-error",
    info: "progress-info",
  }[color];

  const sizeClass = {
    xs: "h-1",
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  }[size];

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full">
      <progress
        className={`progress ${colorClass || ""} w-full ${sizeClass} ${striped ? "progress-striped" : ""} ${animated ? "progress-animated" : ""}`}
        value={clampedValue}
        max="100"
      />
      {showLabel && (
        <div className="text-xs text-right mt-1 opacity-70">
          {Math.round(clampedValue)}%
        </div>
      )}
    </div>
  );
}

export default ProgressBar;

import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  neutral: Minus,
};

const trendColors = {
  up: "text-success",
  down: "text-error",
  neutral: "text-base-content/50",
};

const cardColors = {
  primary: "border-l-primary",
  secondary: "border-l-secondary",
  accent: "border-l-accent",
  success: "border-l-success",
  warning: "border-l-warning",
  error: "border-l-error",
};

export function KPICard({
  title,
  value,
  icon: Icon,
  trend = "neutral",
  trendValue,
  color = "primary",
  className = "",
}) {
  const TrendIcon = trendIcons[trend] || Minus;

  return (
    <div
      className={`card bg-base-100 border-l-4 ${cardColors[color] || "border-l-primary"} ${className}`}
    >
      <div className="card-body p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm opacity-60 mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          {Icon && (
            <div className="text-primary opacity-60">
              <Icon size={28} strokeWidth={1.5} />
            </div>
          )}
        </div>
        {trendValue && (
          <div className={`flex items-center gap-1 text-sm ${trendColors[trend]}`}>
            <TrendIcon size={14} />
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default KPICard;

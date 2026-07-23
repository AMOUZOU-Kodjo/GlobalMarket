import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Skeleton } from "../atoms/Skeleton";

function KPICard({ stat }) {
  const {
    title,
    value,
    icon: Icon,
    trend,
    trendValue,
    color = "primary",
  } = stat;

  const colorMap = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    error: "bg-error/10 text-error",
    info: "bg-info/10 text-info",
  };

  const trendColorMap = {
    up: "text-success",
    down: "text-error",
    neutral: "text-base-content/50",
  };

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      <div className="card-body p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm opacity-60 mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {trendValue !== undefined && (
              <div
                className={`flex items-center gap-1 mt-1 text-xs ${
                  trendColorMap[trend] || trendColorMap.neutral
                }`}
              >
                <TrendIcon size={14} />
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          {Icon && (
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                colorMap[color] || colorMap.primary
              }`}
            >
              <Icon size={24} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function KPICardSkeleton() {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      <div className="card-body p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Skeleton width="80px" height={12} className="mb-2" />
            <Skeleton width="100px" height={24} />
            <Skeleton width="60px" height={12} className="mt-2" />
          </div>
          <Skeleton variant="rectangular" width={48} height={48} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function StatsOverview({
  stats = [],
  loading = false,
  skeletonCount = 4,
  columns,
  className = "",
}) {
  const gridCols =
    columns ||
    (stats.length <= 2
      ? "grid-cols-1 sm:grid-cols-2"
      : stats.length <= 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4");

  if (loading) {
    return (
      <div className={`grid ${gridCols} gap-4 ${className}`}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <KPICardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!stats.length) return null;

  return (
    <div className={`grid ${gridCols} gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <KPICard key={stat.title || index} stat={stat} />
      ))}
    </div>
  );
}

export default StatsOverview;

import { Star } from "lucide-react";

export function RatingStars({
  value = 0,
  maxStars = 5,
  size = 20,
  readonly = false,
  onChange,
  className = "",
}) {
  const handleClick = (rating) => {
    if (!readonly && onChange) {
      onChange(rating);
    }
  };

  const handleKeyDown = (e, rating) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(rating);
    }
  };

  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="group">
      {Array.from({ length: maxStars }, (_, i) => {
        const starNumber = i + 1;
        const fillLevel = Math.min(Math.max(value - i, 0), 1);

        return (
          <button
            key={i}
            type="button"
            className={`relative ${readonly ? "cursor-default" : "cursor-pointer"} btn btn-ghost btn-xs p-0 min-h-0`}
            onClick={() => handleClick(starNumber)}
            onKeyDown={(e) => handleKeyDown(e, starNumber)}
            disabled={readonly}
            tabIndex={readonly ? -1 : 0}
            aria-label={`Rate ${starNumber} star${starNumber > 1 ? "s" : ""}`}
          >
            <Star
              size={size}
              className="text-base-content/20"
              fill="currentColor"
              strokeWidth={0}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillLevel * 100}%` }}
            >
              <Star
                size={size}
                className="text-warning"
                fill="currentColor"
                strokeWidth={0}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default RatingStars;

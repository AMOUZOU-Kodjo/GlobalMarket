import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Skeleton } from "./Skeleton";

export function Image({
  src,
  alt = "",
  className = "",
  placeholderSrc,
  rounded = false,
}) {
  const [state, setState] = useState("loading");

  const handleLoad = () => setState("loaded");
  const handleError = () => setState("error");

  return (
    <div className={`relative overflow-hidden ${rounded ? "rounded-lg" : ""} ${className}`}>
      {state === "loading" && (
        <div className="absolute inset-0">
          {placeholderSrc ? (
            <img
              src={placeholderSrc}
              alt=""
              className="w-full h-full object-cover blur-sm scale-105"
            />
          ) : (
            <Skeleton variant="rectangular" className="w-full h-full" />
          )}
        </div>
      )}

      {state === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-base-200">
          <div className="flex flex-col items-center gap-2 text-base-content/40">
            <ImageIcon size={32} />
            <span className="text-xs">Failed to load</span>
          </div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${state === "loaded" ? "opacity-100" : "opacity-0"}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

export default Image;

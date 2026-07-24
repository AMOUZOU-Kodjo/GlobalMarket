import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ZoomIn, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

export function ProductImageGallery({
  images = [],
  mainImageIndex: controlledIndex,
  onImageChange,
  className = "",
}) {
  const { t } = useTranslation();
  const [internalIndex, setInternalIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const activeIndex =
    controlledIndex !== undefined ? controlledIndex : internalIndex;
  const currentImage = images[activeIndex] || images[0] || "/placeholder.svg";

  const setActiveIndex = (index) => {
    if (onImageChange) {
      onImageChange(index);
    } else {
      setInternalIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(newIndex);
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  if (!images.length) {
    return (
      <div className={`bg-base-200 rounded-xl aspect-square flex items-center justify-center ${className}`}>
        <span className="opacity-30 text-sm">{t('products.noImage')}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col-reverse gap-3 ${className}`}>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                index === activeIndex
                  ? "border-primary"
                  : "border-base-300 hover:border-base-content/30"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={img}
                alt={t('products.viewN', { n: index + 1 })}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      <div className="relative">
        <div
          className="relative aspect-square rounded-xl overflow-hidden bg-base-200 cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={currentImage}
            alt={t('products.mainImage')}
            className={`w-full h-full object-cover transition-transform duration-200 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }
                : undefined
            }
            draggable={false}
          />

          {!isZoomed && images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
              <button
                type="button"
                className="btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100 border-none pointer-events-auto"
                onClick={handlePrev}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100 border-none pointer-events-auto"
                onClick={handleNext}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {!isZoomed && (
            <div className="absolute top-2 right-2">
              <span className="btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100 border-none pointer-events-none">
                <ZoomIn size={16} />
              </span>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="text-center text-xs opacity-40 mt-2">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageGallery;

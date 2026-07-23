import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCarousel({
  slides = [],
  autoPlayInterval = 5000,
  className = "",
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (index) => {
      setCurrent((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, goNext, autoPlayInterval, slides.length]);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[16/6] md:aspect-[16/5]">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={s.image}
              alt={s.title || ""}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

            {(s.title || s.subtitle || s.ctaText) && (
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-lg">
                    {s.title && (
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                        {s.title}
                      </h2>
                    )}
                    {s.subtitle && (
                      <p className="text-sm md:text-base text-white/80 mb-4">
                        {s.subtitle}
                      </p>
                    )}
                    {s.ctaText && (
                      <Link
                        to={s.ctaLink || "#"}
                        className="btn btn-primary btn-sm md:btn-md"
                      >
                        {s.ctaText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-sm bg-base-100/70 hover:bg-base-100 border-none"
            onClick={goPrev}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-sm bg-base-100/70 hover:bg-base-100 border-none"
            onClick={goNext}
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`btn btn-xs btn-circle border-none ${
                  index === current
                    ? "btn-primary w-6"
                    : "bg-base-100/50 hover:bg-base-100/80 w-3"
                }`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default HeroCarousel;

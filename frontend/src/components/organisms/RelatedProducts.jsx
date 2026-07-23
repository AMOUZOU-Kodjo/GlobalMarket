import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";

export function RelatedProducts({
  products = [],
  title = "Produits similaires",
  onAddToCart,
  className = "",
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-1">
          <button
            type="button"
            className="btn btn-circle btn-sm btn-ghost"
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="btn btn-circle btn-sm btn-ghost"
            onClick={() => scroll("right")}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
        style={{ scrollbarWidth: "thin" }}
      >
        {products.map((product) => (
          <div
            key={product._id || product.id}
            className="flex-shrink-0 w-56 snap-start"
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;

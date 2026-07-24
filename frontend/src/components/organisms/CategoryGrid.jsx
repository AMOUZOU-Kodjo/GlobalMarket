import { Link } from "react-router-dom";
import { Package } from "lucide-react";

export function CategoryGrid({
  categories = [],
  columns,
  className = "",
}) {
  if (!categories.length) return null;

  const gridCols = columns || "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";

  return (
    <div className={`grid ${gridCols} gap-4 ${className}`}>
      {categories.map((category) => {
        const slug = category.slug || category.id || category._id;
        const name = category.name || category.label;
        const imageUrl = category.image;
        const emojiIcon = !imageUrl ? category.icon : null;
        const productCount = category.productCount ?? category.count;

        return (
          <Link
            key={slug}
            to={`/category/${slug}`}
            className="group card bg-base-100 border border-base-200 hover:shadow-md transition-all overflow-hidden"
          >
            <div className="aspect-square overflow-hidden bg-base-200">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              ) : emojiIcon ? (
                <div className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                  {emojiIcon}
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Package
                    size={40}
                    className="text-base-content/20 group-hover:text-primary/40 transition-colors"
                  />
                </div>
              )}
            </div>

            <div className="card-body p-3 items-center text-center">
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                {name}
              </h3>
              {productCount !== undefined && (
                <p className="text-xs opacity-50">
                  {productCount} produit{productCount !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryGrid;

import { Link } from "react-router-dom";
import { ShoppingCart, Star, Store } from "lucide-react";
import { Badge } from "../atoms/Badge";
import formatCurrency from "../../utils/formatCurrency";

export function ProductCard({ product, onAddToCart, className = "" }) {
  const {
    _id,
    id,
    name,
    slug,
    price,
    compareAtPrice,
    originalPrice,
    image,
    images,
    category,
    seller,
    averageRating,
    rating: ratingProp,
    reviewCount,
    stock,
    badges,
  } = product || {};

  const productId = _id || id;
  const productRating = averageRating || ratingProp;
  const imageUrl = image || (images && (typeof images[0] === 'string' ? images[0] : images[0]?.url)) || "/placeholder.png";
  const numCompare = Number(compareAtPrice || originalPrice || 0);
  const numPrice = Number(price || 0);
  const discount =
    numCompare > numPrice
      ? Math.round(((numCompare - numPrice) / numCompare) * 100)
      : 0;
  const inStock = stock === undefined || stock > 0;

  const renderStars = (value) => {
    const stars = [];
    const rounded = Math.round(value || 0);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={14}
          className={i <= rounded ? "fill-warning text-warning" : "text-base-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className={`card bg-base-100 shadow-sm hover:shadow-md transition-shadow border border-base-200 ${className}`}>
      <Link to={`/products/${slug || productId}`} className="relative block">
        <figure className="aspect-square overflow-hidden bg-base-200">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </figure>

        {discount > 0 && (
          <div className="absolute top-2 left-2">
            <Badge variant="error" size="sm">-{discount}%</Badge>
          </div>
        )}

        {badges && badges.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {badges.map((badge, i) => (
              <Badge key={i} variant="primary" size="xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </Link>

      <div className="card-body p-4 gap-2">
        {category && (
          <Badge variant="ghost" size="xs" className="w-fit">
            {typeof category === "string" ? category : category.name}
          </Badge>
        )}

        <Link to={`/products/${slug || productId}`} className="hover:link">
          <h3 className="card-title text-sm leading-snug line-clamp-2">
            {name}
          </h3>
        </Link>

        {seller && (
          <div className="flex items-center gap-1 text-xs opacity-60">
            <Store size={12} />
            <span className="truncate">
              {typeof seller === "string" ? seller : seller.shopName || seller.name}
            </span>
          </div>
        )}

        <div className="flex items-center gap-1">
          {renderStars(productRating)}
          {reviewCount > 0 && (
            <span className="text-xs opacity-50 ml-0.5">({reviewCount})</span>
          )}
        </div>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-lg font-bold text-primary">
            {formatCurrency(price)}
          </span>
          {(compareAtPrice || originalPrice) && (compareAtPrice || originalPrice) > price && (
            <span className="text-sm line-through opacity-40">
              {formatCurrency(compareAtPrice || originalPrice)}
            </span>
          )}
        </div>

        <div className="card-actions justify-end mt-1">
          <button
            type="button"
            className="btn btn-primary btn-sm btn-block"
            disabled={!inStock}
            onClick={(e) => {
              e.preventDefault();
              onAddToCart?.(product);
            }}
          >
            <ShoppingCart size={16} />
            {inStock ? "Ajouter au panier" : "Épuisé"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

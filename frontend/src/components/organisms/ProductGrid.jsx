import { useTranslation } from "react-i18next";
import { LayoutGrid, List, PackageSearch } from "lucide-react";
import { Skeleton } from "../atoms/Skeleton";
import { EmptyState } from "../atoms/EmptyState";
import { ProductCard } from "./ProductCard";
import formatCurrency from "../../utils/formatCurrency";

function ProductCardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200">
      <Skeleton variant="rectangular" className="aspect-square rounded-t-xl" />
      <div className="card-body p-4 gap-3">
        <Skeleton width="40%" height={12} />
        <Skeleton width="80%" height={16} />
        <Skeleton width="60%" height={12} />
        <Skeleton width="30%" height={12} />
        <Skeleton width="100%" height={32} className="mt-2" />
      </div>
    </div>
  );
}

function ProductListItemSkeleton() {
  return (
    <div className="flex gap-4 p-4 bg-base-100 shadow-sm border border-base-200 rounded-xl">
      <Skeleton variant="rectangular" className="w-32 h-32 flex-shrink-0 rounded-lg" />
      <div className="flex-1 flex flex-col gap-2">
        <Skeleton width="40%" height={12} />
        <Skeleton width="70%" height={16} />
        <Skeleton width="50%" height={12} />
        <Skeleton width="25%" height={12} />
      </div>
    </div>
  );
}

function ProductListItem({ product, onAddToCart }) {
  const { t } = useTranslation();
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
  } = product || {};

  const productId = _id || id;
  const imageUrl = image || (images && images[0]?.url) || "/placeholder.svg";
  const discount =
    (compareAtPrice || originalPrice) && (compareAtPrice || originalPrice) > price
      ? Math.round((((compareAtPrice || originalPrice) - price) / (compareAtPrice || originalPrice)) * 100)
      : 0;
  const inStock = stock === undefined || stock > 0;

  return (
    <div className="flex gap-4 p-4 bg-base-100 shadow-sm border border-base-200 rounded-xl hover:shadow-md transition-shadow">
      <a href={`/products/${slug || productId}`} className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 object-cover rounded-lg"
          loading="lazy"
        />
      </a>
      <div className="flex-1 flex flex-col min-w-0">
        {category && (
          <span className="text-xs opacity-50 mb-0.5">
            {typeof category === "string" ? category : category.name}
          </span>
        )}
        <a href={`/products/${slug || productId}`} className="hover:link">
          <h3 className="font-semibold text-base line-clamp-1">{name}</h3>
        </a>
        {seller && (
          <span className="text-xs opacity-50">
            {typeof seller === "string" ? seller : seller.shopName || seller.name}
          </span>
        )}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-primary text-lg">
            {formatCurrency(price)}
          </span>
          {discount > 0 && (
            <>
              <span className="line-through text-sm opacity-40">
                {formatCurrency(compareAtPrice || originalPrice)}
              </span>
              <span className="badge badge-error badge-sm">-{discount}%</span>
            </>
          )}
        </div>
        <div className="mt-auto pt-2">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            disabled={!inStock}
            onClick={() => onAddToCart?.(product)}
          >
            {inStock ? t('products.addToCart') : t('products.outOfStock')}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductGrid({
  products = [],
  loading = false,
  skeletonCount = 8,
  layout = "grid",
  emptyMessage,
  onAddToCart,
  className = "",
}) {
  const { t } = useTranslation();
  const resolvedEmptyMessage = emptyMessage || t('products.noneFound');
  if (loading) {
    return (
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            : "flex flex-col gap-3"
        }
      >
        {Array.from({ length: skeletonCount }).map((_, i) =>
          layout === "grid" ? (
            <ProductCardSkeleton key={i} />
          ) : (
            <ProductListItemSkeleton key={i} />
          )
        )}
      </div>
    );
  }

  if (!products.length) {
    return (
      <EmptyState
        icon={PackageSearch}
        title={resolvedEmptyMessage}
        description={t('common.tryModifyFilters')}
      />
    );
  }

  if (layout === "list") {
    return (
      <div className="flex flex-col gap-3">
        {products.map((product) => (
          <ProductListItem
            key={product._id || product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}
    >
      {products.map((product) => (
        <ProductCard
          key={product._id || product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;

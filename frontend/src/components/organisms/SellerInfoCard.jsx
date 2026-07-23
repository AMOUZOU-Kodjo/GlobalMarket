import { Link } from "react-router-dom";
import { Star, Package, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "../atoms/Badge";
import formatNumber from "../../utils/formatNumber";
import { formatDate } from "../../utils/formatDate";

export function SellerInfoCard({ seller, className = "" }) {
  if (!seller) return null;

  const {
    name,
    avatar,
    shopName,
    rating,
    reviewCount,
    productCount,
    memberSince,
  } = seller;

  const renderStars = (value) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < Math.round(value || 0)
            ? "fill-warning text-warning"
            : "text-base-300"
        }
      />
    ));

  const shopSlug = seller.slug || seller._id || seller.id;

  return (
    <div className={`bg-base-100 border border-base-200 rounded-xl p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="avatar">
          <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={avatar || "/default-avatar.png"}
              alt={shopName || name}
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold truncate">
            {shopName || name}
          </h3>
          {shopName && name && (
            <p className="text-sm opacity-60 truncate">{name}</p>
          )}

          <div className="flex items-center gap-1 mt-1">
            {renderStars(rating)}
            {reviewCount > 0 && (
              <span className="text-xs opacity-50 ml-1">
                ({formatNumber(reviewCount)} avis)
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="divider my-3" />

      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-base-200 rounded-lg p-2">
          <Package size={16} className="mx-auto mb-0.5 opacity-50" />
          <p className="font-bold text-sm">{formatNumber(productCount)}</p>
          <p className="text-xs opacity-50">Produits</p>
        </div>
        <div className="bg-base-200 rounded-lg p-2">
          <Star size={16} className="mx-auto mb-0.5 opacity-50" />
          <p className="font-bold text-sm">{rating != null ? Number(rating).toFixed(1) : "N/A"}</p>
          <p className="text-xs opacity-50">Note</p>
        </div>
      </div>

      {memberSince && (
        <div className="flex items-center gap-1.5 text-xs opacity-50 mt-3 justify-center">
          <Calendar size={12} />
          <span>Membre depuis {formatDate(memberSince, { style: "long" })}</span>
        </div>
      )}

      {shopSlug && (
        <Link
          to={`/sellers/${shopSlug}`}
          className="btn btn-outline btn-primary btn-block btn-sm mt-4 gap-1"
        >
          Voir la boutique
          <ExternalLink size={14} />
        </Link>
      )}
    </div>
  );
}

export default SellerInfoCard;

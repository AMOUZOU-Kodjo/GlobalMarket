import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import { Pagination } from "../atoms/Pagination";
import { EmptyState } from "../atoms/EmptyState";
import { Skeleton } from "../atoms/Skeleton";
import { formatDate } from "../../utils/formatDate";

function RatingBar({ stars, count, total }) {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-8 text-right">{stars}</span>
      <Star size={14} className="fill-warning text-warning flex-shrink-0" />
      <progress
        className="progress progress-warning flex-1"
        value={percentage}
        max={100}
      />
      <span className="w-8 text-right opacity-50">{count}</span>
    </div>
  );
}

function ReviewCard({ review }) {
  const renderStars = (value) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < value ? "fill-warning text-warning" : "text-base-300"}
      />
    ));

  return (
    <div className="border-b border-base-200 pb-4 mb-4 last:border-0 last:mb-0">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-3">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-10">
              <span className="text-sm">
                {(review.userName || review.author || "A").charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-sm">
              {review.userName || review.author || "Anonyme"}
            </h4>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {renderStars(review.rating)}
              </div>
              {review.date && (
                <time className="text-xs opacity-40">
                  {formatDate(review.date, { style: "long" })}
                </time>
              )}
            </div>
          </div>
        </div>
      </div>

      {review.title && (
        <h5 className="font-semibold text-sm mb-1">{review.title}</h5>
      )}

      {review.comment && (
        <p className="text-sm opacity-80 leading-relaxed">{review.comment}</p>
      )}

      {review.images && review.images.length > 0 && (
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {review.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Avis image ${i + 1}`}
              className="w-16 h-16 rounded-lg object-cover border border-base-200"
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3">
        {review.helpful !== undefined && (
          <button type="button" className="btn btn-ghost btn-xs gap-1">
            <ThumbsUp size={14} />
            Utile ({review.helpful})
          </button>
        )}
        {review.replies !== undefined && (
          <button type="button" className="btn btn-ghost btn-xs gap-1">
            <MessageSquare size={14} />
            Réponses ({review.replies})
          </button>
        )}
      </div>
    </div>
  );
}

function ReviewSkeleton() {
  return (
    <div className="pb-4 mb-4 border-b border-base-200">
      <div className="flex items-center gap-3 mb-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1">
          <Skeleton width="120px" height={14} />
          <Skeleton width="80px" height={12} className="mt-1" />
        </div>
      </div>
      <Skeleton width="60%" height={14} className="mb-1" />
      <Skeleton variant="rectangular" className="h-16" />
    </div>
  );
}

export function ReviewSection({
  reviews = [],
  rating = 0,
  reviewCount = 0,
  onWriteReview,
  onSort,
  sortBy,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  loading = false,
  className = "",
}) {
  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => Math.round(r.rating) === stars).length,
  }));

  const sortOptions = [
    { value: "recent", label: "Plus récents" },
    { value: "helpful", label: "Plus utiles" },
    { value: "highest", label: "Meilleures notes" },
    { value: "lowest", label: "Notes les plus basses" },
  ];

  const renderStars = (value) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < Math.round(value) ? "fill-warning text-warning" : "text-base-300"}
      />
    ));

  return (
    <div className={className}>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-base-100 border border-base-200 rounded-xl p-4 text-center">
            <div className="text-4xl font-bold mb-1">{Number(rating || 0).toFixed(1)}</div>
            <div className="flex items-center justify-center gap-0.5 mb-1">
              {renderStars(rating)}
            </div>
            <p className="text-sm opacity-50">
              {reviewCount} avis
            </p>

            <div className="flex flex-col gap-1.5 mt-4">
              {ratingDistribution.map((item) => (
                <RatingBar
                  key={item.stars}
                  stars={item.stars}
                  count={item.count}
                  total={reviews.length || 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <select
                className="select select-bordered select-sm"
                value={sortBy || "recent"}
                onChange={(e) => onSort?.(e.target.value)}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {onWriteReview && (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={onWriteReview}
              >
                <MessageSquare size={16} />
                Écrire un avis
              </button>
            )}
          </div>

          {loading && (
            <div>
              {Array.from({ length: 3 }).map((_, i) => (
                <ReviewSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && reviews.length === 0 && (
            <EmptyState
              icon={MessageSquare}
              title="Aucun avis"
              description="Soyez le premier à donner votre avis sur ce produit."
            />
          )}

          {!loading && reviews.length > 0 && (
            <>
              {reviews.map((review, index) => (
                <ReviewCard key={review._id || review.id || index} review={review} />
              ))}

              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;

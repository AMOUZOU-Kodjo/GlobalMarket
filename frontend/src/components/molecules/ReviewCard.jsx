import { Star, MessageSquare, User } from 'lucide-react'
import { formatDate } from '../../utils/formatDate'
import { useState } from 'react'

function StarRating({ rating, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} sur 5 étoiles`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= rating
              ? 'text-warning fill-warning'
              : star - 0.5 <= rating
                ? 'text-warning fill-warning/50'
                : 'text-base-content/20'
          }
        />
      ))}
    </div>
  )
}

export function ReviewCard({ review }) {
  const { user, rating, comment, images, createdAt, response } = review
  const [showAllImages, setShowAllImages] = useState(false)

  const displayImages = showAllImages ? images : images?.slice(0, 3)

  return (
    <div className="card bg-base-100 border border-base-300">
      <div className="card-body p-5 gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder shrink-0">
              {user?.avatar ? (
                <div className="w-9 h-9 rounded-full">
                  <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                </div>
              ) : (
                <div className="bg-secondary text-secondary-content w-9 h-9 rounded-full flex items-center justify-center">
                  <User size={14} />
                </div>
              )}
            </div>
            <div>
              <p className="font-semibold text-sm">{user?.name || 'Utilisateur'}</p>
              {createdAt && (
                <p className="text-xs text-base-content/50">
                  {formatDate(createdAt, { style: 'relative' })}
                </p>
              )}
            </div>
          </div>
          <StarRating rating={rating} />
        </div>

        {comment && (
          <p className="text-sm text-base-content/80 leading-relaxed">{comment}</p>
        )}

        {images && images.length > 0 && (
          <div className="flex gap-2 mt-1 flex-wrap">
            {displayImages.map((img, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-box overflow-hidden bg-base-200"
              >
                <img
                  src={typeof img === 'string' ? img : img.url}
                  alt={typeof img === 'string' ? `Avis ${index + 1}` : img.alt || `Avis ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
            {images.length > 3 && !showAllImages && (
              <button
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-box bg-base-200 flex items-center justify-center text-sm font-semibold hover:bg-base-300 transition-colors"
                onClick={() => setShowAllImages(true)}
              >
                +{images.length - 3}
              </button>
            )}
          </div>
        )}

        {response && (
          <div className="bg-base-200/50 rounded-box p-3 mt-1 border-l-4 border-primary">
            <div className="flex items-center gap-2 mb-1.5">
              <MessageSquare size={13} className="text-primary" />
              <span className="text-xs font-semibold text-primary">Réponse du vendeur</span>
              {response.date && (
                <span className="text-xs text-base-content/40 ml-auto">
                  {formatDate(response.date, { style: 'relative' })}
                </span>
              )}
            </div>
            <p className="text-sm text-base-content/70">{response.text || response.comment}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewCard

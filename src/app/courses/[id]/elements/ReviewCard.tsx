import { StarRating } from "./Starrating";
import { Review } from "./types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex gap-3 py-4 border-b last:border-b-0 border-gray-100  p-[0_10px]">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-9 h-9 rounded-full object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-white">{review.name}</p>
            <p className="text-xs text-gray-400">{review.date}</p>
            <StarRating rating={review.rating} />
          </div>
          <div className="flex items-center gap-2">
            {review.isWarned && (
              <span className="text-xs text-orange-500 font-medium">⚠ Shikoyat qilingan</span>
            )}
            <button className="text-gray-400 hover:text-gray-200">
              <span className="text-lg leading-none">⋮</span>
            </button>
          </div>
        </div>
        <p className="mt-1 text-xs text-gray-200 leading-relaxed line-clamp-3">{review.text}</p>
      </div>
    </article>
  );
}
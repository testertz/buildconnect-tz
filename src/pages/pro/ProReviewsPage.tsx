import { PRO_REVIEWS } from "@/data/proData";
import { RatingStars } from "@/components/cards/RatingStars";

export default function ProReviewsPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">My Reviews</h1>
      <div className="space-y-4">
        {PRO_REVIEWS.map((review) => (
          <div key={review.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-card-foreground">{review.client}</p>
                <p className="text-xs text-muted-foreground">{review.project} · {review.date}</p>
              </div>
              <RatingStars rating={review.rating} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

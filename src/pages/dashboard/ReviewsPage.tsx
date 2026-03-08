import { RatingStars } from "@/components/cards/RatingStars";
import { Star } from "lucide-react";

const reviews = [
  { id: "r1", professional: "John Mwanga", project: "3-Bedroom House Construction", rating: 5, text: "Excellent work on the foundation. Very professional and timely.", date: "2026-03-01" },
  { id: "r2", professional: "Hassan Bakari", project: "Solar Panel Installation", rating: 4, text: "Good installation quality. Communication could be improved.", date: "2026-02-01" },
];

export default function ReviewsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground">My Reviews</h1>
        <p className="text-sm text-muted-foreground">Reviews you've left for professionals</p>
      </div>

      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-sm font-semibold text-card-foreground">{r.professional}</h3>
                <p className="text-xs text-muted-foreground">{r.project}</p>
              </div>
              <RatingStars rating={r.rating} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">"{r.text}"</p>
            <p className="mt-2 text-xs text-muted-foreground/60">{r.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

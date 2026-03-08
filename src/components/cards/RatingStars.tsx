import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  max?: number;
  size?: "sm" | "md";
}

export function RatingStars({ rating, max = 5, size = "sm" }: RatingStarsProps) {
  const sizeClass = size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < Math.floor(rating)
              ? "fill-warning text-warning"
              : i < rating
              ? "fill-warning/50 text-warning"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

import { ADMIN_REVIEWS_MODERATION } from "@/data/adminData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { RatingStars } from "@/components/cards/RatingStars";
import { useToast } from "@/hooks/use-toast";

const statusIcon: Record<string, any> = { approved: CheckCircle, flagged: AlertTriangle, pending: AlertTriangle };
const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = { approved: "default", flagged: "destructive", pending: "secondary" };

export default function AdminReviewsPage() {
  const { toast } = useToast();

  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Review Moderation</h1>

      <div className="space-y-4">
        {ADMIN_REVIEWS_MODERATION.map((review) => (
          <div key={review.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {review.reviewer} → {review.professional}
                </p>
                <RatingStars rating={review.rating} />
              </div>
              <Badge variant={statusVariant[review.status]}>{review.status}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">"{review.comment}"</p>
            <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
            {review.status !== "approved" && (
              <div className="mt-3 flex gap-2">
                <Button size="sm" onClick={() => toast({ title: "Review approved" })}>
                  <CheckCircle className="mr-1 h-3 w-3" /> Approve
                </Button>
                <Button size="sm" variant="destructive" onClick={() => toast({ title: "Review removed" })}>
                  <XCircle className="mr-1 h-3 w-3" /> Remove
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

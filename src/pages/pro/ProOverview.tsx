import { StatsWidget } from "@/components/cards/StatsWidget";
import { FolderKanban, FileText, DollarSign, Star } from "lucide-react";
import { PRO_PROFILE, PRO_QUOTE_REQUESTS, PRO_EARNINGS, PRO_REVIEWS } from "@/data/proData";
import { Badge } from "@/components/ui/badge";

export default function ProOverview() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground">Welcome back, {PRO_PROFILE.name}</h1>
        <p className="text-sm text-muted-foreground">Here's your professional dashboard overview</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsWidget label="Active Projects" value="5" icon={FolderKanban} trend="+2 this month" trendUp />
        <StatsWidget label="Quote Requests" value={String(PRO_QUOTE_REQUESTS.filter(q => q.status === "new").length)} icon={FileText} trend="1 new today" trendUp />
        <StatsWidget label="This Month" value={PRO_EARNINGS.thisMonth} icon={DollarSign} trend="+15%" trendUp />
        <StatsWidget label="Avg Rating" value={String(PRO_PROFILE.rating)} icon={Star} trend={`${PRO_REVIEWS.length} reviews`} trendUp />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Quote Requests */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">Recent Quote Requests</h2>
          <div className="space-y-3">
            {PRO_QUOTE_REQUESTS.slice(0, 3).map((req) => (
              <div key={req.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium text-card-foreground">{req.projectTitle}</p>
                  <p className="text-xs text-muted-foreground">{req.clientName} · {req.location}</p>
                </div>
                <Badge variant={req.status === "new" ? "default" : req.status === "responded" ? "secondary" : "outline"}>
                  {req.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">Recent Reviews</h2>
          <div className="space-y-3">
            {PRO_REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-card-foreground">{review.client}</p>
                  <span className="text-xs text-primary font-medium">★ {review.rating}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

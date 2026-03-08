import { PRO_QUOTE_REQUESTS } from "@/data/proData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, MapPin, Clock, DollarSign } from "lucide-react";

const statusColors: Record<string, string> = {
  new: "default",
  responded: "secondary",
  declined: "outline",
};

export default function ProQuotesPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Quote Requests</h1>

      <div className="space-y-4">
        {PRO_QUOTE_REQUESTS.map((req) => (
          <div key={req.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-base font-semibold text-card-foreground">{req.projectTitle}</h3>
                <p className="text-sm text-muted-foreground">from {req.clientName}</p>
              </div>
              <Badge variant={statusColors[req.status] as any}>{req.status}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{req.description}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" /> {req.budget}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {req.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {req.timeline}</span>
            </div>
            {req.status === "new" && (
              <div className="mt-4 flex gap-2">
                <Button size="sm"><Send className="mr-2 h-3 w-3" /> Send Quote</Button>
                <Button size="sm" variant="outline"><MessageSquare className="mr-2 h-3 w-3" /> Message</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import { ADMIN_DISPUTES } from "@/data/adminData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  open: "destructive", investigating: "secondary", resolved: "outline",
};

export default function AdminDisputesPage() {
  const { toast } = useToast();
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Dispute Resolution</h1>
      <div className="space-y-4">
        {ADMIN_DISPUTES.map((d) => (
          <div key={d.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-card-foreground">{d.project}</p>
                <p className="text-xs text-muted-foreground">{d.client} vs {d.professional}</p>
              </div>
              <Badge variant={statusVariant[d.status]}>{d.status}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{d.reason}</p>
            <p className="mt-1 text-xs text-muted-foreground">{d.date}</p>
            {d.status !== "resolved" && (
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline"><Eye className="mr-1 h-3 w-3" /> Investigate</Button>
                <Button size="sm" onClick={() => toast({ title: "Dispute resolved" })}>
                  <CheckCircle className="mr-1 h-3 w-3" /> Resolve
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

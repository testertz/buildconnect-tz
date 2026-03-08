import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock } from "lucide-react";

const projects = [
  { id: "1", title: "Modern Villa in Masaki", client: "Maria Joseph", status: "in_progress", progress: 65, location: "Dar es Salaam", deadline: "2026-06-15" },
  { id: "2", title: "Warehouse Construction", client: "Abdul Hamid", status: "in_progress", progress: 25, location: "Dar es Salaam", deadline: "2026-09-01" },
  { id: "3", title: "School Building Expansion", client: "Dodoma Education Trust", status: "pending", progress: 0, location: "Dodoma", deadline: "2026-07-20" },
  { id: "4", title: "Residential Complex", client: "Sarah Kimaro", status: "completed", progress: 100, location: "Arusha", deadline: "2026-01-30" },
];

const statusVariant: Record<string, string> = { in_progress: "default", pending: "secondary", completed: "outline" };

export default function ProProjectsPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">My Projects</h1>
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-base font-semibold text-card-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">Client: {p.client}</p>
              </div>
              <Badge variant={statusVariant[p.status] as any}>{p.status.replace("_", " ")}</Badge>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.deadline}</span>
            </div>
            <div className="mt-3">
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-card-foreground">{p.progress}%</span>
              </div>
              <Progress value={p.progress} className="h-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

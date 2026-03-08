import { PRO_PORTFOLIO } from "@/data/proData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, MapPin } from "lucide-react";

export default function ProPortfolioPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Portfolio</h1>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Project</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRO_PORTFOLIO.map((item) => (
          <div key={item.id} className="group overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <div className="aspect-video overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-semibold text-card-foreground">{item.title}</h3>
                <Badge variant="secondary">{item.category}</Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.description}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {item.completedDate}</span>
                <span className="font-medium text-primary">{item.budget}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Add new placeholder */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30">
          <div className="text-center">
            <Plus className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">Add Portfolio Item</p>
          </div>
        </div>
      </div>
    </div>
  );
}

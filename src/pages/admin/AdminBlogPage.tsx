import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const articles = [
  { id: 1, title: "How to Build a House in Tanzania: Complete Guide", status: "published", date: "2026-03-01", views: 1250 },
  { id: 2, title: "Understanding Building Permits in Dar es Salaam", status: "published", date: "2026-02-25", views: 890 },
  { id: 3, title: "Top 10 Construction Materials for Tropical Climate", status: "draft", date: "2026-03-05", views: 0 },
  { id: 4, title: "Solar Energy Solutions for Tanzanian Homes", status: "published", date: "2026-02-18", views: 620 },
];

export default function AdminBlogPage() {
  const { toast } = useToast();
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Blog Management</h1>
        <Button><Plus className="mr-2 h-4 w-4" /> New Article</Button>
      </div>
      <div className="space-y-3">
        {articles.map((a) => (
          <div key={a.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <div>
              <p className="text-sm font-medium text-card-foreground">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.date} · {a.views} views</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={a.status === "published" ? "default" : "secondary"}>{a.status}</Badge>
              <Button size="icon" variant="ghost"><Pencil className="h-3 w-3" /></Button>
              <Button size="icon" variant="ghost" onClick={() => toast({ title: "Article deleted" })}><Trash2 className="h-3 w-3" /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

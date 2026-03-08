import { StatsWidget } from "@/components/cards/StatsWidget";
import { FolderKanban, FileText, Bookmark, Wallet, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MOCK_PROJECTS } from "@/data/dashboardData";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const statusStyles = {
  in_progress: "bg-info/10 text-info",
  pending: "bg-warning/10 text-warning",
  completed: "bg-success/10 text-success",
};

const statusLabels = {
  in_progress: "In Progress",
  pending: "Pending",
  completed: "Completed",
};

export default function DashboardOverview() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Here's your project overview.</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/post-project">Post New Project</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsWidget label="Active Projects" value="2" icon={FolderKanban} trend="+1 this month" trendUp />
        <StatsWidget label="Pending Quotes" value="8" icon={FileText} trend="+3 new" trendUp />
        <StatsWidget label="Saved Professionals" value="12" icon={Bookmark} />
        <StatsWidget label="Total Spent" value="TZS 65M" icon={Wallet} trend="On budget" trendUp />
      </div>

      {/* Recent Projects */}
      <div className="rounded-xl border border-border bg-card shadow-card">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display font-semibold text-card-foreground">Recent Projects</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/projects">View All <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
          </Button>
        </div>
        <div className="divide-y divide-border">
          {MOCK_PROJECTS.map((project) => (
            <div key={project.id} className="flex items-center gap-4 px-6 py-4 hover:bg-muted/30 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-semibold text-card-foreground truncate">{project.title}</h3>
                  <Badge className={`${statusStyles[project.status]} border-0 text-[10px]`}>
                    {statusLabels[project.status]}
                  </Badge>
                </div>
                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.budget}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{project.timeline}</span>
                </div>
                {project.status === "in_progress" && (
                  <div className="mt-2 flex items-center gap-3">
                    <Progress value={project.progress} className="h-1.5 flex-1" />
                    <span className="text-xs font-medium text-muted-foreground">{project.progress}%</span>
                  </div>
                )}
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground">{project.quotesReceived} quotes</p>
                {project.professional && (
                  <p className="text-xs font-medium text-foreground mt-0.5">{project.professional}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

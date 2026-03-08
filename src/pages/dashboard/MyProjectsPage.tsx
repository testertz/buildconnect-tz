import { MOCK_PROJECTS } from "@/data/dashboardData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { MapPin, Clock, FileText, Plus } from "lucide-react";
import { motion } from "framer-motion";

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

export default function MyProjectsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">My Projects</h1>
          <p className="text-sm text-muted-foreground">{MOCK_PROJECTS.length} projects total</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/post-project"><Plus className="mr-2 h-4 w-4" /> New Project</Link>
        </Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-card-hover"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-sm font-semibold text-card-foreground line-clamp-1">{project.title}</h3>
              <Badge className={`${statusStyles[project.status]} border-0 text-[10px] shrink-0`}>
                {statusLabels[project.status]}
              </Badge>
            </div>
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{project.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{project.timeline}</span>
              <span className="flex items-center gap-1"><FileText className="h-3 w-3" />{project.quotesReceived} quotes</span>
            </div>

            {project.status === "in_progress" && (
              <div className="mt-3 flex items-center gap-3">
                <Progress value={project.progress} className="h-1.5 flex-1" />
                <span className="text-xs font-medium text-muted-foreground">{project.progress}%</span>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="font-display text-xs font-bold text-primary">{project.budget}</span>
              {project.professional && (
                <span className="text-xs text-muted-foreground">by {project.professional}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

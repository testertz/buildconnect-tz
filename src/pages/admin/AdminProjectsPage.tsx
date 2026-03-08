import { MOCK_PROJECTS } from "@/data/dashboardData";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const statusVariant: Record<string, "default" | "secondary" | "outline"> = { in_progress: "default", pending: "secondary", completed: "outline" };

export default function AdminProjectsPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Project Management</h1>
      <div className="rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Professional</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_PROJECTS.map((p) => (
              <TableRow key={p.id}>
                <TableCell>
                  <p className="text-sm font-medium text-card-foreground">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.createdAt}</p>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{p.location}</TableCell>
                <TableCell className="text-sm text-card-foreground">{p.budget}</TableCell>
                <TableCell><Badge variant={statusVariant[p.status]}>{p.status.replace("_", " ")}</Badge></TableCell>
                <TableCell className="text-sm text-muted-foreground">{p.professional || "Unassigned"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

import { MOCK_QUOTES } from "@/data/dashboardData";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const statusVariant: Record<string, "default" | "secondary" | "outline"> = { accepted: "default", pending: "secondary", rejected: "outline" };

export default function AdminQuotesPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Quote Monitoring</h1>
      <div className="rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Professional</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_QUOTES.map((q) => (
              <TableRow key={q.id}>
                <TableCell className="text-sm font-medium text-card-foreground">{q.projectTitle}</TableCell>
                <TableCell>
                  <p className="text-sm text-card-foreground">{q.professional}</p>
                  <p className="text-xs text-muted-foreground">{q.profession}</p>
                </TableCell>
                <TableCell className="text-sm text-card-foreground">{q.amount}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{q.timeline}</TableCell>
                <TableCell><Badge variant={statusVariant[q.status]}>{q.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

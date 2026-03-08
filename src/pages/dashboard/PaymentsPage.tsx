import { Badge } from "@/components/ui/badge";
import { CreditCard, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const payments = [
  { id: "pay1", project: "3-Bedroom House Construction", amount: "TZS 15,000,000", date: "2026-02-20", status: "completed" as const, milestone: "Foundation" },
  { id: "pay2", project: "3-Bedroom House Construction", amount: "TZS 10,000,000", date: "2026-03-05", status: "completed" as const, milestone: "Walls" },
  { id: "pay3", project: "Solar Panel Installation", amount: "TZS 8,500,000", date: "2026-01-25", status: "completed" as const, milestone: "Full Payment" },
  { id: "pay4", project: "3-Bedroom House Construction", amount: "TZS 12,000,000", date: "2026-03-20", status: "pending" as const, milestone: "Roofing" },
];

export default function PaymentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Payments</h1>
          <p className="text-sm text-muted-foreground">Track your project payments and invoices</p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Project</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Milestone</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {payments.map((p) => (
                <tr key={p.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-card-foreground">{p.project}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{p.milestone}</td>
                  <td className="px-6 py-4 font-display text-sm font-semibold text-foreground">{p.amount}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{p.date}</td>
                  <td className="px-6 py-4">
                    <Badge className={`border-0 text-[10px] ${p.status === "completed" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                      {p.status === "completed" ? "Paid" : "Pending"}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm"><Download className="h-3.5 w-3.5" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

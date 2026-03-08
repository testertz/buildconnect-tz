import { StatsWidget } from "@/components/cards/StatsWidget";
import { DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { PRO_EARNINGS } from "@/data/proData";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ProEarningsPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Earnings</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsWidget label="Total Earnings" value={PRO_EARNINGS.totalEarnings} icon={DollarSign} />
        <StatsWidget label="This Month" value={PRO_EARNINGS.thisMonth} icon={TrendingUp} trend="+15%" trendUp />
        <StatsWidget label="Pending" value={PRO_EARNINGS.pendingPayments} icon={Clock} />
        <StatsWidget label="Completed Jobs" value={String(PRO_EARNINGS.completedJobs)} icon={CheckCircle} />
      </div>

      {/* Chart */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">Monthly Earnings</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PRO_EARNINGS.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value: number) => [`TZS ${value.toLocaleString()}`, "Earnings"]} />
              <Bar dataKey="earnings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">Recent Payments</h2>
        <div className="space-y-3">
          {PRO_EARNINGS.recentPayments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium text-card-foreground">{payment.project}</p>
                <p className="text-xs text-muted-foreground">{payment.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-card-foreground">{payment.amount}</p>
                <Badge variant={payment.status === "completed" ? "default" : "secondary"}>{payment.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

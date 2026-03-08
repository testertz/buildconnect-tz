import { StatsWidget } from "@/components/cards/StatsWidget";
import { Users, Briefcase, FolderKanban, DollarSign } from "lucide-react";
import { ADMIN_STATS, ADMIN_MONTHLY_ANALYTICS } from "@/data/adminData";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function AdminOverview() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Admin Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsWidget label="Total Users" value={ADMIN_STATS.totalUsers.toLocaleString()} icon={Users} trend={ADMIN_STATS.userGrowth} trendUp />
        <StatsWidget label="Active Professionals" value={ADMIN_STATS.activeProfessionals.toLocaleString()} icon={Briefcase} />
        <StatsWidget label="Projects Posted" value={ADMIN_STATS.projectsPosted.toLocaleString()} icon={FolderKanban} trend={ADMIN_STATS.projectGrowth} trendUp />
        <StatsWidget label="Total Revenue" value={ADMIN_STATS.totalRevenue} icon={DollarSign} trend={ADMIN_STATS.revenueGrowth} trendUp />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">User & Project Growth</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ADMIN_MONTHLY_ANALYTICS}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="hsl(var(--primary))" name="New Users" radius={[4, 4, 0, 0]} />
                <Bar dataKey="projects" fill="hsl(var(--accent))" name="Projects" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">Revenue Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ADMIN_MONTHLY_ANALYTICS}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                <Tooltip formatter={(value: number) => [`TZS ${value.toLocaleString()}`, "Revenue"]} />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

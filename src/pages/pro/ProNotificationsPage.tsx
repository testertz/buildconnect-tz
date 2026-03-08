import { Bell, FileText, MessageSquare, Star, DollarSign } from "lucide-react";

const notifications = [
  { id: 1, icon: FileText, title: "New Quote Request", message: "Maria Joseph requested a quote for '2-Storey House Foundation'", time: "2 hours ago", unread: true },
  { id: 2, icon: MessageSquare, title: "New Message", message: "Abdul Hamid sent you a message about Warehouse Construction", time: "5 hours ago", unread: true },
  { id: 3, icon: Star, title: "New Review", message: "Sarah Kimaro left you a 4-star review", time: "1 day ago", unread: false },
  { id: 4, icon: DollarSign, title: "Payment Received", message: "TZS 3,200,000 received for Office Renovation project", time: "2 days ago", unread: false },
  { id: 5, icon: FileText, title: "Quote Accepted", message: "Your quote for '3-Bedroom House' was accepted", time: "3 days ago", unread: false },
];

export default function ProNotificationsPage() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Notifications</h1>
      <div className="space-y-2">
        {notifications.map((n) => (
          <div key={n.id} className={`flex items-start gap-3 rounded-xl border border-border p-4 ${n.unread ? "bg-primary/5" : "bg-card"}`}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <n.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.message}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">{n.time}</p>
            </div>
            {n.unread && <div className="mt-1 h-2 w-2 rounded-full bg-primary" />}
          </div>
        ))}
      </div>
    </div>
  );
}

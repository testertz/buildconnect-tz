import { Link, useLocation, Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import {
  LayoutDashboard,
  FolderPlus,
  FolderKanban,
  FileText,
  MessageSquare,
  Bookmark,
  CreditCard,
  Star,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Post Project", href: "/dashboard/post-project", icon: FolderPlus },
  { label: "My Projects", href: "/dashboard/projects", icon: FolderKanban },
  { label: "Quotes", href: "/dashboard/quotes", icon: FileText },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { label: "Saved Pros", href: "/dashboard/saved", icon: Bookmark },
  { label: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { label: "Reviews", href: "/dashboard/reviews", icon: Star },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={cn(
            "hidden border-r border-border bg-card transition-all duration-300 md:flex md:flex-col",
            collapsed ? "w-16" : "w-60"
          )}
        >
          <div className="flex flex-1 flex-col gap-1 p-3">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                title={collapsed ? link.label : undefined}
              >
                <link.icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{link.label}</span>}
              </Link>
            ))}
          </div>
          <div className="border-t border-border p-3">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex w-full items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>
        </aside>

        {/* Mobile bottom nav */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-card md:hidden">
          {sidebarLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium",
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-muted/30 pb-20 md:pb-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import { ADMIN_USERS } from "@/data/adminData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Ban, Search, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  active: "default",
  pending: "secondary",
  suspended: "destructive",
};

export default function AdminUsersPage() {
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const filtered = ADMIN_USERS.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">User Management</h1>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Projects</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant[user.status]}>{user.status}</Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{user.joined}</TableCell>
                <TableCell className="text-sm text-card-foreground">{user.projects}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {user.role === "professional" && !(user as any).verified && (
                      <Button size="sm" variant="outline" onClick={() => toast({ title: `${user.name} verified` })}>
                        <ShieldCheck className="mr-1 h-3 w-3" /> Verify
                      </Button>
                    )}
                    {user.status !== "suspended" ? (
                      <Button size="sm" variant="ghost" onClick={() => toast({ title: `${user.name} suspended` })}>
                        <Ban className="h-3 w-3" />
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" onClick={() => toast({ title: `${user.name} reactivated` })}>
                        <CheckCircle className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

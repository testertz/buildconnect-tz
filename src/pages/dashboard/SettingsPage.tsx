import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const handleSave = () => {
    toast({ title: "Settings Saved", description: "Your settings have been updated." });
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account settings</p>
      </div>

      <div className="mx-auto max-w-2xl space-y-6">
        {/* Profile */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h2 className="font-display font-semibold text-card-foreground mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><Label>First Name</Label><Input defaultValue="Mary" className="mt-1.5" /></div>
              <div><Label>Last Name</Label><Input defaultValue="Shirima" className="mt-1.5" /></div>
            </div>
            <div><Label>Email</Label><Input type="email" defaultValue="mary@example.com" className="mt-1.5" /></div>
            <div><Label>Phone</Label><Input defaultValue="+255 755 123 456" className="mt-1.5" /></div>
            <div><Label>City</Label>
              <select className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                <option>Dar es Salaam</option><option>Dodoma</option><option>Arusha</option><option>Mwanza</option>
              </select>
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h2 className="font-display font-semibold text-card-foreground mb-4">Change Password</h2>
          <div className="space-y-4">
            <div><Label>Current Password</Label><Input type="password" className="mt-1.5" /></div>
            <div><Label>New Password</Label><Input type="password" className="mt-1.5" /></div>
            <div><Label>Confirm New Password</Label><Input type="password" className="mt-1.5" /></div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <h2 className="font-display font-semibold text-card-foreground mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: "Email notifications for new quotes", id: "emailQuotes" },
              { label: "SMS notifications for messages", id: "smsMessages" },
              { label: "Project status updates", id: "projectUpdates" },
              { label: "Marketing emails", id: "marketing" },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
                <Switch id={item.id} defaultChecked={item.id !== "marketing"} />
              </div>
            ))}
          </div>
        </div>

        <Button size="lg" className="w-full" onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
}

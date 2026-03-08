import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProSettingsPage() {
  const { toast } = useToast();

  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>

      <div className="space-y-6">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">Change Password</h2>
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" />
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" />
            </div>
            <div className="space-y-2">
              <Label>Confirm New Password</Label>
              <Input type="password" />
            </div>
            <Button onClick={() => toast({ title: "Password updated" })}><Save className="mr-2 h-4 w-4" /> Update Password</Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground">Notification Preferences</h2>
          <div className="space-y-4">
            {["New quote requests", "Messages", "Payment received", "New reviews", "Platform updates"].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-sm text-card-foreground">{item}</span>
                <Switch defaultChecked />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { PRO_SERVICES } from "@/data/proData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Pencil } from "lucide-react";
import { useState } from "react";

export default function ProServicesPage() {
  const [services, setServices] = useState(PRO_SERVICES);

  const toggleAvailability = (id: string) => {
    setServices(services.map(s => s.id === id ? { ...s, available: !s.available } : s));
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">My Services</h1>
        <Button><Plus className="mr-2 h-4 w-4" /> Add Service</Button>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <div key={service.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <div>
              <h3 className="text-sm font-medium text-card-foreground">{service.name}</h3>
              <p className="text-xs text-muted-foreground">{service.priceRange}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={service.available ? "default" : "outline"}>
                {service.available ? "Available" : "Unavailable"}
              </Badge>
              <Switch checked={service.available} onCheckedChange={() => toggleAvailability(service.id)} />
              <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

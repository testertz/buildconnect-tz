import { ADMIN_MATERIAL_PRICES } from "@/data/adminData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const cities = ["Dar es Salaam", "Dodoma", "Arusha", "Mwanza"];

export default function AdminMaterialsPage() {
  const { toast } = useToast();
  const [editing, setEditing] = useState<string | null>(null);
  const [prices, setPrices] = useState(ADMIN_MATERIAL_PRICES);

  const handleSave = (id: string) => {
    setEditing(null);
    toast({ title: "Prices updated", description: "Material prices have been saved." });
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Material Price Manager</h1>

      <div className="rounded-xl border border-border bg-card overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Material</TableHead>
              {cities.map(city => <TableHead key={city}>{city}</TableHead>)}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prices.map((material) => (
              <TableRow key={material.id}>
                <TableCell>
                  <p className="text-sm font-medium text-card-foreground">{material.name}</p>
                  <p className="text-xs text-muted-foreground">per {material.unit}</p>
                </TableCell>
                {cities.map(city => (
                  <TableCell key={city}>
                    {editing === material.id ? (
                      <Input
                        type="number"
                        className="w-24"
                        defaultValue={material.prices[city as keyof typeof material.prices]}
                      />
                    ) : (
                      <span className="text-sm text-card-foreground">
                        TZS {(material.prices[city as keyof typeof material.prices] || 0).toLocaleString()}
                      </span>
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  {editing === material.id ? (
                    <Button size="sm" onClick={() => handleSave(material.id)}>
                      <Save className="mr-1 h-3 w-3" /> Save
                    </Button>
                  ) : (
                    <Button size="sm" variant="ghost" onClick={() => setEditing(material.id)}>
                      <Pencil className="h-3 w-3" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

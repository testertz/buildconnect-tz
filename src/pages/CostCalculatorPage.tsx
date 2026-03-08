import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Calculator } from "lucide-react";

export default function CostCalculatorPage() {
  const [plotSize, setPlotSize] = useState("");
  const [houseType, setHouseType] = useState("residential");
  const [floors, setFloors] = useState("1");
  const [rooms, setRooms] = useState("3");
  const [quality, setQuality] = useState("standard");
  const [result, setResult] = useState<null | { total: number; materials: number; labor: number }>(null);

  const calculate = () => {
    const size = parseFloat(plotSize) || 100;
    const floorCount = parseInt(floors) || 1;
    const roomCount = parseInt(rooms) || 3;
    const qualityMultiplier = quality === "basic" ? 0.7 : quality === "premium" ? 1.5 : 1;
    const typeMultiplier = houseType === "commercial" ? 1.3 : 1;

    const baseCost = size * 350000 * floorCount * qualityMultiplier * typeMultiplier;
    const materials = baseCost * 0.6;
    const labor = baseCost * 0.4;

    setResult({ total: Math.round(baseCost), materials: Math.round(materials), labor: Math.round(labor) });
  };

  const formatTZS = (n: number) => `TZS ${n.toLocaleString()}`;

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground">Project Cost Calculator</h1>
          <p className="mt-2 text-muted-foreground">Estimate your construction costs in Tanzania</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-bold text-card-foreground mb-6">Project Details</h2>
            <div className="space-y-5">
              <div>
                <Label>Plot Size (sqm)</Label>
                <Input type="number" placeholder="e.g. 200" value={plotSize} onChange={(e) => setPlotSize(e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <Label>House Type</Label>
                <select value={houseType} onChange={(e) => setHouseType(e.target.value)} className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Number of Floors</Label>
                  <Input type="number" min="1" max="5" value={floors} onChange={(e) => setFloors(e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label>Number of Rooms</Label>
                  <Input type="number" min="1" value={rooms} onChange={(e) => setRooms(e.target.value)} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label>Material Quality</Label>
                <select value={quality} onChange={(e) => setQuality(e.target.value)} className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <Button onClick={calculate} className="w-full" size="lg">
                <Calculator className="mr-2 h-4 w-4" /> Calculate Estimate
              </Button>
            </div>
          </div>

          <div>
            {result ? (
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h2 className="font-display text-lg font-bold text-card-foreground mb-6">Estimated Cost</h2>
                <div className="space-y-4">
                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-5 text-center">
                    <p className="text-sm text-muted-foreground">Total Estimated Cost</p>
                    <p className="mt-1 font-display text-3xl font-extrabold text-primary">{formatTZS(result.total)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-muted p-4">
                      <p className="text-xs text-muted-foreground">Materials</p>
                      <p className="mt-1 font-display text-lg font-bold text-foreground">{formatTZS(result.materials)}</p>
                    </div>
                    <div className="rounded-lg bg-muted p-4">
                      <p className="text-xs text-muted-foreground">Labor</p>
                      <p className="mt-1 font-display text-lg font-bold text-foreground">{formatTZS(result.labor)}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">* This is a rough estimate. Actual costs may vary based on location, materials, and other factors.</p>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border p-12 text-center">
                <div>
                  <Calculator className="mx-auto h-12 w-12 text-muted-foreground/30" />
                  <p className="mt-4 font-display text-lg font-semibold text-muted-foreground">Enter your project details</p>
                  <p className="mt-1 text-sm text-muted-foreground/70">Fill in the form and click calculate to get an estimate</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

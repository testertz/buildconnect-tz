import { Layout } from "@/components/layout/Layout";
import { MATERIAL_PRICES } from "@/data/mockData";
import { useState } from "react";

const cities = ["Dar es Salaam", "Dodoma", "Arusha", "Mwanza"];

export default function MaterialsPage() {
  const [selectedCity, setSelectedCity] = useState("Dar es Salaam");

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground">Construction Material Prices</h1>
          <p className="mt-2 text-muted-foreground">Current prices across major Tanzanian cities</p>
        </div>
      </div>
      <div className="container py-12">
        {/* City Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                selectedCity === city
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Price Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Material</th>
                  {cities.map((city) => (
                    <th
                      key={city}
                      className={`px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider ${
                        city === selectedCity ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {city}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATERIAL_PRICES.map((material, i) => (
                  <tr key={material.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                    <td className="px-6 py-4 font-display text-sm font-semibold text-card-foreground">{material.name}</td>
                    {cities.map((city) => (
                      <td
                        key={city}
                        className={`px-6 py-4 text-sm ${
                          city === selectedCity ? "font-semibold text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {material.prices[city as keyof typeof material.prices] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">* Prices are approximate and updated weekly. Contact suppliers for exact quotes.</p>
      </div>
    </Layout>
  );
}

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { MOCK_PROFESSIONALS } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, MapPin, X } from "lucide-react";
import { motion } from "framer-motion";

const professions = ["All", "Architect", "Structural Engineer", "Plumber", "Electrician", "Interior Designer", "Landscape Architect"];
const locations = ["All Cities", "Dar es Salaam", "Dodoma", "Arusha", "Mwanza", "Zanzibar"];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Cities");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = MOCK_PROFESSIONALS.filter((p) => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.profession.toLowerCase().includes(search.toLowerCase());
    const matchProfession = selectedProfession === "All" || p.profession.includes(selectedProfession);
    const matchLocation = selectedLocation === "All Cities" || p.location === selectedLocation;
    return matchSearch && matchProfession && matchLocation;
  });

  return (
    <Layout>
      <div className="bg-muted/30 py-8 border-b border-border">
        <div className="container">
          <h1 className="font-display text-2xl font-bold text-foreground">Explore Professionals</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Find verified construction experts across Tanzania
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, profession..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="relative flex-1 max-w-xs">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <select
                className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-4 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <Button
              variant="outline"
              size="default"
              onClick={() => setShowFilters(!showFilters)}
              className="sm:w-auto"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Filter chips */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <p className="text-xs font-medium text-muted-foreground mb-2">Profession</p>
              <div className="flex flex-wrap gap-2">
                {professions.map((p) => (
                  <Badge
                    key={p}
                    variant={selectedProfession === p ? "default" : "secondary"}
                    className="cursor-pointer"
                    onClick={() => setSelectedProfession(p)}
                  >
                    {p}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}

          {/* Active filters */}
          {(selectedProfession !== "All" || selectedLocation !== "All Cities") && (
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedProfession !== "All" && (
                <Badge variant="outline" className="gap-1">
                  {selectedProfession}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedProfession("All")} />
                </Badge>
              )}
              {selectedLocation !== "All Cities" && (
                <Badge variant="outline" className="gap-1">
                  {selectedLocation}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedLocation("All Cities")} />
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="container py-8">
        <p className="text-sm text-muted-foreground mb-6">
          {filtered.length} professional{filtered.length !== 1 ? "s" : ""} found
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pro, i) => (
            <motion.div
              key={pro.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProfessionalCard {...pro} />
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-display font-semibold text-foreground">No professionals found</p>
            <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

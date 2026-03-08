import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const initialCategories = [
  "Architecture", "Structural Engineering", "Plumbing", "Electrical",
  "Masonry", "Roofing", "Painting", "Interior Design",
  "Landscaping", "Renovation", "Solar Installation",
];

export default function AdminCategoriesPage() {
  const { toast } = useToast();
  const [categories, setCategories] = useState(initialCategories);
  const [newCat, setNewCat] = useState("");

  const addCategory = () => {
    if (newCat.trim()) {
      setCategories([...categories, newCat.trim()]);
      setNewCat("");
      toast({ title: "Category added" });
    }
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">Categories Management</h1>

      <div className="flex gap-2 max-w-md">
        <Input placeholder="New category..." value={newCat} onChange={(e) => setNewCat(e.target.value)} />
        <Button onClick={addCategory}><Plus className="mr-2 h-4 w-4" /> Add</Button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
            <span className="text-sm font-medium text-card-foreground">{cat}</span>
            <div className="flex gap-1">
              <Button size="icon" variant="ghost"><Pencil className="h-3 w-3" /></Button>
              <Button size="icon" variant="ghost" onClick={() => {
                setCategories(categories.filter((_, idx) => idx !== i));
                toast({ title: "Category removed" });
              }}><Trash2 className="h-3 w-3" /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

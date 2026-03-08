import { MOCK_PROFESSIONALS } from "@/data/mockData";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { Bookmark } from "lucide-react";

export default function SavedProsPage() {
  const saved = MOCK_PROFESSIONALS.slice(0, 4);
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Saved Professionals</h1>
        <p className="text-sm text-muted-foreground">{saved.length} professionals bookmarked</p>
      </div>
      {saved.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((pro) => <ProfessionalCard key={pro.id} {...pro} />)}
        </div>
      ) : (
        <div className="py-20 text-center">
          <Bookmark className="mx-auto h-12 w-12 text-muted-foreground/30" />
          <p className="mt-4 font-display font-semibold text-muted-foreground">No saved professionals yet</p>
        </div>
      )}
    </div>
  );
}

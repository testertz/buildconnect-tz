import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, MapPin, Calendar, DollarSign, FileText } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const locations = ["Dar es Salaam", "Dodoma", "Arusha", "Mwanza", "Zanzibar"];

export default function PostProjectPage() {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Project Posted!", description: "Your project has been posted successfully. Professionals will start sending quotes." });
    navigate("/dashboard/projects");
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Post New Project</h1>
        <p className="text-sm text-muted-foreground">Describe your project to receive quotes from professionals</p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-6">
          {/* Title */}
          <div>
            <Label htmlFor="title" className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" /> Project Title
            </Label>
            <Input id="title" placeholder="e.g. 3-Bedroom House Construction" className="mt-1.5" required />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              className="mt-1.5 min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Describe your project in detail — what needs to be done, any specific requirements..."
              required
            />
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="budgetMin" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" /> Budget Range (TZS)
              </Label>
              <div className="mt-1.5 flex items-center gap-2">
                <Input id="budgetMin" type="number" placeholder="Min" />
                <span className="text-muted-foreground">—</span>
                <Input type="number" placeholder="Max" />
              </div>
            </div>
            <div>
              <Label htmlFor="timeline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" /> Timeline
              </Label>
              <select id="timeline" className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select timeline</option>
                <option>Less than 1 month</option>
                <option>1 - 3 months</option>
                <option>3 - 6 months</option>
                <option>6 - 12 months</option>
                <option>More than 1 year</option>
              </select>
            </div>
          </div>

          {/* Location & Category */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" /> Location
              </Label>
              <select id="location" className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required>
                <option value="">Select city</option>
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="category">Service Category</Label>
              <select id="category" className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select category</option>
                <option>Architecture</option>
                <option>Structural Engineering</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Interior Design</option>
                <option>Roofing</option>
                <option>Painting</option>
                <option>Solar Installation</option>
                <option>Renovation</option>
              </select>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <Label>Attachments (Plans, Photos)</Label>
            <div
              className={`mt-1.5 flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
                dragActive ? "border-primary bg-primary/5" : "border-border"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
            >
              <Upload className="h-8 w-8 text-muted-foreground/40 mb-3" />
              <p className="text-sm font-medium text-muted-foreground">
                Drag & drop files here, or{" "}
                <label className="cursor-pointer text-primary hover:underline">
                  browse
                  <input type="file" className="hidden" multiple accept="image/*,.pdf,.doc,.dwg" />
                </label>
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">PDF, Images, AutoCAD — Max 10MB each</p>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <Button type="submit" size="lg" className="flex-1">
              Post Project
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

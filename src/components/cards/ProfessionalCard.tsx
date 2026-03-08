import { Star, MapPin, BadgeCheck, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProfessionalCardProps {
  id: string;
  name: string;
  profession: string;
  location: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  experience: string;
  verified: boolean;
  avatar: string;
  skills: string[];
}

export function ProfessionalCard({
  id,
  name,
  profession,
  location,
  rating,
  reviewCount,
  hourlyRate,
  experience,
  verified,
  avatar,
  skills,
}: ProfessionalCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="flex gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-muted">
          <img src={avatar} alt={name} className="h-full w-full object-cover" />
          {verified && (
            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success">
              <BadgeCheck className="h-3 w-3 text-success-foreground" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-sm font-semibold text-card-foreground truncate">
                {name}
              </h3>
              <p className="text-xs text-muted-foreground">{profession}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
              <span className="text-xs font-semibold text-card-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase className="h-3 w-3" /> {experience}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {skills.slice(0, 3).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-[10px] font-medium px-2 py-0.5">
            {skill}
          </Badge>
        ))}
        {skills.length > 3 && (
          <Badge variant="secondary" className="text-[10px] font-medium px-2 py-0.5">
            +{skills.length - 3}
          </Badge>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <div>
          <span className="font-display text-sm font-bold text-primary">{hourlyRate}</span>
          <span className="text-xs text-muted-foreground"> / project</span>
        </div>
        <Button size="sm" asChild>
          <Link to={`/professional/${id}`}>View Profile</Link>
        </Button>
      </div>
    </div>
  );
}

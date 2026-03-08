import { useState } from "react";
import { PRO_PROFILE } from "@/data/proData";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProProfilePage() {
  const { toast } = useToast();
  const [profile, setProfile] = useState(PRO_PROFILE);

  const handleSave = () => {
    toast({ title: "Profile updated", description: "Your changes have been saved." });
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="font-display text-2xl font-bold text-foreground">My Profile</h1>

      <div className="rounded-xl border border-border bg-card p-6">
        {/* Avatar */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 rounded-full bg-primary p-1.5 text-primary-foreground">
              <Camera className="h-3 w-3" />
            </button>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-card-foreground">{profile.name}</h2>
            <p className="text-sm text-muted-foreground">{profile.profession}</p>
            {profile.verified && <Badge className="mt-1">Verified</Badge>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Profession</Label>
            <Input value={profile.profession} onChange={(e) => setProfile({ ...profile, profession: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Years of Experience</Label>
            <Input type="number" value={profile.experience} onChange={(e) => setProfile({ ...profile, experience: Number(e.target.value) })} />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <Label>Bio</Label>
          <Textarea rows={4} value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
        </div>

        <div className="mt-4 space-y-2">
          <Label>Skills</Label>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <Label>Certifications</Label>
          <div className="flex flex-wrap gap-2">
            {profile.certifications.map((cert) => (
              <Badge key={cert} variant="outline">{cert}</Badge>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="mt-6">
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>
    </div>
  );
}

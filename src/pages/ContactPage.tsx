import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">Get in touch with the JengoHub team</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-lg font-bold text-card-foreground mb-6">Send us a message</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><Label>First Name</Label><Input className="mt-1.5" placeholder="John" /></div>
                <div><Label>Last Name</Label><Input className="mt-1.5" placeholder="Mwanga" /></div>
              </div>
              <div><Label>Email</Label><Input type="email" className="mt-1.5" placeholder="your@email.com" /></div>
              <div><Label>Subject</Label><Input className="mt-1.5" placeholder="How can we help?" /></div>
              <div>
                <Label>Message</Label>
                <textarea className="mt-1.5 min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us more..." />
              </div>
              <Button className="w-full" size="lg">Send Message</Button>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Office", desc: "Masaki, Dar es Salaam, Tanzania" },
              { icon: Phone, title: "Phone", desc: "+255 755 000 000" },
              { icon: Mail, title: "Email", desc: "hello@jengohub.co.tz" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

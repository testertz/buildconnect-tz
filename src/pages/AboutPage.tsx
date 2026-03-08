import { Layout } from "@/components/layout/Layout";
import { HardHat, Users, Shield, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gradient-hero py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold text-secondary-foreground">About JengoHub</h1>
          <p className="mt-3 text-secondary-foreground/70 max-w-2xl mx-auto">
            We're on a mission to revolutionize the construction industry in Tanzania by connecting clients with verified, skilled professionals.
          </p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, title: "5,000+ Professionals", desc: "Verified engineers, architects, and fundis across Tanzania." },
            { icon: Shield, title: "Trust & Safety", desc: "Every professional is background-checked and reviewed." },
            { icon: Globe, title: "All Major Cities", desc: "Service coverage across Dar es Salaam, Dodoma, Arusha, and more." },
            { icon: HardHat, title: "10,000+ Projects", desc: "Successfully completed construction projects." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-display font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

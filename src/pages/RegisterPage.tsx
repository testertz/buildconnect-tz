import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { HardHat, Mail, Lock, User, Building2, Briefcase } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState<"client" | "professional">("client");

  return (
    <Layout showFooter={false}>
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <HardHat className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold text-foreground">Create your account</h1>
            <p className="mt-1 text-sm text-muted-foreground">Join JengoHub today</p>
          </div>

          {/* Role Toggle */}
          <div className="mt-6 flex rounded-xl border border-border bg-muted p-1">
            <button
              className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                role === "client" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
              onClick={() => setRole("client")}
            >
              <Building2 className="mr-1.5 inline h-4 w-4" /> Client
            </button>
            <button
              className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
                role === "professional" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
              onClick={() => setRole("professional")}
            >
              <Briefcase className="mr-1.5 inline h-4 w-4" /> Professional
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Mwanga" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="your@email.com" className="pl-10" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+255 7XX XXX XXX" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>

              {role === "professional" && (
                <>
                  <div>
                    <Label htmlFor="profession">Profession</Label>
                    <select
                      id="profession"
                      className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select your profession</option>
                      <option>Architect</option>
                      <option>Structural Engineer</option>
                      <option>Civil Engineer</option>
                      <option>Plumber</option>
                      <option>Electrician</option>
                      <option>Mason</option>
                      <option>Painter</option>
                      <option>Interior Designer</option>
                      <option>Roofer</option>
                      <option>Solar Installer</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="e.g. 5" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="serviceArea">Service Area</Label>
                    <select
                      id="serviceArea"
                      className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select your city</option>
                      <option>Dar es Salaam</option>
                      <option>Dodoma</option>
                      <option>Arusha</option>
                      <option>Mwanza</option>
                      <option>Zanzibar</option>
                    </select>
                  </div>
                </>
              )}

              <Button className="w-full" size="lg">
                Create Account
              </Button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

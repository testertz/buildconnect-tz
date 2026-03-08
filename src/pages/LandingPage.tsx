import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight, Star, Users, ShieldCheck, Clock, Building2, Droplets, Zap, Layers, Home, Paintbrush, Sun, Hammer, ChevronRight, Sofa, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { RatingStars } from "@/components/cards/RatingStars";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { MOCK_PROFESSIONALS, SERVICE_CATEGORIES, TESTIMONIALS, CITIES } from "@/data/mockData";
import heroImage from "@/assets/hero-construction.jpg";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Building2, Construction, Droplets, Zap, Layers, Home, Paintbrush, Sofa, Sun, Hammer,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <ShieldCheck className="h-4 w-4" /> Trusted by 10,000+ homeowners
              </span>
            </motion.div>
            <motion.h1
              className="mt-6 font-display text-4xl font-extrabold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build Your Dream Home with{" "}
              <span className="text-gradient-primary">Verified Experts</span>
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-secondary-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with Tanzania's top construction professionals — engineers, architects, contractors, and skilled fundis.
            </motion.p>

            {/* Search bar */}
            <motion.div
              className="mt-8 mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col gap-3 rounded-2xl bg-card/10 backdrop-blur-md p-3 sm:flex-row sm:items-center border border-secondary-foreground/10">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="What do you need? e.g. Architect, Plumber..."
                    className="border-0 bg-card pl-10 shadow-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="City e.g. Dar es Salaam"
                    className="border-0 bg-card pl-10 shadow-none"
                  />
                </div>
                <Button size="lg" className="shadow-primary" asChild>
                  <Link to="/explore">
                    Search <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: Users, value: "5,000+", label: "Professionals" },
                { icon: Star, value: "4.8", label: "Average Rating" },
                { icon: ShieldCheck, value: "2,000+", label: "Verified" },
                { icon: Clock, value: "10,000+", label: "Projects Done" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 text-secondary-foreground/80">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="font-display font-bold">{stat.value}</span>
                  <span className="text-sm text-secondary-foreground/60">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Service Categories</h2>
            <p className="mt-2 text-muted-foreground">Find the right professional for your project</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {SERVICE_CATEGORIES.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Building2;
              return (
                <motion.div
                  key={cat.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/explore?category=${cat.name}`}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:shadow-card-hover hover:-translate-y-1"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-sm font-semibold text-card-foreground">{cat.name}</span>
                    <span className="text-xs text-muted-foreground">{cat.count} pros</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">Featured Professionals</h2>
              <p className="mt-2 text-muted-foreground">Top-rated experts ready to help</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/explore">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_PROFESSIONALS.slice(0, 6).map((pro, i) => (
              <motion.div
                key={pro.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ProfessionalCard {...pro} />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild>
              <Link to="/explore">View All Professionals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-2 text-muted-foreground">Get started in three simple steps</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Describe Your Project", desc: "Post details about your construction project, budget, and timeline." },
              { step: "02", title: "Get Matched", desc: "Receive quotes from verified professionals in your area." },
              { step: "03", title: "Build with Confidence", desc: "Choose the best pro, track progress, and pay securely." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-xl border border-border bg-card p-8 text-center"
              >
                <span className="font-display text-5xl font-extrabold text-primary/15">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Popular Cities</h2>
            <p className="mt-2 text-muted-foreground">Find professionals near you</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CITIES.map((city, i) => (
              <motion.div
                key={city.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={`/explore?city=${city.name}`}
                  className="group relative block overflow-hidden rounded-xl aspect-[4/3]"
                >
                  <img src={city.image} alt={city.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display font-bold text-card">{city.name}</h3>
                    <p className="text-xs text-card/80">{city.professionals} professionals</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">What Our Users Say</h2>
            <p className="mt-2 text-muted-foreground">Real stories from real customers</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <RatingStars rating={t.rating} />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-display text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-foreground">Ready to Start Building?</h2>
          <p className="mt-3 text-secondary-foreground/70 max-w-lg mx-auto">
            Join thousands of homeowners and professionals on Tanzania's leading construction marketplace.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="hero" asChild>
              <Link to="/register">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link to="/explore">Browse Professionals</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

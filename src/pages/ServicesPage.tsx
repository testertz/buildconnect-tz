import { Layout } from "@/components/layout/Layout";
import { SERVICE_CATEGORIES } from "@/data/mockData";
import { Building2, Construction, Droplets, Zap, Layers, Home, Paintbrush, Sofa, Sun, Hammer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Building2, Construction, Droplets, Zap, Layers, Home, Paintbrush, Sofa, Sun, Hammer,
};

export default function ServicesPage() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground">Service Categories</h1>
          <p className="mt-2 text-muted-foreground">Browse all construction services available on JengoHub</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Building2;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/explore?category=${cat.name}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${cat.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-card-foreground">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.count} professionals</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

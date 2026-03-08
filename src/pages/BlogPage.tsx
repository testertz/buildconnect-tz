import { Layout } from "@/components/layout/Layout";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const articles = [
  { id: "1", title: "Complete Guide to Building a House in Tanzania", category: "Building Guide", readTime: "12 min", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop" },
  { id: "2", title: "Understanding Construction Permits in Dar es Salaam", category: "Permits", readTime: "8 min", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop" },
  { id: "3", title: "How to Choose the Right Contractor", category: "Tips", readTime: "6 min", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop" },
  { id: "4", title: "Cement Types and Their Uses in Construction", category: "Materials", readTime: "10 min", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop" },
  { id: "5", title: "Solar Panel Installation Guide for Homes", category: "Green Building", readTime: "9 min", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop" },
  { id: "6", title: "Budgeting Tips for Your First Home Build", category: "Finance", readTime: "7 min", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" },
];

export default function BlogPage() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground">Knowledge Hub</h1>
          <p className="mt-2 text-muted-foreground">Guides, tips, and resources for building in Tanzania</p>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{article.category}</span>
                  <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <Link to={`/blog/${article.id}`} className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

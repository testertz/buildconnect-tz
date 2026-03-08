import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How do I find a construction professional?", a: "Use our search and filter system to browse verified professionals by location, profession, rating, and price range. You can also post a project and receive quotes." },
  { q: "Are professionals on JengoHub verified?", a: "Yes! All professionals go through a verification process including identity verification, credential checks, and portfolio review." },
  { q: "How much does it cost to use JengoHub?", a: "Creating an account and browsing professionals is free. We charge a small service fee only when you hire a professional through our platform." },
  { q: "What cities do you cover?", a: "We currently serve Dar es Salaam, Dodoma, Arusha, Mwanza, and Zanzibar, with plans to expand to more cities." },
  { q: "How do payments work?", a: "Payments are handled through our secure milestone-based system. You only pay when work is completed to your satisfaction." },
  { q: "Can I leave reviews?", a: "Yes! After a project is completed, both clients and professionals can leave reviews and ratings." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-foreground">Frequently Asked Questions</h1>
          <p className="mt-2 text-muted-foreground">Find answers to common questions about JengoHub</p>
        </div>
      </div>
      <div className="container max-w-3xl py-12">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display font-semibold text-card-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

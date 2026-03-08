import { MOCK_QUOTES } from "@/data/dashboardData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/cards/RatingStars";
import { Check, X, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const statusStyles = {
  accepted: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  rejected: "bg-destructive/10 text-destructive",
};

export default function QuotesPage() {
  const handleAccept = (name: string) => {
    toast({ title: "Quote Accepted", description: `You've accepted the quote from ${name}.` });
  };
  const handleReject = (name: string) => {
    toast({ title: "Quote Rejected", description: `You've rejected the quote from ${name}.`, variant: "destructive" });
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Quotes</h1>
        <p className="text-sm text-muted-foreground">{MOCK_QUOTES.length} quotes received</p>
      </div>

      <div className="space-y-4">
        {MOCK_QUOTES.map((quote, i) => (
          <motion.div
            key={quote.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-border bg-card p-5 shadow-card"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <img src={quote.avatar} alt={quote.professional} className="h-12 w-12 rounded-xl object-cover shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-semibold text-card-foreground">{quote.professional}</h3>
                    <Badge className={`${statusStyles[quote.status]} border-0 text-[10px]`}>
                      {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{quote.profession}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <RatingStars rating={quote.rating} />
                    <span className="text-xs text-muted-foreground">{quote.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-lg font-bold text-primary">{quote.amount}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground justify-end">
                  <Clock className="h-3 w-3" /> {quote.timeline}
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-lg bg-muted/50 p-3">
              <p className="text-xs font-medium text-muted-foreground mb-1">For: {quote.projectTitle}</p>
              <p className="text-sm text-card-foreground">"{quote.message}"</p>
            </div>

            {quote.status === "pending" && (
              <div className="mt-4 flex gap-2 border-t border-border pt-3">
                <Button size="sm" onClick={() => handleAccept(quote.professional)}>
                  <Check className="mr-1 h-3.5 w-3.5" /> Accept
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleReject(quote.professional)}>
                  <X className="mr-1 h-3.5 w-3.5" /> Reject
                </Button>
                <Button size="sm" variant="ghost">
                  <MessageSquare className="mr-1 h-3.5 w-3.5" /> Message
                </Button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

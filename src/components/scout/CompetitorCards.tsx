import { BrandKey, competitorCards } from "@/data/scoutData";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const CompetitorCards = ({ brand }: { brand: BrandKey }) => {
  const cards = competitorCards[brand];

  return (
    <section>
      <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Competitor Snapshot</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <div key={c.name} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-semibold text-foreground">{c.name}</h3>
              {c.longestAdDays >= 60 && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  <Shield className="h-3 w-3" /> Evergreen
                </Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Angle:</span> {c.dominantAngle}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Longest Ad:</span> {c.longestAdDays} days
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitorCards;

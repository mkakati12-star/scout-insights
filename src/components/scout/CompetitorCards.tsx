import { useEffect, useState } from "react";
import { BrandKey, competitorCards } from "@/data/scoutData";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const angleColors: Record<string, string> = {
  "Doctor Authority": "bg-chart-1/20 text-chart-1",
  "Proof Over Promise": "bg-chart-2/20 text-chart-2",
  "Taboo Breaking": "bg-chart-4/20 text-chart-4",
  Aspiration: "bg-chart-5/20 text-chart-5",
  Transformation: "bg-chart-3/20 text-chart-3",
  "Ingredient Anxiety": "bg-chart-1/20 text-chart-1",
  "Indian Skin": "bg-chart-4/20 text-chart-4",
  "Indian Skin Relevance": "bg-chart-4/20 text-chart-4",
  "Clean Beauty": "bg-chart-3/20 text-chart-3",
  "Clinical Without Cost": "bg-chart-5/20 text-chart-5",
  "Pollution Damage": "bg-chart-2/20 text-chart-2",
  "Natural Ingredient Trust": "bg-chart-3/20 text-chart-3",
  "Child Acceptance": "bg-chart-4/20 text-chart-4",
  "Expert Validation": "bg-chart-1/20 text-chart-1",
  "Parental Guilt": "bg-chart-2/20 text-chart-2",
  "Academic Performance": "bg-chart-5/20 text-chart-5",
  "Social Proof": "bg-chart-2/20 text-chart-2",
};

const brandNameMap: Record<BrandKey, string> = {
  "man-matters": "Man Matters",
  bebodywise: "Bebodywise",
  "little-joys": "Little Joys",
};

interface AdRow {
  competitor: string | null;
  primary_angle: string | null;
  days_active: number | null;
  is_evergreen: boolean | null;
  copy_snippet: string | null;
}

const CompetitorCards = ({ brand }: { brand: BrandKey }) => {
  const [liveCards, setLiveCards] = useState<AdRow[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchAds = async () => {
      const { data, error } = await supabase
        .from("ads")
        .select("competitor, primary_angle, days_active, is_evergreen, copy_snippet")
        .eq("brand", brandNameMap[brand]);

      if (error || !data || data.length === 0) {
        setLiveCards(null);
      } else {
        setLiveCards(data);
      }
      setLoading(false);
    };
    fetchAds();
  }, [brand]);

  const fallbackCards = competitorCards[brand];

  if (loading) {
    return (
      <section className="border border-border bg-card p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Competitive Intel</p>
        <h2 className="mt-1 font-display text-xl font-bold text-foreground">Competitor Snapshot</h2>
        <div className="mt-6 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4 py-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-16 ml-auto" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Use live data or fallback
  const useCards = liveCards
    ? liveCards.map((row) => ({
        name: row.competitor || "Unknown",
        dominantAngle: row.primary_angle || "Unknown",
        longestAdDays: row.days_active || 0,
        summary: row.copy_snippet || "",
        isEvergreen: row.is_evergreen || false,
      }))
    : fallbackCards.map((c) => ({
        ...c,
        isEvergreen: c.longestAdDays >= 60,
      }));

  return (
    <section className="border border-border bg-card p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
        Competitive Intel
      </p>
      <h2 className="mt-1 font-display text-xl font-bold text-foreground">Competitor Snapshot</h2>
      <div className="mt-6">
        {useCards.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 transition-colors duration-150 hover:bg-accent/50 ${
              i < useCards.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-foreground">{c.name}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1 hidden sm:block">{c.summary}</p>
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0 sm:ml-6">
              <span
                className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold ${
                  angleColors[c.dominantAngle] || "bg-secondary text-secondary-foreground"
                }`}
              >
                {c.dominantAngle}
              </span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {c.longestAdDays}d active
              </span>
              {c.isEvergreen && (
                <span className="inline-flex items-center rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold text-gold whitespace-nowrap">
                  EVERGREEN
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitorCards;

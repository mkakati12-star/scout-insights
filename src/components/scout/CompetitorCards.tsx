import { BrandKey, competitorCards } from "@/data/scoutData";

const angleColors: Record<string, string> = {
  "Fear + Clinical": "bg-chart-2/20 text-chart-2",
  "Humor + Masculinity": "bg-chart-4/20 text-chart-4",
  Aspiration: "bg-chart-5/20 text-chart-5",
  Personalization: "bg-chart-1/20 text-chart-1",
  "Social Proof": "bg-chart-2/20 text-chart-2",
  "Science / Authority": "bg-chart-1/20 text-chart-1",
  "Expert Authority": "bg-chart-1/20 text-chart-1",
  "Clean Beauty": "bg-chart-3/20 text-chart-3",
  "Fun + Aspiration": "bg-chart-4/20 text-chart-4",
  "Fun + Playful": "bg-chart-4/20 text-chart-4",
  "Safety + Trust": "bg-chart-3/20 text-chart-3",
  "Aspiration + Health": "bg-chart-5/20 text-chart-5",
  "Aspiration + Glow": "bg-chart-5/20 text-chart-5",
  Purity: "bg-chart-3/20 text-chart-3",
};

const CompetitorCards = ({ brand }: { brand: BrandKey }) => {
  const cards = competitorCards[brand];

  return (
    <section className="border border-border bg-card p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
        Competitive Intel
      </p>
      <h2 className="mt-1 font-display text-xl font-bold text-foreground">Competitor Snapshot</h2>
      <div className="mt-6">
        {cards.map((c, i) => (
          <div
            key={c.name}
            className={`flex items-center justify-between py-4 transition-colors duration-150 hover:bg-accent/50 ${
              i < cards.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex-1">
              <h3 className="text-sm font-bold text-foreground">{c.name}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{c.summary}</p>
            </div>
            <div className="flex items-center gap-4 ml-6">
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
              {c.longestAdDays >= 60 && (
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

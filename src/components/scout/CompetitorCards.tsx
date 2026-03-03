import { BrandKey, competitorCards } from "@/data/scoutData";

const angleColors: Record<string, string> = {
  "Fear + Clinical": "bg-chart-2 text-primary-foreground",
  "Humor + Masculinity": "bg-chart-4 text-primary-foreground",
  Aspiration: "bg-chart-5 text-primary-foreground",
  Personalization: "bg-chart-1 text-primary-foreground",
  "Social Proof": "bg-chart-2 text-primary-foreground",
  "Science / Authority": "bg-chart-1 text-primary-foreground",
  "Expert Authority": "bg-chart-1 text-primary-foreground",
  "Clean Beauty": "bg-chart-3 text-primary-foreground",
  "Fun + Aspiration": "bg-chart-4 text-primary-foreground",
  "Fun + Playful": "bg-chart-4 text-primary-foreground",
  "Safety + Trust": "bg-chart-3 text-primary-foreground",
  "Aspiration + Health": "bg-chart-5 text-primary-foreground",
  "Aspiration + Glow": "bg-chart-5 text-primary-foreground",
  Purity: "bg-chart-3 text-primary-foreground",
};

const CompetitorCards = ({ brand }: { brand: BrandKey }) => {
  const cards = competitorCards[brand];

  return (
    <section>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Competitive Intel</p>
      <h2 className="mt-1 text-lg font-bold text-foreground">Competitor Snapshot</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <div key={c.name} className="bg-card p-5 shadow-card">
            <div className="flex items-start justify-between">
              <h3 className="text-base font-bold text-foreground">{c.name}</h3>
              {c.longestAdDays >= 60 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-semibold text-gold">
                  Evergreen
                </span>
              )}
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${angleColors[c.dominantAngle] || "bg-secondary text-secondary-foreground"}`}>
                {c.dominantAngle}
              </span>
              <span className="text-xs text-muted-foreground">{c.longestAdDays} days active</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitorCards;

import { BrandKey, statsData } from "@/data/scoutData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const StatsBlock = ({ brand }: { brand: BrandKey }) => {
  const s = statsData[brand];

  const cards = [
    { label: "Dominant Angle", value: s.dominantAngle, trend: s.trends.dominantAngle, detail: s.dominantAngleTrend },
    { label: "UGC Format %", value: `${s.ugcFormat}%`, trend: s.trends.ugcFormat },
    { label: "Avg Longevity", value: `${s.avgLongevity}d`, trend: s.trends.avgLongevity },
    { label: "Evergreen Ads", value: s.evergreenAds, trend: s.trends.evergreenAds },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((c, i) => (
        <div
          key={c.label}
          className="border border-border bg-card p-6 animate-stagger-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-end justify-between">
            <span className="text-[48px] font-extrabold leading-none text-foreground lg:text-[56px]">
              {c.value}
            </span>
            {c.trend === "up" ? (
              <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-trend-up/15 px-2 py-0.5 text-[10px] font-semibold text-trend-up">
                <TrendingUp className="h-3 w-3" /> {c.detail || "UP"}
              </span>
            ) : c.trend === "stable" ? (
              <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                <Minus className="h-3 w-3" /> {c.detail || "STABLE"}
              </span>
            ) : (
              <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-trend-down/15 px-2 py-0.5 text-[10px] font-semibold text-trend-down">
                <TrendingDown className="h-3 w-3" /> {c.detail || "DOWN"}
              </span>
            )}
          </div>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {c.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsBlock;

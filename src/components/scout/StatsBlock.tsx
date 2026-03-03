import { BrandKey, statsData } from "@/data/scoutData";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsBlock = ({ brand }: { brand: BrandKey }) => {
  const s = statsData[brand];

  const cards = [
    { label: "Dominant Angle", value: s.dominantAngle, trend: s.trends.dominantAngle },
    { label: "UGC Format %", value: `${s.ugcFormat}%`, trend: s.trends.ugcFormat },
    { label: "Avg Longevity", value: `${s.avgLongevity} days`, trend: s.trends.avgLongevity },
    { label: "Evergreen Ads", value: s.evergreenAds, trend: s.trends.evergreenAds },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((c) => (
        <div key={c.label} className="bg-card p-5 shadow-card">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-foreground">{c.value}</span>
            {c.trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-trend-up" />
            ) : (
              <TrendingDown className="h-4 w-4 text-trend-down" />
            )}
          </div>
          <p className="mt-1 text-xs font-medium text-muted-foreground">{c.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsBlock;

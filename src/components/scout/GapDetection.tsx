import { BrandKey, gapData } from "@/data/scoutData";

const GapColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">{title}</h3>
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="h-2 w-2 shrink-0 rounded-full bg-trend-down" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const GapDetection = ({
  brand,
  aiOverride,
}: {
  brand: BrandKey;
  aiOverride?: { angles: string[]; formats: string[]; platforms: string[] };
}) => {
  const g = aiOverride || gapData[brand];

  return (
    <section className="border border-border bg-card p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Gap Analysis</p>
      <h2 className="mt-1 font-display text-xl font-bold text-foreground">Unclaimed Territory</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3">
        <div className="md:pr-6">
          <GapColumn title="Unclaimed Angles" items={g.angles} />
        </div>
        <div className="md:border-l md:border-border md:px-6">
          <GapColumn title="Unclaimed Formats" items={g.formats} />
        </div>
        <div className="md:border-l md:border-border md:pl-6">
          <GapColumn title="Unclaimed Platforms" items={g.platforms} />
        </div>
      </div>
    </section>
  );
};

export default GapDetection;

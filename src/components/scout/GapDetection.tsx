import { BrandKey, gapData } from "@/data/scoutData";

const GapColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 shrink-0 rounded-full bg-trend-down" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const GapDetection = ({ brand }: { brand: BrandKey }) => {
  const g = gapData[brand];

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-5 font-display text-lg font-semibold text-foreground">Unclaimed Territory</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <GapColumn title="Unclaimed Angles" items={g.angles} />
        <GapColumn title="Unclaimed Formats" items={g.formats} />
        <GapColumn title="Unclaimed Platforms" items={g.platforms} />
      </div>
    </section>
  );
};

export default GapDetection;

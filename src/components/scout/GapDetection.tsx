import { BrandKey, gapData } from "@/data/scoutData";

const GapColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="text-sm font-semibold text-foreground">{title}</h3>
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
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
    <section className="bg-card p-6 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Gap Analysis</p>
      <h2 className="mt-1 text-lg font-bold text-foreground">Unclaimed Territory</h2>
      <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-3">
        <GapColumn title="Unclaimed Angles" items={g.angles} />
        <GapColumn title="Unclaimed Formats" items={g.formats} />
        <GapColumn title="Unclaimed Platforms" items={g.platforms} />
      </div>
    </section>
  );
};

export default GapDetection;

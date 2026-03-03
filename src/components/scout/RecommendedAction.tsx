import { BrandKey, opportunityData } from "@/data/scoutData";

const RecommendedAction = ({ brand }: { brand: BrandKey }) => {
  const lines = opportunityData[brand];

  return (
    <section className="border-l-4 border-primary bg-navy p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-foreground/50">Recommended Action</p>
      <h2 className="mt-1 text-lg font-bold text-navy-foreground">This Week's Opportunity</h2>
      <ul className="mt-4 space-y-2">
        {lines.map((line, i) => (
          <li key={i} className="text-sm font-medium leading-relaxed text-navy-foreground/90">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedAction;

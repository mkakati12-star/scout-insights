import { BrandKey, opportunityData } from "@/data/scoutData";

const RecommendedAction = ({ brand }: { brand: BrandKey }) => {
  const lines = opportunityData[brand];

  return (
    <section className="border border-border border-l-[3px] border-l-primary bg-card p-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
        This Week's Opportunity
      </p>
      <h2 className="mt-2 font-display text-xl font-bold text-foreground">Recommended Action</h2>
      <ul className="mt-4 space-y-2">
        {lines.map((line, i) => (
          <li key={i} className="text-sm font-medium leading-relaxed text-muted-foreground">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedAction;

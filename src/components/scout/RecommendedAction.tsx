import { BrandKey, opportunityData } from "@/data/scoutData";

const RecommendedAction = ({ brand }: { brand: BrandKey }) => {
  const lines = opportunityData[brand];

  return (
    <section className="rounded-lg border border-highlight bg-highlight p-6">
      <h2 className="mb-3 font-display text-lg font-semibold text-highlight-foreground">This Week's Opportunity</h2>
      <ul className="space-y-2">
        {lines.map((line, i) => (
          <li key={i} className="text-sm font-medium leading-relaxed text-highlight-foreground">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecommendedAction;

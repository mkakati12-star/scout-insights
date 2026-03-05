import { useState } from "react";
import { BrandKey, briefData } from "@/data/scoutData";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface BriefSections {
  whatWeSaw: string;
  opportunity: string;
  brief: string;
  deadline: string;
}

const CreativeDirectorBrief = ({
  brand,
  aiOverride,
}: {
  brand: BrandKey;
  aiOverride?: BriefSections;
}) => {
  const source = aiOverride || briefData[brand];
  const [sections, setSections] = useState(source);
  const [prevBrand, setPrevBrand] = useState(brand);
  const [prevOverride, setPrevOverride] = useState(aiOverride);

  if (brand !== prevBrand || aiOverride !== prevOverride) {
    setPrevBrand(brand);
    setPrevOverride(aiOverride);
    setSections(aiOverride || briefData[brand]);
  }

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `What We Saw:\n${sections.whatWeSaw}\n\nThe Opportunity:\n${sections.opportunity}\n\nYour Brief:\n${sections.brief}\n\nDeadline:\n${sections.deadline}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Brief copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const sectionFields: { key: keyof typeof sections; label: string }[] = [
    { key: "whatWeSaw", label: "What We Saw" },
    { key: "opportunity", label: "The Opportunity" },
    { key: "brief", label: "Your Brief" },
    { key: "deadline", label: "Deadline" },
  ];

  return (
    <section className="bg-brief p-6 border border-border">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brief-foreground/50">
        Weekly Output
      </p>
      <h2 className="mt-1 font-display text-xl font-bold text-brief-foreground">
        Creative Director Brief
      </h2>
      <div className="mt-5 space-y-4">
        {sectionFields.map((sf) => (
          <div key={sf.key}>
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-brief-foreground/60">
              {sf.label}
            </label>
            <textarea
              className="w-full resize-none border border-brief-foreground/15 bg-brief-foreground/5 p-3 text-sm leading-relaxed text-brief-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              rows={sf.key === "deadline" ? 1 : 3}
              value={sections[sf.key]}
              onChange={(e) => setSections({ ...sections, [sf.key]: e.target.value })}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy Brief"}
        </button>
      </div>
    </section>
  );
};

export default CreativeDirectorBrief;

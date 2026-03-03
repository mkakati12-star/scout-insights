import { useState } from "react";
import { BrandKey, briefData } from "@/data/scoutData";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CreativeDirectorBrief = ({ brand }: { brand: BrandKey }) => {
  const initial = briefData[brand];
  const [sections, setSections] = useState(initial);
  // reset when brand changes
  const [prevBrand, setPrevBrand] = useState(brand);
  if (brand !== prevBrand) {
    setPrevBrand(brand);
    setSections(briefData[brand]);
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
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-5 font-display text-lg font-semibold text-foreground">Creative Director Brief — This Week</h2>
      <div className="space-y-4">
        {sectionFields.map((sf) => (
          <div key={sf.key}>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{sf.label}</label>
            <textarea
              className="w-full resize-none rounded-md border border-border bg-background p-3 text-sm leading-relaxed text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              rows={sf.key === "deadline" ? 1 : 3}
              value={sections[sf.key]}
              onChange={(e) => setSections({ ...sections, [sf.key]: e.target.value })}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </section>
  );
};

export default CreativeDirectorBrief;

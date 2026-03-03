import { useState } from "react";
import { BrandKey } from "@/data/scoutData";
import TopBar from "@/components/scout/TopBar";
import EmotionalShiftChart from "@/components/scout/EmotionalShiftChart";
import StatsBlock from "@/components/scout/StatsBlock";
import RecommendedAction from "@/components/scout/RecommendedAction";
import GapDetection from "@/components/scout/GapDetection";
import CreativeDirectorBrief from "@/components/scout/CreativeDirectorBrief";
import CompetitorCards from "@/components/scout/CompetitorCards";

const Index = () => {
  const [brand, setBrand] = useState<BrandKey>("man-matters");
  const [recency, setRecency] = useState("this-week");

  return (
    <div className="min-h-screen bg-background">
      <TopBar activeBrand={brand} onBrandChange={setBrand} recency={recency} onRecencyChange={setRecency} />
      <main className="mx-auto max-w-6xl space-y-6 px-6 py-6">
        <EmotionalShiftChart brand={brand} />
        <StatsBlock brand={brand} />
        <RecommendedAction brand={brand} />
        <GapDetection brand={brand} />
        <CreativeDirectorBrief brand={brand} />
        <CompetitorCards brand={brand} />
      </main>
    </div>
  );
};

export default Index;

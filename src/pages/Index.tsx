import { useState, useCallback } from "react";
import { BrandKey, RecencyKey, brands } from "@/data/scoutData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import TopBar from "@/components/scout/TopBar";
import EmotionalShiftChart from "@/components/scout/EmotionalShiftChart";
import StatsBlock from "@/components/scout/StatsBlock";
import RecommendedAction from "@/components/scout/RecommendedAction";
import GapDetection from "@/components/scout/GapDetection";
import CreativeDirectorBrief from "@/components/scout/CreativeDirectorBrief";
import CompetitorCards from "@/components/scout/CompetitorCards";

const brandNameMap: Record<BrandKey, string> = {
  "man-matters": "Man Matters",
  bebodywise: "Bebodywise",
  "little-joys": "Little Joys",
};

interface AIRefreshData {
  recommended_action: string;
  unclaimed_angles: string[];
  unclaimed_formats: string[];
  unclaimed_platforms: string[];
  brief_what_we_saw: string;
  brief_opportunity: string;
  brief_your_brief: string;
  brief_deadline: string;
}

const STORAGE_KEY = "scout-ai-refresh";

function loadCached(brand: BrandKey): AIRefreshData | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return parsed[brand] || null;
  } catch {
    return null;
  }
}

function saveCached(brand: BrandKey, data: AIRefreshData) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const existing = stored ? JSON.parse(stored) : {};
    existing[brand] = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch { /* ignore */ }
}

const Index = () => {
  const [brand, setBrand] = useState<BrandKey>("man-matters");
  const [recency, setRecency] = useState<RecencyKey>("this-week");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [aiData, setAiData] = useState<Record<string, AIRefreshData>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const currentAI = aiData[brand] || null;

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      // Fetch ads from Supabase
      const { data: ads, error } = await supabase
        .from("ads")
        .select("competitor, primary_angle, days_active, creative_format, is_evergreen")
        .eq("brand", brandNameMap[brand]);

      if (error || !ads || ads.length === 0) {
        toast.error("No ad data found for this brand");
        setIsRefreshing(false);
        return;
      }

      // Call edge function
      const { data: result, error: fnError } = await supabase.functions.invoke("refresh-intelligence", {
        body: { brand: brandNameMap[brand], ads },
      });

      if (fnError || !result || result.error) {
        throw new Error(result?.error || fnError?.message || "Unknown error");
      }

      // Store result
      const newAiData = { ...aiData, [brand]: result as AIRefreshData };
      setAiData(newAiData);
      saveCached(brand, result as AIRefreshData);

      const now = new Date().toLocaleTimeString();
      toast.success(`Intelligence Refreshed — ${now}`);
    } catch (e) {
      console.error("Refresh failed:", e);
      toast("Refresh Failed — Showing Cached Intelligence", {
        style: { background: "hsl(38, 92%, 50%)", color: "hsl(220, 45%, 8%)" },
      });
    } finally {
      setIsRefreshing(false);
    }
  }, [brand, aiData]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <TopBar
        activeBrand={brand}
        onBrandChange={setBrand}
        recency={recency}
        onRecencyChange={setRecency}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />
      <main key={brand} className="mx-auto max-w-6xl space-y-6 px-4 sm:px-8 py-8 animate-fade-switch">
        <EmotionalShiftChart brand={brand} recency={recency} />
        <StatsBlock brand={brand} />
        <RecommendedAction
          brand={brand}
          aiOverride={currentAI ? [currentAI.recommended_action] : undefined}
        />
        <GapDetection
          brand={brand}
          aiOverride={
            currentAI
              ? {
                  angles: currentAI.unclaimed_angles,
                  formats: currentAI.unclaimed_formats,
                  platforms: currentAI.unclaimed_platforms,
                }
              : undefined
          }
        />
        <CreativeDirectorBrief
          brand={brand}
          aiOverride={
            currentAI
              ? {
                  whatWeSaw: currentAI.brief_what_we_saw,
                  opportunity: currentAI.brief_opportunity,
                  brief: currentAI.brief_your_brief,
                  deadline: currentAI.brief_deadline,
                }
              : undefined
          }
        />
        <CompetitorCards brand={brand} />
      </main>
    </div>
  );
};

export default Index;

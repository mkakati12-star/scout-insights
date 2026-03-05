import { BrandKey, RecencyKey, brands } from "@/data/scoutData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw } from "lucide-react";

interface TopBarProps {
  activeBrand: BrandKey;
  onBrandChange: (brand: BrandKey) => void;
  recency: RecencyKey;
  onRecencyChange: (val: RecencyKey) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

const TopBar = ({ activeBrand, onBrandChange, recency, onRecencyChange, onRefresh, isRefreshing }: TopBarProps) => {
  return (
    <header className="border-b border-border bg-navy px-4 sm:px-8 py-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="shrink-0">
          <h1 className="font-display text-2xl font-extrabold tracking-wider text-foreground">SCOUT</h1>
        </div>

        <nav className="flex gap-1 overflow-x-auto w-full sm:w-auto scrollbar-hide">
          {brands.map((b) => (
            <button
              key={b.key}
              onClick={() => onBrandChange(b.key)}
              className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-150 whitespace-nowrap ${
                activeBrand === b.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {b.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 whitespace-nowrap"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
            {isRefreshing ? "Analyzing..." : "↻ Refresh Intelligence"}
          </button>

          <Select value={recency} onValueChange={onRecencyChange}>
            <SelectTrigger className="w-[160px] border-border bg-secondary text-muted-foreground text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="last-30">Last 30 Days</SelectItem>
              <SelectItem value="last-60">Last 60 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

import { BrandKey, brands } from "@/data/scoutData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TopBarProps {
  activeBrand: BrandKey;
  onBrandChange: (brand: BrandKey) => void;
  recency: string;
  onRecencyChange: (val: string) => void;
}

const TopBar = ({ activeBrand, onBrandChange, recency, onRecencyChange }: TopBarProps) => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-6 py-3">
      <h1 className="font-display text-2xl font-bold tracking-tight text-primary">SCOUT</h1>

      <nav className="flex gap-1 rounded-lg bg-secondary p-1">
        {brands.map((b) => (
          <button
            key={b.key}
            onClick={() => onBrandChange(b.key)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              activeBrand === b.key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {b.label}
          </button>
        ))}
      </nav>

      <Select value={recency} onValueChange={onRecencyChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="this-week">This Week</SelectItem>
          <SelectItem value="last-30">Last 30 Days</SelectItem>
          <SelectItem value="last-60">Last 60 Days</SelectItem>
        </SelectContent>
      </Select>
    </header>
  );
};

export default TopBar;

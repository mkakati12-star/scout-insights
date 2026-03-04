import { BrandKey, RecencyKey, brands } from "@/data/scoutData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";

interface TopBarProps {
  activeBrand: BrandKey;
  onBrandChange: (brand: BrandKey) => void;
  recency: RecencyKey;
  onRecencyChange: (val: RecencyKey) => void;
}

const TopBar = ({ activeBrand, onBrandChange, recency, onRecencyChange }: TopBarProps) => {
  return (
    <header className="border-b border-border bg-navy px-8 py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-extrabold tracking-wider text-foreground">SCOUT</h1>
          

          
        </div>

        <nav className="flex gap-1">
          {brands.map((b) =>
          <button
            key={b.key}
            onClick={() => onBrandChange(b.key)}
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-150 ${
            activeBrand === b.key ?
            "bg-primary text-primary-foreground" :
            "text-muted-foreground hover:text-foreground"}`
            }>
            
              {b.label}
            </button>
          )}
        </nav>

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
    </header>);

};

export default TopBar;
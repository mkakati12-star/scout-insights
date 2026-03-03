import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BrandKey, RecencyKey, emotionalShiftData, emotionalAngles } from "@/data/scoutData";

const colors = [
  "hsl(220, 85%, 48%)",
  "hsl(340, 70%, 52%)",
  "hsl(160, 55%, 40%)",
  "hsl(35, 90%, 52%)",
  "hsl(270, 50%, 52%)",
];

const recencyLabels: Record<RecencyKey, string> = {
  "this-week": "This Week",
  "last-30": "Last 30 Days",
  "last-60": "Last 60 Days",
};

const EmotionalShiftChart = ({ brand, recency }: { brand: BrandKey; recency: RecencyKey }) => {
  const data = emotionalShiftData[brand][recency];

  return (
    <section className="bg-card p-6 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{recencyLabels[recency]}</p>
      <h2 className="mt-1 text-lg font-bold text-foreground">Emotional Shift Over Time</h2>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: "hsl(215, 10%, 52%)" }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12, fill: "hsl(215, 10%, 52%)" }} axisLine={false} tickLine={false} width={40} />
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{ fontSize: 13, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            />
            {emotionalAngles.map((angle, i) => (
              <Line key={angle} type="monotone" dataKey={angle} stroke={colors[i]} strokeWidth={2} dot={{ r: 3.5, fill: colors[i], strokeWidth: 0 }} activeDot={{ r: 5 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 flex flex-wrap gap-5">
          {emotionalAngles.map((angle, i) => (
            <div key={angle} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: colors[i] }} />
              {angle}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalShiftChart;

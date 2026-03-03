import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BrandKey, emotionalShiftData, emotionalAngles } from "@/data/scoutData";

const colors = [
  "hsl(220, 60%, 20%)",
  "hsl(340, 75%, 55%)",
  "hsl(160, 60%, 42%)",
  "hsl(35, 92%, 55%)",
  "hsl(270, 55%, 55%)",
];

const EmotionalShiftChart = ({ brand }: { brand: BrandKey }) => {
  const data = emotionalShiftData[brand];

  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 font-display text-lg font-semibold text-foreground">Emotional Shift Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 25%, 90%)" />
          <XAxis dataKey="week" tick={{ fontSize: 13 }} stroke="hsl(215, 14%, 50%)" />
          <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 13 }} stroke="hsl(215, 14%, 50%)" />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
          {emotionalAngles.map((angle, i) => (
            <Line key={angle} type="monotone" dataKey={angle} stroke={colors[i]} strokeWidth={2.5} dot={{ r: 4 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default EmotionalShiftChart;

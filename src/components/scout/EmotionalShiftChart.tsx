import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BrandKey, RecencyKey, emotionalShiftData, emotionalAngles } from "@/data/scoutData";

const colors = [
  "hsl(220, 85%, 53%)",
  "hsl(340, 70%, 52%)",
  "hsl(160, 55%, 45%)",
  "hsl(35, 90%, 52%)",
  "hsl(270, 50%, 58%)",
];

const recencyLabels: Record<RecencyKey, string> = {
  "this-week": "This Week",
  "last-30": "Last 30 Days",
  "last-60": "Last 60 Days",
};

const CustomDot = (props: any) => {
  const { cx, cy, stroke } = props;
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={stroke} opacity={0.25} />
      <circle cx={cx} cy={cy} r={3} fill={stroke} />
    </g>
  );
};

const EmotionalShiftChart = ({ brand, recency }: { brand: BrandKey; recency: RecencyKey }) => {
  const data = emotionalShiftData[brand][recency];

  return (
    <section className="border border-border bg-card p-6 animate-fade-switch">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
        Emotional Landscape
      </p>
      <h2 className="mt-1 font-display text-xl font-bold text-foreground">Shift Over Time</h2>
      <p className="mt-0.5 text-xs text-muted-foreground">{recencyLabels[recency]}</p>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis
              dataKey="week"
              tick={{ fontSize: 11, fill: "hsl(213, 27%, 67%)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 11, fill: "hsl(213, 27%, 67%)" }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{
                fontSize: 12,
                border: "1px solid hsl(215, 40%, 25%)",
                background: "hsl(220, 35%, 12%)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "hsl(213, 27%, 67%)" }}
            />
            {emotionalAngles.map((angle, i) => (
              <Line
                key={angle}
                type="monotone"
                dataKey={angle}
                stroke={colors[i]}
                strokeWidth={1.5}
                dot={<CustomDot />}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 flex flex-wrap gap-6">
          {emotionalAngles.map((angle, i) => (
            <div key={angle} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: colors[i], boxShadow: `0 0 6px ${colors[i]}` }}
              />
              {angle}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalShiftChart;

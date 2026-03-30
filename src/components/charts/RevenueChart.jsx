import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4780 },
  { name: "May", revenue: 5890 },
  { name: "Jun", revenue: 6390 },
];

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" stroke="#94A3B8" />

        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            color: "#E2E8F0",
          }}
        />

        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#818CF8"
          strokeWidth={3}
          fill="url(#colorRevenue)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
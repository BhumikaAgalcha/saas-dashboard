import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", sales: 2400 },
  { name: "Tue", sales: 1398 },
  { name: "Wed", sales: 9800 },
  { name: "Thu", sales: 3908 },
  { name: "Fri", sales: 4800 },
];

const SalesBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}
      cursor={false}>
        
        <XAxis dataKey="name" stroke="#94A3B8" />

        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: "#020617",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            color: "#E2E8F0"
          }}
        />

        <Bar 
          dataKey="sales" 
          fill="#6366F1" 
          radius={[8, 8, 0, 0]} 
          animationDuration={800}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesBarChart;
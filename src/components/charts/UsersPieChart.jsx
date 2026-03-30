import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
];

const COLORS = ["#6366F1", "#A855F7", "#22C55E"];

const UsersPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
       <Pie
            data={data}
            dataKey="value"
            outerRadius={90}
            innerRadius={55}
            paddingAngle={4}
            animationDuration={800}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} stroke="none" />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            backgroundColor: "#020617",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UsersPieChart;
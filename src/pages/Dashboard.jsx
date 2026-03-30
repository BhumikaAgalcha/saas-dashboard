import StatCard from "../components/ui/StatCard";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import RevenueChart from "../components/charts/RevenueChart";
import SalesBarChart from "../components/charts/SalesBarChart";
import UsersPieChart from "../components/charts/UsersPieChart";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../data/api";

const Dashboard = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
  fetchDashboardData().then((res) => {
    setData(res);
  });
}, []);

if (!data) {
  return <div className="text-gray-400">Loading dashboard...</div>;
}

  return (
    <div className="space-y-6">

      {/* Heading */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:scale-[1.02] ">

        <StatCard 
          title="Revenue"
          value="$12,500"
          change="+12%"
          icon={<DollarSign />}
        />

        <StatCard 
          title="Users"
          value="1,240"
          change="+8%"
          icon={<Users />}
        />

        <StatCard 
          title="Orders"
          value="320"
          change="+5%"
          icon={<ShoppingCart />}
        />

        <StatCard 
          title="Growth"
          value="24%"
          change="+3%"
          icon={<TrendingUp />}
        />

      </div>

      {/* Chart Section (placeholder for now) */}
     <div className="
            p-6 rounded-xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(99,102,241,0.2)]
            hover:shadow-[0_0_60px_rgba(99,102,241,0.3)]
            transition duration-300
            ">
            <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>

            <RevenueChart />
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

  {/* Bar Chart */}
  <div className="
            p-6 rounded-xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(99,102,241,0.2)]
        ">
            <h2 className="text-lg font-semibold mb-4">Weekly Sales</h2>
            <SalesBarChart />
        </div>

        {/* Pie Chart */}
        <div className="
            p-6 rounded-xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(168,85,247,0.2)]
        ">
            <h2 className="text-lg font-semibold mb-4">User Devices</h2>
            <UsersPieChart />
        </div>

    </div>

    </div>
  );
};

export default Dashboard;
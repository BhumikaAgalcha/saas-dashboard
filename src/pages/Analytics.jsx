import RevenueChart from "../components/charts/RevenueChart";
import SalesBarChart from "../components/charts/SalesBarChart";

const Analytics = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="
          p-6 rounded-xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(99,102,241,0.2)]
        ">
          <h2 className="mb-4 font-semibold">Revenue Trend</h2>
          <RevenueChart />
        </div>

        <div className="
          p-6 rounded-xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(168,85,247,0.2)]
        ">
          <h2 className="mb-4 font-semibold">Sales Overview</h2>
          <SalesBarChart />
        </div>

      </div>

    </div>
  );
};

export default Analytics;
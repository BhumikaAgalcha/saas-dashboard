export const fetchDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        stats: {
          revenue: "$12,500",
          users: "1,240",
          orders: "320",
          growth: "24%",
        },
        revenueData: [
          { name: "Jan", revenue: 4000 },
          { name: "Feb", revenue: 3000 },
          { name: "Mar", revenue: 5000 },
          { name: "Apr", revenue: 4780 },
          { name: "May", revenue: 5890 },
          { name: "Jun", revenue: 6390 },
        ],
      });
    }, 1000);
  });
};
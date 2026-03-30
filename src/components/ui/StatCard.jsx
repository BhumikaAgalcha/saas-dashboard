const StatCard = ({ title, value, change, icon }) => {
  return (
    <div className="
      p-5 rounded-xl
      bg-white/5 backdrop-blur-xl
      border border-white/10
      hover:bg-white/10
      transition duration-300
    ">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm text-gray-400">{title}</h3>
        <div className="text-indigo-400">{icon}</div>
      </div>

      <h2 className="text-2xl font-bold mb-2">{value}</h2>

      <p className="text-sm text-green-400">{change}</p>
    </div>
  );
};

export default StatCard;
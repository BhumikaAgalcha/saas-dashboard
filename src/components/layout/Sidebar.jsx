import { Home, BarChart2, Users, Settings, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed md:static z-50 top-0 left-0 h-full w-64 p-5
        bg-white/5 backdrop-blur-xl border-r border-white/10
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            SaaS Pro
          </h1>

          <X
            className="md:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Menu */}
        <nav className="space-y-3">
         <MenuItem to="/" icon={<Home size={18} />} label="Dashboard" />
         <MenuItem to="/analytics" icon={<BarChart2 size={18} />} label="Analytics" />
         <MenuItem to="/users" icon={<Users size={18} />} label="Users" />
         <MenuItem to="/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>
      </div>
    </>
  );
};

const MenuItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
          : "hover:bg-white/10"
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);

export default Sidebar;
import { Menu } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="
      h-16 flex items-center justify-between px-6
      bg-white/5 backdrop-blur-xl border-b border-white/10
    ">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <Menu
          className="md:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white/10 px-3 py-1 rounded-md outline-none text-sm"
        />

        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default Navbar;
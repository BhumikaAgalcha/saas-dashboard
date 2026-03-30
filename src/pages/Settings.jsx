const Settings = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="
        p-6 rounded-xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        max-w-xl
      ">

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md bg-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-white/10 outline-none"
          />

          <button className="
            px-4 py-2 rounded-md
            bg-gradient-to-r from-indigo-500 to-purple-500
            hover:opacity-90
          ">
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;
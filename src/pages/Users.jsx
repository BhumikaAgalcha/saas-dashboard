const users = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  { id: 3, name: "Alex Ray", email: "alex@example.com", status: "Active" },
];

const Users = () => {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Users</h1>

      <div className="
        rounded-xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        overflow-hidden
      ">

        <table className="w-full text-left">
          <thead className="bg-white/10 text-gray-300">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-white/10 hover:bg-white/5">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${user.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}
                  `}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Users;
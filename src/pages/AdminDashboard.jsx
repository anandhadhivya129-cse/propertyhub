function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">
          Admin Dashboard
        </h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="font-bold text-lg">Add Property</h2>
          <p className="text-gray-500 text-sm">Create new listings</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="font-bold text-lg">Manage Listings</h2>
          <p className="text-gray-500 text-sm">Edit or delete properties</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="font-bold text-lg">Users</h2>
          <p className="text-gray-500 text-sm">View registered users</p>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
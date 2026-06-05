export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <div className="bg-white shadow flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-700">
          Property Admin Panel
        </h1>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Total Properties</h2>
          <p className="text-2xl font-bold">128</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Active Listings</h2>
          <p className="text-2xl font-bold">94</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500">Users</h2>
          <p className="text-2xl font-bold">540</p>
        </div>

      </div>

      {/* Property Table */}
      <div className="p-6">
        <div className="bg-white shadow rounded-xl overflow-hidden">

          <div className="p-4 border-b font-bold">
            Recent Listings
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3">Property</th>
                <th className="p-3">Location</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3">2BHK Apartment</td>
                <td className="p-3">Chennai</td>
                <td className="p-3">₹45L</td>
                <td className="p-3 text-green-600">Active</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
}
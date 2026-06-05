function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">
          Customer Dashboard
        </h1>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* Search Section */}
      <div className="p-6">
        <div className="bg-white p-4 rounded-xl shadow flex gap-3">
          <input
            type="text"
            placeholder="Search location, city, property..."
            className="flex-1 border p-3 rounded-lg"
          />
          <button className="bg-green-600 text-white px-6 rounded-lg">
            Search
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="font-bold">Buy Properties</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="font-bold">Rent Homes</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="font-bold">Saved Properties</h2>
        </div>

      </div>
    </div>
  );
}

export default CustomerDashboard;
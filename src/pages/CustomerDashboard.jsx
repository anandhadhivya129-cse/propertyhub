export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-green-700">
          Find Your Home
        </h1>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>

      {/* Search Section */}
      <div className="p-6">
        <div className="bg-white p-4 rounded-xl shadow flex gap-3">

          <input
            type="text"
            placeholder="Search city, locality, project..."
            className="flex-1 border p-3 rounded-lg"
          />

          <button className="bg-green-600 text-white px-6 rounded-lg">
            Search
          </button>

        </div>
      </div>

      {/* Filter Chips */}
      <div className="px-6 flex gap-3 flex-wrap">

        <button className="bg-white px-4 py-2 rounded-full shadow">
          Buy
        </button>

        <button className="bg-white px-4 py-2 rounded-full shadow">
          Rent
        </button>

        <button className="bg-white px-4 py-2 rounded-full shadow">
          Plots
        </button>

        <button className="bg-white px-4 py-2 rounded-full shadow">
          Villas
        </button>

      </div>

      {/* Property Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow overflow-hidden">

          <img
            src="https://source.unsplash.com/400x250/?house"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h2 className="font-bold">Modern 2BHK Apartment</h2>
            <p className="text-gray-500 text-sm">Chennai</p>
            <p className="text-green-600 font-bold mt-2">₹45 Lakh</p>
          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?villa"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h2 className="font-bold">Luxury Villa</h2>
            <p className="text-gray-500 text-sm">Bangalore</p>
            <p className="text-green-600 font-bold mt-2">₹1.2 Cr</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <img
            src="https://source.unsplash.com/400x250/?apartment"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h2 className="font-bold">3BHK Premium Flat</h2>
            <p className="text-gray-500 text-sm">Mumbai</p>
            <p className="text-green-600 font-bold mt-2">₹90 Lakh</p>
          </div>
        </div>

      </div>

    </div>
  );
}
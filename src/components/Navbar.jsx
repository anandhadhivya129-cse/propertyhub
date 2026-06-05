function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
        PropertyHub
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-blue-600 transition">
          Buy
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition">
          Rent
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition">
          Commercial
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition">
          Plots
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
          Login
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Post Property
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
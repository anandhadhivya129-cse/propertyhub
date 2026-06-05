import banner from "../assets/images/banner.jpg";

function HeroSection() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Find Your Dream Home
        </h1>

        <p className="text-lg md:text-xl mb-8 text-center">
          Buy • Rent • Commercial • Plots
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 flex-wrap justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
            Buy
          </button>

          <button className="bg-white/20 px-6 py-2 rounded-full border border-white">
            Rent
          </button>

          <button className="bg-white/20 px-6 py-2 rounded-full border border-white">
            Commercial
          </button>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-xl shadow-xl flex overflow-hidden w-[90%] max-w-2xl">
          <input
            type="text"
            placeholder="Search by City, Locality or Project"
            className="flex-1 p-4 text-black outline-none"
          />

          <button className="bg-blue-600 text-white px-6 md:px-8">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
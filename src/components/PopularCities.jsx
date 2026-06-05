import chennai from "../assets/images/house1.jpg";
import bangalore from "../assets/images/house2.jpg";
import hyderabad from "../assets/images/house3.jpg";
import mumbai from "../assets/images/house4.avif";

function PopularCities() {
  const cities = [
    { name: "Chennai", image: chennai },
    { name: "Bangalore", image: bangalore },
    { name: "Hyderabad", image: hyderabad },
    { name: "Mumbai", image: mumbai },
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Cities
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition duration-300"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-48 object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">
                {city.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCities;
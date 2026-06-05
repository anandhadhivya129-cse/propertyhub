import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";

function FeaturedProperties() {
  const properties = [
    {
      image: house1,
      price: "₹50 Lakhs",
      location: "Chennai",
      type: "2 BHK Apartment",
    },
    {
      image: house2,
      price: "₹60 Lakhs",
      location: "Bangalore",
      type: "3 BHK Villa",
    },
    {
      image: house3,
      price: "₹1.2 Cr",
      location: "Hyderabad",
      type: "Luxury Villa",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Properties
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={property.image}
              alt="Property"
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold text-blue-600">
                {property.price}
              </h3>

              <p className="mt-2">{property.type}</p>

              <p className="text-gray-600">
                {property.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProperties;
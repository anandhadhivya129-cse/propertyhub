import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedProperties from "../components/FeaturedProperties";
import PopularCities from "../components/PopularCities";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <PopularCities />
    </>
  );
}

export default Home;
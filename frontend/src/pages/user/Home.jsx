import Navbar from "../../components/common/Navbar";
import Hero from "./Hero";
import RecommendationSection from "../../components/movies/Recommendation";

const Home = () => {
  return (
    <div className="bg-black min-h-screen p-2">
      <Navbar />
      <Hero />
      <RecommendationSection />
    </div>
  );
};

export default Home;

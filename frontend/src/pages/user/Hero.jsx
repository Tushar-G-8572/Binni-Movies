
import { useContext, useEffect, useState } from "react";
import { MovieDataContext } from "../../context/MovieContext";

const Hero = () => {
  const { allMovies } = useContext(MovieDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroMovies = allMovies.slice(0, 5);

  useEffect(() => {
    setCurrentIndex(0);
  }, [allMovies]);

  useEffect(() => {
    if (heroMovies.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMovies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroMovies.length]);

  if (heroMovies.length === 0) return null;
  const movie = heroMovies[currentIndex];
  if (!movie) return null;

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full rounded-xl overflow-hidden bg-black">

      <img
        src={movie.poster}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      <div className="absolute inset-0 bg-gradient-to-top from-black via-black/70 to-transparent md:hidden" />

      <div className="hidden md:flex h-full w-full items-center justify-between px-12 bg-gradient-to-right from-black via-black to-gray-900">

        <div className="max-w-xl flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-red-600">
            {movie.title}
          </h1>

          <p className="text-white text-lg">
            ⭐ {movie.rating.toFixed(1)}
          </p>

          <p className="text-gray-300 line-clamp-5">
            {movie.description}
          </p>

          <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold w-fit">
            Watch Now
          </button>
        </div>

        <div className="h-full flex items-center">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-[85%] object-contain rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-5 md:hidden z-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-red-600">
            {movie.title}
          </h1>

          <p className="text-white text-sm">
            ⭐ {movie.rating.toFixed(1)}
          </p>

          <p className="text-gray-300 text-sm line-clamp-3">
            {movie.description}
          </p>

          <button className="mt-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold w-fit">
            Watch Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroMovies.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-red-600" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;



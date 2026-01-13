import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie._id} data={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;

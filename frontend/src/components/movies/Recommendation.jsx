import { useContext, useEffect, useState } from "react";
import { MovieDataContext } from "../../context/MovieContext";
import SortBar from "./SortBar";
import MovieGrid from "./MovieGrid";
import Loader from "../common/Loader";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const RecommendationSection = () => {
  const { allMovies, fetchMovies, loading } =
    useContext(MovieDataContext);

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [title, setTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const MOVIES_PER_PAGE = 10;

  useEffect(() => {
    fetchMovies({
      sortBy,
      order,
      title,
    });
    setCurrentPage(1); 
  }, [sortBy, order, title]);

  if (loading) return <Loader />;

  const totalPages = Math.ceil(allMovies.length / MOVIES_PER_PAGE);
  const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
  const currentMovies = allMovies.slice(
    startIndex,
    startIndex + MOVIES_PER_PAGE
  );

  return (
    <section className="mt-16 flex flex-col gap-6">

      <h2 className="text-4xl font-semibold text-center text-white">
        Recommendations
      </h2>

      <SearchBar  />

      <SortBar
        onSort={(field, direction) => {
          setSortBy(field);
          setOrder(direction);
        }}
      />

      <MovieGrid movies={currentMovies} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
};

export default RecommendationSection;


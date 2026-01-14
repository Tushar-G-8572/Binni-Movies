import { useContext, useEffect, useState } from "react";
import { MovieDataContext } from "../../context/MovieContext";

const SearchBar = () => {
  const { fetchMovies } = useContext(MovieDataContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") return; 

    const timer = setTimeout(() => {
      fetchMovies({ title: query });
    }, 800);

    return () => clearTimeout(timer);
  }, [query, fetchMovies]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex justify-center">
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-800 border border-gray-700 text-gray-200 
                   px-4 py-2 rounded-full outline-none w-64
                   focus:border-red-600"
      />
    </form>
  );
};

export default SearchBar;

import { createContext, useEffect, useState, useCallback } from "react";
import { getMovies } from "../api/movieApi";

const MovieDataContext = createContext();

const MovieContext = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ memoized function
  const fetchMovies = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      const data = await getMovies(params);
      setAllMovies(data.movies);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // initial load
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <MovieDataContext.Provider value={{ allMovies, loading, fetchMovies }}>
      {children}
    </MovieDataContext.Provider>
  );
};

export { MovieDataContext };
export default MovieContext;

import axios from "axios";


const API = import.meta.env.VITE_API_URL;

/**
 * Fetch movies from backend with optional query params
 * @param {Object} params - { sortBy, order, title }
 * @returns {Object} { movies, count }
 */
export const getMovies = async (params = {}) => {
  try {
    const response = await axios.get(`${API}/movies`, {
      params, // axios auto builds query string
    });

    return response.data; // { movies, count }
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return { movies: [], count: 0 };
  }
};

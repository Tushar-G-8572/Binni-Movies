import axios from 'axios'

const TMDB_BASE_URL = `${process.env.TMBD_URI}`;

export const fetchTopRatedMovies = async (pages = 6) => {
  const movies = [];

  for (let page = 1; page <= pages; page++) {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/top_rated?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`
        }
      }
    );

    movies.push(...response.data.results);
  }

  return movies;
};

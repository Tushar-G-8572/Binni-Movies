import Movie from "../models/movie.model.js";
import { fetchTopRatedMovies } from "../services/fetchMovie.service.js";

export const seedMovies = async (req, res) => {
  try {
    const existingCount = await Movie.countDocuments();
    if (existingCount > 0) {
      return res.status(400).json({
        message: "Movies already exist"
      });
    }

    const movies = await fetchTopRatedMovies(7); 

    const formattedMovies = movies.map(movie => ({
      tmdbId: movie.id,
      title: movie.title,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }));

    await Movie.insertMany(formattedMovies);

    res.status(201).json({
      message: "Movies seeded successfully",
      count: formattedMovies.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const { sortBy, order = "asc", title } = req.query;

    let query = {};
    let sortOptions = {};

    // 🔍 SEARCH BY TITLE
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    // 🔃 SORTING
    const allowedSortFields = ["title", "rating", "releaseDate"];

    if (sortBy && allowedSortFields.includes(sortBy)) {
      sortOptions[sortBy] = order === "asc" ? 1 : -1;
    }

    const movies = await Movie.find(query).sort(sortOptions);

    res.status(200).json({
      count: movies.length,
      movies,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(201).json({
      message: "Movie added successfully",
      movie
    });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (!updateData.tmdbId) {
      delete updateData.tmdbId;
    }

    const movie = await Movie.findOneAndUpdate(
      { title: updateData.title },
      { $set: updateData },
      { new: true }
    );

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({
      message: "Movie updated successfully",
      movie
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Movie title is required"
      });
    }

    const movie = await Movie.findOneAndDelete({ title });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    res.status(200).json({
      message: "Movie deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

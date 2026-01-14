import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    tmdbId: Math.floor(Math.random() * 1000 + 100),
    title: "",
    description: "",
    rating: "",
    releaseDate: "",
    poster: ""
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(

        `${import.meta.env.VITE_API_URL}/admin/add-movie`,
        movie,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`
          }
        }
      );

      toast.success("Movie added successfully 🎉");
      setMovie({
        title: "",
        description: "",
        rating: "",
        releaseDate: "",
        poster: ""
      });
    } catch (error) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="w-full px-4 md:px-0">
      <div className="max-w-xl mx-auto mt-6 md:mt-10 bg-gray-900 p-4 md:p-6 rounded-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white text-center md:text-left">
          Add Movie
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            required
            name="title"
            placeholder="Title"
            value={movie.title}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded outline-none focus:ring-2 focus:ring-red-600"
          />

          <textarea
            required
            name="description"
            placeholder="Description"
            value={movie.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 bg-gray-800 text-white rounded resize-none outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            required
            name="rating"
            type="number"
            step="0.1"
            placeholder="Rating"
            value={movie.rating}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            required
            name="releaseDate"
            type="date"
            value={movie.releaseDate}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            required
            name="poster"
            placeholder="Poster URL"
            value={movie.poster}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded outline-none focus:ring-2 focus:ring-red-600"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded text-white font-semibold transition"
          >
            Add Movie
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddMovie;

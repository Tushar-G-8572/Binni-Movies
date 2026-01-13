import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditMovie = () => {
  // const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    rating: "",
    releaseDate: "",
    poster: ""
  });

  const [loading, setLoading] = useState(false);

  // ✅ Fetch existing movie
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/movies/`
        );

        const data = res.data.movie;

        setMovie({
          title: data.title || "",
          description: data.description || "",
          rating: data.rating || "",
          releaseDate: data.releaseDate
            ? data.releaseDate.split("T")[0]
            : "",
          poster: data.poster || ""
        });
      } catch (error) {
        console.log(error.message)
      }
    };
    fetchMovie();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const payload = {
      title: movie.title.trim(),
      description: movie.description.trim(),
      rating: movie.rating ? Number(movie.rating) : undefined,
      release_date: movie.releaseDate,
      poster: movie.poster.trim()
    };

    try {
      setLoading(true);

      await axios.put(
        // "http://localhost:4000/admin/update-movie",
        `${import.meta.env.VITE_API_URL}/admin/update-movie`,
        { ...payload},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`
          }
        }
      );

      alert("✅ Movie updated successfully");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error.message)
      alert(error.response?.data?.message || "Error updating movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-900 p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-white">Edit Movie</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          required
          name="title"
          placeholder="Title"
          value={movie.title}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={movie.description}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          value={movie.rating}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          name="releaseDate"
          type="date"
          value={movie.releaseDate}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <input
          name="poster"
          placeholder="Poster URL"
          value={movie.poster}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded text-white disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Movie"}
        </button>
      </form>
    </div>
  );
};

export default EditMovie;

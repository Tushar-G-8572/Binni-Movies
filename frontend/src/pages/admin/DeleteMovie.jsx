import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteMovie = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!title.trim()) {
      alert("Please enter movie title");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        // "http://localhost:4000/admin/delete-movie",
        `${import.meta.env.VITE_API_URL}/admin/delete-movie`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
          data: { title }
        }
      );

      alert("Movie deleted successfully");
      setTitle("");
      navigate("/admin/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Error deleting movie");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 md:px-0">
      <div className="bg-black/90 p-5 md:p-6 rounded-xl w-full max-w-md text-white shadow-xl">

        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Delete Movie
        </h2>

        <input 
          required
          type="text"
          placeholder="Enter Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700
                     outline-none focus:border-red-500 mb-4"
        />

        <button
          onClick={handleDelete}
          className="w-full bg-red-700 hover:bg-red-800
                     transition py-3 rounded-md font-semibold"
        >
          Delete Movie
        </button>
      </div>
    </div>
  );
};

export default DeleteMovie;

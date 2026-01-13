import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        // "http://localhost:4000/admin/logout",
        `${import.meta.env.VITE_API_URL}/admin/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`
          }
        }
      );
    } catch (error) {
      console.log("Logout API error (safe to ignore)");
    } finally {
      // ✅ Real logout happens here
      localStorage.removeItem("adminToken");
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default AdminLogout;

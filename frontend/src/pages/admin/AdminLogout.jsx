import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        
        `${import.meta.env.VITE_API_URL}/admin/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`
          }
        }
      );
    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      localStorage.removeItem("adminToken");
      navigate("/");
      toast.success("Logged Out");
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

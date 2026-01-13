import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#0b0b0f] px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0">

        {/* LOGO */}
        <h2 className="text-white text-3xl font-bold cursor-pointer text-center md:text-left">
          Binni <span className="text-red-600 text-2xl">Movies</span>
        </h2>

        {/* ADMIN LOGIN */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => navigate("/admin/login")}
            className="px-4 py-2 rounded-md text-white font-semibold 
                       bg-red-600 hover:bg-red-700 transition"
          >
            Admin Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

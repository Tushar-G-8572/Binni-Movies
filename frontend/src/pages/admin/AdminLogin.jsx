import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "../../context/AdminAuthProvider";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AdminAuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
       
        `${import.meta.env.VITE_API_URL}/admin/login`,
        { email, password }
      );
      setEmail("");
      setPassword("");
      setShowPassword(false);
      login(res.data.token);
      navigate("/admin/dashboard");
      toast.success("Admin Logged IN successfully 🎉");
    } catch (err) {
      setEmail("");
      setPassword("");
      setShowPassword(false);
      toast.error("Something went wrong ❌");

    }
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center px-4 md:px-0"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1627133805103-ce2d34ccdd37?q=80&w=1170&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Card */}
      <div className="w-full max-w-md bg-black/90 rounded-xl p-5 md:p-6 text-white shadow-xl backdrop-blur-sm">

        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Admin Sign In
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700
                       outline-none focus:border-red-500 transition"
          />

          {/* Password */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            required
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-900 border border-gray-700
                       outline-none focus:border-red-500 transition"
          />

          {/* Show Password */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="cursor-pointer accent-red-500"
            />
            <label htmlFor="showPassword" className="cursor-pointer">
              Show Password
            </label>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="mt-4 bg-red-600 hover:bg-red-800
                       transition text-white py-3 rounded-md font-semibold"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/")}
            type="button"
            className="bg-emerald-800 hover:bg-emerald-900
                       transition text-white py-3 rounded-md font-semibold"
          >
            Back to Home
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

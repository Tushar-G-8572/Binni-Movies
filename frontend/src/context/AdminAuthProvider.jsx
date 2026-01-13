import { createContext, useState } from "react";

export const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("adminToken")
  );

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
  };

  return (
    <AdminAuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;

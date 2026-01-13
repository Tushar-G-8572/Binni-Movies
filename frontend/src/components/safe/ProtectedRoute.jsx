import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminAuthContext } from "../../context/AdminAuthProvider";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AdminAuthContext);

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

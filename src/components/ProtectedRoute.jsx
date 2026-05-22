import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuthBootstrapStatus, selectIsAuthenticated } from "../store/auth/authSlice.js";

const ProtectedRoute = ({ children }) => {
  const authBootstrapStatus = useSelector(selectAuthBootstrapStatus);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (authBootstrapStatus === "loading") {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/admin-login" />;
  }

  return children;
};

export default ProtectedRoute;

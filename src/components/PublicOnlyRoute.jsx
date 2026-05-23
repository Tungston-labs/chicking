import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthBootstrapStatus, selectIsAuthenticated } from "../store/auth/authSlice.js";

const PublicOnlyRoute = ({ children }) => {
  const authBootstrapStatus = useSelector(selectAuthBootstrapStatus);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (authBootstrapStatus === "loading") {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard/blogs" />;
  }

  return children;
};

export default PublicOnlyRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../store/auth/authSlice.js";

const PublicOnlyRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate replace to="/admin/blogs" />;
  }

  return children;
};

export default PublicOnlyRoute;

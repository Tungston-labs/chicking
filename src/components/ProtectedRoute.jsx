import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Placeholder: Replace with real auth logic
  const isAuthenticated = false; // Set to true after login

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

export default ProtectedRoute;

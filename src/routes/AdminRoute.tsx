import { Navigate } from "react-router-dom";
import  { type ReactNode } from "react";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;

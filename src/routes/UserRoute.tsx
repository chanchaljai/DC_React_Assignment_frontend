import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
const UserRoute = ({children}: {children: ReactNode}) => {
    const role = localStorage.getItem("role");
    if (role !== "user") {
        return <Navigate to="/login" replace />;
    }
    return children;
}
export default UserRoute
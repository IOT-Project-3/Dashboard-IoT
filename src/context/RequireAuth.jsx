import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/useAuth"; // ou "../context/useAuth" selon ton alias

export default function RequireAuth() {
  const isAuthenticated = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate to="/connexion" replace state={{ from: location.pathname }} />
    );
  }

  return <Outlet />;
}

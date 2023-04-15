import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../providers/UserContext";
import { TechProvider } from "../providers/TechContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={location} />; // envia para o login
  }

  return (
    <TechProvider>
      <Outlet />
    </TechProvider>
  );
};

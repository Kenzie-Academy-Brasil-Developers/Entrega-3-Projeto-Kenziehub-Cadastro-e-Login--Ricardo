import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Preview } from "../pages/Preview";
import { StyleRoutes } from "./style";

export const RoutesMain = () => {
  return (
    <StyleRoutes>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path=":id" element={<Preview />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </StyleRoutes>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { StyleRoutes } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ModalRegisterTechnology } from "../components/Modais/ModalRegisterTechnology";
import { useState } from "react";
import { ModalDetails } from "../components/Modais/ModalDetails";
import { UserProvider } from "../components/providers/UserContext";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <StyleRoutes>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </StyleRoutes>
  );
};

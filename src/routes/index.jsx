import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Preview } from "../pages/Preview";
import { StyleRoutes } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ModalRegisterTechnology } from "../components/Modais/ModalRegisterTechnology";

export const RoutesMain = () => {
  return (
    <StyleRoutes>
      <ToastContainer />

      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="register" element={<Register toast={toast} />} />
        <Route path="dashboard" element={<Dashboard toast={toast} />}>
          <Route path=":id" element={<ModalRegisterTechnology />}></Route>
        </Route>

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </StyleRoutes>
  );
};

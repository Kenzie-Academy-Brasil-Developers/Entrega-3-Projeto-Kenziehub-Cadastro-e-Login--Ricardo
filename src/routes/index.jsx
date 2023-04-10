import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Preview } from "../pages/Preview";
import { StyleRoutes } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ModalRegisterTechnology } from "../components/Modais/ModalRegisterTechnology";
import { useState } from "react";

export const RoutesMain = () => {
  const [ user, setUser] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <StyleRoutes>
      <ToastContainer />

      <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="register" element={<Register  />} />
        <Route path="dashboard" element={<Dashboard user={user} setUser={setUser} isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>}>
          <Route path=":id" element={<ModalRegisterTechnology isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>}></Route>
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </StyleRoutes>
  );
};

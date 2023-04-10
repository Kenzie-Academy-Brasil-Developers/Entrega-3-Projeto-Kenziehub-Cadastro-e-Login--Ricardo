import { Header } from "../../components/Header";
import { api } from "../../services/api";
import {
  StyledTitleOne,
  StyledTitleThree,
  StyledTitleTwo,
  Styledspan,
} from "../../styles/typography";
import { StyleDashboard } from "./style";

import { CardListTechnology } from "../../components/Forms/CardListTechnology";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

export const Dashboard = ({ isShowModal, setIsShowModal }) => {
  
  const localStorageIdUserLogado = localStorage.getItem("@USERID");
  const [userName, setUserName] = useState("");
  const [userModule, setUserModule] = useState("");
  const [techsList, setTechsList] = useState([]);
  
  
  const loadUser = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      setUserName(response.data.name);
      setUserModule(response.data.course_module);
      setTechsList(response.data.techs);
      return response;
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    loadUser(localStorageIdUserLogado);
  }, [techsList]);
  return (
    <StyleDashboard>
      <div className="containerMain">
        <Header page={"dashboard"} />
        <div className="divBord">
          <div className="divBordIn">
            <div className="containerTitle">
              <StyledTitleTwo fontSize="one">Olá, {userName}</StyledTitleTwo>
              <Styledspan>{userModule}</Styledspan>
            </div>
              <Outlet />
          </div>
        </div>
        <CardListTechnology techsList={techsList} localStorageIdUserLogado={localStorageIdUserLogado} isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      </div>
    </StyleDashboard>
  );
};

import { Header } from "../../components/Header";
import {
  StyledTitleTwo,
  Styledspan,
} from "../../styles/typography";
import { StyleDashboard } from "./style";
import { CardListTechnology } from "../../components/Forms/CardListTechnology";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const Dashboard = ({ isShowModal, setIsShowModal, user }) => {
  const localStorageIdUserLogado = localStorage.getItem("@USERID");
  const [techsList, setTechsList] = useState([]);

  const loadUser = () => {
    setTechsList(user.techs);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <StyleDashboard>
      <div className="containerMain">
        <Header page={"dashboard"} />
        <div className="divBord">
          <div className="divBordIn">
            <div className="containerTitle">
              <StyledTitleTwo fontSize="one">Olá, {user.name}</StyledTitleTwo>
              <Styledspan>{user.course_module}</Styledspan>
            </div>
            <Outlet />
          </div>
        </div>
        <CardListTechnology
          techsList={techsList}
          localStorageIdUserLogado={localStorageIdUserLogado}
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
        />
      </div>
    </StyleDashboard>
  );
};

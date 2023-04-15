import { Header } from "../../components/Header";
import { StyledTitleTwo, Styledspan } from "../../styles/typography";
import { StyleDashboard } from "./style";
import { CardListTechnology } from "../../components/Forms/CardListTechnology";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../components/providers/UserContext";
import { ModalDetails } from "../../components/Modais/ModalDetails";
import { ModalRegisterTechnology } from "../../components/Modais/ModalRegisterTechnology";
import {
  TechContext,
  TechProvider,
} from "../../components/providers/TechContext";

export const Dashboard = ({}) => {
  const { user } = useContext(UserContext);

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

            <ModalRegisterTechnology />
            <ModalDetails />
          </div>
        </div>
        <CardListTechnology />
      </div>
    </StyleDashboard>
  );
};

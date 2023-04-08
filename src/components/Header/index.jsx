import { StyledTitleThree } from "../../styles/typography";
import { StyleHeader } from "./style";
import logo from "../../assets/logo-kenzie.svg";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/button";
export const Header = ({page}) => {
  return (
    <>
      <StyleHeader page={page}>
        <StyledTitleThree className="title"><img src={logo}></img></StyledTitleThree>
  
        <Link className={page == "register" ? "show" : "hidden"} to={"/login"}>
        <StyledButton buttonSize="mobileMd" buttonStyle="small">Voltar</StyledButton>
        </Link>
      </StyleHeader>
    </>
  );
};

import { StyledTitleOne } from "../../../styles/typography";
import { Card } from "./Card";
import {
  StyleCardListTechnology,
  StyleCardListTechnologyContainer,
} from "./style";
import imgadd from "../../../assets/Button-small-Default.svg";
import { Link } from "react-router-dom";

export const CardListTechnology = ({ techsList, localStorageIdUserLogado, isShowModal, setIsShowModal }) => {
  return (
    <StyleCardListTechnologyContainer className="containerListTechnology">
      <div className="containerImg">
        <Link to={localStorageIdUserLogado}>
          <button onClick={() => setIsShowModal(!isShowModal)}>
            <img src={imgadd} alt="icon" />
          </button>
        </Link>
        <StyledTitleOne fontSize="two">Tecnologias</StyledTitleOne>
      </div>
      <StyleCardListTechnology>
        {techsList.map((tech) => (
          <Card key={tech.id} tech={tech} />
        ))}
      </StyleCardListTechnology>
    </StyleCardListTechnologyContainer>
  );
};

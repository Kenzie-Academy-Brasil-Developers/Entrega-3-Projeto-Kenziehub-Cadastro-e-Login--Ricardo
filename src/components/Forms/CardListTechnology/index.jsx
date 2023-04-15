import { StyledTitleOne } from "../../../styles/typography";
import { Card } from "./Card";
import {
  StyleCardListTechnology,
  StyleCardListTechnologyContainer,
} from "./style";
import imgadd from "../../../assets/Button-small-Default.svg";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const CardListTechnology = ({}) => {
  const {
    techsList,
    setCurrentTech,
    isShowModal,
    setIsShowModal,
    setIsShowModalEditTechnology,
  } = useContext(TechContext);

  const handleClick = (tech) => {
    setIsShowModalEditTechnology(true);
    setCurrentTech(tech);
  };
  return (
    <StyleCardListTechnologyContainer className="containerListTechnology">
      <div className="containerImg">
        <button onClick={() => setIsShowModal(!isShowModal)}>
          <img src={imgadd} alt="icon" />
        </button>
        <StyledTitleOne fontSize="two">Tecnologias</StyledTitleOne>
      </div>
      <StyleCardListTechnology>
        {techsList.map((tech) => (
          <button key={tech.id} onClick={() => handleClick(tech)}>
            <Card key={tech.id} tech={tech} />
          </button>
        ))}
      </StyleCardListTechnology>
    </StyleCardListTechnologyContainer>
  );
};

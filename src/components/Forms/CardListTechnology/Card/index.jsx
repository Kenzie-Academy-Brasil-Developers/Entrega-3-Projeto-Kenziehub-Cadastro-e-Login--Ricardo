import { Link } from "react-router-dom";
import { StyledTitleThree, Styledspan } from "../../../../styles/typography";
import { StyleCard } from "./style";

export const Card = ({ tech }) => {
  return (
    <StyleCard>
      <Link to={`${tech.id}`}>
        <StyledTitleThree fontSize="three">{tech.title}</StyledTitleThree>
        <Styledspan>{tech.status}</Styledspan>
      </Link>
    </StyleCard>
  );
};

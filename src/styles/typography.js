import styled, { css } from "styled-components";

export const titleStyles = css`
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  line-height: 2.8rem;

  color: var(--color-white-1);

  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: 1.8273rem;
        `;
      case "two":
        return css`
          font-size: 1.62426rem;
          font-weight: 600;
          line-height: 2.6rem;
        `;
      case "three":
        return css`
          font-size: 1.42123rem;
          line-height: 2.4rem;
        `;
         case "threeOne":
        return css`
          font-size: 1.12304rem;
          line-height: 1.9rem;
        `;
      case "four":
        return css`
          font-size: 1rem;
          font-weight: 600;
        `;
    }
  }}
`;

export const StyledTitleOne = styled.h1`
  ${titleStyles};
`;

export const StyledTitleTwo = styled.h2`
  ${titleStyles};
`;

export const StyledTitleThree = styled.h3`
  ${titleStyles};
`;

export const StyledTitleFour = styled.h4`
  ${titleStyles};
`;
export const StyledParagraph = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.2182rem;
  line-height: 2.2rem;
  color: var(--color-gray-1);
`;
export const Styledspan = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.2182rem;
  line-height: 2.2rem;
  color: var(--color-gray-1);
`;

export const StyledBold = styled.strong`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.2182rem;
  line-height: 1.8rem;
  color: var(--color-white-0);
  text-transform: capitalize;
`;
export const StyledItalic = styled.em`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.2182rem;
  line-height: 1.8rem;
  color: var(--color-white-0);
`;

import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "mobile":
        return css`
          width: 25.9rem;
          height: 3.85rem;
          padding: 0rem 1.29865rem;
          font-weight: 500;
          font-size: 1.28347rem;
          line-height: 2.1rem;
          border-radius: 3.25733px;
        `;
      case "mobileTechMd":
        return css`
          width: 16.309rem;
          height: 3.837rem;
          padding: 0rem 1.29865rem;
          font-weight: 500;
          font-size: 1.28347rem;
          line-height: 2.1rem;
          border-radius: 3.19783px;
          border: 0.973899px solid var(--color-brown-0);
        `;
      case "mobileMd":
        return css`
          width: 9.949rem;
          height: 3.2rem;
          padding: 0rem 1.62426rem;
          font-weight: 600;
          font-size: 0.959rem;
          line-height: 2.273rem;
          color: var(--color-gray-0);
          border-radius: 4px;
        `;
      case "mobileSmallTech":
        return css`
          width: 7.835rem;
          height: 3.837rem;
          padding: 0rem 1.78548rem;
          font-weight: 500;
          font-size: 1.27913rem;
          line-height: 2.1rem;
          color: var(--color-gray-0);
          border-radius: 3.19783px;
          border: 0.973899px solid var(--color-gray-1);
        `;
      case "sm":
        return css`
          width: 3.249rem;
          height: 3.2rem;
          font-weight: 600;
          font-size: 12px;
          line-height: 28px;
        `;
      case "mobileSmall":
        return css`
          width: 5.549rem;
          height: 3.2rem;
          font-size: 1.2rem;
          line-height: 2.8rem;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "primary":
        return css`
          background: var(--color-primary);
          color: var(--color-white-0);
          :hover {
            background: var(--color-primary-focus);
          }
        `;
      case "primary-negative":
        return css`
          background: var(--color-primary-negative);
          color: var(--color-white-0);
        `;
      case "desabilitado":
        return css`
          background: var(--color-desabilitado);
          color: var(--color-white-0);
          :hover {
            background: var(--color-desabilitado-hover);
          }
        `;
      case "secundary":
        return css`
          background: var(--color-secundary);
          color: var(--color-gray-0);
          :hover {
            background: var(--color-secundary-hover);
          }
        `;
      case "small":
        return css`
          background: var(--color-bt-small);
          color: var(--color-gray-0);
          :hover {
            background: var(--color-secundary-hover);
          }
        `;
    }
  }}
  @media (min-width: 768px) {
    ${({ buttonSize }) => {
      switch (buttonSize) {
        case "mobile":
          return css`
            width: 32.4rem;
            height: 4.8rem;
          `;
        case "mobileMd":
          return css`
            width: 6.749rem;
            height: 4.011rem;
            font-size: 1.2rem;
            line-height: 2.842rem;
          `;
      }
    }}
  }
`;

import styled from "styled-components";

export const StyleCard = styled.li`
  width: 279px;
  height: 48.73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-gray-4);
  border-radius: 4.06px;

  a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  :hover {
    background-color: var(--color-gray-2);
  }
  @media(min-width: 768px) {
    width: 732px;
  }
`;

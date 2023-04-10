import styled from "styled-components";

export const StyleCardListTechnology = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 296px;
  background-color: var(--color-gray-3);
  padding: 2rem 1rem;
  margin-top: 2rem;
  border-radius: 4px;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 369px;
  }
  .containerListTechnology {
    width: 369px;
  }
`;

export const StyleCardListTechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  .containerImg {
    width: 100%;
    margin-top: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0rem 0.3rem;
  }
  .containerImg img {
    position: absolute;
    right: 1.3rem;
    top: 1rem;
  }
  @media (min-width: 768px) {
    width: 369px;
  }
`;

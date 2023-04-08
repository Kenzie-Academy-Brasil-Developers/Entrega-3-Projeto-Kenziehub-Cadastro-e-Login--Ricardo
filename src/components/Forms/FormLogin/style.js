import styled from "styled-components";

export const StyleFormLogin = styled.form`
  width: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  color: var(--color-white-1);
  font-weight: 400;
  font-size: 1.30293rem;
  line-height: 2.1rem;
  border: none;
  gap: 1rem;
  margin: 2rem 0rem 3rem 0rem;

  fieldset {
    border: none;
  }
  p {
    margin-bottom: 3rem;
  }
`;

export const StyleFormContainer = styled.div`
  background-color: var(--color-gray-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  border-radius: 8px;
  margin-top: 1rem;
  .p {
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .buttonEntrar {
    margin-top: 1rem;
  }
  span {
    color: var(--color-gray-1);
    font-weight: 400;
    font-size: 0.959437rem;
    line-height: 1.8rem;
    margin: 1rem 0 ;
  }
  @media (min-width: 768px) {
    width: 369px;
    span {
      font-size: 1.2rem;
      line-height: 2.2rem;
    }
  }
`;

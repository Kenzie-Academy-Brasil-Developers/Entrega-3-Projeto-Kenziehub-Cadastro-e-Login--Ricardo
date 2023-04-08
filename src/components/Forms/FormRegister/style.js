import styled from "styled-components";

export const StyleFormRegister = styled.form`
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
    display: flex;
    flex-direction: column;
    input{
      margin-bottom: 3rem;
    }
  }
  p {
    margin-bottom: 3rem;
  }
  .selectFormRegister {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    background-color: var(--color-gray-2);
    width: 26.466rem;
    height: 3.85rem;

    border-radius: 3.25733px;

    padding-right: 1rem;
  }
  .selectFormRegister select {
    font-family: "Inter", sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1.29865rem;
    font-size: 1.29865rem;
    font-weight: 400;
    line-height: 2.1rem;
    background-color: transparent;
    border: none;
    width: 100%;
    color: var(--color-gray-1);
    option {
      background-color: var(--color-gray-2);
    }
  }
  
  .buttonRegister {
    margin-top: 2rem;
  }
  .titleSelect {
    width: 100%;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    .selectFormRegister {
      width: 32.993rem;
      height: 4.8rem;
    }
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

  @media (min-width: 768px) {
    width: 369px;
  }
`;

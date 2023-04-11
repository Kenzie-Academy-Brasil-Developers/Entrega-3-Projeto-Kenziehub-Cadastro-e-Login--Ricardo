import styled from "styled-components";

export const StyleModalRegisterTechnologyForm = styled.form`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  position: absolute;
  z-index: 1;
  margin-top: 7rem;
  width: 296px;
  background-color: var(--color-gray-3);
  align-self: center;
  .formTitle {
    width: 100%;
    height: 4.011rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-gray-2);
  }
  .formTitle button {
    color: var(--color-gray-1);
  }
  label,
  p {
    font-size: 0.9rem;
  }
  input{

    border: 0.9772px solid var(--color-white-1);
border-radius: 3.20867px;
  }
  .fieldsetModal {
    border: none;
    padding: 1rem;
  }
  .buttonRegisterTechnology {
    margin: 1rem;
  }
  .statusFormRegister {
    width: 26.466rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    background-color: var(--color-gray-2);
    width: 26.466rem;
    height: 3.85rem;

    border-radius: 3.25733px;

    padding-right: 1rem;
    margin-top: 1rem;
    border: 0.9772px solid var(--color-white-1);
  }
  .statusFormRegister select {
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
  .hidden{
    display: none;
  }
  @media(min-width: 768px) {
width: 369px;
.statusFormRegister {
  width: 32.993rem;
  height: 4.8rem;
}
.formTitle {
  height: 5rem;
}
}
`;

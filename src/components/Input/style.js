import styled from "styled-components";

export const StyleInput = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    background-color: var(--color-gray-2);
    width: 26.466rem;
    height: 3.85rem;
    padding: 0px 13.0293px;
    display: flex;
    align-items: center;
    border: var(--color-gray-0);
    border-radius: 3.20867px;
    color: var(--color-white-1);
    margin-bottom: 1rem;
    font-size: 1.29865rem;
    font-weight: 400;
    line-height: 2.1rem;
  }
  label {
    background-color: transparent;
    margin-bottom: 1rem;
  }
  p {
    position: absolute;
    top: 7rem;
    left: 1rem;
    color: var(--color-error);
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .inputpass{ 
    position: relative;
    display: flex;
    width: 100%;
    margin: -1rem 0rem 2rem;
  }
  .iconEye{
    position: absolute;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    top: 0.7rem;
    right: 1rem;
  }
  .hidden{
    display: none;
  }
  @media (min-width: 768px) {
    input {
      width: 32.993rem;
      height: 4.8rem;
    }
    p{
        top: 8rem
    }
    .iconEye{
        top: 1rem;
    }
  }
`;

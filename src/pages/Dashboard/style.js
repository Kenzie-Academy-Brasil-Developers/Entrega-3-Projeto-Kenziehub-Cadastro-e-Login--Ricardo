import styled from "styled-components";

export const StyleDashboard = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .containerMain {
    display: flex;
    flex-direction: column;
    width: 320px;
    /* max-width: 780px; */
  }
  .divBord{
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 131px;
        box-shadow: 0px 1px 0px 0px var(--color-gray-3),
      0px -1px 0px 0px var(--color-gray-3);
      align-self: center;
  }
  .divBordIn{
    display: flex;
    flex-direction: column;
    height: 131px;
    width: 320px;
    max-width: 780px;
    align-self: center;
  }
  .containerTitle {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 131px;
padding: 0 0.3rem;
  }
  h1, h2 {
    color: var(--color-gray-0);
    justify-content: flex-start;
    padding: 1rem;
  }
  
  span {
    padding: 1rem;
  }
  header {
    padding: 1rem;
  }
@media(min-width: 768px){
  .containerMain {
    width: 369px;
    max-width: 780px;
  }
  .divBordIn{
    width: 369px;
    max-width: 780px;
  }
}
`



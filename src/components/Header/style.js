import styled, { css } from "styled-components";

export const StyleHeader = styled.header`
${({ page }) => {
  if(page == "register"){
    return css`
    justify-content: space-between;
    `
  }else{
    return css`
    justify-content: center;
    `
  }
}}
width: 296px;
display: flex;
align-items: center;
 margin: 2rem 0;
  .title img{
    width: 101px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  .show{
    display: flex;
    justify-content: space-between;
  }
  .hidden{
    display: none;
    
  }
  @media (min-width: 768px) {
    width: 369px;
    .title img{
      width: 144px;
      height: 19.97px;
    }
    .show{
      display: flex;
    justify-content: space-between;
    }
  }
`;

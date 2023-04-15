import styled, { css } from "styled-components";

export const StyleHeader = styled.header`

width: 296px;
display: flex;
align-items: center;
justify-content: center;
 margin: 4rem 0 2rem;
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
    cursor: pointer;
  }
  .hidden{
    display: none;
    
  }
  ${({ page }) => {
  if(page != "login"){
    return css`
    justify-content: space-between;
    width: 296px;
    `
  }else{
    return css`
    justify-content: center;
    `
  }
}}
  @media (min-width: 768px) {
    width: 780px;
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

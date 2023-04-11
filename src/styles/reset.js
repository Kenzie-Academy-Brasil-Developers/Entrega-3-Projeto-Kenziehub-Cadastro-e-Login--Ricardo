import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    } 
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  .App{
    width: 100%;
    height: 100%;
}
  body,html, #root{
    width: 100vw;
    height: 100vh;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color:  var(--color-gray-4);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: var(--color-secondary);
    font-weight: 500;
  }

  h1 {
    font-size: 4.3rem;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  input{
    background: transparent;
    border: 0;
    :focus{
      outline: none;
    }
  }

  li {
    color: var(--color-secondary);;
  }
  ul, ol, a{
    list-style: none;
    text-decoration: none;
  }
`
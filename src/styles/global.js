
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
    --color-black: #000000;
    --color-white-0: #FFFFFF;
    --color-white-1: #F8F9FA;
    --color-blue: #817EFF;
    --color-gray-0: #F8F9FA;
    --color-gray-1: #868E96;
    --color-gray-2: #343B41;
    --color-gray-3: #212529;
    --color-gray-4: #121214;
    --color-red-0: #FF577F;
    --color-red-1: #FF427F;
    --color-green-0: #3FE864;
    --color-yellow-0: #FBEA85;
    --color-brown-0: #59323F;
    --color-transparent: rgba(217, 217, 217, 0.36);


    --color-primary: var(--color-red-0);
    --color-primary-focus: var(--color-red-1);
    --color-primary-negative: var(--color-brown-0);

    --color-desabilitado: var(--color-gray-1);
    --color-desabilitado-hover: var(--color-gray-2);

    --color-secundary: var(--color-gray-1);
    --color-secundary-hover: var(--color-gray-2);

    --color-bt-small: var(--color-gray-3);
    --color-bt-small-hover: var(--color-gray-2);

    --color-success: var(--color-green-0);
    --color-warning: var(--color-yellow-0);
    --color-error: var(--color-red-0);

    font-size: 60%;   
  }


`;


// 1rem 16px => 100%
// 1rem 10px => 62.5%
       
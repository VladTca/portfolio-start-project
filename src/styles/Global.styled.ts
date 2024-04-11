import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

  *,*::before,*::after {
    box-sizing: border-box;
      margin: 0;padding: 0;
  }
  
  
    body {
        margin: 0;
        font-family: "Be Vietnam Pro", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

button{
    background-color: unset;
    border: none;
}


section:nth-of-type(odd){
    background-color: ${theme.colors.primaryBg};
}
section:nth-of-type(even){
    background-color: ${theme.colors.secondaryBg};
}

`;

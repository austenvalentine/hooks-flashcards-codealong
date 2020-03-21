import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Spartan:300&display=swap');
html {
  font-size: 62.5%;
}

h1, h2, h3, h4, h5, h6, div, p {
  margin: 0;
  font-family: 'Spartan';
  font-weight: 300;
}

`;

export default GlobalStyle;

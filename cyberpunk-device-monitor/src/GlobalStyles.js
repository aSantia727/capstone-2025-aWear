import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #222; /* Example dark background */
    color: #eee; /* Example light text color */
  }
`;

export default GlobalStyle;
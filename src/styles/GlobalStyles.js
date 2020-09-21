import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0px;
    padding: 0px;
  }

  ul {
    list-style: none;
    padding: 0px;
  }

  button {
    margin: 0px;
    background: transparent;
    outline: none;
    border: 0px;
  }
`;

export default GlobalStyles;

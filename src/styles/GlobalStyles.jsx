import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans';
    src: url('/assets/Fonts/NotoSans-Regular.woff2') format('woff2');
    font-weight: normal;
  }

  html, body, #root {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'NotoSans', sans-serif;
  }

  input {
    background-color: transparent;
    &:focus {
      outline-style: none;
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    &:focus {
      outline-style: none;
    }
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;

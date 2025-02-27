import { createGlobalStyle } from 'styled-components'
import '../assets/Fonts/NotoSans-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans';
    src: url('./NotoSans-Regular.woff2') format('woff2');
    font-weight: normal;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto_Sans', sans-serif;
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
`

export default GlobalStyle;
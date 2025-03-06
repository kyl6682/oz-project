import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* ExtraLight - 200 */
  @font-face {
    font-family: 'NotoSans';
    src: url('/src/assets/Fonts/NotoSans-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  /* Light - 300 */
  @font-face {
    font-family: 'NotoSans';
    src: url('/src/assets/Fonts/NotoSans-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  /* Regular - 400 */
  @font-face {
    font-family: 'NotoSans';
    src: url('/src/assets/Fonts/NotoSans-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  /* Medium - 500 */
  @font-face {
    font-family: 'NotoSans';
    src: url('/src/assets/Fonts/NotoSans-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  /* SemiBold - 600 */
  @font-face {
    font-family: 'NotoSans';
    src: url('/src/assets/Fonts/NotoSans-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  /* Bold - 700 */
  @font-face {
    font-family: 'NotoSans';
    src: url('/src/assets/Fonts/NotoSans-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  /* Thin - 100 */
  @font-face {
    font-family: 'NotoSans';
    src: url('/src/assets/Fonts/NotoSans-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
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

import { createGlobalStyle } from 'styled-components'
import Noto_Sans from '../assets/Fonts/Noto_Sans.woff'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto_Sans';
    src: url('../assets/Fonts/Noto_Sans.woff') format(woff);
    font-weight: 400;
    font-style: normal;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto_Sans', sans-serif;
  }
`

export default GlobalStyle;
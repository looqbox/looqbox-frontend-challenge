import { createGlobalStyle } from "styled-components";

import FontPlayBold from "../assets/fonts/Play-Bold.ttf";
import FontPlayRegular from "../assets/fonts/Play-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Play Bold';
    src: url('${FontPlayBold}');
  }

  @font-face {
    font-family: 'Play Regular';
    src: url('${FontPlayRegular}');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    font-family: 'Play Regular';
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Play Regular';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style-type: none;
  }
`;

export default GlobalStyles;

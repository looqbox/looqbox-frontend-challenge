import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --tag_normal: #A4ACAF;
  --tag_fighting: #D56723;
  --tag_flying: #3DC7EF;
  --tag_poison: #B97FC9;
  --tag_ground: #F7DE3F;
  --tag_rock: #A38C21;
  --tag_bug: #729F40;
  --tag_ghost: #7B62A3;
  --tag_steel: #9EB7B8;
  --tag_fire: #FD7D24;
  --tag_water: #4592C4;
  --tag_grass: #9BCC50;
  --tag_electric: #EED535;
  --tag_psychic: #F467BA;
  --tag_ice: #51C4E7;
  --tag_dragon: #F16E57;
  --tag_dark: #707070;
  --tag_fairy: #FDB9E9;
  --tag_unknown: #C4C4C4;
  --tag_shadow: #BDB9B8;
}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  a {
    color: #000000;
  }

`;

export default GlobalStyles;

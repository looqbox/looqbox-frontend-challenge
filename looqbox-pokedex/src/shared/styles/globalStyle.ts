import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;

    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer
  }

  #root {
    height: max-content;
    min-width: 100%;
    background: linear-gradient(180deg, #121212 , #282828);
  }

    :root {
    --grass: #366930;
    --fire: #A64B1C;
    --water: #2E558C;
    --electric: #C18B0D;
    --bug: #718717;
    --normal: #6A685B;
    --poison: #592996;
    --ground: #8B631E;
    --fairy: #C07079;
    --fighting: #A03F3F;
    --psychic: #A12A52;
    --ghost: #311840;
    --rock: #593E35;
    --ice: #5199A8;
    --dark: #303030;
    --dragon: #4D546E;
    --steel: #5A5A5A;
    --undefined: #303030;

    --secondary-grass: #FFFFBD;
    --secondary-fire: #ffc0a7;
    --secondary-water: #C3F1FD;
    --secondary-electric: #FFFFBD;
    --secondary-bug: #D7F39B;
    --secondary-normal: #D8D8D8;
    --secondary-poison: #E4CEFF;
    --secondary-ground: #F0D5A7;
    --secondary-fairy: #FAD1D5;
    --secondary-fighting: #FFC3C3;
    --secondary-psychic: #FFBBCF;
    --secondary-ghost: #E4CEFF;
    --secondary-rock: #B7A390;
    --secondary-ice: #BDEFFF;
    --secondary-dark: #D2D2D2;
    --secondary-dragon: #CDE1FF;
    --secondary-steel: #FFFFFF;
    --secondary-undefined: #CCC;

  }
`;

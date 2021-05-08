import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    box-sizing: border-box;
  }

  a:link {
    text-decoration: inherit;
  }

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #1a9dff;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

  html, body, #root {
    font-family: sans-serif;
    background: linear-gradient(-218deg, #231444 48%, #442e71 75%) no-repeat;
    height: auto !important;
    min-height:100%;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
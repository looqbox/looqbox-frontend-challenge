import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.pokemon.colors.main.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.pokemon.colors.main.primary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.pokemon.colors.main.tertiary};
  }


`;

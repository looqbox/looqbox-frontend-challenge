import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        background-color: ${(props) => props.theme.background};
        font-family: "Manrope", sans-serif;
        -webkit-font-smoothing: antialiased;
    }
`;

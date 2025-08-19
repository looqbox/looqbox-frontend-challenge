import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root { color-scheme: dark; }
  html, body, #root { height: 100%; background: ${({ theme }) => theme.colors.bg}; }
  * { box-sizing: border-box; }
  body { color: ${({ theme }) => theme.colors.text}; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
`;

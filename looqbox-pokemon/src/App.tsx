import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Router } from "./routes";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;

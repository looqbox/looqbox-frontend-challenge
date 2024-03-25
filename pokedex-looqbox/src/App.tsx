import TitlePage from "./components/title-page/title-page";
import { AppRoutes } from "./routes/routes";
import { ThemeProvider } from "./contexts/theme-context";

function App() {


  return (
    <>
    <ThemeProvider>
      <TitlePage />
      <AppRoutes />
    </ThemeProvider>
    </>
  )
}

export default App

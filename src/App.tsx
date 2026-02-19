import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/Home";
import { PokemonDetails } from "./pages/PokemonDetails/PokemonDetails";
import { NotFound } from "./pages/NotFound/NotFound";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

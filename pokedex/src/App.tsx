import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import PokemonDetails from "./page/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

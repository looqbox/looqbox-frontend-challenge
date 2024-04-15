import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/details/:pokemonName"
        element={<PokemonDetails />}
      />
    </Routes>
  );
}

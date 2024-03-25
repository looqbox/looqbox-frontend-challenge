import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonHome } from "../pages/pokemon-home";
import { PokemonDetails } from "../pages/pokemon-details";

const AppRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonHome />} />
                <Route path="/pokemon-details/:name" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes };
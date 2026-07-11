import { useContext } from "react";
import { PokemonsListContext } from "@/contexts/PokemonsList";

export const usePokemonsList = () => useContext(PokemonsListContext);

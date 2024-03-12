import { createContext } from "react";
import { IPokemonInformationContext } from "./PokemonInformation.types";

export const PokemonInformationContext = createContext<IPokemonInformationContext>({} as IPokemonInformationContext);
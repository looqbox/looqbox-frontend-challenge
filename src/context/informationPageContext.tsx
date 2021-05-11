import { createContext, useState, useContext } from "react";
export const informationPageContext = createContext({});

export default function InformationPageProvider({ children }: any) {
  const [pokemonInformation, setPokemonInformation] = useState({});
  return (
    <informationPageContext.Provider
      value={{ pokemonInformation, setPokemonInformation }}
    >
      {children}
    </informationPageContext.Provider>
  );
}

export function useInformationPageContext() {
  const context = useContext(informationPageContext);
  const { pokemonInformation, setPokemonInformation }: any = context;
  return { pokemonInformation, setPokemonInformation };
}

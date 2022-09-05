import React, { useState, useContext, createContext } from 'react';
import PokemonListData from '../@types/PokemonListData';

export const PokemonsContext = createContext({});

interface Props {
    children: any;
}

export const PokemonsProvider:React.FC<Props> = ({children}) => {
    const [pokemons, setPokemons] = useState<PokemonListData[]>([]);
    const [offset, setOffset] = useState<number>(0);

    return(
        <PokemonsContext.Provider value={{pokemons, setPokemons, offset, setOffset} as any}>
            {children}
        </PokemonsContext.Provider>
    );
}

export const usePokemons = () => {
    const context = useContext(PokemonsContext);
    const { pokemons, setPokemons, offset, setOffset }: any = context;

    return { pokemons, setPokemons, offset, setOffset };
}


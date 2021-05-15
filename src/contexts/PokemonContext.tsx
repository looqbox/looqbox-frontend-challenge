import React from 'react';
import api from '../services/api';

interface IPropsCard {
    name: string;
    base_experience: number;
    weight: number;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];
}

interface IPropsPokemon {
    data: IPropsCard[];
    pokemonSelected: IPropsCard;
    loading: boolean;
    listInitial: () => void;
    search: (value: string) => void;
    selectPokemon: (value: string) => void;
}

export const PokemonContext = React.createContext({} as IPropsPokemon);

export const PokemonProvider: React.FC = ({ children }) => {
    const arrayPokemonsInitials = [25, 9, 1, 87];

    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([] as IPropsCard[]);
    const [pokemonSelected, setPokemonSelected] = React.useState(
        {} as IPropsCard,
    );

    async function listInitial() {
        const arrayData = [] as IPropsCard[];
        setLoading(true);
        arrayPokemonsInitials.forEach(async pokemon => {
            const responce = await api.get(`pokemon/${pokemon}`);
            arrayData.push(responce.data);
        });
        setData(arrayData);
        setLoading(false);
    }
    async function search(value: string) {
        setLoading(true);
        const responce = await api.get(`pokemon/${value}`);
        setPokemonSelected(responce.data);
        setLoading(false);
    }
    async function selectPokemon(name: string) {
        setLoading(true);
        const responce = await api.get(`pokemon/${name}`);
        setPokemonSelected(responce.data);
        setLoading(false);
    }

    return (
        <PokemonContext.Provider
            value={{
                data,
                pokemonSelected,
                loading,
                listInitial,
                search,
                selectPokemon,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

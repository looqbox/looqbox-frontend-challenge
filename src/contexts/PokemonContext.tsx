import React from 'react';
import api from '../services/api';

export interface IPropsCard {
    name: string;
    base_experience: number;
    weight: number;
    height: number;

    abilities: {
        ability: {
            name: string;
        };
    }[];
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
    imgLoading: boolean;
    listInitial: () => void;
    search: (value: string) => void;
    selectPokemon: (data?: IPropsCard) => void;
    setImgLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonContext = React.createContext({} as IPropsPokemon);

export const PokemonProvider: React.FC = ({ children }) => {
    const arrayPokemonsInitials = [25, 150, 131, 1, 95, 152, 6, 123];

    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([] as IPropsCard[]);
    const [pokemonSelected, setPokemonSelected] = React.useState(
        ({} as IPropsCard) || {},
    );
    const [imgLoading, setImgLoading] = React.useState(true);

    React.useEffect(() => {
        listInitial();
        // eslint-disable-next-line
    }, []);

    React.useEffect(() => {
        console.log(data);
    }, [data]);
    async function listInitial() {
        const arrayData = [] as IPropsCard[];
        setLoading(true);

        for (let i = 0; i < arrayPokemonsInitials.length; i++) {
            const responce = await api.get(
                `pokemon/${arrayPokemonsInitials[i]}`,
            );
            arrayData.push(responce.data);
        }
        setData(arrayData);
        setLoading(false);
    }

    async function search(value: string) {
        setLoading(true);
        const responce = await api.get(`pokemon/${value}`);
        setPokemonSelected(responce.data);
        setLoading(false);
    }
    async function selectPokemon(data?: IPropsCard) {
        // setLoading(true);
        // const responce = await api.get(`pokemon/${name}`);
        // setLoading(false);
        setPokemonSelected(data ? data : ({} as IPropsCard));
        setImgLoading(true);
    }

    return (
        <PokemonContext.Provider
            value={{
                data,
                pokemonSelected,
                loading,
                imgLoading,
                listInitial,
                search,
                selectPokemon,
                setImgLoading,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

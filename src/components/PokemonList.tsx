import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchInitialPokemons } from "../store/pokemonSlice";

export const PokemonList = () => {
    const dispatch = useAppDispatch();

    const { pokemonList, loading, error, currentPage } = useAppSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchInitialPokemons(currentPage));
    }, [dispatch, currentPage]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-lg font-semibold animate-pulse text-blue-600">Loading Pokemons...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <p className="font-medium">{error}</p>;
            </div>
        )
    }

    return (
        <main className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols4 gap-6 p-6">
            {pokemonList.map((pokemon) => (
                <div
                    key={pokemon.id}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 duration-300"
                >
                    <div className="bg-gray-100 rounded-full p-2 mb-4">
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                    <h3 className="text-xl font-bold capitalize text-gray-800">
                        {pokemon.name}
                    </h3>
                    <span className="text-sm text-gray-500 mt-1">
                        Nº {String(pokemon.id).padStart(3, '0')}
                    </span>
                </div>
    ))
}
        </main >
    );  
};
/* eslint-disable react-hooks/exhaustive-deps */
import { useQueries, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Pokemon } from '@/@types/pokemon';
import { Loading } from '@/components/Loading';
import { PokemonCard } from '@/components/PokemonCard';
import { Input } from '@/components/ui/input';
import { getPokemonByName } from '@/requests/get-pokemon-by-name';
import { getPokemonsNameAndCount } from '@/requests/get-pokemons-name-and-count';
import { useAppDispatch, useAppSelector } from '@/store';
import { addPokemons, setPokemonsCount } from '@/store/slices/pokeball';

export function Home() {
  const totalCount = useAppSelector((state) => state.pokeball.totalCount);

  const dispatch = useAppDispatch();
  const offset = useAppSelector((state) => state.pokeball.pageOffset);
  let isPokemonsLoading = true;

  const { data: pokemonsNameResponse, isLoading: isLoadingPokemonsName } =
    useQuery({
      queryKey: ['pokemons'],
      queryFn: () => getPokemonsNameAndCount({ offset }),
      staleTime: 1000 * 60 * 10, // 10 min
    });

  const results = useQueries({
    queries: pokemonsNameResponse
      ? pokemonsNameResponse.pokemonsName.map((name) => ({
          queryKey: ['pokemon', name],
          queryFn: () => getPokemonByName(name),
          staleTime: 1000 * 60 * 10, // 10 min
        }))
      : [],
  });

  const pokemons: Pokemon[] = [];

  results.forEach((result) => {
    const { data, isLoading } = result;

    isPokemonsLoading = isLoading;

    if (!data) {
      return;
    }

    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      types: data.types,
      abilities: data.abilities,
      stats: data.stats,
      weight: data.weight,
      height: data.height,
      species: data.species,
    };

    pokemons.push(pokemon);
  });

  useEffect(() => {
    if (pokemonsNameResponse) {
      dispatch(setPokemonsCount([pokemonsNameResponse.count]));
    }

    if (!isPokemonsLoading) {
      dispatch(addPokemons([pokemons]));
    }
  }, [pokemonsNameResponse, isPokemonsLoading, pokemons]);

  if (isLoadingPokemonsName || isPokemonsLoading) {
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Helmet title="Home" />
      <div className="container mt-10 flex w-full flex-1 flex-col items-center  justify-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl tracking-wide">
            {totalCount} <strong className="font-semibold">Pokémons</strong> for
            you to choose your favorite
          </h1>

          <Input
            placeholder="Find your pokémon..."
            className=" w-3/5 rounded-full"
          />
        </div>

        <div className="mt-10 grid grid-cols-3 gap-8">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
}

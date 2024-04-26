import { useQueries, useQuery } from '@tanstack/react-query';
import { KeyboardEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';

import { Pokemon } from '@/@types/pokemon';
import { Loading } from '@/components/Loading';
import { PokemonCard } from '@/components/PokemonCard';
import { Input } from '@/components/ui/input';
import { getPokemonByName } from '@/requests/get-pokemon-by-name';
import { getPokemonsNameAndCount } from '@/requests/get-pokemons-name-and-count';

import { NotFound } from '../404';
import { Pagination } from './Pagination';

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = z.coerce.number().parse(searchParams.get('page') ?? '1');
  const pokemonNameFromSearchParams = searchParams.get('pokemonName');

  let isPokemonsLoading = true;

  const {
    data: pokemonFromSearch,
    isLoading: isLoadingPokemonsFromSearch,
    isError: pokemonFromSearchError,
  } = useQuery({
    queryKey: ['pokemon', pokemonNameFromSearchParams],
    queryFn: () => getPokemonByName(pokemonNameFromSearchParams!),
    staleTime: 1000 * 60 * 10, // 10 min,
    enabled: !!pokemonNameFromSearchParams,
  });

  const { data: pokemonsInfoResponse, isLoading: isLoadingPokemonsName } =
    useQuery({
      queryKey: ['pokemons', currentPage],
      queryFn: () => getPokemonsNameAndCount({ currentPage }),
      staleTime: 1000 * 60 * 10, // 10 min
    });

  const results = useQueries({
    queries: pokemonsInfoResponse
      ? pokemonsInfoResponse.pokemonsName.map((name) => ({
          queryKey: ['pokemon', name],
          queryFn: () => getPokemonByName(name),
          staleTime: 1000 * 60 * 10, // 10 min,
          enabled: !!pokemonsInfoResponse,
        }))
      : [],
  });

  let pokemons: Pokemon[] = [];

  if (results.length > 0) {
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
  } else {
    isPokemonsLoading = false;
  }

  if (pokemonFromSearch) {
    const pokemon: Pokemon = {
      id: pokemonFromSearch.id,
      name: pokemonFromSearch.name,
      sprites: pokemonFromSearch.sprites,
      types: pokemonFromSearch.types,
      abilities: pokemonFromSearch.abilities,
      stats: pokemonFromSearch.stats,
      weight: pokemonFromSearch.weight,
      height: pokemonFromSearch.height,
      species: pokemonFromSearch.species,
    };

    pokemons = [pokemon];
  }

  function handlePaginate(newPage: number) {
    setSearchParams((prev) => {
      prev.set('page', newPage.toString());

      return prev;
    });
  }

  function handleSearch(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const searchPokemonName = (e.target as HTMLInputElement).value.trim();
      setSearchParams((prev) => {
        prev.set('pokemonName', searchPokemonName);
        prev.delete('page');

        return prev;
      });
    }
  }

  if (
    isLoadingPokemonsName ||
    isPokemonsLoading ||
    isLoadingPokemonsFromSearch
  ) {
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );
  }

  if (!pokemonsInfoResponse || pokemonFromSearchError) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet title="Home" />
      <div className="mt-10 flex w-full flex-1 flex-col items-center justify-center px-3 lg:container lg:px-0">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-center text-3xl tracking-wide lg:text-4xl">
            {pokemonsInfoResponse.count}{' '}
            <strong className="font-semibold">Pokémons</strong> for you to
            choose your favorite
          </h1>

          <Input
            placeholder="Find your pokémon..."
            className="w-full rounded-full lg:w-3/5"
            onKeyDown={handleSearch}
            defaultValue={pokemonNameFromSearchParams ?? ''}
            onChange={(e) => {
              if (e.target.value === '') {
                setSearchParams((prev) => {
                  prev.delete('pokemonName');

                  return prev;
                });
              }
            }}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>

        {!pokemonNameFromSearchParams && (
          <div className="mt-6 w-full lg:px-36">
            <Pagination
              currentPage={currentPage}
              totalCount={pokemonsInfoResponse.count}
              onPageChange={handlePaginate}
            />
          </div>
        )}
      </div>
    </>
  );
}

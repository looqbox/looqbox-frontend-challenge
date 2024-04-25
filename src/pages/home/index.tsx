import { useQueries, useQuery } from '@tanstack/react-query';
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

  let isPokemonsLoading = true;

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
          staleTime: 1000 * 60 * 10, // 10 min
        }))
      : [],
  });

  const pokemons: Pokemon[] = [];

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

  function handlePaginate(newPage: number) {
    setSearchParams((prev) => {
      prev.set('page', newPage.toString());

      return prev;
    });
  }

  if (isLoadingPokemonsName || isPokemonsLoading) {
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );
  }

  if (!pokemonsInfoResponse) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet title="Home" />
      <div className="container mt-10 flex w-full flex-1 flex-col items-center  justify-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl tracking-wide">
            {pokemonsInfoResponse.count}{' '}
            <strong className="font-semibold">Pokémons</strong> for you to
            choose your favorite
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

        <div className="mt-6 w-full px-20">
          <Pagination
            currentPage={currentPage}
            totalCount={pokemonsInfoResponse.count}
            onPageChange={handlePaginate}
          />
        </div>
      </div>
    </>
  );
}

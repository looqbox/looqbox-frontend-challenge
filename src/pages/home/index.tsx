import { Helmet } from 'react-helmet-async';

import { PokemonCard } from '@/components/PokemonCard';
import { Input } from '@/components/ui/input';
import { useAppSelector } from '@/store';

export function Home() {
  const pokemons = useAppSelector((state) => state.pokemons.pokemons);
  const totalCount = useAppSelector((state) => state.pokemons.totalCount);

  return (
    <>
      <Helmet title="Home" />
      <div className="flex w-full flex-1 flex-col items-center justify-center">
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

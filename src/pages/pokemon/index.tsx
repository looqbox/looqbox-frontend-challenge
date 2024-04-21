import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { Loading } from '@/components/Loading';
import { definedCardColor } from '@/components/PokemonCard';
import { definedColor } from '@/components/PokemonCard/PokemonImage';
import { PokemonType } from '@/components/PokemonCard/PokemonType';
import { getPokemonByName } from '@/requests/get-pokemon-by-name';

import { NotFound } from '../404';

export function PokemonPage() {
  const { pokemonName } = useParams();

  const { data: pokemon, isLoading: isLoadingPokemon } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: () => getPokemonByName(pokemonName ?? ''),
    staleTime: Infinity,
  });

  if (isLoadingPokemon) {
    return (
      <div className="pb-[1000px] pt-[100px]">
        <Loading />
      </div>
    );
  }

  if (!pokemon) {
    return <NotFound />;
  }

  const filteredEntries = pokemon.species.flavor_text_entries.filter(
    (entry) => entry.language.name === 'en'
  );

  const uniqueTexts = new Set();
  filteredEntries.forEach((entry) => {
    const text = entry.flavor_text
      .replace(/[\s]+/g, ' ')
      .replace(/\n/g, ' ')
      .trim();
    uniqueTexts.add(text);
  });

  const description = Array.from(uniqueTexts).join(' ');

  return (
    <>
      <Helmet
        title={pokemon.name
          .charAt(0)
          .toLocaleUpperCase()
          .concat(pokemon.name.substring(1))}
      />
      <div
        style={{
          // borderBottom: `3px solid ${pokemon.species.color.name}`,
          backgroundColor: definedCardColor[pokemon.types[0].type.name],
        }}
        className="min-h-screen"
      >
        <div className="container mt-10">
          <div className="flex h-[680px] items-stretch gap-8">
            <div
              style={{
                backgroundColor: definedColor[pokemon.types[0].type.name],
                backgroundImage: `url(/background/${pokemon.types[0].type.name}.svg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderBottom: `3px solid ${pokemon.species.color.name}`,
              }}
              className="flex h-full min-w-[520px] items-center justify-center rounded-3xl bg-red-600 shadow-lg"
            >
              <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} pokémon`}
                className="h-[500px] w-[520px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-secondary-foreground">
                #{pokemon.id}
              </span>

              <h1 className="w-full text-5xl font-bold tracking-wide">
                {pokemon.name
                  .charAt(0)
                  .toLocaleUpperCase()
                  .concat(pokemon.name.substring(1))}
              </h1>

              <div className="mt-2 flex items-center gap-2">
                {pokemon.types.map((p) => (
                  <PokemonType key={p.type.name} type={p.type.name} />
                ))}
              </div>

              <p className="mt-6 text-base leading-snug text-muted-foreground">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

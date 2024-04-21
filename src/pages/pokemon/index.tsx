/* eslint-disable react-hooks/rules-of-hooks */
import { useQueries, useQuery } from '@tanstack/react-query';
import {
  CircleChevronUp,
  LayoutGrid,
  Shrub,
  UnfoldVertical,
  Weight,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { DefinedPokemonType } from '@/@types/pokemon';
import { Loading } from '@/components/Loading';
import { definedCardColor } from '@/components/PokemonCard';
import { PokemonAttribute } from '@/components/PokemonCard/PokemonAttribute';
import { definedColor } from '@/components/PokemonCard/PokemonImage';
import { PokemonType } from '@/components/PokemonCard/PokemonType';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AbilityDetail,
  getPokemonAbilityDetail,
} from '@/requests/get-pokemon-ability-detail';
import { getPokemonByName } from '@/requests/get-pokemon-by-name';
import { getPokemonWeakness } from '@/requests/get-pokemon-weakness';

import { NotFound } from '../404';
import { PokemonBaseStatisticsBarChart } from './PokemonBaseStatisticsBarChart';
import {
  ChartStat,
  PokemonBaseStatisticsRadarChart,
} from './PokemonBaseStatisticsRadarChart';

export function PokemonPage() {
  const { pokemonName } = useParams();

  let isLoadingWeaknesses = true;
  let isLoadingAbilitiesDetail = true;

  const { data: pokemon, isLoading: isLoadingPokemon } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: () => getPokemonByName(pokemonName ?? ''),
    staleTime: Infinity,
  });

  const pokemonTypeUrls = pokemon?.types.map((t) => t.type.url);

  const weaknessesResults = useQueries({
    queries: pokemonTypeUrls
      ? pokemonTypeUrls.map((pokemonTypeUrls) => ({
          queryKey: ['pokemon', pokemonName, pokemonTypeUrls],
          queryFn: () => getPokemonWeakness(pokemonTypeUrls),
          staleTime: 1000 * 60 * 10, // 10 min
        }))
      : [],
  });

  let weaknesses: DefinedPokemonType[] = [];

  weaknessesResults.forEach((result) => {
    const { data, isLoading } = result;

    isLoadingWeaknesses = isLoading;

    if (!data) {
      return;
    }

    const weaknessesBasedOnType: DefinedPokemonType[] = data.weaknesses;

    weaknesses = [...weaknesses, ...weaknessesBasedOnType];
  });

  const uniqueWeaknesses = Array.from(new Set(weaknesses));

  const pokemonAbilitiesUrls = pokemon?.abilities.map((a) => a.ability.url);

  const abilitiesDetailResults = useQueries({
    queries: pokemonAbilitiesUrls
      ? pokemonAbilitiesUrls.map((pokemonAbilitiesUrls) => ({
          queryKey: ['pokemon', pokemonName, pokemonAbilitiesUrls],
          queryFn: () => getPokemonAbilityDetail(pokemonAbilitiesUrls),
          staleTime: 1000 * 60 * 10, // 10 min
        }))
      : [],
  });

  const abilitiesDetail: AbilityDetail[] = [];

  abilitiesDetailResults.forEach((result) => {
    const { data, isLoading } = result;

    isLoadingAbilitiesDetail = isLoading;

    if (!data) {
      return;
    }

    const ability: AbilityDetail = {
      name: data.name,
      effect: data.effect,
    };

    abilitiesDetail.push(ability);
  });

  if (isLoadingPokemon || isLoadingWeaknesses || isLoadingAbilitiesDetail) {
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

  const genus = pokemon.species.genera
    .filter((g) => g.language.name === 'en')[0]
    .genus.split(' ')[0];

  const principalAbility = pokemon.abilities.filter((a) => a.slot === 1)[0]
    .ability.name;

  const attributes = [
    { icon: Weight, name: 'weight', value: `${pokemon.weight / 10} kg` },
    { icon: UnfoldVertical, name: 'height', value: `${pokemon.height / 10} m` },
    { icon: LayoutGrid, name: 'genus', value: genus },
    {
      icon: CircleChevronUp,
      name: 'Principal Ability',
      value: principalAbility
        .charAt(0)
        .toLocaleUpperCase()
        .concat(principalAbility.substring(1)),
    },
    {
      icon: Shrub,
      name: 'Habitat',
      value: pokemon.species.habitat.name
        .charAt(0)
        .toLocaleUpperCase()
        .concat(pokemon.species.habitat.name.substring(1)),
    },
  ];

  const stats: ChartStat[] = pokemon.stats.map((pokemon) => {
    return {
      name: pokemon.stat.name,
      value: pokemon.base_stat,
    };
  });

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
                  <PokemonType
                    key={p.type.name}
                    type={p.type.name}
                    isOnPokemonsPage
                  />
                ))}
              </div>

              <p className="mt-6 text-base leading-snug text-muted-foreground">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <h3 className="text-3xl font-semibold">Overview</h3>
            <div className=" grid grid-cols-5 gap-20">
              {attributes.map((attr) => (
                <PokemonAttribute
                  key={attr.name}
                  icon={attr.icon}
                  name={attr.name}
                  value={attr.value}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <h3 className="text-3xl font-semibold">Weak against</h3>
            <div className="flex items-center gap-3">
              {uniqueWeaknesses.map((weakness) => (
                <PokemonType key={weakness} type={weakness} isOnPokemonsPage />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <h3 className="text-3xl font-semibold">Abilities detail</h3>
            <div className="grid grid-cols-2 gap-8">
              {abilitiesDetail.map((ability) => (
                <Card key={ability.name}>
                  <CardHeader>
                    <CardTitle>
                      {ability.name
                        .charAt(0)
                        .toLocaleUpperCase()
                        .concat(ability.name.substring(1))}
                    </CardTitle>
                    <CardDescription>{ability.effect}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <h3 className="text-3xl font-semibold">Base Statistics</h3>
            <div className="grid grid-cols-2 gap-8">
              <Card>
                <CardContent className="mt-10">
                  <PokemonBaseStatisticsRadarChart
                    stats={stats}
                    type={pokemon.types[0].type.name}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="mt-10">
                  <PokemonBaseStatisticsBarChart
                    stats={stats}
                    type={pokemon.types[0].type.name}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

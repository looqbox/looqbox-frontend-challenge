import { useParams } from 'react-router-dom';
import { useGetPokemon } from '../hooks/data/use-get-pokemon';
import { Spin, Empty, Collapse, type CollapseProps } from 'antd';
import { formatId, formatName } from '../utils/pokemonUtils';
import { POKEMON_TYPE_COLORS } from '../constants/pokemon';
import StatCard from '../components/StatCard';
import { useGetPokemonSpecies } from '../hooks/data/use-get-pokemon-species';
import { useAbilities } from '../hooks/data/use-get-pokemon-ability';
import { useMoves } from '../hooks/data/use-get-pokemon-move';
import StatsBarChart from '../components/StatsChart';
import SimpleSpritesGrid from '../components/SimpleSpritesGrid';

const PokemonDetails = () => {
  const { id } = useParams();
  const {
    data: pokemon,
    isLoading,
    isError,
  } = useGetPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const { data: species } = useGetPokemonSpecies(pokemon?.species.url ?? '');
  const { data: abilities } = useAbilities(
    pokemon?.abilities.map((a) => a.ability.url) ?? []
  );
  const { data: moves } = useMoves(
    pokemon?.moves.slice(0, 6).map((m) => m.move.url) ?? []
  );

  if (isLoading) {
    return (
      <div className="container m-8 mx-auto flex flex-col justify-center p-4">
        <Spin size="large" />
      </div>
    );
  }

  if (isError || !pokemon) {
    return (
      <div className="container m-8 mx-auto flex flex-col p-4">
        <Empty
          description={`Não foi possível carregar o Pokémon #${id}`}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    );
  }

  const pokemonImage =
    pokemon.sprites.other?.['official-artwork']?.front_default;

  const fallbackImage = pokemon?.sprites.front_default || '';

  const flavorTextEntry =
    species?.flavor_text_entries.find((entry) => entry.language.name === 'en')
      ?.flavor_text ?? '';
  const cleanedFlavorText = flavorTextEntry
    .replace(/\f/g, ' ')
    .replace(/\n/g, ' ');

  const AccordionItems: CollapseProps['items'] = [
    {
      key: '1',
      label: <h2 className="font-semibold">Habilidades</h2>,
      children: (
        <ul>
          {abilities?.map((ability) => (
            <li key={ability.id}>
              <span className="text-sm leading-relaxed font-semibold">
                {formatName(ability.name)}
              </span>
              :{' '}
              {
                ability.effect_entries.find((e) => e.language.name === 'en')
                  ?.short_effect
              }
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: '2',
      label: <h2 className="font-semibold">Movimentos</h2>,
      children: (
        <div className="flex items-center gap-3">
          {moves.map((move) => (
            <span className="rounded-xl bg-gray-100 px-4 py-2" key={move.id}>
              {formatName(move.name)}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="container m-4 mx-auto flex flex-col gap-6 p-4 lg:flex-row">
      <div className="flex flex-col gap-4 rounded-2xl bg-gray-100 p-4 shadow-md lg:w-1/3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold sm:text-2xl">
            {formatName(pokemon.name)}
          </h1>
          <h1 className="text-xl font-bold sm:text-2xl">
            {formatId(pokemon.id)}
          </h1>
        </div>

        <img
          alt={pokemon?.name}
          src={pokemonImage ?? fallbackImage}
          onError={(e) => ((e.target as HTMLImageElement).src = fallbackImage)}
          className="h-64 w-full object-contain drop-shadow-lg sm:h-80 md:h-96"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
        />

        <div className="w-full rounded-xl border border-gray-200 p-3 shadow-md sm:p-4">
          <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
            {cleanedFlavorText}
          </p>
        </div>

        <div className="flex flex-col gap-2 px-2 py-1 sm:px-4 sm:py-2">
          <h1 className="text-md font-semibold">Tipos</h1>
          <div className="flex flex-wrap gap-2">
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="rounded-3xl px-3 py-1 text-sm font-medium text-white sm:px-4 sm:py-2"
                style={{
                  backgroundColor:
                    POKEMON_TYPE_COLORS[t.type.name] || '#A8A878',
                }}
              >
                {formatName(t.type.name)}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 px-2 py-1 sm:px-4 sm:py-2">
          <h1 className="text-md font-semibold">Características gerais</h1>
          <div className="flex flex-col gap-2 sm:flex-row">
            <StatCard
              label="Altura"
              value={`${pokemon.height / 10} m`}
              className="flex-1 items-center bg-gray-200 shadow-sm"
            />
            <StatCard
              label="Peso"
              value={`${pokemon.weight / 10} kg`}
              className="flex-1 items-center bg-gray-200 shadow-sm"
            />
            <StatCard
              label="XP"
              value={`${pokemon.base_experience}`}
              className="flex-1 items-center bg-gray-200 shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-2">
        <h1 className="text-lg font-semibold sm:text-xl">
          Estatísticas base e atributos
        </h1>

        <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-3">
          {pokemon.stats.map((s) => (
            <StatCard
              key={s.stat.name}
              label={s.stat.name.toUpperCase()}
              value={`${s.base_stat}`}
              className="bg-gray-100 shadow-sm"
            />
          ))}
        </div>

        <Collapse accordion items={AccordionItems} defaultActiveKey={['1']} />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-around">
          <StatsBarChart stats={pokemon.stats} types={pokemon.types} />
          <SimpleSpritesGrid sprites={pokemon.sprites} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

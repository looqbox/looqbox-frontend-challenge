import { Card, Flex, Tag, Typography, Badge } from 'antd';
import type { Pokemon } from '../types/pokemon';
import { POKEMON_TYPE_COLORS } from '../constants/pokemon';
import StatCard from './StatCard';
import PokemonCardSkeleton from './PokemonCardSkeleton';
import { formatId, formatName } from '../utils/pokemonUtils';

const { Meta } = Card;
const { Text } = Typography;

interface PokemonCardProps {
  pokemon?: Pokemon;
  onClick: (pokemon: Pokemon) => void;
  hasError: boolean;
  isLoading: boolean;
}

const PokemonCard = ({ pokemon, onClick, isLoading }: PokemonCardProps) => {
  const handleCardClick = () => {
    if (pokemon) onClick(pokemon);
  };

  if (isLoading || !pokemon) {
    return <PokemonCardSkeleton />;
  }

  const pokemonImage =
    pokemon.sprites.other?.['official-artwork']?.front_default;
  const fallbackImage = pokemon?.sprites.front_default || '';

  const getStatValue = (statName: string) =>
    pokemon?.stats.find((s) => s.stat.name === statName)?.base_stat ?? 0;

  const hp = getStatValue('hp');
  const attack = getStatValue('attack');
  const defense = getStatValue('defense');

  return (
    <Card
      hoverable
      className="h-full w-full overflow-hidden transition-all duration-300 hover:shadow-lg"
      onClick={handleCardClick}
      style={{
        borderRadius: '30px',
        background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
      }}
      cover={
        <div className="flex h-48 w-full items-center justify-center bg-white p-2">
          <img
            alt={pokemon?.name}
            src={pokemonImage ?? fallbackImage}
            onError={(e) =>
              ((e.target as HTMLImageElement).src = fallbackImage)
            }
            className="h-full w-full object-contain drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}
          />
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-row items-center justify-between">
          <Meta
            title={
              <Text className="!text-lg font-semibold">
                {formatName(pokemon?.name ?? '')}
              </Text>
            }
          />
          <Badge
            count={formatId(pokemon?.id ?? 0)}
            style={{ backgroundColor: '#52c41a' }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <Flex className="mt-2 gap-3">
            {pokemon?.types.map((type) => (
              <Tag
                key={type.type.name}
                style={{
                  backgroundColor:
                    POKEMON_TYPE_COLORS[type.type.name] || '#A8A878',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '500',
                  fontSize: '11px',
                  padding: '2px 8px',
                }}
              >
                {formatName(type.type.name)}
              </Tag>
            ))}
          </Flex>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <StatCard label="HP" value={hp.toString()} className="bg-gray-50" />
          <StatCard
            label="ATK"
            value={attack.toString()}
            className="bg-gray-50"
          />
          <StatCard
            label="DEF"
            value={defense.toString()}
            className="bg-gray-50"
          />
        </div>

        <Flex justify="space-between" className="text-sm text-gray-600">
          <Text className="font-semibold">
            Altura:{' '}
            {pokemon?.height !== undefined ? pokemon.height / 10 + 'm' : '-'}
          </Text>
          <Text className="font-semibold">
            Peso:{' '}
            {pokemon?.weight !== undefined ? pokemon.weight / 10 + 'kg' : '-'}
          </Text>
        </Flex>
      </div>
    </Card>
  );
};

export default PokemonCard;

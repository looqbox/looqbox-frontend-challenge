import { useMemo, useState } from 'react';
import placeholder from '../../assets/pokemon_placeholder.png';

type Props = {
  id?: number | null;
  name: string;
  alt?: string;
  height?: number;
  padding?: number;
  variant?: 'artwork' | 'sprite';
  priority?: boolean
  style?: React.CSSProperties;
};

function getArtworkUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function getSpriteUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export function PokemonImage({
  id,
  name,
  alt,
  height = 180,
  padding = 12,
  variant = 'artwork',
  priority,
  style,
}: Props) {
  const [attempt, setAttempt] = useState(0);

  const urls = useMemo(() => {
    if (!id) return [];
    const primary = variant === 'artwork' ? getArtworkUrl(id) : getSpriteUrl(id);
    const secondary = variant === 'artwork' ? getSpriteUrl(id) : getArtworkUrl(id);
    return [primary, secondary, placeholder];
  }, [id, variant]);

  const src = urls[attempt];

  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt ?? name}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => {
        setAttempt((prev) => (prev < urls.length - 1 ? prev + 1 : prev));
      }}
      style={{ padding, height, objectFit: 'contain', aspectRatio: '1 / 1', ...style }}
    />
  );
}

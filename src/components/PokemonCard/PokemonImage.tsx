import { DefinedPokemonType } from '@/@types/pokemon';

type PokemonImageProps = {
  type: DefinedPokemonType;
  imageURL: string;
  name: string;
};

export const definedColor: Record<DefinedPokemonType, string> = {
  grass: '#63BC5A',
  fire: '#FF9D55',
  water: '#5090D6',
  bug: '#91C12F',
  electric: '#F4D23C',
  fairy: '#EC8FE6',
  ground: '#D97845',
  rock: '#C5B78C',
  normal: '#919AA2',
  poison: '#B567CE',
  psychic: '#FA7179',
  steel: '#5A8EA2',
  dragon: '#0B6DC3',
  fighting: '#CE416B',
  dark: '#5A5465',
  ghost: '#5269AD',
  ice: '#73CEC0',
  flying: '#89AAE3',
};

export function PokemonImage({ type, imageURL, name }: PokemonImageProps) {
  return (
    <div
      className={`flex h-full w-[136px] items-center justify-center rounded-2xl`}
      style={{
        backgroundColor: definedColor[type],
        backgroundImage: `url(/background/${type}.svg)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <img
        src={imageURL}
        alt={`${name} pokémon`}
        className="h-[132px] w-[132px]"
      />
    </div>
  );
}

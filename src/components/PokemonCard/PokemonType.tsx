import { DefinedPokemonType } from '@/@types/pokemon';

import { definedColor } from './PokemonImage';

type PokemonTypeProps = {
  type: DefinedPokemonType;
  isOnPokemonsPage?: boolean;
};

export function PokemonType({
  type,
  isOnPokemonsPage = false,
}: PokemonTypeProps) {
  return (
    <div
      style={{ backgroundColor: definedColor[type] }}
      className={`flex w-max items-center gap-1 rounded-full px-1.5 py-0.5 ${isOnPokemonsPage ? 'h-[30px]' : 'h-[26px]'}`}
    >
      <div
        className={`flex  items-center justify-center rounded-full bg-white p-1 ${isOnPokemonsPage ? 'h-6 w-6' : 'h-5 w-5'}`}
      >
        <img src={`/symbol/${type}.svg`} alt={`${type} symbol`} />
      </div>
      <span
        className={` font-semibold ${isOnPokemonsPage ? 'tex-base' : 'text-sm'}`}
      >
        {String(type).charAt(0).toUpperCase().concat(String(type).substring(1))}
      </span>
    </div>
  );
}

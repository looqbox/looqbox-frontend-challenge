import { DefinedPokemonType } from '@/@types/pokemon';

import { definedColor } from './PokemonImage';

type PokemonTypeProps = {
  type: DefinedPokemonType;
};

export function PokemonType({ type }: PokemonTypeProps) {
  return (
    <div
      style={{ backgroundColor: definedColor[type] }}
      className="flex h-[26px] w-max items-center gap-1 rounded-full px-1.5 py-0.5"
    >
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white p-1">
        <img src={`/symbol/${type}.svg`} alt={`${type} symbol`} />
      </div>
      <span className="text-sm font-semibold">
        {String(type).charAt(0).toUpperCase().concat(String(type).substring(1))}
      </span>
    </div>
  );
}

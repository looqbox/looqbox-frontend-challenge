import { DialogTrigger } from '@radix-ui/react-dialog';

import { DefinedPokemonType, Pokemon } from '@/@types/pokemon';

import { Dialog } from '../ui/dialog';
import { PokemonDialog } from './PokemonDialog';
import { PokemonImage } from './PokemonImage';
import { PokemonType } from './PokemonType';

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const definedCardColor: Record<DefinedPokemonType, string> = {
  grass: '#EDF6EC',
  fire: '#FCF3EB',
  water: '#EBF1F8',
  bug: '#F1F6E8',
  electric: '#FBF8E9',
  fairy: '#FBF1FA',
  ground: '#F9EFEA',
  rock: '#F7F5F1',
  normal: '#F1F2F3',
  poison: '#F5EDF8',
  psychic: '#FCEEEF',
  steel: '#ECF1F3',
  dragon: '#E4EEF6',
  fighting: '#F8E9EE',
  dark: '#ECEBED',
  ghost: '#EBEDF4',
  ice: '#F1FBF9',
  flying: '#F1F4FA',
};

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          style={{
            borderBottom: `3px solid ${pokemon.species.color.name}`,
            backgroundColor: definedCardColor[pokemon.types[0].type.name],
          }}
          className="flex h-[132px] w-[328px] items-start justify-between rounded-2xl p-0 shadow-md transition-all hover:scale-105"
        >
          <div className="flex flex-col items-start justify-start px-4 py-3">
            <span className="text-sm font-semibold text-secondary-foreground">
              #{pokemon.id}
            </span>
            <h4 className="max-w-[160px] truncate text-xl font-bold">
              {pokemon.name
                .charAt(0)
                .toLocaleUpperCase()
                .concat(pokemon.name.substring(1))}
            </h4>

            <div className="mt-5 flex items-center gap-2">
              {pokemon.types.slice(0, 2).map((p) => (
                <PokemonType key={p.type.name} type={p.type.name} />
              ))}
            </div>
          </div>

          <PokemonImage
            type={pokemon.types[0].type.name}
            imageURL={pokemon.sprites.front_default}
            name={pokemon.name}
          />
        </div>
      </DialogTrigger>
      <PokemonDialog pokemon={pokemon} />
    </Dialog>
  );
}

/* eslint-disable react/no-unescaped-entities */
import {
  CircleChevronUp,
  LayoutGrid,
  UnfoldVertical,
  Weight,
} from 'lucide-react';

import { Pokemon } from '@/@types/pokemon';

import { Button } from '../ui/button';
import { DialogContent } from '../ui/dialog';
import { definedCardColor } from '.';
import { PokemonAttribute } from './PokemonAttribute';
import { definedColor } from './PokemonImage';
import { PokemonType } from './PokemonType';

type PokemonDialogProps = {
  pokemon: Pokemon;
};

export function PokemonDialog({ pokemon }: PokemonDialogProps) {
  const filteredEntries = pokemon.species.flavor_text_entries.filter(
    (entry) => entry.language.name === 'en'
  );

  const uniqueTexts = new Set();
  filteredEntries.slice(0, 2).forEach((entry) => {
    const text = entry.flavor_text
      .replace(/[\s]+/g, ' ')
      .replace(/\n/g, ' ')
      .trim();
    uniqueTexts.add(text);
  });

  const shortDescription = Array.from(uniqueTexts).join(' ');

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
  ];

  return (
    <DialogContent
      style={{
        borderBottom: `3px solid ${pokemon.species.color.name}`,
        backgroundColor: definedCardColor[pokemon.types[0].type.name],
      }}
    >
      <div>
        <div className="mt-4 flex flex-col gap-0.5">
          <span className="text-lg font-semibold text-secondary-foreground">
            #{pokemon.id}
          </span>
          <h3 className="text-[32px] font-bold leading-none">
            {pokemon.name
              .charAt(0)
              .toLocaleUpperCase()
              .concat(pokemon.name.substring(1))}
          </h3>
        </div>

        <div
          className="mt-3 flex h-[160px] w-full items-center justify-center rounded-2xl"
          style={{
            backgroundColor: definedColor[pokemon.types[0].type.name],
            backgroundImage: `url(/background/${pokemon.types[0].type.name}.svg)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} pokémon`}
            className="h-[160px] w-[160px]"
          />
        </div>

        <div className="mt-5 flex items-center gap-2">
          {pokemon.types.slice(0, 2).map((p) => (
            <PokemonType key={p.type.name} type={p.type.name} />
          ))}
        </div>

        <p className="mt-3 text-sm leading-snug text-muted-foreground">
          {shortDescription}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {attributes.map((attr) => (
            <PokemonAttribute
              key={attr.name}
              icon={attr.icon}
              name={attr.name}
              value={attr.value}
            />
          ))}
        </div>

        <Button
          style={{ backgroundColor: definedColor[pokemon.types[0].type.name] }}
          className="mt-6 w-full gap-2 text-base font-bold uppercase tracking-widest text-background transition hover:opacity-90"
        >
          See Pokemon's page
        </Button>
      </div>
    </DialogContent>
  );
}

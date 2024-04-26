export interface PokemonListPayload {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonProps[];
}

export interface PokemonProps extends GeneralNameUrlProps {}

interface GeneralNameUrlProps {
  name: string;
  url: string;
}

interface AbilityProps {
  ability: GeneralNameUrlProps;
  is_hidden: boolean;
  slot: number;
}

interface GameIndexProps {
  game_index: number;
  version: GeneralNameUrlProps;
}

interface HeldItemProps {
  item: GeneralNameUrlProps;
  version_details: VersionDetailsProps[];
}

interface VersionDetailsProps {
  rarity: number;
  version: GeneralNameUrlProps;
}

interface MoveProps {
  move: GeneralNameUrlProps;
  version_group_details: VersionGroupDetailsProps[];
}

interface VersionGroupDetailsProps {
  level_learned_at: number;
  move_learn_method: GeneralNameUrlProps;
  version_group: GeneralNameUrlProps;
}

interface AllSpritesProps {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface OtherSpriteProps {
  other: {
    dream_world: Extract<AllSpritesProps, 'front_default' | 'front_female'>;
    home: SpritesGenerationVITypes;
    'official-artwork': Extract<AllSpritesProps, 'front_default' | 'front_shiny'>;
    showdown: AllSpritesProps;
  };
}

type SpritesGenerationITypes = Extract<AllSpritesProps, 'back_default' | 'front_default'> & {
  back_gray: string | null;
  back_transparent: string | null;
  front_gray: string | null;
  front_transparent: string | null;
};

type SpritesGenerationVITypes = Extract<
  AllSpritesProps,
  'front_default' | 'front_female' | 'front_shiny' | 'front_shiny_female'
>;

type SpritesGenerationVIITypes = Extract<AllSpritesProps, 'front_default' | 'front_female'>;

type DefaultAndShineSpritesTypes = Extract<
  AllSpritesProps,
  'back_default' | 'front_default' | 'back_shiny' | 'front_shiny'
>;

interface VersionsSpriteProps {
  versions: {
    'generation-i': {
      'red-blue': SpritesGenerationITypes;
      yellow: SpritesGenerationITypes;
    };
    'generation-ii': {
      crystal: DefaultAndShineSpritesTypes &
        Extract<SpritesGenerationITypes, 'back_transparent' | 'front_transparent'> & {
          back_shiny_transparent: string | null;
          front_shiny_transparent: string | null;
        };
      gold: DefaultAndShineSpritesTypes & Extract<SpritesGenerationITypes, 'front_transparent'>;
      silver: DefaultAndShineSpritesTypes & Extract<SpritesGenerationITypes, 'front_transparent'>;
    };
    'generation-iii': {
      emerald: Extract<AllSpritesProps, 'front_default' | 'front_shiny'>;
      'firered-leafgreen': DefaultAndShineSpritesTypes;
      'ruby-sapphire': DefaultAndShineSpritesTypes;
    };
    'generation-iv': {
      'diamond-pearl': AllSpritesProps;
      'heartgold-soulsilver': AllSpritesProps;
      platinum: AllSpritesProps;
    };
    'generation-v': {
      'black-white': AllSpritesProps & {
        animated: AllSpritesProps;
      };
    };
    'generation-vi': {
      'omegaruby-alphasapphire': SpritesGenerationVITypes;
      'x-y': SpritesGenerationVITypes;
    };
    'generation-vii': {
      icons: SpritesGenerationVIITypes;
      'ultra-sun-ultra-moon': SpritesGenerationVITypes;
    };
    'generation-viii': {
      icons: SpritesGenerationVIITypes;
    };
  };
}

export interface StatsProps {
  base_stat: number;
  effort: number;
  stat: GeneralNameUrlProps;
}

export interface TypeProps {
  slot: number;
  type: GeneralNameUrlProps;
}

export interface PokemonDetailsPayload {
  abilities: AbilityProps[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: PokemonProps[];
  game_indices: GameIndexProps[];
  height: number;
  held_items: HeldItemProps[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveProps[];
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: unknown[];
  species: GeneralNameUrlProps;
  sprites: AllSpritesProps & OtherSpriteProps & VersionsSpriteProps;
  stats: StatsProps[];
  types: TypeProps[];
  weight: number;
}

interface FlavorTextEntryProps {
  flavor_text: string;
  language: GeneralNameUrlProps;
  version: GeneralNameUrlProps;
}

interface GeneraProps {
  genus: string;
  language: GeneralNameUrlProps;
}

interface NameProps {
  language: GeneralNameUrlProps;
  name: string;
}

interface ParkEncountersProps {
  area: GeneralNameUrlProps;
  base_score: number;
  rate: number;
}

interface PokedexNumberProps {
  entry_number: number;
  pokedex: GeneralNameUrlProps;
}

interface VarietyProps {
  is_default: boolean;
  pokemon: GeneralNameUrlProps;
}

export interface MoreDetailsPayload {
  base_happiness: number;
  capture_rate: number;
  color: GeneralNameUrlProps;
  egg_groups: GeneralNameUrlProps[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: GeneralNameUrlProps;
  flavor_text_entries: FlavorTextEntryProps[];
  form_descriptions: unknown[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: GeneraProps[];
  generation: GeneralNameUrlProps;
  growth_rate: GeneralNameUrlProps;
  habitat: GeneralNameUrlProps;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: NameProps[];
  order: number;
  pal_park_encounters: ParkEncountersProps[];
  pokedex_numbers: PokedexNumberProps[];
  shape: GeneralNameUrlProps;
  varieties: VarietyProps[];
}

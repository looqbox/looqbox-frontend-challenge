export interface PokemonDetailProps {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
  types: { slot: number; type: { name: string; url: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  height: number;
  weight: number;
}

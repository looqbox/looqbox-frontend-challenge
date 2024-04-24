import { ReferenceToEndpoint } from "./pokemon.model";

export type Habitat = {
  id: number;
  name: string;
  pokemon_species: ReferenceToEndpoint[];
};

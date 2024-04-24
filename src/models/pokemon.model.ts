export default interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    game_indices: Gameindex[];
    height: number;
    id: number;
    name: string;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }
  
  interface Type {
    slot: number;
    type: ReferenceToEndpoint;
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: ReferenceToEndpoint;
  }
  
  interface Sprites {
    back_default: string;
    front_default: string;
  }
  
  interface Gameindex {
    game_index: number;
    version: ReferenceToEndpoint;
  }
  
  interface Cries {
    latest: string;
  }
  
  interface Ability {
    ability: ReferenceToEndpoint;
    is_hidden: boolean;
    slot: number;
  }
  
  export interface ReferenceToEndpoint {
    name: string;
    url: string;
  }
  
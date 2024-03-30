export type Pokemon = {
  character: {
    height: number;
    weight: number;
    abilities: Array<{
      ability: {
        name: string;
      };
    }>;
    types: Array<{
      types: {
        name: string;
      };
    }>;
  };
};

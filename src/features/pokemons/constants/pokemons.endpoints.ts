export const pokemonsEndpoints = {
  base: (query?: string) => (query ? `/pokemon?${query}` : `/pokemon`),
  byId: (id: number) => `/pokemon/${id}`,
  byName: (name: string) => `/pokemon/${name}`,
};

import ApiClient from "@/service/httpClient";
import { Modal } from 'antd/lib';
import { APIPokemon, APIPokemonList, Pokemon, PokemonList } from "./types";

export default class PokemonService {
  private ApiClient: ApiClient;

  constructor() {
    this.ApiClient = new ApiClient();
  }

  async get(numberPage: number, pageSize?: number): Promise<PokemonList | null> {

    const limit = pageSize || 20;
    const offset = (numberPage - 1) * limit;

    try {
      const result: APIPokemonList = await this.ApiClient.get<APIPokemonList>(`/pokemon?limit=${limit}&offset=${offset}`);

      const data: PokemonList = {
        count: result.count,
        next: result.next,
        previous: result.previous,
        results: []
      };

      const promises = result.results.map((poke) => this.getDetails(poke.name));

      const pokemons = await Promise.all(promises);

      data.results.push(...pokemons.filter((poke) => poke !== null) as Pokemon[]);

      return data;
    } catch (e) {
      Modal.error({
        title: 'Error',
        content: 'An error occurred while trying to fetch the data. Try again later.'
      });
      return null;
    }
  }

  async getDetails(key: number | string): Promise<Pokemon | null> {
    try {
      const result = await this.ApiClient.get<APIPokemon>(`/pokemon/${key}`);

      const pokemonDetails: Pokemon = {
        id: result.id,
        name: result.name,
        image: {
          pixel: result.sprites.front_default,
          vector: result.sprites.other.dream_world.front_default
        },
        types: result.types.map((type) => type.type.name),
        height: result.height,
        weight: result.weight,
        stats: result.stats.map((stat) => ({
          name: stat.stat.name,
          base_stat: stat.base_stat
        }))
      };

      return pokemonDetails;
    } catch (err) {
      throw err;
    }
  }
}

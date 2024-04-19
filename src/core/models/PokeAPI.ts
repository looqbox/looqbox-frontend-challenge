import { NamedAPIResource } from "./Pokemon";

export default interface PokeAPI {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

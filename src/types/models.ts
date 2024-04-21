export interface IPokemonType {
	slot: number,
	type: {
		name: string,
		url: string
	}
}
export interface IPokemon {
  id: number,
  name: string,
  url: string,
  image: string,
  number: string,
  types: Array<IPokemonType> | Array<string>
}
import api from '../api/base';
import { IPokemon, IPokemonDescriptionText, IPokemonList, IPokemonType } from '../types/models';
import { POKEMON_TYPE_COLORS } from './tokens';

export const handlePokemonTypeColor = (pokemonMainType: string) => {
	const typeColor: string = POKEMON_TYPE_COLORS[pokemonMainType] || POKEMON_TYPE_COLORS.default;
	return typeColor;
};

export const returnPokemonTypesNames = (types: IPokemonType[]) => {
	let pokemonTypes: string[] = [];
	if(types.length > 0) pokemonTypes = types.map((typeInfo: IPokemonType) => typeInfo.type.name);

	return pokemonTypes;
};

export const handleIDToNumber = (id: number) => {
	return `#${id.toString().padStart(3, '0')}`;
};

export const handlePokemonCardAnimationDelay = (index: number) => {
	const isMobile = window.innerWidth < 991;
	const delay = 0.2;

	return `${Math.floor(index / (isMobile ? 2 : 3)) * delay}s`;
};

export const pickRandPokemonDescriptionText = (texts: IPokemonDescriptionText[]) => {
	const englishTexts = texts.filter(text => text.language.name === 'en');
	const randomIndex = Math.floor(Math.random() * englishTexts.length);
	return englishTexts[randomIndex].flavor_text;
};

export const convertHeightToFeet = (heightInDecimeters: number) => {
	const heightInMeters = heightInDecimeters / 10;
	const heightInFeet = heightInDecimeters * 0.328084;

	return `${heightInMeters.toFixed(2)}m/${heightInFeet.toFixed(2)}ft`;
};
  
export const convertWeightToPounds = (weightInHectograms: number) => {
	const weightInKilograms = weightInHectograms / 10;
	const weightInPounds = weightInHectograms * 0.220462;

	return `${weightInKilograms.toFixed(2)}kg/${weightInPounds.toFixed(2)}lbs`;
};

export const getPokemonsDetails = async (pokemons: IPokemonList[]): Promise<IPokemon[]> => {
	return await Promise.all(
		pokemons?.map(async (pokemon: IPokemonList) => {
			const response = await api.get(pokemon.url);
			return response.data;
		})
	);
};
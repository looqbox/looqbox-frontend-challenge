export interface PokemonListItem {
	name: string;
	url: string;
	id: number;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItem[];
}

export interface PokemonAbility {
	is_hidden: boolean;
	slot: number;
	ability: {
		name: string;
		url: string;
	};
}

export interface PokemonType {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export interface PokemonMove {
	move: {
		name: string;
		url: string;
	};
	version_group_details: any[];
}

export interface PokemonSprites {
	back_default: string | null;
	back_female: string | null;
	back_shiny: string | null;
	back_shiny_female: string | null;
	front_default: string | null;
	front_female: string | null;
	front_shiny: string | null;
	front_shiny_female: string | null;
	other?: any;
	versions?: any;
}

export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: PokemonAbility[];
	forms: Array<{ name: string; url: string }>;
	game_indices: Array<any>;
	held_items: Array<any>;
	location_area_encounters: string;
	moves: PokemonMove[];
	past_abilities: Array<any>;
	past_types: Array<any>;
	species: { name: string; url: string };
	sprites: PokemonSprites;
	stats: PokemonStat[];
	types: PokemonType[];
	cries?: { latest: string; legacy: string };
	image?: string;
	form?: string;
	version?: string;
}

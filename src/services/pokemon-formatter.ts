import { IPokemon } from '../interfaces/pokemon-types';

export const getAbilitiesListByPokemon = (pokemon: IPokemon | undefined) =>{
    const list: String[] = [];
    if (pokemon?.abilities && pokemon?.abilities.length > 0) {
        pokemon?.abilities?.map((ability: { ability: { name: any; }; }, index: any) => ( 
            list.push(ability?.ability?.name)
        ));
    }
    return list;
}

export const getTypesListByPokemon  = (pokemon: IPokemon | undefined) =>{
    const list: String[] = [];
    if (pokemon?.types && pokemon?.types.length > 0) {
        pokemon?.types?.map((type: { type: { name: any; }; }, index: any) => ( 
            list.push(type?.type?.name)
        ));
    }
    return list;
}


export const getStatsListByPokemon  = (pokemon: IPokemon | undefined) =>{
    const list: { name: string; value: number }[] = [];
    
    if (pokemon?.stats && pokemon?.stats.length > 0) {
        pokemon?.stats?.map((item: any, index: any) => ( 
            list.push({ "name": item?.stat?.name, "value": (item?.base_stat * 100 / 180)})
        ));
    }
    return list;
}

import { NavigateFunction } from 'react-router-dom';

export const goToHomePage = (navigate: NavigateFunction) => {
    navigate("/");
}

export const goToPokedexPage = (navigate: NavigateFunction) => {
    navigate("/pokedex");
}

export const goToDetailsPage = (navigate: NavigateFunction, pokemonId: string | number) => {
    navigate(`/details/${pokemonId}`);
}

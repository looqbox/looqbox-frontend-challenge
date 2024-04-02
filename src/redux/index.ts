import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonDetailsReducer from './PokemonDetailsReducer';

export const store = configureStore({
    reducer: {
        pokemonList: PokemonListReducer,
        pokemonDetails: PokemonDetailsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

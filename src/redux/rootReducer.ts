//Get all reducers and store into rootReducer
import { combineReducers } from '@reduxjs/toolkit';

//Import an specific reducer
// import { AllPokemonsReducer } from './allPokemons/reducer';
import AllPokemonsReducer from './allPokemons/slice';

export const rootReducer = combineReducers({ AllPokemonsReducer });

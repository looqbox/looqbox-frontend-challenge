import { PokemonProps } from '../../shared/service.interface';
import { ActionTypes } from './actionTypes';

export const addList = (data: PokemonProps[]) => {
  return {
    type: ActionTypes.UPDATE,
    data,
  };
};

export const updateList = (data: PokemonProps[]) => {
  return {
    type: ActionTypes.UPDATE,
    data,
  };
};

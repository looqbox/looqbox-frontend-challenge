import { PokemonProps } from '../../shared/service.interface';
import { ActionTypes } from './actionTypes';

const initilState = {
  currentList: [] as PokemonProps[],
};

interface ActionProps {
  type: string;
  data: PokemonProps[];
}

export const AllPokemonsReducer = (state = initilState, action: ActionProps) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...initilState,
        currentList: [...initilState.currentList, ...action.data],
      };
    case ActionTypes.UPDATE:
      return {
        ...state,
        currentList: [...state.currentList, ...action.data],
      };
    default:
      return state;
  }
};

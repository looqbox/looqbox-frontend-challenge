// import {
//   ACTION_NAME,
// } from '../constants/action-types';

const initialState = {
  someProp: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'ACTION_1':
    //   return {
    //     ...state,
    //     someProp: action.payload
    //   };
    // case 'ACTION_2':
    //   return {
    //     ...state,
    //     someProp: [...state.someProp, action.payload]
    //   };
    // case 'ACTION_3':
    //   return {
    //     ...state,
    //     someProp: {...state.someProp, anoterProp: action.payload}
    //   };
    default:
      return state;
  }
};

export default rootReducer;

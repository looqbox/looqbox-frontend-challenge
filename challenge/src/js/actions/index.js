// import {
//   ACTION_NAME,
// } from '../constants/action-types';

export const updateActivePage = newActivePage => ({
  type: UPDATE_ACTIVE_PAGE,
  payload: newActivePage
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU
});

export const someMiddleware = store => {
  return next => {
    return action => {
      console.log('middleware');
      console.log(action);
      console.log(action.payload);
      // next(action);
    };
  };
};

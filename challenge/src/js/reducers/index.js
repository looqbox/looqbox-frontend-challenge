/* REDUX */
import { combineReducers } from 'redux'

/* REDUCERS */
import searchResults from './searchResults'

export const combinedReducers = combineReducers({
  searchResults
})

export default combinedReducers

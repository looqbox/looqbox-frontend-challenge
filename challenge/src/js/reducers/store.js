/* REDUX */
import { createStore, combineReducers } from 'redux'

/* REDUCERS */
import searchResults from './searchResults'

const combinedReducers = combineReducers({
  searchResults
})

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

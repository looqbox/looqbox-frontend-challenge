/* REDUX */
import { createStore } from 'redux'

/* REDUCERS */
import combinedReducers from './index'

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

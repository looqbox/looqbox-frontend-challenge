/* ACTION TYPES */
import { UPDATE_DATA, UPDATE_SHOW_COUNT } from './action-types'

const initialState = {
  query: null,
  data: null,
  showCount: 20
} // carregar inicialmente alguns itens

const searchResults = (state = initialState, action) => {
  const { query, data, showCount } = action

  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        query,
        data
      }

    case UPDATE_SHOW_COUNT:
      return {
        ...state,
        showCount
      }

    default:
      return state
  }
}

export default searchResults

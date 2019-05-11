/* ACTION TYPES */
import { UPDATE_DATA, UPDATE_SHOW_COUNT, UPDATE_IS_SEARCHING } from './action-types'

const initialState = {
  query: null,
  data: null,
  showCount: 20,
  isSearching: false
} // carregar inicialmente alguns itens

const searchResults = (state = initialState, action) => {
  const { query, data, showCount, isSearching } = action

  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        query,
        data,
        isSearching: false
      }

    case UPDATE_SHOW_COUNT:
      return {
        ...state,
        showCount
      }

    case UPDATE_IS_SEARCHING:
      return {
        ...state,
        isSearching
      }

    default:
      return state
  }
}

export default searchResults

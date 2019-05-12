/* ACTION TYPES */
import { UPDATE_DATA, UPDATE_SHOW_COUNT, UPDATE_IS_SEARCHING } from './action-types'

const initialState = {
  query: null,
  data: null,
  showCount: 20,
  isSearching: false
}

const searchResults = (state = initialState, action) => {
  const { query, data, showCount, isSearching } = action

  switch (action.type) {
    /* UPDATE 'DATA' (Update search results 'data' with the request response and the searched 'query') */
    case UPDATE_DATA:
      return {
        ...state,
        query,
        data,
        isSearching: false
      }

    /* UPDATE 'SHOW COUNT' (Update the quantity of results (showCount) displayed on result list) */
    case UPDATE_SHOW_COUNT:
      return {
        ...state,
        showCount
      }

    /* UPDATE 'IS SEARCHING' (Update isSearching prop to know when loading bar should be displayed) */
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

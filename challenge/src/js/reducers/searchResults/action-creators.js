/* ACTION TYPES */
import { UPDATE_DATA, UPDATE_SHOW_COUNT, UPDATE_IS_SEARCHING } from './action-types'

/* UPDATE 'DATA' (Update search results 'data' with the request response and the searched 'query') */
export const updateData = (query, data) => {
  return {
    type: UPDATE_DATA,
    query,
    data
  }
}

/* UPDATE 'SHOW COUNT' (Update the quantity of results (showCount) displayed on result list) */
export const updateShowCount = (showCount) => {
  return {
    type: UPDATE_SHOW_COUNT,
    showCount
  }
}

/* UPDATE 'IS SEARCHING' (Update isSearching prop to know when loading bar should be displayed) */
export const updateIsSearching = isSearching => ({
  type: UPDATE_IS_SEARCHING,
  isSearching
})

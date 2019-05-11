/* ACTION TYPES */
import { UPDATE_DATA, UPDATE_SHOW_COUNT, UPDATE_IS_SEARCHING } from './action-types'

export const updateData = (query, data) => {
  return {
    type: UPDATE_DATA,
    query,
    data
  }
}

export const updateShowCount = (showCount) => {
  return {
    type: UPDATE_SHOW_COUNT,
    showCount
  }
}

export const updateIsSearching = isSearching => ({
  type: UPDATE_IS_SEARCHING,
  isSearching
})

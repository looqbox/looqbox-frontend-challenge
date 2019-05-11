/* ACTION TYPES */
import { UPDATE_DATA, ADD_DATA } from './action-types'

export const updateData = (query, data, shouldAdd) => {
  return {
    type: UPDATE_DATA,
    query,
    data
  }
  /* Check if should add instead of update the data (for paginated/limited results) */
  // return shouldAdd
  //   ? {
  //     type: ADD_DATA,
  //     query,
  //     data
  //   }
  //   : {
  //     type: UPDATE_DATA,
  //     query,
  //     data
  //   }
}

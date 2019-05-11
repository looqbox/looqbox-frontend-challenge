/* ACTION TYPES */
import { UPDATE_DATA, ADD_DATA } from './action-types'

const initialState = {} // carregar inicialmente alguns itens

const searchResults = (state = initialState, action) => {
  const { query, data } = action

  switch (action.type) {
    case UPDATE_DATA:
      return {
        query,
        data
      }

    case ADD_DATA:
      return state.concat(data)

    default:
      return state
  }
}

export default searchResults

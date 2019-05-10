/* ACTION TYPES */
import { UPDATE_DATA, ADD_DATA } from './action-types'

const searchResults = (state = [], action) => {
  const { data } = action

  switch (action.type) {
    case UPDATE_DATA:
      return data

    case ADD_DATA:
      return state.concat(data)

    default:
      return state
    // case ADD_CUSTOMER:
    //   window.localStorage.setItem('initialState', JSON.stringify(state.concat(data)));
    //   return state.concat(data);

    // case EDIT_CUSTOMER:
    //   const i = state.findIndex(customer => customer.__id === id);
    //   window.localStorage.setItem('initialState', JSON.stringify(update(i, data, state)));
    //   return update(i, data, state);
  }
}

export default searchResults

/* helpers */
// const defaultInitialState = [
//   {
//     name: 'Pedro Muraki',
//     birthday: '30/03/1990',
//     driver_license: {
//       number: '123456',
//       issued_at: '25/05/2010',
//       __id: '123'
//     },
//     state: 'sp',
//     phones: [
//       {
//         code: '11',
//         number: '965788854',
//         main: true,
//         __destroy: false,
//         __id: '456'
//       },
//       {
//         code: '11',
//         number: '32539608',
//         main: false,
//         __destroy: false,
//         __id: '789'
//       }
//     ],
//     emails: [
//       {
//         address: 'pedromuraki@gmail.com',
//         __destroy: false,
//         __id: '321'
//       }
//     ],
//     __id: '1'
//   }
// ]

// const initialState = JSON.parse(window.localStorage.getItem('initialState')) || defaultInitialState;

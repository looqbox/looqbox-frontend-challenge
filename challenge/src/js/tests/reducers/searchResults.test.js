/* CHAI */
import chai, { expect } from 'chai'
// import sinon from 'sinon'
// import sinonChai from 'sinon-chai'

// chai.use(sinonChai)

/* ACTION TYPES */
import { UPDATE_DATA, UPDATE_SHOW_COUNT, UPDATE_IS_SEARCHING } from '../../reducers/searchResults/action-types'

/* TESTED METHODS */
import { updateData, updateShowCount, updateIsSearching } from '../../reducers/searchResults/action-creators'
import searchResults from '../../reducers/searchResults'

/* UPDATE 'DATA' */
describe('Test "updateData"', () => {
  it('Should return an object', () => {
    expect(updateData('Pikachu', {})).to.be.an('object')
  })

  it('Should return an object containing its respective "type" and the received parameters as properties', () => {
    expect(updateData('Pikachu', {})).to.be.deep.equal({
      type: UPDATE_DATA,
      query: 'Pikachu',
      data: {}
    })
  })
})

/* UPDATE 'SHOW COUNT' */
describe('Test "updateShowCount"', () => {
  it('Should return an object', () => {
    expect(updateShowCount(20)).to.be.an('object')
  })

  it('Should return an object containing its respective "type" and the received parameters as properties', () => {
    expect(updateShowCount(20)).to.be.deep.equal({
      type: UPDATE_SHOW_COUNT,
      showCount: 20
    })
  })
})

/* UPDATE 'IS SEARCHING' */
describe('Test "updateIsSearching"', () => {
  it('Should return an object', () => {
    expect(updateIsSearching(true)).to.be.an('object')
  })

  it('Should return an object containing its respective "type" and the received parameters as properties', () => {
    expect(updateIsSearching(false)).to.be.deep.equal({
      type: UPDATE_IS_SEARCHING,
      isSearching: false
    })
  })
})

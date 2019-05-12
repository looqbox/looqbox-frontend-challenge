/* CHAI */
import { expect } from 'chai'

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

/* SEARCH RESULTS REDUCER */
describe('Test "searchResults"', () => {
  it('Should return an object', () => {
    const state = {}
    const action = {}
    expect(searchResults(state, action)).to.be.an('object')
  })

  /* UPDATE 'DATA' */
  describe('Case "UPDATE_DATA"', () => {
    const state = {
      query: null,
      data: null,
      showCount: 20,
      isSearching: true
    }

    const action = {
      type: UPDATE_DATA,
      query: 'Bulbasaur',
      data: {
        example: 'abc'
      }
    }

    it('Should not update "showCount"', () => {
      expect(searchResults(state, action).showCount).to.be.equal(20)
    })

    it('Should update "isSearching" to false', () => {
      expect(searchResults(state, action).isSearching).to.be.equal(false)
    })

    it('Should update "query" and "data" based on action object', () => {
      const expected = {
        query: 'Bulbasaur',
        data: {
          example: 'abc'
        },
        showCount: 20,
        isSearching: false
      }

      expect(searchResults(state, action)).to.be.deep.equal(expected)
    })
  })

  /* UPDATE 'SHOW COUNT' */
  describe('Case "UPDATE_SHOW_COUNT"', () => {
    const state = {
      query: 'Pikachu',
      data: null,
      showCount: 20,
      isSearching: true
    }

    const action = {
      type: UPDATE_SHOW_COUNT,
      showCount: 40
    }

    it('Should just update "showCount" based on action object', () => {
      const expected = {
        query: 'Pikachu',
        data: null,
        showCount: 40,
        isSearching: true
      }

      expect(searchResults(state, action)).to.be.deep.equal(expected)
    })
  })

  /* UPDATE 'IS SEARCHING' */
  describe('Case "UPDATE_IS_SEARCHING"', () => {
    const state = {
      query: 'Pikachu',
      data: null,
      showCount: 20,
      isSearching: false
    }

    const action = {
      type: UPDATE_IS_SEARCHING,
      isSearching: true
    }

    it('Should just update "isSearching" based on action object', () => {
      const expected = {
        query: 'Pikachu',
        data: null,
        showCount: 20,
        isSearching: true
      }

      expect(searchResults(state, action)).to.be.deep.equal(expected)
    })
  })
})

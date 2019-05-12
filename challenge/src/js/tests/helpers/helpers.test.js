/* CHAI */
import { expect } from 'chai'

import { slugify, unslugify, search, getRandom, getRandomNumber, getEvolutions } from '../../helpers'

describe('Test "slugify"', () => {
  it('Should return a string', () => {
    expect(slugify('Some string')).to.be.a('string')
  })

  it('Should convert the received parameter to a string', () => {
    expect(slugify(12345)).to.be.a('string')
    expect(slugify({})).to.be.a('string')
    expect(slugify([])).to.be.a('string')
  })

  it('Should convert the received parameter to lowercase and replace white spaces between words with "-"', () => {
    expect(slugify('Some STRING')).to.be.equal('some-string')
  })

  it('Should remove white spaces at the beginning and the end of the string', () => {
    expect(slugify('   Some STRING   ')).to.be.equal('some-string')
  })
})

/* CHAI */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

/* LIBS */
import axios from 'axios'

/* TESTED METHODS */
import { slugify, unslugify, search, getRandom, getRandomNumber, getEvolutions } from '../../helpers'

/* SLUGIFY */
describe('Test "slugify"', () => {
  it('Should return a string', () => {
    expect(slugify('Some string')).to.be.a('string')
  })

  it('Should convert the received parameter to a string', () => {
    expect(slugify(12345)).to.be.a('string')
    expect(slugify({})).to.be.a('string')
    expect(slugify([])).to.be.a('string')
  })

  it('Should remove white spaces at the beginning and the end of the string', () => {
    expect(slugify('   Some STRING   ')).to.be.equal('some-string')
  })

  it('Should convert the received parameter to lowercase and replace white spaces between words with "-"', () => {
    expect(slugify('Some STRING')).to.be.equal('some-string')
    expect(slugify('Testing Some String')).to.be.equal('testing-some-string')
  })
})

/* UNSLUGIFY */
describe('Test "unslugify"', () => {
  it('Should return a string', () => {
    expect(unslugify('some-string')).to.be.a('string')
  })

  it('Should convert the received parameter to a string', () => {
    expect(unslugify(12345)).to.be.a('string')
    expect(unslugify({})).to.be.a('string')
    expect(unslugify([])).to.be.a('string')
  })

  it('Should convert the received parameter to capital case and split words using the "-" as separator', () => {
    expect(unslugify('some-string')).to.be.equal('Some String')
    expect(unslugify('SOME-STRING')).to.be.equal('Some String')
    expect(unslugify('string')).to.be.equal('String')
  })
})

/* SEARCH */
describe('Test "search"', () => {
  let stubed
  beforeEach(() => { stubed = sinon.stub(axios, 'get') })
  afterEach(() => { stubed.restore() })

  it('Should call "get" method from "axios"', () => {
    search('pokemon', 'bulbasaur')
    expect(stubed).to.have.been.calledOnce
  })

  it('Should call "get" method from "axios" with the url based on received params ("what" and "query")', () => {
    search('pokemon', 'bulbasaur')
    expect(stubed).to.have.been.calledWith('https://pokeapi.co/api/v2/pokemon/bulbasaur')

    search('type', 'flying')
    expect(stubed).to.have.been.calledWith('https://pokeapi.co/api/v2/type/flying')
  })
})

/* GET RANDOM */
describe('Test "getRandom"', () => {
  let stubed
  beforeEach(() => { stubed = sinon.stub(axios, 'get') })
  afterEach(() => { stubed.restore() })

  it('Should call "get" method from "axios"', () => {
    getRandom(20)
    expect(stubed).to.have.been.calledOnce
  })

  it('Should call "get" method from "axios" with the url based on received param ("offset" number)', () => {
    getRandom(50)
    expect(stubed).to.have.been.calledWith('https://pokeapi.co/api/v2/pokemon/?offset=50')

    getRandom(0)
    expect(stubed).to.have.been.calledWith('https://pokeapi.co/api/v2/pokemon/?offset=0')
  })
})

/* GET RANDOM NUMBER */
describe('Test "getRandomNumber"', () => {
  it('Should return a number', () => {
    expect(getRandomNumber(0, 100)).to.be.a('number')
    expect(getRandomNumber('0', '100')).to.be.a('number')
  })

  it('Should return a number between (inclusive) the range received as parameters ("min" and "max")', () => {
    expect(getRandomNumber(0, 100)).to.be.above(-1).and.to.be.below(101)
    expect(getRandomNumber(100, 100)).to.be.above(99).and.to.be.below(101)
    expect(getRandomNumber(50, 75)).to.be.above(49).and.to.be.below(76)
  })
})

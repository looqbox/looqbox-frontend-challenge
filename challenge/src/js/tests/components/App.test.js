/* REACT */
import React from 'react'

/* CHAI */
import chai, { expect } from 'chai'
// import sinon from 'sinon'
// import sinonChai from 'sinon-chai'

// chai.use(sinonChai)

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import App from '../../components/App'
import { Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'
import Search from '../../components/Search'
import GetRandomPokemon from '../../components/GetRandomPokemon'
import PokemonList from '../../components/PokemonList'
import Pokemon from '../../components/Pokemon'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('Should render App', () => {
    shallow(<App />)
  })

  it('Should render Router', () => {
    const router = wrapper.find(Router)
    expect(router.length).to.be.equal(1)
  })

  it('Should render ScrollToTop', () => {
    const scrollToTop = wrapper.find(ScrollToTop)
    expect(scrollToTop.length).to.be.equal(1)
  })

  it('Should render Search', () => {
    const search = wrapper.find(Search)
    expect(search.length).to.be.equal(1)
  })

  it('Should render GetRandomPokemon', () => {
    const getRandomPokemon = wrapper.find(GetRandomPokemon)
    expect(getRandomPokemon.length).to.be.equal(1)
  })

  it('Should render Switch', () => {
    const routerSwitch = wrapper.find(Switch)
    expect(routerSwitch.length).to.be.equal(1)
  })

  it('Should render Route', () => {
    const route = wrapper.find(Route)
    expect(route.length).to.be.equal(2)
  })

  it('Should render PokemonList inside Route on path "/"', () => {
    const routerSwitch = wrapper.find(Switch)
    expect(routerSwitch.childAt(0).props().exact).to.equal(true)
    expect(routerSwitch.childAt(0).props().path).to.equal('/')
    expect(routerSwitch.childAt(0).props().component).to.equal(PokemonList)
  })

  it('Should render Pokemon inside Route on path "/pokemon/:name"', () => {
    const routerSwitch = wrapper.find(Switch)
    expect(routerSwitch.childAt(1).props().exact).to.equal(true)
    expect(routerSwitch.childAt(1).props().path).to.equal('/pokemon/:name')
    expect(routerSwitch.childAt(1).props().component).to.equal(Pokemon)
  })
})

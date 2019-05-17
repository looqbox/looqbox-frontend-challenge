/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import { GetRandomPokemon } from '../../components/GetRandomPokemon'

describe('<GetRandomPokemon />', () => {
  let mockUpdateData
  let mockUpdateIsSearching

  let getRandomPokemon

  beforeEach(() => {
    mockUpdateData = jest.fn()
    mockUpdateIsSearching = jest.fn()

    getRandomPokemon = shallow(<GetRandomPokemon updateData={mockUpdateData} updateIsSearching={mockUpdateIsSearching} />)
  })

  it('Should render GetRandomPokemon', () => {
    shallow(<GetRandomPokemon updateData={mockUpdateData} updateIsSearching={mockUpdateIsSearching} />)
  })

  it('Should render a button with text "Get random Pokémon"', () => {
    const btn = getRandomPokemon.find('button')
    expect(btn.text()).toBe('Get random Pokémon')
  })

  it('Should call "getRandomPokemon" method on button click', () => {
    const instance = getRandomPokemon.instance()

    jest.spyOn(instance, 'getRandomPokemon')

    instance.forceUpdate()

    getRandomPokemon.find('button').simulate('click')
    expect(instance.getRandomPokemon).toHaveBeenCalledTimes(1)
  })
})

/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import { GetRandomPokemon } from '../../components/GetRandomPokemon'

describe('<GetRandomPokemon />', () => {
  let mockUpdateData
  let mockUpdateIsSearching

  let wrapper

  beforeEach(() => {
    mockUpdateData = jest.fn()
    mockUpdateIsSearching = jest.fn()

    wrapper = shallow(<GetRandomPokemon updateData={mockUpdateData} updateIsSearching={mockUpdateIsSearching} />)
  })

  it('Should render GetRandomPokemon', () => {
    shallow(<GetRandomPokemon updateData={mockUpdateData} updateIsSearching={mockUpdateIsSearching} />)
  })

  it('Should render a button with text "Get random Pokémon"', () => {
    const btn = wrapper.find('button')
    expect(btn.text()).toBe('Get random Pokémon')
  })

  it('Should call "getRandomPokemon" method on button click', () => {
    const instance = wrapper.instance()

    jest.spyOn(instance, 'getRandomPokemon')

    instance.forceUpdate()

    wrapper.find('button').simulate('click')
    expect(instance.getRandomPokemon).toHaveBeenCalledTimes(1)
  })
})

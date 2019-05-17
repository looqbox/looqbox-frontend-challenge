/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import Loading from '../../components/Loading'

describe('<Loading />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Loading />)
  })

  it('Should render Loading', () => {
    shallow(<Loading />)
  })

  it('Should render an image with correct src', () => {
    const img = wrapper.find('img[src="../src/img/loading.svg"]')
    expect(img.length).toBe(1)
  })
})

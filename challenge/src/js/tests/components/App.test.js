/* REACT */
import React from 'react'

/* ENZYME */
import { shallow } from 'enzyme'

/* COMPONENTS */
import App from '../../components/App'

describe('<App />', () => {
  it('Should render App', () => {
    shallow(<App />)
  })
})

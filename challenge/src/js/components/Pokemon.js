/* REACT */
import React, { Component } from 'react'

/* HELPERS */
import search from '../helpers/search'

/* COMPONENTS */
import Loading from './Loading'

/* POKÉMON */
class Pokemon extends Component {
  constructor() {
    super()
    this.state = { data: null }
  }

  componentDidMount = () => {
    search('pokemon', this.props.match.params.name)
      .then(res => this.setState({ data: res.data }))
  }

  render = () => {
    const { data } = this.state

    return (
      data
        ? (
          <div className="pokemon">
            <h3 className="pokemon__name">{data.name}</h3>
          </div>
        )
        : <Loading />
    )
  }
}

export default Pokemon

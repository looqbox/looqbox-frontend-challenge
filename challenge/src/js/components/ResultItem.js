/* REACT */
import React from 'react'

/* ROUTER */
import { Link } from 'react-router-dom'

/* HELPERS */
import { unslugify } from '../helpers'

const path =
  process.env.NODE_ENV !== 'production'
    ? 'src'
    : '.'

/* RESULT ITEM */
const ResultItem = ({ data }) =>
  (
    <div className="col-lg-3 col-md-6">
      <div className="result">
        <img src={path + '/img/pokeball.svg'} className="result__pokeball" alt="Pokéball" />
        <h3 className="result__name sub-headline">{unslugify(data.name)}</h3>
        <Link to={`pokemon/${data.name}`} className="result__button button button--sm">View details</Link>
      </div>
    </div>
  )

export default ResultItem

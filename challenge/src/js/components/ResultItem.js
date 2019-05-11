/* REACT */
import React from 'react'

/* ROUTER */
import { Link } from 'react-router-dom'

/* RESULT ITEM */
const ResultItem = ({ data }) =>
  (<div className="results__item">
    <h3 className="results__name">{data.name}</h3>
    <Link to={`pokemon/${data.name}`} className="button button--sm">More details</Link>
  </div>)

export default ResultItem

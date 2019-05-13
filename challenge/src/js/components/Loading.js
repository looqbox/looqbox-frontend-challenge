/* REACT */
import React from 'react'

const path =
  process.env.NODE_ENV !== 'production'
    ? 'src'
    : '.'

/* LOADING */
const Loading = () => {
  return (
    <div className="col-12 d-flex justify-content-center">
      <img src={'../' + path + '/img/loading.svg'} className="loading" alt="Loading" />
    </div>
  )
}

export default Loading

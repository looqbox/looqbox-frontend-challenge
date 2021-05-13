import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Pokemons"
                    /*
                    value={''}
                    onChange={''}
                    */
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import addLeadingZeros from '../utils/addLeadingZeros';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

import pokeball from '../assets/pokeball.png';
import '../styles/components/pokemon-list-item.css';

export default function PokemonListItem({ number, name }){
    return (
        <Link className="list-item row" to={`/details/${number}`}>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <img src={pokeball} alt='-'/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <p>{ addLeadingZeros(number) }</p>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                <p>{ capitalizeFirstLetter(name) }</p>
            </div>
        </Link>
    )
}

PokemonListItem.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string
}
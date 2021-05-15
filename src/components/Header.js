import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/header.css';

export default function Header(){
    return (
        <header>
            <Link to='/' className='header-link'>
                <h1 className='header-text'>Pokédex</h1>
            </Link>
        </header>
    )
}
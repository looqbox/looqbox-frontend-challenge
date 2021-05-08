import React from 'react';

import Search from './Search';
import Pokemon from '../Pokemon';
import { HeaderSec, HeaderTitle, HeaderSearch } from './HeaderStyled';

export default function Header() {
    return (
        <>
            <HeaderSec>
                <HeaderTitle>
                    <a href="/"> <h1>Pokémon</h1></a>
                </HeaderTitle>
                <HeaderSearch>
                    <Search submit={Pokemon.loadPokemon} />
                </HeaderSearch>
            </HeaderSec>
        </>
    );
}
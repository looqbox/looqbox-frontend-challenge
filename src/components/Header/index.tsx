import React from 'react';
import { StyledHeader } from './styles';

const AppHeader: React.FC = () => {
    return (
        <StyledHeader>
            <h1>Pokédex</h1>
            <p>Search the Pokémon by its name or ID!</p>
        </StyledHeader>
    );
}

export default AppHeader;

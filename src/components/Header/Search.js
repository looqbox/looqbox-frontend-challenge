import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { SearchInput, SearchButton, SearchButtonIcon } from './SearchStyled';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    // Monitora o valor do input.
    onChangeBound = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
    // Armazena o valor do input em uma variável.
    handleSubmit = () => {
        const result = this.state.value;
        return result;
    };

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <SearchInput name="search" id="search" value={this.state.value} onChange={this.onChangeBound} placeholder="Buscar pokemons..." />
                <SearchButton>
                    <SearchButtonIcon>
                        <FaSearch />
                    </SearchButtonIcon>
                </SearchButton>
            </form>
        );

    }
}
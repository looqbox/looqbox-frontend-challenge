import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../../../elements/Loading/Loading';
import pokeAPI from '../../../../services/api';

import { Container, Input, SearchButton, SearchIcon } from './styles';

const SearchInput:React.FC = () => {

    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    function searchPokemon(event: any){
        event.preventDefault();

        setLoading(true);
        pokeAPI.get(`pokemon/${input}`).then(res => {
            navigate(`details/${input}`)
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Pokémon not found!',
            });
        }).finally(() => {
            setLoading(false);
        });
    }

    return(
        <>
            {loading ? <Loading /> : <React.Fragment />}
            <Container onSubmit={searchPokemon}>
                <Input 
                    type="search" 
                    required 
                    placeholder='Enter a pokemon name or its id'
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <SearchButton type='submit'><SearchIcon /></SearchButton>
            </Container>
        </>
    );
}

export default SearchInput;
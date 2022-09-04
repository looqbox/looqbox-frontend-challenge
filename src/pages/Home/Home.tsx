import React, { useState, useEffect } from "react";
import PokemonListData from "../../@types/PokemonListData";
import Loading from "../../elements/Loading/Loading";
import pokeAPI from "../../services/api";
import Card from "./components/Card/Card";
import SearchInput from "./components/SearchInput/SearchInput";

import { Container, PokemonList, Button } from './styles';

const Home:React.FC = () => {
    const [pokemons, setPokemons] = useState<PokemonListData[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        setLoading(true);
        pokeAPI.get(`/pokemon/?offset=${offset}`).then(({data}) => {
            let alreadyPokemons = pokemons.concat(data.results);
            setPokemons(alreadyPokemons);
        }).catch((err) => {
            console.log(err.message);
        }).finally(() => {
            setLoading(false);
        });
    }, [offset]);

    return(
        <>
            {loading ? <Loading /> : <React.Fragment/>}
            <Container>
                <SearchInput />
                <PokemonList>
                    {
                        pokemons?.map((pokemon: PokemonListData) => {
                            if (pokemon) {
                                return(
                                    <Card key={pokemon.name} url={pokemon.url}/>
                                )
                            }
                        })
                    }
                </PokemonList>
                <Button onClick={() => setOffset(offset + 20)}>Show More Pokémons</Button>
            </Container>
        </>
    )
}

export default Home;
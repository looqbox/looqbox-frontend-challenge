import React, { useState, useEffect } from "react";
import PokemonListData from "../../@types/PokemonListData";
import Loading from "../../elements/Loading/Loading";
import { usePokemons } from "../../providers/PokemonsProvider";
import pokeAPI from "../../services/api";
import Card from "./components/Card/Card";
import SearchInput from "./components/SearchInput/SearchInput";

import { Container, PokemonList, Button } from './styles';

const Home:React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const { pokemons, setPokemons, offset, setOffset } = usePokemons();


    useEffect(() => {
        if(pokemons.length === 0) {
            setLoading(true);
            pokeAPI.get(`/pokemon/?offset=${offset}`).then(({data}) => {
                let alreadyPokemons = pokemons.concat(data.results);
                setPokemons(alreadyPokemons);
                setOffset(offset + 20);
            }).catch((err) => {
                console.log(err.message);
            }).finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    function handleClick() {
        setOffset(offset + 20);
        if(offset == 0) {
            console.log("cachorro");
            setOffset(offset + 40);
        }
        setLoading(true);
        pokeAPI.get(`/pokemon/?offset=${offset}`).then(({data}) => {
            let alreadyPokemons = pokemons.concat(data.results);
            setPokemons(alreadyPokemons);
        }).catch((err) => {
            console.log(err.message);
        }).finally(() => {
            setLoading(false);
        });
    }

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
                <Button onClick={() => handleClick()}>Show More Pokémons</Button>
            </Container>
        </>
    )
}

export default Home;
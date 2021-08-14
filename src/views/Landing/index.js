import React, { useEffect, useState } from "react";
import API from "../../services/API";
import PokemonResult from "../components/PokemonResult";
import { FaSearch, FaRedoAlt } from "react-icons/fa";
import "./index.css";

export default function Landing() {
    
    const [pokemonList, setPokemonList] = useState();
    const [pokemonData, setPokemonData] = useState();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchPokemonList(`?limit=10&offset=${Math.ceil((Math.random()*1000))}`);
        console.log()
    }, []);

    async function fetchPokemonList(options) {
        await API.get(`/pokemon${options}`).then(response => {
            setPokemonList(response.data.results);
            console.log(pokemonList);
        }).catch(e => {
            console.error(e);
        });
    }

    async function fetchPokemon(name) {
        await API.get(`/pokemon/${name}`).then(response => {
            setPokemonList();
            setPokemonData(response.data);
        }).catch(e => {
            console.error(e);
        });
    }

    function formSubmit(e) {
        e.preventDefault();

        fetchPokemon(searchText);
    }

    return (
        <section className="mainSection">
            <article className="infoSection">
                <div className="infoDiv">
                    {   pokemonData ?
                        <div className="dataDiv">
                            <div className="dataMain">
                                <img src={pokemonData.sprites.front_default}/>
                                <div className="dataStats">
                                    <h2>Base exp:</h2>
                                    <h3>{pokemonData.base_experience}</h3>
                                    <h2>Height:</h2>
                                    <h3>{pokemonData.height/10}m</h3>
                                    <h2>Weight:</h2>
                                    <h3>{pokemonData.weight/10}kg</h3>
                                    <h2>Type:</h2>
                                    <div className="dataTypes">
                                        {
                                            pokemonData.types.map(type => (
                                                <span className="pokemonType">{type.type.name}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="dataFooter">
                                <h2 className="dataId">#{pokemonData.id}</h2>
                                <h2 className="dataName">{pokemonData.name}</h2>
                            </div>
                        </div>
                        :
                        ""
                    }
                </div>
            </article>
            <div className="searchSection">
                <form className="searchSectionForm" onSubmit={e => formSubmit(e)}>
                    <div className="searchInputDiv">
                        <input type="search" className="searchInput" value={searchText} onChange={e => setSearchText(e.target.value)}/>
                        <button type="submit" className="searchInputSubmit">
                            <FaSearch fill="#236b40" size="40%"/>
                        </button>
                    </div>
                </form>
                <div className="searchListSection">
                    <ul className="searchList">
                        {   pokemonList ?
                                pokemonList.map((pokemon) => (
                                    <PokemonResult url={pokemon.url} dataChangerFn={setPokemonData}/>
                                ))
                            :
                            ""
                        }
                    </ul>
                    <button className="searchListUpdate" onClick={() => fetchPokemonList(`?limit=10&offset=${Math.ceil((Math.random()*1000))}`)}>
                        <FaRedoAlt fill="#827500" size="50%"/>
                    </button>
                </div>
            </div>
        </section>
    );
}
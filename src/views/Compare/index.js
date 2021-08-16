import React, { useEffect, useState } from "react";
import API from "../../services/API";
import PokemonResult from "../components/PokemonResult";
import { FaSearch, FaRedoAlt, FaArrowLeft } from "react-icons/fa";
import "./index.css";
import { useHistory, useLocation } from "react-router-dom";

export default function Compare() {
    
    const history = useHistory();
    const location = useLocation();
    const [pokemonList, setPokemonList] = useState();
    const [selectedPokemon, setSelectedPokemon] = useState();
    const [pokemonData, setPokemonData] = useState();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setPokemonList(location.state.fetchedList);
        setSelectedPokemon(location.state.selectedPokemon);

        // eslint-disable-next-line
    }, []);

    async function fetchPokemonList(options) {
        await API.get(`/pokemon${options}`).then(response => {
            setPokemonList();
            setPokemonList(response.data.results);
        }).catch(e => {
            console.error(e);
        });
    }

    async function fetchPokemon(name) {
        await API.get(`/pokemon/${name}`).then(response => {
            setPokemonData(response.data);
        }).catch(e => {
            console.error(e);
        });
    }

    function formSubmit(e) {
        e.preventDefault();

        if(searchText)
            fetchPokemon(searchText);
    }

    return (
        <section className="compareSection">
            <button className="compareSectionBack" onClick={() => history.push("/")}><FaArrowLeft fill="#827500" size="50%"/></button>
            <article className="compareInfo">
                <div className="infoSorrounding">
                    <div className="compareInfoDiv">
                        {   selectedPokemon ?
                            <div className="compareData">
                                <div className="compareDataMain">
                                    <img src={selectedPokemon.sprites.front_default} alt="Pokémon"/>
                                    <div className="compareDataStats">
                                        <h2>Base exp:</h2>
                                        <h3>{selectedPokemon.base_experience}</h3>
                                        <h2>Height:</h2>
                                        <h3>{selectedPokemon.height/10}m</h3>
                                        <h2>Weight:</h2>
                                        <h3>{selectedPokemon.weight/10}kg</h3>
                                        <h2>Type:</h2>
                                        <div className="compareDataTypes">
                                            {
                                                selectedPokemon.types.map(type => (
                                                    <span className="pokemonType">{type.type.name}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="compareDataGraph">
                                    {selectedPokemon.stats.map((stat, index) => (
                                        <div key={index} className="dataStatDiv">
                                            <div className="dataStatHeader">
                                                <h2>{stat.stat.name}</h2>
                                                <h3>{stat.base_stat}</h3>
                                            </div>
                                            <div className="dataStatBarBackdrop">
                                                <div className="dataStatBar" style={{width: (stat.base_stat*100)/255 + "%"}}></div>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                                <div className="compareDataFooter">
                                    <h2 className="compareDataId">
                                    # { selectedPokemon.id < 10 ? "0000" : ( selectedPokemon.id < 100 ? "000" : ( selectedPokemon.id < 1000 ? "00" : ( selectedPokemon.id < 10000 ? "0" : "" ) ) )}
                                    {selectedPokemon.id}</h2>
                                    <h2 className="compareDataName">{selectedPokemon.name}</h2>
                                </div>
                            </div>
                            :
                            ""
                        }
                    </div>
                    <div className="compareInfoDiv">
                        {   pokemonData ?
                            <div className="compareData">
                                <div className="compareDataMain">
                                    <img src={pokemonData.sprites.front_default} alt="Pokémon"/>
                                    <div className="compareDataStats">
                                        <h2>Base exp:</h2>
                                        <h3>{pokemonData.base_experience}</h3>
                                        <h2>Height:</h2>
                                        <h3>{pokemonData.height/10}m</h3>
                                        <h2>Weight:</h2>
                                        <h3>{pokemonData.weight/10}kg</h3>
                                        <h2>Type:</h2>
                                        <div className="compareDataTypes">
                                            {
                                                pokemonData.types.map(type => (
                                                    <span className="pokemonType">{type.type.name}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="compareDataGraph">
                                    {pokemonData.stats.map((stat, index) => (
                                        <div key={index} className="dataStatDiv">
                                            <div className="dataStatHeader">
                                                <h2>{stat.stat.name}</h2>
                                                <h3>{stat.base_stat}</h3>
                                            </div>
                                            <div className="dataStatBarBackdrop">
                                                <div className="dataStatBar" style={{width: (stat.base_stat*100)/255 + "%"}}></div>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                                <div className="compareDataFooter">
                                    <h2 className="compareDataId">
                                    # { pokemonData.id < 10 ? "0000" : ( pokemonData.id < 100 ? "000" : ( pokemonData.id < 1000 ? "00" : ( pokemonData.id < 10000 ? "0" : "" ) ) )}
                                    {pokemonData.id}</h2>
                                    <h2 className="compareDataName">{pokemonData.name}</h2>
                                </div>
                            </div>
                            :
                            <div className="compareDataStats">
                                <h2>Select a Pokémon to compare.</h2>
                            </div>
                        }
                    </div>
                </div>
            </article>
            <div className="compareSearch">
                <form className="compareSearchForm" onSubmit={e => formSubmit(e)}>
                    <div className="searchInputDiv">
                        <input type="search" className="searchInput" value={searchText} onChange={e => setSearchText(e.target.value)} autoFocus placeholder="POKÉMON NAME OR ID"/>
                        <button type="submit" className="searchInputSubmit">
                            <FaSearch fill="#236b40" size="40%"/>
                        </button>
                    </div>
                </form>
                <div className="compareSearchListSection">
                        {   pokemonList ?
                            <ul className="compareSearchList">{
                                pokemonList.map((pokemon) => (
                                    <PokemonResult url={pokemon.url} dataChangerFn={setPokemonData}/>
                                ))}
                            </ul>
                            :
                            <ul className="searchList">
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                                <li className="listItemDefault"></li>
                            </ul>
                        }
                    <button className="compareSearchListUpdate" onClick={() => fetchPokemonList(`?limit=10&offset=${Math.ceil((Math.random()*1008))}`)}>
                        <FaRedoAlt fill="#827500" size="50%"/>
                    </button>
                </div>
            </div>
            <span className="credit">Made by Nicholas Campanelli for LOOQBOX</span>
        </section>
    );
}
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import API from "../../services/API";
import PokemonResult from "../components/PokemonResult";
import MainPokemon from "../components/MainPokemon";
import { FaSearch, FaRedoAlt, FaStar } from "react-icons/fa";
import { ReactComponent as MainLight } from "../components/mainLight.svg";
import { ReactComponent as TopBevel } from "../components/topBevel.svg";
import { getCookie, setCookie } from "../../services/cookieUtil";
import "./index.css";

export default function Landing() {
    
    const [pokemonList, setPokemonList] = useState();
    const [mainPokemonList, setMainPokemonList] = useState();
    const [pokemonData, setPokemonData] = useState();
    const [searchText, setSearchText] = useState("");
    const mainLightRef = useRef();
    const history = useHistory();

    useEffect(() => {
        fetchPokemonList(`?limit=10&offset=${Math.ceil((Math.random()*1008))}`);
        setMainPokemonList( getCookie("mainPokemonList") ? 
                            getCookie("mainPokemonList").split("|").filter(el => el) :
                            undefined);
        // eslint-disable-next-line
    }, []);

    async function fetchPokemonList(options) {
        await API.get(`/pokemon${options}`).then(response => {
            setPokemonList();
            setPokemonList(response.data.results);
            blinkLight();
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

        blinkLight();
        
        if(searchText)
            fetchPokemon(searchText);
    }

    function gotoCompare(){
        history.push("/compare", {
            selectedPokemon: pokemonData,
            fetchedList: pokemonList
        });
    }

    function addSelectedPokemonToMain(){
        const previousList = getCookie("mainPokemonList") ? 
                             getCookie("mainPokemonList").split("|").filter(el => el) :
                             [];
        const pokemonId = pokemonData.id.toString();

        if(previousList.length < 3){
            var tempList = previousList;
                tempList.push(pokemonId);
            setCookie("mainPokemonList",
                    ( getCookie("mainPokemonList") + pokemonId + "|" ),
                    100000);
            setMainPokemonList();
            setMainPokemonList(tempList);
        } else {
            var tempArray = previousList;
                tempArray.splice(0, 1);
                tempArray.push(pokemonId);
            const newList = tempArray.join("|");
            setCookie("mainPokemonList", newList, 100000);
            setMainPokemonList();
            setMainPokemonList(tempArray);
        }
    }

    function blinkLight(){
        mainLightRef.current.style.filter = "brightness(200%)";
        setTimeout(() => {
            mainLightRef.current.style.filter = "brightness(100%)";
        }, 100);
        setTimeout(() => {
            mainLightRef.current.style.filter = "brightness(200%)";
        }, 200);
        setTimeout(() => {
            mainLightRef.current.style.filter = "brightness(100%)";
        }, 300);
        setTimeout(() => {
            mainLightRef.current.style.filter = "brightness(200%)";
        }, 400);
        setTimeout(() => {
            mainLightRef.current.style.filter = "brightness(100%)";
        }, 500);
    }

    return (
        <section className="mainSection">
            <MainLight className="mainLight" ref={mainLightRef}/>
            <TopBevel className="topBevel"/>
            <article className="infoSection">
                <div className="infoDiv">
                    {   pokemonData ?
                        <div className="dataDiv">
                            <div className="dataMain">
                                <img src={pokemonData.sprites.front_default} alt="Pokémon"/>
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
                                <h2 className="dataId">
                                #  { pokemonData.id < 10 ? "0000" : ( pokemonData.id < 100 ? "000" : ( pokemonData.id < 1000 ? "00" : ( pokemonData.id < 10000 ? "0" : "" ) ) )}
                                {pokemonData.id}</h2>
                                <h2 className="dataName">{pokemonData.name}</h2>
                            </div>
                        </div>
                        :
                        ""
                    }
                    { pokemonData ?
                        <button className="infoDivMain" onClick={() => addSelectedPokemonToMain()}><FaStar fill="#aa0704" size="50%"/></button>
                        :
                        <button className="infoDivMain" disabled></button>
                    }
                    { pokemonData ?
                        <button className="infoDivCompare" onClick={() => gotoCompare()}>Compare</button>
                        :
                        <button className="infoDivCompare" disabled></button>
                    }
                </div>
            </article>
            <div className="searchSection">
                <form className="searchSectionForm" onSubmit={e => formSubmit(e)}>
                    <div className="searchInputDiv">
                        <input type="search" className="searchInput" value={searchText} onChange={e => setSearchText(e.target.value)} autoFocus placeholder="POKÉMON NAME OR ID"/>
                        <button type="submit" className="searchInputSubmit">
                            <FaSearch fill="#236b40" size="40%"/>
                        </button>
                    </div>
                </form>
                <div className="searchListSection">
                        {   pokemonList ?
                                <ul className="searchList">{
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
                        <button className="searchListUpdate" onClick={() => fetchPokemonList(`?limit=10&offset=${Math.ceil((Math.random()*1000))}`)}>
                            <FaRedoAlt fill="#827500" size="50%"/>
                        </button>
                </div>
                <div className="mainPokemonSection">
                    { mainPokemonList ?
                        <ul className="mainPokemonList">{
                            mainPokemonList.map((pokemonId) => (
                                <MainPokemon id={pokemonId} dataChangerFn={setPokemonData}/>
                            ))
                        }
                        </ul>
                        :
                        ""
                    }
                </div>
            </div>
            <span className="credit">Made by Nicholas Campanelli for LOOQBOX</span>
        </section>
    );
}
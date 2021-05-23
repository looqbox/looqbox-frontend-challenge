import React, { useState, useEffect } from "react";

import Swal from "sweetalert2";

import pokeService from "../services/pokemon-services";

const Pokedex = (props) => {
  const { searchedPokemon } = props;
  const [pokedexOnOff, setPokedexOnOff] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [pokeInfo, setPokeInfo] = useState();

  useEffect(() => {
    if (searchedPokemon) {
      getPokemon(searchedPokemon);
    }
  }, [searchedPokemon]);

  //object to handle all the weaknesses and resistance
  const weaknessAndResistances = [
    { type: "fire", weak: "water", resistance: "grass" },
    { type: "water", weak: "Electric", resistance: "fire" },
    { type: "darkness", weak: "Fighting", resistance: "Fighting" },
    { type: "dragon", weak: "Water", resistance: "Fire" },
    { type: "fairy", weak: "Water", resistance: "Fighting" },
    { type: "grass", weak: "Fire", resistance: "Water" },
    { type: "fairy", weak: "Water", resistance: "Fighting" },
    { type: "fighting", weak: "Fairy", resistance: "Darkness" },
    { type: "normal", weak: "darkness", resistance: "Fairy" },
  ];

  const getPokemon = async (name = "bulbasaur") => {
    let pokemon;
    try {
      let data = await pokeService.get(name);
      if (data.id) {
        pokemon = data;
        let pokemonSpecies = await pokeService.getSpecies(name);
        pokemon.species = pokemonSpecies;
        setPokemon(pokemon);
      } else {
        Swal.fire(
          "Your pokemon couldn't be found!",
          "Please, make sure you are typing its name or ID correctly!",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Your pokemon couldn't be found!",
        "Please, make sure you are typing its name or ID correctly!",
        "error"
      );
    }
  };

  //renders the pokemon info on screen
  const renderPokeInfo = (pokeInfo, index) => {
    setPokeInfo(pokeInfo[index]);
  };

  //to explore the pokemons
  const handleControls = (direction) => {
    if (direction === "down" && pokemon.id !== 1) {
      getPokemon(pokemon.id - 1);
    } else if (direction === "up") {
      getPokemon(pokemon.id + 1);
    }
    setPokeInfo("");
  };

  //to get the weakness or resistance on screen
  const handleWhiteSquares = (typeToShow) => {
    weaknessAndResistances.forEach((type) => {
      if (type.type === pokemon.types[0].type.name) {
        if (typeToShow === "weakness") {
          setPokeInfo(`It is weak against ${type.weak}`);
        } else {
          setPokeInfo(`It resist attacks of ${type.resistance} type`);
        }
      }
    });
  };
  //to turn on / off the pokedex
  const togglePokedex = () => {
    setPokedexOnOff(!pokedexOnOff);
  };

  if (pokemon) {
    let pokemonId;
    if (pokemon.id < 10) {
      pokemonId = ("00" + pokemon.id).slice(-3);
    } else {
      pokemonId = ("0" + pokemon.id).slice(-3);
    }
    let type = pokemon.types[0].type.name;
    let height = pokemon.height * 2.54;
    let weight = pokemon.weight * (0.453592).toFixed(2);

    const pokeInfoArr = [
      `Height: ${height} cm . Weight: ${weight} kgs `,
      `Favorite move: ${pokemon.moves[0].move.name}`,
      `Its main type is: ${pokemon.types[0].type.name}`,
      `Its first ability is: ${pokemon.abilities[0].ability.name}`,
      `Its second ability is: ${pokemon.abilities[1].ability.name}`,
    ];

    return (
      <>
        <div className="pokedex">
          <div className="left-panel">
            <div className="left-top-container">
              <svg height="100" width="225" className="left-svg">
                <polyline
                  points="0,75 70,75 90,38 224,38"
                  style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
                />
              </svg>
              <div className="lights-container">
                <div className="big-light-boarder">
                  <div className="big-light blue">
                    <div className="big-dot light-blue" />
                  </div>
                </div>
                <div className="small-lights-container">
                  <div className="small-light red">
                    <div className="dot light-red" />
                  </div>
                  <div className="small-light yellow">
                    <div className="dot light-yellow" />
                  </div>
                  <div className="small-light green">
                    <div className="dot light-green" />
                  </div>
                </div>
              </div>
            </div>

            <div className="screen-container">
              <div className="screen">
                <div className="top-screen-lights">
                  <div className="mini-light red" />
                  <div className="mini-light red" />
                </div>
                {pokedexOnOff ? (
                  <div
                    id="main-screen"
                    style={{
                      backgroundImage: `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png)`,
                    }}
                  />
                ) : (
                  <div
                    id="main-screen"
                    style={{
                      backgroundImage: null,
                    }}
                  />
                )}

                <div className="bottom-screen-lights">
                  <div className="small-light red">
                    <div className="dot light-red" />
                  </div>
                  <div className="burger">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                  </div>
                </div>
              </div>
            </div>

            <div className="buttons-container">
              <div className="upper-buttons-container">
                <div className="big-button" onClick={togglePokedex} />
                <div className="long-buttons-container">
                  <div className="long-button red" />
                  <div className="long-button light-blue" />
                </div>
              </div>
              <div className="nav-buttons-container">
                <div className="dots-container">
                  <div>.</div>
                  <div>.</div>
                </div>
                <div className="green-screen">
                  <span id="name-screen">{pokemon.name}</span>
                </div>
                <div className="right-nav-container">
                  <div className="nav-button">
                    <div className="nav-center-circle" />
                    <div
                      className="nav-button-vertical-up"
                      onClick={() => handleControls("up")}
                    />
                    <div
                      className="nav-button-vertical-down"
                      onClick={() => handleControls("down")}
                    />
                    <div
                      className="nav-button-horizontal-right"
                      onClick={() => handleControls("up")}
                    >
                      <div className="border-top" />
                      <div className="border-bottom" />
                    </div>
                    <div
                      className="nav-button-horizontal-left"
                      onClick={() => handleControls("down")}
                    />
                  </div>
                  <div className="bottom-right-nav-container">
                    <div className="small-light red">
                      <div className="dot light-red" />
                    </div>
                    <div className="dots-container">
                      <div className="black-dot">.</div>
                      <div className="black-dot">.</div>
                      <div className="black-dot">.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="empty-container">
              <svg height="100%" width="100%">
                <polyline
                  points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                  style={{ fill: "#f2f2f2", stroke: "none", strokeWidth: 3 }}
                />
                <polyline
                  points="0,40 138,40 158,75 250,75"
                  style={{ fill: "none", stroke: "black", strokeWidth: 3 }}
                />
              </svg>
            </div>

            <div className="top-screen-container">
              <div id="about-screen" className="right-panel-screen">
                {pokeInfo}
              </div>
            </div>

            <div className="square-buttons-container">
              <div className="blue-squares-container">
                {pokeInfoArr.map((_, index) => {
                  return (
                    <div
                      className="blue-square"
                      onClick={() => renderPokeInfo(pokeInfoArr, index)}
                    ></div>
                  );
                })}
              </div>
            </div>

            <div className="center-buttons-container">
              <div className="center-left-container">
                <div className="small-reds-container">
                  <div className="small-light red">
                    <div className="dot light-red"></div>
                  </div>
                  <div className="small-light red">
                    <div className="dot light-red"></div>
                  </div>
                </div>
                <div className="white-squares-container">
                  <div
                    className="white-square"
                    onClick={() => handleWhiteSquares("weakness")}
                  />
                  <div
                    className="white-square"
                    onClick={() => handleWhiteSquares("resistance")}
                  />
                </div>
              </div>
              <div className="center-right-container">
                <div className="thin-buttons-container">
                  <div className="thin-button"></div>
                  <div className="thin-button"></div>
                </div>
                <div className="yellow-button yellow">
                  <div className="big-dot light-yellow"></div>
                </div>
              </div>
            </div>

            <div className="bottom-screens-container">
              <div id="type-screen" className="right-panel-screen">
                {type}
              </div>
              <div id="id-screen" className="right-panel-screen">
                {pokemonId}
              </div>
            </div>
          </div>
        </div>
        <div className="pokedex-title">
          <h1>
            {" "}
            Play with the Pokedex buttons to get more info about the pokemon!{" "}
          </h1>
          ;
        </div>
      </>
    );
  } else {
    return (
      <div className="pokedex-title">
        <h1> Search for a Pokemon to look it up on the pokedex! </h1>;
      </div>
    );
  }
};
export default Pokedex;

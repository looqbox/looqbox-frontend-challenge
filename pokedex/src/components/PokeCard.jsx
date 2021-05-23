import React from "react";
import { backgrounds, ballTypes } from "../resources/media-files";

export const PokeCard = (props) => {
  const { pokemon } = props;
  const pokemonLevel = Math.floor(Math.random() * 100);

  if (pokemon !== undefined) {
    const pokemonType = pokemon.types[0].type.name;

    const renderPokeInfo = () => {
      let type = pokemon.types[0].type.name;
      //assuming height is in cm and weight in lbs, these are the conversions
      let height = pokemon.height * 2.54;
      let weight = pokemon.weight * (0.453592).toFixed(2);
      return `${
        //this is to capitalize first letter, could be done in css but then everything Will Be Capitalized
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      } is a ${type} Pokemon. Height ${height} cm, Weight: ${weight} kgs`;
    };

    const renderPokeMoves = () => {
      let selectedMoves = [];
      //from the API, we have 20+ moves, we select the first 5 in those cases where there are many moves (i.e.: Ditto has just one!)
      if (pokemon.moves[0].length > 1) {
        for (let i = 0; i < 5; i++) {
          selectedMoves.push(pokemon.moves[i].move.name);
        }
      } else {
        selectedMoves.push(pokemon.moves[0].move.name);
      }

      return selectedMoves.map((move) => {
        return <li>{move}</li>;
      });
    };

    const pokemonRegion = () => {
      //first 151 Gen I, 152 to 250 is Gen II (sry I'm old)
      if (pokemon.id > 0 && pokemon.id <= 151) {
        return "Kanto";
      } else if (pokemon.id > 151 && pokemon.id <= 250) {
        return "Johto";
      } else {
        return "Gen III+";
      }
    };

    const getFlavorText = () => {
      //There are many text descriptions in many languages, the first 15 are in english
      return pokemon.species.flavor_text_entries[
        (Math.random() * 15 + 1).toFixed(0)
      ].flavor_text;
    };

    //This is to get pokemon weakness by the type
    const pokemonWeakness = () => {
      switch (pokemonType) {
        case "fire":
          return ballTypes["water"];
        case "water":
          return ballTypes["electric"];
        case "electric":
          return ballTypes["normal"];
        case "darkness":
          return ballTypes["fighting"];
        case "dragon":
          return ballTypes["fairy"];
        case "grass":
          return ballTypes["fire"];
        case "fairy":
          return ballTypes["grass"];
        case "fighting":
          return ballTypes["fairy"];
        case "normal":
          return ballTypes["darkness"];

        default:
          return ballTypes["normal"];
      }
    };
    //This is to get pokemon resistances by the type

    const pokemonResistance = () => {
      switch (pokemonType) {
        case "fire":
          return ballTypes["grass"];
        case "water":
          return ballTypes["fire"];
        case "electric":
          return ballTypes["normal"];
        case "darkness":
          return ballTypes["fighting"];
        case "dragon":
          return ballTypes["fire"];
        case "grass":
          return ballTypes["water"];
        case "fairy":
          return ballTypes["fighting"];
        case "fighting":
          return ballTypes["darkness"];
        default:
          return ballTypes["normal"];
      }
    };

    const pokemonGame = () => {
      return pokemon.game_indices[0].version.name;
    };

    return (
      <>
        <div className="card">
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${backgrounds[pokemonType]})`,
              margin: "1em",
              height: "80%",
            }}
          >
            <div className="base-info">
              <p>First game: Pokemon {pokemonGame()}</p>
              <p>Region: {pokemonRegion()}</p>
            </div>
            <hr className="first-hr" />
            <div className="title">
              <h4>{`${pokemon.name}, level ${pokemonLevel}`}</h4>

              <img
                src={ballTypes[pokemonType]}
                alt="fire type"
                height="20px"
                width="20px"
              />
            </div>
            <h6 className="stage-text">back</h6>
            <img
              className="stage-img"
              src={pokemon.sprites.back_default}
              alt="Pokemon Stage"
              width="35px"
              height="auto"
            />
            <img
              className="main-img"
              src={pokemon.sprites.front_default}
              alt="Pokemon Main"
              width="180px"
              height="180px"
            />
            <div className="banner">
              <p>{renderPokeInfo()}</p>
            </div>
            <div className="main-text">
              Some moves are:
              <ul className="moves-list">{renderPokeMoves()}</ul>
            </div>
            <hr className="second-hr" />
            <div className="ratings">
              <div className="container">
                <p>Weakness</p>
                <div className="weakness">
                  <img
                    src={pokemonWeakness()}
                    width="10px"
                    height="10px"
                    alt="waterTyped"
                  />
                </div>
              </div>
              <div className="container">
                <p>HP</p>
                <h4 className="hp">
                  {
                    //makes total HP random by level, simulating the game when you catch a pokemon
                    pokemonLevel * (Math.floor(Math.random() * (2 - 3) + 2) + 2)
                  }
                </h4>
              </div>
              <div className="container">
                <p>Resistance</p>
                <div className="resistance">
                  <img
                    src={pokemonResistance()}
                    width="10px"
                    height="10px"
                    alt="resistance"
                  />
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <p>{getFlavorText()}</p>
            </div>
            <div className="tiny-txt">
              <p>©1995 Nintendo gamefreak ©1999 Wizards. 07/102</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

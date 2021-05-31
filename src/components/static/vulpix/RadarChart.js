import React from "react";
import { connect } from "react-redux";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const PokeChart = (props) => {
  const pokemon = require("./vulpix.json");

  // normalizar valores do grafico a partir do maior valor base de pokemon stats
  const normalizer = Math.max(
    pokemon.stats[0].base_stat,
    pokemon.stats[1].base_stat,
    pokemon.stats[2].base_stat,
    pokemon.stats[3].base_stat,
    pokemon.stats[4].base_stat,
    pokemon.stats[5].base_stat
  );

  const data = [
    {
      data: {
        hp: pokemon.stats[0].base_stat / normalizer,
        attack: pokemon.stats[1].base_stat / normalizer,
        defense: pokemon.stats[2].base_stat / normalizer,
        special_attack: pokemon.stats[3].base_stat / normalizer,
        special_defense: pokemon.stats[4].base_stat / normalizer,
        speed: pokemon.stats[5].base_stat / normalizer,
      },
      meta: { color: "blue" },
    },

    // é possivel sobrepor outros dados no mesmo gráfico. Para isso, basta adicionar outro conjunto data
  ];

  const captions = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    special_attack: "Special Attack",
    special_defense: "Special Defense",
    speed: "Speed",
  };

  return (
    <div>
      <RadarChart captions={captions} data={data} size={300} />
    </div>
  );
};

const mapStateToProps = (store) => ({
  pokemon: store.clickState.pokemon,
  pokemonDescricao: store.clickState.pokemonDescricao,
  pokemonEntry: store.clickState.pokemonEntry,
});

const conectado = connect(mapStateToProps)(PokeChart);

export { conectado as PokeChart };

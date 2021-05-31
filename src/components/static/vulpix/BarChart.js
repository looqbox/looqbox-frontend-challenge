import React from "react";
import { connect } from "react-redux";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PokeBarChart = (props) => {
  const pokemon = require("./vulpix.json");

  const data = [
    {
      name: "HP",
      stat: pokemon.stats[0].base_stat,
    },
    {
      name: "Attack",
      stat: pokemon.stats[1].base_stat,
    },
    {
      name: "Defense",
      stat: pokemon.stats[2].base_stat,
    },
    {
      name: "Special Attack",
      stat: pokemon.stats[3].base_stat,
    },
    {
      name: "Special Defense",
      stat: pokemon.stats[4].base_stat,
    },
    {
      name: "Speed",
      stat: pokemon.stats[5].base_stat,
    },
  ];

  return (
    <div>
      <ComposedChart
        layout="vertical"
        width={450}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />

        <Bar dataKey="stat" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </div>
  );
};

const mapStateToProps = (store) => ({
  pokemon: store.clickState.pokemon,
  pokemonDescricao: store.clickState.pokemonDescricao,
  pokemonEntry: store.clickState.pokemonEntry,
});

const conectado = connect(mapStateToProps)(PokeBarChart);

export { conectado as PokeBarChart };

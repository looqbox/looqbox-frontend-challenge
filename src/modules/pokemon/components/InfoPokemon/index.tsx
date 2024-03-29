import { Pokemon } from "../../types";
import { Col, Row } from 'antd/lib';
import Image from "next/image";
import ChartComponent from "@/components/ui/Chart";
import { colors } from "../../styles/colors";

export type InfoPokemonProps = {
    pokemon: Pokemon
}

export default function InfoPokemon({pokemon}: InfoPokemonProps) {

  const id = pokemon.id.toString().padStart(3, '0');

  return (
    <div style={{width: '90%', margin: '0 auto'}}>
      <h2>#{id} - {pokemon.name}</h2>
      <Row>
        <Col span={24} md={12}>
          <Image src={pokemon.image.vector} alt={pokemon.name} width="400" height="400" style={{padding: '10px'}} />
        </Col>
        <Col span={24} md={12}>
          <h3>Stats</h3>
          <ChartComponent stats={pokemon.stats} color={colors[pokemon.types[0]]} />
          <h3>Info</h3>
          <ul>
            <li>Height: {pokemon.height / 10} m</li>
            <li>Weight: {pokemon.weight / 10} kg</li>
            <li>Types: {pokemon.types.map((type, i)=> {
              return (
                <span key={i}>{type} </span>
              );
            })}</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
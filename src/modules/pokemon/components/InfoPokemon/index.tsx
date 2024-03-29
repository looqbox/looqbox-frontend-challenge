import { Pokemon } from "../../types";
import { Col, Row } from 'antd/lib';
import Image from "next/image";
import ChartComponent from "@/components/ui/Chart";
import { colors } from "../../styles/colors";
import TypesBadge from "../TypesBadge";
import { Flex } from "antd/lib";
import ButtonComponent from "@/components/ui/Button";
import { useDispatch } from "react-redux";
import { removePokemon } from "@/modules/pokemon/store";

export type InfoPokemonProps = {
    pokemon: Pokemon;
}

export default function InfoPokemon({pokemon}: InfoPokemonProps) {
  const id = pokemon.id.toString().padStart(3, '0');
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(removePokemon());
  }

  function handleFavorite() {
    //todo: implement favorite
    alert('Add to favorites');
  }

  return (
    <div style={{width: '90%', margin: '0 auto'}}>
      <Row>
        <Col span={24} md={12} offset={6}>
          <Flex vertical align="center">
            <Flex justify="space-between" style={{width: '100%'}}>
              <ButtonComponent onClick={() => handleBack()}>Back</ButtonComponent>
              <h1 style={{textTransform: 'capitalize'}}>#{id} - {pokemon.name}</h1>
              <ButtonComponent onClick={() => handleFavorite()}>Favorite</ButtonComponent>
            </Flex>
            <TypesBadge types={pokemon.types} />
            <Image src={pokemon.image.vector} alt={pokemon.name} width="400" height="400" style={{padding: '10px'}} />
          </Flex>
          <ChartComponent stats={pokemon.stats} color={colors[pokemon.types[0]]} />
          <h3>Info</h3>
          <ul>
            <li>Height: {pokemon.height / 10} m</li>
            <li>Weight: {pokemon.weight / 10} kg</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
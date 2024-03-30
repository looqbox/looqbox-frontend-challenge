import ButtonComponent from "@/components/ui/Button";
import ChartComponent from "@/components/ui/Chart";
import { Col, Row } from 'antd/lib';
import Image from "next/image";
import { Pokemon } from "../../types";
import { colors } from "../../styles/colors";
import TypesBadge from "../TypesBadge";
import { Flex } from "antd/lib";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "@/modules/pokemon/store";
import { GiWeight } from "react-icons/gi";
import { MdHeight } from "react-icons/md";
import { addFavorite, removeFavorite } from "@/modules/pokemon/store";

export type InfoPokemonProps = {
    pokemon: Pokemon;
}

export default function InfoPokemon({pokemon}: InfoPokemonProps) {
  const id = pokemon.id.toString().padStart(3, '0');
  const favorites = useSelector((state: any) => state.pokemonFavorites);
  const dispatch = useDispatch();

  const isFavorite: boolean = favorites.results.find((item: Pokemon) => item.id === pokemon.id) !== undefined;

  function handleBack() {
    dispatch(removePokemon());
  }

  function handleFavorite() {
    if(isFavorite) {
      dispatch(removeFavorite(pokemon));
      return;
    }

    dispatch(addFavorite(pokemon));
  }

  return (
    <Row>
      <Col xs={{ span: 24 }} lg={{ offset: 6, span: 12 }}>
        <Flex vertical align="center">
          <Flex justify="space-between" style={{padding: '10px'}}>
            <ButtonComponent onClick={() => handleBack()}>Back</ButtonComponent>
            <h1 style={{textTransform: 'capitalize', margin: "0 10px"}}>#{id} - {pokemon.name}</h1>
            <ButtonComponent styleType={isFavorite ? "default" : "primary"} onClick={() => handleFavorite()}>{isFavorite ? "Remove" : "Favorite"}</ButtonComponent>
          </Flex>
          <TypesBadge types={pokemon.types} />
          <Image src={pokemon.image.vector} alt={pokemon.name} width="300" height="300" style={{padding: '10px'}} />
          <span>
            <p><GiWeight /> {pokemon.weight / 10} kg <MdHeight /> {pokemon.height / 10} m</p>
          </span>
        </Flex>
        <ChartComponent stats={pokemon.stats} color={colors[pokemon.types[0]]} />
      </Col>
    </Row>
  );
}
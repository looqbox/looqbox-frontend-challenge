import React, { useEffect } from "react";
import {
  Breadcrumb,
  Image,
  Spin,
  Avatar,
  Typography,
  Flex,
  Row,
  Col,
} from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../components/Page";
import PokemonTypes from "./PokemonTypes";
import { AppDispatch, RootState } from "../../store";
import { searchPokemon } from "../../store/pokemonSlicer";
import emptyImg from "../../../assets/no-pictures.png";
import "./styles.css";
import InfoCard from "./InfoCard";
import Stats from "./Stats";
import { capitalizeString } from "../../utils";

const { Title } = Typography;

const Character: React.FC = () => {
  const { character } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const pokemonState = useSelector((state: RootState) => state.pokemon);
  const { loading, data } = pokemonState;
  const activePokemon = data[0];

  useEffect(() => {
    dispatch(searchPokemon(character));
  }, []);

  return (
    <Page>
      {loading && <Spin tip="Loading" size="large" fullscreen />}
      {!loading && data.length > 0 && activePokemon.abilities && (
        <>
          <Breadcrumb
            items={[
              { title: <a href="/">Home</a> },
              { title: capitalizeString(activePokemon.name) },
            ]}
            className="breadcrumb"
          />

          <Flex align="center" className="info-wrapper">
            <Avatar size="large" className="pokemon-avatar">
              <Image
                width={150}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${activePokemon.id}.png`}
                fallback={emptyImg}
                preview={false}
              />
            </Avatar>
            <Title className="pokemon-name">
              {activePokemon.name} #{activePokemon.id}
            </Title>
          </Flex>

          <Row style={{ width: "100%" }}>
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              <InfoCard character={activePokemon} />
              <PokemonTypes character={activePokemon} />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <Stats stats={activePokemon.stats} />
            </Col>
          </Row>
        </>
      )}
    </Page>
  );
};

export default Character;

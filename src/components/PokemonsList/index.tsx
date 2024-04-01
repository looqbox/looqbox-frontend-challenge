import React from "react";
import { useSelector } from "react-redux";
import { Spin, Row, Col, Empty } from "antd";
import { RootState } from "../../store";
import PokemonCard from "../PokemonCard";
import "./styles.css";

const PokemonsList: React.FC = () => {
  const pokemonState = useSelector((state: RootState) => state.pokemon);

  return (
    <div>
      {pokemonState.loading && <Spin tip="Loading" size="large" fullscreen />}

      {!pokemonState.error ? (
        <Row className="cards-row" gutter={[16, 16]} justify="center">
          {pokemonState.data.map((item) => (
            <Col key={item.id}>
              <PokemonCard character={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty description={pokemonState.error} />
      )}
    </div>
  );
};

export default PokemonsList;

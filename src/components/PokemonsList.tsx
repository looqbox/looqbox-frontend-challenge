import React from "react";
import { useSelector } from "react-redux";
import { Spin, Row, Col, Grid } from "antd";
import { RootState } from "../store";
import PokemonCard from "./PokemonCard";

const { useBreakpoint } = Grid;

const PokemonsList: React.FC = () => {
  const pokemonState = useSelector((state: RootState) => state.pokemon);
  const screens = useBreakpoint();
  const isDesktop = screens.sm;

  return (
    <div>
      {pokemonState.loading ? (
        <Spin tip="Loading" size="large" fullscreen />
      ) : (
        <Row
          style={{
            marginBottom: "40px",
            maxWidth: isDesktop ? `992px` : `100vw`,
          }}
          gutter={[16, 16]}
          justify="center"
        >
          {pokemonState.data.map((item: { id: number; name: string }) => (
            <Col key={item.id}>
              <PokemonCard character={item} isDesktop={isDesktop} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default PokemonsList;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { CharmanderCard } from "./static/charmander/CharmanderCard";
import { DialgaCard } from "./static/dialga/PokemonCard";
import { LaprasCard } from "./static/lapras/PokemonCard";
import { LiepardCard } from "./static/liepard/PokemonCard";
import { VulpixCard } from "./static/vulpix/PokemonCard";

const PokemonList = (props) => {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col>
            <CharmanderCard />
          </Col>
          <Col>
            <DialgaCard />
          </Col>
          <Col>
            <LaprasCard />
          </Col>
          <Col>
            <LiepardCard />
          </Col>
          <Col>
            <VulpixCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const conectado = connect()(PokemonList);

export { conectado as PokemonList };

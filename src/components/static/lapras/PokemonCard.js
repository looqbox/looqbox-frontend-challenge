import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import { connect } from "react-redux";
import { PokeBarChart } from "./BarChart";
import { PokeChart } from "./RadarChart";

const LaprasCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);

  const pokemon = require("./lapras.json");
  const pokemonDescricao = require("./laprasDescricao.json");

  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={4} />
          <Card
            tag="a"
            onClick={handleShow}
            style={{ width: "11rem", cursor: "pointer" }}
            className={pokemon.types[0].type.name}
          >
            <Card.Img variant="top" src={pokemon.sprites["front_default"]} />
            <Card.Body>
              <Card.Title>
                <p>
                  <strong>{pokemon.name}</strong>
                </p>
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pokemon.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <img
                  src={pokemon.sprites["front_default"]}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col xs={12} md={8}>
                <p>
                  <strong>ID:</strong> {pokemonDescricao.id}
                </p>
                <p>
                  <strong>Pokemon type:</strong> {pokemon.types[0].type.name}
                </p>

                <p>
                  A POKéMON that has been over­ hunted almost to extinction. It
                  can ferry people across the water.
                </p>
              </Col>
            </Row>
          </Container>

          <Collapse in={open}>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <p>
                    <strong>Height:</strong>
                    {Number(pokemon.height * 0.1).toFixed(2)} m
                  </p>
                </Col>
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}>
                  <p>
                    <strong>Weight:</strong>
                    {Number(pokemon.weight * 0.1).toFixed(2)} kg
                  </p>
                </Col>
              </Row>
              <PokeBarChart />
              <PokeChart />
            </Container>
          </Collapse>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setOpen(!open)}>
            Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (store) => ({
  pokemon: store.clickState.pokemon,
  pokemonDescricao: store.clickState.pokemonDescricao,
  pokemonEntry: store.clickState.pokemonEntry,
});

const conectado = connect(mapStateToProps)(LaprasCard);

export { conectado as LaprasCard };

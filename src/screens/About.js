import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

class AboutScreen extends React.Component {
  state = {
    inputValue: "",
    pokemon: null,
  };

  render() {
    return (
      <div>
        <div
          className="container"
          style={{ color: "white", background: "#333", height: "20rem" }}
        >
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/137.svg"
                  style={{ height: "15rem", marginTop: "3rem" }}
                />
              </Col>
              <Col xs={12} md={8}>
                <h1 style={{ marginTop: "3rem" }}>Instruções</h1>
                <h2 style={{ marginTop: "5rem" }}>
                  Insira o pokémon desejado pelo seu nome ou #id.
                </h2>
                <h2>
                  Se preferir, pode selecionar um pokémon da galeria, ou pode
                  tentar a sorte ao clicar no dado
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <div>
            <Container>
              <Row
                style={{
                  color: "white",
                  background: "#a92023",
                  height: "20rem",
                }}
              >
                <Col xs={12} md={8}>
                  <h1 style={{ marginTop: "3rem" }}>Sobre o projeto</h1>
                  <h2 style={{ marginTop: "5rem" }}>
                    Este projeto foi desenvolvido em ReactJS, com integração a
                    API PokéAPI
                  </h2>
                </Col>
                <Col xs={6} md={4}>
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/202.svg"
                    style={{ height: "15rem", marginTop: "3rem" }}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

const conectado = connect()(AboutScreen);

export { conectado as AboutScreen };

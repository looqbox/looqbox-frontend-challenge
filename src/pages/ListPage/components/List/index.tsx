import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { getPokemons } from "../../../../services/listPage/getPokemons";
import { lisPageStructure } from "../../../../@types/listPage";
import { useListPageContext } from "../../../../context/listPageContext";
import { Container, Button } from "./styles";
import Cards from "../cards";

const List: React.FC = () => {
  const { setPokemonOffSet, pokemonOffSet, pokemonList, setPokemonList } =
    useListPageContext();
  const request = async () => {
    setPokemonOffSet(pokemonOffSet + 20);
    await getPokemons(pokemonOffSet).then((data) => {
      setPokemonList(data.results);
    });
  };
  useEffect(() => {
    request();
  }, []);
  const handleClick = async () => {
    setPokemonOffSet(pokemonOffSet + 20);
    await getPokemons(pokemonOffSet).then((data) => {
      var auxList = pokemonList.concat(data.results);
      setPokemonList(auxList);
    });
  };
  return (
    <>
      <Container>
        <Row style={{ margin: 0 }}>
          {pokemonList.map((information: lisPageStructure, index: any) => {
            return (
              <Col
                sm={6}
                md={4}
                lg={3}
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Cards link={information.url} />
              </Col>
            );
          })}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleClick}>Load More</Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default List;

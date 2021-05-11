import React, { useState, useEffect } from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import { useInformationPageContext } from "../../../../context/informationPageContext";
import { getDescription } from "../../../../services/informationPage";
import {
  Container,
  TextContent,
  Number,
  PokemonName,
  TagContent,
  Tag,
  Text,
  SpecsContent,
  SpecTextContent,
  SpecImage,
  TitleCol,
  SubtitleCol,
  SubtitleAbilities,
} from "./styles";
const Information: React.FC = () => {
  const [auxDescription, setAuxDescription] = useState("");
  const { pokemonInformation } = useInformationPageContext();
  function isEmpty(obj: any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  useEffect(() => {
    const request = async () => {
      await getDescription(pokemonInformation.id).then((data) => {
        if (data !== "Not Found") {
          data.descriptions.map((i: any) => {
            if (i.language.name === "en") {
              setAuxDescription(i.description);
              return "";
            } else return "";
          });
        }
      });
    };
    if (!isEmpty(pokemonInformation)) {
      request();
    }
  }, [pokemonInformation]);

  return (
    <Container>
      {isEmpty(pokemonInformation) ? (
        <Spinner
          animation="border"
          role="status"
          style={{ margin: "50px auto", width: "100px", height: "100px" }}
        />
      ) : (
        <>
          <TextContent>
            <Number>
              N°{" "}
              {pokemonInformation.id < 10
                ? `00${pokemonInformation.id}`
                : pokemonInformation.id < 100
                ? `0${pokemonInformation.id}`
                : pokemonInformation.id}
            </Number>
            <PokemonName>{pokemonInformation.name}</PokemonName>
            <TagContent>
              {pokemonInformation.types.map((i: any, index: any) => {
                return (
                  <Tag
                    key={index}
                    style={{
                      backgroundColor: `var(--tag_${i.type.name})`,
                    }}
                  >
                    {i.type.name}
                  </Tag>
                );
              })}
            </TagContent>
            <Text>{auxDescription}</Text>
          </TextContent>
          <SpecsContent>
            <SpecTextContent
              style={{
                backgroundColor: `var(--background_${pokemonInformation.types[0].type.name})`,
              }}
            >
              <Col md={6} style={{ marginBottom: "24px" }}>
                <Row>
                  <TitleCol>Heigth:</TitleCol>
                  <SubtitleCol>{pokemonInformation.height / 10} m</SubtitleCol>
                </Row>
              </Col>
              <Col md={6} style={{ marginBottom: "24px" }}>
                <Row>
                  <TitleCol>Weight:</TitleCol>
                  <SubtitleCol>{pokemonInformation.weight / 10} Kg</SubtitleCol>
                </Row>
              </Col>
              <Col md={6} style={{ marginBottom: "24px" }}>
                <Row>
                  <TitleCol>Base experience:</TitleCol>
                  <SubtitleCol>
                    {pokemonInformation.base_experience} XP
                  </SubtitleCol>
                </Row>
              </Col>
              <Col md={6} style={{ marginBottom: "24px" }}>
                <Row>
                  <TitleCol>Abilities:</TitleCol>
                  <SubtitleAbilities>
                    {pokemonInformation.abilities.map(
                      (data: any, index: number) => {
                        return <li key={index}>{data.ability.name}</li>;
                      }
                    )}
                  </SubtitleAbilities>
                </Row>
              </Col>
              <Col md={6} style={{ marginBottom: "24px" }}>
                <Row>
                  <TitleCol>Species:</TitleCol>
                  <SubtitleCol>{pokemonInformation.species.name}</SubtitleCol>
                </Row>
              </Col>
            </SpecTextContent>
            <SpecImage
              src={
                pokemonInformation.sprites.other.dream_world.front_default ||
                pokemonInformation.sprites.other["official-artwork"]
                  .front_default
              }
              alt="Pokemon ilustration image"
            />
          </SpecsContent>
        </>
      )}
    </Container>
  );
};

export default Information;

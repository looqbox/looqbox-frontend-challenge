import React, { useEffect, useState, memo } from "react";
import { getPokemonInformation } from "../../../../services/listPage/getPokemons";
import { PokemionInformationStructure } from "../../../../@types/pokemonInformation";
import { Link } from "react-router-dom";
import {
  Container,
  NumberId,
  Image,
  PokemonName,
  TagContent,
  Tag,
  ContentWrapper,
} from "./styles";
import { Spinner } from "react-bootstrap";

export interface Props {
  link: string;
}

const Cards: React.FC<Props> = ({ link }) => {
  function isEmpty(obj: any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  const [information, setInformation] =
    useState<PokemionInformationStructure>();
  useEffect(() => {
    const request = async () => {
      await getPokemonInformation(link).then((data) => {
        setInformation(data);
      });
    };
    request();
  });
  return (
    <>
      {!information ? (
        <Container style={{ minHeight: "250px" }}>
          <Spinner
            animation="border"
            role="status"
            style={{ margin: "50px auto", width: "100px", height: "100px" }}
          ></Spinner>
        </Container>
      ) : (
        <>
          <Link
            to={`information/${information.id}`}
            style={{ width: "100%", height: "100%", textDecoration: "none" }}
          >
            <Container
              style={{
                backgroundColor: `var(--background_${information.types[0].type.name})`,
              }}
            >
              <ContentWrapper>
                <NumberId>
                  N°{" "}
                  {information.id < 10
                    ? `00${information.id}`
                    : information.id < 100
                    ? `0${information.id}`
                    : information.id}
                </NumberId>
                <Image
                  src={
                    information.sprites.other.dream_world.front_default ||
                    information.sprites.other["official-artwork"].front_default
                  }
                  alt="Pokemon ilustration image"
                />
              </ContentWrapper>
              <ContentWrapper>
                <PokemonName>{information.name}</PokemonName>
                <TagContent>
                  {information.types.map((i, index) => {
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
              </ContentWrapper>
            </Container>
          </Link>
        </>
      )}
    </>
  );
};

export default memo(Cards);

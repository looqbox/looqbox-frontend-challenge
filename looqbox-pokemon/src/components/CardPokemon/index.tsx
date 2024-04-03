import { useEffect, useState } from "react";
import * as S from "./styles";
import { Api } from "../../services/ApiConfig";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

interface ICardPokemon {
  name: string;
}

interface PokemonTypesProps {
  name: string;
}

interface PokemonProps {
  id: string;
  image: string;
  type?: PokemonTypesProps[];
  backgroundColor?: string;
}

const CardPokemon = ({ name }: ICardPokemon) => {
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    Api()
      .get(`/pokemon/${name}`)
      .then((response) => {
        const { id, types, sprites } = response.data;

        setPokemon({
          id,
          image: sprites.other["official-artwork"].front_default,
          type: types.map((pokemonType: any) => {
            // Reconhece a variável como uma chave para os arrays pokemonTypes e colors.type
            const typeName = pokemonType.type.name;

            return {
              name: typeName,
            };
          }),
        });
      });
  }, [name]);

  return (
    <Link to={`/pokemon/${name}`}>
    <S.Wrapper cover={<S.Title>{name.charAt(0).toUpperCase() + name.slice(1)}</S.Title>}>
      <S.Content>
        <S.Image>
          <img src={pokemon.image} width={150} />
        </S.Image>
        <S.SectionType>
          {pokemon.type && (
            <Row gutter={16}>
              {pokemon.type.map((pokemonType) => (
                <Col key={pokemonType.name}>
                  <S.TagType>{pokemonType.name}</S.TagType>
                </Col>
              ))}
            </Row>
          )}
        </S.SectionType>
      </S.Content>
    </S.Wrapper>
    </Link>
  );
};

export default CardPokemon;

import { Col, Input } from "antd";
import * as S from "./styles";
import { Row } from "antd";
import { useEffect, useState } from "react";
import {
  IPokemons,
  PokemonService,
} from "../../services/Pokemon/PokemonService";
import { ApiException } from "../../services/ApiException";
import CardPokemon from "../../components/CardPokemon";

const { Search } = Input;

const Home = () => {
  const [data, setData] = useState<IPokemons>();
  const [pokemonFilter, setPokemonFilter] = useState("");
  
  useEffect(() => {
    PokemonService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setData(result);
      }
    });
  }, []); 
  
  return (
    <S.Wrapper>
      <S.Title>PokéDex</S.Title>
      <Search
        placeholder="Encontre o seu Pokémon"
        value={pokemonFilter}
        onChange={(e) => setPokemonFilter(e.target.value)}
        style={{ minWidth: 300, paddingBottom: 40 }}
        size="large"
      />
      <Row gutter={[16, 16]}>
        {data?.results.filter((data) => data?.name.includes(pokemonFilter)).map((pokemon) => (
          <Col
            key={pokemon.name}
            className="gutter-row"
            xs={24}
            md={12}
            lg={12}
            xl={8}
          >
            <CardPokemon name={pokemon.name} />
          </Col>
        ))}
      </Row>
    </S.Wrapper>
  );
};

export default Home;

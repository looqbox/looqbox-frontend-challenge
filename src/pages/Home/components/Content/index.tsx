import { FormEvent, useEffect, useState } from "react";

import GifPikachuCrying from "../../../../assets/pikachu-crying.gif";

import {
  ButtonSearch,
  ContainerCards,
  ContainerDivider,
  ContainerGif,
  DividerLeft,
  DividerRight,
  InputSearch,
  InputSearchContainer,
  PokemonNotFound,
  SearchContainer,
  StyledContainerBody,
  StyledPokeballIcon,
  TextPokemonNotFound,
  TypeSearch,
  Types,
} from "./styles";
import IconSearch from "../../../../assets/icon-search.svg";
import PokeballIcon from "../../../../assets/pokeball-icon-colored.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import {
  fetchPokemonByName,
  fetchPokemonsByType,
  fetchPokemonsWithPagination,
} from "../../../../store/slices/pokemon";
import { pokemonTypes } from "../../../../constants/pokemonTypes";
import PokemonTypeCard from "../../../../components/PokemonTypeCard";
import Loading from "../../../../components/Loading";
import PokemonCard from "../../../../components/PokemonCard";
import CustomPagination from "../../../../components/CustomPagination";

export default function Content() {
  const [pokemonNameField, setPokemonNameField] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [typeSelected, setTypeSelected] = useState<string | null>(null);

  const { error, pokemons, status, totalPokemons } = useSelector(
    (state: RootState) => state.pokemon
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchPokemonByName = (e: FormEvent) => {
    e.preventDefault();
    if (pokemonNameField.length <= 0) {
      dispatch(fetchPokemonsWithPagination(1));
      setCurrentPage(1)
      return;
    }

    setTypeSelected(null);

    dispatch(fetchPokemonByName(pokemonNameField.toLocaleLowerCase()));

    setPokemonNameField("");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFetchPokemonByType = (type: string) => {
    if (type === typeSelected) {
      setTypeSelected(null);
      setCurrentPage(1)
      return;
    }

    setTypeSelected(type);

    dispatch(fetchPokemonsByType({ page: currentPage, type }));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!typeSelected && currentPage) {
      dispatch(fetchPokemonsWithPagination(currentPage));
    }
  }, [currentPage, typeSelected, dispatch]);

  useEffect(() => {
    if (typeSelected && currentPage) {
      dispatch(fetchPokemonsByType({ page: currentPage, type: typeSelected }));
    }
  }, [currentPage, typeSelected, dispatch]);

  return (
    <StyledContainerBody>
      <SearchContainer>
        <InputSearchContainer>
          <form onSubmit={(e) => handleFetchPokemonByName(e)}>
            <InputSearch
              type="text"
              placeholder="Pesquisar Pokemon"
              onChange={(e) =>
                setPokemonNameField(e.target.value)
              }
              value={pokemonNameField}
            />
            <ButtonSearch type="submit">
              <img src={IconSearch} alt="icone de lupa" />
            </ButtonSearch>
          </form>
        </InputSearchContainer>
        <TypeSearch>
          <p>Pesquisar por tipos</p>
          <Types>
            {pokemonTypes.map((type, index) => {
              return (
                <PokemonTypeCard
                  key={index}
                  value={type.name}
                  isSelected={type.name === typeSelected}
                  onClick={() => handleFetchPokemonByType(type.name)}
                />
              );
            })}
          </Types>
        </TypeSearch>
      </SearchContainer>

      <ContainerDivider>
        <DividerLeft />
        <StyledPokeballIcon src={PokeballIcon} alt="" />
        <DividerRight />
      </ContainerDivider>
      {status === "loading" ? (
        <Loading />
      ) : error?.message?.includes("404") || pokemons.length === 0 ? (
        <PokemonNotFound>
          <ContainerGif>
            <img src={GifPikachuCrying} alt="" />
          </ContainerGif>
          <TextPokemonNotFound>
            Desculpe, pokemon não encontrado! (Dica: Digite o nome inteiro do
            pokemon para a pesquisa funcionar.)
          </TextPokemonNotFound>
        </PokemonNotFound>
      ) : (
        <ContainerCards>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              goToDetails={() => console.log("ir para outra página")}
            />
          ))}
        </ContainerCards>
      )}

      {status !== "loading" && (
        <CustomPagination
          currentPage={currentPage}
          onChange={handlePageChange}
          totalItens={totalPokemons}
          style={{ marginTop: 100 }}
        />
      )}
    </StyledContainerBody>
  );
}

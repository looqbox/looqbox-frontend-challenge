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
  fetchPokemonByNameOrId,
  fetchPokemonsByType,
  fetchPokemonsWithPagination,
} from "../../../../store/slices/pokemon";
import { pokemonTypes } from "../../../../constants/pokemonTypes";
import PokemonTypeCard from "../../../../components/PokemonTypeCard";
import Loading from "../../../../components/Loading";
import PokemonCard from "../../../../components/PokemonCard";
import CustomPagination from "../../../../components/CustomPagination";
import { useNavigate } from "react-router-dom";

export default function Content() {
  const [pokemonNameOrId, setPokemonNameOrId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [typeSelected, setTypeSelected] = useState<string | null>(null);
  const [makeRequestByNameOrId, setMakeRequestByNameOrId] = useState<boolean>(false)

  const { error, pokemons, status, totalPokemons } = useSelector(
    (state: RootState) => state.pokemon
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const handleFetchPokemonByNameOrId = (e: FormEvent) => {
    e.preventDefault();
    if (pokemonNameOrId.length <= 0) {
      dispatch(fetchPokemonsWithPagination(1));
      setTypeSelected(null)
      setMakeRequestByNameOrId(false)
      setCurrentPage(1)
      return;
    }

    setTypeSelected(null);
    setMakeRequestByNameOrId(true)
    dispatch(fetchPokemonByNameOrId(pokemonNameOrId.toLocaleLowerCase()));

    setCurrentPage(1);
  };

  const handleGoToPokemonDetails = (pokemonName: string) => {
    navigate(`/details/${pokemonName}`)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFetchPokemonByType = (type: string) => {
    if (type === typeSelected) {
      setTypeSelected(null);
      setCurrentPage(1)
      setMakeRequestByNameOrId(false)
      return;
    }

    setTypeSelected(type);
    setMakeRequestByNameOrId(false)
    dispatch(fetchPokemonsByType({ page: currentPage, type }));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!typeSelected && currentPage && !makeRequestByNameOrId) {
      dispatch(fetchPokemonsWithPagination(currentPage));
    }
  }, [currentPage, typeSelected, dispatch, makeRequestByNameOrId]);

  useEffect(() => {
    if (typeSelected && currentPage && !makeRequestByNameOrId) {
      dispatch(fetchPokemonsByType({ page: currentPage, type: typeSelected }));
    }
  }, [currentPage, typeSelected, dispatch, makeRequestByNameOrId]);

  return (
    <StyledContainerBody>
      <SearchContainer>
        <InputSearchContainer>
          <form onSubmit={(e) => handleFetchPokemonByNameOrId(e)}>
            <InputSearch
              type="text"
              placeholder="Pesquisar Pokemon"
              onChange={(e) =>
                setPokemonNameOrId(e.target.value)
              }
              value={pokemonNameOrId}
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
        <StyledPokeballIcon src={PokeballIcon} alt="Pokeball icon" />
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
            Desculpe, pokemon não encontrado! (Dica: Digite o nome inteiro ou o id do
            pokemon para a pesquisa funcionar)
          </TextPokemonNotFound>
        </PokemonNotFound>
      ) : (
        <ContainerCards>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              goToDetails={() => handleGoToPokemonDetails(pokemon.name)}
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

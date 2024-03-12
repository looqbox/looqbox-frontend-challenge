import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Divider, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Pokemon from "../../models/Pokemon";
import PageHeader from "../../components/PageHeader";
import ListPokemon from "../../components/ListPokemon";
import { getPokemons } from "../../services/PokemonService";
import { setError, setLoading, setPokemonList } from "../../features/pokemon/pokemonSlice";
import { RootState } from "../../store";
import { SearchBar } from "./styles";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonList);
  const loading = useSelector((state: RootState) => state.pokemon.loading);
  const error = useSelector((state: RootState) => state.pokemon.error);

  const [search, setSearch] = useState<string>();
  const [pokemonsFiltered, setPokemonsFiltered] = useState<Pokemon[]>(pokemonList);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (pokemonList.length <= 0) {
      dispatch(setLoading(true));
      getPokemonList();
    }
  }, [dispatch, pokemonList]);
    
  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    filterPokemonList(searchValue);
  };

  const getPokemonList = () => {
    getPokemons()
      .then(data => {
        setPokemonsFiltered(data);
        dispatch(setPokemonList(data));
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(setError("Erro ao carregar os Pokémons. " + err));
        dispatch(setLoading(false));
      });
  };

  const redirectToDetails = () => {
    navigate(`/details/${search?.toLowerCase()}`);
  };

  const filterPokemonList = (name: string) => {
    const filteredList = pokemonList.filter((pokemon: Pokemon) => pokemon.name.includes(name));
    setPokemonsFiltered(filteredList);
  };

  return (
    <Layout>
      <PageHeader>
        <SearchBar
          variant='outlined'
          placeholder="Search..."
          onChange={onInputValueChange}
          onSearch={redirectToDetails}
          onPressEnter={redirectToDetails}
        />
      </PageHeader>
      <Divider />
      <Content>
        <ListPokemon
          data={pokemonsFiltered}
          loading={loading}
        />
      </Content>
    </Layout>
  );
}
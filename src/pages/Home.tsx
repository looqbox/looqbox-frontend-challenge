import { Pagination, Input, Row, Col, Result } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PokemonList from '../components/PokemonList';
import type { Pokemon } from '../types/pokemon';
import { useGetPokemons } from '../hooks/data/use-get-pokemons';
import { useNavigate } from 'react-router-dom';
import { usePokemonListContext } from '../contexts/PokemonListContext';
import { useState } from 'react';

const { Search } = Input;

const Home = () => {
  const navigate = useNavigate();
  const { page, setPage, showSize, setShowSize } = usePokemonListContext();
  const { data, isLoading, isError, error } = useGetPokemons(showSize, 0, page);
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const handleSearch = (value: string) => {
    if (value.trim()) {
      setSearchTerm(value.toLowerCase());
    } else {
      setSearchTerm(undefined);
    }
  };

  if (isError) {
    console.error(error);
    return (
      <Result
        status="error"
        title="Erro ao carregar Pokémons"
        subTitle="Tente novamente mais tarde."
      />
    );
  }

  const handlePokemonClick = (pokemon: Pokemon) => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-6 space-y-4">
        <Row gutter={[24, 24]} justify="start">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Search
              placeholder="Buscar pokemon por nome"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onChange={(e) => {
                if (!e.target.value.trim()) {
                  setSearchTerm(undefined);
                }
              }}
              onSearch={handleSearch}
            />
          </Col>
        </Row>
      </div>

      {searchTerm ? (
        <PokemonList
          pokemons={[
            {
              name: searchTerm,
              url: `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`,
            },
          ]}
          isListLoading={isLoading}
          onPokemonClick={handlePokemonClick}
        />
      ) : (
        <>
          <PokemonList
            pokemons={data?.results ?? []}
            isListLoading={isLoading}
            onPokemonClick={handlePokemonClick}
          />
          <Pagination
            className="!mt-6"
            align="center"
            current={page + 1}
            pageSize={showSize}
            total={data?.count ?? 0}
            onChange={(p, size) => {
              setPage(p - 1);
              setShowSize(size);
            }}
            onShowSizeChange={setShowSize}
            pageSizeOptions={['10', '20']}
          />
        </>
      )}
    </div>
  );
};

export default Home;

// vendors
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Input, message, Flex, Card, notification, Pagination, Image } from 'antd';

// hooks
import { useIsMounted } from '../hooks/useIsMounted';

// store
import { RootState, AppDispatch } from '../store/store';
import { fetchPokemon, fetchPokemonByName } from '../store/slices/pokemonSlice';

// components
import PokemonModal from './PokemonModal/PokemonModal';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

// constants
const { Meta } = Card;
const PAGE_SIZE = 6;

const Home: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const isMounted = useIsMounted();
  const dispatch: AppDispatch = useDispatch();

  // Extracting state from Redux store
  const {
    pokemonList,
    listStatus: status,
    selectedPokemonStatus,
    listError: error,
  } = useSelector((state: RootState) => state.pokemon);

  // Local state for pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  // Local state for controlling the visibility of the PokemonDetailModal
  const [pokemonDetailModalIsOpen, setPokemonDetailModalIsOpen] = useState(false);

  // Local state for search value
  const [searchValue, setSearchValue] = useState('');

  // Function to handle click on a Pokemon card
  const onClickPokemon = (name: string) => {
    try {
      dispatch(fetchPokemonByName(name));

      setPokemonDetailModalIsOpen(true);
    } catch (err) {
      message.error('Something went wrong');
    }
  };

  // Fetch Pokemon list on component mount
  useEffect(
    function fetchPokemonOnMount() {
      if (isMounted && status === 'idle') {
        dispatch(fetchPokemon());
      }
    },
    [dispatch, isMounted, status]
  );

  // Handle error in fetching selected Pokemon
  useEffect(
    function displayErrorMessageOnFetchFailure() {
      if (selectedPokemonStatus === 'failed') {
        api.error({
          message: 'Error!',
          description: 'Something went wrong. Please try again later.',
          duration: 0,
        });
      }
    },
    [api, selectedPokemonStatus]
  );

  // Loading state
  if (status === 'loading') {
    return <Loading />;
  }

  // Error state
  if (status === 'failed') {
    return (
      <ErrorMessage
        errorMessage={error || 'Something went wrong'}
        directionsMessage="Please try again later."
      />
    );
  }

  return (
    <>
      <Flex vertical gap={8} style={{ padding: '16px 0', margin: '0 auto', width: '100%' }}>
        <Input
          value={searchValue}
          placeholder="Search for a Pokémon"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <List
          dataSource={pokemonList
            .filter((pokemon) => pokemon.name.includes(searchValue.toLowerCase()))
            .slice((page - 1) * pageSize, page * pageSize)}
          split={false}
          grid={{ gutter: 16, column: 3, xs: 1, sm: 2, md: 3 }}
          renderItem={(pokemon) => (
            <List.Item>
              <Card
                onClick={() => onClickPokemon(pokemon.name)}
                style={{ cursor: 'pointer' }}
                cover={
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}
                    alt={pokemon.name}
                    preview={false}
                    loading="lazy"
                  />
                }
              >
                <Meta title={pokemon.name} style={{ textAlign: 'center' }} />
              </Card>
            </List.Item>
          )}
        />

        <Flex style={{ justifyContent: 'center' }}>
          <Pagination
            defaultCurrent={page}
            total={pokemonList.filter((pokemon) => pokemon.name.includes(searchValue.toLowerCase())).length}
            onChange={(newPage, pageSize) => {
              setPage(newPage);
              setPageSize(pageSize);
            }}
            pageSize={pageSize}
            pageSizeOptions={['6', '12', '18']}
            hideOnSinglePage
            responsive
          />
        </Flex>

        <PokemonModal isOpen={pokemonDetailModalIsOpen} setIsOpen={setPokemonDetailModalIsOpen} />
      </Flex>

      {contextHolder}
    </>
  );
};

export default Home;

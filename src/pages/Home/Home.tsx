import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Input, Flex, Space, Typography, List, Card } from 'antd';

import { addList } from '../../redux/allPokemons/slice';
import { PokemonProps } from '../../shared/service.interface';
import { getAllPokemons } from '../../services/Pokemon.services';

import './index.css';
import { Loader } from '../../components';

const { Search } = Input;
const { Title } = Typography;

const limit = 12;

export const Home = () => {
  const navigate = useNavigate();
  const { currentList } = useSelector((rootReducer) => rootReducer.AllPokemonsReducer);
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(limit);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
  const [filteredList, setFilteredList] = useState<PokemonProps[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const { results } = await getAllPokemons();
        dispatch(addList(results));
        setPokemonList(
          results.filter((elem, index) => {
            return index < limit && elem;
          }),
        );
        setHasNext(offset < currentList.length);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    if (currentList.length === 0) {
      getPokemons();
    } else {
      setPokemonList(
        currentList.filter((elem, index) => {
          return index < limit && elem;
        }),
      );
      setHasNext(false);
    }
  }, [dispatch]);

  const searchPokemonOnList = (
    value: string,
    info?:
      | {
          source?: 'input' | 'clear' | undefined;
        }
      | undefined,
  ) => {
    setIsLoading(true);
    if (info?.source === 'clear' || value === '') {
      setFilteredList([]);
      setHasNext(false);
    } else {
      setFilteredList(
        currentList.filter((elem) => elem.name.toLowerCase().includes(value.toLowerCase())),
      );
      setHasNext(true);
    }
    setIsLoading(false);
  };

  const changeSearchInput = (
    value: string,
    info?:
      | {
          source?: 'input' | 'clear' | undefined;
        }
      | undefined,
  ) => {
    if (info?.source === 'clear' || value === '') {
      setFilteredList([]);
      setHasNext(false);
    }
  };

  const loadingMoreAction = () => {
    setLoadingButton(true);
    setPokemonList((prevState) =>
      prevState.concat(
        currentList.filter((elem, index) => {
          return index >= offset && index < offset + limit && elem;
        }),
      ),
    );
    setOffset((prevState) => (prevState += limit));
    setLoadingButton(false);
  };

  return (
    <>
      <Flex vertical gap={12} align="center" className="mb-20">
        <Title>Pokédex</Title>
        <Space>
          <Search
            allowClear
            enterButton
            onSearch={(value, _, info) => searchPokemonOnList(value, info)}
            onChange={(event) => {
              changeSearchInput(event.target.value);
            }}
            placeholder="Type a pokemon's name"
            size="large"
          />
        </Space>
      </Flex>

      {isLoading && <Loader isLoading={isLoading} />}
      {!isLoading && (
        <>
          {pokemonList.length > 0 && (
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 8,
              }}
              dataSource={filteredList.length > 0 ? filteredList : pokemonList}
              renderItem={(item) => (
                <List.Item>
                  <Button className="button-card" onClick={() => navigate(`/details/${item.name}`)}>
                    <Card hoverable title={item.name.toUpperCase()}>
                      <Flex align="center" justify="center">
                        <img
                          alt={item.name}
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/').reverse()[1]}.png`}
                        />
                      </Flex>
                    </Card>
                  </Button>
                </List.Item>
              )}
            />
          )}
          <Flex justify="center" className="mb-20">
            {!hasNext && (
              <Button
                type="primary"
                loading={loadingButton}
                disabled={hasNext}
                onClick={() => loadingMoreAction()}
              >
                Loading more
              </Button>
            )}
          </Flex>
        </>
      )}
    </>
  );
};

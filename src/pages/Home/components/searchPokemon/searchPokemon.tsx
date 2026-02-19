import { Button, Carousel, Col, Input, Row, Alert } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { slides } from "../../../../assets/images/slides";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  searchPokemonByName,
  fetchPokemonList,
} from "../../../../store/pokemon/thunks";
import { setSearchValue, clearError } from "../../../../store/pokemon/slice";
import {
  selectSearchValue,
  selectLoading,
  selectError,
  selectPokemonList,
} from "../../../../store/pokemon/selectors";
import styles from "./searchPokemon.module.scss";

export const SearchPokemon = () => {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchValue = useAppSelector(selectSearchValue);
  const loading = useAppSelector(selectLoading);
  const pokemonList = useAppSelector(selectPokemonList);

  useEffect(() => {
    if (pokemonList.length === 0) {
      dispatch(fetchPokemonList({ limit: 20, offset: 0 }));
    }
  }, [dispatch, pokemonList.length]);

  const handleSearch = async () => {
    if (!searchValue.trim()) return;
    const result = await dispatch(searchPokemonByName(searchValue));
    if (searchPokemonByName.fulfilled.match(result)) {
      navigate(`/pokemon/${result.payload.name}`);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      className={styles.homeRow}
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <Carousel
          autoplay
          dots={false}
          effect="fade"
          autoplaySpeed={4000}
          className={styles.carouselContainer}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div className={styles.carouselContent}>
                <img
                  src={slide.image}
                  alt={slide.name}
                  className={styles.carouselImage}
                />
                <h2>{slide.name}</h2>
              </div>
            </div>
          ))}
        </Carousel>
      </Col>

      <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <div className={styles.searchContainer}>
          <h3 className={styles.searchTitle}>Search by name:</h3>

          <Input
            size="large"
            placeholder="Type Pokémon name"
            value={searchValue}
            onChange={(e) => {
              dispatch(setSearchValue(e.target.value));
              if (error) dispatch(clearError());
            }}
            onPressEnter={handleSearch}
            disabled={loading}
            status={error ? "error" : ""}
          />
          <Button
            type="default"
            size="large"
            onClick={handleSearch}
            block
            loading={loading}
          >
            Start
          </Button>

          {error && (
            <Alert
              description={error}
              type="error"
              icon={<ExclamationCircleOutlined />}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

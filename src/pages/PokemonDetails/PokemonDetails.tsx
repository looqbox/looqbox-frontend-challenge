import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spin, Row, Col, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectSearchedPokemon,
  selectLoading,
} from "../../store/pokemon/selectors";
import { searchPokemonByName } from "../../store/pokemon/thunks";
import { getEvolutionChain, getPokemonSpecies } from "../../services/pokeapi";
import type { EvolutionChainLink } from "../../store/pokemon/types";
import {
  PokemonAboutCard,
  PokemonEvolutionCard,
  PokemonHeroCard,
  PokemonSpritesCard,
  PokemonStatsCard,
  PokemonTypesCard,
  type SpeciesDetails,
} from "./components";
import styles from "./PokemonDetails.module.scss";

const { Title, Text } = Typography;

export function PokemonDetails() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name: nameParam } = useParams<{ name: string }>();
  const pokemon = useAppSelector(selectSearchedPokemon);
  const loading = useAppSelector(selectLoading);
  const [speciesDetails, setSpeciesDetails] = useState<SpeciesDetails>({
    loading: false,
    flavorText: null,
    genus: null,
    habitat: null,
    growthRate: null,
    captureRate: null,
  });
  const [evolutionNames, setEvolutionNames] = useState<string[]>([]);

  useEffect(() => {
    if (nameParam && nameParam !== pokemon?.name) {
      dispatch(searchPokemonByName(nameParam));
    }
  }, [nameParam, dispatch, pokemon?.name]);

  useEffect(() => {
    const pokemonId = pokemon?.id;
    if (pokemonId === undefined) return;
    const currentPokemonId: number = pokemonId;

    let isCancelled = false;

    async function loadSpeciesData() {
      setSpeciesDetails((prev) => ({ ...prev, loading: true }));
      try {
        const species = await getPokemonSpecies(currentPokemonId);
        if (isCancelled) return;

        const englishFlavor = species.flavor_text_entries.find(
          (entry) => entry.language.name === "en",
        );
        const englishGenus = species.genera.find(
          (entry) => entry.language.name === "en",
        );

        setSpeciesDetails({
          loading: true,
          flavorText:
            englishFlavor?.flavor_text.replace(/[\n\f]/g, " ") ??
            "No description available.",
          genus: englishGenus?.genus ?? null,
          habitat: species.habitat?.name ?? null,
          growthRate: species.growth_rate.name,
          captureRate: species.capture_rate,
        });

        const evolution = await getEvolutionChain(species.evolution_chain.url);
        if (isCancelled) return;

        const names: string[] = [];
        const walk = (node: EvolutionChainLink) => {
          names.push(node.species.name);
          node.evolves_to.forEach(walk);
        };
        walk(evolution.chain);
        setEvolutionNames(Array.from(new Set(names)));
      } catch {
        if (isCancelled) return;
        setSpeciesDetails({
          loading: true,
          flavorText: "No description available.",
          genus: null,
          habitat: null,
          growthRate: null,
          captureRate: null,
        });
        setEvolutionNames([]);
      } finally {
        if (!isCancelled) {
          setSpeciesDetails((prev) => ({ ...prev, loading: false }));
        }
      }
    }

    loadSpeciesData();

    return () => {
      isCancelled = true;
    };
  }, [pokemon?.id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Spin size="large" />
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className={styles.empty}>
        <Title level={3}>No Pokémon found</Title>
        <Text type="secondary">
          Use the back button to return to the home page
        </Text>
      </div>
    );
  }

  const handleEvolutionClick = (pokemonName: string) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <div className={styles.container}>
      <Row
        align="middle"
        gutter={[
          { xs: 12, sm: 16, md: 20, lg: 24 },
          { xs: 12, sm: 16, md: 20, lg: 24 },
        ]}
      >
        <Col xs={24} md={12} lg={8}>
          <PokemonHeroCard pokemon={pokemon} />
        </Col>

        <Col xs={24} md={12} lg={8}>
          <PokemonAboutCard pokemon={pokemon} speciesDetails={speciesDetails} />
          <PokemonSpritesCard pokemon={pokemon} />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <PokemonEvolutionCard
            loading={speciesDetails.loading}
            evolutionNames={evolutionNames}
            currentPokemonName={pokemon.name}
            onEvolutionClick={handleEvolutionClick}
          />
          <PokemonTypesCard pokemon={pokemon} />
          <PokemonStatsCard pokemon={pokemon} />
        </Col>
      </Row>
    </div>
  );
}

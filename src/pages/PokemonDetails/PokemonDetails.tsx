import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Flex, Typography } from 'antd';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { getMoreDetails, getPokemonDetails } from '../../services/Pokemon.services';
import { MoreDetailsPayload, PokemonDetailsPayload } from '../../shared/service.interface';
import { Details, Stats } from './components';
import { Loader } from '../../components';

const { Paragraph, Title } = Typography;

Chart.register(CategoryScale);

export const PokemonDetails = () => {
  const { pokemonName = '' } = useParams();
  const navigate = useNavigate();

  const [pokemonDetails, setPokemonDetails] = useState({} as PokemonDetailsPayload);
  const [pokemonMoreDetails, setPokemonMoreDetails] = useState({} as MoreDetailsPayload);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const result = await getPokemonDetails(pokemonName);
        setPokemonDetails(result);
      } catch (error) {
        console.error(error);
      }
    };

    const getDetails = async () => {
      try {
        const details = await getMoreDetails(pokemonDetails.id);
        setPokemonMoreDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    pokemonName && pokemonName !== '' && getPokemonData();
    pokemonDetails && pokemonDetails.id && getDetails();
  }, [pokemonDetails.id, pokemonName]);

  const renderDescription = () => {
    const description = pokemonMoreDetails.flavor_text_entries.filter(
      (elem) => elem.language.name === 'en',
    );
    const randomDescriptionIndex = Math.trunc(Math.random() * (description.length - 1));
    return description[randomDescriptionIndex].flavor_text;
  };

  const renderGenus = () => {
    const pokemonGenus = pokemonMoreDetails.genera.find((elem) => elem.language.name === 'en');

    return pokemonGenus?.genus || 'N/A';
  };

  return (
    <>
      {pokemonDetails.name && pokemonMoreDetails.name ? (
        <>
          <Flex align="center" justify="center">
            <img
              alt={pokemonDetails.name}
              src={pokemonDetails.sprites.front_default || ''}
              style={{ minWidth: '15%', marginBottom: 30 }}
            />
          </Flex>
          <Flex vertical style={{ marginBottom: 25 }}>
            <Title level={3}>DESCRIPTION</Title>
            <Paragraph style={{ fontSize: 18 }}>{renderDescription()}</Paragraph>
          </Flex>
          <Flex style={{ marginBottom: 30 }}>
            <Details
              pokemonName={pokemonMoreDetails.name}
              genus={renderGenus()}
              weight={pokemonDetails.weight}
              habitat={pokemonMoreDetails.habitat.name}
              types={pokemonDetails.types}
            />
          </Flex>
          <Flex style={{ marginBottom: 30 }}>
            <Stats pokemonName={pokemonDetails.name} stats={pokemonDetails.stats} />
          </Flex>
          <Flex justify="center" style={{ width: 'max-content', margin: 'auto' }}>
            <Radar
              data={{
                labels: pokemonDetails.stats.map((item) => item.stat.name.toUpperCase()),
                datasets: [
                  {
                    label: `${pokemonDetails.name.toUpperCase()}'S STATS`,
                    data: pokemonDetails.stats.map((item) => item.base_stat),
                    fill: true,
                  },
                ],
              }}
            />
          </Flex>
          <Flex align="center" justify="center" style={{ marginBottom: 30 }}>
            <Button type="primary" onClick={() => navigate('/')}>
              Back to List
            </Button>
          </Flex>
        </>
      ) : (
        <Loader isLoading />
      )}
    </>
  );
};

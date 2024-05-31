// vendors
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumb, Flex, Image, Table, Tooltip, Typography } from 'antd';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

// store
import { RootState, AppDispatch } from '../../store/store';
import { fetchPokemonByName } from '../../store/slices/pokemonSlice';

// components
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

// styles
import './PokemonDetail.scss';

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const dispatch: AppDispatch = useDispatch();
  const {
    selectedPokemon,
    selectedPokemonStatus: status,
    selectedPokemonError: error,
    pokemonList,
  } = useSelector((state: RootState) => state.pokemon);

  // useEffect hook to fetch Pokemon details when the component mounts or when the selected Pokemon changes.
  // If the selected Pokemon is not defined or its name doesn't match the current name from the URL parameters,
  // it finds the Pokemon in the list and dispatches an action to fetch its details.
  useEffect(
    function fetchPokemonDetailsIfNotSelected() {
      if (!selectedPokemon || selectedPokemon.name !== name) {
        const pokemon = pokemonList.find((pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase());

        if (!pokemon) {
          return;
        }

        dispatch(fetchPokemonByName(pokemon.name));
      }
    },
    [dispatch, pokemonList, name, selectedPokemon]
  );

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'failed') {
    return (
      <ErrorMessage
        errorMessage={error || 'Something went wrong'}
        directionsMessage="Please try again later."
      />
    );
  }

  if (!selectedPokemon || selectedPokemon.name !== name) {
    return <ErrorMessage directionsMessage="Pokémon not found." linkBack />;
  }

  return (
    <Flex style={{ padding: 8, width: '100%' }} vertical>
      <Breadcrumb
        items={[
          {
            title: <Link to="/home">Home</Link>,
          },
          {
            title: selectedPokemon?.name,
          },
        ]}
      />

      <div className="detail-container">
        <Typography.Title>Choosed Pokemon:</Typography.Title>

        <Flex gap={36} className="content-container">
          <Flex vertical align="center" justify="flex-start">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
              alt={selectedPokemon.name}
              width={300}
              preview={false}
            />

            <Flex vertical className="pokemon-details">
              <Typography.Title>{selectedPokemon?.name}</Typography.Title>

              <Typography.Paragraph>
                <span>Height:</span> {selectedPokemon.height}
              </Typography.Paragraph>

              <Typography.Paragraph>
                <span>Weight:</span> {selectedPokemon.weight}
              </Typography.Paragraph>

              <Typography.Paragraph>
                <span>Base Experience:</span> {selectedPokemon.base_experience}
              </Typography.Paragraph>

              <Typography.Paragraph>
                <span>species:</span> {selectedPokemon.species.name}
              </Typography.Paragraph>

              <Typography.Paragraph>
                <span>types:</span> {selectedPokemon.types.map((type) => type.type.name).join(', ')}
              </Typography.Paragraph>
            </Flex>
          </Flex>

          <Flex gap={16} vertical>
            <Table
              columns={[
                {
                  title: 'Move Name',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Version Group Details',
                  dataIndex: 'versionGroupDetails',
                  key: 'versionGroupDetails',
                },
              ]}
              dataSource={selectedPokemon.moves.map((move, index) => ({
                key: index,
                name: move.move.name,
                versionGroupDetails: move.version_group_details
                  .map((versionGroup) => versionGroup.version_group.name)
                  .join(', '),
              }))}
              style={{ width: '100%' }}
              pagination={false}
            />

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={selectedPokemon.stats.map((stat) => ({
                  name: stat.stat.name,
                  base_stat: stat.base_stat,
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="base_stat" fill="#399C62" />
              </BarChart>
            </ResponsiveContainer>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default PokemonDetail;

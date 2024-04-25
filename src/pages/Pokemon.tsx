import React from 'react';
import usePokemon from '@/hooks/usePokemon';
import { Link, useParams } from 'react-router-dom';
import { getHexColor, getTextColor } from '@/utils/styles';
import PokemonType from '@/components/PokemonType';
import { Button, Flex, Row, Spin } from 'antd';
import Stats from '@/components/Stats';
import DashboardCard from '@/components/DashboardCard';
import DetailedTypesTab from '@/components/DetailedTypesTab';
import Error from './Error';
import { Helmet } from 'react-helmet';
import { FaArrowLeft } from 'react-icons/fa';

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const Pokemon: React.FC = () => {
  const { name } = useParams();

  const { data: pokemon, isFetching, isLoading, isError } = usePokemon({ name: name || '' });

  if (isLoading || isFetching) {
    return (
      <div className="w-screen h-screen flex gap-4 justify-center items-center bg-gradient-to-r from-gray-950 to-gray-800 text-white text-lg font-bold">
        <Spin size="large" />
        Loading...
      </div>
    );
  }

  if (!pokemon || isError) {
    return <Error />;
  }

  const color = getHexColor(pokemon.color.name);
  const textColor = getTextColor(color);
  const lightColor = `${color}40`;
  const darkColor = `${color}45`;

  return (
    <div
      className="h-full w-full min-h-screen bg-gradient-to-r from-gray-950 to-gray-800"
      style={{ backgroundColor: lightColor }}
    >
      <Helmet>
        <title>Pokémon | {capitalize(name || '')}</title>
      </Helmet>

      {/* ---- Home button ---- */}
      <Link to="/" className="absolute top-3">
        <Button
          className="text-[#ffffff60] bg-transparent hover:opacity-65 hover:!text-[#ffffff60]"
          type="text"
        >
          <FaArrowLeft size={30} />
        </Button>
      </Link>

      <div
        className="px-4 py-14 max-sm:px-3 min-h-screen w-full text-[#f2f2f2]"
        style={{ backgroundColor: lightColor }}
      >
        <main className="max-w-[1300px] mx-auto">
          <Flex className="justify-between mx-auto items-center gap-20 flex-1 max-[880px]:flex-col-reverse max-[880px]:gap-3">
            <Flex className="flex-1 flex-col gap-4 w-full">
              <Flex className="items-center gap-3 max-[880px]:justify-center">
                <h1 className="white text-6xl font-semibold capitalize max-[880px]:text-3xl">
                  {name}
                </h1>
                <span className="opacity-50 text-xl">#{pokemon.id}</span>
              </Flex>

              <ul className="flex gap-4 items-center flex-wrap max-[880px]:justify-center">
                {pokemon.types.map((t) => (
                  <li key={t.type.name}>
                    <PokemonType
                      type={t.type.name}
                      color={lightColor}
                      iconBg={textColor === '#2c2c2c' ? 'transparent' : 'white'}
                      iconColor={textColor === '#2c2c2c' ? 'white' : color}
                      textColor="white"
                    />
                  </li>
                ))}
              </ul>
              <Row className="flex justify-between flex-1 gap-6">
                <DashboardCard
                  color={color}
                  title="Height"
                  content={<p className="text-lg">{pokemon.height / 10} m</p>}
                />
                <DashboardCard
                  color={color}
                  title="Weight"
                  content={<p className="text-lg">{pokemon.weight / 10} m</p>}
                />
                <DashboardCard
                  color={color}
                  title="Abilities"
                  content={
                    <ul className="flex flex-1 gap-2 max-[420px]:flex-wrap">
                      {pokemon.abilities.map((a) => (
                        <li
                          className="text-lg px-3 py-2 rounded-3xl border capitalize text-center min-w-max"
                          style={{ borderColor: '#ffffff50' }}
                        >
                          {a.ability.name}
                        </li>
                      ))}
                    </ul>
                  }
                />
              </Row>
            </Flex>
            <img
              src={
                pokemon.sprites.other?.dream_world?.front_default || pokemon.sprites.front_default
              }
              alt={`${name}'s image`}
              className="w-[330px] h-[330px] max-[880px]:w-40 max-[880px]:h-40"
            />
          </Flex>
          <Flex className="mt-6 gap-6 max-[950px]:flex-col">
            <DashboardCard
              color={color}
              title="Stats"
              content={<Stats stats={pokemon.stats} color={color} />}
            />
            <DashboardCard
              color={color}
              title="Type Effectiveness"
              content={
                <DetailedTypesTab
                  detailedTypes={pokemon.detailedTypes}
                  pokemonTypeProps={{
                    color: lightColor,
                    iconBg: textColor === '#2c2c2c' ? 'transparent' : 'white',
                    iconColor: textColor === '#2c2c2c' ? 'white' : color,
                    textColor: 'white',
                  }}
                  color={darkColor}
                />
              }
            />
          </Flex>
        </main>
      </div>
    </div>
  );
};

export default Pokemon;

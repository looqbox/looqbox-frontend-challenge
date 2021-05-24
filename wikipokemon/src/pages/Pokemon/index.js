import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { GiWeight, GiBodyHeight, GiBroadsword, GiBottledBolt } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';

import { api } from '../../services/api';

import typeColours from '../../styles/typeColours';
import pokemonImg from '../../assets/pokeball.svg';

import {
  Background,
  Container,
  Skills,
  PokemonName,
  Content,
  Avatar,
  SkillsFirstBox,
  SkillsSecondBox,
  ButtonBack,
} from './styles';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  const { params } = useRouteMatch();

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await api.get(`/${params.id}`);
      const _pokemonData = response.data;

      setPokemon(_pokemonData);
    }

    fetchPokemonData();
  }, [params.id]);

  return (
    <>
      <Background>
        <img src={pokemonImg} alt="Pokeball" />
      </Background>

      <Container>
        {pokemon && (
          <>
            <PokemonName>
              <h1>{pokemon.name}</h1>
              <span>#{pokemon.id}</span>
            </PokemonName>

            <Content>
              <Avatar>
                <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon Avatar" />
              </Avatar>

              <Skills>
                <SkillsFirstBox>
                  <div>
                    <GiBodyHeight size={32}/>

                    <div>
                      <h3>Height</h3>
                      <span>{pokemon.height}</span>
                    </div>
                  </div>

                  <div>
                    <GiWeight size={35} />

                    <div>
                      <h3>Weight</h3>
                      <span>{pokemon.weight}</span>
                    </div>
                  </div>

                  <div>
                    <GoGraph size={25} />

                    <div>
                      <h3>Base Experience</h3>
                      <span>{pokemon.base_experience}</span>
                    </div>
                  </div>
                </SkillsFirstBox>

                <SkillsSecondBox>
                  <div>
                    <GiBottledBolt size={50}/>

                    <h3>Type</h3>
                    {pokemon.types.map(type => {
                      return (
                        <p style={{ backgroundColor: typeColours[type.type.name] }}>
                          {type.type.name}
                        </p>
                      );
                    })}
                  </div>

                  <div>
                    <GiBroadsword size={50}/>

                    <h3>Abilities</h3>
                    {pokemon.abilities.map(ability => {
                      return (
                        <p>
                          {ability.ability.name}
                        </p>
                      )
                    })}
                  </div>
                </SkillsSecondBox>
              </Skills>
            </Content>
          </>
        )}
      </Container>

      <ButtonBack>
        <Link to="/">
          Explore More Pokémon
        </Link>
      </ButtonBack>
    </>
  );
}

export default Pokemon;
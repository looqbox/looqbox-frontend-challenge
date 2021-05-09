import { Flex, Heading, Image, Link, Tag } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { typePokemon } from '../constants/typePokemon';
import { bgColor } from '../constants/bgColor';

import { api } from '../api/api';

function CardPokemon({ namePokemon }) {
    const [typesData, setTypesData] = useState([]);
    const [typePrimary, setTypePrimary] = useState('');

    const [sprite, setSprite] = useState('');

    async function pokemonData() {
        const response = await api.get(`pokemon/${namePokemon}`);
        const { types, sprites } = response.data;

        setTypesData(types);

        const primary = types[0].type.name;
        setTypePrimary(primary);

        const pokemonImage = sprites.other.dream_world.front_default;
        setSprite(pokemonImage);
    }

    useEffect(() => {
        async function Load() {
            await pokemonData();
        }
        Load();
    }, [namePokemon]);

    return (
        <Flex
            flexDir="column"
            w="100%"
            h="40"
            borderRadius="20px"
            bgGradient={bgColor[typePrimary]}
            style={{ transition: 'all .2s ease-in-out' }}
            _hover={{
                transform: 'scale(1.1)',
            }}
        >
            <Flex justifyContent="center" w="100%" h="25%" pt="6px">
                <Heading color="white" as="h3" fontSize="lg">
                    <Link href={`/pokemon/${namePokemon}`}>{namePokemon}</Link>
                </Heading>
            </Flex>
            <Flex flexDirection="row" w="100%" h="75%">
                <Flex
                    height="100%"
                    w="50%"
                    p="3%"
                    flexDirection="column"
                    mb="5px"
                >
                    {typesData.map((typeData, index) => {
                        const type = typeData.type.name;
                        return (
                            <Tag
                                key={index}
                                size="md"
                                width={{ xl: '70%' }}
                                mt="18%"
                                variant="solid"
                                backgroundColor={typePokemon[type]}
                            >
                                {type}
                            </Tag>
                        );
                    })}
                </Flex>
                <Flex
                    height="100%"
                    w="50%"
                    alignItems="center"
                    justifyContent="flex-end"
                    p="2%"
                >
                    <Image objectFit="cover" w="100%" h="73%" src={sprite} />
                </Flex>
            </Flex>
        </Flex>
    );
}
export default memo(CardPokemon)
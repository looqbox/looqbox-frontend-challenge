import React from 'react';

import { Heading } from '@chakra-ui/layout';
import {
    Box,
    Flex,
    Image,
    HStack,
    Tag,
} from '@chakra-ui/react';

import { api } from '../../api/api';
import { useRouter } from 'next/router';
import { bgColor } from '../../constants/bgColor';
import TabInfo from '../../components/TabInfo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { typePokemon } from '../../constants/typePokemon';
import ShimmerEffect from '../../components/shimmer';

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    const { results } = data;

    const paths = results.map(pokemonItem => {
        return { params: { pokemon: pokemonItem.name } };
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async context => {
    const { pokemon } = context.params;

    const response = await api.get(`pokemon/${pokemon}`);
    const { data } = response;

    return {
        props: {
            poke: data,
        },
    };
};

export default function Pokemon({ poke }) {
    const { isFallback } = useRouter();
    if (isFallback) {
        return (
            <ShimmerEffect/>
        );
    }
    const pokemonImage = poke.sprites.other.dream_world.front_default;
    const primary = poke.types[0].type.name;

    const { query } = useRouter();
    return (
        <>
            <Flex
                h="100vh"
                justifyContent="center"
                alignItems="center"
                backgroundColor="gray.200"
            >
                <Flex
                    h={{ base: '100%', xl: '97%' }}
                    w={{ base: '100%', xl: '97%' }}
                    bgGradient={bgColor[primary]}
                    flexDirection="column"
                    borderRadius={{ xl: '30px' }}
                >
                    <Flex
                        w="100%"
                        h="10%"
                        mt={{ base: '10%', md: '6%', lg: '6%', xl: '3%' }}
                        pl={{ base: '5%', xl: '4%' }}
                        flexDirection="column"
                    >
                        <Heading color="white" size={'2xl'}>
                            {query.pokemon}
                        </Heading>
                        <HStack mt="1%" spacing="10px">
                            {poke.types.map((typeData, index) => {
                                const type = typeData.type.name;
                                return (
                                    <Tag
                                        key={index}
                                        size="md"
                                        variant="solid"
                                        backgroundColor={typePokemon[type]}
                                    >
                                        {type}
                                    </Tag>
                                );
                            })}
                        </HStack>
                    </Flex>

                    <Flex
                        flexDirection="row"
                        justifyContent="space-around"
                        mb="20px"
                        height={{ xl: '480px' }}
                    >
                        <Box
                            display="flex"
                            alignSelf="center"
                            justifyContent="center"
                            mt="6%"
                            maxW={{ base: '55%', lg: '85%' }}
                        >
                            <Image boxSize="98%" src={pokemonImage} />
                        </Box>
                        <Box
                            w="50%"
                            backgroundColor="rgba(255, 255, 255, 0.685)"
                            borderRadius="20px"
                            display={{ base: 'none', xl: 'initial' }}
                        >
                            <TabInfo pokemonInfo={poke} />
                        </Box>
                    </Flex>

                    <Flex
                        w="100%"
                        h="60%"
                        borderTopRadius="30px"
                        backgroundColor="white"
                        p="3%"
                        display={{ base: 'initial', xl: 'none' }}
                        mt={{ base: '13%', md: '15%', lg: '18%' }}
                    >
                        <TabInfo pokemonInfo={poke} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

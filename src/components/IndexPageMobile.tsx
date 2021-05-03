import React, { useEffect, useRef, useState } from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { Button, Flex, Image, VStack } from '@chakra-ui/react';

import { Heading } from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function IndexPageMobile() {
    return (
        <>
            <Box
                h="130vh"
                display={{ base: 'flex', xl: 'none' }}
                alignItems="center"
                position="relative"
                bgImage="url('https://i.pinimg.com/originals/ac/d7/98/acd798edd3c1966d6dea0fb1f018553f.jpg')"
                bgPosition="center"
                bgRepeat="no-repeat"
            >
                <Image
                    boxSize="101%"
                    src="https://i.pinimg.com/originals/ac/d7/98/acd798edd3c1966d6dea0fb1f018553f.jpg"
                    alt="PokeWallpaper"
                />

                <Flex
                    alignSelf="center"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    position="absolute"
                    top="20%"
                    left="2%"
                    w="95%"
                    fontSize={{ md: '1.7em', lg: '2.5em' }}
                >
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" />

                    <Text
                        marginLeft="25px"
                        marginTop="0px"
                        fontWeight="bold"
                        color="white"
                        fontFamily="sans-serif"
                    >
                        Front-end challenge made by{' '}
                        <Link href="https://github.com/Tthiagoo">
                            {' '}
                            Tthiagoo 💻
                        </Link>
                    </Text>
                </Flex>
            </Box>
            <Box
                p={6}
                h="600px"
                backgroundColor="#80B472"
                display={{ base: 'flex', xl: 'none' }}
                flexDirection="column"
                color="white"
                alignItems="center"
            >
                <VStack>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                        mb={5}
                    >
                        Gotta catch 'Em all!
                    </Heading>
                    <Text
                        fontSize={{ base: '1.1em', md: '2.2em', lg: '2.5em' }}
                    >
                        Este projeto é um desafio frontend feito pela Looqbox que
                        utiliza ReactJS, NextJS e Typescript com o objetivo de
                        consumir uma api baseado em Pokemons. Você pode olhar a
                        documentação para saber mais detalhes de como este
                        projeto foi feito =)
                    </Text>
                </VStack>
                <Link href="/search">
                    <Button
                        marginTop="5%"
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="teal"
                        h={{ base: '70px', md: '100px', lg: '130px' }}
                        w={{ base: '90%', md: '98%', lg: '100%' }}
                        fontSize={{ base: '1.0em', md: '1.7em', lg: '1.8em' }}
                    >
                        Ir para a pagina de pesquisa
                    </Button>
                </Link>
            </Box>
        </>
    );
}

import React from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { Button, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ButtonColorMode } from './ButtonColorMode';

export default function IndexPageDesktop() {
    const bg = useColorModeValue(
        'linear(to bottom, green.300, green.800)',
        'linear(to bottom, green.900, gray.900)',
    );

    const colorBg = useColorModeValue('black', 'white');
    const color = useColorModeValue('white', 'black');

    return (
        <>
            <ButtonColorMode
                aria-label=""
                position="absolute"
                left="95%"
                zIndex="1"
                display={{ base: 'none', xl: 'initial' }}
            />
            <Box
                display={{ base: 'none', xl: 'flex' }}
                h="100vh"
                flexDirection="row"
            >
                <Flex h="100%" w="50%" flexDirection="column" pl="15px">
                    <Box w="115%" h="25%" pt="15px">
                        <Image
                            w="40%"
                            h="60%"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                        />
                    </Box>
                    <Flex
                        h="30%"
                        p="10px"
                        alignItems="start"
                        flexDirection="column"
                        justifyContent="center"
                        mt="40px"
                    >
                        <Heading as="h2" fontSize="5xl" mb={1}>
                            Gotta catch 'Em all!
                        </Heading>
                        <Text>
                        Este projeto é um desafio frontend feito pela Looqbox que
                        utiliza ReactJS, NextJS e Typescript com o objetivo de
                        consumir uma api baseado em Pokémons. Você pode olhar a
                        documentação para saber mais detalhes de como este
                        projeto foi feito =)
                        </Text>
                    </Flex>

                    <Box mt="10%" h="20%">
                        <Link href="/search">
                            <Button
                                boxShadow="xl"
                                rightIcon={<ArrowForwardIcon />}
                                borderRadius="full"
                                h="50%"
                                w="60%"
                                fontSize="1.2em"
                                backgroundColor={colorBg}
                                color={color}
                                _hover={{ backgroundColor: '#666666' }}
                            >
                                Ir para a pagina de pesquisa
                            </Button>
                        </Link>
                    </Box>
                </Flex>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    w="65%"
                    bgGradient={bg}
                    style={{
                        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                    }}
                >
                    <Image
                        boxSize="60%"
                        src="https://i.pinimg.com/originals/b4/fe/ae/b4feaeb38f2763df39b58be3d2053fa8.png"
                        alt="PokeWallpaper"
                    />
                </Box>
            </Box>
        </>
    );
}

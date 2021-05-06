import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/layout';
import {
    Box,
    Flex,
    Image,
    Input,
    InputLeftElement,
    InputGroup,
    Grid,
    useColorModeValue,
    Button,
    useToast,
    ScaleFade,
} from '@chakra-ui/react';
import { ButtonColorMode } from '../components/ButtonColorMode';
import CardPokemon from '../components/CardPokemon';
import { api } from '../api/api';

export default function Search() {
    const toast = useToast();
    const bgSearch = useColorModeValue('gray.100', 'gray.700');

    const [namePokemon, setNamePokemon] = useState('');
    const [pokemons, setPokemons] = useState([]);

    const [page, setPage] = useState(0);

    async function handleSearch() {
        setPage(0);

        try {
            const nameLower = namePokemon.toLocaleLowerCase();
            const response = await api.get(`pokemon/${nameLower}`);
            setPokemons([response.data]);
        } catch (err) {
            setPokemons([]);
            return toast({
                title: 'Error',
                description: 'Nenhum pokemon encontrado',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    async function LoadList() {
        try {
            const response = await api.get(`pokemon?offset=${page}&limit=4`);
            const { results } = response.data;

            setPokemons(oldValues => {
                return [...oldValues, ...results];
            });

            setPage(page + 4);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setPage(0);
        setPokemons([]);
        async function Load() {
            await LoadList();
        }
        Load();
    }, []);

    return (
        <Flex flexDirection="column" h="100vh">
            <Flex flexDirection="row" justifyContent="space-between" h="10%">
                <ButtonColorMode aria-label="" />
                <Image
                    m="5px"
                    src="https://i.pinimg.com/originals/0f/bd/f1/0fbdf1c2d327de0c57a364ef64a6c3c4.png"
                />
            </Flex>

            <Flex
                h={{ base: '11%', md: '9%', lg: '4%', xl: '1%' }}
                justifyContent="center"
                alignSelf={{ xl: 'center' }}
                flexDirection="column"
                p="5%"
                w={{ xl: '90%' }}
            >
                <Heading mb="15px">Pokedex</Heading>
                <Flex flexDir="row">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.500" />}
                        />
                        <Input
                            placeholder="Pesquise um Pokémon"
                            press
                            variant="filled"
                            value={namePokemon}
                            onChange={e => {
                                setNamePokemon(e.target.value);
                            }}
                        />
                    </InputGroup>
                    <Button
                        backgroundColor="black"
                        color="white"
                        ml="20px"
                        onClick={() =>
                            namePokemon
                                ? handleSearch()
                                : toast({
                                      title: 'Error',
                                      description:
                                          'Digite um nome de algum pokemon',
                                      status: 'error',
                                      duration: 5000,
                                      isClosable: true,
                                  })
                        }
                    >
                        {' '}
                        Pesquisar
                    </Button>
                </Flex>
            </Flex>

            <Flex
                alignSelf="center"
                justifySelf="center"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                backgroundColor={bgSearch}
                m="15px"
                borderRadius="10px"
                w={{ xl: '80%' }}
                overflow="hidden"
                p="2%"
                style={{
                    boxShadow: '10px 10px -5px 0px rgba(0,0,0,0.50)',
                }}
            >
                <Grid
                    overflowY="scroll"
                    templateColumns={{
                        base: 'repeat(2, 10fr)',
                        md: 'repeat(3, 10fr)',
                        lg: 'repeat(4, 10fr)',
                        xl: 'repeat(5, 10fr)',
                    }}
                    id="Grid"
                    w="100%"
                    gap={4}
                    pt="1%"
                >
                    {pokemons.map((poke, index) => (
                        <ScaleFade initialScale={0.9} in={true}>
                            <CardPokemon namePokemon={poke.name} key={index} />
                        </ScaleFade>
                    ))}
                </Grid>

                {namePokemon ? (
                    <Box />
                ) : (
                    <Box>
                        <Button
                            backgroundColor="black"
                            onClick={LoadList}
                            mt="10%"
                            color="white"
                            ml="20px"
                        >
                            Carregar mais pokemons
                        </Button>
                    </Box>
                )}
            </Flex>
        </Flex>
    );
}

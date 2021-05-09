import { Heading, Circle, Link, VStack, Image } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { api } from '../api/api';

export default function TabInfoEvolutions({ pokemonInfo }) {
    const [imgFirstEvo, setImgFirstEvo] = useState('');
    const [nameFirstEvo, setNameFirstEvo] = useState('');

    const [nameSecondEvo, setNameSecondEvo] = useState('');
    const [imgSecondEvo, setImgSecondEvo] = useState('');

    const [imgLastEvo, setImgLastEvo] = useState('');
    const [nameLastEvo, setNameLastEvo] = useState('');

    async function EggGroupAndEvo() {
        const response = await api.get(`pokemon/${pokemonInfo.name}`);
        const {
            data: {
                species: { url },
            },
        } = response;
        const EggData = await axios.get(url);

        const EvolutionUrl = EggData.data.evolution_chain.url;
        const EvolutionInfos = await axios.get(EvolutionUrl);
        const { chain } = EvolutionInfos.data;

        const {
            species: { name: firstEvo },
            evolves_to,
        } = chain;

        setNameFirstEvo(firstEvo);

        const responseFirst = await api.get(`pokemon/${firstEvo}`);
        setImgFirstEvo(
            responseFirst.data.sprites.other.dream_world.front_default,
        );

        if (evolves_to.length > 0) {
            const {
                0: {
                    species: { name: secondEvo },
                },
                0: { evolves_to: evolesLast },
            } = evolves_to;

            setNameSecondEvo(secondEvo);
            const responseSecond = await api.get(`pokemon/${secondEvo}`);
            setImgSecondEvo(
                responseSecond.data.sprites.other.dream_world.front_default,
            );

            if (evolesLast.length) {
                const {
                    0: {
                        species: { name: lastEvo },
                    },
                } = evolesLast;
                setNameLastEvo(lastEvo);
                const responseLast = await api.get(`pokemon/${lastEvo}`);
                setImgLastEvo(
                    responseLast.data.sprites.other.dream_world.front_default,
                );
            }
        }
    }

    useEffect(() => {
        async function Load() {
            await EggGroupAndEvo();
        }
        Load();
    }, []);

    return (
        <>
            {nameSecondEvo ? (
                <>
                    <VStack spacing="5px">
                        <Circle
                            border="5px solid"
                            bg="gray.400"
                            size={{
                                base: '60px',
                                md: '150px',
                                xl: '170',
                            }}
                        >
                            <Image objectFit="cover" src={imgFirstEvo}></Image>
                        </Circle>
                        <Heading as="h3" size="lg">
                            <Link href={`${nameFirstEvo}`}>{nameFirstEvo}</Link>
                        </Heading>
                    </VStack>

                    <VStack spacing="5px">
                        <Circle
                            border="5px solid"
                            bg="gray.400"
                            size={{
                                base: '60px',
                                md: '150px',
                                xl: '170',
                            }}
                        >
                            <Image objectFit="cover" src={imgSecondEvo}></Image>
                        </Circle>
                        <Heading as="h3" size="lg">
                            <Link href={`${nameSecondEvo}`}>
                                {nameSecondEvo}
                            </Link>
                        </Heading>
                    </VStack>
                </>
            ) : (
                <Heading size="xl">Este pokemon não evolui</Heading>
            )}
            {nameLastEvo && (
                <VStack spacing="5px">
                    <Circle
                        border="5px solid"
                        bg="gray.400"
                        size={{ base: '60px', md: '150px', xl: '170' }}
                    >
                        <Image objectFit="cover" src={imgLastEvo}></Image>
                    </Circle>
                    <Heading as="h3" size="lg">
                        <Link href={`${nameLastEvo}`}>{nameLastEvo}</Link>
                    </Heading>
                </VStack>
            )}
        </>
    );
}

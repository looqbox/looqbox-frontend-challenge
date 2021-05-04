import { TabPanel, HStack, Heading, Text, Progress } from '@chakra-ui/react';
import React from 'react';
import { FaVenus, FaMars } from 'react-icons/fa';

export default function TabInfoStats({ pokemonInfo}) {
    return (
        <>
            <HStack spacing="15px" mt="1%">
                <Text color="gray.400">HP</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.stats[0].base_stat}
                </Text>
                <Progress
                    value={pokemonInfo.stats[0].base_stat}
                    size="sm"
                    max={300}
                    w="80%"
                />
            </HStack>

            <HStack spacing="15px" mt="5%">
                <Text color="gray.400">ATTK</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.stats[1].base_stat}
                </Text>
                <Progress
                    value={pokemonInfo.stats[1].base_stat}
                    size="sm"
                    max={300}
                    w="80%"
                />
            </HStack>

            <HStack spacing="15px" mt="5%">
                <Text color="gray.400">DEFF</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.stats[2].base_stat}
                </Text>
                <Progress
                    value={pokemonInfo.stats[2].base_stat}
                    size="sm"
                    max={300}
                    w="80%"
                />
            </HStack>

            <HStack spacing="15px" mt="5%">
                <Text color="gray.400">SATK</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.stats[3].base_stat}
                </Text>
                <Progress
                    value={pokemonInfo.stats[3].base_stat}
                    size="sm"
                    max={300}
                    w="80%"
                />
            </HStack>

            <HStack spacing="15px" mt="5%">
                <Text color="gray.400">SDEF</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.stats[4].base_stat}
                </Text>
                <Progress
                    value={pokemonInfo.stats[4].base_stat}
                    size="sm"
                    max={300}
                    w="80%"
                />
            </HStack>

            <HStack spacing="15px" mt="5%">
                <Text color="gray.400">SPEED</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.stats[5].base_stat}
                </Text>
                <Progress
                    value={pokemonInfo.stats[5].base_stat}
                    size="sm"
                    max={300}
                    w="80%"
                />
            </HStack>
        </>
    );
}

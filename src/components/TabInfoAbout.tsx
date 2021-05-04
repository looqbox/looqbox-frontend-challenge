import { TabPanel, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { FaVenus, FaMars } from 'react-icons/fa';

export default function TabInfoAbout({ pokemonInfo, eggInfo }) {
    return (
        <>
    
            <HStack spacing="15px" mb="5%">
                <Text color="gray.400">Base Experience</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.base_experience}
                </Text>
            </HStack>

            <HStack spacing="15px" mb="5%">
                <Text color="gray.400">Height</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.height} dm
                </Text>
            </HStack>

            <HStack spacing="15px" mb="5%">
                <Text color="gray.400">Weight</Text>
                <Text fontWeight="bold" color="black">
                    {pokemonInfo.weight} hg
                </Text>
            </HStack>

            <HStack spacing="15px" mb="5%">
                <Text color="gray.400">Abilities</Text>

                {pokemonInfo.abilities.map((abilitie, index) => {
                    const name = abilitie.ability.name;

                    return (
                        <Text fontWeight="bold" color="black" key={index}>
                            {name}
                        </Text>
                    );
                })}
            </HStack>

            <Heading color="black" as="h3" size="md" mb="3%">
                Breeding
            </Heading>

            <HStack spacing="5px" mb="3%">
                <Text color="gray.400">Genders</Text>
                <FaVenus
                    size={20}
                    color="pink"
                    style={{ marginLeft: '10px' }}
                />
                <Text color="black" fontWeight="bold">
                    8%
                </Text>
                <FaMars size={20} color="blue" style={{ marginLeft: '15px' }} />
                <Text color="black" fontWeight="bold">
                    92%
                </Text>
            </HStack>

            <HStack spacing="15px">
                <Text color="gray.400">Egg Group</Text>
                <Text color="black" fontWeight="bold">
                    {eggInfo}
                </Text>
            </HStack>
        </>
    );
}

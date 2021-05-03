import {
    Tabs,
    TabList,
    Tab,
    Heading,
    TabPanels,
    TabPanel,
    Text,
    HStack,
    Progress,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { api } from '../api/api';

export default function TabInfo({ pokemonInfo }) {
    async function name() {
        const response = await api.get(`evolution-chain/${pokemonInfo.id}`);
    }
    useEffect(() => {
        async function Load() {
            await name();
        }
        Load();
    }, []);

    return (
        <Tabs isFitted w="100%" variant="enclosed">
            <TabList>
                <Tab>
                    <Heading as="h4" fontSize="lg" color="black">
                        About
                    </Heading>
                </Tab>
                <Tab>
                    <Heading as="h4" fontSize="lg" color="black">
                        Stats
                    </Heading>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel
                    display="flex"
                    justifyContent="start"
                    flexDirection="column"
                >
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
                                <Text
                                    fontWeight="bold"
                                    color="black"
                                    key={index}
                                >
                                    {name}
                                </Text>
                            );
                        })}
                    </HStack>
                </TabPanel>

                <TabPanel
                    display="flex"
                    justifyContent="start"
                    flexDirection="column"
                >
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
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

import React, { useEffect, useState } from 'react';
import {
    Tabs,
    TabList,
    Tab,
    Heading,
    TabPanels,
    TabPanel,
} from '@chakra-ui/react';
import { api } from '../api/api';
import axios from 'axios';
import TabInfoAbout from './TabInfoAbout';
import TabInfoStats from './TabInfoStats';
import TabInfoEvolutions from './TabInfoEvolutions';

export default function TabInfo({ pokemonInfo }) {
    const [egg, setEgg] = useState('');

    async function EggGroup() {
        const response = await api.get(`pokemon/${pokemonInfo.name}`);
        const {
            data: {
                species: { url },
            },
        } = response;
        const EggData = await axios.get(url);
        const EggGroupName = EggData.data.egg_groups[0];
        setEgg(EggGroupName.name);
    }

    useEffect(() => {
        async function Load() {
            await EggGroup();
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

                <Tab>
                    <Heading as="h4" fontSize="lg" color="black">
                        Evolutions
                    </Heading>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel
                    display="flex"
                    justifyContent="start"
                    flexDirection="column"
                    mt="3%"
                    alignSelf="center"
                >
                    <TabInfoAbout pokemonInfo={pokemonInfo} eggInfo={egg} />
                </TabPanel>
                <TabPanel
                    display="flex"
                    justifyContent="start"
                    flexDirection="column"
                    mt="5%"
                >
                    <TabInfoStats pokemonInfo={pokemonInfo} />
                </TabPanel>

                <TabPanel
                    display="flex"
                    justifyContent={{
                        base: 'space-between',
                        md: 'space-around',
                    }}
                    flexDirection={{ base: 'column', md: 'row' }}
                    alignItems="center"
                    color="black"
                    mt={{ base: '2%', md: '8%', xl: '12%' }}
                >
                    <TabInfoEvolutions pokemonInfo={pokemonInfo} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

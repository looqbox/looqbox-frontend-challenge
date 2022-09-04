import React from 'react';

import { Container, Photos } from './styles';

interface Props {
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
            dream_world: {
                front_default: string;
                front_female: string;
            };
            home: {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            }
            "official-artwork": {
                front_default: string;
            };
        };
    } | undefined;
}

const Gallery: React.FC<Props> = ({sprites}) => {
    return (
        <Container>
            <h2>Gallery</h2>

            <Photos>
                {/* Default sprites */}
                {sprites?.front_default ?
                    <img
                        src={sprites?.front_default}
                        alt="Front Default"
                        title='Front Default'
                    />
                    : <React.Fragment />}

                {sprites?.back_default ?
                    <img
                        src={sprites?.back_default}
                        alt="Back Default"
                        title="Back Default"
                    />
                    : <React.Fragment />}


                {/* Default female sprites */}
                {sprites?.front_female ?
                    <img
                        src={sprites?.front_female}
                        alt="Front Default Female"
                        title="Front Default Female"
                    />
                    : <React.Fragment />}

                {sprites?.back_female ?
                    <img
                        src={sprites?.back_female}
                        alt="Back Default Female"
                        title="Back Default Female"
                    />
                    : <React.Fragment />}


                {/* Shiny sprites */}
                {sprites?.front_shiny ?
                    <img
                        src={sprites?.front_shiny}
                        alt="Front Shiny"
                        title="Front Shiny"
                    />
                    : <React.Fragment />}

                {sprites?.back_shiny ?
                    <img
                        src={sprites?.back_shiny}
                        alt="Back Shiny"
                        title="Back Shiny"
                    />
                    : <React.Fragment />}


                {/* Shiny female sprites */}
                {sprites?.front_shiny_female ?
                    <img
                        src={sprites?.front_shiny_female}
                        alt="Front Shiny Female"
                        title="Front Shiny Female"
                    />
                    : <React.Fragment />}

                {sprites?.back_shiny_female ?
                    <img
                        src={sprites?.back_shiny_female}
                        alt="Back Shiny Female"
                        title="Back Shiny Female"
                    />
                    : <React.Fragment />}


                {/* Dream world sprite */}
                {sprites?.other.dream_world.front_default ?
                    <img
                        src={sprites?.other.dream_world.front_default}
                        alt="Dream World Default"
                        title="Dream World Default"
                    />
                    : <React.Fragment />}


                {/* Dream world female sprite */}
                {sprites?.other.dream_world.front_female ?
                    <img
                        src={sprites?.other.dream_world.front_female}
                        alt="Dream World Female"
                        title="Dream World Female"
                    />
                    : <React.Fragment />}


                {/* Home default sprite */}
                {sprites?.other.home.front_default ?
                    <img
                        src={sprites?.other.home.front_default}
                        alt="Home Default"
                        title="Home Default"
                    />
                    : <React.Fragment />}


                {/* Home default female sprite */}
                {sprites?.other.home.front_female ?
                    <img
                        src={sprites?.other.home.front_female}
                        alt="Home Default Female"
                        title="Home Default Female"
                    />
                    : <React.Fragment />}


                {/* Home shiny sprite */}
                {sprites?.other.home.front_shiny ?
                    <img
                        src={sprites?.other.home.front_shiny}
                        alt="Home Shiny"
                        title="Home Shiny"
                    />
                    : <React.Fragment />}


                {/* Home shiny female sprite */}
                {sprites?.other.home.front_shiny_female ?
                    <img
                        src={sprites?.other.home.front_shiny_female}
                        alt="Home Shiny Female"
                        title="Home Shiny Female"
                    />
                    : <React.Fragment />}

            </Photos>
        </Container>
    );
}

export default Gallery;
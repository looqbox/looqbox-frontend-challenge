import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonData from '../../@types/PokemonData';

import pokeAPI from '../../services/api';

import Loading from '../../elements/Loading/Loading';
import MainContent from './components/MainContent/MainContent';
import Stats from './components/Stats/Stats';

import { 
    Container,
    Main,
    Section
} from './styles';
import Gallery from './components/Gallery/Gallery';

const Details:React.FC = () => {
    const {id} = useParams<string>();

    const [details, setDetails] = useState<PokemonData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pokeAPI.get(`pokemon/${id}`).then(({data}) => {
            setDetails(data);
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return(
        <>
            {loading ? <Loading /> : <React.Fragment/>}
            <Container>
                <Main className={`background-${details?.types[0].type.name}`}>
                    <MainContent 
                        id={details?.id} 
                        name={details?.name}
                        types={details?.types}
                        photo={details?.sprites.other['official-artwork'].front_default}
                        height={details?.height}
                        weight={details?.weight}
                        base_xp={details?.base_experience}
                        abilities={details?.abilities}
                    />
                </Main>

                <Section>
                    
                    <Stats stats={details?.stats}/>

                    <Gallery 
                        sprites={details?.sprites}
                    />
                </Section>

            </Container>
        </>
    );
}

export default Details;
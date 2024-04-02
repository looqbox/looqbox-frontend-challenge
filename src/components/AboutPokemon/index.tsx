import React from 'react';
import {
    AboutInfoSection,
    Heading,
    AboutTable,
    TableKey,
    TableValue,
} from './styles';
import badge1 from '../../assets/badge-1.png';
import badge2 from '../../assets/badge-2.png';
import badge3 from '../../assets/badge-3.png';
import badge4 from '../../assets/badge-4.png';
import badge5 from '../../assets/badge-5.png';
import badge6 from '../../assets/badge-6.png';
import badge7 from '../../assets/badge-7.png';
import badge8 from '../../assets/badge-8.png';
import badge9 from '../../assets/badge-9.png';
import badge10 from '../../assets/badge-10.png';
import badge11 from '../../assets/badge-11.png';
import badge12 from '../../assets/badge-12.png';
import badge13 from '../../assets/badge-13.png';
import badge14 from '../../assets/badge-14.png';
import badge15 from '../../assets/badge-15.png';
import badge16 from '../../assets/badge-16.png';
import badge17 from '../../assets/badge-17.png';
import badge18 from '../../assets/badge-18.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/index';
import { IPokemonDetailsState } from '../../interfaces/pokemon-types';
import { getAbilitiesListByPokemon, getTypesListByPokemon } from '../../services/pokemon-formatter'

const AboutPokemon: React.FC = () => {
    const pokemonDetails = useSelector((state: RootState) => (state.pokemonDetails as IPokemonDetailsState).pokemon);

    return (
        <AboutInfoSection>
            <Heading>Pokémon Data</Heading>
            <AboutTable>
                <TableKey>Height</TableKey>
                <TableValue>{pokemonDetails?.height} cm</TableValue>
                <TableKey>Weight</TableKey>
                <TableValue>{pokemonDetails?.weight} g</TableValue>
                <TableKey>Abilities</TableKey>
                <TableValue>{getAbilitiesListByPokemon(pokemonDetails).join(", ")}</TableValue>
                <TableKey>Type</TableKey>                
                <TableValue>
                    <div className="pokemon-types">
                        {getTypesListByPokemon(pokemonDetails).map((value: any, index: number) => (
                            <div key={index}>
                                {value === 'normal' && <img src={badge8} alt="" />}
                                {value === 'fighting' && <img src={badge9} alt="" />}
                                {value === 'flying' && <img src={badge2} alt="" />}
                                {value === 'poison' && <img src={badge10} alt="" />}
                                {value === 'ground' && <img src={badge11} alt="" />}
                                {value === 'rock' && <img src={badge13} alt="" />}
                                {value === 'bug' && <img src={badge12} alt="" />}
                                {value === 'ghost' && <img src={badge14} alt="" />}
                                {value === 'steel' &&  <img src={badge17} alt="" />}
                                {value === 'fire' && <img src={badge1} alt="" />}
                                {value === 'water' && <img src={badge5} alt="" />}
                                {value === 'grass' && <img src={badge6} alt="" />}
                                {value === 'electric' && <img src={badge7} alt="" />}
                                {value === 'psychic' && <img src={badge4} alt="" />}
                                {value === 'ice' && <img src={badge3} alt="" />}
                                {value === 'dragon' && <img src={badge15} alt="" />}
                                {value === 'dark' && <img src={badge16} alt="" />}
                                {value === 'fairy' && <img src={badge18} alt="" />}
                                {value === 'unknown' && <img src={badge8} alt="" />}
                                {value === 'shadow' && <img src={badge8} alt="" />}
                            </div>
                        ))}
                    </div>
                </TableValue>
            </AboutTable>
        </AboutInfoSection>
    );
}

export default AboutPokemon;

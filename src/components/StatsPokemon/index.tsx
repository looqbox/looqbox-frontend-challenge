import React from 'react';
import {
    StyledSection,
    StyledH4,
    StyledContent,
} from './styles';
import { Flex, Progress } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/index';
import { IPokemonDetailsState } from '../../interfaces/pokemon-types';
import { getStatsListByPokemon } from '../../services/pokemon-formatter'

const StatsPokemon: React.FC = () => {
    const pokemonDetails = useSelector((state: RootState) => (state.pokemonDetails as IPokemonDetailsState).pokemon);

    return (
        <StyledSection className="stats-info">
            <StyledH4>Base Stats</StyledH4>
            <div className="stats-progress">
                <Flex gap="small" vertical>
                {getStatsListByPokemon(pokemonDetails).map((item: any) => (
                    <StyledContent>
                        <div>{item["name"]}</div>
                        <Progress percent={item["value"]} steps={7} showInfo={false} status="active"/>
                    </StyledContent>
                ))}
                </Flex>
            </div>
        </StyledSection>
    );
}

export default StatsPokemon;

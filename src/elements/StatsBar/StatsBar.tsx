import React from 'react';

import { Bar, StatName, StatValue, StatBar } from './styles';

interface Props {
    stat_name: string;
    value: number;
}
const StatsBar:React.FC<Props> = ({stat_name, value}) => {
    return(
        <>
            <StatName>
                <h3>{(stat_name == "special-attack") ? "sp. atk" : (stat_name == "special-defense") ? "sp. def" : stat_name}</h3>
            </StatName>
            <StatValue>
                <h3>{value}</h3>
            </StatValue>
            <StatBar>
                <Bar 
                    now={value}
                    max={200}
                    bsPrefix={stat_name}
                />
            </StatBar>
        </>
    );
}

export default StatsBar;
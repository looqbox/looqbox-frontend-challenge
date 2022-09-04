import React from 'react';

import StatsBar from '../../../../elements/StatsBar/StatsBar';

import { Container } from './styles';

interface Props {
    stats: [
        {
            base_stat: number;
            stat: {
                name: string;
            };
        }
    ] | undefined;
}

const Stats:React.FC<Props> = ({stats}) => {
    return(
        <Container>
            <h2>Stats</h2>

            <table>
                <tbody>
                    {stats?.map((stat) => (
                        <tr key={stat.stat.name}>
                            <StatsBar key={stat.stat.name} stat_name={stat.stat.name} value={stat.base_stat} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

export default Stats;
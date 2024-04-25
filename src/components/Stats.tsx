import { Flex } from 'antd';
import { PokeAPI } from 'pokeapi-types';
import React from 'react';
import ProgressBar from './ProgressBar';

type StatsProps = {
  stats: PokeAPI.PokemonStat[];
  color: string;
};

const parseStatName = (stat: string) => stat.replace('-', ' ');

const Stats: React.FC<StatsProps> = ({ stats, color }) => {
  return (
    <Flex className="flex-col gap-3 w-full">
      {stats.map((stat) => (
        <div
          key={stat.stat.name}
          className="flex flex-1 items-center gap-4 max-[550px]:gap-2 max-[550px]:flex-col max-[550px]:items-stretch"
        >
          <div className="flex flex-row gap-10 justify-between">
            <h3 className="capitalize min-w-36 text-lg max-[550px]:min-w-0 max-[550px]:flex-1 max-[550px]:gap-1 max-md:text-base">
              {parseStatName(stat.stat.name)}
            </h3>
            <span className="text-lg">{stat.base_stat}</span>
          </div>
          <ProgressBar value={stat.base_stat} color={color} />
        </div>
      ))}
    </Flex>
  );
};

export default Stats;

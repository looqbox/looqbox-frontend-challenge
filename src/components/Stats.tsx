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
  let maxValue = 0;
  stats.forEach((stat) => {
    if (stat.base_stat > maxValue) {
      maxValue = stat.base_stat;
    }
  });

  return (
    <Flex className="flex-col gap-3 w-full">
      {stats.map((stat) => (
        <div
          key={stat.stat.name}
          className="flex flex-1 items-center gap-4 max-[550px]:gap-2 max-[550px]:flex-col max-[550px]:items-stretch"
        >
          <div className="flex flex-row gap-10 justify-between min-w-52 max-[550px]:min-w-0">
            <h3 className="capitalize text-lg max-[550px]:flex-1 max-[550px]:gap-1 max-md:text-base">
              {parseStatName(stat.stat.name)}
            </h3>
            <span className="text-lg">{stat.base_stat}</span>
          </div>
          <ProgressBar
            maxValue={maxValue}
            value={stat.base_stat}
            color={color === '#000000' ? '#f2f2f2' : color}
          />
        </div>
      ))}
    </Flex>
  );
};

export default Stats;

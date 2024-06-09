import { PokeAPIStat } from "@/@types/Pokemon";
import { Avatar, Flex, Tooltip, Typography } from "antd";

interface PokemonStatsProps {
  stats: Array<PokeAPIStat>;
}

type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

type StatsMap = {
  [key in StatName]: string;
};

const STATS_IDS: StatsMap = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: "SPD",
};

const STATS_COLORS: StatsMap = {
  hp: "#df2140",
  attack: "#fa994e",
  defense: "#fddc4e",
  "special-attack": "#85ddff",
  "special-defense": "#a8f083",
  speed: "#fa94a8",
};

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <Flex style={{ marginTop: 16, width: "100%" }} justify="space-evenly">
      {stats.map(({ base_stat, stat }, index) => {
        const statName = stat.name as keyof StatsMap;
        return (
          <Flex vertical align="center" key={index}>
            <Tooltip title={statName.toUpperCase()}>
              <Avatar style={{ backgroundColor: STATS_COLORS[statName] }}>
                {STATS_IDS[statName]}
              </Avatar>
            </Tooltip>
            <Typography.Text>{base_stat}</Typography.Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default PokemonStats;

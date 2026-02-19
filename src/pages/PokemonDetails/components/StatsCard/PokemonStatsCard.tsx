import { Card } from "antd";
import { Pie } from "@ant-design/charts";
import type { Pokemon } from "../../../../store/pokemon/types";
import styles from "./PokemonStatsCard.module.scss";

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SP. ATK",
  "special-defense": "SP. DEF",
  speed: "SPD",
};

type Props = {
  pokemon: Pokemon;
};

export function PokemonStatsCard({ pokemon }: Props) {
  const statsPieData = pokemon.stats.map((s) => ({
    type: STAT_LABELS[s.stat.name] ?? s.stat.name,
    value: s.base_stat,
  }));

  const statsPieConfig = {
    data: statsPieData,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    innerRadius: 0.6,
    height: 240,
    legend: {
      position: "bottom",
    },
    label: {
      text: (datum: { value: number }) => `${datum.value}`,
      position: "outside",
      style: {
        fontSize: 11,
        fontWeight: 700,
      },
    },
    tooltip: {
      items: [
        (datum: { type: string; value: number }) => ({
          name: datum.type,
          value: datum.value,
        }),
      ],
    },
    interactions: [{ type: "element-active" }],
  };

  return (
    <Card className={styles.pokemonInfoCard} title="Stats">
      <Pie {...statsPieConfig} />
    </Card>
  );
}

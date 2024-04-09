import { Slider } from "antd";

import { Stat } from "@/@types/pokemon";

import { PokemonSpecieColor } from "@/@types/theme";
import * as S from "./styles";

const labels = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

type StatsProps = {
  stats: Stat[];
  color: PokemonSpecieColor;
};

export const Stats = ({ stats, color }: StatsProps) => {
  const total = stats.reduce(
    (sum: number, current: Stat) => sum + current.base_stat,
    0,
  );

  return (
    <S.ModalStatsContainer>
      {labels.map((label, i) => (
        <S.ModalStats key={label}>
          <span>{label}</span>
          <strong>{stats[i].base_stat}</strong>
          <Slider
            defaultValue={stats[i].base_stat}
            max={100}
            disabled
            styles={{
              tracks: {
                background: color.dark,
              },
            }}
          />
        </S.ModalStats>
      ))}

      <S.ModalStats key="total">
        <span>Total</span>
        <strong>{total}</strong>
        <Slider defaultValue={total} max={600} disabled />
      </S.ModalStats>
    </S.ModalStatsContainer>
  );
};

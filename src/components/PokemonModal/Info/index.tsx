import { Ability2 } from "@/@types/pokemon";
import * as S from "./styles";

type InfoProps = {
  height: number;
  weight: number;
  xp: number;
  abilities: Ability2[];
};

export const Info = ({ height, weight, abilities, xp }: InfoProps) => {
  const infos = [
    {
      label: "xp",
      value: xp,
      unit: "",
    },
    {
      label: "height",
      value: height / 10,
      unit: "m",
    },
    {
      label: "weight",
      value: weight / 10,
      unit: "kg",
    },
    {
      label: "abilities",
      value: abilities.map((ability) => ability.ability.name).join(", "),
      unit: "",
    },
  ];
  return (
    <S.ModalPokemonInfoContainer>
      {infos.map((info) => (
        <S.ModalPokemonInfo key={info.label}>
          <span>{info.label}</span>
          <strong>
            {info.value}
            {info.unit}
          </strong>
        </S.ModalPokemonInfo>
      ))}
    </S.ModalPokemonInfoContainer>
  );
};

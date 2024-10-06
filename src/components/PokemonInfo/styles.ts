import { Carousel, Drawer } from "antd";
import styled from "styled-components";

export const TypesColorMap = {
  bug: "#A7B723",
  dark: "#75574C",
  dragon: "#7037FF",
  electric: "#F9CF30",
  fairy: "#E69EAC",
  fighting: "#C12239",
  fire: "#F57D31",
  flying: "#A891EC",
  ghost: "#70559B",
  normal: "#AAA67F",
  grass: "#74CB48",
  ground: "#DEC16B",
  ice: "#9AD6DF",
  poison: "#A43E9E",
  psychic: "#FB5584",
  rock: "#B69E31",
  steel: "#B7B9D0",
  water: "#6493EB",
};

export const DrawerContainer = styled(Drawer)`
  & .ant-drawer-header {
    text-transform: capitalize;
    background-color: ${(props) => {
      //@ts-expect-error This prop is receiving the correct key type
      return TypesColorMap[props["aria-describedby"]];
    }};
    color: ${(props) => props.theme.white};
  }

  & .ant-drawer-body {
    background-color: ${(props) => {
      return `${
        //@ts-expect-error This prop is receiving the correct key type
        TypesColorMap[props["aria-describedby"]] ?? props.theme.background
      }88`;
    }};
  }
`;

export const BaseInfoContainer = styled.div`
  width: 100%;
  height: 10rem;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 1rem;
  border-radius: 8px;
`;

export const ImageCarouselContainer = styled(Carousel)`
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;

  & img {
    width: 100%;
    height: 100%;
  }

  & button::after,
  & button::before {
    color: ${(props) => props.theme.black};
  }
`;

export const BaseStatsContainer = styled(Container)`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & section:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  & section:nth-child(2) {
    display: flex;
    gap: 0.25rem;
  }
`;

export interface TypeProps {
  type: keyof typeof TypesColorMap | undefined;
}

export const TypeTag = styled.span<TypeProps>`
  background-color: ${(props) =>
    props.type ? TypesColorMap[props.type] : props.theme.black};
  max-width: min-content;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;

  &:before {
    color: ${(props) => props.theme.white};
    content: "${(props) => props.type}";
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const TitleText = styled.h3<TypeProps>`
  color: ${(props) =>
    props.type ? TypesColorMap[props.type] : props.theme.black};
  font-weight: bolder;
`;

export const ChartContainer = styled(Container)`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const AbilitiesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const Ability = styled.div`
  margin-bottom: 0.5rem;

  & span:nth-child(1) {
    text-transform: capitalize;
    font-size: medium;
    display: block;
    font-weight: 600;
  }
`;

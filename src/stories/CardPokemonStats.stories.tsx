import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import CardPokemonStats from "../components/CardPokemonStats";

const meta = {
  title: "Details/CardPokemonStats",
  component: CardPokemonStats,
  decorators: [withRouter],
  args: {
    stats: [
      { stat: { name: "hp" }, base_stat: 45 },
      { stat: { name: "attack" }, base_stat: 49 },
      { stat: { name: "defense" }, base_stat: 49 },
      { stat: { name: "special-attack" }, base_stat: 65 },
      { stat: { name: "special-defense" }, base_stat: 65 },
      { stat: { name: "speed" }, base_stat: 45 },
    ],
  },
} as Meta<typeof CardPokemonStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mini: Story = {
  args: {
    mini: true,
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import CardPokemonAbilities from "../components/CardPokemonAbilities";

const meta = {
  title: "Details/CardPokemonAbilities",
  component: CardPokemonAbilities,
  decorators: [withRouter],
  args: {
    abilities: [
      { ability: { name: "limber" } },
      { ability: { name: "imposter" } },
      { ability: { name: "overgrow" } },
      { ability: { name: "chlorophyll" } },
    ],
  },
} as Meta<typeof CardPokemonAbilities>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

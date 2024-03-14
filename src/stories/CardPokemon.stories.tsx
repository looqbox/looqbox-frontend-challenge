import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { withRouter } from "storybook-addon-remix-react-router";
import CardPokemon from "../components/CardPokemon";

const meta = {
  title: "Shared/CardPokemon",
  render: (props) => (
    <MemoryRouter initialEntries={["/"]}>
      <CardPokemon
        name={props.name}
        src={props.src}
        tags={props.tags}
        linkTo={props.linkTo}
      />
    </MemoryRouter>
  ),
  decorators: [withRouter],
  args: {
    name: "bulbasaur",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
} as Meta<typeof CardPokemon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCard: Story = {
  args: {
    linkTo: "/details/bulbasaur",
  },
};

export const TaggedCard: Story = {
  args: {
    tags: [
      { type: { name: "grass", url: "" } },
      { type: { name: "poison", url: "" } },
    ],
  },
};

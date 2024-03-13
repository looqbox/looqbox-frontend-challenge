import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { withRouter } from "storybook-addon-remix-react-router";
import ListPokemon from "../components/ListPokemon";

const meta = {
  title: "Home/ListPokemon",
  render: (props) => (
    <MemoryRouter initialEntries={["/"]}>
      <ListPokemon data={props.data} loading={props.loading} />
    </MemoryRouter>
  ),
  decorators: [withRouter],
} as Meta<typeof ListPokemon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
      },
      {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      },
      {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/",
      },
      {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/",
      },
      {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/",
      },
      {
        name: "metapod",
        url: "https://pokeapi.co/api/v2/pokemon/11/",
      },
    ],
    loading: false,
  },
};

export const NoData: Story = {
  args: {
    data: [],
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

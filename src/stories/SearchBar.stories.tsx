import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import SearchBar from "../components/SearchBar";

const meta = {
  title: "Shared/SearchBar",
  component: SearchBar,
  decorators: [withRouter],
  args: {
    placeholder: "Search...",
    variant: "outlined",
  },
  argTypes: {
    variant: {
      options: ["outlined", "filled", "bordeless"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

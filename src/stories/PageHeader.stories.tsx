import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import PageHeader from "../components/PageHeader";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Shared/PageHeader",
  render: () => (
    <BrowserRouter>
      <PageHeader />
    </BrowserRouter>
  ),
  decorators: [withRouter],
  parameters: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

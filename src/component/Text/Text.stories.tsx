
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: "Default Text",
    color: "black",
    fontSize: "16px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: "Disabled Text",
    color: "black",
    fontSize: "16px",
    disabled: true,
  },
};
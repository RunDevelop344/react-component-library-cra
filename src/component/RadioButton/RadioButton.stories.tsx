import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Option 1",
    name: "example",
    value: "1",
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Selected Option",
    name: "example",
    value: "1",
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    name: "example",
    value: "1",
    disabled: true,
  },
};
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    disabled: { control: "boolean" },
    width: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    content: "This is some content inside the card.",
    footer: "Card Footer",
    imageSrc: "https://picsum.photos/300/180",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    content: "This card is disabled and not clickable.",
    disabled: true,
  },
};

export const Clickable: Story = {
  args: {
    title: "Clickable Card",
    content: "Click me to trigger action",
    onClick: () => alert("Card clicked"),
  },
};
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Img from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  argTypes: {
    disabled: { control: "boolean" },
    borderRadius: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

const sampleSrc =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d";

export const Default: Story = {
  args: {
    src: sampleSrc,
    alt: "Sample image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: sampleSrc,
    alt: "Disabled image",
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    src: sampleSrc,
    alt: "Rounded image",
    borderRadius: "50%",
    width: "150px",
    height: "150px",
  },
};
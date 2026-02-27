import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableHeader from "./TableHeader";

const meta: Meta<typeof TableHeader> = {
  title: "Components/TableHeader",
  component: TableHeader,
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: { children: "Header" },
};
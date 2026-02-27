import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Table from "./Table";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableHeader from "./TableHeader";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: { disabled: false },
  render: (args) => (
    <Table {...args}>
      <thead>
        <TableRow>
          <TableHeader>Header 1</TableHeader>
          <TableHeader>Header 2</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
};
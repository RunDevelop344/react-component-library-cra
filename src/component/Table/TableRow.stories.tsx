import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

const meta: Meta<typeof TableRow> = {
  title: "Components/TableRow",
  component: TableRow,
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  render: () => (
    <table>
      <tbody>
        <TableRow>
          <TableCell>Row Cell</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
};
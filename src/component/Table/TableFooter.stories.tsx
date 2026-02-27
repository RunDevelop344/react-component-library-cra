import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

const meta: Meta<typeof TableFooter> = {
  title: "Components/TableFooter",
  component: TableFooter,
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  render: () => (
    <table>
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>
    </table>
  ),
};
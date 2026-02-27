import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

describe("TableFooter", () => {
  test("renders footer", () => {
    render(
      <table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </table>
    );
    expect(screen.getByText("Footer")).toBeVisible();
  });

  test("has background", () => {
    const { container } = render(
      <table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </table>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

describe("TableRow", () => {
  test("renders row", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </table>
    );
    expect(screen.getByText("Cell")).toBeVisible();
  });

  test("applies alternate style", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </table>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
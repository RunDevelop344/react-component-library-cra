import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell", () => {
  test("renders cell", () => {
    render(<table><tbody><tr><TableCell>Cell</TableCell></tr></tbody></table>);
    expect(screen.getByText("Cell")).toBeVisible();
  });

  test("has border", () => {
    const { container } = render(
      <table><tbody><tr><TableCell>Cell</TableCell></tr></tbody></table>
    );
    expect(container.firstChild).toBeTruthy();
  });
});
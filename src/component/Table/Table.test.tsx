import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  test("renders table", () => {
    render(<Table>Content</Table>);
    expect(screen.getByText("Content")).toBeVisible();
  });

  test("applies disabled style", () => {
    const { container } = render(<Table disabled>Content</Table>);
    expect(container.firstChild).toHaveStyle("opacity: 0.6");
  });
});
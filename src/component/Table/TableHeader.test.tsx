import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader", () => {
  test("renders header", () => {
    render(<TableHeader>Header</TableHeader>);
    expect(screen.getByText("Header")).toBeVisible();
  });

  test("has correct background", () => {
    const { container } = render(<TableHeader>Header</TableHeader>);
    expect(container.firstChild).toHaveStyle("background-color: #f5f5f5");
  });
});
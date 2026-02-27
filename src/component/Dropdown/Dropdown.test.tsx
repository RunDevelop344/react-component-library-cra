import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

const options = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
];

describe("Dropdown", () => {
  test("renders dropdown", () => {
    render(<Dropdown options={options} />);
    expect(screen.getByTestId("dropdown")).toBeVisible();
  });

  test("disabled state changes style", () => {
    render(<Dropdown options={options} disabled />);
    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toBeDisabled();
  });
});
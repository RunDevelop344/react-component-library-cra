import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

describe("Label Component", () => {
  test("renders label text", () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText("Test Label")).toBeVisible();
  });

  test("disabled label is greyed out", () => {
    render(<Label text="Disabled Label" disabled />);
    const label = screen.getByText("Disabled Label");

    expect(label).toHaveStyle("color: grey");
    expect(label).toHaveStyle("cursor: not-allowed");
  });
});
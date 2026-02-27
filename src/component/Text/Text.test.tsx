// src/components/Text/Text.tests.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text Component", () => {
  test("renders text content", () => {
    render(<Text content="Test Text" />);
    expect(screen.getByText("Test Text")).toBeVisible();
  });

  test("disabled text is greyed out", () => {
    render(<Text content="Disabled Text" disabled />);
    const textElement = screen.getByText("Disabled Text");
    expect(textElement).toHaveStyle("color: grey");
    expect(textElement).toHaveStyle("cursor: not-allowed");
  });
});
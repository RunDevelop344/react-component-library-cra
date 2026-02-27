import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton", () => {
  test("renders radio button", () => {
    render(
      <RadioButton
        label="Test Radio"
        name="test"
        value="1"
      />
    );

    expect(screen.getByTestId("radio-button")).toBeVisible();
  });

  test("disabled radio button is not clickable", () => {
    render(
      <RadioButton
        label="Disabled Radio"
        name="test"
        value="1"
        disabled
      />
    );

    const radio = screen.getByTestId("radio-button");
    expect(radio).toBeDisabled();
  });
});
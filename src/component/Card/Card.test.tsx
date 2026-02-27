import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("renders card with title and content", () => {
    render(<Card title="Test Card" content="Card content" />);
    expect(screen.getByText("Test Card")).toBeVisible();
    expect(screen.getByText("Card content")).toBeVisible();
  });

  test("disabled card has reduced opacity and is not clickable", () => {
    const handleClick = jest.fn();
    render(<Card title="Disabled Card" disabled onClick={handleClick} />);
    const card = screen.getByTestId("card-component");
    expect(card).toHaveStyle("opacity: 0.6");
    fireEvent.click(card);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
import { render, screen } from "@testing-library/react";
import Img from "./Img";

const src =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d";

describe("Img", () => {
  test("renders image", () => {
    render(<Img src={src} alt="test image" />);
    expect(screen.getByTestId("img-component")).toBeVisible();
  });

  test("disabled image has reduced opacity", () => {
    render(<Img src={src} alt="disabled" disabled />);
    const img = screen.getByTestId("img-component");
    expect(img).toHaveStyle("opacity: 0.5");
  });
});
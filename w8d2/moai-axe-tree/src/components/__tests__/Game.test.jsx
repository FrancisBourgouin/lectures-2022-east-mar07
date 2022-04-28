import Game from "../Game";
import { render, fireEvent } from "@testing-library/react";

describe("Game component", () => {
  it("should toggle the cheating class when clicking on the robot", () => {
    const { getByText } = render(<Game />);

    const computer = getByText("🤖");

    expect(computer).toHaveClass("cheating");

    fireEvent.click(computer);

    expect(computer).not.toHaveClass("cheating");

    fireEvent.click(computer);

    expect(computer).toHaveClass("cheating");
  });
});

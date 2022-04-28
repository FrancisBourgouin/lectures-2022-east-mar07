import Computer from "../Computer";
import { render } from "@testing-library/react";

describe("Computer component state", () => {
  it("should have the class cheating when the computer is on", () => {
    // ...
    const { debug, getByText } = render(<Computer isOn />);

    const computer = getByText("🤖");

    expect(computer).toHaveClass("cheating");
    // debug();
  });
  it("should have the class cheating when the computer is off", () => {
    // ...
    const { debug, getByText } = render(<Computer />);

    const computer = getByText("🤖");

    expect(computer).not.toHaveClass("cheating");
  });
});

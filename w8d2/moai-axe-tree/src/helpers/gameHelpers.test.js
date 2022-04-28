import { generateRobotChoice, decideWinner } from "./gameHelpers";

describe("Tests for generateRobotChoice (cheating & not cheating)", () => {
  it("should pick randomly between moai axe tree if off", () => {
    const listOfChoices = ["🗿", "🪓", "🌳"];
    const playerChoice = "🗿";
    const isCheating = false;
    const generatedRandomNumber1 = 0; //Math.floor(Math.random() * 3);
    const generatedRandomNumber2 = 1; //Math.floor(Math.random() * 3);
    const generatedRandomNumber3 = 2; //Math.floor(Math.random() * 3);

    const result1 = generateRobotChoice(playerChoice, isCheating, generatedRandomNumber1);
    const result2 = generateRobotChoice(playerChoice, isCheating, generatedRandomNumber2);
    const result3 = generateRobotChoice(playerChoice, isCheating, generatedRandomNumber3);

    // expect(listOfChoices).toContain(result)
    expect(result1).toBe("🗿");
    expect(result2).toBe("🪓");
    expect(result3).toBe("🌳");
    // ...
  });
  it("should pick the opposite between moai axe tree if on", () => {
    const listOfChoices = ["🗿", "🪓", "🌳"];
    const isCheating = true;
    const playerChoice1 = "🗿";
    const playerChoice2 = "🪓";
    const playerChoice3 = "🌳";

    const result1 = generateRobotChoice(playerChoice1, isCheating);
    const result2 = generateRobotChoice(playerChoice2, isCheating);
    const result3 = generateRobotChoice(playerChoice3, isCheating);

    expect(result1).toBe("🌳");
    expect(result2).toBe("🗿");
    expect(result3).toBe("🪓");
  });
  it("should return null if given choice isn't valid", () => {
    const listOfChoices = ["🗿", "🪓", "🌳"];
    const playerChoice = "🐔";

    const result1 = generateRobotChoice(playerChoice, true);
    const result2 = generateRobotChoice(playerChoice, false, 2);

    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });
});

describe("Tests for decideWinner", () => {
  it("should pick the computer if the computer choice is the opposite of player", () => {
    const computerWinningPairs = [
      ["🪓", "🗿"],
      ["🗿", "🌳"],
      ["🌳", "🪓"],
    ];

    for (const pair of computerWinningPairs) {
      const result = decideWinner(pair[0], pair[1]);
      expect(result).toBe("computer");
    }

    // ...
  });
  it("should pick the player if the player choice is the opposite of computer", () => {
    const playerWinningPairs = [
      ["🗿", "🪓"],
      ["🌳", "🗿"],
      ["🪓", "🌳"],
    ];

    for (const pair of playerWinningPairs) {
      const result = decideWinner(pair[0], pair[1]);
      expect(result).toBe("player");
    }
  });
  it("should pick the no one if the player choice is the same as the computer", () => {
    const tiePairs = [
      ["🗿", "🗿"],
      ["🌳", "🌳"],
      ["🪓", "🪓"],
    ];

    for (const pair of tiePairs) {
      const result = decideWinner(pair[0], pair[1]);
      expect(result).toBe("tie");
    }
  });
  it("should return wth if computerChoice is null", () => {
    const result = decideWinner("🐔", null);
    expect(result).toBe("wth");
  });
});

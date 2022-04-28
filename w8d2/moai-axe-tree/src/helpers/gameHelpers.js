export const generateRobotChoice = (playerChoice, isCheating, randomNumber) => {
  const listOfChoices = ["🗿", "🪓", "🌳"];

  if (!listOfChoices.includes(playerChoice)) {
    return null;
  }

  if (!isCheating) {
    return listOfChoices[randomNumber];
  }
  const playerIndex = listOfChoices.indexOf(playerChoice);
  const computerIndex = (playerIndex + 2) % listOfChoices.length;

  return listOfChoices[computerIndex];
};

export const decideWinner = (playerChoice, computerChoice) => {
  const pairs = {
    "🪓": {
      "🪓": "tie",
      "🌳": "win",
      "🗿": "loss",
    },
    "🌳": {
      "🪓": "loss",
      "🌳": "tie",
      "🗿": "win",
    },
    "🗿": {
      "🪓": "win",
      "🌳": "loss",
      "🗿": "tie",
    },
  };

  if (!computerChoice) {
    return "wth";
  }

  if (pairs[playerChoice][computerChoice] === "win") {
    return "player";
  }

  if (pairs[playerChoice][computerChoice] === "tie") {
    return "tie";
  }

  if (pairs[playerChoice][computerChoice] === "loss") {
    return "computer";
  }
};

// 0 -> 2
// 1 -> 3
// 2 -> 4

//   0      1      2    3      4     5    6     7      8
// ["🗿", "🪓", "🌳","🗿", "🪓", "🌳","🗿", "🪓", "🌳","🗿", "🪓", "🌳","🗿", "🪓", "🌳","🗿", "🪓", "🌳",]

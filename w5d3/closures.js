const countdownSystem = (starterNumber) => {
  let currentNumber = starterNumber;

  const showCurrentNumber = () => {
    console.log(currentNumber);
  };

  const changeCurrentNumber = (newValue) => {
    currentNumber = newValue;
  };

  return { showCurrentNumber, changeCurrentNumber };
};

// const showCurrentNumberFive = countdownSystem(5);
// const showCurrentNumberTen = countdownSystem(10);

// showCurrentNumberFive();
// showCurrentNumberTen();

const { showCurrentNumber, changeCurrentNumber } = countdownSystem(10);
// const countdown = countdownSystem(10);

showCurrentNumber();
changeCurrentNumber(20);
showCurrentNumber();

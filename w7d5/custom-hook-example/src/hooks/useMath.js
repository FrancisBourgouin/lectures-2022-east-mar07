import { useEffect, useState } from "react";

export default function useMath(initialValue) {
  const [number, setNumber] = useState(5);

  const incrementByOne = () => setNumber(number + 1);
  const incrementByThree = () => {
    // setNumber(number + 1); //6
    // setNumber(number + 1); //6
    // setNumber(number + 1); //6

    setNumber((prev) => prev + 1); // prev is 5
    setNumber((prev) => prev + 1); // prev is 6
    setNumber((prev) => prev + 1); // prev is 7
  };
  const incrementByTen = () => setNumber(number + 10);

  const decrementByOne = () => setNumber(number - 1);
  const decrementByTen = () => setNumber(number - 10);

  const squareOfNumber = () => setNumber(number ** 2);
  const squareRootOfNumber = () => setNumber(number ** 0.5);

  return {
    number,
    incrementByOne,
    incrementByThree,
    incrementByTen,
    decrementByOne,
    decrementByTen,
    squareOfNumber,
    squareRootOfNumber,
  };
}

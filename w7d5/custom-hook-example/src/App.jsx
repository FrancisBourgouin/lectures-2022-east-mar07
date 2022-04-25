import "./App.css";
import useMath from "./hooks/useMath";

function App() {
  const {
    number,
    incrementByOne,
    incrementByTen,
    decrementByOne,
    decrementByTen,
    squareOfNumber,
    squareRootOfNumber,
    incrementByThree,
  } = useMath(5);

  return (
    <div className="App">
      <h1>Current value is {number}</h1>
      <button onClick={incrementByOne}>+1</button>
      <button onClick={incrementByThree}>+3</button>
      <button onClick={incrementByTen}>+10</button>
      <button onClick={decrementByOne}>-1</button>
      <button onClick={decrementByTen}>-10</button>
      <button onClick={squareOfNumber}>^2</button>
      <button onClick={squareRootOfNumber}>^1/2</button>
    </div>
  );
}

export default App;

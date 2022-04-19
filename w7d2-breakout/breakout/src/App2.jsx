import { useState } from "react";
import "./App.css";
import useNumbers from "./useNumbers";

const SomeComponent = (props) => {
  return (
    <section>
      <button onClick={props.change}>CHANGE THE STATE !</button>
    </section>
  );
};

function App() {
  const [number, randomChange, add, substract] = useNumbers(0);

  return (
    <div className="App">
      <SomeComponent change={randomChange} />
    </div>
  );
}

export default App;

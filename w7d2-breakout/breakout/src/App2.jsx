import { useState } from "react";
import "./App.css";

const SomeComponent = (props) => {
  return (
    <section>
      <button onClick={props.change}>CHANGE THE STATE !</button>
    </section>
  );
};

function App() {
  const [state, setState] = useState(0);

  const randomChange = () => setState(Math.random());
  return (
    <div className="App">
      <SomeComponent change={randomChange} />
    </div>
  );
}

export default App;
